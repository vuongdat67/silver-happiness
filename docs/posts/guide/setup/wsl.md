---
template: post.html
title: WSL 
date: 2025-02-25
authors:
  - vuongdat67
tags:
  - OS
  - Setup
image:
  src: assets/images/wsl.png
  show_in_post: true
  show_in_list: true
---

# Hướng dẫn cài đặt WSL2 (Windows Subsystem for Linux)

<!--more-->

## Yêu cầu hệ thống

- Windows 10 version 2004+ (Build 19041+) hoặc Windows 11
- Hỗ trợ virtualization (Intel VT-x/AMD-V)
- RAM tối thiểu 4GB (khuyến nghị 8GB+)

## Bước 1: Kích hoạt Windows Features

Mở **PowerShell** với quyền **Administrator** và chạy lần lượt 2 lệnh sau:

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

!!! warning "Lưu ý quan trọng"
    **KHÔNG restart** ngay sau 2 lệnh trên. Thực hiện xong 2 lệnh rồi mới restart.

## Bước 2: Cấu hình BIOS/UEFI

!!! danger "Vấn đề thường gặp - BSOD 0x13A"
    Nếu restart gặp Blue Screen với mã lỗi **0x13A (KERNEL_MODE_HEAP_CORRUPTION)**, nguyên nhân thường là:
    
    - **Secure Boot chưa được bật**
    - Virtualization chưa enable đúng cách
    - Conflict với VMware/VirtualBox phiên bản cũ

**Các bước khắc phục:**

1. **Restart** và vào **BIOS/UEFI** (thường nhấn F2, F12, Delete khi khởi động)

2. Tìm và **enable** các settings sau:
   ```
   ✅ Intel VT-x (hoặc AMD-V)
   ✅ Intel VT-d (hoặc AMD IOMMU) 
   ✅ Secure Boot
   ✅ Hyper-Threading (nếu có)
   ```

3. **Save & Exit** BIOS

4. Restart Windows bình thường

## Bước 3: Cài đặt WSL2

Mở **PowerShell** với quyền **Administrator**:

```powershell
# Set WSL2 làm version mặc định
wsl --set-default-version 2
```

```powershell
# Xem danh sách distributions có sẵn
wsl --list --online
# Hoặc dùng lệnh ngắn gọn: wsl -l -o
```

```powershell
# Cài đặt Ubuntu (khuyến nghị)
wsl --install -d Ubuntu-24.04
```

!!! error "Lỗi HCS_E_CONNECTION_TIMEOUT (0x80370109)"
    Nếu gặp lỗi này khi cài đặt:
    
    **Nguyên nhân:** VMware/VirtualBox đang chạy conflict với Hyper-V
    
    **Khắc phục:**
    ```powershell
    # Tắt VMware services tạm thời
    net stop "VMware Authorization Service"
    net stop "VMware USB Arbitration Service"
    taskkill /f /im vmware-tray.exe
    
    # Restart WSL và thử lại
    wsl --shutdown
    wsl --install -d Ubuntu-24.04
    ```

## Bước 4: Kiểm tra cài đặt

```powershell
# Xem danh sách distributions đã cài
wsl --list --verbose
# Hoặc: wsl -l -v
```

Kết quả mong muốn:
```
  NAME            STATE           VERSION
* Ubuntu-24.04    Running         2
```

## Bước 5: Cập nhật WSL

```powershell
# Update WSL kernel
wsl --update
```

Làm theo hướng dẫn nếu có yêu cầu restart.

## Bước 6: Thiết lập Ubuntu lần đầu

1. Tìm **Ubuntu** trong Start Menu và mở
2. Chờ quá trình initialization hoàn tất
3. Tạo username và password:

!!! tip "Gợi ý"
    - Username: `admin` (dễ nhớ)
    - Password: chọn mật khẩu đơn giản để tránh quên
    - **Lưu ý:** Khi gõ password sẽ không hiển thị ký tự nào trên màn hình (bình thường)

