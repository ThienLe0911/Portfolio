# Phase 5 — Motion Specification

## Motion Principles
- Motion phục vụ định hướng, không để trang trí.
- Tốc độ nhanh vừa phải, cảm giác chắc chắn.
- Giảm motion ở các khu vực đọc dài.

## Timing & Easing
- Fast: 160ms
- Standard: 240ms
- Slow: 360ms
- Easing primary: cubic-bezier(0.22, 1, 0.36, 1)
- Easing exit: cubic-bezier(0.4, 0, 1, 1)

## Allowed Patterns
- Fade in nhẹ khi section vào viewport.
- Slide up ngắn 8-16px cho card reveal.
- Hover elevation nhẹ cho project cards và buttons.
- Page transition nhẹ giữa route.

## Avoid
- Parallax nặng.
- 3D flip/rotate không cần thiết.
- Stagger quá dài gây chậm cảm giác điều hướng.

## Section-specific Rules
- Hero: một lần reveal khi vào trang.
- Metrics: stagger rất ngắn, ưu tiên readability.
- Project cards: hover transition rõ nhưng tiết chế.
- Timeline: progressive reveal theo block, không animate từng chữ.
