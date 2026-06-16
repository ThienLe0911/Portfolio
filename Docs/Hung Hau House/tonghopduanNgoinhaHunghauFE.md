# Tong hop du an Ngoi Nha Hung Hau - FE focus (tai lieu phong van)

Ngay cap nhat: 2026-06-01
Pham vi: Frontend Web (Next.js App Router + React), tap trung vao chuc nang, luong FE, SSR/RSC, performance, security/auth, cookies, hydration mismatch.

---

## 1. Tong quan FE architecture

### 1.1 Nen tang FE
- Next.js 15 + React 19 + TypeScript.
- App Router theo `src/app/**`.
- UI layer su dung shared components + TailwindCSS.
- Query/cache client-side su dung TanStack Query (`@tanstack/react-query`) voi `QueryProvider`.

### 1.2 Nguyen tac to chuc FE
- Tach Server Component va Client Component theo vai tro:
  - Server Component: doc cookie, prefetch du lieu, dung cache/revalidate.
  - Client Component: tuong tac UI, form state, optimistic update, side effects.
- Pattern shell:
  - Server page + Client shell (vi du dashboard/posts/evaluation/review).
- API call thong nhat ve `/api/v1/*`, giu cung domain de de auth va logging.

---

## 2. Cac nhom chuc nang FE chinh

### 2.1 Auth + profile + route protection
- Login qua MSAL (Azure AD), co xu ly mounted gate de tranh hydration mismatch.
- Bao ve route trong App layout/client guard dua tren `isAuthenticated` va `isLoading`.
- Co flow exchange/refresh session token de dong bo cookie auth.

### 2.2 News/Posts/Comments/Reactions
- Danh sach bai viet, chi tiet bai viet, comment/reaction theo post.
- Co cookie-first fetch cho cac thao tac comment/reaction de uu tien session cookie.
- Co ket noi realtime bang Socket.IO cho mot so cap nhat tuong tac (notification/trang thai moi) de giam do tre cap nhat UI.

### 2.3 Evaluation workflow
- Danh sach bai review nhan vien, review queue, form cham diem theo submission.
- Co autosave debounce, route shell tach Server/Client.
- Co SSR cache + revalidate o mot so trang review/data-heavy.

### 2.4 Events vote / register vote
- Man hinh su kien vote, ket qua vote, trang dang ky vote.
- Co dynamic import cho editor va cac component nang.

### 2.5 Registration Events (module trong tam)
- Public pages:
  - `src/app/registration-events/page.tsx`: danh sach su kien mo dang ky.
  - `src/app/registration-events/[slug]/page.tsx`: trang chi tiet + form dang ky.
  - `src/app/registration-events/my/page.tsx`: lich su dang ky cua user.
- Admin pages:
  - `src/app/admin/registration-events/page.tsx`: list + thao tac quan tri.
  - `src/app/admin/registration-events/create/page.tsx`: tao event.
  - `src/app/admin/registration-events/edit/page.tsx`: cap nhat event.
  - `src/app/admin/registration-events/[eventId]/page.tsx`: chi tiet event.
  - `src/app/admin/registration-events/[eventId]/submissions/page.tsx`: danh sach submissions + export.
- API tuong ung:
  - Public: `/api/v1/registration-events`, `/api/v1/registration-events/[slug]`, `/api/v1/registration-events/[slug]/submit`, `/api/v1/registration-events/me`.
  - Admin: `/api/v1/admin/registration-events/**` (create/update/detail/submissions/export/upload-featured-image).

---

## 3. Luong FE quan trong (end-to-end)

### 3.1 Luong dang nhap va giu phien
1. User login bang MSAL.
2. FE dong bo token qua session exchange/refresh endpoint de set `nhh_session_token` cookie.
3. Cac request uu tien cookie-first; neu 401 thi fallback bearer token khi can.
4. Middleware server verify JWT va nap user context.

### 3.2 Luong Evaluation (review/cham diem)
1. User vao danh sach bai nop/review queue (`/evaluation`, `/evaluation/review`).
2. Server page prefetch metadata bang cookie session, client shell xu ly interaction.
3. User mo chi tiet submission (`/evaluation/[submissionId]` hoac `/evaluation/review/[submissionId]`).
4. FE cap nhat diem/nhan xet theo tieu chi, co autosave debounce de giam spam request.
5. Submit ban danh gia, FE invalidate/refetch du lieu lien quan de dong bo trang thai queue va tong hop.

### 3.3 Luong Posts/Comments/Reactions
1. User vao danh sach bai viet (`/posts`) va trang chi tiet (`/posts/[id]`).
2. FE lay noi dung bai viet, comment, reaction; uu tien `cookieFirstFetch` cho route can auth.
3. User thao tac like/reaction/comment, FE cap nhat UI va goi API tuong ung.
4. Neu xay ra 401, flow fallback sang bearer token (khi co) de giam fail thao tac tu phia client.
5. Kenh Socket.IO dong bo mot so thay doi realtime giua nhieu client dang online.

