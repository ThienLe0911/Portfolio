# Phase 5 — Responsive Rules

## Breakpoints
- Mobile: 360-767
- Tablet: 768-1023
- Desktop: 1024-1439
- Wide desktop: 1440+

## Layout Container
- Mobile container: 100%, padding 16-20
- Tablet container: max-width 960, padding 24-32
- Desktop container: max-width 1200-1280, padding 32-40

## Page Rules
### Home
- Mobile: Hero stack dọc, CTA xếp dọc hoặc 2 nút co giãn.
- Tablet: Hero 2 cột nhẹ, ảnh thu nhỏ.
- Desktop: Hero 2 cột cân bằng, copy left, portrait right.

### Projects list
- Mobile: 1 card/row.
- Tablet: 2 cards/row.
- Desktop: 2-3 cards/row tùy mật độ nội dung.

### Project detail
- Mobile: anchor nav dạng horizontal scroll hoặc dropdown.
- Desktop: sticky anchor sidebar/top.
- Paragraph width: giữ trong mức dễ đọc, tránh quá dài.

### Timeline
- Mobile: single-column timeline.
- Tablet/Desktop: có thể split marker + content nhưng vẫn ưu tiên đọc tuần tự.

### Contact
- Mobile: stack theo chiều dọc.
- Desktop: 2 cột (intro + actions) nếu cần.

## Navigation behavior
- Mobile: drawer full-height, tap target >= 44.
- Desktop: sticky top nav, active state rõ.

## Performance guardrails
- Ưu tiên ảnh cover đã nén.
- Tránh animation nặng trên mobile low-end.
- Font loading strategy phải tránh layout shift lớn.
