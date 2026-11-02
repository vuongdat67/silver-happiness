---
title: "Sổ Tay Tra Cứu EventID Windows, Linux, Firewall và EDR"
description: "Cẩm nang tra cứu danh mục trường dữ liệu, mã sự kiện Windows EventCode, Linux Syslog/Auditd, Firewall Palo Alto/Fortinet và cảm biến EDR phục vụ phân tích SOC."
date: 2026-08-28
last_modified: 2026-08-28
status: completed
author: "SOC Engineering và Detection Team"
tags:
  - eventid
  - windows-log
  - linux-log
  - auditd
  - firewall
  - edr
  - soc-reference
  - threat-hunting
aliases:
  - "EventID Master Cheat Sheet"
cssclasses:
  - dashboard
  - wide-page
---

# Sổ Tay Tra Cứu Chi Tiết EventID và Danh Mục Trường Dữ Liệu (Field Dictionary)

Tài liệu cung cấp từ điển trường dữ liệu (Field Dictionary) chuyên sâu và bảng tra cứu mã sự kiện trên 4 nguồn giám sát cốt lõi của Trung tâm điều hành an ninh mạng (SOC): Windows Event Log, Linux Auditd/Syslog, Tường lửa (Palo Alto, Fortigate) và Cảm biến EDR (CrowdStrike, Defender, Wazuh).

---

## 1. Bản Đồ Ánh Xạ Chuẩn Hóa Dữ Liệu (Splunk CIM Field Mapping)

Để viết các luật phát hiện tương quan xuyên nguồn (Cross-Source Correlation) mà không phụ thuộc vào từng hãng thiết bị cụ thể, chuyên viên SOC phải nắm vững bảng ánh xạ giữa các trường bản địa về chuẩn Common Information Model (CIM):

| Ý Nghĩa Nghiệp Vụ | Tên Trường Chuẩn Splunk CIM | Trường Windows Event | Trường Linux Auditd | Trường Palo Alto / Fortigate | Trường EDR (CrowdStrike / Defender) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **IP Nguồn** | `src_ip` / `src` | `IpAddress` | `saddr` (trong `SOCKADDR`) | `src` (PA) / `srcip` (FGT) | `LocalIP` / `RemoteIP` |
| **Cổng Nguồn** | `src_port` | `IpPort` | `sport` | `sport` (PA) / `srcport` (FGT) | `LocalPort` / `RemotePort` |
| **IP Đích** | `dest_ip` / `dest` | `DestinationIp` (Sysmon 3) | `daddr` | `dst` (PA) / `dstip` (FGT) | `RemoteIP` |
| **Cổng Đích** | `dest_port` | `DestinationPort` (Sysmon 3) | `dport` | `dport` (PA) / `dstport` (FGT) | `RemotePort` |
| **Người Dùng** | `user` | `TargetUserName` / `SubjectUserName` | `auid` / `uid` / `user` | `srcuser` / `user` | `UserName` / `AccountName` |
| **Tên Máy Chủ** | `dest_host` / `host` | `Computer` / `WorkstationName` | `node` / `hostname` | `device_name` | `ComputerName` / `DeviceName` |
| **Tiến Trình** | `process_name` | `Image` / `NewProcessName` | `comm` / `exe` | `app` (tầng mạng L7) | `FileName` / `ProcessName` |
| **Dòng Lệnh** | `process_exec` / `cmdline` | `CommandLine` | `a0, a1, a2` (trong `EXECVE`) | N/A | `CommandLine` / `ProcessCommandLine` |
| **Tiến Trình Cha** | `parent_process` | `ParentImage` / `ParentProcessName` | `ppid` | N/A | `ParentCommandLine` |
| **Hàm Băm Tệp** | `file_hash` | `Hashes` (SHA256, MD5) | N/A (cần bật IMA) | N/A | `SHA256HashData` / `SHA256` |
| **Hành Động** | `action` | `Status` / `SubStatus` | `success=yes/no` | `action` (`allow`/`deny`/`drop`) | `PatternDisposition` / `ActionType` |

