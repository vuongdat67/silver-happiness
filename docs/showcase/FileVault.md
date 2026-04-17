# FileVault – Secure File Encryption Tool

<video autoplay loop muted playsinline style="display:block; margin:auto; width:auto;">
  <source src="../../assets/showcase/FileVault.mp4" type="video/mp4">
</video>

* Repository: [https://github.com/vuongdat67/NT140.Q11.ANTT-Group11](https://github.com/vuongdat67/NT140.Q11.ANTT-Group11)
* Releases: [https://github.com/vuongdat67/NT140.Q11.ANTT-Group11/releases](https://github.com/vuongdat67/NT140.Q11.ANTT-Group11/releases)

---

## Overview

FileVault là một ứng dụng **mã hóa file đa nền tảng**, được phát triển trong quá trình học môn An toàn thông tin.
Mục tiêu ban đầu khá đơn giản: tạo một tool có thể **bảo vệ dữ liệu cá nhân** khỏi truy cập trái phép.

Nhưng trong quá trình làm, project dần được mở rộng thành một sản phẩm hoàn chỉnh với:

* build đa nền tảng
* đóng gói chuẩn distribution
* có pipeline release rõ ràng

Điều này biến nó từ một bài tập thành một **security product mini**.

---

## Motivation

Khi làm việc với dữ liệu nhạy cảm, một vấn đề thường gặp là:

> File quan trọng bị lưu trữ dưới dạng plain-text hoặc bảo vệ không đủ mạnh.

Đặc biệt với sinh viên hoặc dev cá nhân:

* không có hệ thống quản lý secret chuyên nghiệp
* dễ để lộ file qua USB, cloud, hoặc máy tính bị compromise

FileVault được xây dựng để giải quyết vấn đề này theo hướng:

* đơn giản (dễ dùng)
* độc lập (offline)
* portable (chạy được nhiều OS)

---

## Features

* 🔐 Mã hóa và giải mã file
* 🛡️ Bảo vệ dữ liệu khỏi truy cập trái phép
* 📦 Đóng gói đa nền tảng:

  * Windows (`.exe`)
  * Linux (`.deb`, `.rpm`, `.AppImage`)
  * macOS (`.dmg`, `.app`)
* 🔌 Tích hợp dưới dạng VSCode extension (`.vsix`)
* 🚀 Release version rõ ràng, có artifact sẵn để sử dụng

---

## Technical Notes

Trong quá trình phát triển, project tập trung vào các khía cạnh:

### 1. Security-oriented design

* Tách logic mã hóa và xử lý file
* Hạn chế expose dữ liệu nhạy cảm trong runtime

### 2. Cross-platform packaging

* Build cho nhiều hệ điều hành khác nhau
* Đảm bảo tính portable của ứng dụng

### 3. CI/CD & Release

* Tự động hóa build và publish artifact
* Versioning theo từng release

---

## Challenges

Một số vấn đề gặp phải trong quá trình phát triển:

* Đồng bộ build giữa các OS
* Đóng gói binary phù hợp từng nền tảng
* Đảm bảo trải nghiệm người dùng đơn giản nhưng vẫn giữ được tính bảo mật

---

## Future Improvements

Nếu tiếp tục phát triển theo hướng production-level:

* Bổ sung **thuật toán mã hóa rõ ràng** (AES-256, hybrid crypto, v.v.)
* Thêm **key management** (password-based KDF, key rotation)
* Xây dựng **threat model** cụ thể
* Audit security (static + dynamic analysis)
* Logging & monitoring (phục vụ forensic)

---

## Conclusion

FileVault không chỉ là một project học tập, mà là bước đầu để tiếp cận:

* secure software development
* system packaging & distribution
* tư duy xây dựng sản phẩm bảo mật thực tế


