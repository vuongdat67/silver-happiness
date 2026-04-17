## Quy trình Git Flow hoàn chỉnh từ A-Z

### BƯỚC 1: Khởi tạo repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### BƯỚC 2: Tạo nhánh develop (nhánh phát triển chính)
```bash
git branch develop
git checkout develop
git push -u origin develop
```

### BƯỚC 3: Phát triển tính năng mới

**3.1. Tạo nhánh feature từ develop:**
```bash
git checkout develop
git pull origin develop          # Cập nhật develop mới nhất
git checkout -b feature/dang-nhap
```

**3.2. Code và commit:**
```bash
# Viết code...
git add .
git commit -m "feat: thêm form đăng nhập"
git push origin feature/dang-nhap
```

**3.3. Tạo Pull Request:**

- Vào GitHub/GitLab → Create Pull Request

- Từ `feature/dang-nhap` → `develop`

- Review code → Merge

**3.4. Sau khi merge, dọn dẹp:**
```bash
git checkout develop
git pull origin develop
git branch -d feature/dang-nhap        # Xóa nhánh local
git push origin --delete feature/dang-nhap  # Xóa nhánh remote
```

### BƯỚC 4: Chuẩn bị phát hành (Release)

**4.1. Tạo nhánh release:**
```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0
```

**4.2. Chỉnh sửa cuối cùng, cập nhật version:**
```bash
git add .
git commit -m "chore: bump version to 1.0.0"
git push origin release/v1.0.0
```

**4.3. Merge vào main và develop:**
```bash
# Merge vào main
git checkout main
git merge release/v1.0.0
git tag v1.0.0
git push origin main --tags

# Merge về develop
git checkout develop
git merge release/v1.0.0
git push origin develop

# Xóa nhánh release
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

### BƯỚC 5: Sửa lỗi khẩn cấp (Hotfix)

**5.1. Phát hiện lỗi trên production:**
```bash
git checkout main
git pull origin main
git checkout -b hotfix/fix-login-bug
```

**5.2. Sửa lỗi và commit:**
```bash
# Sửa lỗi...
git add .
git commit -m "fix: sửa lỗi đăng nhập không được"
git push origin hotfix/fix-login-bug
```

**5.3. Merge vào cả main và develop:**
```bash
# Merge vào main (khẩn cấp)
git checkout main
git merge hotfix/fix-login-bug
git tag v1.0.1
git push origin main --tags

# Merge về develop
git checkout develop
git merge hotfix/fix-login-bug
git push origin develop

# Xóa nhánh hotfix
git branch -d hotfix/fix-login-bug
git push origin --delete hotfix/fix-login-bug
```

## SƠ ĐỒ LUỒNG:

```
main     ← hotfix ← main
  ↑         ↓
  │      develop ← feature
  │         ↑
  └─ release ─┘
```

## QUY TẮC:

1. **main**: Chỉ chứa code production, luôn stable
2. **develop**: Code development, tích hợp các feature
3. **feature/***: Phát triển tính năng mới từ develop
4. **release/***: Chuẩn bị phát hành từ develop
5. **hotfix/***: Sửa lỗi khẩn cấp từ main

**Lưu ý bảo mật:** Không push trực tiếp lên main, luôn qua Pull Request để review code.

---

## Xử lý Conflict và Rebase/Merge

### 1. CONFLICT KHI MERGE

**Khi xảy ra conflict:**
```bash
git checkout develop
git merge feature/dang-nhap
# Auto-merging file.js
# CONFLICT (content): Merge conflict in file.js
# Automatic merge failed; fix conflicts and then commit the result.
```

**Xử lý conflict:**
```bash
git status  # Xem file bị conflict

# Mở file bị conflict, sẽ thấy:
<<<<<<< HEAD
code từ nhánh hiện tại (develop)
=======
code từ nhánh merge vào (feature)
>>>>>>> feature/dang-nhap
```

**Sửa conflict và hoàn tất:**
```bash
# Chỉnh sửa file, xóa các dấu <<<, ===, >>>
git add file.js
git commit -m "resolve: conflict khi merge feature/dang-nhap"
```

### 2. REBASE vs MERGE

#### **MERGE (tạo merge commit):**
```bash
git checkout develop
git merge feature/dang-nhap
# Tạo commit merge, giữ lại lịch sử nhánh
```

#### **REBASE (viết lại lịch sử):**
```bash
git checkout feature/dang-nhap
git rebase develop
# Nếu có conflict:
# Sửa conflict trong file
git add file.js
git rebase --continue
# Hoặc hủy rebase: git rebase --abort
```

### 3. QUY TRÌNH REBASE CHUẨN

**3.1. Cập nhật nhánh develop:**
```bash
git checkout develop
git pull origin develop
```

**3.2. Rebase feature trên develop mới nhất:**
```bash
git checkout feature/dang-nhap
git rebase develop
```

**3.3. Xử lý conflict (nếu có):**
```bash
# Sửa từng file conflict
git add .
git rebase --continue
# Lặp lại đến khi hoàn thành
```

**3.4. Push force (cẩn thận!):**
```bash
git push --force-with-lease origin feature/dang-nhap
```

### 4. INTERACTIVE REBASE (dọn dẹp commit)

```bash
git rebase -i HEAD~3  # Sửa 3 commit gần nhất

# Editor mở ra:
pick abc1234 commit 1
squash def5678 commit 2  # Gộp vào commit trước
drop ghi9012 commit 3    # Xóa commit này
```

### 5. KHI NÀO DÙNG GÌ?

#### **Dùng MERGE khi:**

- Team lớn, cần giữ lại lịch sử đầy đủ

- Feature branch có nhiều developer

- Muốn thấy rõ thời điểm merge

#### **Dùng REBASE khi:**

- Muốn lịch sử sạch, tuyến tính

- Feature branch nhỏ, 1 developer

- Trước khi merge vào develop

### 6. XỬ LÝ CONFLICT PHỨC TẠP

**Dùng merge tool:**
```bash
git config --global merge.tool vimdiff  # hoặc vscode
git mergetool
```

**Xem thay đổi:**
```bash
git diff HEAD~1  # So với commit trước
git log --oneline --graph  # Xem cây commit
```

### 7. QUY TRÌNH KHUYẾN NGHỊ

```bash
# 1. Cập nhật develop
git checkout develop
git pull origin develop

# 2. Rebase feature (làm sạch lịch sử)
git checkout feature/ten-tinh-nang
git rebase develop
# Sửa conflict nếu có

# 3. Push force cẩn thận
git push --force-with-lease origin feature/ten-tinh-nang

# 4. Tạo Pull Request
# GitHub/GitLab: feature → develop

# 5. Merge bằng "Squash and merge" hoặc "Rebase and merge"
```

**⚠️ Cảnh báo bảo mật:**

- `--force` có thể ghi đè lịch sử, dùng `--force-with-lease` an toàn hơn

- Không rebase nhánh công khai đã có người khác dùng

- Backup code trước khi rebase phức tạp