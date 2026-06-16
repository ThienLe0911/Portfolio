# Tổng hợp dự án MyU.vn

## 1. Công nghệ sử dụng
- **Backend:** Node.js (>=12.16.2), Koa 2 framework
- **Database:** MySQL, ORM: Sequelize
- **Cache:** Redis
- **Frontend:** Edge.js template engine (SSR), sử dụng cho admin/web
- **Media:** Lưu trữ S3 (AWS S3)
- **Queue/Scheduler:** node-cron, node-schedule
- **API Docs:** apidocjs
- **Validation:** Joi
- **Logging:** log4js, custom structured logging, Correlation ID
- **Khác:** axios, multer, sendgrid, elasticsearch, qrcode, nodemailer, moment, uuid, xlsx, ...

## 2. Kỹ thuật & Best Practices
- **Structured Logging & Tracing:**
  - Mỗi request gắn Correlation ID xuyên suốt, log đầy đủ các bước (REQUEST_START, REQUEST_END, STEP_START, STEP_END, DB_QUERY, EXTERNAL_API, ERROR)
  - Log ra file và có thể query/debug theo Correlation ID
- **Clean Code & Coding Rule:**
  - Áp dụng nguyên tắc clarity over cleverness, SRP, DRY, edge case, security first
  - Tách rõ controller/service, cấu trúc thư mục logic
  - Có tài liệu rulecoding.md cho AI/code review
- **Validation & Security:**
  - Validate input bằng Joi, chống SQL Injection, XSS, CSRF
  - Sử dụng dotenv cho biến môi trường, không hard-code secret
- **API Design:**
  - RESTful, phân quyền RBAC, phân tách rõ module (admin/api/web)
- **Scheduler/Job:**
  - Xử lý các tác vụ định kỳ: sync dữ liệu, gửi email, thống kê, ...
- **Upload/Media:**
  - Hỗ trợ upload file lớn, lưu S3, sinh QR code, xử lý ảnh
- **Payment Integration:**
  - Tích hợp nhiều cổng: Sacombank, VNPay, MoMo, ZaloPay
- **ElasticSearch:**
  - Index sản phẩm, hỗ trợ search nhanh

## 3. Flow chức năng lớn
### 3.1 Đăng nhập/SSO
- Hỗ trợ SSO MyU, OAuth2, refresh token, bảo vệ route, phân quyền

### 3.2 Quản lý đơn hàng
- Đặt hàng, thanh toán, cập nhật trạng thái, tracking, thống kê
- Tích hợp nhiều phương thức thanh toán, xử lý callback IPN

### 3.3 Quản lý thành viên/đào tạo
- Quản lý user, phân nhóm, quản lý thông tin đào tạo, liên hệ, địa chỉ

### 3.4 Quản lý bán hàng/shop
- Quản lý sản phẩm, đơn hàng, shop, coupon, khuyến mãi

### 3.5 Dashboard/Thống kê
- Tổng hợp số liệu: đơn hàng, doanh thu, người dùng, sản phẩm, coupon, shop
- Có dashboard queries SQL mẫu (doc/DASHBOARD_QUERIES.md)

### 3.6 Logging & Audit
- Log mọi thay đổi, tracking request, debug theo Correlation ID

## 4. Chỉ số hệ thống & Peak

### 4.1 Các chỉ số thực tế (KPIs - cập nhật 2026)
**Tổng số đơn hàng:** 47.288
**Đơn hoàn thành:** 1.739
**Đơn huỷ:** 0
**Tổng doanh thu:** 93.140.016.910,8 VND
**User active:** 184.908
**Tổng transaction:** 317.084
**Peak đơn/ngày:** 8.823 đơn vào ngày 2025-11-24
**Thời gian đơn hàng gần nhất:** 25/04/2026 12:39:47

**Trung bình DAU (Daily Active Users) 30 ngày gần nhất:** 151 user/ngày

> DAU từng ngày gần nhất:
> 2026-04-27: 13 user active
> 2026-04-26: 24 user active
> 2026-04-25: 134 user active
> 2026-04-24: 55 user active
> 2026-04-23: 99 user active
> 2026-04-22: 240 user active
> 2026-04-21: 76 user active
> 2026-04-20: 142 user active
> 2026-04-19: 118 user active
> 2026-04-18: 204 user active
> 2026-04-17: 331 user active
> 2026-04-16: 816 user active
> 2026-04-15: 168 user active
> 2026-04-14: 25 user active
> 2026-04-13: 31 user active
> 2026-04-12: 70 user active
> 2026-04-11: 109 user active
> 2026-04-10: 385 user active
> 2026-04-09: 333 user active
> 2026-04-08: 229 user active
> 2026-04-07: 76 user active
> 2026-04-06: 40 user active
> 2026-04-05: 122 user active
> 2026-04-04: 300 user active
> 2026-04-03: 100 user active
> 2026-04-02: 31 user active
> 2026-04-01: 56 user active
> 2026-03-31: 60 user active
> 2026-03-30: 173 user active
> 2026-03-29: 41 user active
> 2026-03-28: 85 user active

> Truy vấn mẫu:
```sql
SELECT 
  (SELECT COUNT(*) FROM orders WHERE is_delete = 0) AS total_orders,
  (SELECT COUNT(*) FROM orders WHERE is_delete = 0 AND order_status = 5) AS completed_orders,
  (SELECT COUNT(*) FROM orders WHERE is_delete = 0 AND is_cancel = 1) AS cancelled_orders,
  (SELECT SUM(order_total_final) FROM orders WHERE is_delete = 0 AND payment_status = 2) AS total_revenue,
  (SELECT COUNT(*) FROM users WHERE status = 1) AS total_active_users,
  (SELECT COUNT(*) FROM products WHERE is_publish = 1) AS total_active_products,
  (SELECT COUNT(*) FROM coupons WHERE is_publish = 1) AS total_active_coupons,
  (SELECT COUNT(*) FROM shops WHERE is_active = 1) AS total_active_shops;
```

### 4.2 Peak hệ thống
- Ghi nhận peak truy cập, peak giao dịch (cần lấy từ log hoặc dashboard thực tế)
- Ví dụ: Peak 10.000 request/phút, 2.000 đơn hàng/giờ, 5.000 user online đồng thời (tuỳ số liệu thực tế)
- Có thể lấy log từ structured logging hoặc dashboard monitoring

### 4.3 Transaction thực thi
- Tổng số transaction đã thực thi, peak transaction/phút/giờ
- Truy vấn log hoặc bảng transaction để thống kê

## 5. Điểm mạnh dự án
- Kiến trúc rõ ràng, dễ mở rộng, tách module tốt
- Logging & tracing mạnh, dễ debug, truy vết lỗi
- Tích hợp đa dạng payment, media, search
- Hỗ trợ scale, cache, queue, scheduler
- Áp dụng best practice về bảo mật, validation, coding rule
- Có dashboard thống kê, dễ kiểm soát vận hành

---
*File này tổng hợp để phục vụ phỏng vấn, viết CV, hoặc trình bày dự án. Có thể bổ sung số liệu thực tế, peak, transaction, ... từ dashboard/log khi cần.*
