---
title: "Tổng Hợp Cấu Hình Hệ Thống Splunk SOC Lab"
last_modified: 2026-08-28
status: completed
author: "SOC Engineering và Detection Team"
tags:
  - splunk
  - configs
  - inputs-conf
  - props-conf
  - server-conf
  - indexes-conf
  - auditd
  - sysmon
  - deployment-server
aliases:
  - "SOC Lab Configuration Master Reference"
cssclasses:
  - dashboard
  - wide-page
---

# Tổng Hợp Toàn Diện Cấu Hình Hệ Thống Splunk SOC Lab

Tài liệu chuẩn hóa toàn bộ tệp tin cấu hình, sơ đồ mạng, kịch bản tự động hóa và chính sách giám sát của hệ thống phòng lab Enterprise SOC. Toàn bộ cấu hình được đúc kết từ quá trình triển khai thực tế trên cụm Splunk phân tán đa tầng kết hợp máy trạm Windows, máy chủ Active Directory, máy chủ dịch vụ Linux và cảm biến giám sát lưu lượng mạng.

---

## 1. Sơ Đồ Phân Bổ Mạng và Tài Khoản Quản Trị (Lab Topology)

Hệ thống lab mô phỏng môi trường doanh nghiệp hoàn chỉnh gồm 2 phân vùng mạng: Mạng quản trị dịch vụ nội bộ (`10.0.0.0/24` hoặc `192.168.100.0/24`) và Mạng kiểm thử / dịch vụ biên (`192.168.50.0/24`):

| Tên Máy Ảo | Địa Chỉ IP Lab | Hệ Điều Hành | Vai Trò Kiến Trúc Splunk | Tài Khoản / Mật Khẩu | Cổng Dịch Vụ Mở |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Máy 1: Splunk Management** | `10.0.0.10` (`192.168.100.10`) | Ubuntu 22.04 LTS | Search Head + Cluster Manager + Deployment Server | `splunk` / `User@` (`Password@`) | Web: `8000`, Management API: `8089`, Forwarding: `9997` |
| **Máy 2: Splunk Indexer 1** | `10.0.0.20` (`192.168.100.20`) | Ubuntu 22.04 LTS | Indexer Peer 1 (Cluster ID: `idxc1`) | `id1` (`Password@`) | Management API: `8089`, Ingestion: `9997`, Replication: `9887` |
| **Máy 3: Splunk Indexer 2** | `10.0.0.30` (`192.168.100.30`) | Ubuntu 22.04 LTS | Indexer Peer 2 (Cluster ID: `idxc1`) | `id2` (`Password@`) | Management API: `8089`, Ingestion: `9997`, Replication: `9887` |
| **Máy 4: Linux Endpoint** | `10.0.0.40` (`192.168.50.20`) | Ubuntu 22.04 LTS | Universal Forwarder (UF) + Apache Web + Auditd | `splunkf` (`Password@`) | HTTP: `80`, SSH: `22` |
| **Máy 5: Domain Controller** | `10.0.0.50` (`192.168.100.30`) | Windows Server 2022 | Universal Forwarder + Active Directory Domain Services | `Administrator` / `User@` (`Password@`) | Kerberos: `88`, LDAP: `389`, SMB: `445`, WinRM: `5985` |
| **Máy 6: Windows Client** | `192.168.100.40` | Windows 10 Enterprise | Universal Forwarder + Sysmon Modular (Joined Domain) | `victim_user` (`Password@`) | RDP: `3389`, WinRM: `5985` |
| **Máy 7: Network Sensor** | `192.168.100.50` / `192.168.50.50` | Ubuntu 22.04 LTS | Universal Forwarder + Zeek NSM + Suricata NIDS | `sensor` (`Password@`) | Cổng lắng nghe SPAN / TAP giám sát lưu lượng |
| **Máy 8: Attacker Box** | `192.168.50.100` | Kali Linux 2024.x | Máy phát động kịch bản diễn tập tấn công | `kali` (`kali`) | SSH: `22`, Netcat Listener: `4444`, Chisel: `8080` |

---

## 2. Giai Đoạn 0: Cấu Hình Mạng và Hạ Tầng Nền Tảng

### 2.1 Cấu hình mạng tĩnh Netplan trên Linux (`/etc/netplan/01-netcfg.yaml`)