## Bước 7: Cài đặt công cụ phát triển

Trong terminal Ubuntu, chạy:

```bash
# Update package list
sudo apt update -y

# Cài đặt compiler và build tools
sudo apt install gcc binutils build-essential -y
```

## Cấu hình VSCode với WSL

### Cài đặt Extension

Trong VSCode, cài đặt extension **WSL** của Microsoft.

### Cấu hình Terminal

**Cách 1: Qua Settings UI**
- `Ctrl + ,` → tìm "terminal"
- Chọn "Terminal › Integrated › Default Profile: Windows"
- Chọn **Ubuntu (WSL)**

**Cách 2: Edit settings.json**
- `Ctrl + Shift + P` → "Preferences: Open User Settings (JSON)"
- Thêm cấu hình:

```json
{
    "terminal.integrated.defaultProfile.windows": "Ubuntu (WSL)",
    "terminal.integrated.profiles.windows": {
        "Ubuntu (WSL)": {
            "path": "C:\\Windows\\System32\\wsl.exe",
            "args": ["-d", "Ubuntu-24.04"],
            "icon": "terminal-ubuntu"
        }
    },
    "terminal.integrated.fontSize": 14,
    "terminal.integrated.fontFamily": "Consolas, 'Courier New', monospace"
}
```

## Các lệnh WSL hữu ích

### Quản lý Distributions

```powershell
# Xem danh sách distros
wsl -l -v

# Xem distros có thể cài
wsl -l -o

# Xóa distro
wsl --unregister <DistroName>

# Set distro mặc định
wsl --set-default <DistroName>
```

### Quản lý phiên bản

```powershell
# Convert WSL1 sang WSL2
wsl --set-version <DistroName> 2

# Set version mặc định cho distro mới
wsl --set-default-version 2

# Check trạng thái WSL
wsl --status
```

### Khởi động/Tắt

```powershell
# Tắt tất cả WSL instances
wsl --shutdown

# Tắt distro cụ thể
wsl --terminate <DistroName>

# Khởi động distro cụ thể
wsl -d <DistroName>
```

### Import/Export

```powershell
# Backup distro
wsl --export Ubuntu-24.04 ubuntu-backup.tar

# Restore từ backup
wsl --import Ubuntu-New C:\WSL\Ubuntu-New ubuntu-backup.tar
```

## Lệnh Linux cơ bản

### Navigation

```bash
# Hiển thị đường dẫn hiện tại
pwd

# List files/folders
ls -la

# Chuyển thư mục
cd /home/username    # Đường dẫn tuyệt đối
cd ~                 # Về home directory
cd ..                # Lên thư mục cha
cd -                 # Quay lại thư mục trước

# Tạo/xóa thư mục
mkdir folder_name
rmdir folder_name    # Xóa thư mục rỗng
rm -rf folder_name   # Xóa thư mục và nội dung
```

### File Operations

```bash
# Copy/Move
cp file1 file2           # Copy file
cp -r folder1/ folder2/  # Copy thư mục
mv old_name new_name     # Đổi tên/di chuyển

# Xem nội dung file
cat filename        # Hiển thị toàn bộ
less filename       # Xem từng trang
head filename       # 10 dòng đầu
tail filename       # 10 dòng cuối
tail -f filename    # Theo dõi file realtime
```

### System Information

```bash
# Thông tin hệ thống
uname -a            # Kernel info
lsb_release -a      # Ubuntu version
df -h               # Disk usage
free -h             # Memory usage
top                 # Running processes
htop                # Better process viewer
```

### Package Management

```bash
# Cập nhật danh sách packages
sudo apt update

# Upgrade tất cả packages
sudo apt upgrade

# Cài đặt package
sudo apt install package_name

# Gỡ cài đặt
sudo apt remove package_name
sudo apt purge package_name    # Xóa cả config

# Tìm kiếm package
apt search keyword
```