---

## 2. Kênh Nhật Ký Windows: Phân Tích Trường Chi Tiết Theo Từng Sự Kiện

### Sự Kiện Xác Thực: 4624 (Thành Công) và 4625 (Thất Bại)

* **Danh mục trường dữ liệu cốt lõi:**
  * `SubjectUserSid` / `SubjectUserName` / `SubjectLogonId`: Danh tính và mã phiên của tài khoản yêu cầu thực hiện hành vi đăng nhập.
  * `TargetUserSid` / `TargetUserName` / `TargetDomainName`: Danh tính tài khoản thực tế đang cố gắng đăng nhập.
  * `TargetLogonId`: Khóa duy nhất (Hex, ví dụ `0x3E7` cho SYSTEM, `0x12A4B` cho người dùng) đại diện cho phiên đăng nhập vừa tạo. Đây là trường liên kết số 1 để truy vết xem tiến trình độc hại chạy trong phiên đăng nhập của ai.
  * `LogonType`: Mã số đại diện cho phương thức người dùng xác thực vào hệ điều hành.
  * `LogonProcessName`: Phân hệ xử lý xác thực (ví dụ `User32`, `Kerberos`, `NtLmSsp`, `Advapi`).
  * `AuthenticationPackageName`: Gói bảo mật xác thực (`Negotiate`, `Kerberos`, `NTLM`).
  * `WorkstationName`: Tên NetBIOS của máy trạm gửi yêu cầu xác thực.
  * `IpAddress`: Địa chỉ IPv4/IPv6 của nguồn kết nối (nếu là `-` hoặc `127.0.0.1` nghĩa là đăng nhập cục bộ).
  * `IpPort`: Cổng dịch vụ nguồn phía máy khách.
  * `Status` / `SubStatus`: Mã lỗi nguyên nhân từ chối phiên đăng nhập (chỉ có trong sự kiện 4625).


#### Bảng Tra Cứu Chuyên Sâu Mã LogonType

| LogonType | Tên Kỹ Thuật | Ý Nghĩa Thực Tế | Kịch Bản SOC Cần Điều Tra |
| :--- | :--- | :--- | :--- |
| **Type 2** | Interactive | Người dùng ngồi trực tiếp trước bàn phím máy tính hoặc gõ qua bảng điều khiển máy ảo (Console). | Xuất hiện ngoài giờ làm việc trên máy trạm của nhân sự đã tan sở. |
| **Type 3** | Network | Kết nối từ xa qua chia sẻ tài nguyên mạng SMB (`\\server\c$`, `IPC$`, RPC, IIS). | Di chuyển ngang (Lateral Movement) bằng PsExec, WMI, SMBExec; tấn công Password Spraying qua mạng nội bộ. |
| **Type 4** | Batch | Hệ thống Windows Task Scheduler kích hoạt tác vụ chạy ngầm định kỳ. | Kẻ tấn công duy trì mã độc qua cơ chế Scheduled Task tự kích hoạt. |
| **Type 5** | Service | Dịch vụ hệ thống khởi động dưới danh tính tài khoản dịch vụ được chỉ định. | Dịch vụ mã độc được cài đặt tự kích hoạt lúc khởi động máy. |
| **Type 7** | Unlock | Người dùng nhập mật khẩu để mở khóa màn hình Workstation. | Kiểm tra thời gian làm việc thực tế của nhân sự. |
| **Type 8** | NetworkCleartext | Xác thực gửi mật khẩu dạng văn bản rõ không mã hóa qua mạng (ví dụ Basic Authentication trên IIS). | Rủi ro bị bắt gói tin nghe lén nội bộ (Sniffing). |
| **Type 9** | NewCredentials | Lệnh `runas /netonly` được thực thi để mượn danh tính tài khoản khác khi ra ngoài mạng trong khi vẫn giữ nguyên danh tính cục bộ. | Kỹ thuật kinh điển của Mimikatz Pass-the-Hash hoặc dùng công cụ Cobalt Strike mượn vé Kerberos. |
| **Type 10** | RemoteInteractive | Đăng nhập giao diện đồ họa từ xa qua giao thức Remote Desktop Protocol (RDP). | Đăng nhập RDP trái phép từ ngoài Internet hoặc kỹ thuật RDP Pivoting di chuyển giữa các máy trạm. |
| **Type 11** | CachedInteractive | Đăng nhập vào máy trạm bằng bản băm mật khẩu được lưu tạm trong bộ nhớ cục bộ khi máy bị mất kết nối tới Domain Controller. | Nhân viên làm việc từ xa hoặc máy trạm bị cô lập mạng nhưng kẻ tấn công vẫn đăng nhập được. |


