# Phase 4 — Information Architecture (Plan)

## Objective
Thiết kế kiến trúc thông tin rõ ràng cho portfolio, đảm bảo người xem đi từ ấn tượng ban đầu đến đánh giá năng lực kỹ thuật một cách mạch lạc.

## Scope
- Xây dựng Site Map cho toàn bộ website.
- Thiết kế Navigation Structure (desktop + mobile).
- Thiết kế User Flow cho recruiter/hiring manager.
- Chuẩn hóa Content Hierarchy cho từng trang chính.

## Inputs
- Phase 2 content bundle: `Docs/guide/Phase2/phase2_content.json`
- Phase 3 case studies: `Docs/guide/Phase3/*.case-study.md`
- Master plan: `Docs/guide/MasterPlan.md`

## Deliverables
1. `sitemap.md`
2. `navigation.md`
3. `user-flow.md`
4. `content-hierarchy.md`
5. `task.md`
6. `testcase.md`
7. `phase4-handoff.md`

## Success Criteria
- Structure website rõ ràng và nhất quán với narrative nghề nghiệp.
- Tối đa 3 click từ Home đến bất kỳ case study chi tiết.
- Mỗi page có hierarchy nội dung rõ ràng (Primary -> Secondary -> Supporting).
- Điều hướng hoạt động tốt cho cả desktop và mobile.

## Constraints
- Giữ V1 scope: Home, Projects, Timeline, Contact.
- Không thêm blog/CMS/multi-language ở Phase 4.
- Ưu tiên readability và recruiter scanning speed.

## Execution Notes
- Dùng slug nhất quán với MasterPlan:
  - `/projects/myu`
  - `/projects/myu-id`
  - `/projects/hung-hau-house`
  - `/projects/events`
  - `/projects/face-verification`
- Face Verification giữ trạng thái optional khi vào nội dung chi tiết.
