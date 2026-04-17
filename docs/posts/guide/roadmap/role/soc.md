# ROADMAP SOC - AN TOÀN THÔNG TIN TOÀN DIỆN

## 1. FOUNDATIONS - NỀN TẢNG CƠ BẢN

### 1.1 Kiến thức nền tảng IT
- Cách hoạt động của máy tính (CPU, RAM, Storage)
- Hệ điều hành cơ bản (Windows, Linux, macOS)
- Networking basics (TCP/IP, OSI model)
- Lịch sử và tầm quan trọng của cybersecurity
- Các loại tấn công phổ biến overview

### 1.2 Linux Fundamentals
- Cài đặt và sử dụng Linux (Ubuntu, Kali, CentOS)
- Command line basics (ls, cd, chmod, grep, find)
- File system hierarchy
- User và permission management
- Process management (ps, top, kill)
- Package management (apt, yum, dnf)
- Text editors (vim, nano)
- Shell scripting basics
- Log files và system monitoring

### 1.3 Windows Security Basics
- Windows architecture
- Active Directory cơ bản
- User và Group management
- Group Policy
- Windows Registry
- Event Viewer
- PowerShell basics
- Windows Security features (Defender, Firewall)

### 1.4 Networking Fundamentals
- OSI Model (7 layers)
- TCP/IP Model
- IP Addressing (IPv4, IPv6)
- Subnetting và CIDR
- MAC addresses
- Ports và protocols (HTTP, HTTPS, FTP, SSH, DNS, DHCP)
- Routing và switching basics
- VLANs
- Network topologies

## 2. NETWORKING DEEP DIVE

### 2.1 Network Protocols
- TCP vs UDP
- HTTP/HTTPS/HTTP2/HTTP3
- DNS (Domain Name System)
- DHCP (Dynamic Host Configuration Protocol)
- ARP (Address Resolution Protocol)
- ICMP (ping, traceroute)
- SMTP, POP3, IMAP
- FTP, SFTP, FTPS
- SSH, Telnet
- SNMP
- NTP

### 2.2 Network Devices
- Routers
- Switches (L2, L3)
- Firewalls
- Load balancers
- Proxies (forward, reverse)
- IDS/IPS
- WAF (Web Application Firewall)
- VPN gateways

### 2.3 Network Security
- Firewall rules và policies
- Network segmentation
- DMZ (Demilitarized Zone)
- VPN (Site-to-Site, Remote Access)
- VPN protocols (IPSec, SSL/TLS, OpenVPN, WireGuard)
- Network Access Control (NAC)
- Port security
- VLAN security
- Wireless security (WPA2, WPA3)

### 2.4 Network Monitoring
- Packet capture (Wireshark, tcpdump)
- NetFlow/sFlow
- Network traffic analysis
- Bandwidth monitoring
- SNMP monitoring

## 3. SECURITY FUNDAMENTALS

### 3.1 CIA Triad
- Confidentiality (Bảo mật)
- Integrity (Toàn vẹn)
- Availability (Khả dụng)
- Authentication (Xác thực)
- Authorization (Phân quyền)
- Non-repudiation (Không thể chối bỏ)

### 3.2 Cryptography
- Symmetric encryption (AES, DES, 3DES)
- Asymmetric encryption (RSA, ECC)
- Hashing (MD5, SHA-1, SHA-256, SHA-512)
- Digital signatures
- Certificates và PKI (Public Key Infrastructure)
- SSL/TLS
- PGP/GPG
- Key management
- Cryptographic protocols

### 3.3 Authentication & Authorization
- Password security và best practices
- Multi-factor authentication (MFA)
- Single Sign-On (SSO)
- OAuth 2.0
- SAML
- OpenID Connect
- Kerberos
- LDAP
- RADIUS/TACACS+
- Biometric authentication

### 3.4 Access Control Models
- DAC (Discretionary Access Control)
- MAC (Mandatory Access Control)
- RBAC (Role-Based Access Control)
- ABAC (Attribute-Based Access Control)
- Rule-based access control
- Least privilege principle
- Separation of duties

## 4. THREAT LANDSCAPE - PHONG CẢNH MÃI HIỂM

