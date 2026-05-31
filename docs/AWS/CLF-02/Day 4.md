---
tags:
  - clf-02
  - AWS
---
# AWS CLF-02 | Day 4 — Chi phí & Hỗ trợ

---

## 1. Triết lý Tối ưu hóa Chi phí

Ba nguyên tắc cốt lõi:

**Rightsizing** — Chọn instance size vừa đủ, không over-provision. Thà dùng nhiều instance nhỏ hơn là ít instance lớn. Công cụ hỗ trợ: AWS Compute Optimizer phân tích metric thực tế và gợi ý resize.

**Elasticity** — Tài nguyên chỉ tồn tại khi cần. Auto Scaling group co/giãn theo tải thực. Không elasticity = trả tiền cho tài nguyên idle.

**Match supply to demand** — Lambda (serverless) là cực đoan của nguyên tắc này: không có request = không mất tiền.

---

## 2. Mô hình Định giá EC2 — Chọn đúng = tiết kiệm lớn

|Mô hình|Discount|Khi nào dùng|
|---|---|---|
|On-Demand|0% (baseline)|Dev/test, tải không đoán được|
|Reserved (1 năm)|~40%|Production ổn định, biết trước nhu cầu|
|Reserved (3 năm)|~72%|Long-term, steady-state workload|
|Savings Plans|tương đương RI|Linh hoạt hơn RI, áp dụng cho EC2 + Lambda + Fargate|
|Spot|~90%|Batch job, CI/CD, render — **chấp nhận bị terminate**|
|Dedicated Host|cao nhất|License ràng buộc hardware (Oracle, Windows Server), compliance|

**Phân biệt RI:**

- **Standard RI** → discount cao nhất, không đổi được loại instance
- **Convertible RI** → có thể đổi family/OS trong term, discount thấp hơn
- **Scheduled RI** → deprecated, không cần thi

**Savings Plans vs RI:** Savings Plans cam kết theo _dollar/giờ_ (VD: $10/hr compute), linh hoạt across region và instance family. RI cam kết theo loại instance cụ thể.

---

## 3. Công cụ Quản lý Chi phí

**Cost Explorer** — Visualize chi phí theo service, region, tag. Có thể forecast 12 tháng. Dùng để phát hiện anomaly.

**Cost and Usage Report (CUR)** — Báo cáo chi tiết nhất, export ra S3, query bằng Athena/QuickSight. Dùng cho kế toán, FinOps.

**AWS Budgets** — Đặt ngưỡng, khi vượt → alert qua SNS/email hoặc trigger hành động tự động (VD: apply SCP chặn provision thêm).

**Trusted Advisor** — Scan 5 pillar: Cost, Security, Fault Tolerance, Performance, Service Limits. Gói Business/Enterprise mới unlock toàn bộ check.

**Pricing Calculator** — Ước tính trước khi deploy, không cần tài khoản AWS.

**Consolidated Billing (AWS Organizations):**

- Gộp tất cả tài khoản thành một bill duy nhất
- **Volume discount cộng dồn** — VD S3: mỗi tài khoản riêng dùng 5TB, gộp lại 50TB → bậc giá thấp hơn
- **RI sharing** — RI mua ở account A tự động apply cho account B nếu có workload phù hợp (có thể tắt tính năng này)

---

## 4. Tối ưu hóa Lưu trữ S3

**Storage Classes theo chi phí (cao → thấp):** S3 Standard → Standard-IA → One Zone-IA → Glacier Instant → Glacier Flexible → Glacier Deep Archive

**Lifecycle Policy** — Rule tự động chuyển class sau N ngày. VD: log file sau 30 ngày → IA, sau 90 ngày → Glacier.

**Intelligent-Tiering** — AWS tự phân tích access pattern và tự move. Phí nhỏ/object/tháng để monitoring. Phù hợp khi access pattern không dự đoán được.

**Requester Pays** — Người download trả phí data transfer, không phải bucket owner. Dùng cho data marketplace, public dataset.

---

## 5. Chi phí Data Transfer — Điểm hay bị bỏ qua

- **Inbound (vào AWS):** Miễn phí
- **Outbound (ra internet):** Tính phí theo GB
- **Giữa AZ trong cùng Region:** Tính phí nhỏ
- **Giữa Region:** Tính phí cao hơn
- **Giữa VPC cùng Region qua peering:** Tính phí AZ-to-AZ

**Giảm chi phí outbound:**

- **CloudFront** — Cache tại edge, giảm request về origin, outbound từ CloudFront rẻ hơn EC2 trực tiếp
- **Direct Connect** — Đường truyền riêng, loại bỏ phí outbound qua internet (thay bằng port fee của Direct Connect, thường rẻ hơn với lượng lớn)

**Data Migration lớn → Snow Family:**

- Snowball Edge: 80TB/thiết bị
- Snowmobile: exabyte scale
- Lý do: truyền 100TB qua 1Gbps internet ≈ 9 ngày + chi phí bandwidth, Snow Family nhanh và rẻ hơn nhiều

---

## 6. Support Plans — Bảng so sánh mở rộng

|Tiêu chí|Basic|Developer|Business|Enterprise|
|---|---|---|---|---|
|Giá|Free|$29/tháng|$100/tháng|$15,000/tháng|
|Tech support|❌|Business hours (email)|24/7 phone/chat/email|24/7 + priority|
|Response time (critical)|—|12 giờ|**1 giờ**|**15 phút**|
|Trusted Advisor|7 checks|7 checks|Full|Full|
|Support API|❌|❌|✅|✅|
|TAM|❌|❌|❌|✅|
|Concierge|❌|❌|❌|✅|
|Well-Architected Review|❌|❌|❌|✅|

**TAM (Technical Account Manager)** — Người chuyên trách, hiểu kiến trúc của bạn, proactive review, tham gia planning. Đây là điểm phân biệt Enterprise vs Business quan trọng nhất trong thi.

---

## 7. Các Tài nguyên Bổ sung Cần Nhớ

**AWS re:Post** — Thay thế AWS Forums, cộng đồng Q&A kỹ thuật.

**AWS IQ** — Kết nối với AWS Certified freelancer/consultant bên thứ ba khi cần triển khai nhanh.

**AWS Managed Services (AMS)** — AWS _vận hành_ infrastructure cho bạn, phù hợp enterprise không có đội DevOps.

**Cloud Center of Excellence (CCoE)** — Không phải dịch vụ AWS, là mô hình tổ chức nội bộ: một team chuyên trách định nghĩa best practice, governance, và enablement cho toàn doanh nghiệp.

---

## Tổng kết — Key Takeaways cho thi CLF-02

> **Spot** = rẻ nhất, chịu được terminate  
> **Reserved 3 năm** = discount cao nhất cho steady workload  
> **Savings Plans** = linh hoạt hơn RI  
> **Enterprise** = có TAM + 15 phút response  
> **Business** = cần Support API + full Trusted Advisor  
> **CUR** = báo cáo chi tiết nhất  
> **Snow Family** = di chuyển data lớn offline  
> **CloudFront/Direct Connect** = giảm data transfer cost