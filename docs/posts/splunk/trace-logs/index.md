---
title: "Nguyên Tắc Trace Log Đa Tầng Trong SOC"
last_modified: 2026-08-28
status: completed
author: "SOC Engineering và Detection Team"
tags:
  - incident-response
  - log-tracing
  - multi-tier-correlation
  - splunk
  - sysmon
  - auditd
  - zeek
aliases:
  - "Multi-Tier Log Tracing Master Guide"
cssclasses:
  - dashboard
  - wide-page
---

# Nguyên Tắc Trace Log Đa Tầng và Điều Tra Sự Cố An Ninh Mạng

Tài liệu đúc kết phương pháp luận điều tra sự cố chuyên sâu, quy trình truy vết tương quan đa tầng (Cross-Tier Telemetry Fusion) và các nguyên tắc cốt tử trong vận hành Trung tâm Vận hành An ninh mạng (SOC). Nội dung được xây dựng dựa trên kinh nghiệm thực chiến từ các cuộc tấn công nhắm vào máy chủ dịch vụ, máy trạm nội bộ và hạ tầng Active Directory.

---

## 1. Ba Nguyên Tắc Cốt Tử Khi Điều Tra Log Trong SOC

### 1.1 Nguyên tắc 1: "Host Is King" (Định Danh Máy Chủ Là Trọng Tâm)

!!! warning "Ranh giới giữa Định danh Động (IP) và Định danh Tĩnh (Host)"

    - **Địa chỉ IP là dữ kiện biến động:** Trong kiến trúc mạng doanh nghiệp hiện đại, địa chỉ IP thay đổi liên tục theo thời gian do cơ chế cấp phát DHCP, phiên kết nối VPN quay vòng, Gateway NAT hoặc chuyển vùng IP Roaming. Tin tặc cũng thường xuyên thực hiện giả mạo IP nguồn (IP Spoofing) hoặc mượn các dải IP nội bộ khác nhau qua máy chủ nhảy cóc (Proxy / Pivot).
    - **Tên máy chủ (Host) và Object ID là bất biến:** Tên máy chủ hệ điều hành (`host="POC-WIN-IIS"`), định danh thực thể trong Active Directory, hoặc ID dịch vụ (`s_sitename="W3SVC2"`) là các giá trị tĩnh gắn liền với cấu trúc tài sản (Asset Inventory).
    - **Hành động bắt buộc của SOC Analyst:** Mọi câu truy vấn tương quan, tìm kiếm mở rộng (Drilldown) và luật phát hiện (Correlation Search) bắt buộc phải neo chặt vào trường `host` trước khi tiến hành lọc theo `c_ip` hoặc `s_ip`.


### 1.2 Nguyên tắc 2: Thống Kê Trước (Statistics View), Xem Log Thô Sau (Events Drilldown)

Trong các đợt bùng phát tấn công (như quét cổng diện rộng, tấn công Brute-Force, bùng phát Ransomware), một máy chủ có thể phát sinh hàng trăm nghìn đến hàng triệu dòng log thô trong vài phút. 

1. **Giai đoạn 1: Bảng Thống Kê Tổng Quan (Alert / Statistics View)**
   - Tuyệt đối không xuất hàng trăm nghìn log thô trực tiếp lên màn hình của Search Head, hành động này làm suy kiệt bộ nhớ RAM và làm nghẽn hàng đợi tìm kiếm của toàn hệ thống SOC.
   - Bắt buộc gom nhóm qua lệnh `stats`, đo đạc ngưỡng kích hoạt, xác định thời điểm bắt đầu (`first_seen = min(_time)`), thời điểm kết thúc (`last_seen = max(_time)`), tổng số lượt vi phạm (`count`), và gom danh sách toàn bộ các cổng hoặc phương thức vi phạm (`values(dest_port)`, `values(cs_method)`).
2. **Giai đoạn 2: Bóc Tách Log Thô Theo Ngữ Cảnh (Events Drilldown)**
   - Chỉ khi bảng thống kê chỉ ra rõ thực thể có nguy cơ cao (dựa trên địa chỉ IP, tài khoản hoặc máy chủ cụ thể trong một khung giờ hẹp), kỹ sư SOC mới mở drilldown truy vấn log chi tiết của 5 đến 10 sự kiện tiêu biểu để lấy bằng chứng pháp lý (Forensic Proof).

