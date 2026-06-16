# Phase 2 — Detailed Timeline Entries

These entries are expanded versions of the timeline items, ready to be copied into case study pages or the Timeline UI. Each entry includes Title, Date/Period, Short description (1-2 lines), Full description, Key metrics, and Link to source notes.

---

## Events Platform — Peak production usage
- Date: 2026-01-24
- Short description: Built a dynamic survey & events platform that supported high-volume events and produced measurable user engagement.
- Full description: The Events Platform supports dynamic forms, check-in via QR, prize draws, and reporting. It handled 48 events and accumulated 270,524 survey responses. On 2026-01-24 the platform hit a daily peak of 3,325 responses, demonstrating reliability under load and robust back-end processing for high-concurrency scenarios.
- Key metrics:
  - Events organized: 48
  - Total survey responses: 270,524
  - Peak responses/day: 3,325
- Source: `Docs/events-myu-vn/tonghopDuanTaoFormCustom.md`
- CTA: Link to Events case study

---

## Events Platform — High-concurrency handling & FE features
- Period: Dec 2025 - Jan 2026
- Short description: Implemented frontend and engineering solutions to withstand traffic spikes and improve admin UX.
- Full description: The frontend implemented a dynamic form renderer, Office365 SSO integration (MSAL), Excel exports, and QR-based check-in flows. The system successfully handled spikes up to 2,433 responses/hour and 103 responses/minute, using debounce strategies, timeout/AbortController patterns, and backend scaling with cache/queue.
- Key metrics:
  - Peak responses/hour: 2,433
  - Peak responses/minute: 103
- Source: `Docs/events-myu-vn/tonghopDuanTaoFormCustomFE.md`
- CTA: Link to Events FE details

---

## myU — Orders & growth snapshot
- Period: 2026 (snapshot)
- Short description: Production e‑commerce site with significant transactional volume and user base.
- Full description: myU operates as an e-commerce/ticketing platform within the ecosystem. The 2026 snapshot reports 47,288 total orders, 184,908 active users, and total revenue of ~93.14B VND. The system achieved a peak of 8,823 orders/day on 2025-11-24, showcasing both product-market fit and backend scalability.
- Key metrics:
  - Total orders: 47,288
  - Active users: 184,908
  - Peak orders/day: 8,823 (2025-11-24)
- Source: `Docs/myu & id-myu/tonghopDuanMyu.md`
- CTA: Link to myU case study

---

## MyU ID — Identity & SSO platform
- Period: Ongoing
- Short description: Designed and implemented a centralized authentication service powering the ecosystem.
- Full description: MyU ID provides OAuth2 flows, social login, OTP verification, device management, and structured logging. It serves as the authentication backbone for multiple products, enabling secure and smooth user experiences across services.
- Key metrics:
  - Total users: 223,864
  - Registered devices: 10,454
  - OTPs sent: 309,239
- Source: `Docs/myu & id-myu/tonghopDuanMyuIdMyu.md`
- CTA: Link to MyU ID case study

---

## Hung Hau House — Architecture & platform update
- Date: 2026-06-01
- Short description: Re-architected a Next.js-based product with improved SSR/CSR patterns and performance.
- Full description: The project focuses on monorepo structure with Next.js, API routes, and a clear separation between server and client components. It emphasizes SSR/CSR trade-offs, auth (MSAL), hydration mismatch handling, observability, and cache/query strategies for better maintainability and performance.
- Source: `Docs/Hung Hau House/tonghopduanNgoinhaHunghau.md`
- CTA: Link to Hung Hau House case study

---

Notes
- I can export each entry as frontmatter (YAML) or JSON objects keyed by `id` for direct dev consumption. Let me know preferred format.
