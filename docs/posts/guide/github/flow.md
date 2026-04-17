# PLAYBOOK HOÀN CHỈNH: GIT FLOW + CI/CD + DEVSECOPS

---

## PHẦN 1 — GIT FLOW

### 1.1 Sơ đồ chuẩn

```
feature/* ─┐
           ├──→ develop ──→ release/* ──→ main ──→ [tag v1.x.x]
bugfix/*  ─┘                                ↑
                                     hotfix/* ──→ develop
```

Rule cứng:
- Không push thẳng lên `main` hoặc `develop`
- Mọi thứ phải qua Pull Request
- `main` luôn deployable

---

### 1.2 Khởi tạo repo

```bash
git init
git commit --allow-empty -m "chore: initial commit"
git branch -M main
git remote add origin https://github.com/user/repo.git
git push -u origin main

git checkout -b develop
git push -u origin develop
```

Dùng `--allow-empty` để tránh commit "rác" khi chưa có file nào thực chất.

---

### 1.3 Feature workflow

```bash
git checkout develop
git pull --rebase origin develop        # dùng rebase, không tạo merge commit rác
git checkout -b feature/ten-tinh-nang

# ... code ...
git add -p                              # add từng hunk, không add cả file blind
git commit -m "feat(module): mô tả ngắn"
git push origin feature/ten-tinh-nang
```

Sau khi PR được merge:
```bash
git checkout develop && git pull --rebase origin develop
git branch -d feature/ten-tinh-nang
git push origin --delete feature/ten-tinh-nang
```

---

### 1.4 Release workflow

```bash
git checkout develop && git pull --rebase origin develop
git checkout -b release/v1.2.0

# Chỉnh CHANGELOG, bump version trong pyproject.toml / package.json
git commit -m "chore: bump version to 1.2.0"
git push origin release/v1.2.0

# Sau review:
git checkout main && git merge --no-ff release/v1.2.0
git tag -a v1.2.0 -m "Release v1.2.0"
git push origin main --tags

git checkout develop && git merge --no-ff release/v1.2.0
git push origin develop

git branch -d release/v1.2.0
git push origin --delete release/v1.2.0
```

---

### 1.5 Hotfix workflow

```bash
git checkout main && git pull origin main
git checkout -b hotfix/fix-crash-login

# ... sửa lỗi ...
git commit -m "fix: null pointer khi user chưa xác thực"
git push origin hotfix/fix-crash-login

git checkout main && git merge --no-ff hotfix/fix-crash-login
git tag -a v1.2.1 -m "Hotfix v1.2.1"
git push origin main --tags

git checkout develop && git merge --no-ff hotfix/fix-crash-login
git push origin develop

git branch -d hotfix/fix-crash-login
git push origin --delete hotfix/fix-crash-login
```

---

### 1.6 Merge vs Rebase — khi nào dùng gì

| Tình huống | Dùng |
|---|---|
| Feature branch cá nhân, trước khi tạo PR | `rebase develop` → lịch sử sạch |
| Merge PR vào develop/main | `--no-ff merge` → giữ merge commit để trace |
| Đồng bộ develop về feature đang làm | `rebase` |
| Nhánh đã public, nhiều người dùng | **Tuyệt đối không rebase** |

```bash
# Quy trình rebase chuẩn trước khi tạo PR
git checkout develop && git pull --rebase origin develop
git checkout feature/ten-tinh-nang
git rebase develop
# Xử lý conflict từng commit một
git push --force-with-lease origin feature/ten-tinh-nang   # KHÔNG dùng --force
```

---

### 1.7 Những lệnh hay bị bỏ quên

