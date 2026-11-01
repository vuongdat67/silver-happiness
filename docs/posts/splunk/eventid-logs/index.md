---
title: "Sổ Tay Tra Cứu EventID Windows và Linux"
last_modified: 2026-08-28
status: completed
author: "SOC Engineering và Detection Team"
tags:
  - eventid
  - windows-log
  - linux-log
  - auditd
  - soc-reference
aliases:
  - "EventID Master Cheat Sheet"
cssclasses:
  - dashboard
  - wide-page
---

# Sổ Tay Tra Cứu Nhanh EventID Windows và Nguồn Log Linux Cho SOC

Tài liệu được thiết kế dạng thẻ tra cứu cô đọng (Quick-Reference Cards) phục vụ chuyên viên SOC cấp độ 1 và cấp độ 2 rà soát nhanh sự kiện trong ca trực, hỗ trợ phân loại cảnh báo mà không bị ngợp bởi các bảng dữ liệu quá dài.

---

## 1. Kênh Nhật Ký Windows Security (Nhật Ký Xác Thực và Đặc Quyền)

### 4624: Đăng Nhập Thành Công (Successful Logon)
* **Ý nghĩa:** Phiên đăng nhập được thiết lập thành công trên máy chủ hoặc máy trạm.
* **Dấu hiệu đáng ngờ:** Đăng nhập ngoài giờ hành chính; đăng nhập từ địa chỉ IP bất thường; tài khoản người dùng thường đăng nhập vào tài nguyên nhạy cảm.
* **Trường dữ liệu cần soi:** `TargetUserName` (ai đăng nhập), `IpAddress` (từ đâu), `LogonType` (phương thức đăng nhập), `TargetLogonId` (khóa liên kết phiên).
* **Mã LogonType cốt lõi:**
  * **Type 2 (Interactive):** Người dùng ngồi trực tiếp tại máy hoặc gõ bàn phím vật lý.
  * **Type 3 (Network):** Truy cập qua mạng chia sẻ tệp tin SMB, IPC$, RPC (đặc trưng của di chuyển ngang).
  * **Type 9 (NewCredentials):** Sử dụng lệnh `runas /netonly` (đặc trưng của Pass-the-Hash / Mimikatz).
  * **Type 10 (RemoteInteractive):** Đăng nhập qua giao thức Remote Desktop (RDP).

### 4625: Đăng Nhập Thất Bại (Failed Logon)
* **Ý nghĩa:** Phiên đăng nhập bị từ chối do sai mật khẩu, tài khoản bị khóa hoặc không tồn tại.
* **Dấu hiệu đáng ngờ:** Xuất hiện chuỗi liên tiếp nhiều bản ghi trong thời gian ngắn (tấn công Brute Force hoặc Password Spraying).
* **Trường dữ liệu cần soi:** `TargetUserName`, `IpAddress`, `SubStatus` (nguyên nhân thất bại).
  * `0xC000006A`: Mật khẩu không chính xác (Bad Password).
  * `0xC0000064`: Tài khoản không tồn tại trong hệ thống (User does not exist).
  * `0xC0000234`: Tài khoản đã bị khóa do vượt quá số lần thử (Account Locked Out).

### 4672: Gán Đặc Quyền Quản Trị Đặc Biệt (Special Privileges Assigned)
* **Ý nghĩa:** Người dùng vừa đăng nhập mang các quyền quản trị cao cấp của hệ thống.
* **Dấu hiệu đáng ngờ:** Tài khoản nhân viên thông thường nhưng được cấp quyền `SeDebugPrivilege` (đặc quyền đọc bộ nhớ để dump mật khẩu) hoặc `SeTcbPrivilege`.
* **Trường dữ liệu cần soi:** `SubjectUserName`, `PrivilegeList`.

