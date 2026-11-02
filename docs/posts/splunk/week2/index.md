---
title: "Tuần 2: Quản Trị Log Hệ Thống và Sysmon Hardening"
last_modified: 2026-08-28
status: completed
author: "SOC Engineering và Detection Team"
tags:
 - cybersecurity
 - soc
 - log-monitoring
 - windows-event-log
 - etw
 - sysmon
 - linux-auditd
 - splunk
 - spl
 - indexer-cluster
 - inputs-conf
 - detection-engineering
aliases:
 - "SOC Log Monitoring và SIEM Engineering Master Guide"
 - "Week 2 Master Guide"
 - "Cấu Trúc và Tối Ưu Hóa Nguồn Log Trong SOC"
cssclasses:
 - dashboard
 - wide-page
---

# Tuần 2: Quản Trị Log Hệ Thống và Sysmon Hardening
> **Tài liệu chuẩn hóa chuyên sâu về kiến trúc ghi log trên Windows (EVTX và ETW), Linux (Syslog, Journald và Auditd Kernel Subsystem), Sysmon Hardening (Olaf Hartong Modular Framework), Kiến trúc Triển khai Multi-Node Splunk Indexer Cluster (5 Nodes), Kỹ thuật Tinh chỉnh `inputs.conf` cho 8 Kỹ thuật Tấn công Active Directory, và Bộ công cụ Script Tự động hóa Toàn diện cho Cả Hai Hệ Điều Hành.**

---

## 1. Cấu trúc và Bản Chất Các Nguồn Log Trong Hệ Thống SOC

```mermaid
graph LR
    subgraph LOG_SOURCES ["Nguồn Dữ Liệu Thu Thập Tập Trung (Data Ingestion)"]
        WIN["Windows OS \n (Security, System, PowerShell, Sysmon)"]
        LNX["Linux OS \n (Auth, Syslog, Journald, Auditd)"]
        NET["Network và Perimeter \n (Firewall, IDS/IPS, WAF, DNS)"]
        APP["Applications và DB \n (Apache, Nginx, MySQL, MSSQL)"]
        CLD["Cloud Infrastructure \n (AWS CloudTrail, Azure Activity)"]
    end

    subgraph SOC_CORE ["Hệ Thống Phân Tích và Giám Sát (SIEM Core)"]
        COLLECTOR["Splunk Universal / Heavy Forwarders"]
        PIPELINE["Data Pipeline (Input -> Parsing -> Indexing)"]
        CIM["Common Information Model (CIM / Normalization)"]
        DETECTION["Detection Rules và Behavioral Correlation (SPL)"]
    end

    WIN --> COLLECTOR
    LNX --> COLLECTOR
    NET --> COLLECTOR
    APP --> COLLECTOR
    CLD --> COLLECTOR

    COLLECTOR --> PIPELINE
    PIPELINE --> CIM
    CIM --> DETECTION

```

---

### 1.1 Windows Event Log Architecture (EVTX và ETW)

Windows ghi nhận các sự kiện hệ điều hành theo định dạng nhị phân có cấu trúc (`.evtx`), lưu trữ cục bộ tại `%SystemRoot%\System32\winevt\Logs\`.

![Các channel mặc định trong Windows](assets/windows_channels.png)

#### 1.1.1 Ba Channel Truyền Thống (Windows Logs):
1. **Security Log (`Security.evtx`)**: Channel quan trọng và nhạy cảm nhất. Ghi nhận toàn bộ sự kiện xác thực (Authentication), ủy quyền (Authorization), quản trị tài khoản và phân quyền người dùng. **Chỉ ghi log khi Audit Policy tương ứng được bật**.
2. **System Log (`System.evtx`)**: Ghi nhận hoạt động của Kernel, Windows Services và Device Drivers (khởi động/dừng service, driver crash, lỗi phần cứng).
3. **Application Log (`Application.evtx`)**: Ghi nhận thông điệp từ các ứng dụng user-space (SQL Server, IIS, ứng dụng bên thứ 3). Format và độ tin cậy phụ thuộc hoàn toàn vào lập trình viên.

#### 1.1.2 Applications and Services Logs (Kênh Giám Sát Nâng Cao):
* `Microsoft-Windows-Sysmon/Operational`: Cung cấp telemetry chuyên sâu cấp độ nhân về tiến trình, mạng, file và registry.
* `Microsoft-Windows-PowerShell/Operational`: Ghi nhận Script Block Logging (**EventCode 4104**) giúp giải mã toàn bộ mã script PowerShell deobfuscated.
* `Microsoft-Windows-TaskScheduler/Operational`: Giám sát tạo và chỉnh sửa Scheduled Task (**EventCode 106, 140, 200**).
* `Microsoft-Windows-WMI-Activity/Operational`: Phát hiện kỹ thuật duy trì quyền truy cập ẩn qua WMI Event Subscription (**EventCode 5861**).

---

### 1.2 Kiến Trúc Event Tracing for Windows (ETW)

> [!important] Cơ chế hoạt động của ETW
> **ETW (Event Tracing for Windows)** là cơ chế tracing hiệu năng cao ở cấp độ kernel của Windows, cho phép ghi lại các sự kiện phần mềm và kernel mà không làm suy giảm hiệu năng hệ thống.

![Kiến trúc ETW trong Windows](assets/etw_architecture.png)

```mermaid
flowchart LR
    K["Windows Kernel \n (Process, Thread, Network, Disk)"] --> PROV["ETW Providers \n (Microsoft-Windows-Kernel-Process, etc.)"]
    PROV --> SESS["ETW Sessions và Buffers \n (Non-paged memory pool)"]
    SESS --> CONS["ETW Consumers \n (Sysmon Driver / EDR Agent)"]
    CONS --> EVTX["EVTX Event Channels \n (Sysmon/Operational.evtx)"]
    EVTX --> SIEM["Splunk Universal Forwarder \n (Forward to SIEM Indexer)"]

