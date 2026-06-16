# Phase 3 — Source Notes

## Scope
Tổng hợp facts cốt lõi từ tài liệu nguồn để soạn case study cho portfolio.

## myU
- Source: `Docs/myu & id-myu/tonghopDuanMyu.md`
- Core domain:
  - E-commerce + order management + payment integration nhiều cổng.
  - Koa + Sequelize + MySQL + Redis + S3.
  - Logging/tracing theo Correlation ID.
- Metrics dùng cho portfolio (đã loại revenue):
  - Total orders: 47,288
  - Active users: 184,908
  - Peak orders/day: 8,823 (2025-11-24)
  - Transactions: 317,084
- Key technical themes:
  - RBAC, validation (Joi), scheduler jobs.
  - Structured logging + debug theo request lifecycle.

## MyU ID
- Source: `Docs/myu & id-myu/tonghopDuanMyuIdMyu.md`
- Core domain:
  - Identity + SSO platform cho hệ sinh thái myu.vn.
  - OAuth2 flows, OTP, social login, device/session management.
- Metrics dùng cho portfolio:
  - Total users: 223,864
  - Registered devices: 10,454
  - OTP sent: 309,239
  - Password reset count: 75,497
- Key technical themes:
  - JWT access/refresh, Redis cache/session, structured logs.
  - Security layers cho auth flows.

## Events Platform
- Sources:
  - `Docs/events-myu-vn/tonghopDuanTaoFormCustom.md`
  - `Docs/events-myu-vn/tonghopDuanTaoFormCustomFE.md`
- Core domain:
  - Dynamic form/survey + event operations + check-in + lucky draw.
  - Admin builder + user submission + export/reporting.
- Metrics dùng cho portfolio:
  - Events: 48
  - Survey responses: 270,524
  - Peak responses/day: 3,325 (2026-01-24)
  - Peak responses/hour: 2,433
  - Peak responses/minute: 103
- Key technical themes:
  - Debounce autosave/search, timeout + AbortController.
  - SSR/CSR guard patterns (Gatsby), auth flow MSAL.

## Hung Hau House
- Sources:
  - `Docs/Hung Hau House/tonghopduanNgoinhaHunghau.md`
  - `Docs/Hung Hau House/tonghopduanNgoinhaHunghauFE.md`
- Core domain:
  - Next.js App Router product with mixed SSR/RSC + client shells.
  - Admin modules (posts, evaluation, registration events), logging and auth middleware chain.
- Key technical themes:
  - Route/controller/service/model layering.
  - Cookie-first auth + Azure verification middleware.
  - Hydration mismatch prevention and dynamic import optimization.
  - Query/cache strategies with TanStack Query and revalidate.

## Optional secondary: Face Verification
- Nguồn tài liệu trong workspace hiện tại: chưa tìm thấy file chuyên biệt.
- Trạng thái: tạo outline khung trước, đánh dấu cần bổ sung facts thực tế.