### 1.3 Nguyên tắc 3: Khử Nhiễu Chủ Động và Đo Lường Nguy Cơ Bỏ Sót

Không có quy tắc phát hiện nào triệt tiêu hoàn toàn cảnh báo giả (False Positive - FP) nếu không cân nhắc kỹ nguy cơ bỏ sót tấn công (False Negative - FN):
* **Cảnh báo giả (FP):** Thường phát sinh từ các máy quét lỗ hổng IT nội bộ (Nessus, Qualys), các luồng lưu lượng Link-Local tự động (mDNS, LLMNR, SSDP), hoặc các tác vụ đồng bộ chính sách định kỳ của quản trị viên (GPO background refresh).
* **Biện pháp xử lý chuẩn:** Bổ sung điều kiện lọc tài khoản máy tính (`NOT user="*$"`), dải IP máy quét hợp lệ, hoặc thời gian tác vụ quản trị, thay vì nới lỏng điều kiện phát hiện khiến các biến thể tấn công thật bị lọt lưới.

---

## 2. Ma Trận Khóa Liên Kết Đa Tầng (Cross-Tier Pivot Keys)

Để tái dựng chuỗi hành vi của kẻ tấn công từ lúc xâm nhập ban đầu cho đến khi leo quyền và mã hóa tệp tin, kỹ sư SOC cần liên kết dữ liệu xuyên suốt 4 tầng giám sát thông qua các khóa liên kết kỹ thuật:

```
+---------------------------------------------------------------------------------------------------+
|                                 SƠ ĐỒ TƯƠNG QUAN ĐA TẦNG TRONG SOC                                |
+---------------------------------------------------------------------------------------------------+
| TẦNG MẠNG (Network / IDS)        : src_ip, dest_ip, dest_port, conn_id (Zeek UID), proto          |
|                                                     |                                             |
|                                            (Khóa: c_ip, s_port, ts)                               |
|                                                     v                                             |
| TẦNG WEB / PROXY (IIS, Apache)   : c_ip, s_ip, cs_method, cs_uri_stem, sc_status, cs_username     |
|                                                     |                                             |
|                                    (Khóa: Process Lineage / Timestamp)                            |
|                                                     v                                             |
| TẦNG TIẾN TRÌNH (Sysmon / Auditd): ProcessGuid, ProcessId, ParentProcessGuid, CommandLine, User   |
|                                                     |                                             |
|                                        (Khóa: Logon_ID / TargetLogonId)                           |
|                                                     v                                             |
| TẦNG ĐỊNH DANH (Active Directory): EventCode 4624/4768/4769, TargetUserName, ServiceName, Ticket   |
+---------------------------------------------------------------------------------------------------+
```

Chi tiết bảng khóa tương quan giữa các tầng:

| Tầng Dữ Liệu | Nguồn Log Chính | Các Trường Khóa Liên Kết Cốt Lõi | Mục Đích Khi Thực Hiện Pivot |
| :--- | :--- | :--- | :--- |
| **Tầng Mạng** | Zeek (`conn.log`, `dns.log`, `http.log`), Suricata `eve.json` | `src_ip`, `dest_ip`, `dest_port`, `conn_id`, `query`, `ja3` | Xác định nguồn tấn công từ Internet, lưu lượng C2 beaconing và đường hầm rò rỉ dữ liệu. |
| **Tầng Dịch Vụ Web** | IIS W3C (`ms:iis:auto`), Apache `access.log` | `c_ip`, `cs_uri_stem`, `cs_method`, `sc_status`, `time_taken` | Xác định điểm xâm nhập ban đầu, tệp Web Shell được tải lên và các tham số khai thác lỗ hổng Web. |
| **Tầng Hệ Điều Hành** | Sysmon (Windows), Auditd (Linux) | `ProcessGuid`, `ParentProcessGuid`, `Image`, `CommandLine`, `auid` | Lần theo cây gia phả tiến trình độc hại, xác định lệnh shell được thực thi sau khi khai thác thành công. |
| **Tầng Xác Thực AD** | Windows Security Event Log (`WinEventLog:Security`) | `TargetLogonId` (`Logon_ID`), `TargetUserName`, `ServiceName`, `IpAddress` | Truy vết phiên đăng nhập, hành vi di chuyển ngang, lạm dụng vé Kerberos hoặc xuất bản sao dữ liệu DCSync. |