```

#### Bảng So Sánh Windows Client vs Windows Server Logging:

| Tiêu chí so sánh | Windows Client (Windows 10 / 11) | Windows Server (2019 / 2022 / DC) |
| :--- | :--- | :--- |
| **Mục đích sử dụng** | Máy trạm người dùng cuối (Workstation). | Máy chủ dịch vụ (Domain Controller, File Server, Database). |
| **Lưu lượng Log trung bình** | Thấp đến Trung bình (50 - 500 MB/ngày). | Rất cao (2 GB - 50 GB/ngày trên Domain Controller). |
| **Dung lượng mặc định Log** | 20 MB / channel (Tự động ghi đè khi đầy). | 20 MB - 100 MB / channel (Cần tăng tối thiểu 1 GB - 4 GB). |
| **Audit Policy mặc định** | Hầu hết các subcategory tắt. | Bật sẵn một số policy xác thực cơ bản. |
| **Trọng tâm giám sát** | Endpoint Execution (Sysmon 1, Office spawn CLI, USB). | Kerberos Ticket (4768/4769), NTLM (4776), GPO Changes (4719). |

![Chính sách dung lượng và lưu trữ log](assets/log_size_retention.png)
![Điểm mù khi chỉ dựa vào Security log mặc định](assets/security_log_blindspot.png)

---

### 1.3 Cấu Trúc Chi Tiết Của Một Windows Event Record

Mỗi bản ghi Event trong tệp `.evtx` bao gồm 2 phần chính: **`<System>` Header** (Metadata chuẩn hóa) và **`<EventData>`** (Dữ liệu động đặc thù theo từng EventCode).

![Cấu trúc một bản ghi Event](assets/event_structure.png)
![Giao diện Event Viewer General Tab](assets/event_viewer_general.png)
![Giao diện Event Viewer XML View](assets/event_viewer_xml.png)

```xml
<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Security-Auditing" Guid="{54849625-5478-4994-A5BA-3E3B0328C30D}" />
    <EventID>4624</EventID>
    <Version>2</Version>
    <Level>0</Level>
    <Task>12544</Task>
    <Opcode>0</Opcode>
    <Keywords>0x8020000000000000</Keywords>
    <TimeCreated SystemTime="2026-08-28T09:30:15.1234567Z" />
    <EventRecordID>984321</EventRecordID>
    <Channel>Security</Channel>
    <Computer>WIN-DC01.lab.local</Computer>
    <Security />
  </System>
  <EventData>
    <Data Name="TargetUserName">svc_backup</Data>
    <Data Name="TargetDomainName">LAB</Data>
    <Data Name="LogonType">3</Data>
    <Data Name="LogonProcessName">NtLmSsp</Data>
    <Data Name="AuthenticationPackageName">NTLM</Data>
    <Data Name="WorkstationName">WORKSTATION05</Data>
    <Data Name="IpAddress">192.168.100.20</Data>
    <Data Name="IpPort">5555</Data>
  </EventData>