Áp dụng cho các máy trạm Ubuntu đảm bảo định tuyến tĩnh và không phụ thuộc DHCP:

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    ens33:
      dhcp4: true
    ens37:
      dhcp4: no
      addresses:
        - 10.0.0.10/24
      routes:
        - to: default
          via: 10.0.0.1
      nameservers:
        addresses: [8.8.8.8, 1.1.1.1]
    ens38:
      dhcp4: no
      addresses:
        - 192.168.50.10/24
```

Lệnh kiểm tra cú pháp và kích hoạt cấu hình mạng:
```bash
sudo netplan try
sudo netplan apply
```

### 2.2 Cấu hình tường lửa Windows và giao thức ICMP

Mặc định Windows Server và Windows 10 chặn gói tin ICMP Echo Request. Kích hoạt phản hồi ping phục vụ kiểm tra thông mạng trong lab bằng PowerShell:

```powershell
# Bật phản hồi Ping ICMPv4 trên toàn bộ Network Profiles (Domain, Private, Public)
New-NetFirewallRule -Name "Allow_ICMPv4_Echo_Lab" -DisplayName "Allow ICMPv4 Echo (SOC Lab)" -Protocol ICMPv4 -IcmpType 8 -Enabled True -Action Allow

# Chuyển Network Profile từ Public sang Private nếu cần kết nối WinRM
Get-NetConnectionProfile | Set-NetConnectionProfile -NetworkCategory Private

# Tắt tạm thời tường lửa nếu cần kiểm thử kịch bản lab sơ cấp (chỉ áp dụng môi trường test)
Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled False
```

### 2.3 Mở rộng ổ đĩa không cần khởi động lại (LVM Disk Expansion)

Khi lưu trữ log làm đầy phân vùng hệ điều hành trên Search Head hoặc Indexer, thực hiện tăng kích thước phân vùng trực tiếp:

```bash
# 1. Quét lại bus SCSI để nhận dung lượng đĩa mới được cấp từ hypervisor
echo 1 | sudo tee /sys/class/block/sda/device/rescan

# 2. Mở rộng Physical Volume và Logical Volume
sudo pvresize /dev/sda3
sudo lvextend -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv

# 3. Mở rộng hệ thống tệp tin ext4 đang gắn kết
sudo resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv
```

---

## 3. Giai Đoạn 1: Cài Đặt Splunk Enterprise và Universal Forwarder

### 3.1 Đường dẫn tải về gói cài đặt chính thức (Splunk 10.4.1)

```bash
# Splunk Enterprise dành cho Linux (Search Head, Indexer, Cluster Manager)
wget -O splunk-10.4.1-xxxxxxxxxxxxxx-linux-amd64.tgz "https://download.splunk.com/products/splunk/releases/10.4.1/linux/splunk-10.4.1-xxxxxxxxxxxxxx-linux-amd64.tgz"

# Splunk Universal Forwarder dành cho Linux (Ubuntu Endpoint / Web Server)
wget -O splunkforwarder-10.4.1-xxxxxxxxxxxxxx-linux-amd64.tgz "https://download.splunk.com/products/universalforwarder/releases/10.4.1/linux/splunkforwarder-10.4.1-xxxxxxxxxxxxxx-linux-amd64.tgz"

# Splunk Universal Forwarder dành cho Windows (Domain Controller / Workstation)
# https://download.splunk.com/products/universalforwarder/releases/10.4.1/windows/splunkforwarder-10.4.1-xxxxxxxxxxxxxx-windows-x64.msi
```

### 3.2 Khởi tạo dịch vụ Splunk Enterprise trên Máy 1, Máy 2, Máy 3

Thực thi bằng tài khoản chuyên biệt theo chuẩn an toàn thông tin:

```bash
# 1. Tạo tài khoản hệ thống splunk và phân quyền
cd ~
sudo useradd -m -s /bin/bash splunk
sudo passwd splunk

# 2. Giải nén vào thư mục người dùng
sudo mv splunk-10.4.1-xxxxxxxxxxxxxx-linux-amd64.tgz /home/splunk/
sudo chown splunk:splunk /home/splunk/splunk-10.4.1-xxxxxxxxxxxxxx-linux-amd64.tgz
sudo su - splunk
tar -xvf splunk-10.4.1-xxxxxxxxxxxxxx-linux-amd64.tgz

