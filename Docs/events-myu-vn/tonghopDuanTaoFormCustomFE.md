# Tổng hợp Dự án Tạo Form Custom (Góc nhìn FE Developer)

## 1) Mục tiêu tài liệu
Tài liệu này tổng hợp phần Frontend của dự án events-myu-vn theo hướng đi phỏng vấn vị trí FE Developer:
- Chức năng FE đã triển khai thực tế.
- Luồng người dùng và luồng quản trị.
- Kỹ thuật chính đã dùng trong codebase.
- Cách xử lý performance, authentication/security, cookies.
- Cách tránh hydration mismatch trong bối cảnh Gatsby + React.

## 2) Phạm vi vai trò FE trong dự án
- Xây dựng giao diện khảo sát động theo slug sự kiện.
- Triển khai form renderer cho nhiều loại câu hỏi và chế độ user/admin.
- Tích hợp đăng nhập Microsoft 365 (MSAL) và luồng callback token.
- Tích hợp API layer dùng fetch, timeout, abort, chuẩn hóa lỗi.
- Xây dựng trang thống kê, quản trị kết quả quay số, xuất Excel.
- Xử lý các bài toán UX/performance: debounce autosave, debounce search, loading state, pagination.
- Xử lý các vấn đề SSR/CSR đặc thù Gatsby để tránh lỗi khi render trên server.

## 3) FE architecture và stack
### 3.1 Nền tảng
- Gatsby 5 + React 18.
- Tổ chức theo pages, components, hooks, api/controllers.
- CSS kết hợp Tailwind + MUI (Material UI/Joy).

### 3.2 Các thư viện chính
- Auth: @azure/msal-browser, @azure/msal-react.
- UI/Form: React component-based, react-beautiful-dnd.
- Data export: xlsx, exceljs.
- Media/Utility: html-to-image, react-qrcode-logo, query-string.
- Monitoring cơ bản FE: console logging theo flow.

### 3.3 Cấu trúc kỹ thuật đáng chú ý
- wrap root bằng provider để khởi tạo MSAL trước khi app render.
- API client tập trung để chuẩn hóa request/timeout/error handling.
- Utility isBrowser để phân tách code chạy client và code SSR.

## 4) Chức năng FE nổi bật đã triển khai
### 4.1 Dynamic Form Builder/Renderer
- Hỗ trợ nhiều loại field: text, longText, radio, multichoice, date, select, location, image.
- Render component theo type động.
- Admin có thể:
  - Thêm câu hỏi.
  - Nhân bản câu hỏi.
  - Xóa câu hỏi.
  - Kéo thả thay đổi thứ tự câu hỏi.
- User có thể:
  - Trả lời khảo sát theo từng event slug.
  - Validate trường bắt buộc trước submit.

### 4.2 Chế độ User/Admin trong cùng trang
- Phân mode theo email/session:
  - User mode: submit câu trả lời.
  - Admin mode: chỉnh cấu trúc form và tự động lưu thay đổi.
- Tự động map câu trả lời cũ vào danh sách câu hỏi khi user quay lại.

### 4.3 Student Autofill theo query params
- Hỗ trợ đọc callback_url và idhoso từ URL.
- Gọi API ngoài để lấy dữ liệu thí sinh.
- Tự động điền vào một số câu hỏi đầu (ho_ten, sdt, ngành đăng ký...).

### 4.4 Dashboard và trang quản trị dữ liệu
- Trang thống kê danh sách sự kiện theo user đăng nhập.
- Trang kết quả quay số cho admin:
  - Search.
  - Pagination.
  - Export danh sách trúng thưởng ra Excel.

### 4.5 Tiện ích nghiệp vụ FE
- Xuất kết quả khảo sát ra Excel từ dữ liệu answers.
- Tạo/ tải QR code cho link form.
- Upload file ảnh lên S3 bằng AWS SDK.

## 5) Luồng FE end-to-end (ngắn gọn cho phỏng vấn)
### 5.1 Luồng User làm khảo sát
1. User vào trang khảo sát theo slug.
2. FE lấy event + questions từ API.
3. FE xác định chế độ login yêu cầu/không yêu cầu.
4. User nhập dữ liệu, FE validate required fields.
5. FE submit answers.
6. Nếu cấu hình gửi email bật, FE gọi API gửi thông báo.
7. FE cập nhật step hoặc hiển thị trạng thái hoàn tất.

### 5.2 Luồng Admin cấu hình form
1. Admin đăng nhập.
2. FE tải event/questions.
3. Admin thêm/sửa/xóa/sắp xếp câu hỏi.
4. FE debounce thay đổi (3 giây) rồi tự động gọi update event/questions.
5. FE reload dữ liệu mới để đảm bảo đồng bộ state.

### 5.3 Luồng Office 365 login
1. FE khởi tạo MSAL ở root.
2. User loginRedirect tới Microsoft.
3. Sau redirect, FE handleRedirectPromise.
4. FE set active account + lưu token + lưu mail/info session.
5. FE gọi API cần quyền truy cập.

## 6) Kỹ thuật FE đã dùng (điểm cộng CV)
### 6.1 API client tập trung
- Tạo hàm apiRequest dùng chung.
- Tự động gắn Authorization Bearer khi có token.
- Chuẩn hóa response thành object status/message/error.
- Xử lý timeout bằng AbortController.

### 6.2 State management theo React hooks
- useState cho state cục bộ từng màn hình.
- useRef cho debounce timer và snapshot previous state.
- useCallback/useMemo tại các điểm cần ổn định function và tính toán.

