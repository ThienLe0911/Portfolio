# Phase 4 — User Flow

## 1) Recruiter Flow (fast scan: 60-120s)
1. Vào Home (`/`).
2. Đọc Hero + 1-2 key metrics.
3. Click Projects.
4. Mở 1 case study nổi bật (myU hoặc Events).
5. Quét Results + role impact.
6. Sang Contact và mở resume.

Flow goal:
- Xác nhận nhanh profile phù hợp JD và có impact rõ.

## 2) Hiring Manager Flow (deeper evaluation: 3-7 phút)
1. Vào Home.
2. Xem About + growth narrative.
3. Vào Projects list.
4. Mở 2-3 case studies khác domain (Identity + Platform + Internal).
5. Đọc sections Problem/Trade-offs/Results.
6. Vào Timeline để xem progression.
7. Kết thúc ở Contact.

Flow goal:
- Đánh giá độ chín kỹ thuật, tư duy hệ thống, và khả năng ownership.

## 3) Peer Engineer Flow (technical deep-dive: 5-10 phút)
1. Vào Projects.
2. Chọn case study theo tech interest.
3. Dùng anchors để nhảy đến Architecture/Challenges.
4. Đối chiếu decisions và trade-offs.
5. Xem Timeline để hiểu độ rộng stack theo thời gian.

Flow goal:
- Xác nhận chiều sâu kỹ thuật và chất lượng technical decision making.

## 4) Recovery Flow (khi user vào route sâu trực tiếp)
1. User vào `/projects/{slug}` từ link ngoài.
2. Đọc case study.
3. Dùng breadcrumb hoặc back CTA để quay về `/projects`.
4. Tiếp tục sang `/contact`.

Flow goal:
- Không có dead-end, giữ được chuyển đổi tới contact.

## 5) Conversion Points
- Primary conversion:
  - Contact form/email click
  - Resume download
- Secondary conversion:
  - LinkedIn/GitHub outbound click
