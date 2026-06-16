# Tong hop du an Ngoi Nha Hung Hau (tai lieu phong van)

Ngay cap nhat: 2026-06-01
Pham vi: Web (Next.js) + API + Data layer, tap trung vao kien truc, SSR/FE, auth, hydration, performance, cache, query management.

---

## 1. Kien truc du an va to chuc architect

### 1.1 Kien truc tong the
Du an theo mo hinh monorepo nhe:
- Web app: Next.js 15 (`src/app`) + API routes (`src/pages/api`).
- Data layer: Sequelize + MSSQL (`src/models`, `src/migrations`).
- Business layer: service va controller tach rieng (`src/services`, `src/controllers`).
- Middleware layer: request tracing, auth, logging (`src/middlewares`).
- Mobile app Flutter trong thu muc `mobile/` (tach biet voi web).

### 1.2 To chuc theo tang
- Presentation/UI:
  - App Router pages o `src/app/**`.
  - Nhiu man hinh la Client Component (`'use client'`) de xu ly state/phien dang nhap/phien tac nghiep.
- API Layer:
  - Endpoint theo feature trong `src/pages/api/v1/**`.
  - Pattern handler rat ro: route -> controller -> service -> model.
- Domain/Business:
  - Rules nghiep vu nam trong service, vi du `evaluationSubmissionService`.
- Persistence:
  - Sequelize model + migration + index database.
- Cross-cutting:
  - `withRelationId`, `withAzureAuth`, `withApiLogger` trong middleware chain.
  - Audit/System log hooks o model layer.

### 1.3 Luong request API (dien hinh)
`API Route` -> `withRelationId` -> `withAzureAuth` -> `withApiLogger` -> `Controller` -> `Service` -> `Model/DB`.

### 1.4 Cac module chinh
- Users/Organization/Document.
- News/Posts/Comments/Reactions + Socket realtime.
- Evaluation (form mau, submission, review theo nhieu cap, export Excel/PDF).
- Registration Events (admin tao/cap nhat event, nguoi dung dang ky, theo doi danh sach da dang ky, quan ly submissions + export).
- Logging/Audit/Api logs.

---

## 2. Cong nghe va thu vien su dung

### 2.1 Core stack
- Next.js 15, React 19, TypeScript.
- TanStack Query (`@tanstack/react-query`) cho cache client-side, fetch state va invalidation.
- TailwindCSS v4 + PostCSS.
- ESLint + Jest + ts-jest.

### 2.2 Backend/API/Data
- Sequelize v6, MSSQL driver `tedious`, Umzug migration.
- Validation: `zod`.
- HTTP utilities: `axios`.

### 2.3 Auth/Security
- Web auth: `@azure/msal-browser`, `@azure/msal-react`.
- JWT verification server-side: `jose` + Azure JWKS.
- Cookie-first auth flow o mot so man hinh, dung session cookie de uu tien xac thuc qua cookie thay vi chi phu thuoc bearer token.

### 2.4 Realtime/Media/Export
- Realtime: `socket.io`, `socket.io-client`.
- Export: `exceljs`, `@react-pdf/renderer`.
- Upload/Image: `multer`, `sharp`, `@aws-sdk/client-s3`.
- Rich text: `@tinymce/tinymce-react`.

### 2.5 Tooling/ops
- `dotenv`, `node-cron`, `concurrently`.
- Scripts migration/sync/test ro rang trong `package.json`.

---

## 3. Danh sau SSR va xu ly FE

### 3.1 Cach du an dung SSR hien tai
- Root layout (`src/app/layout.tsx`) la Server Component (khong `use client`) va wrap `AuthProvider` + `AppLayout`.
- Du an da chia ro Server Component va Client Component o nhieu man hinh lon: Server Component lo fetch/cache du lieu, Client Component xu ly state, interaction va auth flow.
- Nhieu page nghiep vu dung Client Component (`'use client'`) de fetch data client-side va thao tac token/state.
- Khong thay `getServerSideProps/getStaticProps` trong codebase hien tai; thay vao do co su dung App Router + cache/revalidate.

### 3.2 FE data flow
- FE goi API noi bo `/api/v1/*` bang `fetch`.
- Access token duoc gan vao Authorization header.
- API tra ve payload kem `requestId/relationId` cho tracing.
- O mot so flow, FE uu tien doc session cookie truoc; neu can moi fallback ve bearer token.

### 3.3 To chuc FE practical
- Route protection trong `AppLayout` dua theo `isAuthenticated/isLoading`.
- Cac man hinh lon (evaluation/review) tach state fetch, autosave, submit, export ro rang.
- Dynamic import cho component nang (TinyMCE) de giam tai initial.

---

## 4. Auth va xu ly hydration mismatch (co vi du cu the)

### 4.1 Ky thuat auth du an dang dung

#### Web (MSAL)
- Cau hinh MSAL o `src/lib/msalConfig.ts`:
  - `cacheLocation: 'sessionStorage'`.
  - scope API + `offline_access`.
- `AuthProvider` (`src/lib/authContext.tsx`) thuc hien:
  - Khoi tao `PublicClientApplication` sau khi mounted.
  - Silent token acquisition neu da co account.
  - Co che token refresh truoc han (`setTimeout` theo exp).
  - Intercept `window.fetch`: neu 401 va co Bearer token thi refresh token va retry request.