```bash
# Lưu tạm khi cần nhảy nhánh giữa chừng
git stash push -m "wip: đang làm auth module"
git stash list
git stash pop                          # hoặc git stash apply stash@{0}

# Lấy 1 commit cụ thể từ nhánh khác
git cherry-pick <commit-hash>
git cherry-pick A..B                   # range từ A+1 đến B

# Dọn dẹp commit trước khi PR
git rebase -i HEAD~4
# squash / fixup / reword / drop từng commit

# Xem lịch sử dạng graph
git log --oneline --graph --all

# So sánh nhánh
git diff develop...feature/ten-tinh-nang

# Ký commit với GPG (nhiều org bắt buộc)
git config --global commit.gpgsign true
git commit -S -m "feat: signed commit"
```

---

### 1.8 Cấu hình `.github/` chuẩn

```
.github/
├── CODEOWNERS                    # auto-assign reviewer đúng người
├── pull_request_template.md      # template PR
├── ISSUE_TEMPLATE/
│   ├── bug_report.md
│   └── feature_request.md
└── workflows/
    ├── ci.yml
    └── cd.yml
```

`CODEOWNERS`:
```
# Security-related files → chỉ team security mới approve được
src/crypto/      @org/security-team
*.yml            @org/devops-team
docs/            @org/tech-lead
```

`pull_request_template.md`:
```markdown
## Mô tả thay đổi
<!-- Tóm tắt ngắn -->

## Loại thay đổi
- [ ] feat  - [ ] fix  - [ ] refactor  - [ ] docs  - [ ] chore

## Checklist
- [ ] Đã tự review code của mình
- [ ] Đã viết/cập nhật test
- [ ] Không có secret/credential trong code
- [ ] Đã cập nhật docs nếu cần
```

---

## PHẦN 2 — CONVENTIONAL COMMITS & PRE-COMMIT

### 2.1 Conventional Commits

Format: `<type>(<scope>): <mô tả>`

| Type | Dùng khi |
|---|---|
| `feat` | Tính năng mới |
| `fix` | Sửa bug |
| `refactor` | Tái cấu trúc, không thêm feature/fix bug |
| `perf` | Cải thiện performance |
| `test` | Thêm/sửa test |
| `docs` | Tài liệu |
| `chore` | Build system, dependencies |
| `ci` | CI/CD config |
| `security` | Vá lỗ hổng bảo mật |
| `revert` | Revert commit |

Breaking change: thêm `!` sau type hoặc footer `BREAKING CHANGE:`
```
feat(api)!: đổi response format của /users endpoint
```

---

### 2.2 Pre-commit hooks

Cài đặt:
```bash
pip install pre-commit
```

`.pre-commit-config.yaml`:
```yaml
repos:
  # --- Format & Lint ---
  - repo: https://github.com/psf/black
    rev: 23.12.0
    hooks:
      - id: black

  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.1.9
    hooks:
      - id: ruff
        args: [--fix]

  # --- Security: chặn secret bị commit ---
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.18.1
    hooks:
      - id: gitleaks

  # --- C++ (nếu dùng) ---
  - repo: https://github.com/pre-commit/mirrors-clang-format
    rev: v17.0.6
    hooks:
      - id: clang-format
        types_or: [c, c++]

  # --- Chung ---
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.5.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-merge-conflict
      - id: detect-private-key          # chặn private key
      - id: check-added-large-files     # chặn file > 500KB
        args: ['--maxkb=500']
```

```bash
pre-commit install          # cài hook vào .git/hooks
pre-commit run --all-files  # chạy thủ công toàn bộ
```

---

## PHẦN 3 — CI/CD

### 3.1 Test CI local với `act`

Đây là giải pháp cho vấn đề push 10 lần mới xanh:

```bash
# Cài (cần Docker)
brew install act          # macOS
# hoặc: curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash

# Dùng
act                                      # chạy tất cả push triggers
act pull_request                         # simulate PR event
act -j lint                              # chỉ chạy job "lint"
act -W .github/workflows/ci.yml          # chỉ chạy file cụ thể
act --dryrun                             # xem sẽ chạy gì, không thực thi
act --verbose                            # log chi tiết
```

File `.actrc` (đặt ở root repo):
```
-P ubuntu-latest=catthehacker/ubuntu:act-latest
--secret-file .secrets
```