# 3. Khởi chạy và chấp thuận bản quyền, tạo admin username/password
./splunk/bin/splunk start --accept-license

# 4. Kích hoạt tự động khởi động cùng hệ điều hành (chạy bằng root)
exit
sudo /home/splunk/splunk/bin/splunk enable boot-start -user splunk
```

### 3.3 Tối ưu tham số giao diện Web Splunk (`web.conf`)

Tệp đặt tại `/home/splunk/splunk/etc/system/local/web.conf` nhằm tránh nghẽn khi tải các ứng dụng nặng (Splunk Enterprise Security, CIM App):

```ini
[settings]
max_upload_size = 2000
splunkdConnectionTimeout = 600
```

Kích hoạt cấu hình:
```bash
/home/splunk/splunk/bin/splunk restart
```

### 3.4 Bật cổng tiếp nhận dữ liệu 9997

Trên Search Head hoặc Indexer, kích hoạt cổng lắng nghe ingestion bằng CLI:
```bash
/home/splunk/splunk/bin/splunk enable listen 9997 -auth User@:'Password@'
```

### 3.5 Cài đặt và cấu hình Universal Forwarder trên Ubuntu Endpoint (Máy 4)

```bash
# 1. Cài đặt dịch vụ Web Apache2
sudo apt update && sudo apt install -y apache2
sudo systemctl enable apache2
sudo systemctl start apache2

# 2. Tạo tài khoản splunkf và đưa vào các nhóm đọc log không cần quyền root
sudo useradd -m -s /bin/bash splunkf
sudo passwd splunkf
sudo usermod -aG adm splunkf
sudo usermod -aG www-data splunkf

# 3. Cài đặt Universal Forwarder vào thư mục home của splunkf
sudo mv splunkforwarder-10.4.1-xxxxxxxxxxxxxx-linux-amd64.tgz /home/splunkf/
sudo chown splunkf:splunkf /home/splunkf/splunkforwarder-10.4.1-xxxxxxxxxxxxxx-linux-amd64.tgz
sudo su - splunkf
tar -xvf splunkforwarder-10.4.1-xxxxxxxxxxxxxx-linux-amd64.tgz
cd ~/splunkforwarder/bin
./splunk start --accept-license
./splunk stop
exit

# 4. Bật boot-start và kết nối về bộ xử lý Splunk
sudo /home/splunkf/splunkforwarder/bin/splunk enable boot-start -user splunkf
sudo su - splunkf
~/splunkforwarder/bin/splunk start
~/splunkforwarder/bin/splunk add forward-server 10.0.0.10:9997 -auth User@:'Password@'
~/splunkforwarder/bin/splunk add monitor "/var/log/apache2/access.log" -sourcetype access_combined -index web_logs -auth User@:'Password@'
~/splunkforwarder/bin/splunk restart
```

Kiểm tra dữ liệu đã vào hệ thống tại giao diện Search Head:
```bash
index=web_logs sourcetype=access_combined
| metadata type=hosts
```

---

## 4. Giai Đoạn 2: Tách Cụm Indexer và Cấu Hình Indexer Cluster

### 4.1 Sinh chuỗi khóa bí mật cụm (Cluster Secret)

Trên Máy 1, tạo chuỗi ngẫu nhiên 32 ký tự:
```bash
openssl rand -hex 16
# Kết quả mẫu: 078a6b5e4974c5ad58f5b3656838023b
```

### 4.2 Cấu hình Máy 1 thành Cluster Manager (Master)

```bash
/home/splunk/splunk/bin/splunk edit cluster-config -mode manager \
  -replication_factor 2 -search_factor 2 \
  -secret '078a6b5e4974c5ad58f5b3656838023b' -cluster_label idxc1 \
  -auth User@:'Password@'

/home/splunk/splunk/bin/splunk restart
```

### 4.3 Cấu hình Máy 2 (`id1`) và Máy 3 (`id2`) thành Indexer Peer

Thực hiện trên Máy 2 (tài khoản `id1`):
```bash
# 1. Gia nhập cụm Indexer
/home/id1/splunk/bin/splunk edit cluster-config -mode peer \
  -manager_uri https://10.0.0.10:8089 \
  -replication_port 9887 \
  -secret '078a6b5e4974c5ad58f5b3656838023b' \
  -auth id1:'Password@'