</Event>
```

---

### 1.4 Danh Mục Windows EventID Trọng Yếu Cần Giám Sát

#### Nhóm 1: Xác Thực và Phiên Đăng Nhập (Authentication và Logon)

| EventID | Tên sự kiện | Ý nghĩa kỹ thuật và Phân tích SOC |
| :---: | :--- | :--- |
| **4624** | Successful Logon | Xác định người dùng đăng nhập thành công. Chú ý **Logon Type**: Type 2 (Interactive), Type 3 (Network - WinRM/SMB), Type 10 (RDP). |
| **4625** | Failed Logon | Cảnh báo tấn công dò mật khẩu (Brute Force / Password Spraying) khi số lượng tăng đột biến trong thời gian ngắn. |
| **4648** | Explicit Credentials Logon | Người dùng chạy ứng dụng bằng quyền khác (`runas.exe`). Dấu hiệu leo quyền hoặc Lateral Movement (Pass-the-Hash). |
| **4672** | Special Privileges Assigned | Gán quyền quản trị tối cao (`SeDebugPrivilege`, `SeTcbPrivilege`) cho phiên đăng nhập mới của tài khoản Administrator/SYSTEM. |
| **4768** | Kerberos TGT Request (AS-REQ) | Máy trạm yêu cầu vé TGT từ Domain Controller. Cảnh báo khi mã hóa yếu (`0x17` - RC4) hoặc user bất thường. |
| **4769** | Kerberos Service Ticket (TGS-REQ)| Yêu cầu vé dịch vụ. Cảnh báo tấn công **Kerberoasting** khi có hàng loạt request TGS với mã hóa RC4 từ 1 user. |
| **4771** | Kerberos Pre-Auth Failed | Thất bại xác thực trước Kerberos (sai mật khẩu). Cảnh báo tấn công **AS-REP Roasting**. |
| **4776** | NTLM Credential Validation | Xác thực NTLM qua Domain Controller. Chỉ số quan trọng phát hiện **Pass-the-Hash**. |

#### Nhóm 2: Quản Trị Tài Khoản và Nhóm Bảo Mật (Account Management)

| EventID | Tên sự kiện | Ý nghĩa kỹ thuật và Phân tích SOC |
| :---: | :--- | :--- |
| **4720** | User Account Created | Tài khoản người dùng mới được tạo. Kiểm tra tài khoản người tạo (`SubjectUserName`) để phát hiện backdoor. |
| **4722** | User Account Enabled | Tài khoản bị vô hiệu hóa trước đó được kích hoạt lại. |
| **4724** | Password Reset Attempt | Quản trị viên thực hiện đặt lại mật khẩu cho người dùng. |
| **4726** | User Account Deleted | Tài khoản người dùng bị xóa khỏi hệ thống. |
| **4732** | Member Added to Local Group | Thêm thành viên vào nhóm bảo mật cục bộ (đặc biệt là nhóm `Administrators` hoặc `Remote Desktop Users`). |
| **4728** | Member Added to Global Group | Thêm thành viên vào nhóm Domain Admin trên Active Directory. |

#### Nhóm 3: Tiến Trình, Dịch Vụ và Xóa Log (Process, Service và Tampering)

| EventID | Channel | Tên sự kiện | Ý nghĩa kỹ thuật và Phân tích SOC |
| :---: | :---: | :--- | :--- |
| **4688** | Security | Process Creation | Khởi tạo tiến trình mới. **Bắt buộc bật Include CommandLine** để thấy toàn bộ tham số thực thi. |
| **7045** | System | Service Installed | Dịch vụ mới được cài đặt (tương đương Event 4697). Phát hiện PsExec, Procdump Service, Persistence. |
| **7036** | System | Service State Changed | Trạng thái dịch vụ thay đổi (Running $\rightarrow$ Stopped). Dấu hiệu tắt Antivirus/Windows Update. |
| **1102** | Security | Audit Log Cleared | Nhật ký Security bị xóa sạch bởi quản trị viên hoặc kẻ tấn công nhằm xóa dấu vết (*Anti-Forensics*). |
| **4104** | PowerShell | Script Block Logging | Ghi lại toàn bộ nội dung khối lệnh script PowerShell đã được giải mã (*Deobfuscated payload*). |

---

### 1.5 Linux Logging Architecture (Syslog, Journald và Auditd)

Hệ thống Linux sử dụng mô hình ghi log phân tán kết hợp giữa tệp văn bản truyền thống (`/var/log/`), dịch vụ `systemd-journald` và hệ thống kiểm toán cấp nhân **Auditd**.

![Systemd Journald trên Linux](assets/linux_journald.png)
![Auth log giám sát SSH và Sudo](assets/linux_auth_log.png)
![System messages trong var log](assets/linux_syslog_messages.png)

#### 1.5.1 Danh mục tệp nhật ký hệ thống chính trên Linux:
* `/var/log/auth.log` (Debian/Ubuntu) hoặc `/var/log/secure` (RHEL/CentOS): Ghi nhận toàn bộ xác thực PAM, SSH logins, lệnh `sudo`, `su`.
* `/var/log/syslog` / `/var/log/messages`: Nhật ký tổng thể của hệ thống, dịch vụ và kernel.
* `/var/log/kern.log` và `dmesg`: Nhật ký bộ đệm vòng của Linux Kernel (Ring Buffer).

![Kernel log trên Linux](assets/linux_kern_log.jpeg)
![Dmesg kernel ring buffer view](assets/linux_dmesg_view.png)

#### 1.5.2 Nhật ký nhị phân (Binary Logs) và Lệnh phân tích:
* `/var/log/wtmp`: Lịch sử các phiên đăng nhập thành công và thời gian reboot. Đọc bằng lệnh `last`.
* `/var/log/btmp`: Lịch sử các phiên đăng nhập thất bại. Đọc bằng lệnh `lastb` hoặc `utmpdump /var/log/btmp`.
* `/var/log/lastlog`: Ghi nhận thời điểm đăng nhập gần nhất của từng tài khoản. Đọc bằng lệnh `lastlog`.

![Lịch sử đăng nhập thất bại trong btmp](assets/linux_btmp_failed_login.png)

---

### 1.6 Kiến Trúc Linux Audit Subsystem (Auditd)

> [!important] Tại sao Auditd là tiêu chuẩn vàng trên Linux?
> `auditd` không phụ thuộc vào ứng dụng user-space. Nó hook trực tiếp vào **Linux Kernel System Call Interface**. Mọi lệnh thực thi (`execve`), mở file (`openat`), gán quyền (`setuid`, `chmod`) đều được ghi nhận nguyên vẹn kể cả khi kẻ tấn công xóa shell history.

![Kiến trúc tổng thể Linux Auditd](assets/auditd_architecture.png)
![Luồng xử lý sự kiện Auditd trong Kernel](assets/auditd_kernel_flow.png)

#### Cú pháp Rule Auditd Chuẩn:
1. **Watch Rule (Giám sát đường dẫn file/thư mục)**:
   ```bash
   -w <path_to_file> -p <permissions> -k <custom_key>
   # Ví dụ: Giám sát ghi đè file cấu hình tài khoản
   -w /etc/passwd -p wa -k identity_changes
   ```
2. **Syscall Rule (Giám sát lời gọi hàm hệ thống)**:
   ```bash
   -a <action,filter> -S <syscall_name> -F <field_condition> -k <custom_key>
   # Ví dụ: Giám sát thực thi lệnh của người dùng thực (auid >= 1000)
   -a always,exit -F arch=b64 -S execve -F auid>=1000 -F auid!=4294967295 -k user_commands
   ```

---

### 1.7 Sysmon (System Monitor - Windows và Linux Deep Telemetry)

Sysmon là công cụ miễn phí mạnh mẽ nhất từ bộ công cụ Microsoft Sysinternals, hoạt động như một Device Driver (`SysmonDrv.sys`) kết hợp với Service hệ thống để cung cấp tầm nhìn toàn diện về hoạt động độc hại.

![Tổng quan kiến trúc Sysmon](assets/sysmon_overview.jpeg)
![Cấu hình Sysmon bằng XML](assets/sysmon_xml_config.png)

#### 1.7.1 Kiến Trúc Sysmon Internals (Theo Nghiên Cứu Chuyên Sâu Exatrack)

```mermaid
graph LR
    subgraph KERNEL_SPACE ["Kernel Space (Ring 0)"]
        DRV["SysmonDrv.sys (Minifilter Driver)"]
        FLT["FltMgr.sys (Filter Manager)"]
        WFP["Windows Filtering Platform (WFP / WSK)"]
        
        CB_PROC["PsSetCreateProcessNotifyRoutineEx \n -> EventID 1 (Create), EventID 5 (Terminate)"]
        CB_THRD["PsSetCreateThreadNotifyRoutine \n -> EventID 8 (CreateRemoteThread)"]
        CB_IMG["PsSetLoadImageNotifyRoutine \n -> EventID 6 (Driver), EventID 7 (DLL)"]
        CB_OBJ["ObRegisterCallbacks (Process và Thread Handle) \n -> EventID 10 (ProcessAccess / LSASS 0x1FFFFF)"]
        CB_REG["CmRegisterCallbackEx \n -> EventID 12, 13, 14 (Registry Persistence)"]
        CB_FS["Minifilter I/O Pre/Post Callbacks \n -> EventID 2 (Timestomp), EventID 11 (File), EventID 23 (Delete)"]
    end

    subgraph USER_SPACE ["User Space (Ring 3)"]
        SVC["Sysmon64.exe (Windows Service) \n - Configuration XML Parser \n - ETW Publisher"]
        EVTX_CHAN["Microsoft-Windows-Sysmon/Operational.evtx"]
    end

    DRV --> CB_PROC
    DRV --> CB_THRD
    DRV --> CB_IMG
    DRV --> CB_OBJ
    DRV --> CB_REG
    DRV --> CB_FS
    WFP -->|"Network Event Capture"| DRV
    
    DRV -->|"IPC Communication / Shared Memory"| SVC
    SVC -->|"Publish via ETW"| EVTX_CHAN