### 3.4 Luong Registration Events (user)
1. User vao `/registration-events` xem su kien dang mo.
2. Chon event -> vao `/registration-events/[slug]`.
3. FE nap event detail + template form (neu dynamic form), prefill theo profile dang nhap.
4. Submit form -> `POST /api/v1/registration-events/[slug]/submit`.
5. User theo doi ket qua/lich su dang ky tai `/registration-events/my`.

### 3.5 Luong Admin van hanh (events + registration events)
1. Admin tao/sua event va registration event, cau hinh slug, thoi gian, publish state.
2. Upload media (nhu featured image), gan template/phuong thuc hien thi phu hop.
3. Theo doi submissions theo event, filter/pagination va xem chi tiet tung ban ghi.
4. Export Excel de tong hop du lieu phuc vu van hanh va doi soat.

---

## 4. SSR/RSC strategy tren FE

### 4.1 Chien luoc tong quan
- Khong dung `getServerSideProps/getStaticProps` (App Router).
- Dung Server Component + `fetch` co cache policy trong page server.
- Dung Client Component cho phan interactive cao.

### 4.2 Split Server Component / Client Component
- Dashboard, posts, evaluation va review co pattern server page + client shell.
- Loi ich:
  - Giam JS hydrate ban dau.
  - Tan dung server fetch va cache.
  - Tach ro concern data va UI interaction.

### 4.3 SSR cache/revalidate
- Mot so page dung `cache: 'force-cache'` + `next.revalidate` (chu ky 300s).
- Muc tieu:
  - Giam tai API khi traffic tang.
  - Cai thien TTFB cho du lieu it thay doi theo giay.
  - Giu can bang fresh data va chi phi render.

---

## 5. Data fetching va cache strategy

### 5.1 TanStack Query
- Da setup `QueryProvider` global.
- Default policy:
  - `staleTime: 30_000`
  - `refetchOnWindowFocus: false`
  - `retry: 1` cho query
  - `retry: 0` cho mutation
- Loi ich:
  - Giam duplicate request.
  - Co che stale/fresh ro rang.
  - De invalidation sau mutation.

### 5.2 Cookie-first fetch
- Co helper `cookieFirstFetch` de uu tien session cookie.
- Fallback bearer token khi nhan 401 trong nhung route yeu cau.
- Co telemetry cho auth fallback de theo doi van de xac thuc.

---

## 6. Security / authentication tren FE

### 6.1 Co che xac thuc
- Client login bang MSAL.
- Session cookie `nhh_session_token` duoc set boi auth API (exchange/refresh/qr-auto-login).
- Middleware `withAzureAuth` uu tien token tu cookie, sau do moi toi Authorization header.

### 6.2 Bao ve route va role
- Client guard chuyen huong khi chua dang nhap.
- Admin screens kiem tra role (`super_admin`, `admin`, `hr`) truoc khi thao tac.
- API admin ket hop `withAuthorization` de enforce role o server side.

### 6.3 Giam rui ro auth tren SSR
- Server page doc cookie an toan de lay token context.
- Request noi bo den API co truyen cookie header co kiem soat.
- Tranh phu thuoc hoan toan vao local storage/session storage cho SSR path.

---

## 7. Xu ly hydration mismatch

### 7.1 Cac pattern dang dung
- Mounted gate: render sau khi mounted cho cac logic phu thuoc browser.
- Loading gate cho login/auth pages de dong nhat SSR/CSR output.
- Dynamic import `ssr: false` voi component can DOM/window (TinyMCE).
- Auth context chi patch browser APIs khi dang o client (`typeof window !== 'undefined'`).

### 7.2 Tac dong
- Giam warning mismatch trong console.
- Giam race condition giua auth state va router redirect.
- On dinh hon tren cac man hinh login va form lon.

---

## 8. Performance optimization (FE)

### 8.1 Render & bundle
- Dynamic import cho editor/component nang.
- Lazy loading theo nhu cau man hinh.
- Tach client shell de giam khoi luong hydrate ban dau.

### 8.2 Network & API
- SSR cache + revalidate.
- Query cache tren client (TanStack Query).
- Debounce autosave tren luong evaluation de tranh spam request.

### 8.3 Runtime hygiene
- Cleanup ket noi Socket.IO va listeners khi unmount.
- isMounted guard de tranh update state sau unmount.

---

## 9. Diem manh FE de trinh bay khi phong van

1. Kien truc FE da co huong production: split RSC/Client shell, SSR cache, query cache, auth layering.
2. Security/auth khong chi o client: cookie-first + middleware precedence + role enforcement server-side.
3. Xu ly thuc te cac bai toan kho FE: hydration mismatch, heavy editor loading, autosave performance, realtime interaction qua Socket.IO.
4. Co luong nghiep vu day du cho Registration Events: admin tao van hanh, user dang ky, theo doi submissions va export.

---

## 10. Huong nang cap tiep theo (de tra loi neu phong van hoi sau)

1. Day manh typed API contract FE <-> BE (schema-first).
2. Tiep tuc mo rong React Query cho nhieu flow hien dang fetch thu cong.
3. Them metric FE (Web Vitals + auth fallback rate + cache hit ratio) de theo doi hieu nang van hanh.
4. Chuan hoa hon nua pattern Server page + Client shell cho toan bo module lon.