# 2. Tắt giao diện Web trên Indexer để tối ưu hiệu năng
/home/id1/splunk/bin/splunk disable webserver -auth id1:'Password@'
/home/id1/splunk/bin/splunk restart

# 3. Bật cổng nhận dữ liệu từ Forwarder
/home/id1/splunk/bin/splunk enable listen 9997 -auth id1:'Password@'
```

Thực hiện tương tự trên Máy 3 (tài khoản `id2`):
```bash
/home/id2/splunk/bin/splunk edit cluster-config -mode peer \
  -manager_uri https://10.0.0.10:8089 \
  -replication_port 9887 \
  -secret '078a6b5e4974c5ad58f5b3656838023b' \
  -auth id2:'Password@'

/home/id2/splunk/bin/splunk disable webserver -auth id2:'Password@'
/home/id2/splunk/bin/splunk restart
/home/id2/splunk/bin/splunk enable listen 9997 -auth id2:'Password@'
```

### 4.4 Kiểm tra trạng thái cụm Indexer

Trên Máy 1 (Search Head / Manager), kiểm tra kết nối API và trạng thái:
```bash
curl -k https://10.0.0.10:8089/services/cluster/master/peers
/home/splunk/splunk/bin/splunk show cluster-status -auth User@:'Password@'
```

---

## 5. Giai Đoạn 3: Cấu Hình Chỉ Mục Toàn Cục (`indexes.conf`)

Tệp được đặt tại `/opt/splunk/etc/master-apps/_cluster/local/indexes.conf` trên Cluster Manager để đẩy xuống toàn bộ Indexer Peers qua cơ chế Cluster Bundle:

```ini
[default]
maxDataSize = auto_high_volume
maxHotBuckets = 3
maxWarmDBCount = 300
frozenTimePeriodInSecs = 7776000
enableDataIntegrityControl = true

# Chỉ mục dành riêng cho Windows Security Event Log
[windows_security]
homePath   = $SPLUNK_DB/windows_security/db
coldPath   = $SPLUNK_DB/windows_security/colddb
thawedPath = $SPLUNK_DB/windows_security/thaweddb
maxTotalDataSizeMB = 100000

# Chỉ mục dành riêng cho Windows và Linux Sysmon
[windows_sysmon]
homePath   = $SPLUNK_DB/windows_sysmon/db
coldPath   = $SPLUNK_DB/windows_sysmon/colddb
thawedPath = $SPLUNK_DB/windows_sysmon/thaweddb
maxTotalDataSizeMB = 50000

# Chỉ mục dành cho hệ điều hành Linux và Auditd
[linux_security]
homePath   = $SPLUNK_DB/linux_security/db
coldPath   = $SPLUNK_DB/linux_security/colddb
thawedPath = $SPLUNK_DB/linux_security/thaweddb
maxTotalDataSizeMB = 50000

[linux_logs]
homePath   = $SPLUNK_DB/linux_logs/db
coldPath   = $SPLUNK_DB/linux_logs/colddb
thawedPath = $SPLUNK_DB/linux_logs/thaweddb
maxTotalDataSizeMB = 30000

# Chỉ mục lưu trữ log máy chủ Web (Apache, Nginx, IIS)
[web_logs]
homePath   = $SPLUNK_DB/web_logs/db
coldPath   = $SPLUNK_DB/web_logs/colddb
thawedPath = $SPLUNK_DB/web_logs/thaweddb
maxTotalDataSizeMB = 50000

# Chỉ mục dành cho cảm biến mạng Zeek và Suricata
[network_ids]
homePath   = $SPLUNK_DB/network_ids/db
coldPath   = $SPLUNK_DB/network_ids/colddb
thawedPath = $SPLUNK_DB/network_ids/thaweddb
maxTotalDataSizeMB = 100000

