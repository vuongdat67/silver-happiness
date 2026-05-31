---
tags:
  - clf-02
  - AWS
---
# AWS CLF-02 | Day 2 — Bảo mật & Tuân thủ

---

## 1. Shared Responsibility Model

**Nguyên tắc cốt lõi:** AWS bảo mật _phần cứng và hạ tầng_, khách hàng bảo mật _những gì họ đặt lên đó_.

**Mở rộng quan trọng:**

- **EC2** → khách hàng tự vá OS, cấu hình firewall, quản lý runtime. AWS chỉ đảm bảo hypervisor hoạt động.
- **RDS** → AWS vá database engine, khách hàng chỉ lo dữ liệu và IAM access.
- **Lambda** → AWS quản lý gần hết (OS, runtime patch), khách hàng chỉ lo code và IAM.

> **Quy tắc nhớ:** Dịch vụ càng "managed" → trách nhiệm khách hàng càng thu hẹp về tầng dữ liệu và IAM.

---

## 2. Bảo vệ Dữ liệu

**Data in transit** → dùng TLS/SSL. Ai kích hoạt? Thường là ứng dụng phía khách hàng.

**Data at rest** → dùng AES-256. AWS cung cấp KMS (Key Management Service) để quản lý key.

**Điểm hay bị nhầm:** AWS _cung cấp công cụ mã hóa_, nhưng khách hàng _quyết định có bật hay không_ → nếu không bật là lỗi khách hàng, không phải AWS.

---

## 3. Logging & Monitoring — Phân biệt 3 dịch vụ

|Dịch vụ|Câu hỏi nó trả lời|Dùng khi|
|---|---|---|
|**CloudWatch**|Hệ thống đang chạy thế nào?|Monitor CPU, memory, set alarm|
|**CloudTrail**|Ai làm gì, lúc nào?|Audit API call, điều tra sự cố|
|**AWS Config**|Cấu hình tài nguyên có đúng không?|Kiểm tra compliance, lịch sử thay đổi config|

**Ví dụ phân biệt:** EC2 bị xóa → CloudTrail cho biết _ai xóa_. CPU tăng đột biến → CloudWatch phát hiện. Security group bị mở port 22 → AWS Config phát hiện sai cấu hình.

---

## 4. IAM — Quản lý Danh tính

**Root User** — chỉ dùng cho:

- Thay đổi cài đặt billing
- Đóng tài khoản AWS
- Khôi phục quyền IAM bị khóa

→ Mọi việc còn lại: tạo IAM Admin rồi dùng.

**Cấu trúc IAM:**

```
User → thuộc → Group → gắn → Policy
Role → gắn → Policy (cấp cho service/app, không phải người)
```

**Điểm quan trọng về Role:** Role cấp _temporary credentials_ (STS token), không phải password cố định. EC2 muốn đọc S3 → gắn IAM Role vào EC2, không nhúng access key trong code.

**Least Privilege** — cấp đúng đủ quyền, không cấp thừa. Đây là nguyên tắc thiết kế, không phải tính năng.

---

## 5. Security Group vs NACL

||Security Group|NACL|
|---|---|---|
|Áp dụng cho|EC2 instance (ENI)|Subnet|
|Stateful/Stateless|Stateful|Stateless|
|Deny rõ ràng|Không|Có|
|Mặc định|Deny all inbound|Allow all|

**Stateful vs Stateless — hiểu đúng:**

- SG stateful: cho phép request vào → response tự động được ra, không cần rule riêng.
- NACL stateless: phải tạo rule cho cả inbound lẫn outbound riêng biệt, không thì response bị chặn.

**Thực tế triển khai:** Dùng cả hai theo mô hình defense-in-depth — NACL chặn ở tầng subnet, SG chặn ở tầng instance.

---

## 6. Các dịch vụ bảo mật — Nhớ đúng chức năng

|Dịch vụ|Chức năng chính|
|---|---|
|**GuardDuty**|Phát hiện threat bằng ML (phân tích VPC Flow Log, CloudTrail, DNS)|
|**WAF**|Chặn HTTP attack: SQLi, XSS, bot|
|**Shield Standard**|Free, tự động chống DDoS L3/L4|
|**Shield Advanced**|Trả phí, thêm DDoS L7, 24/7 DRT support|
|**Inspector**|Scan lỗ hổng bảo mật trên EC2, container|
|**Security Hub**|Tổng hợp findings từ nhiều dịch vụ vào 1 chỗ|
|**Artifact**|Tải báo cáo compliance (SOC, PCI, ISO)|
|**Macie**|Phát hiện dữ liệu nhạy cảm (PII) trong S3|

**Mở rộng Macie** — hay bị bỏ sót trong tài liệu: dùng ML để phát hiện credit card, passport, email bị lộ trong S3 bucket.

---

## 7. S3 MFA Delete — Chi tiết cần nhớ

Điều kiện bắt buộc để bật:

1. Phải bật **Versioning** trước
2. Chỉ **Root User** mới có quyền bật/tắt MFA Delete
3. Sau khi bật, mọi thao tác xóa permanent version đều cần MFA

---

## Tóm tắt các "bẫy" hay ra thi CLF-02

- GuardDuty ≠ WAF. GuardDuty _phát hiện_, WAF _chặn_.
- CloudTrail ≠ CloudWatch. Trail = audit log, Watch = metrics.
- Root User không nên dùng hàng ngày, nhưng một số tác vụ _bắt buộc phải dùng Root_.
- NACL stateless → phải có outbound rule tường minh.
- Mã hóa là trách nhiệm _khách hàng kích hoạt_, AWS chỉ cung cấp công cụ.