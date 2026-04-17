# ROADMAP RED TEAM OPERATOR 

## 1. FOUNDATIONS - NỀN TẢNG CƠ BẢN

### 1.1 Penetration Testing Fundamentals - PREREQUISITE

Red Team Operator là **ADVANCED** role - bạn PHẢI thành thạo penetration testing trước.

#### **Web Application Penetration Testing:**
- OWASP Top 10 mastery
- Burp Suite Professional expert level
- Manual testing techniques
- Authentication/Authorization bypass
- Session management attacks
- API security testing
- GraphQL exploitation
- WebSocket security
- JWT attacks
- OAuth/SAML exploitation
- Business logic flaws
- Race conditions

#### **Network Penetration Testing:**
- Port scanning (Nmap mastery)
- Service enumeration
- Vulnerability assessment
- Exploitation (Metasploit expert)
- Post-exploitation
- Privilege escalation (Linux & Windows)
- Lateral movement
- Pivoting & tunneling
- Active Directory attacks
- Password attacks
- Wireless attacks

#### **Required Certifications (Minimum):**
- **OSCP** (Offensive Security Certified Professional) - MANDATORY
  - Without OSCP, you're NOT ready for Red Team
  - Proves hands-on exploitation skills
  - Entry barrier to Red Team
  
- **eWPT/eWPTX** (Web Penetration Tester)
- **PNPT** (Practical Network Penetration Tester)

### 1.2 Operating Systems Deep Dive

#### **Windows Internals - CRITICAL:**
- **Architecture:**
  - User mode vs Kernel mode
  - Windows API (Win32, Native API)
  - Process và Thread internals
  - Memory management
  - Handles và Objects
  - DLLs và PE format
  - Services và drivers
  
- **Active Directory:**
  - **MUST MASTER** - AD is primary target
  - Domain structure (domains, trees, forests)
  - Domain Controllers
  - Group Policy (GPO)
  - Organizational Units (OU)
  - Users, Groups, Computers
  - Trust relationships
  - Kerberos authentication deep dive
  - NTLM authentication
  - LDAP
  - DNS in AD
  - Certificate Services (AD CS)
  - Federation (ADFS)
  
- **PowerShell:**
  - Expert level required
  - Scripting
  - .NET integration
  - Remoting (WinRM, PSSession)
  - Empire/PowerShell Empire understanding
  - Obfuscation techniques
  - AMSI bypass
  - Constrained Language Mode bypass
  - Logging evasion
  
- **Windows Security:**
  - User Account Control (UAC)
  - Windows Defender
  - AppLocker/WDAC
  - Credential Guard
  - Device Guard
  - LSASS protection
  - Attack Surface Reduction (ASR)
  - Windows Event Logging
  - Sysmon
  
- **Windows Artifacts:**
  - Registry
  - Event logs
  - Prefetch
  - Scheduled tasks
  - Services
  - WMI
  - COM objects

#### **Linux/Unix Internals:**
- Kernel architecture
- File systems (ext4, XFS, Btrfs)
- Process management
- User/Group management
- Permissions (standard, ACLs, capabilities)
- SELinux/AppArmor
- Systemd
- Cron
- Sudo
- SSH
- iptables/nftables
- Container technologies (Docker, Kubernetes)
- Common services (Apache, Nginx, SSH, etc.)

#### **macOS Internals:**
- XNU kernel
- APFS filesystem
- System Integrity Protection (SIP)
- Gatekeeper
- TCC (Transparency, Consent, and Control)
- Keychain
- Launch Agents/Daemons
- Endpoint security framework

### 1.3 Networking - EXPERT LEVEL

#### **Network Protocols Deep Dive:**
- TCP/IP stack internals
- Routing protocols (BGP, OSPF, EIGRP)
- Spanning Tree Protocol
- VLAN hopping
- ARP spoofing/poisoning
- DNS (zone transfers, cache poisoning, tunneling)
- DHCP attacks
- SMB/CIFS (versions, vulnerabilities, relay attacks)
- Kerberos (票据攻击, delegation abuse)
- NTLM (relay, coercing)
- LDAP
- HTTP/HTTPS (advanced techniques)
- TLS/SSL (attacks, downgrade)
- VPN protocols (IPSec, SSL VPN, WireGuard)

#### **Network Architecture:**
- Firewalls (evasion techniques)
- IDS/IPS (evasion, bypass)
- Load balancers
- Proxies (forward, reverse)
- WAF (bypass techniques)
- Network segmentation
- DMZ architecture
- Zero Trust networks
- Software-Defined Networking (SDN)

#### **Wireless:**
- WiFi protocols (802.11)
- WPA2/WPA3 attacks
- Enterprise wireless (802.1X, RADIUS)
- Rogue AP deployment
- Evil twin attacks
- Wireless C2 channels
- Bluetooth attacks
- RFID/NFC exploitation

### 1.4 Programming & Scripting - MANDATORY

Red Team requires **STRONG** programming skills - not just scripting.

#### **Python - MUST MASTER:**
- Advanced Python
- Socket programming
- Network libraries (scapy, requests, impacket)
- Windows automation (pywin32, WMI)
- Cryptography (pycrypto, cryptography)
- Web frameworks (Flask for C2)
- Concurrent programming (threading, asyncio)
- Binary manipulation (struct, ctypes)
- Tool development
- Exploit development
- Implant development
- C2 development

#### **PowerShell - EXPERT LEVEL:**
- Advanced scripting
- .NET framework access
- WMI/CIM
- Remoting
- Active Directory cmdlets
- Offensive PowerShell (Empire, PowerSploit, Nishang)
- Obfuscation mastery
- AMSI bypass techniques
- Evasion techniques
- In-memory execution
- Reflective loading

#### **C/C++ - CRITICAL FOR ADVANCED:**
- Windows API programming
- Exploit development
- Shellcode development
- Process injection techniques
- DLL development
- Driver development (optional but valuable)
- Rootkit development (understanding)
- Anti-debugging/anti-analysis
- Packing/crypting
- Memory manipulation

#### **C# - HIGHLY VALUABLE:**
- .NET framework
- Windows application development
- Reflection
- In-memory execution
- Process injection (.NET)
- Offensive C# (SharpSploit, GhostPack)
- Obfuscation
- Assembly loading
- COM automation

#### **Go (Golang) - TRENDING:**
- Cross-compilation
- Implant development
- C2 agent development
- Network tools
- Obfuscation resistant
- Static binaries
- Modern Red Team tooling (Sliver, Merlin)

#### **Bash - REQUIRED:**
- Advanced bash scripting
- Linux post-exploitation
- Automation
- Persistence scripts
- Data exfiltration scripts

#### **Assembly - IMPORTANT:**
- x86/x64 assembly
- Shellcode development
- Exploit development
- Reverse engineering
- Anti-debugging techniques
- Code injection

#### **Others (Bonus):**
- Ruby (Metasploit framework)
- JavaScript (web exploitation, phishing)
- Rust (modern tooling)
- Nim (evasion-friendly)

### 1.5 Web Technologies
- Modern web frameworks (React, Angular, Vue)
- Backend technologies (Node.js, Django, Spring, ASP.NET)
- API architectures (REST, GraphQL, gRPC)
- WebSockets
- OAuth 2.0 flows
- SAML
- JWT internals
- Cookie security
- CORS
- CSP bypass
- Browser internals
- JavaScript engines

### 1.6 Cloud Platforms

#### **AWS - MUST KNOW:**
- EC2, S3, Lambda, ECS/EKS, RDS
- IAM (users, roles, policies, STS)
- VPC (security groups, NACLs)
- CloudTrail, CloudWatch
- Common misconfigurations
- IAM privilege escalation paths
- S3 enumeration/exploitation
- Lambda backdoors
- SSRF to metadata (169.254.169.254)
- Assume role attacks

#### **Azure:**
- VMs, Storage Accounts, Azure AD
- Resource Groups, Subscriptions
- Managed Identities
- Role-Based Access Control
- Common misconfigurations
- Azure AD attacks
- Service Principal abuse
- Storage account enumeration

#### **GCP:**
- Compute Engine, Cloud Storage, GKE
- IAM (service accounts, workload identity)
- Common misconfigurations
- Service account key exploitation
- Metadata server attacks

#### **Kubernetes:**
- Architecture (control plane, nodes)
- Pods, Services, Deployments
- RBAC
- Network Policies
- Service Accounts
- Secrets
- Common misconfigurations
- Container escape
- Cluster enumeration
- Pod takeover
- Privilege escalation

### 1.7 Containers & Virtualization
- Docker (internals, escape techniques)
- Kubernetes (exploitation)
- Container registries
- VMware (vCenter attacks, VM escape)
- Hyper-V
- Cloud hypervisors

## 2. RED TEAM METHODOLOGY

### 2.1 Red Team vs Penetration Testing

#### **Penetration Testing:**
- Time-boxed (1-4 weeks typically)
- Defined scope (IP ranges, applications)
- Find as many vulnerabilities as possible
- Loud (can be detected)
- Report all findings
- Technical focus
- Usually white box or grey box

#### **Red Team:**
- Long-duration (months)
- Objective-based (not scope-based)
- Simulate real adversary
- **Stealth is paramount**
- Test detection/response capabilities
- Test people, process, AND technology
- Goal: achieve objective undetected
- Usually black box or assumed breach
- Purple team collaboration

### 2.2 Red Team Engagement Lifecycle

#### **1. Planning & Preparation:**
- **Define Objectives:**
  - Crown Jewel identification (what are we trying to access?)
  - Success criteria (exfiltrate data, gain DA, plant implant, etc.)
  - Rules of Engagement (ROE)
  - Scope (what's in, what's out)
  - Limitations (no DoS, no destructive actions, etc.)
  
- **Threat Intelligence:**
  - Understand real threats to organization
  - Industry-specific threat actors
  - Recent attack trends
  - Adversary emulation (which APT group to simulate?)
  
- **OPSEC Planning:**
  - Infrastructure setup
  - Anonymization (VPNs, proxies, VPS chains)
  - Domain reputation building
  - SSL certificates
  - Email accounts
  - Sock puppet accounts (social media)
  - Burner phones (for vishing/smishing)
  
- **Legal & Authorization:**
  - Signed contract
  - Authorization letters (for ISP, law enforcement)
  - Emergency contact procedures
  - Get-out-of-jail card
  - Insurance
  
- **Team Coordination:**
  - Roles assignment (lead, operators, support)
  - Communication channels (encrypted)
  - Shift schedules (for long ops)
  - Backup plans
  - Deconfliction procedures

#### **2. Reconnaissance (OSINT):**
- **Passive Reconnaissance:**
  - Company information (LinkedIn, company website)
  - Employee enumeration (LinkedIn, Hunter.io, Phonebook.cz)
  - Email format identification
  - Organizational structure
  - Technology stack (job postings, Wappalyzer, BuiltWith)
  - Third-party relationships (vendors, partners)
  - Breached credentials (HIBP, DeHashed, breach databases)
  - Domain enumeration (subdomains, DNS records)
  - IP ranges (ASN lookups, WHOIS)
  - Cloud assets (AWS, Azure, GCP buckets, storage)
  - GitHub/GitLab (code leaks, secrets, credentials)
  - Shodan, Censys, ZoomEye (external exposure)
  - Google dorking
  - Social media (OSINT on employees)
  - Documents (metadata extraction - FOCA)
  - Wayback Machine (historical data)
  - Certificate Transparency logs
  - Physical locations (Google Maps, satellite imagery)
  