# Chỉ mục phân tích nguy cơ Risk-Based Alerting (RBA)
[risk]
homePath   = $SPLUNK_DB/risk/db
coldPath   = $SPLUNK_DB/risk/colddb
thawedPath = $SPLUNK_DB/risk/thaweddb
maxTotalDataSizeMB = 20000
```

Lệnh áp dụng Bundle từ Cluster Manager xuống các Indexer:
```bash
/home/splunk/splunk/bin/splunk apply cluster-bundle -auth User@:'Password@'
```

---

## 6. Giai Đoạn 4: Cấu Hình Thu Thập Chi Tiết (`inputs.conf`)

### 6.1 `inputs.conf` Hoàn chỉnh trên Domain Controller (Windows Server 2022)

Áp dụng chiến lược Whitelist/Blacklist tại nguồn, trích xuất đầy đủ 8 kỹ thuật tấn công Active Directory nhưng loại bỏ 100% rác hệ thống:

```ini
[WinEventLog]
index = windows_security
renderXml = true
sourcetype = XmlWinEventLog
checkpointInterval = 5
current_only = 0

#############################################################################
# 1. Kênh Security cốt lõi (Lọc sự kiện Active Directory)
#############################################################################
[WinEventLog://Security]
disabled = 0
evt_resolve_ad_obj = 1
# Loại bỏ nhiễu đọc định kỳ đối tượng GPO container
blacklist1 = EventCode="4662" Message="Object Type:(?!\s*groupPolicyContainer)"
blacklist2 = EventCode="566" Message="Object Type:(?!\s*groupPolicyContainer)"
# Danh mục Event ID trọng tâm:
# 4768: Kerberos TGT (AS-REP Roasting, Overpass-the-Hash)
# 4769: Kerberos Service Ticket (Kerberoasting, Silver/Golden Ticket)
# 4624: Đăng nhập thành công (Pass-the-Hash, Lateral Movement)
# 4625: Đăng nhập thất bại (Brute Force, Password Spraying)
# 4776: NTLM Validation (PtH, Relay)
# 4662: Directory Service Access (DCSync quyền sao chép bí mật)
# 4742, 5136, 4928, 4929: Thay đổi đối tượng máy tính và Replicate (DCShadow)
# 4672: Gán đặc quyền quản trị đặc biệt
whitelist1 = EventCode=%(4768|4769|4624|4625|4776|4662|4742|5136|4928|4929|4672)%
checkpointInterval = 5

#############################################################################
# 2. Kênh Giám sát Thực thi và Quản trị Từ xa
#############################################################################
[WinEventLog://Application]
disabled = 0
index = windows_security

[WinEventLog://System]
disabled = 0
index = windows_security

[WinEventLog://Microsoft-Windows-PowerShell/Operational]
disabled = 0
index = windows_security
sourcetype = XmlWinEventLog:PowerShell
batch_size = 50
checkpointInterval = 5

[WinEventLog://Microsoft-Windows-TaskScheduler/Operational]
disabled = 0
index = windows_security
batch_size = 10

[WinEventLog://Microsoft-Windows-WinRM/Operational]
disabled = 0
index = windows_security
batch_size = 10

[WinEventLog://OpenSSH/Operational]
disabled = 0
index = windows_security
batch_size = 10

#############################################################################
# 3. Kênh Giám sát Chuyên Sâu Xác Thực và Chính Sách Bảo Vệ Tài Khoản
#############################################################################
[WinEventLog://Directory Service]
disabled = 0
index = windows_security
batch_size = 10
whitelist1 = EventCode=%(1138|1174|2946|2947)%

[WinEventLog://Microsoft-Windows-Authentication/AuthenticationPolicyFailures-DomainController]
disabled = 0
index = windows_security
batch_size = 10
whitelist1 = EventCode=%(101|105|106|305|306)%

[WinEventLog://Microsoft-Windows-Authentication/ProtectedUser-Client]
disabled = 0
index = windows_security
batch_size = 10
whitelist1 = EventCode=%(104|304)%

[WinEventLog://Microsoft-Windows-Authentication/ProtectedUserFailures-DomainController]
disabled = 0
index = windows_security
batch_size = 10
whitelist1 = EventCode=%(100|104)%

[WinEventLog://Microsoft-Windows-Authentication/ProtectedUserSuccesses-DomainController]
disabled = 0
index = windows_security
batch_size = 10
whitelist1 = EventCode=%(303)%

[WinEventLog://Microsoft-Windows-Kerberos-Key-Distribution-Center/Operational]
disabled = 0
index = windows_security
batch_size = 10
whitelist1 = EventCode=%(302)%

[WinEventLog://Microsoft-Windows-Kerberos/Operational]
disabled = 0
index = windows_security
batch_size = 10

[WinEventLog://Microsoft-Windows-NTLM/Operational]
disabled = 0
index = windows_security
batch_size = 10

[WinEventLog://DNS Server]
disabled = 0
index = windows_security
batch_size = 10

[WinEventLog://Microsoft-Windows-DNSServer/Audit]
disabled = 0
index = windows_security
batch_size = 10

#############################################################################
# 4. Kênh Sysmon và Tường Lửa Bảo Mật
#############################################################################
[WinEventLog://Microsoft-Windows-Sysmon/Operational]
index = windows_sysmon
sourcetype = XmlWinEventLog:Sysmon
disabled = 0
batch_size = 10
renderXml = true
checkpointInterval = 5

[WinEventLog://Microsoft-Windows-Windows Defender/Operational]
disabled = 0
index = windows_security
batch_size = 10

[WinEventLog://Microsoft-Windows-Windows Firewall With Advanced Security/Firewall]
disabled = 0
index = windows_security
batch_size = 10
```

### 6.2 `inputs.conf` Hoàn chỉnh trên Linux Endpoint (Máy 4)

```ini
[default]
ignoreOlderThan = 7d

# Nhật ký truy cập và lỗi của máy chủ Web Apache
[monitor:///var/log/apache2/access.log]
index = web_logs
sourcetype = access_combined
disabled = 0

[monitor:///var/log/apache2/error.log]
index = web_logs
sourcetype = apache_error
disabled = 0

# Nhật ký hệ thống thông thường
[monitor:///var/log/syslog]
index = linux_logs
sourcetype = syslog
disabled = 0

# Nhật ký xác thực đăng nhập người dùng
[monitor:///var/log/auth.log]
index = linux_security
sourcetype = linux_secure
disabled = 0

# Nhật ký kiểm toán nhân hệ điều hành Linux Auditd
[monitor:///var/log/audit/audit.log]
index = linux_security
sourcetype = auditd
disabled = 0

# Cấu hình cân bằng tải và đẩy dữ liệu về cụm Indexer
[target_group:soc_indexer_cluster]
server = 10.0.0.20:9997, 10.0.0.30:9997
```

### 6.3 `inputs.conf` Hoàn chỉnh trên Cảm Biến Mạng (Máy 7)

```ini
[default]
ignoreOlderThan = 3d

# Giám sát 18 luồng bản ghi Zeek Network Security Monitoring
[monitor:///opt/zeek/logs/current/*.log]
disabled = 0
index = network_ids
sourcetype = zeek_json
checkpointInterval = 5
whitelist = (conn|dns|http|ssl|x509|notice|weird|smb_mapping|smb_files|dce_rpc|kerberos|ntlm|rdp|ssh|ftp|dhcp|files|pe)\.log$

# Giám sát cảnh báo xâm nhập Suricata NIDS
[monitor:///var/log/suricata/eve.json]
disabled = 0
index = network_ids
sourcetype = suricata
checkpointInterval = 5
```

---

## 7. Giai Đoạn 5: Cấu Hình Tiền Xử Lý Dữ Liệu (`props.conf` và `transforms.conf`)

Tệp đặt tại `/opt/splunk/etc/master-apps/_cluster/local/props.conf` trên Cluster Manager:

```ini
# Chuẩn hóa log Zeek JSON
[zeek_json]
SHOULD_LINEMERGE = false
LINE_BREAKER = ([\r\n]+)
TRUNCATE = 999999
TIME_PREFIX = "ts":
TIME_FORMAT = %s.%6N
INDEXED_EXTRACTIONS = json
KV_MODE = none

# Chuẩn hóa log Suricata EVE JSON
[suricata]
SHOULD_LINEMERGE = false
LINE_BREAKER = ([\r\n]+)
TIME_PREFIX = "timestamp":"
TIME_FORMAT = %Y-%m-%dT%H:%M:%S.%6N%z
INDEXED_EXTRACTIONS = json
KV_MODE = none

# Chuẩn hóa log Web IIS W3C
[ms:iis:auto]
SHOULD_LINEMERGE = false
LINE_BREAKER = ([\r\n]+)
DELIMS = " "
FIELDS = date, time, s_ip, cs_method, cs_uri_stem, cs_uri_query, s_port, cs_username, c_ip, cs_user_agent, cs_referer, sc_status, sc_substatus, sc_win32_status, time_taken

# Chuẩn hóa log Linux Auditd
[auditd]
SHOULD_LINEMERGE = false
LINE_BREAKER = ([\r\n]+)
TIME_PREFIX = msg=audit\(
TIME_FORMAT = %s
```

---

## 8. Giai Đoạn 6: Bộ Kịch Bản Tự Động Hóa Triển Khai (Automation Scripts)

### 8.1 Kịch bản PowerShell kích hoạt toàn diện Audit Policy (`SetAuditPolicy.ps1`)

```powershell
# Kích hoạt toàn bộ danh mục kiểm toán bảo mật cần thiết
auditpol /set /subcategory:"Logon" /success:enable /failure:enable
auditpol /set /subcategory:"Special Logon" /success:enable /failure:enable
auditpol /set /subcategory:"Process Creation" /success:enable /failure:enable
auditpol /set /subcategory:"Directory Service Access" /success:enable /failure:enable
auditpol /set /subcategory:"Directory Service Changes" /success:enable /failure:enable
auditpol /set /subcategory:"Kerberos Service Ticket Operations" /success:enable /failure:enable
auditpol /set /subcategory:"Kerberos Authentication Service" /success:enable /failure:enable
auditpol /set /subcategory:"Credential Validation" /success:enable /failure:enable

# Kích hoạt ghi nhận dòng lệnh thực thi đầy đủ trong EventID 4688
New-Item -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" -Name "Audit" -Force | Out-Null
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\Audit" -Name "ProcessCreationIncludeCmdLine_Enabled" -Value 1 -Type DWord
Write-Host "[OK] Advanced Audit Policy and CommandLine Auditing enabled successfully."
```

### 8.2 Kịch bản cài đặt Sysmon Modular trên Windows (`Install_Sysmon.ps1`)

```powershell
# Tải tệp cấu hình Sysmon chuẩn hóa từ kho lưu trữ của Olaf Hartong
$SysmonUrl = "https://live.sysinternals.com/Sysmon64.exe"
$ConfigUrl = "https://raw.githubusercontent.com/olafhartong/sysmon-modular/master/sysmonconfig.xml"

Invoke-WebRequest -Uri $SysmonUrl -OutFile "C:\Windows\Temp\Sysmon64.exe"
Invoke-WebRequest -Uri $ConfigUrl -OutFile "C:\Windows\Temp\sysmonconfig.xml"

# Cài đặt dịch vụ Sysmon với cấu hình giám sát tiến trình và mạng
Start-Process -FilePath "C:\Windows\Temp\Sysmon64.exe" -ArgumentList "-accepteula -i C:\Windows\Temp\sysmonconfig.xml" -Wait
Get-Service -Name "Sysmon64" | Select-Object Name, Status, StartType
Write-Host "[OK] Sysmon Modular installed and running."
```

### 8.3 Kịch bản triển khai Auditd SOC Baseline trên Linux (`Install_Auditd.sh`)

```bash
#!/bin/bash
set -e

sudo apt-get update && sudo apt-get install -y auditd audispd-plugins

# Thiết lập bộ quy tắc giám sát nhân Linux
sudo cat << 'EOF' > /etc/audit/rules.d/soc-baseline.rules
-D
-b 8192
-f 1

# Giám sát thay đổi thông tin xác thực
-w /etc/passwd -p wa -k identity_changes
-w /etc/shadow -p wa -k identity_changes
-w /etc/sudoers -p wa -k sudoers_changes
-w /etc/sudoers.d/ -p wa -k sudoers_changes

# Giám sát duy trì quyền truy cập ngầm qua Cron
-w /etc/crontab -p wa -k cron_persistence
-w /etc/cron.d/ -p wa -k cron_persistence
-w /var/spool/cron/crontabs/ -p wa -k cron_persistence

# Giám sát thực thi lệnh root qua lời gọi hệ thống execve
-a always,exit -F arch=b64 -S execve -F euid=0 -k root_execution
-a always,exit -F arch=b32 -S execve -F euid=0 -k root_execution

# Khóa cấu hình bất biến không thể bị tiến trình tấn công tắt ngang
-e 2
EOF

# Nạp quy tắc vào nhân Linux
sudo augenrules --load
sudo systemctl restart auditd
echo "[OK] Linux Auditd SOC Baseline configured and rules locked successfully."
```
