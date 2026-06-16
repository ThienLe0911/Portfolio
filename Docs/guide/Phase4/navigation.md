# Phase 4 — Navigation Structure

## Global Navigation (Desktop)
- Left: Brand/Name (click -> `/`)
- Right menu:
  - Home (`/`)
  - Projects (`/projects`)
  - Timeline (`/timeline`)
  - Contact (`/contact`)
- Utility:
  - Theme toggle (light/dark)
  - Resume CTA (download/open)

## Global Navigation (Mobile)
- Top bar: Brand + menu icon
- Drawer items:
  - Home
  - Projects
  - Timeline
  - Contact
  - Resume CTA
  - Theme toggle

## Local Navigation
- `/projects`:
  - Filter tabs/chips: Featured, Identity, Platform, Internal Tools
- `/projects/{slug}`:
  - Sticky in-page anchors:
    - Overview
    - Problem
    - Architecture
    - Challenges
    - Trade-offs
    - Results

## State Rules
- Active state: rõ màu/underline cho route hiện tại.
- Hover state: subtle, premium, không gây nhiễu.
- Focus state: luôn visible cho accessibility.

## CTA Placement Rules
- Primary CTA toàn site: View Projects / Contact.
- Secondary CTA: Download Resume.
- Mỗi trang chỉ có 1 CTA primary nổi bật.