### 4688: Khởi Tạo Tiến Trình (Process Creation)
* **Ý nghĩa:** Một chương trình hoặc tệp thực thi vừa được khởi chạy.
* **Dấu hiệu đáng ngờ:** Tiến trình cha bất thường (ví dụ: `w3wp.exe` hoặc `sqlservr.exe` sinh ra `cmd.exe`, `powershell.exe`); dòng lệnh thực thi bị mã hóa Base64 (`-enc`).
* **Trường dữ liệu cần soi:** `NewProcessName` (chương trình chạy), `ParentProcessName` (tiến trình cha), `CommandLine` (tham số dòng lệnh), `SubjectUserName`.

---

## 2. Kênh Nhật Ký Active Directory Domain Services

### 4768: Yêu Cầu Cấp Vé Gốc Kerberos TGT (AS-REQ)
* **Ý nghĩa:** Máy trạm gửi thông tin xác thực lên Domain Controller để xin vé TGT.
* **Dấu hiệu đáng ngờ:** Tấn công **AS-REP Roasting** nhắm vào tài khoản có thuộc tính `DONT_REQUIRE_PREAUTH` (PreAuthType = `0` hoặc không có xác thực trước); loại mã hóa là RC4 (`0x17`).
* **Trường dữ liệu cần soi:** `TargetUserName`, `TicketEncryptionType`, `PreAuthType`, `IpAddress`.

### 4769: Yêu Cầu Cấp Vé Dịch Vụ Kerberos TGS (TGS-REQ)
* **Ý nghĩa:** Người dùng xin vé dịch vụ để truy cập SQL, SPN, CIFS...
* **Dấu hiệu đáng ngờ:** Tấn công **Kerberoasting** khi người dùng xin vé dịch vụ với thuật toán mã hóa yếu RC4 (`TicketEncryptionType = 0x17`) nhằm trích xuất băm mật khẩu về bẻ khóa ngoại tuyến; yêu cầu hàng loạt SPN trong vài giây.
* **Trường dữ liệu cần soi:** `ServiceName` (tên SPN), `TargetUserName`, `TicketEncryptionType`, `IpAddress`.

### 4662: Thao Tác Truy Cập Đối Tượng Directory Service
* **Ý nghĩa:** Thao tác đọc hoặc ghi cấu trúc cây thư mục Active Directory.
* **Dấu hiệu đáng ngờ:** Tấn công **DCSync** mượn quyền sao chép dữ liệu mật của Domain Controller.
* **Dấu hiệu định danh:** Xuất hiện các chuỗi GUID sao chép đặc biệt trong thuộc tính Properties:
  * `1131f6aa-9c07-11d1-f79f-00c04fc2dcd2` (DS-Replication-Get-Changes)
  * `1131f6ad-9c07-11d1-f79f-00c04fc2dcd2` (DS-Replication-Get-Changes-All)
* **Trường dữ liệu cần soi:** `SubjectUserName`, `ObjectName`, `AccessMask`.

---

## 3. Kênh Nhật Ký Quản Trị Hệ Thống Windows System

### 7045: Cài Đặt Dịch Vụ Mới (New Service Installed)
* **Ý nghĩa:** Một dịch vụ Windows mới vừa được đăng ký vào Registry hệ thống.
* **Dấu hiệu đáng ngờ:** Tên dịch vụ ngẫu nhiên; đường dẫn `ImagePath` trỏ vào thư mục tạm (`C:\Users\...\AppData\Local\Temp`, `C:\Windows\Temp`) hoặc chứa lệnh thực thi `cmd.exe /c` / `powershell -enc`; sự xuất hiện của dịch vụ điều khiển từ xa `PSEXESVC`.
* **Trường dữ liệu cần soi:** `ServiceName`, `ImagePath`, `ServiceType`, `StartType`.

### 104 và 1102: Xóa Nhật Ký Kiểm Toán (Audit Log Cleared)
* **Ý nghĩa:**
  * EventID 104 (trong log System): Nhật ký sự kiện bị xóa.
  * EventID 1102 (trong log Security): Nhật ký bảo mật bị chủ động làm trống.