```

* **Sysmon for Linux**: Trên Linux, Sysmon hoạt động dựa trên công nghệ **eBPF (Extended Berkeley Packet Filter)** và hệ thống tệp ảo `/sys/kernel/debug/tracing` (Tracepoints và Kprobes) để theo dõi các system calls trực tiếp trong nhân mà không cần biên dịch lại kernel module ngoài.

#### 1.7.2 Bảng Tra Cứu Toàn Diện 29 Sysmon EventIDs và Use Case SOC

| EventID | Tên Sự Kiện | Ý Nghĩa Kỹ Thuật và Tình Huống Ứng Dụng Trong SOC |
| :---: | :--- | :--- |
| **1** | Process Creation | Khởi tạo tiến trình với đầy đủ `CommandLine`, `ParentCommandLine`, `User`, `Hashes` (SHA256), `CurrentDirectory`. |
| **2** | File Creation Time Changed | Phát hiện kỹ thuật **Timestomping** (kẻ tấn công sửa đổi ngày tạo file để che giấu mã độc). |
| **3** | Network Connection | Ghi nhận kết nối mạng TCP/UDP kèm Process ID, Source/Dest IP và Port. Phát hiện C2 Beaconing. |
| **4** | Sysmon Service State Changed | Cảnh báo khi dịch vụ Sysmon bị dừng hoặc khởi động lại (Dấu hiệu bị vô hiệu hóa). |
| **5** | Process Terminated | Tiến trình kết thúc. Hỗ trợ tính toán thời gian tồn tại của tiến trình độc hại. |
| **6** | Driver Loaded | Kernel Driver được nạp vào hệ thống. Phát hiện Rootkit và BYOVD (Bring Your Own Vulnerable Driver). |
| **7** | Image Loaded (DLL) | Nạp thư viện liên kết động (.dll). Phát hiện kỹ thuật **DLL Hijacking / Sideloading**. |
| **8** | CreateRemoteThread | Tiến trình này tạo luồng thực thi trong tiến trình khác. Chỉ số kinh điển của **Process Injection**. |
| **9** | RawAccessRead | Đọc trực tiếp ổ đĩa vật lý qua `\\.\PhysicalDrive0` để bypass cơ chế khóa file của OS. |
| **10** | ProcessAccess | Một tiến trình mở handle đọc/ghi sang tiến trình khác. **Chìa khóa bắt Mimikatz dump LSASS (`0x1FFFFF`)**. |
| **11** | FileCreate | Tạo mới hoặc ghi đè file trên ổ đĩa. Phát hiện Ransomware xả mã độc và tạo file `.locked`. |
| **12** | Registry Create/Delete Key | Tạo hoặc xóa khóa Registry. Phát hiện kỹ thuật duy trì quyền kiểm soát (Persistence). |
| **13** | Registry Set Value | Thay đổi giá trị khóa Registry (ví dụ sửa đổi `HKLM\...\Run` hoặc tắt Windows Defender). |
| **14** | Registry Key/Value Rename | Đổi tên khóa Registry nhằm gây rối loạn hệ thống phân tích. |
| **15** | FileCreateStreamHash | Phát hiện tệp tạo luồng dữ liệu phụ **Alternate Data Stream (ADS)** (ví dụ Zone.Identifier). |
| **17** | Pipe Created | Tạo Named Pipe mới. Dấu hiệu giao tiếp C2 nội bộ (Cobalt Strike SMB Beacon). |
| **18** | Pipe Connected | Kết nối vào Named Pipe đã tạo. |
| **19** | WMI EventFilter Activity | Khởi tạo bộ lọc sự kiện WMI (WMI Persistence). |
| **20** | WMI EventConsumer Activity| Khởi tạo hành động thực thi khi WMI Filter kích hoạt. |
| **21** | WMI EventConsumerToFilter | Liên kết Filter và Consumer hoàn tất cơ chế WMI Backdoor. |
| **22** | DNSEvent | Truy vấn tên miền DNS kèm tiến trình gọi. Phát hiện **DNS Tunneling** và **DGA Domains**. |
| **23** | FileDelete (Archived) | File bị xóa nhưng Sysmon tự động lưu trữ một bản sao vào thư mục bảo vệ để phục vụ Forensics. |
| **24** | ClipboardChange | Nội dung bộ nhớ đệm Clipboard bị thay đổi (Phát hiện đánh cắp mật khẩu copy-paste). |
| **25** | ProcessTampering | Phát hiện kỹ thuật **Process Hollowing** và **Process Herpaderping** cấp độ nhân. |
| **26** | FileDeleteDetected | Ghi nhận sự kiện xóa file mà không lưu trữ bản sao. |
| **29** | FileExecutableDetected | Phát hiện file thực thi (.exe, .dll, .sys) mới xuất hiện trong hệ thống. |

---

### 1.8 Chuyên Đề Mở Rộng: Firewall, Database, Web Server, EDR và Cloud Logs

#### 1.8.1 Firewall Logs (Giám Sát Lưu Lượng Vùng Biên và Mạng Nội Bộ)
Firewall ghi nhận mọi nỗ lực kết nối TCP/UDP/ICMP đi qua các vùng mạng (Zone-to-Zone) theo định dạng CEF (Common Event Format) hoặc Syslog:
* **Các trường cốt lõi**: `src_ip`, `dst_ip`, `dst_port`, `transport=tcp/udp`, `action=ALLOW/DENY`, `nat_src_ip`, `bytes_out`, `bytes_in`, `duration`.
* **Use Case SOC**:
 1. Phát hiện **Port Scanning**: Một IP nguồn gửi hàng loạt gói tin tới nhiều Port đích khác nhau bị `action=DENY` trong 1 phút.
 2. Phát hiện **C2 Beaconing**: Kết nối định kỳ (Egress) tới cùng một IP ngoài internet với dung lượng `bytes_out` cố định mỗi 30-60 giây.

```bash
/* Splunk Query: Phát hiện kết nối ra ngoài bị chặn hàng loạt trên Firewall */
index=firewall action=DENY
| bin _time span=5m
| stats count as blocked_attempts, dc(dest_port) as targeted_ports by src_ip, dest_ip, _time
| where blocked_attempts > 100
| sort -blocked_attempts
```

#### 1.8.2 Database Logs (MSSQL, MySQL, PostgreSQL)
Cơ sở dữ liệu là mục tiêu cuối cùng của kẻ tấn công để trích xuất dữ liệu nhạy cảm (PII, thẻ tín dụng, bí mật kinh doanh):
* **MSSQL**: Cấu hình *SQL Server Audit Specification* và *SQL Server Error Log*. Ghi nhận sự kiện xác thực (EventID `18456` - Login Failed), sự kiện thực thi lệnh OS qua `xp_cmdshell` (EventID `33205` / C2 Audit).
* **MySQL / MariaDB**: Kích hoạt *General Query Log* và *Audit Plugin*. Giám sát các câu lệnh truy vấn bất thường như `UNION SELECT`, `INTO OUTFILE '/var/www/html/shell.php'`, `GRANT ALL PRIVILEGES`.
* **PostgreSQL**: Cấu hình `log_statement = 'ddl'` hoặc `'all'` trong `postgresql.conf`.

#### 1.8.3 Web Server Logs (Apache và Microsoft IIS)
* **Apache / Nginx (Combined Log Format)**:
 `%h %l %u %t "%r" %>s %b "%{Referer}i" "%{User-Agent}i"`
 - `%h`: Client IP (`src_ip`)
 - `%r`: Request Line (`METHOD /path HTTP/1.1`)
 - `%>s`: HTTP Status Code (`200` OK, `302` Redirect, `401` Unauthorized, `403` Forbidden, `404` Not Found, `500` Internal Server Error)
 - `%b`: Response Size (Bytes)
* **Microsoft IIS (W3C Extended Log Format)**:
 Lưu tại `C:\inetpub\logs\LogFiles\W3SVC1\u_exYYMMDD.log`.
* **Use Case Phát hiện Tấn công Web**:
 1. **SQL Injection**: URI chứa `' OR '1'='1`, `UNION+SELECT`, `WAITFOR+DELAY`.
 2. **Path Traversal / LFI**: URI chứa `../../etc/passwd` hoặc `..\..\windows\win.ini`.
 3. **Web Shell Upload và Execution**: Request `POST` tải file `.php`/`.jsp`/`.aspx` thành công (Status 200/201), ngay sau đó xuất hiện request `GET /uploads/shell.php?cmd=whoami`.

```bash
/* Splunk Query: Phát hiện nỗ lực tải và kích hoạt Web Shell */
index=web_logs (uri="*.php*" OR uri="*.jsp*" OR uri="*.aspx*") (status=200 OR status=201)
| where match(uri_query, "(?i)(cmd|exec|system|passthru|shell_exec|eval|base64)")
| table _time clientip method uri uri_query status useragent
```

#### 1.8.4 EDR Telemetry (Endpoint Detection and Response)
Khác với Antivirus truyền thống chỉ quét chữ ký tĩnh, EDR cung cấp:
* **Process Lineage Tree**: Tái hiện toàn bộ cây phả hệ tiến trình cha - con, thời gian sống và tham số thực thi.
* **Non-backed Memory Inspection**: Phát hiện mã máy thực thi từ vùng nhớ động (Heap/Stack/Anonymous memory) không gắn liền với file thực thi hợp lệ trên đĩa $\rightarrow$ Dấu hiệu của **Shellcode Injection / Cobalt Strike Beacon**.
* **Remote Response và Host Isolation**: Khả năng cô lập thiết bị khỏi mạng nội bộ qua API trong khi vẫn duy trì kênh kết nối an toàn với máy chủ EDR để Analyst điều tra từ xa.

#### 1.8.5 Cloud Logs (AWS CloudTrail và Azure Activity Log)
* **AWS CloudTrail**: Ghi lại mọi lời gọi API (Management Events và Data Events) trong môi trường AWS dưới dạng JSON.
 - **IAM Abuse**: `eventName="CreateAccessKey"`, `eventName="AttachUserPolicy"`.
 - **S3 Exfiltration**: `eventName="GetObject"`, `eventName="PutBucketPolicy"`.
 - **Tampering**: `eventName="StopLogging"`, `eventName="DeleteTrail"`.
* **Azure Activity Log và Entra ID (Azure AD)**:
 - Giám sát gán quyền quản trị viên: `operationName="Microsoft.Authorization/roleAssignments/write"`.
 - Giám sát đăng nhập bất thường qua Azure AD Sign-in Logs: Bắt các lượt đăng nhập từ quốc gia lạ (Impossible Travel) hoặc thất bại MFA liên tục.

```json
{
  "eventTime": "2026-08-28T09:15:32Z",
  "eventSource": "iam.amazonaws.com",
  "eventName": "CreateAccessKey",
  "awsRegion": "us-east-1",
  "sourceIPAddress": "203.0.113.50",
  "userAgent": "aws-cli/2.15.0 Python/3.11.6",
  "userIdentity": {
    "type": "IAMUser",
    "userName": "admin_backup"
  },
  "responseElements": {
    "accessKey": {
      "accessKeyId": "AKIAIOSFODNN7EXAMPLE",
      "status": "Active"
    }
  }
}
```

---

## 2. Tối Ưu Hóa Nguồn Log: Nguyên Tắc "Who, What, When" và Hardening

> [!tip] Nguyên Tắc Lọc Bỏ Nhiễu "Who, What, When?"
> Mỗi bản ghi log gửi về SIEM bắt buộc phải trả lời được 3 câu hỏi:
> 1. **Who**: Tài khoản nào hoặc Tiến trình/Dịch vụ nào thực hiện?
> 2. **What**: Hành động cụ thể là gì (Đọc file, nạp DLL, kết nối IP, sửa Registry)?
> 3. **When**: Thời gian xảy ra chính xác (Timestamp đồng bộ qua NTP)?
> *Nếu một loại log không trả lời được ít nhất 2/3 yếu tố trên thì đó là **Noise (Nhiễu)** và cần được loại bỏ.*

---

### 2.1 Cấu Hình Windows Advanced Audit Policy Qua GPO và Script

![Cấu hình GPO Audit Policy trên Windows](assets/windows_gpo_audit_policy.png)
![Danh mục chi tiết Advanced Audit Policy](assets/windows_advanced_audit_list.png)
![Chi tiết cấu hình các nhóm Audit](assets/windows_audit_gpo_detailed.png)

Script triển khai tự động hoàn chỉnh đã được tạo tại: [`scripts/windows/01_SetAuditPolicy_Enterprise.ps1`](../configs/index.md#81-kich-ban-powershell-kich-hoat-toan-dien-audit-policy-setauditpolicyps1).

---

### 2.2 Triển Khai Sysmon Với Cấu Hình Chuẩn Olaf Hartong (`sysmon-modular`)

Script tải và cài đặt tự động đã được lưu trữ tại: [`scripts/windows/02_Install_Sysmon_Modular.ps1`](../configs/index.md#82-kich-ban-cai-at-sysmon-modular-tren-windows-install_sysmonps1).

---

### 2.3 Cấu Hình Bộ Quy Tắc Auditd Chuẩn Hóa Trên Linux (`soc-baseline.rules`)

![Mẫu rules auditd trên Linux](assets/auditd_rules_sample.png)
![Trạng thái hoạt động dịch vụ auditd](assets/auditd_service_status.png)

Script cài đặt và nạp tự động vào nhân Linux đã được lưu trữ tại: [`scripts/linux/02_Install_Auditd_SOC_Baseline.sh`](../configs/index.md#83-kich-ban-trien-khai-auditd-soc-baseline-tren-linux-install_auditdsh).

---

## 3. Nền Tảng Splunk SIEM và Kỹ Thuật Truy Vấn SPL (Search Processing Language)

![Giao diện Splunk Search trong môi trường Lab](assets/splunk_search_lab.png)

### 3.1 Kiến Trúc 3 Thành Phần Cốt Lõi Của Splunk

```mermaid
graph LR
    subgraph FORWARDERS ["Data Collection Layer"]
        UF["Universal Forwarder (UF) \n (Lightweight ~10MB RAM, No local parsing)"]
        HF["Heavy Forwarder (HF) \n (Full Splunk instance, Parse/Filter/Route)"]
    end

    subgraph INDEXERS ["Storage và Indexing Layer"]
        IDX1["Splunk Indexer Node 01 \n (Hot / Warm / Cold Buckets)"]
        IDX2["Splunk Indexer Node 02 \n (Clustered Index Data)"]
    end

    subgraph SEARCH_HEADS ["User Interface và Analytics Layer"]
        SH["Splunk Search Head \n (SPL Parser, Knowledge Objects, Dashboards, ES)"]
    end

    UF -->|"TCP Port 9997 (Raw Log Data)"| IDX1
    UF -->|"TCP Port 9997"| IDX2
    HF -->|"Parsed Data Streams"| IDX1
    HF -->|"Parsed Data Streams"| IDX2

    SH -->|"Distributed Search Requests"| IDX1
    SH -->|"Distributed Search Requests"| IDX2

