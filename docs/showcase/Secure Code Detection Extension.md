# secure_detect_extension – Secure Code Detection Extension

<video autoplay loop muted playsinline style="display:block; margin:auto; width:auto;">
  <source src="../../assets/showcase/extension securedetect.mp4" type="video/mp4">
</video>

* Repository: [https://github.com/vuongdat67/secure_detect_extension](https://github.com/vuongdat67/secure_detect_extension)

---

## Overview

secure_detect_extension là một extension hỗ trợ **phát hiện lỗ hổng bảo mật trong source code** trực tiếp trong IDE.

Project hoạt động như một dạng **lightweight static analysis tool**, giúp developer:

* phát hiện lỗi bảo mật sớm
* cải thiện chất lượng code

Các hệ thống hiện đại như code scanning (ví dụ CodeQL) cũng hoạt động theo hướng này — phân tích code để tìm vulnerability trước khi deploy ([GitHub Docs][1])

---

## Motivation

Trong phát triển phần mềm:

* nhiều lỗ hổng xuất phát từ:

  * insecure coding
  * thiếu validation
* nếu không phát hiện sớm:

  * chi phí fix rất cao

Project này nhằm:

* tích hợp security vào quá trình coding
* đưa security thành một phần của workflow dev

---

## Features

### 🔍 Static Code Analysis

* Phân tích source code để tìm:

  * pattern nguy hiểm
  * lỗi bảo mật phổ biến

---

### ⚠️ Vulnerability Detection

* Highlight đoạn code có vấn đề
* Hỗ trợ developer fix sớm

---

### 🔌 IDE Extension

* Tích hợp trực tiếp vào editor
* Real-time feedback khi code

---

## Technical Highlights

### 1. Secure Coding Integration

* Security ngay trong IDE
* Không cần tool riêng

---

### 2. Developer-first Design

* Feedback trực tiếp khi viết code
* Giảm thời gian debug sau này

---

### 3. Static Analysis Approach

* Không cần chạy code
* Phát hiện lỗi sớm trong SDLC

👉 Đây là hướng của DevSecOps hiện đại

---

## Challenges

* Detect false positive / false negative
* Xây dựng rule detection hiệu quả
* Performance khi scan real-time

---

## Future Improvements

* Tích hợp rule engine (CWE-based)
* ML-based detection
* Support nhiều ngôn ngữ
* Integration CI/CD pipeline

---

## Conclusion

secure_detect_extension thể hiện:

* tư duy **Secure Coding / DevSecOps**
* khả năng build tooling cho developer
* hiểu cách integrate security vào SDLC

---

## 📌 One-line showcase

> Built a static analysis extension to detect security vulnerabilities in source code, enabling real-time secure coding practices within the development workflow.

