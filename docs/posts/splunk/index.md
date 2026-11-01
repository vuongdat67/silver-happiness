---
title: "Enterprise SOC và Splunk SIEM Engineering Series"
description: "Hệ thống tài liệu 8 tuần về vận hành SOC, Splunk SIEM, thu thập dữ liệu giám sát mạng, kỹ thuật tấn công Active Directory và điều tra sự cố an toàn thông tin."
date: 2026-08-28
tags:
  - soc
  - splunk
  - siem
  - detection-engineering
  - active-directory
  - threat-hunting
---

# Enterprise SOC và Splunk SIEM Engineering Series

Chuyên đề tổng hợp toàn bộ lộ trình nghiên cứu, triển khai thực nghiệm và tác chiến phòng thủ an ninh mạng trên nền tảng Splunk Enterprise SIEM, tích hợp Wazuh EDR, Zeek NSM, Suricata NIDS và Sysmon Hardening.

<!--more-->

---

## Tổng Quan Lộ Trình 8 Tuần

Hệ thống tài liệu được biên soạn chi tiết theo lộ trình đào tạo và thực chiến trong môi trường Security Operations Center (SOC):

| Giai Đoạn | Chủ Đề Trọng Tâm | Nội Dung Kỹ Thuật Chính | Liên Kết Chi Tiết |
| :--- | :--- | :--- | :--- |
| **Tuần 1** | **Kiến Trúc Vận Hành SOC và Các Khung Bảo Mật Quốc Tế** | Mô hình People, Process, Technology; Phối hợp giữa SIEM, SOAR và EDR; Cyber Kill Chain; Pyramid of Pain; NIST SP 800-61 và MITRE ATT&CK. | [Xem Tuần 1](week1/index.md) |
| **Tuần 2** | **Quản Trị Log Windows, Linux và Sysmon Hardening** | Kiến trúc EVTX và ETW; Linux Auditd Kernel Subsystem; Sysmon Modular; Cấu hình cụm Splunk đa thành phần. | [Xem Tuần 2](week2/index.md) |
| **Tuần 3** | **Kiến Trúc Phân Tán Splunk SIEM và Ngôn Ngữ SPL** | Universal Forwarder; Indexer Clustering; Search Head Cluster; Quy trình xử lý dữ liệu qua inputs.conf, props.conf, transforms.conf; Cẩm nang cú pháp SPL. | [Xem Tuần 3](week3/index.md) |
| **Tuần 4** | **Triển Khai Splunk Nâng Cao: CIM và Data Models** | Common Information Model (CIM); Khả năng tăng tốc Data Models với lệnh tstats; Knowledge Objects; Cấu hình cảnh báo tự động qua Email và Telegram. | [Xem Tuần 4](week4/index.md) |
| **Tuần 5** | **Kịch Bản Tấn Công và Risk-Based Alerting (RBA)** | Mô phỏng chuỗi tấn công đa tầng từ Web Shell, Di chuyển ngang đến Ransomware; Mô hình RBA giảm thiểu báo động giả; Phân tích FP và FN. | [Xem Tuần 5](week5/index.md) |
| **Tuần 6** | **Chuyên Đề Bảo Mật Active Directory** | Phân tích và phát hiện 8 kỹ thuật đánh phá Active Directory: Kerberoasting, AS-REP Roasting, Pass the Hash, Pass the Ticket, Golden và Silver Ticket, DCSync. | [Xem Tuần 6](week6/index.md) |
| **Tuần 7** | **Điều Tra Sự Cố An Ninh Thực Chiến (BOTSv1)** | Báo cáo điều tra tổng hợp sự cố trên dữ liệu Boss of the SOC: Điều tra tấn công Web Defacement do Po1s0n1vy thực hiện và đợt bùng phát Cerber Ransomware trên máy trạm. | [Xem Tuần 7](week7/index.md) |
| **Tuần 8** | **Kiến Trúc Giám Sát Mạng và Bộ Luật Phát Hiện 9 Kỹ Thuật Tấn Công** | Tích hợp cảm biến Zeek NSM và Suricata NIDS; Loại bỏ triệt để luồng nhiễu mạng Link-Local và Universal Forwarder; Thuật toán Jitter Ratio và Shannon Entropy phát hiện mã độc. | [Xem Tuần 8](week8/index.md) |

---

## Tài Liệu Tham Chiếu và Cấu Hình Hệ Thống

Toàn bộ cấu hình hệ thống lab, tệp tin cấu hình thu thập dữ liệu và phương pháp luận truy vết được chuẩn hóa tại các tài liệu tham chiếu chuyên sâu:

* **[Cẩm Nang Nguyên Tắc Trace Log Đa Tầng Trong SOC](trace-logs/index.md):** Đúc kết 3 nguyên tắc cốt tử (Host-First, Statistics trước Events sau, khử nhiễu chủ động), ma trận khóa liên kết đa tầng (Cross-Tier Pivot Keys) và bộ câu hỏi vấn đáp chuyên sâu SOC thực chiến.
* **[Tổng Hợp Cấu Hình Hệ Thống Splunk SOC Lab](configs/index.md):** Toàn bộ tệp tin cấu hình triển khai cụm Splunk đa thành phần (`server.conf`, `indexes.conf`, `inputs.conf`, `props.conf`), kịch bản tự động hóa cài đặt Auditd, Sysmon và chính sách kiểm toán Windows.