### 4.1 Threat Actors
- Script kiddies
- Hacktivists
- Organized crime
- Nation-state actors
- Insider threats
- Advanced Persistent Threats (APT)

### 4.2 Attack Vectors
- Phishing và spear phishing
- Malware (viruses, worms, trojans)
- Ransomware
- Spyware và adware
- Rootkits
- Botnets
- Zero-day exploits
- SQL injection
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- DDoS attacks
- Man-in-the-middle (MITM)
- Social engineering
- Supply chain attacks

### 4.3 Vulnerability Types
- Buffer overflows
- Race conditions
- Privilege escalation
- Authentication bypasses
- Information disclosure
- Injection flaws
- Broken access control
- Security misconfigurations
- Using components with known vulnerabilities

### 4.4 Malware Analysis Basics
- Static analysis
- Dynamic analysis
- Sandboxing
- Malware families
- Indicators of Compromise (IOCs)
- File hashing
- YARA rules

## 5. SOC OPERATIONS - VẬN HÀNH SOC

### 5.1 SOC Structure
- SOC roles và responsibilities
- Tier 1 Analyst (Alert triage)
- Tier 2 Analyst (Incident investigation)
- Tier 3 Analyst (Threat hunting)
- SOC Manager
- Incident Response team
- Threat Intelligence team
- SOC workflows
- Shift operations
- On-call procedures

### 5.2 Security Monitoring
- Log collection và aggregation
- Event correlation
- Baseline behavior
- Anomaly detection
- Alert generation
- Alert prioritization
- False positive reduction
- Security dashboards
- Metrics và KPIs

### 5.3 Alert Triage
- Alert classification
- Initial analysis
- Context gathering
- Severity assessment
- Escalation criteria
- Documentation requirements
- Communication protocols

### 5.4 Incident Response
- Incident Response lifecycle
- Preparation
- Detection và Analysis
- Containment
- Eradication
- Recovery
- Post-incident activity
- Lessons learned
- Incident documentation
- Chain of custody
- Evidence preservation

### 5.5 Threat Hunting
- Hypothesis-driven hunting
- Intelligence-driven hunting
- Situational awareness hunting
- Hunting methodologies
- MITRE ATT&CK framework
- Hunting tools và techniques
- IOC hunting
- Behavioral hunting

## 6. SIEM & LOG MANAGEMENT

### 6.1 SIEM Concepts
- Log sources
- Log normalization
- Event correlation
- Use cases
- Alert rules
- Dashboards và reports
- Log retention policies
- Compliance requirements

### 6.2 Popular SIEM Platforms
- Splunk
- IBM QRadar
- ArcSight
- LogRhythm
- Elastic Stack (ELK)
- Graylog
- AlienVault OSSIM
- Microsoft Sentinel (Azure Sentinel)
- Google Chronicle
- Sumo Logic

### 6.3 Log Analysis
- Log parsing
- Regular expressions
- Search queries (SPL for Splunk, KQL for Sentinel)
- Statistical analysis
- Trend analysis
- Pattern recognition
- Anomaly detection
- Time-series analysis

### 6.4 Common Log Sources
- Windows Event Logs
- Linux Syslog
- Firewall logs
- IDS/IPS logs
- Proxy logs
- Web server logs (Apache, Nginx, IIS)
- Application logs
- Database logs
- VPN logs
- DNS logs
- Cloud service logs

## 7. SECURITY TOOLS & TECHNOLOGIES

### 7.1 Endpoint Security
- Antivirus/Anti-malware
- EDR (Endpoint Detection and Response)
- XDR (Extended Detection and Response)
- Host-based IDS/IPS
- Application whitelisting
- Patch management
- DLP (Data Loss Prevention)
- Mobile Device Management (MDM)

### 7.2 Network Security Tools
- Firewalls (Palo Alto, Fortinet, Cisco ASA, pfSense)
- IDS/IPS (Snort, Suricata, Zeek/Bro)
- Network scanners (Nmap, Masscan)
- Vulnerability scanners (Nessus, OpenVAS, Qualys)
- Packet analyzers (Wireshark, tcpdump)
- NetFlow analyzers

### 7.3 Vulnerability Management
- Vulnerability scanning
- Vulnerability assessment
- Vulnerability prioritization (CVSS scoring)
- Patch management
- Configuration management
- Asset inventory
- Remediation tracking
- Compliance scanning

