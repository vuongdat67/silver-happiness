---
title: CLI MkDocs
description: Hướng dẫn CLI MkDocs
subtitle: CLI MkDocs
tags:
  - mkdocs
search:
  boost: 1.5
template: post.html
date: 2025-04-16
authors:
  - vuongdat67
image:
  src: assets/images/mkdocs-material.png
  show_in_post: true
  show_in_list: true
---


Hướng dẫn cài đặt và sử dụng **MkDocs CLI** kèm workflow cơ bản

<!--more-->

## Tổng quan :simple-materialformkdocs:

MkDocs CLI có cú pháp gốc: `mkdocs [OPTIONS] COMMAND [ARGS]...`


**Global options (dùng được ở mọi lệnh):**

| Option | Mô tả |
|---|---|
| `-V`, `--version` | Hiện version rồi thoát |
| `-q`, `--quiet` | Tắt warnings |
| `-v`, `--verbose` | Bật verbose output |
| `--color` / `--no-color` | Ép bật/tắt màu terminal (mặc định: auto-detect) |
| `--help` | Hiện help |

---

## 5 subcommand chính

### 1. `mkdocs new`

Tạo project mới.

```bash
mkdocs new [OPTIONS] PROJECT_DIRECTORY
```

Tạo ra cấu trúc thư mục ban đầu: `mkdocs.yml` + `docs/index.md`. Không có option đặc biệt ngoài `-q/-v/--help`.

---

### 2. `mkdocs serve`

Chạy dev server với live reload.

```bash
mkdocs serve [OPTIONS]
```

| Option | Mô tả |
|---|---|
| `-a`, `--dev-addr` | Địa chỉ IP:port để serve (mặc định: `localhost:8000`) |
| `--no-livereload` | Tắt live reload |
| `--dirty` | Chỉ rebuild các file đã thay đổi (nhanh hơn) |
| `-c`, `--clean` | Build thuần như `mkdocs build` rồi serve, không có hiệu ứng dev |
| `--watch-theme` | Theo dõi cả file theme để live reload |
| `-w`, `--watch` | Thêm thư mục/file cụ thể để watch (dùng nhiều lần được) |
| `-f`, `--config-file` | Chỉ định file config thay vì `mkdocs.yml` |
| `-s`, `--strict` | Abort nếu có bất kỳ warning nào |
| `-t`, `--theme` | Override theme (`mkdocs` hoặc `readthedocs`) |
| `--use-directory-urls` / `--no-directory-urls` | Dùng URL dạng thư mục hay không |

---

### 3. `mkdocs build`

Build documentation ra file tĩnh.

```bash
mkdocs build [OPTIONS]
```

| Option | Mô tả |
|---|---|
| `-c`, `--clean` / `--dirty` | Xóa file cũ trước khi build (mặc định: `--clean`) |
| `-f`, `--config-file` | Chỉ định file config |
| `-s`, `--strict` | Abort khi có warning |
| `-t`, `--theme` | Override theme |
| `--use-directory-urls` / `--no-directory-urls` | Dùng URL dạng thư mục |
| `-d`, `--site-dir` | Thư mục output (thay vì `site/` mặc định) |

---

### 4. `mkdocs gh-deploy`

Deploy lên GitHub Pages.

```bash
mkdocs gh-deploy [OPTIONS]
```

Kế thừa toàn bộ option của `build`, thêm:

| Option | Mô tả |
|---|---|
| `-m`, `--message` | Commit message (có thể dùng `{sha}` và `{version}` làm placeholder) |
| `-b`, `--remote-branch` | Branch deploy đến (override config) |
| `-r`, `--remote-name` | Remote name (override config) |
| `--force` | Force push |
| `--no-history` | Xóa toàn bộ Git history, chỉ giữ 1 commit mới |
| `--ignore-version` | Bỏ qua cảnh báo khi deploy bằng MkDocs version cũ hơn |
| `--shell` | Dùng shell khi gọi Git |

---

### 5. `mkdocs get-deps`

Liệt kê các PyPI package cần thiết dựa vào plugins khai báo trong `mkdocs.yml`.

```bash
mkdocs get-deps [OPTIONS]
```

| Option | Mô tả |
|---|---|
| `-f`, `--config-file` | Chỉ định file config |
| `-p`, `--projects-file` | URL hoặc path của registry file (mặc định: catalog của mkdocs trên GitHub) |

Lệnh này hữu ích khi cần tự động hóa cài đặt dependencies trong CI/CD — ví dụ `pip install $(mkdocs get-deps)`.

---

## Ghi chú thực tế

**Workflow thông thường:**

```bash
mkdocs new my-docs        # khởi tạo
cd my-docs
mkdocs serve              # phát triển với live reload
mkdocs build              # build production
mkdocs gh-deploy          # deploy GitHub Pages
```

**Một số combo hay dùng:**

```bash
# Serve nhanh khi doc lớn (chỉ rebuild file thay đổi)
mkdocs serve --dirty

# Build strict để bắt broken links
mkdocs build --strict

# Deploy với custom branch và force push
mkdocs gh-deploy -b gh-pages --force

# Dùng config khác (ví dụ multi-version)
mkdocs build -f mkdocs-en.yml -d site/en
```