#### Bảng Tra Cứu Mã Lỗi Xác Thực SubStatus (Điểm Nóng Trong Event 4625)

| Mã SubStatus (Hex) | Nguyên Nhân Kỹ Thuật | Dấu Hiệu Tác Chiến Của Attacker |
| :--- | :--- | :--- |
| `0xC000006D` | Bad username or authentication information | Tên tài khoản hoặc mật khẩu bị sai chung chung. |
| `0xC000006A` | User name is correct but password is invalid | Tên tài khoản tồn tại chính xác nhưng nhập sai mật khẩu (chứng tỏ kẻ tấn công đã biết tên user). |
| `0xC0000064` | User name does not exist | Tên tài khoản không hề tồn tại trong Active Directory (chỉ điểm rõ tấn công rà quét vét từ điển User Enumeration). |
| `0xC0000234` | The user account has been automatically locked | Tài khoản bị khóa do vượt quá số lần nhập sai liên tiếp cho phép (Account Lockout Policy). |
| `0xC0000072` | Account is currently disabled | Tài khoản đang bị vô hiệu hóa bởi chính sách quản trị (kẻ tấn công cố tình thử tài khoản nghỉ việc). |
| `0xC0000193` | Account expiration date has passed | Tài khoản nhân sự thời vụ đã hết hạn sử dụng. |
| `0xC0000224` | User is required to change password at next logon | Tài khoản bắt buộc phải đổi mật khẩu ở lần đăng nhập đầu tiên. |

---

### Sự Kiện Tiến Trình: 4688 (Khởi Tạo) và 4689 (Kết Thúc)

* **Danh mục trường dữ liệu cốt lõi:**
  * `SubjectLogonId`: Khóa liên kết phiên người dùng thực thi lệnh.
  * `NewProcessId`: Mã định danh tiến trình PID (dạng Hex, ví dụ `0x1A4`).
  * `NewProcessName`: Đường dẫn đầy đủ của tệp tin thực thi (ví dụ `C:\Windows\System32\cmd.exe`).
  * `CommandLine`: Chuỗi câu lệnh đầy đủ kèm tham số (cần bật GPO Include Command Line).
  * `ParentProcessName`: Tệp tin thực thi của tiến trình cha đã sinh ra tiến trình này.
  * `TokenElevationType`: Mức nâng quyền UAC của tiến trình:
    * `TokenElevationTypeDefault (1)`: Người dùng bình thường hoặc UAC bị tắt.
    * `TokenElevationTypeFull (2)`: Tiến trình chạy với quyền quản trị viên nâng cao (Elevated - Run as Administrator).
    * `TokenElevationTypeLimited (3)`: Người dùng thuộc nhóm Administrators nhưng tiến trình chạy ở mức quyền hạn chế chưa bấm xác nhận UAC.

---

### Sự Kiện Dịch Vụ và Lập Lịch: 7045 (System) và 4698 (Security)

* **EventID 7045 (System - Dịch vụ mới được cài đặt):**
  * `ServiceName`: Tên định danh của dịch vụ trong hệ thống (ví dụ `PSEXESVC`, `wuauserv`).
  * `ImagePath`: Đường dẫn tệp tin nhị phân và tham số nạp dịch vụ.
  * `ServiceType`: Loại hình dịch vụ (`user mode service`, `kernel mode driver`).
  * `StartType`: Chế độ khởi động (`auto start`, `demand start`, `disabled`).
  * `AccountName`: Tài khoản mà dịch vụ sẽ chạy dưới quyền (`LocalSystem`, `LocalService`, `Domain\Account`).