### 7.4 Threat Intelligence Platforms
- MISP (Malware Information Sharing Platform)
- ThreatConnect
- Anomali
- Recorded Future
- ThreatQuotient
- IOC feeds
- STIX/TAXII
- OSINT sources

### 7.5 Security Orchestration (SOAR)
- Playbook automation
- Case management
- Threat intelligence integration
- Automated response actions
- Workflow orchestration
- Popular platforms (Splunk SOAR, Palo Alto Cortex XSOAR)

## 8. THREAT INTELLIGENCE

### 8.1 Intelligence Types
- Strategic intelligence
- Tactical intelligence
- Operational intelligence
- Technical intelligence

### 8.2 Intelligence Sources
- OSINT (Open Source Intelligence)
- Commercial feeds
- Information Sharing communities (ISACs)
- Dark web monitoring
- Honeypots
- Internal telemetry

### 8.3 Threat Intelligence Lifecycle
- Planning và direction
- Collection
- Processing
- Analysis
- Dissemination
- Feedback

### 8.4 IOC Management
- IOC types (IPs, domains, hashes, URLs)
- IOC enrichment
- IOC aging
- False positive handling
- Threat actor profiling
- Campaign tracking

### 8.5 Frameworks
- MITRE ATT&CK
- Cyber Kill Chain
- Diamond Model
- STIX/TAXII
- OpenIOC

## 9. COMPLIANCE & GOVERNANCE

### 9.1 Security Frameworks
- NIST Cybersecurity Framework
- ISO 27001/27002
- CIS Controls
- PCI DSS
- HIPAA
- SOC 2
- GDPR
- COBIT
- ITIL

### 9.2 Compliance Monitoring
- Policy enforcement
- Audit logging
- Compliance reporting
- Control validation
- Gap analysis
- Risk assessment
- Remediation tracking

### 9.3 Security Policies
- Acceptable Use Policy
- Password Policy
- Incident Response Policy
- Data Classification Policy
- Access Control Policy
- Change Management Policy
- Business Continuity Policy
- Disaster Recovery Policy

## 10. CLOUD SECURITY

### 10.1 Cloud Platforms
- AWS security services
- Azure security services
- GCP security services
- Cloud security architecture
- Shared responsibility model

### 10.2 Cloud Security Monitoring
- CloudTrail (AWS)
- Azure Monitor
- GCP Cloud Logging
- Cloud SIEM solutions
- CSPM (Cloud Security Posture Management)
- CWPP (Cloud Workload Protection Platform)

### 10.3 Cloud-Specific Threats
- Misconfiguration
- Insecure APIs
- Account hijacking
- Data breaches
- Insider threats
- Shared technology vulnerabilities

### 10.4 Container Security
- Docker security
- Kubernetes security
- Container scanning
- Runtime protection
- Image signing
- Registry security

## 11. INCIDENT RESPONSE ADVANCED

### 11.1 Digital Forensics
- Forensic process
- Evidence acquisition
- Disk imaging
- Memory forensics
- Network forensics
- Mobile forensics
- Cloud forensics
- Forensic tools (FTK, EnCase, Autopsy, Volatility)
- Timeline analysis
- Artifact analysis

### 11.2 Malware Analysis
- Static analysis tools (IDA Pro, Ghidra)
- Dynamic analysis (Cuckoo Sandbox, Any.run)
- Reverse engineering
- Behavioral analysis
- Code analysis
- Indicators extraction
- Report writing

### 11.3 Threat Emulation
- Red team vs Blue team
- Purple team exercises
- Penetration testing basics
- Attack simulation
- Breach and attack simulation (BAS)
- Adversary emulation

## 12. SCRIPTING & AUTOMATION

### 12.1 Python for Security
- Python basics
- Libraries: requests, scapy, beautifulsoup
- API interaction
- Log parsing scripts
- Automation scripts
- SIEM API integration
- IOC enrichment scripts
- Report generation

### 12.2 PowerShell
- PowerShell basics
- Active Directory querying
- Windows log analysis
- Automation scripts
- Security hardening scripts
- Incident response scripts

### 12.3 Bash Scripting
- Bash basics
- Log parsing
- Automation tasks
- Security monitoring scripts
- Incident response automation