```

#### So Sánh Universal Forwarder (UF) vs Heavy Forwarder (HF):
* **Universal Forwarder (UF)**: Cực nhẹ (~10MB RAM, ~1% CPU), chỉ thu thập log thô và gửi trực tiếp qua cổng TCP `9997`. Không phân tích hay lọc dữ liệu tại chỗ. Phù hợp cài đặt hàng loạt trên mọi máy trạm và máy chủ.
* **Heavy Forwarder (HF)**: Một instance Splunk hoàn chỉnh có khả năng bóc tách, lọc dữ liệu (Data Filtering) và định tuyến (Routing) sang các SIEM khác hoặc lưu trữ trung gian trước khi chuyển về Indexer. Thường đặt tại vùng biên DMZ.

---

### 3.2 Vòng Đời Dữ Liệu 4 Giai Đoạn Trong Splunk (Data Pipeline)

```mermaid
flowchart LR
    S1["1. Input Stage \n (inputs.conf, HEC, Syslog) \n Đọc chunk 64KB và gán metadata"] --> S2["2. Parsing Stage \n (Tách dòng line-breaking, \n Timestamp identification, \n Host/Source/Sourcetype)"]
    S2 --> S3["3. Indexing Stage \n (Tách segment từ khóa, \n Ghi vào Hot/Warm Buckets, \n Nén file tsidx và journal.gz)"]
    S3 --> S4["4. Search Stage \n (SPL Query Execution, \n Ánh xạ Knowledge Objects, \n Chuẩn hóa CIM Models)"]

