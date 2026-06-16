# Phase 2 — Career Timeline (Draft milestones)

Below are candidate timeline milestones extracted from existing project documentation. Each entry includes a short description and a link to the source notes for reference.

- **Events Platform — Peak production usage** — 24 Jan 2026
  - Summary: Dynamic form/survey platform used for large events. 48 events organized; 270,524 survey responses; peak 3,325 responses on 2026-01-24. Evidence: [Docs/events-myu-vn/tonghopDuanTaoFormCustom.md](Docs/events-myu-vn/tonghopDuanTaoFormCustom.md)

- **Events Platform — High-concurrency handling & FE features** — Dec 2025 – Jan 2026
  - Summary: Handled spikes (up to 2,433 responses/hour, 103 responses/minute); implemented dynamic form builder, MSAL Office365 SSO on FE, Excel export, QR check-in. Evidence: [Docs/events-myu-vn/tonghopDuanTaoFormCustomFE.md](Docs/events-myu-vn/tonghopDuanTaoFormCustomFE.md)

- **myU — Orders & growth snapshot (2026)** — snapshot 2026
  - Summary: Production e‑commerce/ticketing site with measurable business impact. KPIs (2026 snapshot): 47,288 total orders; 184,908 active users; total revenue ≈ 93,140,016,911 VND; peak orders/day 8,823 (2025-11-24). Evidence: [Docs/myu & id-myu/tonghopDuanMyu.md](Docs/myu%20&%20id-myu/tonghopDuanMyu.md)

- **MyU ID — Identity & SSO platform (auth foundation)** — ongoing (metrics snapshot available)
  - Summary: Built OAuth2-based SSO, social login (Google/Facebook/Apple), OTP flows, device management, and structured logging. Metrics snapshot: 223,864 total users; 10,454 registered devices; 309,239 OTPs sent. Evidence: [Docs/myu & id-myu/tonghopDuanMyuIdMyu.md](Docs/myu%20&%20id-myu/tonghopDuanMyuIdMyu.md)

- **Hung Hau House — Architecture & platform update** — 2026-06-01
  - Summary: Next.js + API + data layer architecture; focus on SSR/CSR patterns, auth (MSAL), hydration handling, TanStack Query, and server/client separation. Evidence: [Docs/Hung Hau House/tonghopduanNgoinhaHunghau.md](Docs/Hung%20Hau%20House/tonghopduanNgoinhaHunghau.md)

---

Recommendations
- Pick 5–8 milestones (mix of technical and business impact) for the public Timeline on the site.
- For each milestone, include: Title, short description (1–2 lines), date or period, and a CTA to the full case study page.
- Where possible, surface a metric (e.g., active users, peak requests, revenue) to quantify impact.

Next step: I can convert these into structured timeline entries (Markdown frontmatter or JSON) ready for dev integration. Which format do you prefer?