### 6.3 Routing và dynamic pages
- Dùng file-based routing của Gatsby với [slug], [id].
- Tách luồng theo trang nghiệp vụ: khảo sát, thống kê, quay số admin, callback auth.

## 7) Xử lý performance (thực tế triển khai)
### 7.1 Debounce để giảm số lần gọi API
- Debounce autosave admin: 3000ms.
- Debounce search ở trang kết quả quay số: 1000ms.
- Giảm burst request khi người dùng nhập nhanh/chỉnh sửa liên tục.

### 7.2 Timeout và hủy request treo
- Mỗi request có timeout mặc định 30s.
- Dùng AbortController để hủy request quá hạn.
- Trả thông điệp lỗi rõ ràng cho user khi timeout/network fail.

### 7.3 Giảm tải render và thao tác dữ liệu
- useMemo cho pagination range.
- So sánh dữ liệu cũ/mới trước khi setState ở một số luồng.
- Chỉ gọi API khi điều kiện mail/id hợp lệ.

### 7.4 Cập nhật phiên bản an toàn cho production
- Hook kiểm tra version định kỳ 30 phút.
- Khi phát hiện version mới, thông báo và reload tự động.

## 8) Security, authentication và cookies (góc nhìn FE)
### 8.1 Cách auth hiện tại
- FE nhận token từ login callback và lưu để gọi API.
- API request đính kèm Authorization: Bearer <token>.
- Backend verify JWT bằng JWKS (RS256).

### 8.2 Cách lưu token/session hiện tại
- Token và một số thông tin được lưu ở localStorage/sessionStorage.
- MSAL cấu hình cacheLocation = sessionStorage.
- storeAuthStateInCookie = false.

### 8.3 Cookies trong dự án này
- Cookies không phải cơ chế lưu phiên chính trong FE hiện tại.
- Ứng dụng chủ yếu dùng sessionStorage/localStorage cho auth/session state.

### 8.4 Định hướng hardening để trình bày phỏng vấn
- Nếu cần tăng bảo mật chống XSS token theft, có thể chuyển sang mô hình:
  - Access token sống ngắn.
  - Refresh token trong HttpOnly + Secure + SameSite cookie.
  - FE không đọc refresh token trực tiếp.
- Kết hợp CSP, sanitize input hiển thị rich text, và giới hạn domain upload/callback.

## 9) Hydration mismatch trong Gatsby: cách xử lý
### 9.1 Rủi ro thường gặp
- Đọc window/localStorage/sessionStorage khi đang SSR.
- Render khác nhau giữa server và client do phụ thuộc browser API.

### 9.2 Cách đã áp dụng trong codebase
- Utility isBrowser và guard typeof window để chỉ chạy logic browser phía client.
- Dùng useEffect cho các side-effect đọc storage, query params, redirect auth.
- Có màn hình chờ khi MSAL chưa initialize xong để tránh render lệch trạng thái.

### 9.3 Checklist giảm lỗi hydration mismatch
- Không truy cập window/document trực tiếp trong phần render SSR.
- Tách dữ liệu phụ thuộc client vào useEffect.
- Đảm bảo initial UI nhất quán trước và sau hydrate.
- Với component phụ thuộc DOM nặng, cân nhắc client-only render.

## 10) Thành quả và tác động (nên đưa vào CV)
- Đã tham gia xây dựng FE cho hệ thống event/survey chạy production với lượng usage lớn.
- Triển khai thành công dynamic form hỗ trợ đa loại câu hỏi và admin builder.
- Tối ưu UX và API traffic bằng debounce + timeout + loading states.
- Tích hợp SSO Office 365 và xử lý flow callback ổn định.
- Hỗ trợ xuất dữ liệu nghiệp vụ (Excel) và tiện ích vận hành (QR, quản trị kết quả).

## 11) Gợi ý bullet CV cho vị trí FE Developer
- Built and maintained a dynamic survey platform on Gatsby + React, supporting multi-type question rendering and admin form builder workflows.
- Implemented Microsoft 365 SSO (MSAL) with redirect/callback token flow and authenticated API integration.
- Improved frontend performance and reliability via debounced autosave/search, AbortController-based timeout handling, and optimized pagination rendering.
- Mitigated SSR/client rendering issues in Gatsby through browser guards, effect-based client logic, and hydration-safe initialization patterns.
- Delivered business-critical modules: survey submission, event statistics, prize result administration, Excel export, and QR utilities.

## 12) Câu trả lời mẫu khi phỏng vấn FE
### Câu hỏi: Bạn xử lý performance cho form lớn như thế nào?
- Tôi giảm số lần gọi API bằng debounce autosave/search, giới hạn request timeout bằng AbortController, và tối ưu render bằng useMemo/useCallback tại các điểm nóng.

### Câu hỏi: Bạn xử lý auth ở FE ra sao?
- Tôi tích hợp SSO MSAL, xử lý redirect callback, quản lý token theo session, đính Bearer token cho API và phối hợp backend verify JWT bằng JWKS.

### Câu hỏi: Với Gatsby, bạn tránh hydration mismatch thế nào?
- Tôi không dùng browser API trong SSR path, luôn guard bằng isBrowser/typeof window, chuyển logic client-only sang useEffect, và dùng trạng thái initialize để tránh UI lệch giữa server và client.

---
Ghi chú: Đây là bản FE-centric để dùng cho CV/phỏng vấn. Bạn có thể rút gọn thành 1 trang A4 bằng cách giữ các phần 2, 4, 7, 8, 11.