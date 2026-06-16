# Tổng hợp Dự án: events-myu-vn

## 1. Tổng quan dự án
- **Tên dự án:** events-myu-vn
- **Mục tiêu:** Quản lý sự kiện, khảo sát, quay số trúng thưởng, đăng ký, thống kê, và các nghiệp vụ liên quan cho trường Đại học/cộng đồng lớn.
- **Kiến trúc:** Monorepo Node.js (Express) + Gatsby React FE, tách rõ backend/frontend, chuẩn RESTful API, phân lớp rõ ràng (Router, Controller, Service, Model, Middleware, Utils).

## 2. Công nghệ sử dụng
### Backend
- **Node.js** (Express)
- **Sequelize ORM** (MySQL/MSSQL)
- **Log4js** (logging)
- **express-http-context** (Correlation ID, tracing)
- **jsonwebtoken, jwks-rsa** (auth)
- **helmet, express-rate-limit, cors, compression** (bảo mật, tối ưu)
- **@sendgrid/mail, nodemailer** (gửi email)
- **puppeteer** (tự động hóa, chụp màn hình)
- **multer, multer-s3, @aws-sdk/client-s3** (upload file, S3)
- **dotenv** (config)

### Frontend
- **GatsbyJS** (React 18)
- **@mui/material, @mui/joy** (UI)
- **TailwindCSS** (mix)
- **@azure/msal-react** (login O365)
- **@tinymce/tinymce-react, suneditor-react** (rich text)
- **chart.js, react-chartjs-2** (thống kê)
- **qrcode, react-qrcode-logo** (QR code)
- **uuid, xlsx, exceljs** (tiện ích)

## 3. Kỹ thuật & Pattern nổi bật
- **Clean Architecture (Layered):** Tách rõ Router, Controller, Service, Model, Middleware, Utils.
- **Domain-driven Routing:** Tách route theo domain, chuẩn RESTful, dễ mở rộng.
- **Dynamic Form:** Hệ thống form động, cho phép admin tự cấu hình fields, validate động, branching logic.
- **Soft Delete:** Xử lý xóa logic với trường `active` thay vì xóa cứng.
- **Logging & Tracing:** Ghi log chuyên nghiệp (log4js), correlationId xuyên suốt request.
- **Security:** Vá lỗ hổng IDOR, tăng cường security headers, rate limit, chống SQL Injection (ORM hóa query).
- **File Upload & S3:** Hỗ trợ upload file lớn, lưu trữ S3, chunking.
- **Export/Import Excel:** Dùng exceljs/xlsx cho import/export dữ liệu lớn.
- **Puppeteer Automation:** Chụp baseline UI, smoke test tự động.
- **CI/CD scripts:** Tự động hóa build, backup, import/export qua scripts.

## 4. Flow chức năng lớn
### 4.1. Quản lý Sự kiện (Event)
- Tạo/sửa/xóa sự kiện (soft delete)
- Quản lý trạng thái, thời gian, thông tin chi tiết
- Phân quyền theo vai trò (RBAC)

### 4.2. Quản lý Câu hỏi & Khảo sát (Question/Answer)
- Tạo form khảo sát động, branching logic
- Thu thập, xuất dữ liệu khảo sát
- Xử lý xung đột xóa câu hỏi (soft delete)

### 4.3. Đăng ký & Check-in
- Đăng ký tham gia sự kiện, xác thực OTP
- Check-in qua QR code, tracking thời gian

### 4.4. Quay số trúng thưởng
- Tạo danh sách quay số, random hóa, ghi log kết quả
- Xuất kết quả, thống kê, bảo mật chống gian lận

### 4.5. Thống kê & Báo cáo
- Dashboard thống kê real-time
- Xuất báo cáo Excel, biểu đồ

### 4.6. Quản trị & Phân quyền
- Hệ thống RBAC, phân quyền chi tiết từng chức năng
- Audit log, tracking thao tác admin

## 5. Các bài học & điểm mạnh
- **Tối ưu maintain:** Kiến trúc tách lớp, dễ mở rộng, dễ onboard dev mới.
- **Security-first:** Vá lỗ hổng, kiểm soát truy cập, log đầy đủ.
- **Tự động hóa:** Script backup, import/export, baseline UI, smoke test.
- **Khả năng mở rộng:** Chuẩn RESTful, domain-driven, dễ tách microservice.
- **Kinh nghiệm thực chiến:**
	- Triển khai thực tế với các chỉ số:
		- **48 sự kiện** đã tổ chức
		- **9 tài khoản quản trị**
		- **270,524 lượt trả lời khảo sát**
		- **235 lượt quay số trúng thưởng**
		- **65 giải thưởng** đã phát
		- **4,659 log thao tác hệ thống**

	- Đã xử lý nhiều edge case nghiệp vụ thực tế, đáp ứng tải lớn, kiểm thử qua nhiều đợt sự kiện đông người.
	- **Peak hệ thống thực tế:**
		- Ngày cao nhất: 3,325 lượt trả lời khảo sát (24/01/2026)
		- Giờ cao nhất: 2,433 lượt trả lời khảo sát trong 1 giờ (01:00, 24/01/2026)
		- Phút cao nhất: 103 lượt trả lời khảo sát/phút (16:43-16:45, 18/12/2025)
		- Top 5 ngày peak: 24/01/2026 (3,325), 22/03/2026 (2,339), 18/12/2025 (2,111), 18/01/2026 (1,465), 19/11/2025 (1,332)
		- Top 5 giờ peak: 01:00 24/01/2026 (2,433), 23:00 18/12/2025 (869), 16:00 18/12/2025 (642), 15:00 18/12/2025 (599), 02:00 22/03/2026 (507)
		- Top 5 phút peak: 16:44 18/12/2025 (103), 16:43 18/12/2025 (103), 16:45 18/12/2025 (103), 15:55 18/12/2025 (102), 15:56 18/12/2025 (101)

---
*File này tổng hợp để bạn rút gọn, chỉnh sửa lại cho phù hợp CV cá nhân.*
