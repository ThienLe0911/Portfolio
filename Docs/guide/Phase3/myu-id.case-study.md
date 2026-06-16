# MyU ID — Case Study Draft

## Project Snapshot
- Name: MyU ID
- Role: Backend-focused engineer cho identity/auth platform
- Product type: Centralized SSO and identity service
- Stack: Node.js (Koa), Sequelize, MySQL, Redis, JWT, Joi

## Overview
MyU ID là lớp nhận diện trung tâm cho hệ sinh thái myu.vn, xử lý đăng nhập, cấp token, OTP và quản lý phiên thiết bị. Mục tiêu là đảm bảo bảo mật, độ tin cậy và khả năng phục vụ nhiều ứng dụng dùng chung auth.

## Problem
- Cần một nguồn auth tập trung thay vì xác thực rời rạc theo từng ứng dụng.
- Cần hỗ trợ nhiều phương thức login (password, social, OTP) nhưng vẫn giữ chuẩn bảo mật.
- Cần logging rõ để theo dõi các flow nhạy cảm như reset password và OTP.

## Architecture
- OAuth2-based auth flows: authorization code, password, refresh token.
- Session/cache dùng Redis để giảm tải và ổn định latency.
- JWT access/refresh tokens với validation chặt.
- Logging theo flow auth + correlation context.

## Challenges
- Cân bằng UX login nhanh với yêu cầu bảo mật cao.
- Theo dõi và kiểm soát các luồng OTP khối lượng lớn.
- Đồng bộ trạng thái user/device khi nhiều ứng dụng cùng tiêu thụ SSO.

## Trade-offs
- Chọn central SSO service:
  - Ưu điểm: governance bảo mật thống nhất, tái sử dụng cao.
  - Đánh đổi: bất kỳ thay đổi auth flow đều có blast radius rộng.
- Chọn hỗ trợ multi-channel auth:
  - Ưu điểm: giảm friction cho người dùng.
  - Đánh đổi: tăng complexity trong lifecycle token/session.

## Results
- Total users: 223,864
- Registered devices: 10,454
- OTP sent: 309,239
- Password reset events: 75,497

## Engineering Highlights
- Xây dựng auth flow đa kênh nhưng vẫn giữ cùng chuẩn validation.
- Tổ chức logging theo business step để điều tra sự cố nhanh.
- Tách module rõ ràng để mở rộng feature bảo mật theo thời gian.

## What I Learned
- Với identity platform, tính nhất quán và khả năng audit quan trọng ngang hiệu năng.
- Thiết kế flow theo security-by-default giúp giảm bug logic xác thực.

## Next Iteration
- Chuẩn hóa thêm security metrics dashboard (success/fail theo flow).
- Bổ sung stress test cho các điểm nóng OTP/token refresh.

## Source Links
- `Docs/myu & id-myu/tonghopDuanMyuIdMyu.md`
