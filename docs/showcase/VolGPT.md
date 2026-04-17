# volGPT – Memory Forensics Triage with LLM

![volgpt](../assets/showcase/volgpt.jpg)

* Repository: [https://github.com/vuongdat67/NT334_G7/tree/master](https://github.com/vuongdat67/NT334_G7/tree/master)

---

## Overview

volGPT là một project **reproduce và cải tiến** từ paper:

> *“volGPT: Evaluation on triaging ransomware process in memory forensics with Large Language Model” (FSI:DI 2024)*

Project xây dựng một pipeline hoàn chỉnh để:

* phân tích memory dump bằng **Volatility 3**
* chuyển đổi thành dữ liệu có cấu trúc
* sử dụng **LLM để triage process nghi ngờ**
* đánh giá bằng các metric chuẩn (Precision, Recall, F1)

---

## Motivation

Trong Digital Forensics:

* Memory dump chứa:

  * process độc hại
  * artifact quan trọng
* Nhưng:

  * ❌ rất nhiều noise
  * ❌ khó triage thủ công

Trong khi đó:

* LLM có khả năng:

  * reasoning
  * hiểu context

👉 Project này kết hợp 2 thứ:

* **memory forensics (Volatility)**
* **AI reasoning (LLM)**

để tự động hóa triage.

---

## Features

### 🧠 Memory Forensics Pipeline

* Input: memory dump
* Volatility 3 plugins:

  * `windows.pslist`
  * `windows.vadinfo`
  * `windows.malfind`
* Output:

  * structured JSON artifacts

---

### 🤖 LLM-based Triage

* Prompt-based classification
* Majority voting (3 runs)
* Multi-provider support:

  * local (Ollama, LM Studio)
  * cloud (OpenAI, OpenRouter, Gemini)

---

### 📊 Evaluation Framework

* Metrics:

  * Accuracy
  * Precision
  * Recall
  * F1-score
* Triage efficiency measurement

---

### ⚠️ Hallucination Analysis

* Phân tích lỗi LLM:

  * false positives
  * false negatives
* Taxonomy:

  * name hallucination
  * relationship error
  * cascade error

👉 Đây là điểm **rất research-level**

---

### 🔬 Baseline Comparison

* Rule-based baseline
* XGBoost ML baseline
* So sánh với LLM

---

### ⚙️ Unified CLI System

* Một command duy nhất:

  ```bash
  python scripts/volgpt.py pipeline
  ```
* Hỗ trợ:

  * batch processing
  * model comparison
  * benchmark
  * report generation

---

## Architecture

Pipeline tổng thể:

```text
Memory Dump
    ↓
Volatility 3 (artifact extraction)
    ↓
Structured JSON
    ↓
LLM Prompting + Voting
    ↓
Post-filter (reduce FP)
    ↓
Evaluation + Benchmark
```

---

## Technical Highlights

### 1. End-to-End DFIR Pipeline

* Từ raw memory dump → report hoàn chỉnh
* Không chỉ tool → mà là hệ thống đầy đủ

---

### 2. Multi-LLM Abstraction

* Switch provider bằng config:

  * local ↔ cloud
* Dùng OpenAI-compatible API layer

---

### 3. Prompt Engineering for Security

* Nhiều strategy:

  * few-shot
  * chain-of-thought
  * high-recall mode
* Có anti-hallucination guard

---

### 4. Research-grade Evaluation

* Model comparison tracking
* Family-level benchmark
* Paper-style table generation

---

### 5. Hybrid Detection System

* LLM vs:

  * Rule-based
  * ML (XGBoost)

👉 Đây là tư duy **Blue Team hiện đại**

---

## Security & Safety

* Không chạy malware thật
* Chỉ phân tích memory dump
* Môi trường cô lập (WSL2 / VM)

---

## Challenges

* LLM hallucination trong security context
* Mapping giữa process → ground truth
* Cost vs performance trade-off (API budget ≤ 20$)

---

## Future Improvements

* Tích hợp SIEM / SOC pipeline
* Streaming triage (real-time memory analysis)
* Fine-tuned model cho DFIR
* EDR-like behavior correlation

---

## Conclusion

volGPT thể hiện:

* khả năng **kết hợp AI + cybersecurity**
* tư duy **research reproduction + improvement**
* kinh nghiệm với:

  * Memory forensics
  * LLM evaluation
  * Detection pipeline

---

## 📌 One-line showcase

> Built an end-to-end memory forensics triage pipeline using Volatility and LLMs, with multi-model evaluation, hallucination analysis, and baseline comparison.

