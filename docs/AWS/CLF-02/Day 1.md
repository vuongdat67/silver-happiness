---
tags:
  - clf-02
  - AWS
---
# AWS CLF-02 — Day 1: Nền Tảng Cloud & AWS

---

## 1. AWS & Cloud Computing

**Cloud ≠ server trên internet.** Cloud phải đủ 5 đặc tính NIST:

|Đặc tính|Bản chất|
|---|---|
|On-demand self-service|Tự cấp phát, không cần IT duyệt thủ công|
|Broad network access|Truy cập qua internet/VPN/API|
|Resource pooling|Multi-tenant, dùng chung hạ tầng|
|Elasticity|Scale tự động theo nhu cầu|
|Measured service|Pay-as-you-go, tính tiền theo usage|

**AWS** là CSP (Cloud Service Provider) lớn nhất, cung cấp 200+ dịch vụ trên hạ tầng toàn cầu.

---

## 2. Global Infrastructure

```
Region
 └── Availability Zone (AZ) × 2-6
      └── Data Center(s)
Edge Location → CDN (CloudFront), giảm latency
```

**Lưu ý quan trọng:**

- **Region** → cách ly địa lý, mỗi region độc lập
- **AZ** → cách ly lỗi vật lý (điện, mạng, flood...) nhưng latency thấp giữa các AZ trong cùng region (~1-2ms)
- **Edge Location** → không chạy compute, chỉ cache/CDN

---

## 3. HA vs Fault Tolerance vs DR

||HA|Fault Tolerance|DR|
|---|---|---|---|
|Mục tiêu|Giảm downtime|Zero downtime|Phục hồi sau thảm họa|
|Cơ chế|Active-Standby|Active-Active|Backup + Runbook|
|Downtime|Có thể có (ngắn)|Không|Có thể dài|
|Chi phí|Trung bình|Cao|Tuỳ RTO/RPO|

> **RTO** (Recovery Time Objective): thời gian phục hồi tối đa chấp nhận được  
> **RPO** (Recovery Point Objective): lượng dữ liệu tối đa có thể mất

---

## 4. Scaling & Elasticity

**Vertical Scaling** — tăng size instance (t2.micro → t2.xlarge)

- Phải reboot, có hard limit, chi phí tăng tuyến tính

**Horizontal Scaling** — thêm nhiều instance

- Cần giải quyết: **session management** (stateless app hoặc sticky session)
- Dùng **Load Balancer** để phân phối traffic

**Elasticity** = Horizontal Scaling + **Automation** (Auto Scaling Group)

- Scale out khi tải tăng → Scale in khi tải giảm
- Tối ưu đồng thời: performance + cost

---

## 5. Well-Architected Framework (6 Pillars)

|Pillar|Từ khoá cốt lõi|
|---|---|
|Operational Excellence|Ops as code, small changes, anticipate failure|
|Security|Least privilege, encrypt all, defense in depth|
|Reliability|Auto-recover, test recovery, no capacity guessing|
|Performance Efficiency|Serverless, go global, experiment|
|Cost Optimization|Pay-per-use, right-size, managed services|
|Sustainability|Maximize utilization, efficient hardware|

> Exam hay hỏi: "pillar nào liên quan đến X?" → nhớ từ khoá đặc trưng của từng pillar.

---

## 6. Cloud Adoption Framework (CAF)

CAF ≠ Well-Architected. CAF = **chiến lược chuyển đổi tổ chức**, không phải thiết kế kỹ thuật.

6 perspectives chia 2 nhóm:

**Business side:** Business · People · Governance  
**Technical side:** Platform · Security · Operations

---

## 7. Migration — 7Rs

|Strategy|Khi nào dùng|Nỗ lực|
|---|---|---|
|Retire|Hệ thống không còn dùng|Không|
|Retain|Ràng buộc pháp lý, hardware đặc thù|Không|
|Rehost|Migrate nhanh, không sửa code|Thấp|
|Relocate|Di chuyển cả cụm lớn (VMware)|Thấp|
|Repurchase|Thay bằng SaaS|Trung bình|
|Replatform|Tối ưu nhỏ, không viết lại|Trung bình|
|Refactor|Cloud-native hoàn toàn|Cao|

> Exam tip: **Rehost = Lift & Shift**, **Replatform = Lift, Tinker & Shift**, **Refactor = Re-architect**

---

## 8. Storage & Database

|Loại|Dịch vụ AWS|
|---|---|
|Relational|RDS, Aurora|
|NoSQL (key-value/document)|DynamoDB|
|File storage|EFS|
|Object storage|S3|
|Archive|S3 Glacier|

---

## 9. Cloud Economics

**CapEx vs OpEx:**

- On-prem → CapEx: mua trước, khấu hao, dư thừa capacity
- Cloud → OpEx: trả theo usage, không dư thừa

**Economies of Scale:** AWS mua hạ tầng quy mô cực lớn → cost/unit thấp → lợi ích chuyển cho khách hàng.

**Cost Optimization techniques:**

- **Right-sizing** → chọn instance size phù hợp, không mua thừa
- **Reserved Instances** → cam kết 1-3 năm, giảm đến 72%
- **Spot Instances** → dùng capacity dư của AWS, giảm đến 90%, có thể bị thu hồi
- **Auto Scaling** → không chạy instance khi không cần
- **S3 Storage tiers** → chuyển data ít dùng sang tier rẻ hơn (Glacier)

---

## Điểm cần nhớ cho exam CLF-02

- Cloud = 5 đặc tính NIST, không chỉ là "server trên internet"
- AZ = fault isolation boundary, không phải Region
- HA ≠ Fault Tolerance (downtime vs zero downtime)
- Elasticity = scaling + automation
- 7Rs: nhớ thứ tự tăng dần nỗ lực
- CAF = tổ chức, Well-Architected = kỹ thuật
- Spot có thể bị **interrupt**, không dùng cho workload critical