# Tổng hợp dự án MyU ID (id.myu.vn)

## 1. Tổng quan dự án
- **Tên dự án:** MyU ID (id.myu.vn)
- **Mục tiêu:** Cung cấp hệ thống SSO (Single Sign-On) cho hệ sinh thái myu.vn, quản lý tài khoản, xác thực đa kênh (email, SMS, social login), bảo mật, quản lý thiết bị, logging tập trung.
- **Tech stack chính:**
  - Node.js (>=12.16.2)
  - Koa 2 framework
  - MySQL (Sequelize ORM)
  - Redis (cache/session)
  - AWS S3 (lưu trữ media)
  - Elasticsearch (logging, phân tích log)
  - Winston, Log4js (logging)
  - Joi (validate input)
  - SendGrid, Nodemailer (gửi email)
  - Zalo ZNS, SMS provider (gửi OTP)
  - Docker (triển khai)

## 2. Các kỹ thuật & best practices đã áp dụng
- **Authentication:**
  - OAuth2 Authorization Code, Password Grant, Refresh Token
  - Social login: Google, Facebook, Apple
  - Xác thực OTP (SMS, ZNS, Email)
  - Quản lý thiết bị đăng nhập, xác thực thiết bị mới
- **Security:**
  - Hash password (bcrypt)
  - JWT access/refresh token
  - CSRF, CORS, session security
  - Xác thực 2 lớp (2FA) qua OTP
- **Logging & Monitoring:**
  - Structured logging (Winston, Log4js)
  - Log lifecycle request, business step, error, external API
  - Log vào Elasticsearch theo flow (auth, register, reset password...)
  - Log file backup, log phân quyền
- **Scalability:**
  - Redis cache/session
  - Connection pool MySQL
  - Tách module, middleware rõ ràng
- **Validation:**
  - Joi schema validation cho API
- **Localization:**
  - Đa ngôn ngữ (i18n) với koa-locales
- **DevOps:**
  - Docker, .env config, scripts init DB, test data

## 3. Flow chức năng lớn
### 3.1. Đăng nhập/Đăng ký (Auth Flow)
- Đăng nhập: Nhận username/password → validate → kiểm tra user → xác thực thiết bị → sinh token → log activity
- Đăng ký: Nhận thông tin → validate → kiểm tra trùng → gửi OTP → xác thực OTP → tạo user → log
- Social login: Nhận token social → xác thực → tạo user nếu chưa có → sinh token
- Quên mật khẩu: Nhận email/phone → gửi OTP → xác thực OTP → đổi mật khẩu

### 3.2. Quản lý thiết bị
- Lưu thông tin device khi user đăng nhập
- Xác thực thiết bị mới qua OTP
- Cho phép quản lý, revoke device

### 3.3. Logging tập trung
- Log structured theo từng bước (request, step, error, external...)
- Log vào Elasticsearch các flow quan trọng (auth, register, reset password...)
- Có thể truy vết request theo correlationId

### 3.4. Quản lý user/profile
- CRUD user, cập nhật thông tin, xác thực email/phone
- Lưu lịch sử hoạt động (UserActivity)

## 4. Các chỉ số peak hệ thống & đo lường sử dụng
- **Số lượng user đăng ký:** (lấy từ bảng user)
- **Số lượng user active theo ngày/tháng:** (truy vấn bảng user_activity, user_login)
- **Số lượng request peak/ngày:** (phân tích log file hoặc Elasticsearch)
- **Tỉ lệ thành công đăng nhập/đăng ký:** (log structured, phân tích theo step)
- **Số lượng thiết bị đăng nhập:** (bảng user_device)
- **Tỉ lệ xác thực OTP thành công/thất bại:** (log step OTP)
- **Các chỉ số bảo mật:** số lần đổi mật khẩu, số lần xác thực thiết bị mới, số lần gửi OTP...

Tổng số user: 223,864
User active 7 ngày gần nhất: (từng ngày cụ thể)
Tổng số thiết bị đăng nhập: 10,454
Tỉ lệ OTP thành công/thất bại: status=1 (thành công): 183,957, status=0 (thất bại): 122,853, status=2: 2,429
Số lần đổi mật khẩu: 75,497
Số lần xác thực thiết bị mới: 0
Số lần gửi OTP: 309,239

> **Ghi chú:**
> - Các chỉ số này có thể lấy bằng truy vấn SQL hoặc phân tích log Elasticsearch.
> - Để lấy peak hệ thống, có thể dùng dashboard Grafana kết nối Elasticsearch/MySQL.

## 5. Một số điểm nổi bật
- Áp dụng structured logging, correlationId để trace request end-to-end
- Logging phân tầng: file, Elasticsearch, phân loại theo flow
- Hỗ trợ đa kênh xác thực (email, SMS, social)
- Quản lý thiết bị, bảo mật nâng cao
- Dễ mở rộng, tách module rõ ràng, chuẩn RESTful

---

*File này tổng hợp để phục vụ viết CV/phỏng vấn, có thể bổ sung thêm các số liệu thực tế, hình ảnh dashboard, hoặc chi tiết flow khi cần.*
