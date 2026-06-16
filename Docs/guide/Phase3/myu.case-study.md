# myU — Case Study Draft

## Project Snapshot
- Name: myU
- Role: Full-stack engineer (backend-heavy with production operations)
- Product type: E-commerce and order platform
- Stack: Node.js (Koa), Sequelize, MySQL, Redis, S3

## Overview
myU là nền tảng thương mại vận hành thực tế với nhiều module từ order, payment, shop đến dashboard vận hành. Trọng tâm kỹ thuật là đảm bảo luồng giao dịch ổn định, có khả năng truy vết lỗi nhanh, và giữ hệ thống dễ mở rộng theo module.

## Problem
- Cần xử lý nhiều nghiệp vụ đồng thời: đơn hàng, thanh toán, thống kê, quản trị.
- Dữ liệu giao dịch lớn đòi hỏi logging và tracing rõ để giảm MTTR khi có sự cố.
- Cần chuẩn hóa kiến trúc để có thể mở rộng thêm cổng thanh toán và module mới.

## Architecture
- Layering rõ ràng: controller -> service -> data/model.
- Redis cho cache và các luồng cần giảm tải đọc DB.
- Structured logging với Correlation ID để trace xuyên request lifecycle.
- Scheduler/job cho các tác vụ định kỳ vận hành.

## Challenges
- Đồng bộ trạng thái đơn hàng khi tích hợp nhiều cổng thanh toán.
- Debug nhanh các lỗi nghiệp vụ liên quan callback bất đồng bộ.
- Giữ codebase dễ maintain khi mở rộng tính năng theo domain.

## Trade-offs
- Chọn kiến trúc module hóa thay vì gom logic nhanh vào controller:
  - Ưu điểm: dễ test, dễ mở rộng, dễ onboard.
  - Đánh đổi: tốn chi phí chuẩn hóa ban đầu.
- Chọn logging chi tiết theo bước nghiệp vụ:
  - Ưu điểm: rút ngắn thời gian điều tra lỗi.
  - Đánh đổi: cần quản lý volume log và quy ước log nghiêm ngặt.

## Results
- Total orders: 47,288
- Active users: 184,908
- Peak orders/day: 8,823 (2025-11-24)
- Total transactions: 317,084

## Engineering Highlights
- Triển khai tracing theo Correlation ID cho toàn bộ lifecycle request.
- Tích hợp payment đa cổng theo pattern nhất quán.
- Chuẩn hóa validation và bảo mật input theo hướng security-first.
- Tổ chức job định kỳ cho các tác vụ vận hành và đồng bộ dữ liệu.

## What I Learned
- Thiết kế observability sớm giúp giảm đáng kể thời gian xử lý sự cố.
- Domain boundaries rõ ràng giúp scale feature mà không vỡ cấu trúc code.

## Next Iteration
- Bổ sung dashboard kỹ thuật cho latency/error theo từng payment flow.
- Mở rộng test coverage cho callback và các edge case concurrency.

## Source Links
- `Docs/myu & id-myu/tonghopDuanMyu.md`
