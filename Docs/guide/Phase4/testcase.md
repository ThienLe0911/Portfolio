# Phase 4 — IA Test Cases (testcase.md)

Status: Reviewed. All test cases PASS (2026-06-15).

## Test Objective
Đảm bảo kiến trúc thông tin dễ hiểu, dễ điều hướng và nhất quán trước khi bước sang UI/UX spec.

## Test Cases

- [x] TC-01: Route coverage đúng V1 scope
  - Kiểm tra: Có đủ Home, Projects, Timeline, Contact và 5 project detail pages.
  - Kỳ vọng: Không thiếu route bắt buộc.

- [x] TC-02: Navigation clarity (desktop)
  - Kiểm tra: Header menu thể hiện đúng 4 mục chính.
  - Kỳ vọng: User vào đúng trang trong 1 click.

- [x] TC-03: Navigation clarity (mobile)
  - Kiểm tra: Menu mobile hiển thị đầy đủ, không ẩn route quan trọng.
  - Kỳ vọng: Không có dead end.

- [x] TC-04: Click-depth
  - Kiểm tra: Từ Home vào một case study bất kỳ.
  - Kỳ vọng: <= 3 clicks.

- [x] TC-05: Content hierarchy on Home
  - Kiểm tra: Hero -> About -> Metrics -> Featured Projects -> Timeline -> Contact.
  - Kỳ vọng: Trình tự logic, không lặp section.

- [x] TC-06: Project page hierarchy consistency
  - Kiểm tra: 5 project pages dùng cùng cấu trúc section cốt lõi.
  - Kỳ vọng: Overview/Problem/Architecture/Challenges/Trade-offs/Results xuất hiện đầy đủ.

- [x] TC-07: Label consistency
  - Kiểm tra: Tên menu, CTA, section title thống nhất giữa tài liệu Phase 2-4.
  - Kỳ vọng: Không mâu thuẫn thuật ngữ.

- [x] TC-08: Optional content handling
  - Kiểm tra: Face Verification được đánh dấu optional trong narrative.
  - Kỳ vọng: Không phá flow nếu chưa có full content.

- [x] TC-09: Handoff readiness
  - Kiểm tra: Có đầy đủ file bàn giao cho Phase 5.
  - Kỳ vọng: Phase 5 có thể bắt đầu không cần làm lại IA.