```

#### Các Bucket Lưu Trữ Dữ Liệu Trong Indexer:
1. **Hot Bucket**: Thư mục đang được ghi dữ liệu thời gian thực (Lưu trên ổ cứng cực nhanh NVMe/SSD).
2. **Warm Bucket**: Đã đầy dung lượng, chuyển sang chế độ chỉ đọc (Read-only) nhưng vẫn nằm trên ổ cứng nhanh để phục vụ tìm kiếm thường xuyên.
3. **Cold Bucket**: Dữ liệu cũ chuyển sang ổ cứng lưu trữ chi phí thấp (HDD/SATA).
4. **Frozen Bucket**: Dữ liệu hết hạn vòng đời lưu trữ, tự động bị xóa hoặc đẩy vào kho lưu trữ lạnh (AWS S3 Glacier / Azure Blob Archive).

---

### 3.3 Cẩm Nang Lệnh SPL Cơ Bản và Nâng Cao Trong SOC

```mermaid
graph LR
    FILTER["1. Lọc Sự Kiện \n (index, sourcetype, EventCode, time)"] --> EXTRACT["2. Bóc Tách Trường \n (rex, eval, lookup)"]
    EXTRACT --> AGGREGATE["3. Thống Kê và Gom Nhóm \n (stats, timechart, bin)"]
    AGGREGATE --> FORMAT["4. Định Dạng và Sắp Xếp \n (table, sort, where)"]

```

#### Tổng Hợp 10 Lệnh SPL Cốt Lõi Cho SOC Analyst:

```bash
/* 1. stats :  Thống kê tần suất đăng nhập thất bại theo User và IP nguồn */
index=windows_security EventCode=4625
| stats count as failed_count, dc(host) as targeted_hosts by Account_Name, Source_Network_Address
| where failed_count > 10
| sort -failed_count

/* 2. eval và match :  Gán nhãn mức độ nguy hiểm dựa trên câu lệnh PowerShell */
index=windows_sysmon EventCode=1 (Image="*\\powershell.exe" OR Image="*\\cmd.exe")
| eval is_malicious=if(match(CommandLine, "(?i)(-enc|-encodedcommand|downloadstring|iex\s*\()"), "HIGH_RISK", "NORMAL")
| where is_malicious="HIGH_RISK"
| table _time host User Image CommandLine

/* 3. rex :  Bóc tách IP và User từ log Linux Auth thô */
index=linux_security source="/var/log/auth.log" "Failed password"
| rex field=_raw "Failed password for (?:invalid user )?(?<user>\S+) from (?<src_ip>\d+\.\d+\.\d+\.\d+) port (?<src_port>\d+)"
| stats count by user, src_ip
| sort -count

/* 4. timechart :  Vẽ biểu đồ tần suất cảnh báo theo khung thời gian 1 giờ */
index=windows_security EventCode IN (4624, 4625)
| timechart span=1h count by EventCode

/* 5. dedup :  Lọc bỏ sự kiện trùng lặp, chỉ lấy bản ghi mới nhất của từng User */
index=windows_security EventCode=4720
| dedup TargetUserName
| table _time SubjectUserName TargetUserName Computer

/* 6. bin và streamstats :  Phát hiện quét cổng mạng nội bộ dựa trên cửa sổ trượt thời gian */
index=windows_sysmon EventCode=3
| bin _time span=1m
| stats dc(DestinationPort) as scanned_ports, values(DestinationPort) as ports by SourceIp, DestinationIp, _time
| where scanned_ports >= 5
```

---

## 4. Kiến Trúc Triển Khai Lab Multi-Node Cluster và Kỹ Thuật Tối Ưu Hóa inputs.conf

### 4.1 Mô Hình Mạng và Bảng Phân Bổ Địa Chỉ IP (Lab Topology)

```mermaid
flowchart LR
    subgraph CLUSTER_MGMT ["Quản Lý và Tìm Kiếm (Management Tier)"]
        M1["Máy 1: 10.0.0.10 \n - Search Head (Port 8000) \n - Cluster Manager / Master (Port 8089) \n - Deployment Server \n (User: splunk / hope)"]
    end

    subgraph INDEXER_CLUSTER ["Lưu Trữ và Tương Quan (Indexing Tier - Cluster ID: idxc1)"]
        M2["Máy 2: 10.0.0.20 \n - Indexer Peer 1 \n - Replication Port: 9887 \n - Ingestion Port: 9997 \n (User: id1)"]
        M3["Máy 3: 10.0.0.30 \n - Indexer Peer 2 \n - Replication Port: 9887 \n - Ingestion Port: 9997 \n (User: id2)"]
    end

    subgraph ENDPOINTS ["Thu Thập Dữ Liệu (Forwarding Tier)"]
        M4["Máy 4: 10.0.0.40 \n - Ubuntu Server (UF) \n - Apache2 / Auth / Auditd \n (User: splunkf)"]
        M5["Máy 5: 10.0.0.50 \n - Windows Server 2022 (UF) \n - Domain Controller \n - Active Directory / Sysmon \n (User: hope)"]
    end

    M1 -->|"Quản lý Cluster Secret và Replicate Factors (RF=2, SF=2)"| M2
    M1 -->|"Quản lý Cluster Secret và Replicate Factors (RF=2, SF=2)"| M3
    M1 -.->|"Phân phối App cấu hình (Deployment Server)"| M4
    M1 -.->|"Phân phối App cấu hình (Deployment Server)"| M5

    M4 -->|"Forward Logs (TCP 9997)"| M2
    M4 -->|"Forward Logs (TCP 9997)"| M3
    M5 -->|"Forward Logs (TCP 9997)"| M2
    M5 -->|"Forward Logs (TCP 9997)"| M3

    M2 <-->|"Raw Data Replication (TCP 9887)"| M3