#### Server verify token
- `withAzureAuth` (`src/middlewares/azureAuth.ts`):
  - Verify JWT qua `jose.jwtVerify` + `createRemoteJWKSet`.
  - Kiem tra issuer/audience hop le.
  - Tu dong `findOrCreateUser` theo `azure_oid/email`.

### 4.2 Hydration mismatch - du an co xu ly

Du an co cac pattern phong tranh mismatch SSR/CSR nhu sau:

1) Mounted gate truoc khi render logic phu thuoc browser
- Vi du `src/app/page.tsx`:
  - Dung `const [mounted, setMounted] = useState(false)`.
  - `if (!mounted) return null;`
  - Chi redirect sau khi mounted + het loading.

2) Login page cho den khi mounted
- `src/app/auth/login/page.tsx`:
  - Neu `!mounted || isLoading` thi render loading state.
  - Giam nguy co render khac nhau giua server va client.

3) Auth context chi dung browser API khi mounted
- `src/lib/authContext.tsx`:
  - `if (!mounted || typeof window === 'undefined') return;`
  - Sau do moi patch `window.fetch`, dung `sessionStorage`.

4) Dynamic import component can browser (`ssr: false`)
- `src/app/admin/posts/new/page.tsx`:
  - `dynamic(() => import(...), { ssr: false, loading: ... })` cho TinyMCE.
  - Tranh loi hydrate voi thu vien editor phu thuoc DOM/window.

Ket luan: Du an da co xu huong xu ly mismatch bang mounted guard + dynamic import cho client-only component.

---

## 5. Cac ky thuat toi uu performance (FE/SSR) dang su dung

### 5.1 Toi uu render/tai FE
1) Dynamic import TinyMCE (`ssr: false`) + loading skeleton
- Giam JS initial bundle cho route quan tri bai viet.

2) Lazy loading cho component nang va man hinh co payload lon
- Cac component/phieu giao dien nang duoc tach rieng va load theo nhu cau de giam initial bundle va cai thien time-to-interactive.

3) Debounce autosave trong man hinh evaluation
- `src/app/evaluation/[submissionId]/page.tsx`:
  - Dung timer 3 giay (`setTimeout`) cho `triggerAutoSave`.
  - Clear timer cu de tranh spam request.

4) Quan ly lifecycle fetch/state an toan
- Dung `isMounted` guard o cac page lon de tranh state update khi unmount.

### 5.2 Toi uu server/API
1) Response compression
- `next.config.ts`: `compress: true`.

2) Cache SSR / force-cache + revalidate
- Mot so trang SSR/data-heavy nhu dashboard, posts, evaluation review dung `fetch` voi `cache: 'force-cache'` va `revalidate` theo chu ky de giam so lan lay du lieu lap lai.

3) Logging bat dong bo, khong block response
- `src/middlewares/apiLogger.ts` dung `setImmediate(...)` de ghi log sau khi response tra ve.

4) Gioi han kich thuoc payload server action
- `next.config.ts`: `experimental.serverActions.bodySizeLimit = '4mb'`.

### 5.3 Toi uu data/query
1) Pagination co mac dinh limit/page trong service
- Vi du `listMySubmissions`, `listReviewSubmissions`, `listAllSubmissions` trong `evaluationSubmissionService`.

2) Index migration cho bang lon/lookup nhieu
- `039-create-evaluation-review-levels.ts`: index `form_id`, unique `(form_id, level_key)`, index order.
- `040-create-submission-reviews.ts`: index `submission_id`, `reviewer_id`, unique `(submission_id, level_key)`.

3) Query tinh toan/report gom theo DB thay vi tinh het tren FE
- `evaluationReportService` dung raw SQL tong hop score/report.

### 5.4 Realtime connection hygiene
- `useSocket` co reconnect policy + cleanup listeners/disconnect khi unmount.
- Giam memory leak va ket noi du thua.

---

## 6. Danh gia nhanh kien truc hien tai (nhin tu goc phong van)

### Diem manh
- Tach lop ro (route/controller/service/model).
- Auth Azure AD kha day du (verify token + auto-provision user).
- Da y thuc xu ly hydration mismatch thuc te.
- Feature evaluation multi-level co migration/index va test integration.

### Diem can cai tien
- Nhieu page van fetch client-side, co the nghien cuu SSR/RSC co chon loc cho man hinh can SEO hoac TTFB tot hon.
- Con kha nhieu `console.log` trong login/auth context, nen chuyen ve logger co level theo env.
- Can tiep tuc tach test suites theo profile DB ro rang hon de tranh side effects cheo.

---

## 7. Goi y trinh bay khi phong van du an
- Bat dau tu architecture flow 5 lop: UI -> API -> Controller -> Service -> DB.
- Minh hoa auth end-to-end: MSAL client, JWT verify server, auto create user.
- Dua 2 vi du hydration mismatch da xu ly: mounted gate + dynamic ssr false.
- Chot bang 3 ky thuat performance da dung: dynamic import, debounce autosave, async logging + DB indexes.
- Khi trinh bay cac module, nhac Registration Events nhu 1 chuc nang ngang hang voi News/Evaluation, khong can tach rieng thanh section rieng.
