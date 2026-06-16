export const projectStories = {
  myu: {
    tagline: 'E-commerce and order platform',
    summary: 'Built a production-grade commerce platform with strong observability, payment reliability, and scalable module boundaries.',
    links: {
      live: 'https://myu.vn/',
      deeplink: 'https://myu.onelink.me/Rp8t/itf3vbo1',
    },
    sections: [
      ['Overview', 'myU is a real-world commerce platform with order, payment, shop, and operations workflows. The engineering goal was to keep critical transactions stable, traceable, and easy to extend as new business modules appear.'],
      ['Problem', 'The platform must handle concurrent order, payment, and reporting flows with strong reliability. The team needed clearer logs, faster incident traces, and a cleaner architecture for new payment integrations.'],
      ['Architecture', 'The implementation uses layered controllers, services, and data models, with Redis cache, structured logging, and job-based operations to reduce DB load and improve operational clarity.'],
      ['Challenges', 'Payment callback flows, asynchronous state changes, and operational debugging were the main risks. The team needed a structure that could absorb more modules without turning the codebase into a monolith.'],
      ['Trade-offs', 'A modular architecture was chosen over a fast, tightly coupled implementation. The upfront cost was higher, but it improves maintainability, testability, and long-term scaling.'],
      ['Results', 'The project delivered stable transaction flows, strong incident visibility, and a reusable foundation for future modules and payment integrations.']
    ]
  },
  'myu-id': {
    tagline: 'Identity and authentication backbone',
    summary: 'Built a centralized SSO platform to unify login, token lifecycle, OTP, and device management across the ecosystem.',
    sections: [
      ['Overview', 'MyU ID acts as the identity layer for the myU ecosystem, handling sign-in, token issuance, OTP flows, and device lifecycle management across multiple products.'],
      ['Problem', 'Authentication was spread across apps and needed a secure, shared source of truth. The platform also needed to support multiple login paths while preserving auditability and security standards.'],
      ['Architecture', 'The solution is built around OAuth2 flows, Redis-backed session/cache paths, strict JWT validation, and business-step logging for auth-sensitive operations.'],
      ['Challenges', 'The main challenge was balancing fast login experiences with strict security requirements, while also handling high-volume OTP and token refresh behavior.'],
      ['Trade-offs', 'Centralized SSO improved governance and reusability, but it increased the blast radius of any auth change. Multi-channel login improved user experience at the cost of greater flow complexity.'],
      ['Results', 'The platform supports large-scale user and device operations with structured auth logging and a reliable identity foundation for the whole ecosystem.']
    ]
  },
  events: {
    tagline: 'Dynamic event operations platform',
    summary: 'Designed a flexible form and survey platform for large events with strong FE resilience and high-concurrency handling.',
    sections: [
      ['Overview', 'Events Platform supports dynamic forms, registration, QR check-in, reporting, and event operations for large-scale gatherings. The product needed to adapt quickly to different event flows without frequent code releases.'],
      ['Problem', 'Event forms changed often, traffic peaked unexpectedly, and the front-end needed to handle high-volume interactions without breaking operational workflows.'],
      ['Architecture', 'The platform uses layered API services, dynamic form rendering, centralized API client behavior, and Office365 authentication to keep the admin and user experiences separate but connected.'],
      ['Challenges', 'The team had to manage bursty traffic, dynamic admin configuration, and SSR/CSR stability under real event conditions.'],
      ['Trade-offs', 'A dynamic form engine improved operational flexibility, but increased the complexity of validation and admin UX. Debounced autosave reduced API pressure but required careful save-state handling.'],
      ['Results', 'The platform handled 48 events, 270,524 survey responses, and major traffic spikes while keeping event operations reliable.']
    ]
  },
  'hung-hau-house': {
    tagline: 'Architecture-focused web platform',
    summary: 'Shaped a modern web platform with clear app-router architecture, hybrid SSR/CSR patterns, and dependable auth/data flows.',
    links: {
      live: 'https://hrm.hexagon.xyz/auth/login',
      deeplink: 'https://hrm.hexagon.xyz/open-app',
      deeplinkAndroid: 'https://hrm.hexagon.xyz/open-app-android',
    },
    sections: [
      ['Overview', 'Hung Hau House is an architecture-led platform that blends admin workflows with a modern Next.js app-router implementation. The goal was to keep the product maintainable while delivering better UX and performance.'],
      ['Problem', 'The project needed to support several business modules at once while avoiding hydration mismatch, keeping auth consistent, and balancing SSR and client-side performance.'],
      ['Architecture', 'The platform uses route and middleware layers, hybrid SSR/client-shell patterns, and data fetching strategies that separate server rendering from interactive client logic.'],
      ['Challenges', 'The main complexity came from auth state consistency, hydration-sensitive components, and fast data-heavy interactions across multiple modules.'],
      ['Trade-offs', 'A hybrid SSR + client-shell approach reduced initial hydration cost but introduced more coordination between server and client data flows. Cookie-first auth improved SSR stability but required clear debugging rules.'],
      ['Results', 'The result is a more stable foundation for future modules, better operational visibility, and a cleaner architecture for growth.']
    ]
  },
  'face-verification': {
    tagline: 'Optional security module',
    summary: 'A draft concept for stronger proof-of-presence and trust in sensitive verification flows.',
    sections: [
      ['Overview', 'Face Verification is positioned as an optional trust layer for user verification scenarios where identity confidence matters.'],
      ['Problem', 'Some flows need better proof-of-presence than a simple credential check. The main challenge is adding security without hurting usability.'],
      ['Architecture', 'This draft concept relies on a dedicated verification step, secure data flow, and clear separation from the core auth experience.'],
      ['Challenges', 'This module needs extra trust, privacy, and operational safeguards before it should be promoted to a public-facing case study.'],
      ['Trade-offs', 'The approach favors stronger verification and trust at the cost of added complexity and security review.'],
      ['Results', 'This remains an optional placeholder until the product and security requirements are fully defined.']
    ]
  }
};