File `.secrets` (KHÔNG commit):
```
GITHUB_TOKEN=ghp_xxx
CODECOV_TOKEN=xxx
SONAR_TOKEN=xxx
```

---

### 3.2 CI Pipeline hoàn chỉnh

`.github/workflows/ci.yml`:
```yaml
name: CI

on:
  push:
    branches: [develop, main]
  pull_request:
    branches: [develop, main]

jobs:
  # ── Job 1: Nhanh, fail early ──────────────────────────────
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
          cache: pip
      - run: pip install black ruff mypy bandit
      - run: black --check src/
      - run: ruff check src/
      - run: mypy src/
      - run: bandit -r src/ -ll -x tests/   # SAST cơ bản

  # ── Job 2: Test (matrix) ─────────────────────────────────
  test:
    needs: lint
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ['3.10', '3.11', '3.12']
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}
          cache: pip
      - run: pip install -r requirements.txt -r requirements-dev.txt
      - run: pytest tests/ -v --cov=src --cov-report=xml --cov-fail-under=75
      - uses: codecov/codecov-action@v4
        with:
          token: ${{ secrets.CODECOV_TOKEN }}

  # ── Job 3: Security scan ──────────────────────────────────
  security:
    needs: lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0      # cần full history cho secret scan

      - name: Audit dependencies
        run: |
          pip install pip-audit
          pip-audit -r requirements.txt --fail-on-vuln

      - name: Scan secrets (full history)
        uses: trufflesecurity/trufflehog@main
        with:
          path: ./
          base: ${{ github.event.repository.default_branch }}

      - name: Container scan (nếu có Dockerfile)
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: fs
          severity: CRITICAL,HIGH
          exit-code: 1

  # ── Job 4: SAST nâng cao (SonarCloud) ────────────────────
  sonar:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

---

### 3.3 CD Pipeline

`.github/workflows/cd.yml`:
```yaml
name: CD