* **Dấu hiệu đáng ngờ:** Hành vi che giấu dấu vết của tin tặc sau khi hoàn thành chuỗi khai thác hoặc cài cắm backdoor.
* **Trường dữ liệu cần soi:** `SubjectUserName`, `SubjectDomainName`.

---

## 4. Kênh Nhật Ký Thực Thi PowerShell và Antivirus

### 4104: Ghi Nhận Khối Lệnh PowerShell (Script Block Logging)
* **Ý nghĩa:** Ghi nhận toàn bộ nội dung mã script PowerShell sau khi hệ điều hành đã giải mã (de-obfuscate).
* **Dấu hiệu đáng ngờ:** Xuất hiện các từ khóa độc hại đặc trưng:
  * `Invoke-Mimikatz`, `DumpCreds`, `Sekurlsa`
  * `DownloadString`, `DownloadFile`, `Net.WebClient`
  * `Invoke-Expression`, `IEX`, `[Convert]::FromBase64String`
* **Trường dữ liệu cần soi:** `ScriptBlockText`, `Path`, `UserId`.

### Defender 1116, 1117, 5001: Trạng Thái Bảo Vệ Máy Trạm
* **1116:** Phát hiện phần mềm độc hại hoặc tệp tin nghi vấn.
* **1117:** Hành động xử lý của Antivirus (cách ly, xóa bỏ, chặn truy cập).
* **5001:** Tính năng bảo vệ thời gian thực (Real-time Protection) bị tắt. Đây là dấu hiệu tin tặc vừa vô hiệu hóa phần mềm bảo vệ qua lệnh `Set-MpPreference -DisableRealtimeMonitoring $true`.

---

## 5. Nguồn Nhật Ký Hệ Điều Hành Linux

### 1. Nhật ký xác thực: `/var/log/auth.log` (hoặc `/var/log/secure`)
* **SSH Failed Password:**
  * Cú pháp log: `Failed password for invalid user <user> from <ip> port <port> ssh2`
  * Phân tích SOC: Quét mật khẩu hàng loạt qua cổng 22.
* **SSH Accepted Password / Publickey:**
  * Cú pháp log: `Accepted password for <user> from <ip> port <port> ssh2`
  * Phân tích SOC: Cần kiểm tra xem IP nguồn có phải dải VPN hợp lệ của quản trị viên hay không.
* **Thực thi lệnh quyền Root qua Sudo:**
  * Cú pháp log: `sudo: <user> : TTY=pts/0 ; PWD=/home/<user> ; USER=root ; COMMAND=<lenh>`
  * Phân tích SOC: Phát hiện leo quyền hoặc lạm dụng quyền sudo để chạy `find`, `vim`, `bash`.

### 2. Nhật ký kiểm toán nhân: `/var/log/audit/audit.log`
* **Syscall EXECVE (Thực thi tiến trình):**
  * `type=SYSCALL ... syscall=59 success=yes exe="/bin/bash"`
  * Phân tích SOC: Giám sát toàn bộ lệnh được gọi trong hệ thống, đặc biệt khi `euid=0` (quyền root) hoặc `auid` khác 0.
* **Thay đổi tệp tin xác thực hệ thống:**
  * Khóa nhận diện: `-k identity_changes` hoặc `-k sudoers_changes`.
  * Phân tích SOC: Phát hiện tạo người dùng mới, sửa đổi quyền `/etc/sudoers` hoặc can thiệp tệp `/etc/shadow`.

### 3. Nhật ký đăng nhập thất bại nhị phân: `/var/log/btmp`
* Xem bằng lệnh: `sudo lastb -n 20`
* Giúp trích xuất nhanh danh sách các IP Internet đang liên tục thăm dò tài khoản root trên máy chủ Linux.