* **EventID 4698 (Security - Lập lịch Scheduled Task mới):**
  * `TaskName`: Tên của tác vụ lập lịch trong cây Task Scheduler.
  * `TaskContent`: Cấu trúc XML chứa toàn bộ định nghĩa tác vụ: trigger kích hoạt, đường dẫn tệp thực thi `<Command>`, tham số `<Arguments>`, tài khoản chạy `<UserId>`.

---

## 3. Kênh Nhật Ký Linux: Cấu Trúc Bản Ghi và Từ Điển Trường Auditd

Khác với định dạng XML của Windows, Linux Auditd lưu vết ở dạng chuỗi văn bản phân tách bằng dấu cách kèm cặp khóa-giá trị (`key=value`):

```text
type=SYSCALL msg=audit(1693248102.123:456): arch=c000003e syscall=59 success=yes exit=0 a0=55e1a a1=55e1b a2=55e1c a3=0 items=2 ppid=1420 pid=2105 auid=1000 uid=0 gid=0 euid=0 suid=0 fsuid=0 egid=0 sgid=0 fsgid=0 tty=pts0 ses=3 comm="bash" exe="/bin/bash" key="priv-escalation"
```

### Từ Điển Các Trường Dữ Liệu Trong Bản Ghi `type=SYSCALL`

| Tên Trường | Định Nghĩa Kỹ Thuật | Ứng Dụng Tác Chiến Trong Điều Tra SOC |
| :--- | :--- | :--- |
| `msg=audit(time:id)` | Epoch timestamp và ID sự kiện duy nhất. | Khóa liên kết toàn bộ bản ghi con (`EXECVE`, `PATH`, `CWD`) cùng một lệnh. |
| `arch` | Mã kiến trúc CPU (ví dụ `c000003e` đại diện cho x86_64). | Phát hiện mã độc 32-bit chạy trên hệ điều hành 64-bit nhằm qua mặt sensor. |
| `syscall` | Số hiệu System Call trong kernel (ví dụ `59` là `execve`, `42` là `connect`). | Nhận diện hành vi nền tảng của tiến trình. |
| `success` | Kết quả thực thi của syscall (`yes` hoặc `no`). | Đánh giá đòn tấn công có khai thác thành công hay bị quyền hạn từ chối. |
| `exit` | Mã thoát trả về từ System Call (0 là thành công, âm là lỗi). | Đối soát lỗi `EACCES (-13)` hoặc `ENOENT (-2)`. |
| `a0, a1, a2, a3` | Bốn tham số đầu tiên truyền vào System Call ở tầng assembly. | Bóc tách địa chỉ socket mạng hoặc con trỏ bộ nhớ. |
| `pid` | Process ID của tiến trình thực hiện lệnh. | Truy vết cây tiến trình trên Linux. |
| `ppid` | Parent Process ID của tiến trình cha. | Phát hiện quan hệ bất thường: web server (`apache`) sinh ra shell. |
| `auid` | **Audit User ID (Định danh đăng nhập gốc).** | **Trường sống còn:** Dù hacker có gõ `sudo su -` lên root, `auid` vẫn giữ nguyên ID người dùng ban đầu đăng nhập qua SSH. |
| `uid` / `euid` | User ID thực tế và Effective User ID tại thời điểm chạy. | Phát hiện leo thang đặc quyền khi `uid=1000` nhưng `euid=0` (root). |
| `comm` | Tên ngắn của lệnh thực thi (tối đa 16 ký tự). | Nhận diện nhanh lệnh: `cat`, `curl`, `nmap`. |
| `exe` | Đường dẫn tệp tin thực thi tuyệt đối trên đĩa. | Phát hiện binary chạy từ thư mục bất thường: `/tmp/nc`, `/dev/shm/.x`. |
| `key` / `k` | Nhãn phân loại do chuyên viên SOC cấu hình trong `audit.rules`. | Gom nhóm sự kiện phục vụ tương quan trên SIEM (`key="identity_tampering"`). |