---

## 3. Quy Trình Truy Vết Tình Huống Thực Chiến (End-to-End Tracing Playbook)

### 3.1 Kịch bản 1: Từ Yêu Cầu Web Bất Thường Đến Tiến Trình Ngược (Web Exploit -> Reverse Shell)

Khi nhận được cảnh báo về yêu cầu HTTP nguy vấn với mã phản hồi `200 OK`:

1. **Bước 1 (Tầng Web):** Tìm kiếm yêu cầu chứa mã khai thác trong `index=web_traffic`:
   ```bash
   index=web_traffic sourcetype="ms:iis:auto" host="POC-WIN-IIS" sc_status=200
   | search cs_uri_stem="*.php" OR cs_uri_stem="*.aspx"
   | stats min(_time) as first_hit, max(_time) as last_hit, values(cs_method) as methods by c_ip, cs_uri_stem
   ```
2. **Bước 2 (Tầng Tiến Trình):** Lấy thời điểm `first_hit` để kiểm tra tiến trình cha là dịch vụ Web (`w3wp.exe` hoặc `apache2`) có sinh ra tiến trình dòng lệnh con hay không trong `index=windows_sysmon`:
   ```bash
   index=windows_sysmon EventCode=1 host="POC-WIN-IIS"
   | search ParentImage="*\\w3wp.exe" (Image="*\\cmd.exe" OR Image="*\\powershell.exe")
   | table _time, ParentImage, Image, CommandLine, ProcessGuid, User
   ```
3. **Bước 3 (Tầng Mạng):** Sử dụng `ProcessGuid` của tiến trình con để tìm kiếm hành vi mở kết nối ra ngoài Internet (Reverse TCP) trong Sysmon EventCode 3 hoặc Zeek `conn.log`:
   ```bash
   index=windows_sysmon EventCode=3 host="POC-WIN-IIS" ProcessGuid="<Gia_Tri_ProcessGuid_Tu_Buoc_2>"
   | table _time, Image, SourceIp, DestinationIp, DestinationPort, Protocol
   ```

### 3.2 Kịch bản 2: Từ Tiến Trình Bị Chiếm Quyền Đến Di Chuyển Ngang Active Directory

Khi kẻ tấn công đã có mặt trên máy trạm và bắt đầu trích xuất vé xác thực:

1. **Bước 1 (Truy vết bộ nhớ LSASS):** Kiểm tra các tiến trình lạ truy cập bộ nhớ của `lsass.exe` với quyền đọc bộ nhớ nhạy cảm qua Sysmon EventCode 10:
   ```bash
   index=windows_sysmon EventCode=10 TargetImage="*\\lsass.exe"
   | search GrantedAccess="0x1010" OR GrantedAccess="0x1438" OR GrantedAccess="0x1FFFFF"
   | table _time, SourceImage, TargetImage, GrantedAccess, CallTrace, ProcessGuid
   ```
2. **Bước 2 (Lần theo Logon ID):** Khi kẻ tấn công sử dụng Pass-the-Hash hoặc Overpass-the-Hash để tạo phiên mới, hệ thống ghi nhận EventID 4624 loại đăng nhập Type 9 hoặc Type 3. Lưu lại giá trị `TargetLogonId`:
   ```bash
   index=windows_security EventCode=4624 (Logon_Type=9 OR Logon_Type=3) host="DC-01"
   | table _time, TargetUserName, TargetLogonId, Logon_Type, IpAddress, WorkstationName
   ```
3. **Bước 3 (Bắt quả tang vé Kerberos bất thường):** Sử dụng `TargetLogonId` liên kết với EventID 4769 để phát hiện vé dịch vụ bị mã hóa bằng thuật toán yếu RC4 (`0x17`) trong đòn tấn công Kerberoasting:
   ```bash
   index=windows_security EventCode=4769 TicketOptions="0x40810000" TicketEncryptionType="0x17"
   | table _time, TargetUserName, ServiceName, TicketEncryptionType, IpAddress
   ```

