# Events Platform — Case Study Draft

## Project Snapshot
- Name: events-myu-vn
- Role: Frontend-focused engineer with full-stack collaboration
- Product type: Event operations + dynamic survey + lucky draw platform
- Stack: Node.js/Express, Gatsby + React, Sequelize, S3, MSAL

## Overview
Events Platform hỗ trợ vận hành sự kiện quy mô lớn: khảo sát, check-in, quay số, báo cáo và quản trị dữ liệu. Trọng tâm là hệ thống form động để đội vận hành tự cấu hình nghiệp vụ mà không phụ thuộc release code liên tục.

## Problem
- Form khảo sát thay đổi thường xuyên theo từng sự kiện.
- Traffic tăng đột biến theo thời điểm sự kiện tạo áp lực lên FE/API.
- Cần phân tách rõ trải nghiệm user/admin trong cùng một domain.

## Architecture
- Layered architecture: router -> controller -> service -> model.
- Dynamic form renderer hỗ trợ đa loại field và branching logic.
- FE dùng API client tập trung, timeout/abort, debounce autosave/search.
- Auth Office365 bằng MSAL, xử lý luồng redirect/callback.

## Challenges
- Giữ UI responsive khi admin chỉnh sửa form liên tục.
- Tránh request burst khi user thao tác nhanh hoặc autosave liên tiếp.
- Xử lý an toàn SSR/CSR trong Gatsby để tránh hydration mismatch.

## Trade-offs
- Chọn autosave debounce thay vì save tức thì:
  - Ưu điểm: giảm tải API, UX mượt hơn.
  - Đánh đổi: cần xử lý rõ trạng thái đang lưu/thất bại.
- Chọn form engine động thay vì form cứng theo code:
  - Ưu điểm: tăng tốc vận hành sự kiện.
  - Đánh đổi: tăng complexity cho validation và admin UX.

## Results
- Events organized: 48
- Survey responses: 270,524
- Peak responses/day: 3,325 (2026-01-24)
- Peak responses/hour: 2,433
- Peak responses/minute: 103

## Engineering Highlights
- Xây dựng dynamic form builder/renderer cho nhiều loại input.
- Tối ưu FE bằng debounce, AbortController timeout, pagination/search tối ưu.
- Triển khai admin workflows: submissions, export Excel, QR utilities.
- Tăng độ ổn định SSR/CSR bằng browser guards và client-only patterns.

## What I Learned
- Với sản phẩm vận hành sự kiện, khả năng cấu hình nhanh quan trọng hơn giao diện phức tạp.
- Tối ưu nhỏ ở FE request lifecycle có tác động rất lớn khi traffic tăng đột biến.

## Next Iteration
- Tách thêm dashboard kỹ thuật theo giờ để theo dõi spike sớm.
- Chuẩn hóa telemetry FE để phân tích timeout/error theo route.

## Source Links
- `Docs/events-myu-vn/tonghopDuanTaoFormCustom.md`
- `Docs/events-myu-vn/tonghopDuanTaoFormCustomFE.md`