### Các Loại Bản Ghi Bổ Trợ Đi Kèm Trong Cùng Một Giao Dịch Auditd

* **`type=EXECVE`:** Cung cấp đầy đủ toàn bộ đối số dòng lệnh:
  * `argc`: Số lượng tham số truyền vào.
  * `a0`: Lệnh gốc (ví dụ `"python"`).
  * `a1`, `a2`, `a3`: Tham số tương ứng (ví dụ `a1="-c"`, `a2="import socket,pty;..."`).
* **`type=PATH`:** Ghi nhận tệp tin bị hệ thống tác động:
  * `name`: Đường dẫn tệp tin bị truy cập/chỉnh sửa.
  * `nametype`: Loại hành vi (`CREATE`, `DELETE`, `NORMAL`).
  * `mode`: Quyền hạn tệp tin (ví dụ octal `0104755` chỉ điểm tệp tin có cờ SUID).
* **`type=SOCKADDR`:** Ghi nhận thông tin địa chỉ kết nối mạng socket:
  * `saddr`: Chuỗi Hex chứa cấu trúc `sockaddr_in` (Family, Port Hex, IP Hex). Cần viết parser trên Splunk để chuyển về dạng IP:Port chuẩn.

---

## 4. Kênh Nhật Ký Tường Lửa Doanh Nghiệp (Palo Alto và Fortinet)

Tường lửa thế hệ mới (NGFW) cung cấp bối cảnh lưu lượng mạng ở tầng biên, giúp chuyên viên SOC xác định lưu lượng độc hại có thoát được ra ngoài (Egress) hoặc xâm nhập thành công vào vùng máy chủ nội bộ hay không.

### Bảng Trường Dữ Liệu Tường Lửa Palo Alto (`sourcetype=pan:traffic` và `pan:threat`)

| Tên Trường Palo Alto | Kiểu Dữ Liệu | Mô Tả Ý Nghĩa | Kịch Bản Kiểm Tra Cho SOC |
| :--- | :--- | :--- | :--- |
| `src` / `src_ip` | IP Address | Địa chỉ IP máy nguồn phát sinh kết nối. | Nhận diện máy trạm nội bộ bị nhiễm hoặc IP tấn công bên ngoài. |
| `sport` / `src_port` | Integer | Cổng dịch vụ phía nguồn. | Nhận diện cổng nguồn cao (>1024) của client. |
| `dst` / `dest_ip` | IP Address | Địa chỉ IP đích nhận kết nối. | Đối soát với cơ sở dữ liệu Threat Intel (C2 Server, Malicious IP). |
| `dport` / `dest_port` | Integer | Cổng dịch vụ đích. | Phát hiện kết nối ra cổng bất thường: `4444`, `1337`, `6667`. |
| `proto` | String | Giao thức tầng mạng (`tcp`, `udp`, `icmp`). | Phân loại lưu lượng truyền thông. |
| `app` | String | Ứng dụng tầng L7 do engine App-ID nhận diện. | **Điểm nóng:** Ứng dụng là `ms-ds-smb` đi ra Internet, hoặc `ssl` chạy trên cổng non-standard `8080`. |
| `action` | String | Quyết định xử lý của Firewall: `allow`, `deny`, `drop`, `reset-client`, `reset-server`, `reset-both`. | Xác định đòn tấn công đã bị chặn (`drop`) hay đã đi lọt qua (`allow`). |
| `bytes` / `bytes_sent` / `bytes_received` | Integer | Tổng số byte dữ liệu truyền tải giữa hai đầu kết nối. | Săn lùng rò rỉ dữ liệu (Exfiltration): `bytes_sent` vượt ngưỡng hàng chục MB ra ngoài. |
| `threat_name` | String | Tên chữ ký mối đe dọa (trong nhật ký Threat). | Tên mã độc hoặc lỗ hổng: `Web Shell Detected`, `SQL Injection`. |
| `severity` | String | Mức độ nghiêm trọng: `informational`, `low`, `medium`, `high`, `critical`. | Lọc cảnh báo ưu tiên xử lý trong ca trực. |
| `category` | String | Phân loại tên miền/URL (PAN-DB URL Filtering). | Các danh mục rủi ro cao: `malware`, `command-and-control`, `dynamic-dns`, `unknown`. |