- **Active Reconnaissance (Careful):**
  - Port scanning (slow, deliberate)
  - Service enumeration
  - DNS enumeration
  - Web application fingerprinting
  - Network mapping
  - Noise level: MINIMAL

#### **3. Initial Access (Weaponization & Delivery):**

Multiple attack vectors - choose based on target:

- **Phishing:**
  - **Email Phishing:**
    - Credential harvesting (fake login pages)
    - Malicious attachments (macros, executables, LNK files)
    - Malicious links (drive-by downloads, exploit kits)
    - Business Email Compromise (BEC) simulation
    - Spear phishing (targeted, personalized)
    - Clone phishing (legitimate email modification)
    
  - **Phishing Infrastructure:**
    - Domain setup (typosquatting, homograph attacks)
    - SSL certificates (Let's Encrypt)
    - Email server (SMTP, SPF/DKIM/DMARC spoofing)
    - Hosting (bulletproof, disposable)
    - Credential harvesting page (Evilginx2, Modlishka)
    - GoPhish, King Phisher (phishing frameworks)
    
  - **Advanced Phishing:**
    - OAuth consent phishing
    - QR code phishing
    - Attachment types (macro-enabled docs, ISO, VHD, CHM, HTA)
    - Template injection
    - Living-off-the-land phishing
    - MFA bypass techniques
    
- **Physical Access:**
  - Tailgating/Piggybacking
  - Lock picking (mechanical, electronic)
  - Badge cloning (RFID/NFC)
  - USB drop (Rubber Ducky, Bash Bunny, O.MG Cable)
  - Rogue device planting (Raspberry Pi, WiFi Pineapple)
  - Dumpster diving
  - Shoulder surfing
  - Social engineering (pretexting as vendor, employee, etc.)
  
- **Social Engineering (Non-Phishing):**
  - Vishing (voice phishing via phone calls)
  - Smishing (SMS phishing)
  - Pretexting (fake scenarios)
  - Baiting (USB drives, fake prizes)
  - Quid pro quo (fake IT support)
  - Tailored scenarios based on OSINT
  
- **External Attack Surface:**
  - Public-facing applications (web apps, APIs)
  - VPN vulnerabilities (Pulse, Fortinet, Palo Alto, etc.)
  - Email gateway exploitation
  - Remote Desktop Services (RDP brute force, BlueKeep)
  - Citrix exploitation
  - Exposed management interfaces
  - Cloud misconfigurations
  - Supply chain compromise
  
- **Insider Threat Simulation:**
  - Assumed breach scenario
  - Start with limited internal access
  - Rogue employee simulation
  
- **Wireless:**
  - Evil twin AP
  - Rogue AP deployment
  - WPA2/WPA3 cracking
  - Enterprise wireless bypass

#### **4. Execution & Persistence:**

- **Initial Execution:**
  - Payload execution (reverse shell, implant)
  - Living-off-the-land binaries (LOLBins)
  - PowerShell download cradles
  - Regsvr32.exe, Rundll32.exe, Mshta.exe abuse
  - WMI execution
  - Scheduled task creation
  - Macro execution
  - DLL hijacking
  - COM hijacking
  
- **Establish Persistence:**
  - **Registry Run Keys** (HKLM/HKCU\Software\Microsoft\Windows\CurrentVersion\Run)
  - **Scheduled Tasks** (schtasks, Task Scheduler)
  - **Services** (malicious service creation)
  - **Startup Folder** (shortcuts in startup directory)
  - **WMI Event Subscriptions** (permanent event consumers)
  - **DLL Hijacking** (search order hijacking, phantom DLL)
  - **COM Hijacking** (Component Object Model abuse)
  - **AppInit_DLLs, AppCertDLLs** (DLL injection on process start)
  - **Accessibility Features** (Sticky Keys, Utilman backdoor)
  - **Bootkit/Rootkit** (advanced, kernel-level persistence)
  - **Golden Ticket** (Kerberos TGT forging, long-term AD persistence)
  - **Silver Ticket** (Service ticket forging)
  - **Skeleton Key** (patch LSASS for backdoor password)
  - **DSRM Password** (Directory Services Restore Mode backdoor)
  - **GPO Abuse** (malicious Group Policy for domain-wide persistence)
  - **Account Creation** (local admin, domain user with privileges)
  - **SSH Keys** (Linux persistence)
  - **Cron Jobs** (Linux scheduled tasks)
  - **Profile Scripts** (.bashrc, .profile backdoors)
  - **Cloud Persistence:**
    - IAM backdoors (AWS access keys, Azure service principals)
    - Lambda backdoors
    - Storage bucket backdoors
    - Stolen tokens/credentials

#### **5. Privilege Escalation:**

- **Windows Privilege Escalation:**
  - **Kernel Exploits** (EternalBlue, CVE-based)
  - **Service Misconfigurations:**
    - Unquoted service paths
    - Weak service permissions (SERVICE_CHANGE_CONFIG)
    - Insecure service executables
  - **Registry Permissions** (AutoRuns with weak ACLs)
  - **AlwaysInstallElevated** (MSI installers run as SYSTEM)
  - **Token Manipulation:**
    - Token impersonation
    - SeImpersonatePrivilege abuse (Potato attacks: JuicyPotato, RoguePotato, etc.)
    - SeDebugPrivilege
    - SeBackupPrivilege, SeRestorePrivilege
  - **UAC Bypass** (dozens of techniques)
  - **DLL Hijacking**
  - **Scheduled Tasks** (weak permissions)
  - **Credential Harvesting:**
    - SAM/SYSTEM dump
    - LSASS memory dump (Mimikatz, ProcDump)
    - Credential Manager
    - Saved RDP credentials
    - Browser passwords
    - Configuration files (web.config, unattend.xml)
  - **Group Policy Preferences** (cPassword in SYSVOL)
  - **PrintNightmare** (CVE-2021-34527)
  - **PetitPotam** (coerce authentication)
  
- **Linux Privilege Escalation:**
  - **Kernel Exploits** (DirtyCOW, etc.)
  - **SUID/SGID Binaries** (find / -perm -4000 2>/dev/null)
  - **Sudo Misconfigurations** (sudo -l, CVE-2021-3156)
  - **Cron Jobs** (writable scripts in cron)
  - **Capabilities** (getcap -r / 2>/dev/null)
  - **NFS Shares** (no_root_squash)
  - **Docker Escape** (privileged containers, docker.sock)
  - **Path Injection**
  - **LD_PRELOAD, LD_LIBRARY_PATH**
  - **Writable /etc/passwd, /etc/shadow**
  - **Plaintext Passwords** (config files, history, scripts)
  
- **Active Directory Privilege Escalation:**
  - **Kerberoasting** (request service tickets, crack offline)
  - **AS-REP Roasting** (users without Kerberos pre-auth)
  - **DCSync** (replicate AD data, requires special privileges)
  - **GPP Passwords** (Group Policy Preferences cPassword)
  - **NTLM Relay** (SMB relay, HTTP relay, LDAP relay)
  - **Resource-Based Constrained Delegation** (RBCD abuse)
  - **Unconstrained Delegation** (extract TGTs from memory)
  - **Constrained Delegation** (S4U2Self, S4U2Proxy abuse)
  - **AdminSDHolder** (protected groups manipulation)
  - **LAPS** (Local Administrator Password Solution enumeration/abuse)
  - **Certificate Services Exploitation** (ESC1-ESC8, Certipy)
  - **ADCS Attacks** (certificate templates misconfiguration)
  - **Trust Relationship Abuse** (SID history, inter-domain trust exploitation)
  - **RODC Exploitation** (Read-Only Domain Controller)
  - **Azure AD Connect** (password hash sync extraction)

#### **6. Lateral Movement:**

- **Credential-Based:**
  - **Pass-the-Hash (PtH)** (use NTLM hash without cracking)
  - **Pass-the-Ticket (PtT)** (use Kerberos tickets)
  - **Overpass-the-Hash** (use NTLM to request Kerberos TGT)
  - **Pass-the-Certificate** (user/machine certificates)
  
- **Remote Execution:**
  - **PsExec** (SMB-based remote execution)
  - **WMI** (Windows Management Instrumentation)
  - **WinRM** (Windows Remote Management, PowerShell remoting)
  - **DCOM** (Distributed Component Object Model)
  - **RDP** (Remote Desktop Protocol)
  - **SSH** (Linux lateral movement)
  - **Remote Scheduled Tasks**
  - **Remote Service Creation**
  - **MMC20.Application** (COM-based lateral movement)
  - **ShellWindows, ShellBrowserWindow** (COM objects abuse)
  
- **Tools:**
  - **Impacket Suite** (wmiexec.py, smbexec.py, psexec.py, etc.)
  - **CrackMapExec** (Swiss Army knife for lateral movement)
  - **Evil-WinRM** (WinRM abuse)
  - **Metasploit** (psexec modules, etc.)
  - **Cobalt Strike** (built-in lateral movement)
  - **BloodHound** (AD attack path visualization)
  
- **Living-off-the-Land:**
  - Built-in Windows tools only
  - No custom binaries
  - PowerShell remoting
  - WMI
  - DCOM
  - Scheduled tasks remotely

#### **7. Discovery & Enumeration:**

- **Network Discovery:**
  - Network scanning (ARP, ping sweeps, port scans)
  - Service enumeration
  - Share enumeration (SMB, NFS)
  - Domain enumeration
  
- **Active Directory Enumeration:**
  - **BloodHound** (MUST MASTER - AD attack path mapping)
    - SharpHound (C# ingestor)
    - Neo4j database
    - Cypher queries
    - Attack path identification
    - Shortest path to DA
    - ACL abuse paths
    - Kerberos delegation
  - **PowerView** (PowerShell AD enumeration)
  - **ADRecon** (comprehensive AD recon)
  - **ldapsearch** (LDAP queries)
  - **Active Directory cmdlets** (Get-ADUser, Get-ADComputer, etc.)
  - **Manually:**
    - Domain users, groups, computers
    - Domain controllers
    - Trust relationships
    - Group Policy Objects
    - Password policies
    - Kerberos policy
    - Admin accounts
    - Service accounts
    - High-value targets (file servers, databases, Exchange, etc.)
    
- **Local Discovery:**
  - Running processes
  - Installed software
  - Antivirus/EDR identification
  - Network connections
  - Scheduled tasks
  - Services
  - Local users/groups
  - Privileges
  - Environment variables
  - Firewall rules
  
- **Credential Hunting:**
  - Memory (LSASS, browser processes)
  - Disk (SAM, SYSTEM, NTDS.dit)
  - Registry (stored credentials)
  - Files (config files, scripts, unattend.xml, web.config)
  - Browser saved passwords
  - Credential Manager
  - KeePass databases
  - SSH keys
  - AWS credentials (.aws/credentials)
  - Azure tokens
  
- **Data Discovery:**
  - File shares (interesting files)
  - Databases
  - Email (PST files, Exchange access)
  - SharePoint
  - Confluence, Jira
  - Git repositories
  - Cloud storage (S3, Blob, GCS)

#### **8. Collection & Exfiltration:**

- **Data Collection:**
  - Target identification (PII, intellectual property, credentials, etc.)
  - Screenshot capture
  - Keylogging
  - Clipboard monitoring
  - Audio recording (microphone)
  - Video recording (webcam)
  - Email collection
  - Database dumps
  - File downloads
  - Archive creation (ZIP, RAR with encryption)
  
- **Data Staging:**
  - Compress data
  - Encrypt data (protect from defenders AND prove data is not actually exfiltrated)
  - Stage in temp directory
  - Cleanup after exfiltration
  
- **Exfiltration Techniques:**
  - **HTTPS** (encrypted, blends in)
  - **DNS Tunneling** (dnscat2, iodine)
  - **ICMP Tunneling**
  - **Email** (send as attachments)
  - **Cloud Storage** (Dropbox, Google Drive, OneDrive uploads)
  - **FTP/SFTP**
  - **Physical Media** (USB drives if physical access)
  - **Steganography** (hide data in images, audio)
  - **Out-of-band channels** (cellular modems, WiFi)
  - **Scheduled Tasks** (periodic small exfiltration)
  
- **OPSEC Considerations:**
  - Bandwidth throttling (avoid detection)
  - Timing (non-business hours)
  - Protocol blending (HTTPS to legitimate sites)
  - Encryption (TLS/SSL)
  - Data chunking (small pieces over time)
  - DLP evasion

#### **9. Command & Control (C2):**

**This is CRITICAL - C2 is the lifeline of Red Team operation.**

- **C2 Framework Selection:**
  - **Cobalt Strike** (Industry standard, commercial, $5,900/year)
    - Beacon implant
    - Malleable C2 profiles (traffic customization)
    - Post-exploitation modules
    - Pivoting
    - SOCKS proxy
    - Screenshot, keylogger, etc.
    - Sleep/jitter
    - Staged vs stageless payloads
    - Process injection
    - Lateral movement
    - Extensive documentation
    
  - **Sliver** (Open source, modern, Go-based)
    - Cross-platform (Windows, Linux, macOS)
    - Multiple C2 protocols (HTTP(S), DNS, mTLS, WireGuard)
    - Implant generation
    - Session management
    - Pivoting/port forwarding
    - SOCKS proxy
    - Active development
    
  - **Mythic** (Open source, modular, collaborative)
    - Agent-agnostic framework
    - Multiple agents (Apollo, Athena, Apfell, etc.)
    - Web-based UI
    - Collaborative operations
    - Extensive logging
    - Graph view
    - Task/response model
    
  - **Covenant** (.NET C2 framework)
    - .NET implants (Grunt)
    - GUI interface
    - Task-based
    - Built-in post-exploitation modules
    - Listeners (HTTP, HTTPS, SMB, etc.)
    
  - **Empire/Starkiller** (PowerShell/Python C2)
    - PowerShell Empire (classic)
    - Starkiller (modern GUI)
    - Modular
    - Extensive module library
    - Active community
    
  - **Metasploit Framework** (Classic, versatile)
    - Meterpreter (implant)
    - Extensive modules
    - Post-exploitation
    - Pivoting
    - Well-documented
    - Large community
    
  - **Merlin** (Go-based, HTTP/2)
    - Go agents
    - HTTP/2 и HTTP/3 (QUIC)
    - Cross-platform
    - JA3 fingerprint evasion
    
  - **Havoc** (Modern, open source)
    - Demon implant
    - Teamserver
    - Sleep obfuscation
    - Post-exploitation modules
    
  - **Brute Ratel** (Commercial, EDR evasion focused)
    - Badger implant
    - Advanced evasion
    - Visual Studio profiler integration
    - Supply chain simulation
    
  - **Custom C2** (Ultimate flexibility, high effort)
    - Full control
    - Unique signatures
    - Tailored to target
    - Requires significant development
    
- **C2 Infrastructure:**
  - **Redirectors:**
    - Apache mod_rewrite
    - Nginx reverse proxy
    - Socat
    - CDN (CloudFlare, Azure CDN, AWS CloudFront)
    - Purpose: hide team server IP
    
  - **Domain Fronting** (less viable now, but understand it)
    - Use CDN to hide actual destination
    - Google, Azure, CloudFlare (mostly patched)
    
  - **Domain Categorization:**
    - Age domains (register months in advance)
    - Content (benign website, blog, etc.)
    - SSL certificates
    - Submit to categorization services (BlueCoat, etc.)
    - Goal: categorized as "benign"
    
  - **Infrastructure Compartmentalization:**
    - Phishing infrastructure (separate from C2)
    - Short-lived infrastructure (burn after use)
    - Long-haul infrastructure (persistent C2)
    - Backup infrastructure (redundancy)
    
  - **OPSEC:**
    - No direct connections to team server
    - Kill dates (implants self-destruct)
    - Sleep times (don't beacon at 3am if user works 9-5)
    - Jitter (randomize beacon intervals)
    - Traffic encryption
    - Protocol mimicry (look like legitimate traffic)
    - User-agent randomization
    - Malleable C2 profiles (Cobalt Strike)
    
- **Communication Channels:**
  - **HTTP/HTTPS** (most common, blends in)
  - **DNS** (low bandwidth, good for C2 channel)
  - **SMB Named Pipes** (peer-to-peer, internal only)
  - **TCP** (simple but noisy)
  - **ICMP** (ping-based, unusual but works)
  - **Custom Protocols** (totally custom, hard to detect but hard to build)
  - **Social Media** (Twitter, Telegram, Discord as C2 channel)
  - **Cloud Storage** (Dropbox, Google Drive as dead drop)
  - **Email** (slow but blends in)
  - **WebSockets**
  - **gRPC, HTTP/2, HTTP/3**

#### **10. Defense Evasion:**

**CRITICAL SKILL - This separates Red Team from regular pentesters.**

- **Antivirus/EDR Evasion:**
  - **Signature Evasion:**
    - Obfuscation (code, strings)
    - Packing/crypting
    - Polymorphism (change on each execution)
    - Metamorphism (change code structure)
    - Encoding (Base64, XOR, AES)
    - String encryption
    - API hashing
    - Junk code insertion
    - Code reordering
    - Control flow flattening
    
  - **Behavioral Evasion:**
    - Sandbox detection (sleep, user interaction checks)
    - VM detection (check for VM artifacts)
    - Debugger detection
    - Time-based execution (execute only during work hours)
    - Environment keying (only execute in target environment)
    - Process hollowing
    - Process doppelgänging
    - Reflective DLL injection
    - Module stomping
    - Thread hijacking
    - Fiber execution
    - Callback execution (EnumSystemLocalesA, etc.)
    - Early bird injection
    - Process herpaderping
    
  - **Memory Evasion:**
    - In-memory execution (never touch disk)
    - Fileless malware
    - Living-off-the-land binaries (LOLBins)
    - Direct syscalls (bypass user-mode hooks)
    - NTDLL unhooking
    - Heaven's Gate (WoW64 bypass)
    - Module overloading
    - Sleep obfuscation (encrypt/decrypt memory)
    
  - **EDR-Specific:**
    - **AMSI Bypass** (PowerShell, .NET)
      - AMSI patching (memory)
      - AMSI context manipulation
      - Obfuscation
      - Reflection
      - Downgrade attacks (PowerShell v2)
    - **ETW Patching** (Event Tracing for Windows)
    - **User-Mode Hook Bypass:**
      - Direct syscalls
      - NTDLL unhooking
      - Fresh NTDLL loading
      - Syscall stubs
    - **Kernel Callbacks** (harder to bypass, requires driver or vulnerabilities)
    - **PPL Bypass** (Protected Process Light - LSASS protection)
    - **Credential Guard Bypass**
    
  - **Tools:**
    - Donut (shellcode generation from .NET assemblies)
    - Invoke-Obfuscation (PowerShell obfuscation)
    - ConfuserEx (.NET obfuscation)
    - Veil Framework (payload generation с evasion)
    - Shellter (dynamic shellcode injection)
    - Metasploit encoders (msfvenom)
    - Custom crypters/packers
    
- **Logging Evasion:**
  - Event log clearing (suspicious, not recommended)
  - Event log modification (edit specific events)
  - Sysmon evasion (understand logging rules, avoid triggering)
  - PowerShell logging bypass (ScriptBlock logging, transcription)
  - Command-line logging evasion (obfuscation, living-off-the-land)
  - Network logging evasion (encrypted C2, protocol blending)
  
- **Application Whitelisting Bypass:**
  - **AppLocker Bypass:**
    - Writable paths (C:\Windows\Tasks, C:\Windows\Temp, etc.)
    - Trusted binaries (LOLBins)
    - DLL execution (rundll32.exe)
    - Scripting (PowerShell, JScript, VBScript)
    - Alternate data streams
    - MSI installers
    
  - **WDAC Bypass** (Windows Defender Application Control)
    - Similar to AppLocker
    - More restrictive
    - Exploiting misconfigurations
    - Code signing (if possible)
    
- **Network Defenses Evasion:**
  - **Firewall Evasion:**
    - Port selection (443, 53, 80 - commonly allowed)
    - Protocol tunneling (DNS, ICMP)
    - Fragmentation
    - Proxy-aware implants
    
  - **IDS/IPS Evasion:**
    - Slow scans (avoid rate-based detection)
    - Fragmentation
    - Encoding/encryption
    - Protocol manipulation
    - Signature evasion
    
  - **WAF Bypass:**
    - Obfuscation
    - Encoding (multiple levels)
    - HTTP parameter pollution
    - Chunked encoding
    - Case manipulation
    - Null bytes, special characters
    
  - **DLP Evasion:**
    - Encryption
    - Encoding
    - Steganography
    - Small chunks over time
    - Protocol blending
    - Legitimate cloud services

#### **11. Impact (Demonstrate Objective Achieved):**

- **Proof of Concept:**
  - **Screenshot of crown jewel access** (blurred/redacted sensitive data)
  - **File listing** (show access, don't exfiltrate actual data)
  - **Simulated data exfiltration** (encrypted dummy data)
  - **Domain Admin proof** (whoami /all screenshot)
  - **Access to critical systems** (database, Exchange, file server)
  - **Persistence proof** (backdoor installed, can re-access)
  
- **Flags/Tokens:**
  - Pre-placed flags (agreed with blue team)
  - Collect flags as proof of access
  - Token collection (unique strings in target locations)
  
- **Simulated Impact:**
  - Simulated ransomware (create .txt files, don't encrypt)
  - Simulated data destruction (demonstrate ability, don't execute)
  - Service disruption (show commands, don't execute)
  
- **Documentation:**
  - Detailed timeline
  - Screenshots/videos
  - Command history
  - Evidence of access
  - Artifacts left behind (for blue team to find)
  - TTPs used (MITRE ATT&CK mapping)

#### **12. Reporting & Debrief:**

- **Report Structure:**
  - **Executive Summary** (C-level audience)
    - Objectives
    - Success/failure
    - Key findings
    - Business impact
    - High-level recommendations
    
  - **Technical Report:**
    - Detailed timeline
    - Attack path (start to finish)
    - Techniques used (ATT&CK mapping)
    - Tools used
    - Vulnerabilities exploited
    - Credentials compromised
    - Systems accessed
    - Detection gaps
    - Response effectiveness
    - Screenshots/evidence
    - IOCs (for blue team)
    
  - **Purple Team Findings:**
    - What was detected vs missed
    - Detection timing
    - Response actions
    - Alert quality
    - False positives
    - Gaps in visibility
    - Recommendations for blue team
    
  - **Remediation Recommendations:**
    - Prioritized (Critical, High, Medium, Low)
    - Quick wins
    - Long-term strategic improvements
    - People, process, technology
    - Specific and actionable
    
- **Debrief Sessions:**
  - **Hot Wash** (immediately after engagement)
    - What worked, what didn't
    - Blue team perspective
    - Lessons learned
    
  - **Detailed Debrief:**
    - Technical walkthrough
    - Q&A
    - Blue team feedback
    - Demonstrate techniques (safely)
    
  - **Executive Briefing:**
    - High-level findings
    - Business risk
    - Investment recommendations

## 3. ADVERSARY EMULATION

### 3.1 APT Groups Study

**Understanding real adversaries is CRITICAL for realistic Red Team operations.**

#### **Major APT Groups to Study:**

- **APT28 (Fancy Bear)** - Russian GRU
  - Targets: Government, military, critical infrastructure
  - TTPs: Spear phishing, XAgent/Sofacy malware, credential harvesting
  - Notable: DNC hack, Olympic Destroyer
  
- **APT29 (Cozy Bear)** - Russian SVR
  - Targets: Government, think tanks, research
  - TTPs: Spear phishing, WellMess, CobaltStrike usage, cloud exploitation
  - Notable: SolarWinds supply chain attack
  
- **APT1 (Comment Crew)** - Chinese PLA Unit 61398
  - Targets: Intellectual property theft, Western companies
  - TTPs: Spear phishing, custom malware, long-term persistence
  
- **APT3 (Gothic Panda)** - Chinese MSS
  - Targets: Aerospace, defense, technology
  - TTPs: Strategic web compromises, exploit kits, Pirpi backdoor
  
- **APT10 (MenuPass, Stone Panda)** - Chinese MSS
  - Targets: Managed service providers (MSPs), supply chain
  - TTPs: Cloud hopper campaign, PlugX, Quasar RAT
  
- **APT41 (Double Dragon)** - Chinese, dual motive (espionage + financial)
  - Targets: Gaming, healthcare, telecom, financial
  - TTPs: Supply chain, web shells, CLR stomp, custom malware
  
- **Lazarus Group** - North Korean
  - Targets: Financial (SWIFT), cryptocurrency, media
  - TTPs: WannaCry, Sony Pictures hack, cryptocurrency exchange hacks
  - Unique: Financially motivated state actor
  
- **Kimsuky** - North Korean
  - Targets: South Korea, think tanks, academics
  - TTPs: Spear phishing, credential theft, malicious documents
  
- **Carbanak/FIN7** - Cybercrime (but APT-level sophistication)
  - Targets: Financial institutions, retail (POS systems)
  - TTPs: Carbanak malware, Cobalt Strike, ATM cash-outs
  
- **Turla (Snake, Uroburos)** - Russian FSB
  - Targets: Government, embassies, military
  - TTPs: Watering holes, satellite hijacking for C2, rootkits
  - Notable: Extremely sophisticated, long-term operations
  
- **Equation Group** - NSA (leaked tools)
  - Tools: EternalBlue, DoublePulsar, DanderSpritz framework
  - Study the toolset, not emulate NSA
  
- **MuddyWater** - Iranian
  - Targets: Middle East, telecom, government
  - TTPs: PowerShell-heavy, macro documents, DNS tunneling

#### **How to Study APT Groups:**
- **MITRE ATT&CK APT pages** (each APT has detailed page)
- **Threat intelligence reports:**
  - Mandiant APT reports
  - CrowdStrike Global Threat Reports
  - Kaspersky APT reports
  - Secureworks profiles
  - Palo Alto Unit 42
- **Academic papers**
- **Conference presentations** (Black Hat, DEF CON, etc.)
- **Leaked tools** (understand but don't use in real ops without proper licensing)

### 3.2 Emulation Frameworks

#### **MITRE ATT&CK Navigator:**
- Map APT techniques
- Visualize coverage
- Plan emulation
- https://mitre-attack.github.io/attack-navigator/

#### **Atomic Red Team:**
- Open source (Red Canary)
- Pre-built atomic tests for ATT&CK techniques
- Test detection coverage
- Validate defenses
- GitHub: https://github.com/redcanaryco/atomic-red-team

#### **CALDERA:**
- MITRE's automated adversary emulation platform
- Autonomous red team
- Adversary profiles (APT emulation)
- Plugins (Sandcat agent, Manx, etc.)
- Planning engine (automatically chains techniques)
- GitHub: https://github.com/mitre/caldera

#### **Infection Monkey:**
- Open source breach and attack simulation
- Automated scanning và exploitation
- Lateral movement
- Report generation

#### **Purple Team Tools:**
- Vectr (purple team collaboration platform)
- AttackIQ (commercial breach and attack simulation)
- SafeBreach (automated security validation)

### 3.3 Custom Adversary Profiles

- Define adversary characteristics:
  - Sophistication level
  - Resources (tooling, time, budget)
  - Objectives (espionage, financial, disruption)
  - Risk tolerance (stealthy vs noisy)
  - Preferred TTPs
  - Industry focus
  - Geopolitical motivations

- Build playbook for each profile
- Vary tactics based on profile
- Realistic simulation > maximum damage

## 4. ADVANCED TECHNIQUES

### 4.1 Active Directory Attacks - MASTER THIS

**Active Directory is the crown jewel - most Red Team engagements focus here.**

#### **Enumeration:**
- **BloodHound** (MUST MASTER)
  - SharpHound collection
  - Cypher queries mastery
  - Attack path identification
  - Custom queries
  - Owned principals marking
  - Shortest path to DA
  
- **PowerView** (PowerShell AD enumeration)
  - Domain enumeration
  - Trust relationships
  - ACL enumeration
  - Group membership
  - Kerberos policy
  
- **ADRecon**
- **ldapsearch**
- **rpcclient**
- **enum4linux**

#### **Kerberos Attacks:**
- **Kerberoasting:**
  - Request service tickets (TGS) for SPNs
  - Extract tickets from memory
  - Offline password cracking (Hashcat)
  - Tools: Rubeus, Invoke-Kerberoast, GetUserSPNs.py (Impacket)
  
- **AS-REP Roasting:**
  - Users with "Do not require Kerberos preauthentication"
  - Request AS-REP without pre-auth
  - Offline cracking
  - Tools: Rubeus, GetNPUsers.py (Impacket)
  
- **Golden Ticket:**
  - Forge TGT (Ticket-Granting Ticket)
  - Requires krbtgt hash (NTLM)
  - Long-term persistence (until krbtgt password change)
  - Domain-wide access
  - Tools: Mimikatz, Rubeus
  
- **Silver Ticket:**
  - Forge TGS (Service Ticket)
  - Requires service account hash
  - Access to specific services (CIFS, HTTP, MSSQL, etc.)
  - Less detectable than Golden Ticket
  - Tools: Mimikatz, Rubeus
  
- **Diamond Ticket:**
  - Modified TGT (legitimate TGT modified)
  - Harder to detect than Golden Ticket
  - Requires DC access
  
- **Sapphire Ticket:**
  - Similar to Diamond, different approach
  
- **Bronze Bit (CVE-2020-17049):**
  - S4U2self abuse
  - Forwardable tickets
  
- **Overpass-the-Hash (Pass-the-Key):**
  - Use NTLM hash to request Kerberos TGT
  - Mimikatz, Rubeus

#### **NTLM Attacks:**
- **Pass-the-Hash:**
  - Use NTLM hash directly (no password needed)
  - Tools: Mimikatz, CrackMapExec, Impacket
  
- **NTLM Relay:**
  - Relay NTLM authentication to other services
  - SMB relay (to SMB, LDAP, HTTP, etc.)
  - LDAP relay (escalate privileges, create computer accounts)
  - HTTP relay (to SMB, LDAP)
  - Responder + ntlmrelayx.py (Impacket)
  - mitm6 (DHCPv6 spoofing + NTLM relay)
  - Require SMB signing disabled (or LDAP signing disabled for LDAP relay)
  
- **NTLMv1 Downgrade:**
  - Force NTLMv1 (weaker, easier to crack)
  - Responder, hashcat
  
- **NTLM Coercing:**
  - Force authentication from target
  - PetitPotam (MS-EFSRPC abuse)
  - PrinterBug (MS-RPRN abuse)
  - DFSCoerce
  - Combined with NTLM relay for escalation

#### **Delegation Abuse:**
- **Unconstrained Delegation:**
  - Computers/users allowed to delegate to ANY service
  - Compromise delegation-enabled system
  - Extract TGTs from LSASS memory
  - Printer Bug to coerce DC authentication
  - Tools: Rubeus, Mimikatz
  
- **Constrained Delegation:**
  - Computers/users allowed to delegate to SPECIFIC services
  - S4U2Self (request ticket for ANY user to self)
  - S4U2Proxy (request ticket to allowed service)
  - Protocol transition (if enabled)
  - Tools: Rubeus, Kekeo
  
- **Resource-Based Constrained Delegation (RBCD):**
  - msDS-AllowedToActOnBehalfOfOtherIdentity attribute
  - Create computer account (or compromise existing)
  - Modify target's msDS-AllowedToActOnBehalfOfOtherIdentity
  - Impersonate admin to target
  - Tools: Rubeus, PowerMad, Impacket

#### **AD Certificate Services (AD CS) Attacks:**
- **ESC1-ESC13** (Escalation scenarios)
  - Misconfigured certificate templates
  - Subject Alternative Name (SAN) abuse
  - Any purpose EKU
  - Enrollment agent abuse
  - NTLM relay to AD CS HTTP endpoints
  - Tools: Certify, Certipy
  
- **Certificate Theft:**
  - User/computer certificates
  - Pass-the-Certificate
  - Tools: Certify, Rubeus, Whisker

#### **GPO Attacks:**
- **GPO Abuse for Persistence:**
  - Modify existing GPO (if permissions allow)
  - Create malicious GPO (if DA)
  - Immediate scheduled task
  - Logon script
  - Registry modification
  - Tools: SharpGPOAbuse, PowerSploit
  
- **GPP (Group Policy Preferences) Passwords:**
  - cPassword in SYSVOL (legacy, mostly patched)
  - Get-GPPPassword.ps1

#### **Trust Abuse:**
- **Intra-Forest Trusts:**
  - SID History injection
  - Extra SIDs attack
  
- **Inter-Forest Trusts:**
  - Trust key extraction
  - Golden/Inter-realm TGT
  - Tools: Mimikatz, Rubeus
  
- **Forest Trusts:**
  - Bi-directional trusts
  - External trusts
  - Exploitation depends on trust type

#### **LAPS Abuse:**
- **Local Administrator Password Solution**
- Read LAPS passwords (if permissions allow)
- Tools: LAPSToolkit, CrackMapExec

#### **AdminSDHolder Abuse:**
- Protected groups (Domain Admins, Enterprise Admins, etc.)
- Modify AdminSDHolder ACL for persistence
- Permissions replicated to protected objects every 60 minutes

#### **DCShadow:**
- Register rogue Domain Controller
- Replicate malicious changes (object creation, modification)
- Requires DA or equivalent
- Very low detection (looks like legitimate DC activity)
- Tools: Mimikatz

#### **DCSync:**
- Replicate AD data (password hashes) from DC
- Requires Replicating Directory Changes and Replicating Directory Changes All
- Tools: Mimikatz, Impacket (secretsdump.py)

#### **RODC (Read-Only Domain Controller) Abuse:**
- Credential caching
- Managed password attribute
- Key distribution

#### **Azure AD Integration Attacks:**
- **Azure AD Connect:**
  - Password Hash Synchronization (extract cloud hashes)
  - AADInternals toolkit
  
- **Hybrid Join:**
  - On-prem compromise → cloud access
  - PRT (Primary Refresh Token) theft
  
- **ADFS:**
  - Golden SAML (forge SAML tokens)
  - Token signing certificate theft

### 4.2 Exploit Development Basics

**Not all Red Team operators need to be exploit developers, but understanding is valuable.**

#### **Stack-Based Buffer Overflow:**
- Overwrite return address
- Redirect execution to shellcode
- Bypassing protections (ASLR, DEP, stack canaries)
- Tools: Immunity Debugger, GDB, pwntools, Metasploit pattern_create

#### **Heap-Based Exploits:**
- Heap spraying
- Use-after-free
- Heap overflow

#### **Return-Oriented Programming (ROP):**
- Bypass DEP/NX
- Chain gadgets
- Tools: ropper, ROPgadget

#### **Exploit Mitigation Bypass:**
- **DEP/NX Bypass:** ROP chains, ret2libc
- **ASLR Bypass:** Information leak, partial overwrites, heap spray
- **Stack Canary Bypass:** Leak canary, overwrite with same value, format string bugs

#### **Shellcode Development:**
- Assembly language
- Null-byte avoidance
- Alphanumeric shellcode
- Polymorphic shellcode
- Encoder/decoder stubs
- Msfvenom (Metasploit)

#### **Fuzzing:**
- Find vulnerabilities through automated input
- Coverage-guided fuzzing
- Mutation-based fuzzing
- Generation-based fuzzing
- Tools: AFL, LibFuzzer, Honggfuzz, Boofuzz

### 4.3 Custom Tool Development

**Red Team often requires custom tools:**

#### **Implant/Agent Development:**
- **Features:**
  - C2 communication
  - Command execution
  - File upload/download
  - Screenshot capture
  - Keylogging
  - Process injection
  - Token manipulation
  - Persistence mechanisms
  - Anti-analysis (sandbox detection, debugger detection)
  - Encryption (C2 traffic)
  - Obfuscation (strings, API calls)
  
- **Languages:**
  - C/C++ (full control, low-level)
  - C# (.NET, in-memory execution, easy Windows API access)
  - Go (cross-platform, static binaries, modern)
  - Rust (memory safe, performance)
  - Python (rapid development, but large size)
  
- **Communication:**
  - HTTP/HTTPS
  - DNS
  - SMB named pipes
  - Custom protocols
  
- **Execution:**
  - DLL (rundll32, regsvr32)
  - EXE
  - Shellcode (position-independent)
  - Reflective DLL
  - .NET assembly (in-memory)

#### **Post-Exploitation Modules:**
- Custom scripts for specific tasks
- Credential harvesting
- Data collection
- Persistence
- Privilege escalation
- Lateral movement helpers

#### **Payload Generators:**
- Automate payload creation
- Obfuscation
- Encoding
- Multiple output formats

#### **Phishing Tools:**
- Email sender (with SPF/DKIM/DMARC spoofing)
- Credential harvesting pages
- Link tracking
- Attachment generation

#### **Automation Scripts:**
- Reconnaissance automation
- Vulnerability scanning
- Post-exploitation automation
- Report generation

### 4.4 Container & Cloud Exploitation

#### **Docker Exploitation:**
- Exposed Docker daemon (port 2375/2376)
- Privileged containers (--privileged flag)
- Container escape techniques:
  - Kernel exploits (DirtyCOW, etc.)
  - Exposed docker.sock
  - Capabilities abuse (CAP_SYS_ADMIN, etc.)
  - cgroups release_agent
  - runc vulnerability (CVE-2019-5736)
- Docker API abuse
- Poisoned images

#### **Kubernetes Exploitation:**
- Exposed Kubernetes API (port 6443, 8080)
- Misconfigured RBAC
- Service account token abuse
- Kubelet exploitation (port 10250)
- etcd access (port 2379)
- Dashboard access
- Secrets extraction
- Lateral movement (pod to pod, namespace to namespace)
- Privilege escalation (create privileged pod)
- Container escape (from pod)
- Network policy bypass
- Tools: kubectl, kubeletctl, peirates, kube-hunter

#### **AWS Exploitation:**
- **IAM:**
  - Privilege escalation (multiple paths)
  - Credential theft (access keys, instance profiles)
  - Role assumption abuse
  - AssumeRole chaining
  - Policy manipulation
  
- **EC2:**
  - SSRF to metadata (169.254.169.254)
  - IMDSv1 abuse (vs IMDSv2)
  - Snapshot enumeration
  - User-data secrets
  
- **S3:**
  - Public bucket enumeration
  - Misconfigured bucket policies
  - ACL misconfigurations
  - Bucket takeover (dangling DNS)
  
- **Lambda:**
  - Function enumeration
  - Environment variable secrets
  - IAM role abuse
  - Code injection
  - Backdoor functions
  
- **RDS:**
  - Snapshot access
  - Public databases
  - Default credentials
  
- Tools: Pacu, ScoutSuite, Prowler, CloudMapper, Principal Mapper

#### **Azure Exploitation:**
- **Azure AD:**
  - User enumeration
  - Password spraying
  - Consent phishing
  - OAuth token theft
  - Illicit consent grants
  
- **VMs:**
  - SSRF to metadata (169.254.169.254)
  - Managed identity abuse
  
- **Storage Accounts:**
  - Publicly accessible blobs
  - SAS token abuse
  - Account key exposure
  
- **Service Principals:**
  - Credential theft
  - Privilege escalation
  - Certificate theft
  
- Tools: ROADtools, MicroBurst, PowerZure, Stormspotter, AzureHound

#### **GCP Exploitation:**
- **IAM:**
  - Service account key theft
  - Workload identity abuse
  - Privilege escalation
  
- **Compute Engine:**
  - SSRF to metadata
  - Service account scopes
  - Snapshot access
  
- **Cloud Storage:**
  - Public buckets
  - Misconfigured ACLs
  
- Tools: GCP-IAM-Privilege-Escalation, GCPBucketBrute, ScoutSuite

### 4.5 Social Engineering Advanced

#### **Pretexting:**
- Develop believable scenarios
- Research target thoroughly (OSINT)
- Build rapport
- Elicit information
- Impersonation (vendor, employee, IT support, etc.)

#### **Vishing (Voice Phishing):**
- Phone calls
- Caller ID spoofing
- Voice modulation (male/female, accent)
- Scripting
- Confidence
- Social engineering over phone
- Eliciting credentials
- Tech support scam simulation
- Tools: SpoofCard, burner phones, VoIP

#### **Smishing (SMS Phishing):**
- SMS messages
- Link shorteners
- Credential harvesting via mobile
- Multi-factor auth bypass (SMS interception)
- SIM swapping (advanced, risky)

#### **Physical Social Engineering:**
- Tailgating
- Impersonation (uniform, badge)
- Lock picking
- Badge cloning
- Confidence tricks
- Distraction techniques
- Authority exploitation
- Reciprocity exploitation

#### **Psychological Principles:**
- Authority (people obey authority figures)
- Urgency (create time pressure)
- Scarcity (limited availability)
- Social proof (others are doing it)
- Liking (people say yes to those they like)
- Reciprocity (people feel obligated to return favors)
- Commitment (people honor commitments)

### 4.6 Physical Security

#### **Lock Picking:**
- Pin tumbler locks
- Wafer locks
- Tubular locks
- Padlocks
- Bump keys
- Snap guns
- Practice: transparent locks, progressively harder locks
- Tools: Lock pick sets, tension wrenches, rake picks

#### **Electronic Locks:**
- RFID/NFC badge cloning (Proxmark3)
- Magnetic stripe cloning
- Keypad bypass (default codes, wear patterns, thermal imaging)
- Biometric bypass (photos for facial recognition, lifted fingerprints)

#### **Physical Penetration:**
- Reconnaissance (Google Maps, physical observation)
- Entry methods (tailgating, impersonation, lock picking, badge cloning)
- Maintaining access (prop doors, disable alarms)
- Exfiltration (data, physical items)
- Covering tracks
- Legal considerations (trespassing is illegal - have proper authorization)

#### **Rogue Device Deployment:**
- **Devices:**
  - Raspberry Pi (full computer, WiFi, persistence)
  - WiFi Pineapple (rogue AP, MITM)
  - Bash Bunny (USB attack platform, rapid payload execution)
  - USB Rubber Ducky (keystroke injection)
  - O.MG Cable (malicious cable, looks legitimate)
  - LAN Turtle (network implant)
  - Packet Squirrel (man-in-the-middle device)
  
- **Placement:**
  - Behind monitors, inside dropped ceiling, under desks
  - Inside computer case (if access)
  - Network closets
  - Disguise (fake charger, mouse, etc.)
  
- **Persistence:**
  - 4G/5G cellular connectivity
  - WiFi backdoor
  - Scheduled callbacks
  - Auto-start on boot
  - Hide in plain sight

### 4.7 Supply Chain Attacks

#### **Software Supply Chain:**
- Compromise developer tools
- Poison package repositories (npm, PyPI, RubyGems, etc.)
- Dependency confusion
- Typosquatting (similar package names)
- Malicious updates
- Code signing certificate theft
- Build system compromise (SolarWinds-style)

#### **Hardware Supply Chain:**
- Interdiction (intercept shipments, implant hardware)
- Firmware implants
- Malicious USB devices
- Pre-installed malware

#### **Third-Party/Vendor Compromise:**
- MSP (Managed Service Provider) compromise
- Cloud provider compromise
- SaaS provider compromise
- Access via trusted third party

## 5. OPERATIONAL SECURITY (OPSEC)

### 5.1 OPSEC Principles

**OPSEC is what separates successful Red Team from detected/failed Red Team.**

#### **Need to Know:**
- Compartmentalize information
- Team members only know their part
- Minimize information sharing

#### **Minimize Footprint:**
- Leave minimal traces
- Clean up after yourself
- Remove tools, logs, artifacts
- But: in exercise, leave some artifacts for blue team to find (agreed upon)

#### **Operational Discipline:**
- Follow procedures
- Don't deviate from plan without approval
- Document everything (for post-engagement)
- Stay in character (if doing adversary emulation)

#### **Communication Security:**
- Encrypted communications (Signal, Wire, PGP email)
- Code words
- No sensitive info over insecure channels
- Assume all comms are monitored

#### **Infrastructure Security:**
- No reuse of infrastructure across engagements
- Burn infrastructure after engagement
- Compartmentalize (phishing separate from C2)
- Use VPNs, proxies, redirectors
- Monitor infrastructure for blue team activity

### 5.2 Anonymity & Attribution Avoidance

#### **Network Anonymity:**
- **VPN chains:**
  - Multiple VPNs in series
  - Ideally different jurisdictions
  - No-log VPN providers
  
- **Tor:**
  - Onion routing
  - Hidden services
  - Combine with VPN (VPN → Tor or Tor → VPN)
  
- **Proxy chains:**
  - SOCKS proxies
  - HTTP proxies
  - SSH tunnels
  
- **Commercial VPS:**
  - AWS, Azure, GCP, DigitalOcean, Linode, Vultr
  - Bulletproof hosting (for persistence, but risky)
  - Pay with cryptocurrency (for anonymity, but not for legitimate Red Team)
  
- **Residential Proxies:**
  - Look like home users
  - Harder to block
  - Expensive

#### **Identity Management:**
- **Sock Puppet Accounts:**
  - Fake social media profiles
  - Aged accounts (created months/years prior)
  - Believable activity
  - Profile pictures (AI-generated faces - thispersondoesnotexist.com)
  - Consistent persona
  
- **Email Accounts:**
  - Disposable (Guerrilla Mail, TempMail)
  - Long-term (Gmail, Outlook with anonymity measures)
  - Domain-based (for phishing campaigns)
  
- **Phone Numbers:**
  - Burner phones (for vishing/smishing)
  - VoIP numbers (Google Voice, Skype)
  - SMS receiving services (for account creation)

#### **Metadata Scrubbing:**
- Remove metadata from documents (EXIF, author, etc.)
- Tools: MAT2, ExifTool, metadata-cleaner
- Check before sending phishing docs

#### **Digital Fingerprinting Avoidance:**
- **Browser Fingerprinting:**
  - User-agent randomization
  - Canvas fingerprinting protection
  - WebRTC leaks (disable)
  - Timezone spoofing
  - Language spoofing
  - Tools: Tor Browser, Brave, Firefox with privacy extensions
  
- **TLS Fingerprinting:**
  - JA3/JA3S fingerprints (TLS client/server fingerprints)
  - Mimic legitimate clients (browsers, applications)
  - Malleable C2 profiles (Cobalt Strike)
  
- **SSH Fingerprinting:**
  - Change SSH client string
  - Key algorithms
  
- **Network Behavior:**
  - Mimic legitimate traffic patterns
  - Beaconing with jitter
  - Sleep during non-working hours (if applicable)
  - Data transfer rate limits

### 5.3 Anti-Forensics

#### **Log Manipulation:**
- **Windows Event Log:**
  - Clearing (too obvious, not recommended)
  - Selective deletion (specific event IDs)
  - Event log service manipulation
  - Log size limits (overwrite quickly)
  
- **Linux Logs:**
  - /var/log/ manipulation
  - Bash history clearing (history -c, rm .bash_history)
  - utmp/wtmp/btmp (login records)
  - Timestamp manipulation (touch -t)
  
- **Application Logs:**
  - Web server logs (Apache, Nginx, IIS)
  - Database logs
  - Application-specific logs

#### **Timestomping:**
- Modify file timestamps (MAC times)
- Match timestamps to legitimate files
- Tools: timestomp (Metasploit), touch (Linux), PowerShell

#### **Secure Deletion:**
- Overwrite file data (not just delete)
- Tools: sdelete (Windows), shred (Linux), secure-delete
- SSD consideration (TRIM, wear leveling makes secure deletion hard)

#### **Memory-Only Execution:**
- Fileless malware
- Load payloads into memory
- No disk artifacts
- Process injection
- Reflective DLL loading
- In-memory .NET execution

#### **Living-off-the-Land:**
- Use built-in tools (no custom binaries)
- PowerShell, WMI, WMIC, certutil, bitsadmin, etc.
- Harder to detect (legitimate tools)
- Blends in with normal activity

#### **Encryption:**
- Encrypt payloads at rest
- Encrypt C2 communication
- Encrypted archives (for data staging)
- Full disk encryption (for Red Team workstations)

### 5.4 Covert Channels

#### **DNS Tunneling:**
- Exfiltrate data via DNS queries
- C2 over DNS
- Tools: dnscat2, iodine, dns2tcp
- Slow but works in restricted environments

#### **ICMP Tunneling:**
- Exfiltrate data via ICMP (ping) packets
- Tools: ptunnel, icmptunnel
- Often allowed through firewalls

#### **Steganography:**
- Hide data in images, audio, video
- Tools: steghide, outguess, openstego
- Exfiltrate data hidden in media files
- Upload to social media, file sharing

#### **HTTP(S) in Legitimate Traffic:**
- C2 traffic disguised as legitimate web browsing
- User-agents (mimic browsers)
- Referer headers
- Cookie structures
- Domains (CDNs, popular sites)
- Domain fronting (when available)

## 6. TOOLS & FRAMEWORKS

### 6.1 Essential Red Team Tools

#### **Reconnaissance:**
- **theHarvester** (email/subdomain/name enumeration)
- **Amass** (subdomain enumeration)
- **Subfinder**
- **Recon-ng** (OSINT framework)
- **Maltego** (link analysis, GUI)
- **SpiderFoot** (automated OSINT)
- **FOCA** (metadata extraction)
- **Shodan** (Internet-wide scanning)
- **Censys**
- **Hunter.io** (email enumeration)
- **LinkedIn scraping tools**

#### **Initial Access:**
- **Phishing:**
  - GoPhish (phishing framework)
  - King Phisher
  - Social-Engineer Toolkit (SET)
  - Evilginx2 (reverse proxy phishing, MFA bypass)
  - Modlishka (reverse proxy phishing)
  
- **Payload Generation:**
  - Msfvenom (Metasploit payload generator)
  - Veil Framework (AV evasion payloads)
  - Phantom-Evasion
  - Shellter (dynamic shellcode injection)
  - Donut (shellcode from .NET assemblies/PE files)
  
- **Exploit Frameworks:**
  - Metasploit Framework
  - ExploitDB
  - Exploit Pack
  - CANVAS (commercial)
  - Core Impact (commercial)

#### **Post-Exploitation:**
- **Windows:**
  - **Mimikatz** (credential extraction, token manipulation, Kerberos attacks)
  - **Rubeus** (Kerberos attacks, .NET)
  - **Certify** (AD CS attacks)
  - **Whisker** (shadow credentials)
  - **SharpHound** (BloodHound collector)
  - **PowerView** (AD enumeration, PowerShell)
  - **PowerUp** (privilege escalation enumeration)
  - **Seatbelt** (host enumeration, .NET)
  - **SharpUp** (privilege escalation checks, .NET)
  - **WinPEAS** (Windows privilege escalation)
  - **Invoke-TheHash** (pass-the-hash tools, PowerShell)
  
- **Linux:**
  - **LinPEAS** (Linux privilege escalation)
  - **linuxprivchecker**
  - **GTFOBins** (privilege escalation via binaries)
  - **PEASS-ng** (privilege escalation suite)
  
- **Multi-Platform:**
  - **BloodHound** (AD attack path analysis)
  - **CrackMapExec** (network pentesting Swiss Army knife)
  - **Impacket** (Python network protocols library, essential)
  - **Evil-WinRM** (WinRM shell)
  - **Chisel** (fast TCP/UDP tunnel over HTTP)
  - **Proxychains** (SOCKS proxy chains)
  - **ligolo-ng** (reverse tunneling)

#### **C2 Frameworks (covered earlier):**
- Cobalt Strike (commercial, $5,900/year)
- Sliver (open source)
- Mythic (open source)
- Covenant (.NET C2)
- Empire/Starkiller (PowerShell/Python)
- Metasploit Framework (classic)
- Merlin (Go, HTTP/2)
- Havoc (modern, open source)
- Brute Ratel (commercial, EDR evasion)

#### **Lateral Movement:**
- **Impacket Suite** (psexec.py, wmiexec.py, smbexec.py, dcomexec.py, atexec.py)
- **CrackMapExec** (cme smb, cme winrm, cme ssh, etc.)
- **Evil-WinRM**
- **PsExec** (Sysinternals, or Metasploit module)
- Built-in Windows tools (PowerShell remoting, WMI, DCOM)

#### **Privilege Escalation:**
- **Windows:**
  - Potato family (JuicyPotato, RoguePotato, PrintSpoofer, etc.)
  - PowerUp, SharpUp, WinPEAS, Seatbelt
  - Exploit Suggester (Windows-Exploit-Suggester, WES-NG)
  
- **Linux:**
  - LinPEAS, linuxprivchecker
  - Linux Exploit Suggester
  - GTFOBins (manual enumeration)
  - pspy (process monitoring without root)

#### **Credential Harvesting:**
- **Mimikatz** (the classic)
- **LaZagne** (retrieve passwords from various applications)
- **SharpDPAPI** (DPAPI credential extraction)
- **KeeThief** (KeePass database credential extraction from memory)
- **Browser credential extractors** (SharpChrome, SharpEdge, etc.)
- **lsassy** (remote LSASS dump and parsing)
- **pypykatz** (Python Mimikatz implementation)
- **Covenant built-in modules**
- **Procdump** (LSASS dump, Microsoft Sysinternals)

#### **Active Directory:**
- **BloodHound + SharpHound**
- **PowerView** (classic PowerShell AD enum)
- **ADRecon**
- **Rubeus** (Kerberos attacks)
- **Certify, Certipy** (AD CS attacks)
- **Whisker** (shadow credentials)
- **PowerMad** (computer account creation)
- **Invoke-TheHash** (pass-the-hash)
- **Impacket AD tools** (GetUserSPNs.py, GetNPUsers.py, secretsdump.py, etc.)
- **ADExplorer** (Sysinternals, offline AD browser)
- **PingCastle** (AD security audit)

#### **Network Tools:**
- **Nmap** (port scanning, service enumeration)
- **Masscan** (fast port scanner)
- **Responder** (LLMNR/NBT-NS poisoning, NTLM relay)
- **mitm6** (DHCPv6 spoofing + NTLM relay)
- **Bettercap** (MITM framework)
- **Wireshark** (packet analysis)
- **tcpdump** (packet capture)
- **Chisel, ligolo-ng** (tunneling)
- **Proxychains, proxychains-ng** (proxy chains)
- **SSHuttle** (VPN over SSH)

#### **Password Attacks:**
- **Hashcat** (GPU password cracking, THE BEST)
- **John the Ripper** (CPU password cracking)
- **Hydra** (network service brute force)
- **Medusa** (network service brute force)
- **CrackMapExec** (password spraying)
- **Kerbrute** (Kerberos username enumeration, password spraying)
- **Patator** (multi-purpose brute forcer)
- **Crowbar** (RDP, VNC, OpenVPN brute force)

#### **Web Application:**
- **Burp Suite Professional**
- **OWASP ZAP**
- **SQLMap** (SQL injection)
- **Commix** (command injection)
- **XSStrike** (XSS detection)
- **Nikto** (web server scanner)
- **Gobuster, ffuf, feroxbuster** (directory brute forcing)
- **Wfuzz** (web fuzzer)
- **Nuclei** (template-based vulnerability scanner)

#### **Cloud:**
- **AWS:**
  - Pacu (AWS exploitation framework)
  - ScoutSuite, Prowler, CloudSploit (auditing)
  - CloudMapper (visualization)
  - WeirdAAL, Endgame (offensive tools)
  - AWS CLI (official)
  
- **Azure:**
  - ROADtools (Azure AD enumeration)
  - MicroBurst (Azure security assessment)
  - PowerZure (PowerShell Azure exploitation)
  - Stormspotter (graph visualization)
  - AzureHound (BloodHound for Azure)
  - Azure CLI (official)
  
- **GCP:**
  - GCP-IAM-Privilege-Escalation
  - GCPBucketBrute
  - ScoutSuite
  - gcloud CLI (official)
  
- **Kubernetes:**
  - kubectl (official)
  - kubeletctl (kubelet exploitation)
  - kube-hunter (vulnerability scanning)
  - peirates (Kubernetes penetration testing)

#### **Mobile:**
- **Android:**
  - ADB (Android Debug Bridge)
  - Frida (dynamic instrumentation)
  - Objection (Frida-based runtime mobile exploration)
  - apktool (APK decompilation)
  - jadx (dex to Java decompiler)
  - MobSF (automated analysis)
  
- **iOS:**
  - Frida
  - Objection
  - SSL Kill Switch (SSL pinning bypass)
  - Cycript
  - class-dump
  - Hopper Disassembler

### 6.2 Automation & Orchestration

#### **Ansible:**
- Automate infrastructure setup
- Deploy C2 infrastructure
- Configure redirectors
- Manage multiple servers
- Playbooks for repeatable setups

#### **Terraform:**
- Infrastructure as Code
- Cloud infrastructure deployment (AWS, Azure, GCP)
- Automated setup/teardown
- Version control infrastructure

#### **Docker:**
- Containerize tools
- Isolated testing environments
- Easy deployment
- Dockerfiles for tools

#### **Custom Scripts:**
- Python automation scripts
- Bash scripts
- PowerShell scripts
- Automate reconnaissance, exploitation, post-exploitation
- Chain tools together
- Custom workflows

### 6.3 Evasion-Focused Tools

#### **AMSI Bypass:**
- **AMSITrigger** (identify AMSI triggers in scripts)
- **Invoke-Obfuscation** (PowerShell obfuscation)
- Reflection-based AMSI bypass
- Memory patching techniques

#### **Obfuscation:**
- **Invoke-Obfuscation** (PowerShell)
- **ConfuserEx** (.NET obfuscation)
- **Obfuscar** (.NET)
- **PyArmor** (Python)
- **JavaScript obfuscators**
- **Donut** (shellcode obfuscation)

#### **Packing/Crypting:**
- **UPX** (executable packer, but heavily signatured)
- **Themida** (commercial packer/protector)
- **VMProtect** (commercial virtualizer)
- **Enigma Protector**
- **Custom packers** (best for evasion)

#### **In-Memory Execution:**
- **Donut** (PE/assembly to shellcode)
- **pe_to_shellcode**
- **Reflective DLL Injection** (ReflectiveDLLInjection)
- **sRDI** (shellcode Reflective DLL Injection)
- **.NET in-memory execution** (Assembly.Load)

#### **Process Injection:**
- **Classic DLL Injection**
- **Reflective DLL Injection**
- **Process Hollowing** (RunPE)
- **Process Doppelgänging**
- **APC Injection** (Asynchronous Procedure Call)
- **Thread Hijacking**
- **Early Bird Injection**
- **Atom Bombing**
- **ALPC Injection**
- **Extra Window Memory Injection**
- Tools: SharpBlock, Bleak (Python), DInjector

## 7. CERTIFICATIONS

### 7.1 Red Team Specific

- **CRTO (Certified Red Team Operator)** - Zero Point Security
  - Practical, hands-on
  - C2 (Cobalt Strike focus)
  - Active Directory attacks
  - Evasion techniques
  - 48-hour practical exam
  - Highly recommended
  
- **CRTP (Certified Red Team Professional)** - Pentester Academy
  - Active Directory focus
  - Practical labs
  - 24-hour exam
  
- **CRTL (Certified Red Team Lead)** - Zero Point Security
  - Advanced CRTO
  - Leading engagements
  - Advanced tradecraft
  
- **CARTP (Certified Azure Red Team Professional)** - Pentester Academy
  - Azure AD attacks
  - Azure exploitation
  
- **GCPN (GIAC Cloud Penetration Tester)** - SANS
  - Cloud penetration testing (AWS, Azure, GCP)
  - SEC541 course

### 7.2 Penetration Testing (Prerequisites)

- **OSCP** (Offensive Security Certified Professional) - MANDATORY
  - PWK course
  - 24-hour exam (compromise machines, write report)
  - Hands-on, practical
  - Industry standard
  - Entry barrier to Red Team
  
- **OSEP** (Offensive Security Experienced Penetration Tester)
  - Advanced exploitation
  - Evasion techniques
  - 48-hour exam
  
- **OSED** (Offensive Security Exploit Developer)
  - Exploit development focus
  - Assembly, shellcode, ROP
  - 48-hour exam
  
- **OSWE** (Offensive Security Web Expert)
  - Advanced web application exploitation
  - White-box testing
  - 48-hour exam
  
- **OSCE³** (Offensive Security Certified Expert)
  - Combination of OSEP, OSED, OSWE
  - Demonstrates mastery

### 7.3 Other Valuable Certifications

- **PNPT** (Practical Network Penetration Tester) - TCM Security
  - Affordable
  - Practical
  - Active Directory focus
  - 5-day practical exam
  
- **eCPTX** (eLearnSecurity Certified Penetration Tester eXtreme)
  - Advanced penetration testing
  - Practical exam
  
- **CEH** (Certified Ethical Hacker) - EC-Council
  - Broad coverage
  - Multiple choice exam (less practical)
  - Sometimes required by employers/government
  
- **GXPN** (GIAC Exploit Researcher and Advanced Penetration Tester) - SANS
  - Exploit development
  - Advanced techniques
  - SEC660 course
  
- **GPEN** (GIAC Penetration Tester) - SANS
  - Penetration testing fundamentals
  - SEC560 course
  
- **GWAPT** (GIAC Web Application Penetration Tester) - SANS
  - Web application security
  - SEC542 course

### 7.4 Specialized

- **Certified Kubernetes Security Specialist (CKS)**
  - Kubernetes security
  - Practical exam
  
- **GMOB** (GIAC Mobile Device Security Analyst) - SANS
  - Mobile security
  - SEC575 course
  
- **Cobalt Strike Certified Operator**
  - Official Cobalt Strike training
  - C2 operations
  
- **Cloud Certifications:**
  - AWS Certified Security - Specialty
  - Azure Security Engineer Associate
  - GCP Professional Cloud Security Engineer

## 8. HANDS-ON PRACTICE

### 8.1 Practice Labs

#### **Beginner:**
- **Metasploitable 2/3** (intentionally vulnerable Linux)
- **DVWA** (Damn Vulnerable Web Application)
- **WebGoat** (OWASP)
- **VulnHub** (vulnerable VMs)
- **TryHackMe** (guided paths, red team path)
- **HackTheBox** (starting point machines)

#### **Intermediate:**
- **HackTheBox** (easy/medium machines)
- **PG Practice** (Offensive Security Proving Grounds)
- **TryHackMe** (red team paths, advanced rooms)
- **RangeForce** (cloud-based labs)
- **CyberSecLabs**

#### **Advanced:**
- **HackTheBox Pro Labs:**
  - Dante (penetration testing)
  - RastaLabs (Active Directory, Red Team)
  - Offshore (Advanced penetration testing)
  - APTLabs (APT simulation)
  - Cybernetics (OT/ICS)
  
- **PG Practice** (harder machines)
- **Pentester Academy Labs:**
  - Active Directory labs (CRTP, CRTE)
  - Red Team labs
  - Azure AD labs
  
- **AlteredSecurity Labs:**
  - Active Directory labs
  - Azure AD labs
  
- **GIAC labs** (with SANS courses)

#### **Red Team Specific:**
- **Zero Point Security Labs:**
  - CRTO labs (Cobalt Strike, AD, evasion)
  - CRTL labs (advanced Red Team)
  
- **SpecterOps Adversary Tactics:**
  - Course + labs (Active Directory, Azure AD)
  
- **Sektor7 Courses:**
  - Malware development
  - Evasion techniques
  - Red Team Development
  
- **MalDev Academy:**
  - Malware development training

### 8.2 Home Lab Setup

#### **Virtualization:**
- VMware Workstation Pro / VMware Fusion (Mac)
- VirtualBox (free)
- Hyper-V (Windows Pro)
- Proxmox (bare-metal hypervisor, free)

#### **Lab Components:**
- **Attacking Machine:**
  - Kali Linux (with all tools)
  - Custom Kali build (with additional tools)
  - Windows attacker VM (for Windows-based tools)
  
- **Target Network:**
  - **Active Directory Lab (CRITICAL):**
    - Domain Controller (Windows Server 2019/2022)
    - 2-3 member servers (file server, web server, database)
    - 3-5 workstations (Windows 10/11)
    - Varied configurations (misconfigurations intentional)
    - Users, groups, GPOs, trusts (multi-domain forest optional)
    - Vulnerable configurations for practice
    
  - **Linux Targets:**
    - Web server (Apache, Nginx)
    - Database server (MySQL, PostgreSQL)
    - SSH server
    - Vulnerable Linux VMs (from VulnHub)
    
  - **Web Applications:**
    - DVWA, WebGoat, Juice Shop, etc.
    - Custom vulnerable web apps
    
  - **Cloud Lab:**
    - AWS free tier account
    - Azure free account
    - GCP free tier account
    - Vulnerable cloud configurations (CloudGoat, AWSGoat, etc.)

- **Blue Team Components (for Purple Team practice):**
  - SIEM (Splunk free, ELK, Wazuh)
  - Sysmon (on Windows targets)
  - Logging configured
  - EDR simulator (or real EDR in home lab)

#### **Network Setup:**
- Isolated networks (NAT or Host-only)
- Firewall rules (simulate real environment)
- VPN between networks (for pivoting practice)
- Snapshots (revert after practice)

#### **Automation:**
- Terraform for cloud lab
- Ansible for configuration
- Vagrant for VM provisioning
- Scripts for quick lab setup/teardown

### 8.3 Capture The Flag (CTF)

- **Red Team CTFs:**
  - DEF CON CTF (elite level)
  - CCDCX (national collegiate cyber defense competition - red team side)
  - Various Adversary Village CTFs
  
- **General CTFs (with red team relevance):**
  - HackTheBox (year-round, Pro Labs)
  - TryHackMe CTF events
  - SANS Holiday Hack Challenge
  - PicoCTF (beginner-friendly)
  - CTFtime.org (calendar of CTFs)

### 8.4 Bug Bounty (for skill sharpening)

- **Platforms:**
  - HackerOne
  - Bugcrowd
  - Intigriti
  - YesWeHack
  - Synack (invite-only, red team focus)
  
- **Note:** Bug bounty is NOT Red Team, but sharpens skills:
  - Reconnaissance
  - Creative exploitation
  - Report writing
  - Real-world targets
  - But: no C2, no lateral movement, no persistence (usually)

### 8.5 Contribution & Research

- **Open Source Tool Development:**
  - Create tools
  - Contribute to existing projects (Impacket, BloodHound, etc.)
  - GitHub portfolio
  
- **Blog Writing:**
  - Write-ups
  - Technique explanations
  - Tool tutorials
  - Research findings
  
- **Conference Speaking:**
  - BSides (local, beginner-friendly)
  - DEF CON (villages)
  - Black Hat (if you have serious research)
  - Regional cons

## 9. CAREER PATH & SALARY

### 9.1 Entry (Transition from Pentesting)

- **Junior Penetration Tester → Red Team Operator:**
  - Requires OSCP + strong AD skills
  - 2-3 years pentesting experience minimum
  - CRTO or similar helpful
  - Salary: $90k-$120k (entry to Red Team)

### 9.2 Mid Level

- **Red Team Operator:**
  - 3-5 years offensive security experience
  - OSCP, CRTO, OSEP recommended
  - Strong AD attack skills
  - C2 proficiency
  - Custom tool development
  - Salary: $130k-$180k
  
- **Senior Penetration Tester (Red Team focus):**
  - Similar to Red Team Operator
  - Salary: $120k-$170k

### 9.3 Senior Level

- **Senior Red Team Operator:**
  - 5-7 years offensive security
  - Multiple advanced certs (OSEP, OSED, CRTO, CRTP, etc.)
  - Expertise in AD, cloud, evasion
  - Custom tool/implant development
  - Adversary emulation mastery
  - Mentoring junior operators
  - Salary: $180k-$240k
  
- **Red Team Lead:**
  - Team leadership (3-5 operators)
  - Engagement planning
  - Client communication
  - Report writing
  - Tool/tradecraft development
  - Salary: $190k-$260k

### 9.4 Expert/Leadership

- **Principal Red Team Operator:**
  - 10+ years offensive security
  - Industry recognition (conference talks, tools, research)
  - Advanced tradecraft development
  - Zero-day capability
  - Salary: $220k-$300k+
  
- **Red Team Manager:**
  - Manage Red Team (5-15 people)
  - Program development
  - Budget
  - Strategic planning
  - Executive communication
  - Salary: $200k-$280k
  
- **Director of Red Team / Offensive Security:**
  - Enterprise-level program
  - Multiple teams
  - Cross-functional collaboration (Purple team, threat intel, etc.)
  - Salary: $250k-$350k+

### 9.5 Specialized Paths

- **Exploit Developer:**
  - Focus on exploit development
  - Zero-day research
  - Salary: $180k-$300k+
  
- **Malware Developer (Red Team):**
  - Custom implant/tool development
  - C2 framework development
  - Evasion techniques
  - Salary: $170k-$280k
  
- **Purple Team Lead:**
  - Bridge Red and Blue teams
  - Detection engineering
  - Adversary emulation
  - Salary: $180k-$250k

- **Adversary Simulation Specialist:**
  - APT emulation
  - Threat intelligence integration
  - Realistic scenarios
  - Salary: $160k-$240k

### 9.6 Industries

- **Consulting Firms:**
  - Big 4 (Deloitte, PwC, EY, KPMG)
  - Specialized security consultancies (Mandiant/Google Cloud, CrowdStrike Services, etc.)
  - High variety, travel, multiple clients
  - Salary: Mid to high range
  
- **Financial Services:**
  - Banks, fintech, trading firms
  - High security requirements
  - Advanced threats
  - Salary: Very high (especially trading firms)
  
- **Big Tech:**
  - Google, Microsoft, Amazon, Meta, Apple
  - Large-scale environments
  - Advanced threats
  - Cutting-edge tech
  - Salary: Top tier (+ stock)
  
- **Defense/Government:**
  - DOD, Intelligence agencies, federal contractors
  - Clearance required (TS/SCI often)
  - Nation-state adversary simulation
  - Salary: Mid-high + benefits + stability
  
- **Offensive Security Vendors:**
  - Companies providing Red Team services
  - Tool development companies
  - Salary: Mid-high range
  
- **In-House (Corporate):**
  - Large enterprises with internal Red Team
  - Single organization focus
  - Deep understanding of environment
  - Salary: Mid-high range

---

## LỘ TRÌNH HỌC ĐỀ XUẤT (36-48 THÁNG)

### **Năm 1: Penetration Testing Foundation (Tháng 1-12)**
- Tháng 1-3: Networking, Linux, Windows basics
- Tháng 4-6: Web application pentesting (OWASP Top 10 mastery)
- Tháng 7-9: Network pentesting (Nmap, Metasploit, post-exploitation)
- Tháng 10-12: **OSCP preparation và certification** (MANDATORY)

### **Năm 2: Active Directory & Advanced Pentesting (Tháng 13-24)**
- Tháng 13-15: Active Directory deep dive (enumeration, Kerberos, NTLM)
- Tháng 16-18: AD attacks (Kerberoasting, AS-REP, delegation, ACLs, etc.)
- Tháng 19-21: Privilege escalation mastery (Windows + Linux)
- Tháng 22-24: **CRTO or CRTP certification**, lateral movement mastery

### **Năm 3: Red Team Tradecraft (Tháng 25-36)**
- Tháng 25-27: C2 frameworks (Cobalt Strike, Sliver, custom)
- Tháng 28-30: Evasion techniques (AV/EDR bypass, AMSI, obfuscation)
- Tháng 31-33: Custom tool development (implants, post-ex modules)
- Tháng 34-36: Adversary emulation, OPSEC, **OSEP or advanced cert**

### **Năm 4: Specialization & Mastery (Tháng 37-48)**
- Tháng 37-39: Cloud exploitation (AWS, Azure, GCP)
- Tháng 40-42: Advanced topics (exploit dev, supply chain, physical)
- Tháng 43-45: Red Team operations (full engagements in labs)
- Tháng 46-48: Leadership, reporting, **industry recognition**

---

## TIPS ĐỂ THÀNH CÔNG

### Daily Practice
- **Lab time EVERY DAY** (2-4 hours minimum )
- Active Directory attacks (practice until muscle memory)
- C2 operations (become fluent in your framework)
- Evasion techniques (staying ahead of defenses)
- Read write-ups (learn from others)
- Follow Red Team Twitter (latest techniques, tools)

### Build Portfolio
- **GitHub:**
  - Custom tools (scripts, implants, modules)
  - Contributions to open source Red Team tools
  - Well-documented code
  
- **Blog:**
  - Red Team write-ups (sanitized)
  - Technique deep-dives
  - Tool tutorials
  - Adversary emulation research
  
- **Certifications:**
  - OSCP (minimum, non-negotiable)
  - CRTO/CRTP (Red Team specific)
  - OSEP (advanced)
  - Display prominently

### Networking
- **Twitter Red Team community:**
  - @harmj0y, @tifkin_, @Haus3c, @_RastaMouse, @0xdf_, @_xpn_, etc.
  - Follow operators, researchers, tool developers
  
- **Conferences:**
  - DEF CON (Red Team Village, Adversary Village)
  - Wild West Hackin' Fest
  - BSides (local, networking)
  - Present if possible (build reputation)
  
- **Discord/Slack:**
  - BloodHound Slack
  - Red Team communities
  - Tool-specific (Cobalt Strike, Sliver, etc.)

### Specialization
- **Pick 2-3 deep specializations:**
  - Active Directory (almost mandatory)
  - Cloud (AWS/Azure/GCP)
  - Evasion/AV bypass
  - Exploit development
  - C2 development
  - Physical security
  - Social engineering
  
- **Become THE expert** in your specialization
- **Publish research**, tools, techniques
- **Conference talks** on your specialization

### Stay Current
- **Tools:**
  - New C2 frameworks
  - Evasion techniques (defenses evolve, so must offense)
  - AD attack techniques (new CVEs, techniques)
  - Cloud exploitation
  
- **Threat Landscape:**
  - APT group TTPs (new campaigns)
  - Real-world attacks (learn from breaches)
  - Vulnerability disclosures (Patch Tuesday, 0-days)
  
- **Resources:**
  - SpecterOps blog (AD, Azure AD)
  - harmj0y's blog
  - Red Team Notes (rtn.lol)
  - Pentest.blog
  - Red Teaming Experiments (ired.team)
  - PayloadsAllTheThings (GitHub)
  - MITRE ATT&CK updates
  - SANS Reading Room (Red Team papers)

### Soft Skills - CRITICAL
- **Communication:**
  - Write clearly (reports for executives)
  - Present confidently (debriefs, findings)
  - Explain complex attacks simply
  
- **Creativity:**
  - Think like an adversary
  - Find novel attack paths
  - Chain techniques uniquely
  
- **Patience:**
  - Red Team engagements are LONG (weeks/months)
  - Slow and methodical > fast and detected
  - Reconnaissance takes time
  
- **Discipline:**
  - OPSEC adherence (one mistake = detected)
  - Follow procedures
  - Document everything
  
- **Collaboration:**
  - Work with Blue Team (Purple Team mindset)
  - Team coordination (multi-operator engagements)
  - Knowledge sharing
  
- **Ethics:**
  - Authorized only (NEVER go rogue)
  - Protect client data
  - Responsible disclosure
  - Professionalism

### Mindset
- **Think like an APT:**
  - Long-term objectives
  - Stealth over speed
  - Persistence
  - Adaptability
  
- **Adversarial mindset:**
  - How would a real attacker do this?
  - What's the path of least resistance?
  - How to evade detection?
  
- **Continuous improvement:**
  - Every engagement is a learning opportunity
  - Debrief yourself (what worked, what didn't)
  - Refine tradecraft
  
- **Never stop learning:**
  - Defenses improve → offense must improve
  - Technology changes → techniques change
  - Red Team is a journey, not a destination

---

## KẾT LUẬN

Red Team Operator là role **ĐỈNH CAO** của offensive security.

**Tại sao chọn Red Team:**
- ✅ **Elite position** (top 1-5% của offensive security)
- ✅ **Extremely high salary** ($180k-$300k+ cho senior)
- ✅ **Most challenging** (technically và mentally)
- ✅ **Adversary mindset** (think like real attackers)
- ✅ **Long-term engagements** (weeks/months, deep understanding)
- ✅ **Stealth and evasion** (not just exploitation)
- ✅ **Custom tool development** (creativity)
- ✅ **Purple team collaboration** (improve defenses)
- ✅ **Real impact** (test entire organization)
- ✅ **Prestige** (highly respected role)
- ✅ **Continuous innovation** (defenses improve, so must you)
- ✅ **Multiple disciplines** (physical + social + technical)

**Challenges - BE PREPARED:**
- ⚠️ **VERY high bar to entry** (OSCP + AD mastery minimum)
- ⚠️ **Years of pentesting experience required** (not for beginners)
- ⚠️ **Extremely demanding** (technically)
- ⚠️ **Long hours** (engagements can be weeks/months)
- ⚠️ **High stress** (one mistake = detected, engagement failure)
- ⚠️ **OPSEC critical** (constant vigilance)
- ⚠️ **Travel** (on-site engagements sometimes)
- ⚠️ **On-call** (sometimes)
- ⚠️ **Continuous learning required** (or become obsolete)
- ⚠️ **Legal risks** (unauthorized testing = crime, authorization CRITICAL)
- ⚠️ **Burnout risk** (intense, demanding)
- ⚠️ **Competitive** (few positions, many applicants)

**Perfect for you if:**
- 💡 **Already skilled pentester** (OSCP + 2-3 years experience)
- 💡 **Master Active Directory** (or willing to become master)
- 💡 **Love stealth and evasion** (not just exploitation)
- 💡 **Think like adversary** (APT mindset)
- 💡 **Patient and methodical** (slow and steady)
- 💡 **Disciplined** (OPSEC adherence)
- 💡 **Creative problem-solver** (novel attack paths)
- 💡 **Strong coder** (custom tools, implants, automation)
- 💡 **Handle pressure well** (long engagements, high stakes)
- 💡 **Passionate** (this is lifestyle, not just job)
- 💡 **Ethical** (power with responsibility)

**The Path:**
1. **Master Penetration Testing** (1-2 years) - OSCP, web, network
2. **Master Active Directory** (6-12 months) - Kerberos, delegation, ACLs, BloodHound
3. **Learn Red Team Tradecraft** (1-2 years) - C2, evasion, OPSEC, custom tools
4. **Gain Experience** (2-3 years) - Junior → Mid → Senior Red Team Operator
5. **Never Stop Learning** (forever) - New techniques, tools, adversaries

**This is NOT a role you "learn in 6 months".**
Red Team Operator is the **CULMINATION** of years of offensive security experience, continuous learning, and dedication.

**But if you make it:**
- You're at the **TOP** of offensive security
- You're playing **chess, not checkers**
- You're simulating **real adversaries**
- You're making organizations **truly secure**
- You're **highly valued and compensated**
- You're part of an **elite community**

Nếu bạn đam mê offensive security, muốn đối đầu với các defense tiên tiến nhất, nghĩ như kẻ tấn công thực sự, và không ngại thử thách cực độ - **Red Team is calling you.** 🎯🔴⚔️

**"Be the adversary your defenders need."**