---

## 4. Bộ Câu Hỏi Vấn Đáp Chuyên Sâu SOC Thực Chiến (SOC Field FAQ)

??? question "Q1: Tại sao mô hình Cyber Kill Chain được coi là compass định hướng thay vì bản đồ tuyến tính?"
    **Trả lời:** Trong thực tế, các nhóm tấn công có chủ đích (APT) hoặc các chiến dịch tống tiền Ransomware không đi theo một đường thẳng cứng nhắc từ bước 1 đến bước 7. Sau khi xâm nhập thành công vào một máy chủ nội bộ (bước 4 và 5), họ thường lập tức quay vòng lại bước 1 (Trinh sát nội bộ - Internal Reconnaissance) và bước 4 (Khai thác nội bộ - Internal Exploitation) để mở rộng sang các hệ thống khác. Do đó, Kill Chain giúp chuyên viên SOC định vị trạng thái hiện tại của cuộc tấn công chứ không phải một kịch bản cố định.

??? question "Q2: Tại sao phải lọc Event ID (Whitelisting) trong inputs.conf thay vì thu thập toàn bộ log Security?"
    **Trả lời:** Một máy chủ Domain Controller doanh nghiệp trung bình sinh ra từ vài triệu đến hàng chục triệu sự kiện Security mỗi ngày, trong đó hơn 80% là các sự kiện định kỳ vô hại (như đọc quyền tệp tin EventID 4656, xác thực dịch vụ nội bộ lặp lại). Thu thập toàn bộ log mà không chọn lọc sẽ làm lãng phí băng thông mạng, đội chi phí bản quyền Splunk và gây nghẽn Search Head. Việc cấu hình danh sách Event ID trọng điểm (4768, 4769, 4624, 4625, 4662, 4776) đảm bảo bao phủ 100% các kỹ thuật tấn công Active Directory nhưng tiết kiệm được hơn 85% tài nguyên lưu trữ.

??? question "Q3: Tại sao trong điều tra sự cố, ProcessGuid và Logon_ID lại đáng tin cậy hơn PID và Username?"
    **Trả lời:**
    * **PID (Process ID):** Hệ điều hành Windows tái sử dụng giá trị PID liên tục. Một tiến trình độc hại có PID 1234 có thể tắt đi sau vài giây và một tiến trình sạch của hệ thống lại nhận đúng PID 1234 đó. Ngược lại, `ProcessGuid` của Sysmon là duy nhất trên toàn cầu và gắn liền với một phiên thực thi cụ thể từ lúc sinh ra đến lúc kết thúc.
    * **Username:** Kẻ tấn công có thể thực hiện kỹ thuật Impersonation hoặc chạy ngầm dưới danh nghĩa `NT AUTHORITY\SYSTEM`. Giá trị `Logon_ID` (hoặc `TargetLogonId`) phản ánh chính xác phiên bảo mật (Logon Session) duy nhất đang cấp token ủy quyền cho tiến trình đó.

??? question "Q4: Làm thế nào để phân biệt máy quét lỗ hổng nội bộ (Nessus/Qualys) với hoạt động trinh sát của tin tặc?"
    **Trả lời:**
    * **Máy quét nội bộ hợp lệ:** Hoạt động từ các dải IP quản trị cố định, có lịch quét được khai báo trước trong bảng tài sản (Asset Lookup), gửi gói tin với chu kỳ cố định và thường gửi kèm tiêu đề User-Agent mang định danh phần mềm quản trị.
    * **Hành vi trinh sát của tin tặc:** Xuất phát từ IP ngoài hoặc các máy trạm người dùng bị chiếm quyền, thăm dò ngẫu nhiên hoặc có chủ đích nhắm vào các cổng dịch vụ đặc thù (3389, 445, 5985, 1433), và thường có các nỗ lực thăm dò tiếp nối như gửi gói tin dò lỗi (Exploit probe) ngay sau khi thấy cổng mở.

