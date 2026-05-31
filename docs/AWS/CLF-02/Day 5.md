---
tags:
  - clf-02
  - AWS
---
# AWS CLF-02 | Day 5 — Security Services Deep Dive

## 1. Shared Responsibility Model (nền tảng tư duy)

Trước khi đi vào từng service, cần nắm rõ ranh giới trách nhiệm:

|Lớp|AWS chịu|Khách hàng chịu|
|---|---|---|
|Physical|✅||
|Hypervisor|✅||
|OS (EC2)||✅ patch, hardening|
|OS (RDS, Lambda)|✅||
|Network config|Infra|Security groups, NACLs|
|Data||✅ encryption, classification|
|IAM||✅ policy, least privilege|

**Mnemonic:** AWS bảo vệ _cloud_, bạn bảo vệ _thứ trong cloud_.

---

## 2. Nhóm Bảo mật & Tuân thủ

### AWS Artifact

- Kho tài liệu compliance: SOC 1/2/3, ISO 27001, PCI DSS, GDPR...
- Dùng khi: kiểm toán, ký NDA với AWS, chứng minh compliance với khách hàng.
- **Không phải tool bảo mật** — chỉ là _document repository_.

### Amazon GuardDuty

- **Threat detection** dựa trên ML + threat intelligence (CloudTrail logs, VPC Flow Logs, DNS logs).
- Phát hiện: port scan, brute force, unusual API calls, crypto mining, C2 communication.
- Không cần cài agent, bật là chạy.
- CIA angle: bảo vệ **Confidentiality + Availability** (phát hiện sớm tấn công).

### AWS WAF

- Layer 7 firewall (HTTP/HTTPS).
- Rule types: IP match, geo match, rate limit, SQL injection, XSS, custom regex.
- Tích hợp với: CloudFront, ALB, API Gateway, AppSync.
- Khác Shield: WAF lọc _nội dung request_, Shield chống _volumetric attack_.

### AWS Shield

- **Standard** (miễn phí): tự động bảo vệ Layer 3/4 DDoS cho mọi AWS resource.
- **Advanced** (trả phí): bảo vệ Layer 7, 24/7 DRT (DDoS Response Team), cost protection khi bị tấn công.
- Dùng khi: ứng dụng critical cần SLA cao, route53, cloudfront, ELB.

### Amazon Inspector

- **Vulnerability assessment** tự động cho EC2, Lambda, container images (ECR).
- Quét: CVE, network exposure, unintended access.
- Output: findings có severity score (Critical/High/Medium/Low).

### AWS Trusted Advisor

- Best practice advisor trên 5 pillar: Cost, Performance, **Security**, Fault Tolerance, Service Limits.
- Security checks: MFA on root, open S3 buckets, unrestricted security groups...
- Free tier: 7 core checks. Business/Enterprise: đầy đủ.

### AWS Security Hub

- **Aggregator** — tập trung findings từ GuardDuty, Inspector, Macie, IAM Access Analyzer...
- Chuẩn hóa theo ASFF (Amazon Security Finding Format).
- So sánh với benchmark: CIS AWS Foundations, PCI DSS, AWS FSBP.

---

## 3. Nhóm IAM

### AWS IAM

- Entities: User, Group, Role, Policy.
- **Least privilege** là nguyên tắc cốt lõi.
- Policy evaluation: Explicit Deny > Explicit Allow > Implicit Deny.
- Root account: không dùng daily, bật MFA, không tạo access key.

### IAM Identity Center (SSO)

- Single Sign-On cho multi-account AWS Organizations.
- Tích hợp IdP ngoài: Azure AD, Okta...
- Thay thế việc tạo IAM user riêng cho từng account.

### Amazon Cognito

- **User Pool**: authentication (đăng ký, đăng nhập, JWT token).
- **Identity Pool**: authorization → đổi token sang AWS temporary credentials (STS).
- Use case: mobile/web app cần truy cập AWS resource trực tiếp.

### IAM Policy Simulator

- Debug policy: test xem user/role có được phép action X trên resource Y không.
- Không thay đổi gì, chỉ simulate.

---

## 4. Nhóm Monitoring & Auditing

### Amazon CloudWatch

- Thu thập: Metrics, Logs, Events.
- Tạo Alarms → trigger SNS, Auto Scaling, Lambda.
- **CloudWatch Logs Insights**: query log dạng SQL-like.
- Dùng cho: operational monitoring, performance, application logs.

### AWS CloudTrail

- **Audit trail** toàn bộ API call trong account (ai làm gì, lúc nào, từ đâu).
- Log lưu vào S3, có thể stream sang CloudWatch Logs.
- **Management Events** (default on) vs **Data Events** (S3 object-level, Lambda invocation — phải bật thêm).
- CIA: bảo vệ **Accountability** — không thể chối bỏ hành động.

### AWS Config

- Track _configuration changes_ theo thời gian (timeline của resource).
- Config Rules: tự động check compliance (ví dụ: S3 không được public, EC2 phải dùng IMDSv2).
- Khác CloudTrail: CloudTrail = _who did what_, Config = _what changed_.

### AWS Audit Manager

- Tự động thu thập evidence cho compliance frameworks (PCI DSS, HIPAA, GDPR...).
- Giảm manual effort khi chuẩn bị audit.

---

## 5. Nhóm Mạng

### Amazon VPC

- Subnet level: **NACL** (stateless, áp dụng cả inbound lẫn outbound, theo thứ tự rule số).
- Instance level: **Security Group** (stateful, chỉ cần allow inbound, outbound tự allow response).
- NACL dùng để block IP cụ thể nhanh chóng (Security Group không có deny rule).

---

## So sánh nhanh dễ nhầm

|Câu hỏi|Đáp án|
|---|---|
|Audit API calls?|CloudTrail|
|Config resource thay đổi thế nào?|AWS Config|
|Phát hiện tấn công realtime?|GuardDuty|
|Chặn SQL injection ở HTTP?|WAF|
|Chống DDoS volumetric?|Shield|
|Quét CVE trên EC2?|Inspector|
|Tổng hợp findings bảo mật?|Security Hub|
|Tài liệu compliance ISO/SOC?|Artifact|
|SSO multi-account?|IAM Identity Center|
|User authn cho web/mobile app?|Cognito User Pool|

---

## Góc nhìn CIA cho CLF-02

- **Confidentiality**: IAM, Cognito, KMS (encryption), WAF
- **Integrity**: CloudTrail, Config, S3 versioning + MFA delete
- **Availability**: Shield, WAF rate limit, Auto Scaling, GuardDuty (early detection)