```

| Node | IP Address | Hệ Điều Hành | Vai Trò Splunk | User Quản Trị | Trọng Tâm Giám Sát |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Máy 1** | `10.0.0.10` | Ubuntu 22.04 LTS | Search Head + Cluster Manager + Deployment Server | `splunk` / `hope` | Web UI (8000), REST API (8089), Deployment Apps |
| **Máy 2** | `10.0.0.20` | Ubuntu 22.04 LTS | Indexer Peer 1 (Cluster Member) | `id1` | Ingestion (9997), Replication (9887), Hot/Warm DB |
| **Máy 3** | `10.0.0.30` | Ubuntu 22.04 LTS | Indexer Peer 2 (Cluster Member) | `id2` | Ingestion (9997), Replication (9887), Hot/Warm DB |
| **Máy 4** | `10.0.0.40` | Ubuntu 22.04 LTS | Endpoint (Universal Forwarder) | `splunkf` | Apache2 (`access_combined`), Auth, Auditd, Syslog |
| **Máy 5** | `10.0.0.50` | Windows Server 2022 | Endpoint (Universal Forwarder) / Domain Controller | `hope` | Active Directory, Kerberos, NTLM, Sysmon, Defender |

---

### 4.2 Kỹ Thuật Tinh Chỉnh `inputs.conf` Cho Windows Domain Controller (8 Attack Techniques)

Trên Domain Controller, lưu lượng log Security là cực lớn (hàng triệu event/ngày). Nếu không lọc whitelist, Indexer sẽ bị quá tải (*Index Exhaustion*). File cấu hình chuẩn tối ưu đã được thiết lập để bắt trọn **8 kỹ thuật tấn công Active Directory**:

```ini
#############################################################################
# inputs.conf - Windows Server 2022 / Domain Controller
# Vị trí: $SPLUNK_HOME/etc/system/local/inputs.conf
#############################################################################

[WinEventLog]
index = windows_logs
renderXml = true
sourcetype = XmlWinEventLog
checkpointInterval = 5
current_only = 1

