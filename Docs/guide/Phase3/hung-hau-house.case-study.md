# Hung Hau House — Case Study Draft

## Project Snapshot
- Name: Hung Hau House
- Role: Full-stack web engineer (architecture + FE delivery)
- Product type: Internal platform with admin and operational modules
- Stack: Next.js 15, React 19, TypeScript, Sequelize, MSSQL, TanStack Query

## Overview
Hung Hau House là dự án web theo App Router với yêu cầu vừa đảm bảo trải nghiệm tương tác cao, vừa tối ưu kiến trúc cho các module quản trị dữ liệu. Trọng tâm kỹ thuật nằm ở việc tách lớp rõ ràng, xử lý auth an toàn và tối ưu SSR/CSR trong môi trường production.

## Problem
- Nhiều module nghiệp vụ (posts, evaluation, registration events) cần mở rộng đồng thời.
- Cần tránh các lỗi hydration mismatch trên các trang phụ thuộc browser APIs.
- Cần nhất quán auth flow giữa cookie session, bearer token và middleware server.

## Architecture
- Luồng API chuẩn: route -> middleware chain -> controller -> service -> model.
- Middleware chain gồm relationId tracing, Azure auth verify và async API logging.
- FE theo pattern server page + client shell cho trang nhiều tương tác.
- Data fetching kết hợp SSR cache/revalidate và TanStack Query client cache.

## Challenges
- Tách ranh giới giữa Server Component và Client Component đúng ngữ cảnh.
- Kiểm soát auth state để tránh redirect race conditions.
- Giữ hiệu năng tốt trên các trang data-heavy và workflows dài.

## Trade-offs
- Chọn hybrid SSR + client shell thay vì thuần client:
  - Ưu điểm: giảm bundle hydrate ban đầu, tối ưu TTFB cho một số route.
  - Đánh đổi: tăng độ phức tạp khi tổ chức data flow.
- Chọn cookie-first auth fallback bearer:
  - Ưu điểm: ổn định hơn cho SSR paths.
  - Đánh đổi: cần governance rõ khi debug auth failures.

## Results
- Hoàn thiện cấu trúc kỹ thuật có khả năng mở rộng theo module.
- Giảm rủi ro hydration mismatch bằng mounted guards và dynamic imports.
- Nâng độ ổn định vận hành bằng async logging và query/index strategy.

## Engineering Highlights
- Triển khai middleware chain rõ trách nhiệm cho tracing, auth, logging.
- Tổ chức SSR/CSR theo App Router patterns thực chiến.
- Áp dụng debounce autosave và cache strategies cho màn hình phức tạp.
- Tối ưu realtime lifecycle bằng cleanup listeners/disconnect policies.

## What I Learned
- Kiến trúc tốt không chỉ ở tách lớp mà còn ở tính nhất quán giữa auth, logging và data flow.
- Tối ưu hydration sớm giúp giảm đáng kể lỗi khó tái hiện trên production.

## Next Iteration
- Đẩy mạnh test coverage cho auth edge cases và review workflows.
- Chuẩn hóa observability metrics theo từng module nghiệp vụ.

## Source Links
- `Docs/Hung Hau House/tonghopduanNgoinhaHunghau.md`
- `Docs/Hung Hau House/tonghopduanNgoinhaHunghauFE.md`