### 12.4 APIs & Integration
- REST APIs
- GraphQL
- SIEM APIs
- Threat intelligence APIs
- Ticketing system APIs
- Webhook integration

## 13. NETWORK TRAFFIC ANALYSIS

### 13.1 Packet Analysis
- Wireshark mastery
- Protocol analysis
- Traffic patterns
- Malicious traffic identification
- Encrypted traffic analysis
- Display filters
- Capture filters

### 13.2 NetFlow Analysis
- NetFlow basics
- Traffic baselining
- Anomaly detection
- Data exfiltration detection
- C2 communication detection

### 13.3 Common Attack Patterns
- Port scanning signatures
- DDoS patterns
- SQL injection in network traffic
- Malware C2 beaconing
- Data exfiltration patterns
- Lateral movement indicators

## 14. EMAIL SECURITY

### 14.1 Email Threats
- Phishing
- Spear phishing
- Business Email Compromise (BEC)
- Email spoofing
- Malicious attachments
- Malicious links

### 14.2 Email Security Technologies
- SPF (Sender Policy Framework)
- DKIM (DomainKeys Identified Mail)
- DMARC (Domain-based Message Authentication)
- Email gateways
- Sandboxing
- URL rewriting
- Attachment scanning

### 14.3 Email Analysis
- Header analysis
- Link analysis
- Attachment analysis
- Domain reputation checking
- Phishing indicators
- Reporting mechanisms

## 15. WEB APPLICATION SECURITY

### 15.1 OWASP Top 10
- Injection flaws
- Broken authentication
- Sensitive data exposure
- XML External Entities (XXE)
- Broken access control
- Security misconfiguration
- Cross-Site Scripting (XSS)
- Insecure deserialization
- Using components with known vulnerabilities
- Insufficient logging và monitoring

### 15.2 Web Security Testing
- Burp Suite
- OWASP ZAP
- SQL injection testing
- XSS testing
- CSRF testing
- Authentication testing
- Session management testing

### 15.3 WAF (Web Application Firewall)
- WAF concepts
- Rule management
- False positive tuning
- Virtual patching
- Popular WAFs (ModSecurity, Cloudflare, AWS WAF)

## 16. IDENTITY & ACCESS MANAGEMENT (IAM)

### 16.1 Identity Management
- User lifecycle management
- Provisioning/De-provisioning
- Identity federation
- Directory services
- Identity governance

### 16.2 Access Management
- Privileged Access Management (PAM)
- Just-in-Time (JIT) access
- Temporary elevated access
- Access reviews
- Segregation of duties

### 16.3 Monitoring IAM
- Authentication logs
- Failed login attempts
- Privilege escalation detection
- Unusual access patterns
- Account compromise indicators

## 17. SECURITY METRICS & KPIs

### 17.1 SOC Metrics
- Mean Time to Detect (MTTD)
- Mean Time to Respond (MTTR)
- Mean Time to Contain (MTTC)
- Number of incidents
- False positive rate
- Alert volume
- Escalation rate
- SLA compliance

### 17.2 Security Posture Metrics
- Vulnerability counts
- Patch compliance
- Configuration compliance
- Risk scores
- Security control effectiveness

### 17.3 Reporting
- Executive dashboards
- Incident reports
- Trend analysis reports
- Compliance reports
- Threat intelligence reports
- Monthly/quarterly security reviews

## 18. ADVANCED TOPICS

### 18.1 Machine Learning in Security
- Anomaly detection
- Behavioral analysis
- Predictive analytics
- ML-based UEBA (User and Entity Behavior Analytics)
- False positive reduction
- Threat classification

### 18.2 Deception Technology
- Honeypots
- Honeynets
- Decoy systems
- Breadcrumbs
- Early warning systems

### 18.3 Zero Trust Architecture
- Zero trust principles
- Micro-segmentation
- Continuous verification
- Least privilege access
- Device trust
- Network zero trust

### 18.4 DevSecOps
- Security trong CI/CD pipeline
- SAST (Static Application Security Testing)
- DAST (Dynamic Application Security Testing)
- Container security scanning
- Infrastructure as Code (IaC) security
- Secret management