## Troubleshooting

### VMware Compatibility

!!! info "VMware Workstation Pro 17+"
    Từ phiên bản 17 trở lên, VMware hỗ trợ chạy cùng WSL2:
    
    - **Edit → Preferences → Processor**
    - Tích **"Enable Hyper-V support"** (nếu có)
    - Nếu không có option này, update VMware lên latest version

### Performance Tips

```bash
# Giới hạn RAM cho WSL (tạo file .wslconfig trong Windows home)
echo '[wsl2]
memory=4GB
processors=2
swap=2GB' > /mnt/c/Users/$USER/.wslconfig

# Restart WSL để áp dụng
wsl --shutdown
```

### File System Access

```bash
# Windows drives được mount tại /mnt/
cd /mnt/c/Users/     # C:\Users\
cd /mnt/d/           # D:\

# Linux home directory
cd ~                 # /home/username/

# Access Linux files từ Windows
\\wsl$\Ubuntu-24.04\home\username\
```

!!! success "Hoàn thành!"
    Bây giờ bạn đã có môi trường WSL2 hoàn chỉnh để phát triển ứng dụng!

## Setup task.json AT&T 32 bit

``` json title="task.json At&t 32 bits" linenums="1" hl_lines="0"
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "shell",
      "label": "as: build active file",
      "command": "as",
      "args": [
        "-o",
        "${fileDirname}/${fileBasenameNoExtension}.o",
        "${file}"
      ],
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "problemMatcher": [],
      "group": "build"
    },
    {
      "type": "shell",
      "label": "ld: link active file",
      "command": "ld",
      "args": [
        "-o",
        "${fileDirname}/${fileBasenameNoExtension}",
        "${fileDirname}/${fileBasenameNoExtension}.o"
      ],
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "problemMatcher": [],
      "group": "build",
      "dependsOn": ["as: build active file"]
    },
    {
      "type": "shell",
      "label": "Run assembled program",
      "command": "${fileDirname}/${fileBasenameNoExtension}",
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "group": {
        "kind": "test",
        "isDefault": true
      },
      "dependsOn": ["ld: link active file"]
    },
    {
      "type": "shell",
      "label": "Build and Run",
      "dependsOn": ["as: build active file", "ld: link active file", "Run assembled program"],
      "dependsOrder": "sequence",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": []
    }
  ]
}

```

``` json title="task.json Intel 32 bits" linenums="1" hl_lines="0"
  {
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Build & Run NASM (elf32)",
            "type": "shell",
            "command": "bash",
            "args": [
                "-c",
                "nasm -f elf32 '${file}' -o '${fileDirname}/${fileBasenameNoExtension}.o' && ld -m elf_i386 '${fileDirname}/${fileBasenameNoExtension}.o' -o '${fileDirname}/${fileBasenameNoExtension}' && '${fileDirname}/${fileBasenameNoExtension}'"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": []
        }
    ]
}

```

``` json title="task.json khác" linenums="1" hl_lines="0"
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Build and Run NASM (elf32)",
            "type": "shell",
            "command": "nasm",
            "args": [
                "-f", "elf32",
                "${file}",
                "-o", "${fileDirname}/${fileBasenameNoExtension}.o"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": []
        },
        {
            "label": "Link (ld)",
            "type": "shell",
            "command": "ld",
            "args": [
                "-m", "elf_i386",
                "${fileDirname}/${fileBasenameNoExtension}.o",
                "-o", "${fileDirname}/${fileBasenameNoExtension}"
            ],
            "dependsOn": "Build and Run NASM (elf32)",
            "problemMatcher": []
        },
        {
            "label": "Run program",
            "type": "shell",
            "command": "${fileDirname}/${fileBasenameNoExtension}",
            "dependsOn": "Link (ld)",
            "problemMatcher": []
        }
    ]
}
```