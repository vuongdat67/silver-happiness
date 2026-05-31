---
tags:
  - clf-02
  - AWS
---
# AWS CLF-02 — Day 3: Ôn tập & Mở rộng kiến thức

---

## 1. Phương thức triển khai và vận hành

**4 cách tương tác với AWS:**

|Phương thức|Bản chất|Dùng khi|
|---|---|---|
|SDK|Gọi API qua code (Python boto3, Java, JS)|Tích hợp ứng dụng|
|CLI|Gọi API qua terminal|Script, tự động hóa|
|Console|GUI web|Khám phá, thủ công|
|IaC (CloudFormation)|Mô tả hạ tầng bằng YAML/JSON|Triển khai nhất quán, tái sử dụng|

> **Điểm chốt:** Mọi phương thức đều gọi AWS API — chỉ khác lớp trừu tượng bên trên.

**Mô hình đám mây — cần phân biệt rõ:**

- **Hybrid Cloud** = kết hợp Public + Private Cloud (cả hai đều là cloud)
- **Hybrid Environment** = On-premise + AWS (một bên không phải cloud)
- **Multi-Cloud** = dùng AWS + Azure + GCP đồng thời (tránh vendor lock-in, nhưng phức tạp hơn)

**Public vs Private Service trong AWS:**

- **Public Service** (S3, API Gateway): endpoint nằm trên internet public zone — accessible từ bất cứ đâu có internet, nhưng vẫn có IAM kiểm soát _authorization_
- **Private Service** (EC2, RDS trong VPC): nằm trong VPC, mặc định isolated hoàn toàn. Muốn ra internet cần IGW; muốn truy cập dịch vụ AWS khác không qua internet cần **VPC Endpoint**

---

## 2. Hạ tầng toàn cầu

**Region → AZ → Data Center (từ to đến nhỏ)**

- **Region:** tập hợp ≥ 2 AZ, cách nhau vài chục km. Chọn region dựa trên: _latency, compliance, service availability, cost_
- **AZ:** 1 hoặc nhiều data center vật lý, kết nối nhau bằng fiber tốc độ cao < 1ms latency — đủ gần để replication đồng bộ, đủ xa để fault isolation
- **Edge Location:** không phải AZ — chỉ là PoP (Point of Presence) cho CloudFront CDN và Global Accelerator. Số lượng nhiều hơn Region nhiều lần (~400+ vs ~30+)

**Mức độ phục hồi — quan trọng để thiết kế hệ thống:**

|Level|Ví dụ|Nếu 1 AZ chết|Nếu 1 Region chết|
|---|---|---|---|
|Globally Resilient|IAM, Route 53|OK|OK|
|Region Resilient|S3, EFS|OK|Mất|
|AZ Resilient|EBS, EC2 đơn|Mất|Mất|

> **EBS gắn với 1 AZ** — đây là lý do EC2 + EBS cần thiết kế HA cẩn thận.

---

## 3. Dịch vụ tính toán

**EC2 — cần hiểu rõ storage:**

- **Instance Store:** NVMe gắn trực tiếp vào host vật lý → tốc độ cực nhanh, nhưng **ephemeral** (mất khi stop/terminate/migrate). Dùng cho buffer, cache, temp data
- **EBS:** mạng-attached, bền vững, có thể detach/reattach. Dùng cho OS volume và data cần giữ lại

**Các loại instance — nhớ theo use case:**

- General (M, T): web server, app server bình thường
- Compute (C): encoding, batch processing, gaming
- Memory (R, X): in-memory DB, real-time big data (SAP HANA)
- Storage (I, D): OLTP DB cần IOPS cao, data warehouse on-disk
- Accelerated (P, G, Inf): ML training, video rendering, HPC

**Container vs VM vs Serverless:**

- **VM (EC2):** cô lập OS hoàn toàn, overhead lớn, khởi động phút
- **Container (ECS/EKS):** chia sẻ OS kernel, overhead nhỏ, khởi động giây. ECS = AWS native, EKS = Kubernetes managed
- **Lambda:** không quản lý server, chạy theo event, tính phí theo 1ms. Giới hạn: timeout 15 phút, memory 10GB, stateless

---

## 4. Cơ sở dữ liệu

**Phân biệt RDS vs Aurora vs DynamoDB:**

||RDS|Aurora|DynamoDB|
|---|---|---|---|
|Loại|Relational SQL|Relational SQL (cloud-native)|NoSQL Key-Value|
|Replication|Multi-AZ sync|6 bản sao / 3 AZ tự động|Multi-region tùy chọn|
|Scale|Vertical chủ yếu|Auto-scale storage|Horizontal vô hạn|
|Latency|ms|ms|ms → µs với DAX|
|Use case|Lift & shift DB|New SQL app on cloud|Session, cart, IoT|

**Điểm mở rộng quan trọng:**

- **Multi-AZ** = HA (High Availability) — failover tự động, không cải thiện read performance
- **Read Replica** = scale đọc — không phải HA, replication async (lag nhỏ)
- **DAX** nằm trước DynamoDB, hoạt động như write-through cache, giảm latency từ ms xuống µs