??? question "Q5: Khi nào nên sử dụng Data Model (tstats) và rủi ro của tính năng Search Acceleration là gì?"
    **Trả lời:**
    * **Thời điểm dùng:** Khi cần thực hiện các câu truy vấn thống kê trên khối lượng log khổng lồ (vài chục GB đến hàng TB) trong khung thời gian dài (7 ngày, 30 ngày). `tstats` chỉ quét các tệp chỉ mục tóm tắt (TSIDX) đã được tăng tốc, cho tốc độ xử lý nhanh gấp 100 đến 1.000 lần so với tìm kiếm thô.
    * **Rủi ro:** Quá trình tăng tốc (Acceleration) tiêu tốn nhiều tài nguyên CPU và dung lượng đĩa cứng trên Indexer. Nếu cấu hình Data Model không chuẩn (thiếu trường cần thiết hoặc bóc tách sai kiểu dữ liệu), câu truy vấn sẽ trả về kết quả rỗng hoặc không chính xác mà không báo lỗi.

??? question "Q6: Tại sao một luật phát hiện chuẩn mực trong SOC không bao giờ cam kết Zero False Positive?"
    **Trả lời:** Mọi hệ thống thông tin luôn có sự giao thoa hành vi giữa hoạt động quản trị hợp lệ và hành động của kẻ tấn công (Living-off-the-Land - LotL). Kẻ tấn công sử dụng chính `powershell.exe`, `certutil.exe`, `net.exe` để tác chiến. Một quy tắc cam kết không có cảnh báo giả bắt buộc phải xiết chặt điều kiện bằng cách loại trừ hầu hết trường hợp, điều này sẽ tạo ra khoảng mù cực lớn (False Negative) cho phép tin tặc vượt mặt dễ dàng. Kỹ sư SOC hướng đến việc cân bằng: chấp nhận một tỷ lệ cảnh báo giả nhỏ có thể kiểm soát và sử dụng Risk-Based Alerting (RBA) để gom chuỗi hành vi.

??? question "Q7: Cơ chế Jitter Ratio và Shannon Entropy giúp phát hiện mã độc tầng mạng như thế nào?"
    **Trả lời:**
    * **Jitter Ratio (Tỷ số biến thiên thời gian):** Mã độc liên lạc với máy chủ điều khiển (C2 Beaconing) thường gửi tín hiệu đều đặn sau mỗi khoảng thời gian nhất định (ví dụ mỗi 60 giây). Dù tác giả mã độc có thêm độ trễ ngẫu nhiên (Sleep Jitter), tỷ số biến thiên $\text{Jitter Ratio} = \frac{\sigma}{\mu}$ vẫn rơi vào dải đặc trưng (dưới 0.3) so với hành vi lướt web tự nhiên của con người.
    * **Shannon Entropy (Độ hỗn loạn thông tin):** Kỹ thuật DNS Tunneling mã hóa tệp tin hoặc lệnh điều khiển vào tiền tố của tên miền con. Chuỗi ký tự ngẫu nhiên mã hóa nhị phân có độ hỗn loạn Shannon Entropy cao vượt trội ($H > 3.8$) so với các tên miền Internet thông thường.

??? question "Q8: Tại sao cần hạn chế lệnh rex, join, transaction trong các cảnh báo thời gian thực?"
    **Trả lời:**
    * `rex`: Thực thi bóc tách biểu thức chính quy tuần tự trên từng bản ghi thô tại thời điểm truy vấn, tiêu tốn năng lực xử lý CPU trên Search Head. Thay vào đó, trường dữ liệu nên được cấu hình bóc tách sẵn tại tầng Indexer qua `props.conf` hoặc sử dụng Technology Add-on (TA).
    * `join` và `transaction`: Đưa dữ liệu vào bộ nhớ đệm tạm thời (RAM buffer) và bị giới hạn cứng ở 50.000 bản ghi. Nếu vượt quá giới hạn, kết quả sẽ bị mất dữ liệu âm thầm. Thay vào đó, nên sử dụng lệnh `stats` gom nhóm đa chỉ mục kết hợp hàm `values()` và `eval` để đạt hiệu năng tối ưu nhất.