## 19. SOFT SKILLS & COMMUNICATION

### 19.1 Communication Skills
- Technical writing
- Incident reporting
- Stakeholder communication
- Presentation skills
- Documentation
- Email etiquette

### 19.2 Analytical Skills
- Critical thinking
- Problem-solving
- Pattern recognition
- Root cause analysis
- Decision making under pressure

### 19.3 Collaboration
- Team coordination
- Cross-functional collaboration
- Escalation management
- Knowledge sharing
- Mentoring

### 19.4 Stress Management
- Handling high-pressure situations
- Shift work management
- Burnout prevention
- Continuous learning mindset

## 20. CERTIFICATIONS

### 20.1 Entry Level
- CompTIA Security+
- CompTIA Network+
- CompTIA CySA+ (Cybersecurity Analyst)
- Cisco CCNA Security
- (ISC)² Security CC

### 20.2 Intermediate
- CEH (Certified Ethical Hacker)
- GIAC Security Essentials (GSEC)
- GIAC Certified Incident Handler (GCIH)
- GIAC Continuous Monitoring Certification (GMON)
- Splunk Core Certified User/Power User

### 20.3 Advanced
- CISSP (Certified Information Systems Security Professional)
- GIAC Certified Forensic Analyst (GCFA)
- GIAC Certified Intrusion Analyst (GCIA)
- OSCP (Offensive Security Certified Professional)
- CREST certifications

### 20.4 Specialized
- Cloud certifications (AWS Security, Azure Security Engineer)
- Vendor-specific (Palo Alto PCNSE, Fortinet NSE)
- SANS GIAC family
- CISA (Certified Information Systems Auditor)

## 21. HANDS-ON LABS & PRACTICE

### 21.1 Lab Environments
- Home lab setup (VirtualBox, VMware)
- Cloud labs (AWS, Azure free tier)
- Online platforms (TryHackMe, HackTheBox)
- Cyber ranges
- CTF competitions

### 21.2 Practice Scenarios
- Log analysis exercises
- Incident response simulations
- Malware analysis labs
- Network traffic analysis
- SIEM use case development
- Threat hunting exercises

### 21.3 Resources
- Security blogs
- Podcasts
- YouTube channels
- GitHub repositories
- Security conferences (DEF CON, Black Hat, RSA)
- Online courses (Cybrary, Udemy, Pluralsight)

## 22. CAREER PATH

### 22.1 Entry Points
- SOC Analyst Tier 1
- Security Operations Center Analyst
- Cyber Security Analyst
- Information Security Analyst

### 22.2 Mid-Level Positions
- SOC Analyst Tier 2/3
- Incident Responder
- Threat Hunter
- Security Engineer
- SIEM Engineer

### 22.3 Senior Positions
- SOC Manager
- Security Architect
- Threat Intelligence Analyst
- Incident Response Manager
- CISO (Chief Information Security Officer)

### 22.4 Specializations
- Malware Analyst
- Forensics Analyst
- Penetration Tester (crossover)
- Threat Intelligence Analyst
- Cloud Security Specialist
- Security Automation Engineer

---

## LỘ TRÌNH HỌC ĐỀ XUẤT

**Tháng 1-2:** Foundations (Linux, Windows, Networking basics)
**Tháng 3-4:** Networking Deep Dive, Security Fundamentals
**Tháng 5-6:** Threat Landscape, SOC Operations basics
**Tháng 7-8:** SIEM & Log Management, Security Tools
**Tháng 9-10:** Threat Intelligence, Compliance
**Tháng 11-12:** Cloud Security, Incident Response
**Tháng 13-15:** Scripting, Advanced Topics
**Tháng 16-18:** Specialized areas, Certifications prep
**Ongoing:** Hands-on labs, CTFs, Real-world practice

## TIPS ĐỂ THÀNH CÔNG

- Thực hành hàng ngày với labs
- Đọc threat intelligence reports thường xuyên
- Follow security news và blogs
- Tham gia CTF competitions
- Build home lab
- Document mọi thứ học được
- Join security communities
- Contribute to open source security projects
- Stay updated với latest threats
- Practice incident response scenarios
- Learn from real-world breaches
- Network với security professionals

Chúc bạn thành công trên con đường trở thành SOC Analyst!