[WinEventLog://Security]
index = windows_security
disabled = 0
evt_resolve_ad_obj = 1
checkpointInterval = 5

# Whitelist các Event ID cần thiết cho 8 kỹ thuật tấn công Active Directory:
# - 4769: Kerberoasting, Pass-the-Ticket, Golden/Silver Ticket
# - 4768: AS-REP Roasting, Overpass-the-Hash
# - 4624: Logon thành công (Pass-the-Hash, Overpass-the-Hash, RDP)
# - 4625: Logon thất bại (Brute-Force, Password Spraying)
# - 4776: NTLM Credential Validation (Pass-the-Hash)
# - 4662: Directory Service Access (DCSync Attack)
# - 4742, 5136, 4928, 4929: Computer/Object Modified (DCShadow Attack)
# - 4672: Special Privileges Assigned
# - 4720-4732: User/Group Management (Persistence)
# - 1102: Audit Log Cleared (Anti-Forensics)
whitelist1 = EventCode=%(4768|4769|4770|4771|4624|4625|4672|4776|4662|4742|5136|4928|4929|4720|4722|4724|4726|4732|1102)%

[WinEventLog://Microsoft-Windows-PowerShell/Operational]
index = windows_logs
disabled = 0
batch_size = 50
checkpointInterval = 5

[WinEventLog://Microsoft-Windows-Sysmon/Operational]
index = windows_sysmon
disabled = 0
batch_size = 10

[WinEventLog://Directory Service]
index = windows_logs
disabled = 0
batch_size = 20
whitelist1 = EventCode=%(1138|1174|2946|2947|4928|4929|4930|5136|5141)%
```

---

### 4.3 Kỹ Thuật Tinh Chỉnh `inputs.conf` Cho Linux Endpoint

```ini
#############################################################################
# inputs.conf - Linux Endpoint
# Vị trí: /home/splunkf/splunkforwarder/etc/system/local/inputs.conf
#############################################################################

[default]
ignoreOlderThan = 14d
_TCP_ROUTING = *

[monitor:///var/log/apache2/access.log]
index = web_logs
sourcetype = access_combined
disabled = 0
crcSalt = <SOURCE>

[monitor:///var/log/apache2/error.log]
index = web_logs
sourcetype = apache_error
disabled = 0
crcSalt = <SOURCE>

[monitor:///var/log/auth.log]
index = linux_security
sourcetype = linux_secure
disabled = 0
crcSalt = <SOURCE>

[monitor:///var/log/audit/audit.log]
index = linux_security
sourcetype = auditd
disabled = 0
crcSalt = <SOURCE>

[monitor:///var/log/syslog]
index = linux_logs
sourcetype = syslog
disabled = 0
crcSalt = <SOURCE>

[monitor:///var/log/ufw.log]
index = linux_security
sourcetype = ufw
disabled = 0
```

---

### 4.4 Phân Phối Cấu Hình Tập Trung Qua Deployment Server

Khi quản lý hàng trăm máy trạm, ta tạo **Technology Add-ons (TAs)** và phân phối tự động từ Deployment Server (`10.0.0.10`) đến các Forwarder:

```bash
# Kiểm tra sự đồng bộ giữa App cục bộ và Deployment Apps
diff -r splunk/etc/apps/TA_windows_logs /home/splunk/splunk/etc/deployment-apps/TA_windows_logs
diff -r splunk/etc/apps/TA_linux_logs /home/splunk/splunk/etc/deployment-apps/TA_linux_logs

# Reload Deployment Server để cập nhật cấu hình cho toàn bộ Client
/home/splunk/splunk/bin/splunk reload deploy-server -auth hope:'Admin123@'
```

---

### 4.5 Cheat Sheet: Mở Rộng Ổ Cứng LVM Trên Ubuntu Không Cần Reboot

Khi các máy Indexer hoặc Forwarder bị đầy phân vùng đĩa (`/`), ta có thể nới rộng phân vùng LVM trực tiếp khi máy ảo đang hoạt động mà không cần khởi động lại:

```bash
# Bước 1: Kiểm tra cấu trúc phân vùng hiện tại (xem root map với sda mấy)
lsblk

# Bước 2: Nới rộng phân vùng vật lý (Ví dụ ổ sda, phân vùng 3)
sudo growpart /dev/sda 3

# Bước 3: Cập nhật dung lượng mới vào Physical Volume của LVM
sudo pvresize /dev/sda3

# Bước 4: Cấp phát 100% dung lượng trống mới cho Logical Volume của Root
sudo lvextend -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv

# Bước 5: Mở rộng hệ thống tệp (Filesystem) online trực tiếp trên đĩa
sudo resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv

# Bước 6: Kiểm tra lại dung lượng đã tăng
df -h /
```

---

## 5. Danh Mục Bộ Script Tự Động Hóa Quản Trị Hệ Thống (Scripts Suite)

Toàn bộ các tác vụ cấu hình và kịch bản triển khai tự động được tổng hợp đầy đủ mã nguồn tại [Tổng Hợp Cấu Hình Hệ Thống Splunk SOC Lab](../configs/index.md):

### Bộ Kịch Bản Dành Cho Linux (`scripts/linux/`):
1. **`01_Setup_Netplan_Static_IP.sh`**: Tự động cấu hình IP tĩnh qua Netplan, thiết lập Gateway và DNS.
2. **`02_Install_Auditd_SOC_Baseline.sh`**: Cài đặt và nạp 7 nhóm rules Auditd kiểm toán cấp nhân (`soc-baseline.rules`).
3. **`03_Install_Splunk_Enterprise_Server.sh`**: Cài đặt Splunk Enterprise 10.4.1, tối ưu `web.conf`, mở port 9997 và đăng ký boot-start.
4. **`04_Configure_Indexer_Cluster.sh`**: Cấu hình tự động Cluster Manager (Master) và Indexer Peers (Secret key, Port 9887, Disable web server).
5. **`05_Install_Splunk_UF_Ubuntu.sh`**: Cài đặt Apache2, tạo user `splunkf` (nhóm `adm`, `www-data`), cài UF và trỏ forward về Indexer.
6. **`06_inputs_linux_endpoint.conf`**: File cấu hình thu thập log toàn diện cho máy Linux.
7. **`07_LVM_Disk_Expansion_NoReboot.sh`**: Tự động mở rộng ổ đĩa LVM không cần reboot máy.
8. **`08_Verify_Linux_Logging.sh`**: Tự kiểm tra dịch vụ, số lượng auditd rules, kết nối port 9997 và quyền đọc file.

### Bộ Kịch Bản Dành Cho Windows (`scripts/windows/`):
1. **`01_SetAuditPolicy_Enterprise.ps1`**: Cấu hình Advanced Audit Policy toàn diện, ép Subcategory override, bật CommandLine cho Event 4688 và bật PowerShell 4104.
2. **`02_Install_Sysmon_Modular.ps1`**: Tải và cài đặt Sysmon với bộ rule `sysmon-modular` chuẩn Olaf Hartong.
3. **`03_Install_Splunk_UF_Windows.ps1`**: Cài đặt tự động Splunk Universal Forwarder MSI Silent và nạp `inputs.conf`.
4. **`04_inputs_windows_domain_controller.conf`**: File cấu hình `inputs.conf` chuyên dụng cho Domain Controller (bắt 8 kỹ thuật tấn công AD).
5. **`05_inputs_windows_workstation.conf`**: File cấu hình `inputs.conf` cho máy trạm người dùng.
6. **`06_Verify_Windows_Logging.ps1`**: Kiểm tra toàn diện dịch vụ, Registry keys, trạng thái Audit Policy và đọc sự kiện EVTX thực tế.

---

## 6. Bảng Hỏi - Đáp Chuyên Sâu Khi Bảo Vệ / Trình Bày (Q&A Defense Guide)

> [!faq]- Q1: Tại sao Security log của Windows mặc định không thấy được câu lệnh CommandLine của tiến trình? Khắc phục thế nào?
> - **Nguyên nhân**: Mặc định Windows EventCode 4688 chỉ ghi nhận tên file thực thi (`NewProcessName`) và tiến trình cha (`ParentProcessName`) để tiết kiệm dung lượng đĩa và bảo vệ quyền riêng tư người dùng.
> - **Khắc phục**: Cần kích hoạt chính sách GPO: `Computer Configuration > Administrative Templates > System > Audit Process Creation > Include command line in process creation events` (hoặc set Registry `ProcessCreationIncludeCmdLine_Enabled = 1`). Ngoài ra, triển khai **Sysmon EventCode 1** sẽ tự động thu thập đầy đủ CommandLine và Hash SHA256 mà không cần cấu hình phức tạp.

> [!faq]- Q2: Sự khác biệt bản chất giữa EventCode 4688 và Sysmon EventCode 1 là gì?
> - **So sánh**:
> 1. **Windows 4688**: Được sinh ra bởi hệ thống bảo mật gốc của Windows. Nếu không bật GPO CommandLine thì chỉ có thông tin tiến trình cơ bản, không có mã băm SHA256/MD5 của tệp thực thi.
> 2. **Sysmon Event 1**: Do Sysmon Driver thu thập trực tiếp từ Kernel qua ETW, luôn bao gồm: Full CommandLine, Parent CommandLine, Hashes (MD5, SHA256, IMPHASH), User SID, Current Directory, LogonId. Sysmon hỗ trợ lọc loại trừ nhiễu (XML filter) cực kỳ linh hoạt trước khi ghi log.

> [!faq]- Q3: Tại sao cần `auid!=4294967295` trong các rule Auditd trên Linux?
> - **Giải thích**: `auid` (Audit User ID) mang giá trị `4294967295` tương ứng với giá trị nhị phân `0xFFFFFFFF` (`-1` không dấu), đại diện cho các tiến trình chạy ngầm bởi hệ thống/daemon (như `cron`, `systemd`, `apache`) không có phiên đăng nhập của con người. Lọc bỏ `auid=4294967295` giúp loại bỏ 95% lượng log rác định kỳ và tập trung 100% vào hành vi của user đăng nhập thực tế.

> [!faq]- Q4: Tại sao trong Indexer Cluster cần thiết lập Replication Factor (RF) và Search Factor (SF)?
> - **Giải thích**: 
> - **Replication Factor (RF=2)**: Đảm bảo dữ liệu thô (raw data) của mỗi bucket được nhân bản sang ít nhất 2 Indexer khác nhau. Nếu 1 Indexer chết, dữ liệu không bị mất.
> - **Search Factor (SF=2)**: Đảm bảo tệp chỉ mục tìm kiếm (`tsidx`) cũng được nhân bản sang 2 Indexer. Nếu 1 Indexer chết, các tìm kiếm vẫn thực thi ngay lập tức mà không cần tốn thời gian rebuild lại index.

---

## 7. Tài Liệu Tham Khảo (References)

- **Microsoft Windows Event Log và Advanced Audit Documentation**: [https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/advanced-security-audit-policy-settings](https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/advanced-security-audit-policy-settings)
- **Microsoft Sysinternals Sysmon Official Guide**: [https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon)
- **Olaf Hartong sysmon-modular Repository**: [https://github.com/olafhartong/sysmon-modular](https://github.com/olafhartong/sysmon-modular)
- **Linux Auditd Documentation và Best Practices**: [https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/security_guide/chap-system_auditing](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/security_guide/chap-system_auditing)
- **Splunk Enterprise Cluster Architecture và Admin Manual**: [https://docs.splunk.com/Documentation/Splunk/latest/Indexer/Aboutclusters](https://docs.splunk.com/Documentation/Splunk/latest/Indexer/Aboutclusters)
- **Splunk Enterprise Search Processing Language (SPL) Reference**: [https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/](https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/)