---

## 5. Dịch vụ mạng

**VPC — kiến trúc cơ bản:**

```
Internet
    ↓
Internet Gateway (IGW)
    ↓
Public Subnet (có route 0.0.0.0/0 → IGW)
    ↓ (qua NAT Gateway)
Private Subnet (không có route trực tiếp ra internet)
```

**Security Groups vs NACL — hay bị nhầm:**

||Security Group|NACL|
|---|---|---|
|Áp dụng lên|ENI (network interface)|Subnet|
|Stateful/Stateless|Stateful|Stateless|
|Rule|Allow only|Allow + Deny|
|Thứ tự rule|Tất cả đánh giá|Đánh giá theo số thứ tự|

> **Stateful** = SG tự nhớ kết nối, traffic chiều về tự động được phép. **Stateless** = NACL cần rule cả inbound lẫn outbound tường minh.

**Các phương thức kết nối On-premise → AWS:**

- **VPN:** mã hóa qua internet, setup nhanh, latency cao, cost thấp
- **Direct Connect:** đường vật lý dedicated, latency thấp, ổn định, cost cao, setup lâu (tuần đến tháng)
- **VPC Endpoint:** không ra internet — Gateway type (S3, DynamoDB miễn phí), Interface type (dùng PrivateLink, có phí)

---

## 6. Lưu trữ

**3 loại storage — phân biệt theo access pattern:**

|Loại|Dịch vụ|Đặc điểm|Use case|
|---|---|---|---|
|Object|S3|Flat namespace, key-value, HTTP API|Backup, static web, data lake|
|File|EFS, FSx|Hierarchy, mount như NFS/SMB|Shared file system nhiều EC2|
|Block|EBS|Raw block device, low latency|OS volume, DB|

**S3 Storage Classes — tối ưu cost:**

- Standard: hay truy cập, không minimum duration
- Intelligent-Tiering: tự động chuyển tầng dựa trên access pattern
- Standard-IA / One Zone-IA: ít truy cập, trả phí retrieval
- Glacier Instant / Flexible / Deep Archive: lưu trữ dài hạn, retrieval từ ms đến 12 giờ

---

## 7. AI/ML và Analytics

**3 tầng ML — biết để chọn đúng:**

- **AI Services** (Rekognition, Polly, Lex, Comprehend, Translate): gọi API, không cần train model, dùng ngay
- **ML Services** (SageMaker): full lifecycle — label data, train, tune, deploy, monitor
- **Infrastructure** (EC2 P/G instances): tự quản lý toàn bộ, dùng TensorFlow/PyTorch thô

**Analytics pipeline điển hình:**

```
Data Source → Kinesis (stream) → S3 (data lake)
                                  ↓
                            Glue (ETL/catalog)
                                  ↓
                    Athena (query) / Redshift (OLAP warehouse)
```

- **Kinesis:** real-time streaming (log, clickstream, IoT)
- **Glue:** crawl schema + ETL job
- **Athena:** serverless SQL trên S3, trả phí theo data scanned
- **Redshift:** columnar store, petabyte scale, OLAP (không phải OLTP)
- **Macie:** ML phát hiện PII/sensitive data trong S3 — liên quan bảo mật/compliance

---

## 8. Monitoring, Integration, Support

**CloudWatch vs X-Ray:**

- **CloudWatch:** metrics, logs, alarms, dashboards — monitoring hạ tầng và ứng dụng
- **X-Ray:** distributed tracing — theo dõi request đi qua nhiều service (microservices), tìm bottleneck và lỗi

**SQS vs SNS — hay ra đề:**

||SQS|SNS|
|---|---|---|
|Pattern|Queue (Pull)|Pub/Sub (Push)|
|Consumer|1 consumer xử lý 1 message|Nhiều subscriber nhận đồng thời|
|Use case|Decouple, buffer, task queue|Notification, fan-out|

> Kết hợp **SNS → SQS** = fan-out pattern: 1 event đẩy vào nhiều queue xử lý độc lập.

**Support Plans (tăng dần):**

Basic → Developer → Business → Enterprise On-Ramp → Enterprise

- Business trở lên: mới có TAM (Technical Account Manager concept), access AWS Support API, < 1 giờ response cho production down

---

## Tổng kết Day 3 — Các điểm dễ sai trong đề thi

1. **Multi-AZ ≠ Read Replica** — một cái HA, một cái scale đọc
2. **SG stateful, NACL stateless** — nhớ chiều traffic
3. **Instance Store = ephemeral** — mất khi stop
4. **EBS = 1 AZ** — không tự cross-AZ
5. **S3 = Region Resilient** — tự replicate qua AZ trong region
6. **Hybrid Cloud ≠ Hybrid Environment**
7. **VPC Endpoint = không qua internet** — quan trọng cho security/compliance
8. **Edge Location ≠ AZ** — chỉ cho CDN/Global Accelerator