on:
  push:
    tags: ['v*.*.*']

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write         # cần để tạo GitHub Release

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      # Build artifact
      - name: Build
        run: |
          pip install build
          python -m build

      # Tự động generate CHANGELOG từ conventional commits
      - name: Generate changelog
        id: changelog
        uses: orhun/git-cliff-action@v3
        with:
          config: cliff.toml
          args: --latest

      # Tạo GitHub Release với changelog
      - name: Create Release
        uses: softprops/action-gh-release@v1
        with:
          body: ${{ steps.changelog.outputs.content }}
          files: dist/*
          draft: false
          prerelease: ${{ contains(github.ref, 'rc') || contains(github.ref, 'beta') }}
```

---

### 3.4 Semantic Release tự động

Thay vì tạo tag tay, dùng `semantic-release` hoặc `release-please`:

`release-please` (Google, đơn giản hơn):
```yaml
# .github/workflows/release-please.yml
name: Release Please

on:
  push:
    branches: [main]

jobs:
  release-please:
    runs-on: ubuntu-latest
    steps:
      - uses: google-github-actions/release-please-action@v4
        with:
          release-type: python        # hoặc node, go, ...
          package-name: my-package
```

Nó tự đọc conventional commits → tạo PR "Release v1.x.x" → merge PR đó thì tag và release tự động.

---

## PHẦN 4 — SECRETS MANAGEMENT

### 4.1 Hierarchy quản lý secret

```
Môi trường DEV   → .env (local only, gitignored)
Môi trường CI    → GitHub Secrets / GitLab CI Variables
Môi trường PROD  → HashiCorp Vault / AWS Secrets Manager / GCP Secret Manager
```

Tuyệt đối không:
- Hardcode secret trong code
- Commit `.env` lên repo
- Để secret trong Docker image layer
- Log secret ra stdout

### 4.2 Rotation tự động (GitHub Secrets)

```yaml
# Workflow kiểm tra secret sắp hết hạn
- name: Check token expiry
  run: |
    expiry=$(curl -H "Authorization: token ${{ secrets.MY_TOKEN }}" \
      https://api.github.com/rate_limit | jq '.rate.reset')
    echo "Token reset: $expiry"
```

Với production: dùng Vault với `lease_duration` và dynamic secrets — Vault tự xoay key theo chu kỳ.

---

## PHẦN 5 — TESTING STRATEGY

### 5.1 Testing Pyramid đúng nghĩa

```
          /\
         /E2E\          ← ít nhất, chạy chậm, dễ vỡ
        /──────\
       /Integration\    ← test boundary: DB, API, filesystem
      /──────────────\
     /   Unit Tests   \ ← nhiều nhất, nhanh, isolated
    /──────────────────\
```

**Coverage không phải là mục tiêu.** 80% coverage nhưng toàn test getter/setter là vô nghĩa. Tập trung vào:
- Business logic cốt lõi
- Security-critical path (auth, crypto, input validation)
- Edge cases của parser/analyzer (đặc biệt với NT137)

### 5.2 Pytest chuẩn

```python
# conftest.py
import pytest

@pytest.fixture(scope='session')
def db():
    engine = create_engine('sqlite:///:memory:')
    Base.metadata.create_all(engine)
    yield engine
    Base.metadata.drop_all(engine)

@pytest.fixture(autouse=True)
def reset_db(db):
    # Clean state mỗi test, không leak giữa các test
    with db.connect() as conn:
        for table in reversed(Base.metadata.sorted_tables):
            conn.execute(table.delete())
        conn.commit()
```

```bash
# Chạy test với output hữu ích
pytest -v --tb=short --cov=src --cov-report=term-missing

# Chỉ chạy test liên quan đến file đang sửa
pytest --lf              # last failed
pytest -x               # dừng ngay khi fail đầu tiên
pytest -k "test_auth"   # filter theo tên
```

### 5.3 Fuzzing (quan trọng với security tools)

Với project phân tích PE/APK file (NT137), fuzzing là bắt buộc vì input là binary file từ nguồn không tin tưởng:

```python
# Dùng Atheris (Python fuzzer của Google)
pip install atheris

import atheris
import sys

@atheris.instrument_func
def TestOneInput(data):
    try:
        import pefile
        pefile.PE(data=data)
    except pefile.PEFormatError:
        pass  # Expected
    except Exception as e:
        # Unexpected exception = potential bug
        raise

atheris.Setup(sys.argv, TestOneInput)
atheris.Fuzz()
```

```bash
python fuzz_pe_parser.py -max_len=65536 corpus/
```

Với C extension: dùng `libFuzzer` hoặc `AFL++`.

---

## PHẦN 6 — OBSERVABILITY

### 6.1 Structured Logging

Không dùng `print()` hoặc `logging.info("user logged in")` thuần text.

```python
import structlog

log = structlog.get_logger()

# Gắn context theo request
log = log.bind(request_id="abc-123", user_id=42)

log.info("user_login", method="password", ip="1.2.3.4")
log.warning("rate_limit_exceeded", endpoint="/api/scan", count=100)
log.error("parse_failed", filename="malware.exe", error=str(e))
```

Output (JSON, dễ ingest vào ELK/Datadog):
```json
{"event": "user_login", "request_id": "abc-123", "user_id": 42, "method": "password", "level": "info", "timestamp": "2024-01-15T10:30:00Z"}
```

### 6.2 Distributed Tracing

Với multi-service hoặc async tasks:

```python
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider

tracer = trace.get_tracer(__name__)

def analyze_file(filepath):
    with tracer.start_as_current_span("analyze_file") as span:
        span.set_attribute("file.path", filepath)
        span.set_attribute("file.size", os.path.getsize(filepath))

        with tracer.start_as_current_span("extract_features"):
            features = extract_features(filepath)

        with tracer.start_as_current_span("ml_predict"):
            result = model.predict(features)

        span.set_attribute("prediction", result)
        return result
```

---

## PHẦN 7 — BRANCH PROTECTION & GOVERNANCE

Cấu hình trên GitHub (Settings → Branches):

```
Branch: main
✅ Require pull request before merging
  ✅ Required approvals: 1 (hoặc 2 cho prod)
  ✅ Dismiss stale reviews when new commits pushed
  ✅ Require review from CODEOWNERS
✅ Require status checks to pass
  ✅ lint
  ✅ test
  ✅ security
✅ Require branches to be up to date
✅ Require signed commits        ← GPG
✅ Do not allow bypassing         ← kể cả admin
```

---

## PHẦN 8 — NHỮNG THỨ CÒN LẠI (theo priority)

### Với project NT137 (security tool):

| Priority | Topic | Lý do |
|---|---|---|
| 🔴 Cao | **Fuzzing** (Atheris/AFL++) | Input là binary untrusted, crash = bug nghiêm trọng |
| 🔴 Cao | **Input validation tầng API** | Path traversal, zip bomb với APK |
| 🟠 Trung | **Load testing** (Locust) | Biết analyzer xử lý được bao nhiêu file đồng thời |
| 🟠 Trung | **Feature flags** | Demo từng tính năng riêng lẻ, tắt nhanh khi bug |
| 🟡 Thấp | **SBOM generation** (CycloneDX) | Audit dependencies có CVE không |
| 🟡 Thấp | **Database migration** (Alembic) | Schema thay đổi không mất data |

### Với CRAB-He paper / Lightning Network:

| Priority | Topic | Lý do |
|---|---|---|
| 🔴 Cao | **Property-based testing** (Hypothesis) | Verify invariants của protocol với random inputs |
| 🔴 Cao | **Fuzzing Go code** (go-fuzz/OSS-Fuzz) | Payment channel state machine phải không crash |
| 🟠 Trung | **Formal verification mindset** | Impossibility proof cần mapping rõ ràng sang code |

### General (bất kỳ project nào):

| Topic | Một dòng tóm tắt |
|---|---|
| **Trunk-based Development** | Thay thế Git Flow khi team nhỏ, deploy nhanh |
| **Blue/Green Deployment** | Zero-downtime, rollback ngay trong 30s |
| **Canary Release** | Rollout 5% → 20% → 100%, tự động rollback khi error rate tăng |
| **ADR (Architecture Decision Records)** | Ghi lại *tại sao* chọn thư viện/kiến trúc này |
| **Dependency pinning** | `pip-compile`, `package-lock.json` — reproducible builds |
| **Supply chain security** | Verify checksum/signature của dependencies (Sigstore) |
| **API versioning** | `/v1/`, `/v2/` hoặc header `Accept-Version` — không break client |

---

## PHẦN 9 — CHECKLIST NHANH KHI BẮT ĐẦU PROJECT MỚI

```
□ Khởi tạo repo với main + develop
□ Cấu hình branch protection (main + develop)
□ Thêm CODEOWNERS
□ Thêm PR template
□ Cài pre-commit (gitleaks + linter)
□ Viết .gitignore đúng (secrets, venv, build artifacts)
□ CI pipeline cơ bản (lint → test → security)
□ act test CI chạy local được
□ Secrets đặt trong GitHub Secrets, không trong code
□ Conventional commits từ commit đầu tiên
□ README: cách setup, cách chạy test, cách contribute
```

---

**Tóm lại những gì tài liệu cũ của bạn còn thiếu so với bản này:**
- `git add -p` thay vì `git add .` blind
- `--no-ff` khi merge release/hotfix vào main (giữ merge commit để audit)
- `--force-with-lease` vs `--force` — giải thích rõ tại sao
- `CODEOWNERS` + PR template cụ thể
- Pre-commit cho C++ (clang-format)
- `release-please` tự động hóa versioning
- Fuzzing — quan trọng nhất với security tooling
- Structured logging với `structlog`
- Testing strategy đúng nghĩa (không chạy theo % coverage)
- Load testing + feature flags
- Checklist khởi tạo project