### Bảng Trường Dữ Liệu Tường Lửa Fortinet FortiGate (`sourcetype=fgt_traffic` và `fgt_utm`)

* `srcip`, `dstip`, `srcport`, `dstport`: Thông tin bốn góc định danh luồng mạng.
* `service`: Tên dịch vụ mạng được định nghĩa trong chính sách (`HTTP`, `HTTPS`, `DNS`, `SSH`).
* `policyid`: ID của chính sách tường lửa cho phép lưu lượng đi qua.
* `action`: Trạng thái xử lý (`accept`, `deny`, `close`, `timeout`).
* `sentbyte`, `rcvdbyte`: Dung lượng gửi và nhận tính theo byte.
* `crscore` / `crlevel`: Điểm rủi ro tổng hợp (Corporate Risk Score) được FortiGate đánh giá tự động dựa trên hành vi kết nối.

---

## 5. Kênh Nhật Ký Cảm Biến EDR (CrowdStrike, Defender for Endpoint và Wazuh)

Cảm biến EDR cung cấp khả năng phát hiện hành vi ở mức tiến trình và bộ nhớ chi tiết hơn nhật ký hệ điều hành truyền thống:

### Danh Mục Trường Cốt Lõi Của CrowdStrike Falcon

* `aid` (Agent ID): Chuỗi định danh duy nhất của tác nhân EDR cài trên máy trạm (khóa liên kết toàn bộ sự kiện của máy đó).
* `ComputerName`: Tên máy tính trong hệ thống mạng.
* `DetectName` / `DetectDescription`: Tên định danh phát hiện mã độc và mô tả kỹ thuật của hãng.
* `SeverityName`: Mức độ nghiêm trọng (`Critical`, `High`, `Medium`, `Low`).
* `Tactic` / `Technique`: Chiến thuật và mã kỹ thuật ánh xạ trực tiếp theo ma trận MITRE ATT&CK (ví dụ `Persistence / T1547.001`).
* `FileName` / `FilePath`: Tên và đường dẫn tuyệt đối của tệp tin bị phát hiện.
* `SHA256HashData`: Mã băm SHA-256 duy nhất của tệp mã độc phục vụ đối soát VirusTotal và bẻ khóa IOC.
* `CommandLine`: Dòng lệnh khởi chạy của tiến trình độc hại.
* `ParentCommandLine`: Dòng lệnh của tiến trình cha.
* `PatternDisposition`: Cờ nhị phân đại diện cho hành động phòng vệ tự động của EDR:
  * Đã diệt/ngăn chặn: `Process Terminated`, `File Quarantined`, `Registry Modified`.
  * Chưa chặn (chỉ ghi nhận): `Detection Only`.

### Danh Mục Trường Cốt Lõi Của Wazuh Open Source EDR

* `agent.id` / `agent.name`: Định danh tác nhân Wazuh.
* `rule.id`: Mã hiệu luật phát hiện của Wazuh (ví dụ `5710` là SSH Brute Force).
* `rule.level`: Cấp độ cảnh báo từ 1 đến 16 (cấp độ 12 trở lên cần can thiệp khẩn cấp).
* `rule.description`: Mô tả chi tiết hành vi bị vi phạm.
* `rule.mitre.id`: Mã kỹ thuật MITRE ATT&CK đi kèm.
* `data.win.system.eventID`: Mã EventCode gốc nếu nguồn dữ liệu là Windows Event.
