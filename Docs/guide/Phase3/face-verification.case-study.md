# Face Verification — Case Study Draft (Optional)

## Status
Optional secondary project. Nguồn dữ liệu chi tiết chưa có trong workspace hiện tại, nên đây là khung nháp để bổ sung sau.

## Project Snapshot
- Name: Face Verification
- Role: TBD
- Product type: Identity verification module

## Overview
Face Verification được định vị như một module nâng mức độ tin cậy cho flow xác thực người dùng ở các điểm đăng ký/đăng nhập hoặc các nghiệp vụ cần proof-of-presence.

## Problem
- Cần tăng độ tin cậy định danh so với OTP-only.
- Cần hạn chế friction để không làm giảm conversion ở bước xác thực.

## Architecture (Draft)
- Client capture/submit ảnh khuôn mặt theo policy rõ.
- Server xử lý verification pipeline và trả về kết quả theo ngưỡng confidence.
- Logging/audit đầy đủ để truy vết kết quả xác thực.

## Challenges (Draft)
- Chất lượng ảnh đầu vào không đồng đều.
- Cân bằng giữa độ chính xác và thời gian phản hồi.
- Tuân thủ privacy/data retention.

## Trade-offs (Draft)
- Accuracy vs latency.
- Security depth vs user friction.

## Results
- Pending dữ liệu thực tế.

## What I Learned
- Cần làm rõ governance về privacy ngay từ đầu.

## Next Iteration
- Bổ sung metrics thực tế và kiến trúc chính thức sau khi có source docs.

## Needed Inputs
- Số lượng verification requests.
- Success/fail rate theo thiết bị.
- False reject/false accept benchmarks.
- Incident notes và biện pháp hardening.
