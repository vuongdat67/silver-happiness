---
template: post.html
title: Setup Volatility (Vol2 & Vol3)
date: 2025-02-25
authors:
  - vuongdat67
tags:
  - Tools
  - Forensic
image:
  src: assets/images/voltatility.webp
  show_in_post: true
  show_in_list: true
---


Hướng dẫn cài đặt và sử dụng **Volatility 2** và **Volatility 3** trên Linux (Ubuntu/Kali), kèm workflow phân tích memory cơ bản.

<!--more-->

# Setup Volatility :material-tab-search:

## 1. Setup Volatility 2 (Python 2)

> Dùng cho lab cũ, nhiều plugin hơn nhưng đã deprecated.

```bash
# Install dependencies
sudo apt update
sudo apt install -y \
  python2 \
  python2-dev \
  build-essential \
  git \
  curl

# Install pip for python2
curl https://bootstrap.pypa.io/pip/2.7/get-pip.py -o get-pip.py
python2 get-pip.py

# Setup tools directory
mkdir -p ~/tools
cd ~/tools

# Clone Volatility 2
git clone https://github.com/volatilityfoundation/volatility.git volatility2
cd volatility2

# Install dependencies
pip2 install pycrypto distorm3 yara-python

# Test
python2 vol.py -h
````

### Alias

```bash
nano ~/.bashrc
```

```bash
alias vol2="python2 ~/tools/volatility2/vol.py"
```

```bash
source ~/.bashrc
```

---

## 2. Setup Volatility 3 (Python 3)

> Version mới, không cần profile.

```bash
# Install dependencies
sudo apt update
sudo apt install -y \
  python3 \
  python3-pip \
  python3-setuptools \
  python3-distutils \
  git

# Setup
cd ~/tools
git clone https://github.com/volatilityfoundation/volatility3.git
cd volatility3

# Upgrade pip tools
python3 -m pip install -U pip setuptools wheel

# Install
pip3 install .

# Optional plugins
pip3 install yara-python capstone pycryptodome

# Test
python3 vol.py -h
```

### Alias

```bash
nano ~/.bashrc
```

```bash
alias vol3="python3 ~/tools/volatility3/vol.py"
```

```bash
source ~/.bashrc
```

---

## 3. Memory Forensics Workflow (Volatility 2)

### Step 1 — Identify OS

```bash
vol2 -f memory.raw imageinfo
```

hoặc:

```bash
vol2 -f memory.raw kdbgscan
```

---

### Step 2 — Process Analysis

```bash
pslist
pstree
psscan
psxview
```

---

### Step 3 — Network

```bash
netscan
connscan
```

---

### Step 4 — Malware Detection

```bash
malfind
ldrmodules
dlllist
handles
```

---

### Step 5 — Credential Dump

```bash
hashdump
lsadump
```

---

## 4. Memory Forensics Workflow (Volatility 3)

### Identify OS

```bash
vol3 -f memory.raw windows.info
```

---

### Process

```bash
windows.pslist
windows.psscan
windows.pstree
```

---

### Network

```bash
windows.netscan
```

---

### Malware

```bash
windows.malfind
windows.dlllist
```

---

## 5. Example Usage

### Volatility 2

```bash
vol2 -f memory.raw --profile=Win7SP1x64 pslist
```

---

### Volatility 3

```bash
vol3 -f memory.raw windows.pslist
```

---

## 6. Recommended Lab Structure

```
~/tools
 ├── volatility2
 └── volatility3

~/cases
 ├── case1
 │   ├── memory.raw
 │   └── notes.txt
```

---

## 7. Notes

* Volatility 2 yêu cầu Python 2 → không nên cài global bằng `sudo pip`
* Volatility 3 dùng `pyproject.toml` → cài bằng `pip install .`
* Nên dùng alias (`vol2`, `vol3`) để tránh conflict

---

## 8. Quick Cheat Flow

```text
imageinfo → pslist → psscan → psxview
→ netscan → malfind → dlllist → handles → hashdump
```

---

### Kết luận

* Vol2: mạnh về plugin legacy
* Vol3: clean hơn, không cần profile
* Nên cài song song để phục vụ DFIR / CTF

