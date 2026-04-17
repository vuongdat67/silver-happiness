# ROADMAP APPLICATION SECURITY ENGINEER (AppSec) TOÀN DIỆN

## 1. FOUNDATIONS - NỀN TẢNG CƠ BẢN

### 1.1 Programming Fundamentals - CRITICAL
Phải thành thạo **ÍT NHẤT 2-3** ngôn ngữ lập trình:

#### **Backend Languages (chọn 2-3):**
- **Python**
  - Syntax và data structures
  - OOP (Object-Oriented Programming)
  - Frameworks: Django, Flask, FastAPI
  - Popular libraries
  - Virtual environments
  - Package management (pip, poetry)
  - Async programming
  
- **Java**
  - Core Java
  - Spring Framework/Spring Boot
  - Maven/Gradle
  - JVM internals
  - Multithreading
  - JDBC
  - Common vulnerabilities
  
- **JavaScript/TypeScript**
  - ES6+ features
  - Node.js
  - Express.js
  - npm/yarn
  - Async/await, Promises
  - Event loop
  - Common frameworks (NestJS)
  
- **C#/.NET**
  - .NET Core/.NET 6+
  - ASP.NET Core
  - Entity Framework
  - LINQ
  - Dependency injection
  
- **Go (Golang)**
  - Goroutines
  - Channels
  - Popular frameworks (Gin, Echo)
  - Concurrency patterns
  
- **Ruby**
  - Ruby on Rails
  - Gems
  - ActiveRecord
  
- **PHP**
  - Modern PHP (7.x, 8.x)
  - Laravel, Symfony
  - Composer
  - Common vulnerabilities

#### **Frontend Languages:**
- **JavaScript/TypeScript** (deep dive)
  - DOM manipulation
  - Event handling
  - Browser APIs
  - AJAX/Fetch API
  - WebSockets
  - Web Workers
  - Service Workers
  
- **Frontend Frameworks:**
  - React
  - Angular
  - Vue.js
  - Svelte
  - Security implications of each
  
- **HTML/CSS**
  - HTML5 features
  - CSS3
  - Responsive design
  - Security headers
  - Content Security Policy

#### **Mobile Development:**
- **Android (Java/Kotlin)**
  - Android SDK
  - Activities, Services, Broadcast Receivers
  - Intents
  - Content Providers
  - Security features
  
- **iOS (Swift/Objective-C)**
  - iOS SDK
  - UIKit/SwiftUI
  - Keychain
  - App Transport Security
  
- **Cross-platform:**
  - React Native
  - Flutter
  - Xamarin

### 1.2 Software Development Lifecycle (SDLC)
- Waterfall model
- Agile methodology
- Scrum framework
- Kanban
- DevOps practices
- Continuous Integration/Continuous Deployment (CI/CD)
- Version control (Git)
- Code review processes
- Release management
- Secure SDLC (SSDLC)
- Microsoft SDL (Security Development Lifecycle)
- OWASP SAMM (Software Assurance Maturity Model)

### 1.3 Web Technologies Deep Dive
- **HTTP/HTTPS Protocol:**
  - Request/Response cycle
  - HTTP methods (GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD)
  - Status codes
  - Headers (security-relevant)
  - Cookies
  - Sessions
  - Authentication headers
  - CORS (Cross-Origin Resource Sharing)
  - Same-Origin Policy
  - Content negotiation
  
- **Web Architecture:**
  - Client-server model
  - Three-tier architecture
  - Microservices architecture
  - RESTful APIs
  - GraphQL
  - gRPC
  - SOAP/XML-RPC
  - WebSockets
  - Server-Sent Events (SSE)
  
- **Authentication & Session Management:**
  - Session-based authentication
  - Token-based authentication (JWT)
  - OAuth 2.0 flows
  - OpenID Connect
  - SAML
  - API keys
  - Basic Authentication
  - Digest Authentication
  - Certificate-based authentication
  
- **Data Formats:**
  - JSON
  - XML
  - YAML
  - Protocol Buffers
  - MessagePack

### 1.4 Databases
- **Relational Databases:**
  - SQL fundamentals (SELECT, INSERT, UPDATE, DELETE)
  - MySQL/MariaDB
  - PostgreSQL
  - Microsoft SQL Server
  - Oracle
  - Stored procedures
  - Triggers
  - Views
  - Indexes
  - Transactions (ACID)
  - Normalization
  
- **NoSQL Databases:**
  - MongoDB (document)
  - Redis (key-value)
  - Cassandra (wide-column)
  - Neo4j (graph)
  - Elasticsearch
  - Query languages
  - Data modeling
  
- **ORM (Object-Relational Mapping):**
  - SQLAlchemy (Python)
  - Hibernate (Java)
  - Entity Framework (.NET)
  - Sequelize (Node.js)
  - ActiveRecord (Ruby)
  - Django ORM

### 1.5 Operating Systems
- **Linux:**
  - Command line
  - File permissions
  - Process management
  - Network configuration
  - Log files
  - Common services
  - Shell scripting
  
- **Windows:**
  - PowerShell
  - IIS configuration
  - Windows services
  - Event logs
  - Registry
  
- **Containers:**
  - Docker fundamentals
  - Dockerfile
  - Docker Compose
  - Container registries

### 1.6 Networking Basics
- TCP/IP model
- DNS
- Load balancers
- Reverse proxies
- CDNs
- Firewalls
- VPNs
- TLS/SSL
- Certificate management

### 1.7 Security Fundamentals
- CIA Triad
- Authentication vs Authorization
- Principle of Least Privilege
- Defense in Depth
- Security by Design
- Privacy by Design
- Threat modeling concepts
- Risk assessment basics
- Cryptography basics
  - Symmetric encryption
  - Asymmetric encryption
  - Hashing
  - Digital signatures
  - Certificate authorities

## 2. WEB APPLICATION VULNERABILITIES

### 2.1 OWASP Top 10 (2021) - MUST MASTER

#### **A01:2021 – Broken Access Control**
- Insecure Direct Object References (IDOR)
- Path Traversal
- Missing Function Level Access Control
- Elevation of Privilege
- Horizontal vs Vertical privilege escalation
- Force browsing
- Parameter tampering
- **Testing methodology:**
  - Manual testing
  - Automated scanning
  - Privilege matrix testing
- **Prevention:**
  - Deny by default
  - Implement access control checks
  - Rate limiting
  - Logging và monitoring

#### **A02:2021 – Cryptographic Failures**
- Sensitive data exposure
- Weak encryption algorithms
- Insecure key management
- Missing encryption in transit
- Missing encryption at rest
- Weak random number generation
- Certificate validation issues
- **Common mistakes:**
  - Using MD5/SHA1 for passwords
  - Hardcoded secrets
  - Weak SSL/TLS configuration
  - Not using HTTPS
- **Prevention:**
  - Use strong algorithms (AES-256, SHA-256)
  - Proper key management
  - TLS 1.2/1.3
  - HSTS
  - Perfect Forward Secrecy

#### **A03:2021 – Injection**
- **SQL Injection (SQLi):**
  - Classic SQLi
  - Blind SQLi (Boolean-based, Time-based)
  - Error-based SQLi
  - Union-based SQLi
  - Stacked queries
  - Out-of-band SQLi
  - Second-order SQLi
  - ORM injection
  - NoSQL injection (MongoDB, CouchDB)
  
- **Command Injection (OS Command Injection):**
  - Direct command injection
  - Indirect command injection
  - Blind command injection
  
- **LDAP Injection**
- **XPath Injection**
- **Template Injection (SSTI - Server-Side Template Injection):**
  - Jinja2 (Python)
  - Twig (PHP)
  - FreeMarker (Java)
  - Velocity (Java)
  - ERB (Ruby)
  
- **Expression Language Injection**
- **XML Injection**
- **CRLF Injection**
- **Header Injection**
- **Log Injection**

- **Prevention:**
  - Parameterized queries/Prepared statements
  - ORM usage (with caution)
  - Input validation (whitelist)
  - Output encoding
  - Least privilege database accounts
  - Stored procedures (carefully)

#### **A04:2021 – Insecure Design**
- Missing security controls
- Threat modeling failures
- Insecure design patterns
- Business logic flaws
- Race conditions
- **Examples:**
  - Insufficient rate limiting
  - Missing authentication
  - Flawed authorization logic
  - Lack of resource limits
- **Prevention:**
  - Threat modeling (STRIDE, PASTA, LINDDUN)
  - Security requirements
  - Secure design patterns
  - Abuse case development
  - Security architecture review

#### **A05:2021 – Security Misconfiguration**
- Default credentials
- Unnecessary features enabled
- Detailed error messages
- Missing security headers
- Outdated software
- Unpatched systems
- Open cloud storage
- Directory listing
- Unnecessary HTTP methods enabled
- **Areas to check:**
  - Application server
  - Framework
  - Database
  - Web server (Apache, Nginx, IIS)
  - Cloud storage (S3, Azure Blob)
  - Container configurations
- **Prevention:**
  - Hardening guides
  - Minimal platform
  - Security headers (CSP, X-Frame-Options, etc.)
  - Automated configuration scanning
  - Regular patching

#### **A06:2021 – Vulnerable and Outdated Components**
- Using components with known vulnerabilities
- Outdated libraries/frameworks
- Unpatched dependencies
- End-of-life software
- **Impact:**
  - Remote code execution
  - Data breaches
  - Complete system compromise
- **Prevention:**
  - Software Composition Analysis (SCA)
  - Dependency scanning
  - Regular updates
  - Vulnerability monitoring
  - Version pinning với automated updates
  - Remove unused dependencies

#### **A07:2021 – Identification and Authentication Failures**
- **Weak password policies:**
  - No complexity requirements
  - Common passwords allowed
  - No length requirements
  
- **Credential stuffing:**
  - Automated credential testing
  - Lack of rate limiting
  
- **Broken authentication:**
  - Session fixation
  - Session hijacking
  - Predictable session IDs
  - Missing session timeout
  - Concurrent sessions allowed
  
- **Missing MFA/2FA**
- **Insecure password recovery:**
  - Predictable reset tokens
  - Information disclosure
  - No verification
  
- **Weak password storage:**
  - Plaintext passwords
  - Weak hashing (MD5, SHA1)
  - No salting
  
- **Prevention:**
  - Strong password policies
  - Multi-factor authentication
  - Account lockout
  - Rate limiting
  - bcrypt/Argon2 for password hashing
  - Secure session management
  - CAPTCHA
  - Password breach database checks (Have I Been Pwned)

#### **A08:2021 – Software and Data Integrity Failures**
- Unsigned/unverified software updates
- CI/CD pipeline compromise
- Insecure deserialization
- Auto-update without integrity checking
- **Insecure Deserialization:**
  - Java serialization
  - Python pickle
  - PHP unserialize
  - .NET deserialization
  - JSON deserialization attacks
- **Prevention:**
  - Digital signatures
  - Code signing
  - Integrity checks (checksums, hashes)
  - Secure CI/CD
  - Avoid deserialization of untrusted data
  - Input validation on deserialized objects

#### **A09:2021 – Security Logging and Monitoring Failures**
- Insufficient logging
- Logs not monitored
- Missing critical events
- Cleartext sensitive data in logs
- No alerting
- Log injection vulnerabilities
- **What to log:**
  - Authentication events (success/failure)
  - Authorization failures
  - Input validation failures
  - Application errors
  - High-value transactions
  - Suspicious activities
- **Prevention:**
  - Comprehensive logging
  - Log integrity
  - Centralized log management
  - Real-time monitoring
  - Alerting mechanisms
  - Log retention policies
  - SIEM integration
  - Avoid logging sensitive data

#### **A10:2021 – Server-Side Request Forgery (SSRF)**
- Internal network scanning
- Cloud metadata access (AWS, Azure, GCP)
- Port scanning
- Protocol smuggling
- Bypassing firewalls/ACLs
- **Common targets:**
  - http://169.254.169.254/ (AWS metadata)
  - http://metadata.google.internal/ (GCP)
  - http://localhost
  - Internal services
- **Types:**
  - Basic SSRF
  - Blind SSRF
  - Semi-blind SSRF
- **Prevention:**
  - Whitelist allowed URLs/IPs
  - Network segmentation
  - Disable unused URL schemas
  - Input validation
  - Response validation
  - Metadata service hardening

### 2.2 Client-Side Vulnerabilities

#### **Cross-Site Scripting (XSS):**
- **Reflected XSS:**
  - Non-persistent
  - URL-based
  - Requires user interaction
  - Phishing attacks
  
- **Stored XSS (Persistent):**
  - Saved in database
  - Affects all users
  - Higher impact
  - Self-propagating (worms)
  
- **DOM-based XSS:**
  - Client-side code vulnerability
  - No server involvement
  - JavaScript execution context
  
- **Mutation XSS (mXSS)**
- **Universal XSS (UXSS)**
- **Self-XSS (social engineering)**

- **XSS Payloads:**
  - Cookie stealing
  - Session hijacking
  - Keylogging
  - Phishing
  - Defacement
  - Browser exploitation
  
- **XSS Prevention:**
  - Output encoding (context-aware)
  - Content Security Policy (CSP)
  - HTTPOnly cookies
  - X-XSS-Protection header
  - Input validation
  - Template auto-escaping
  - Trusted Types API
  - DOMPurify library

#### **Cross-Site Request Forgery (CSRF):**
- State-changing operations
- Leverages authenticated sessions
- GET-based CSRF
- POST-based CSRF
- JSON CSRF
- **Prevention:**
  - CSRF tokens (Synchronizer Token Pattern)
  - SameSite cookie attribute
  - Double Submit Cookie
  - Custom request headers
  - Re-authentication for sensitive operations
  - Origin/Referer validation

#### **Clickjacking:**
- UI redressing
- Iframe overlay attacks
- Likejacking
- Cursorjacking
- **Prevention:**
  - X-Frame-Options header
  - CSP frame-ancestors
  - Frame-busting scripts

#### **HTML5 Security Issues:**
- postMessage vulnerabilities
- Web Storage security (localStorage, sessionStorage)
- WebSocket security
- CORS misconfigurations
- Web Workers
- Service Workers security

### 2.3 API Security

#### **API-Specific Vulnerabilities:**
- **Broken Object Level Authorization (BOLA/IDOR)**
  - Accessing other users' data
  - Parameter manipulation
  - API endpoint enumeration
  
- **Broken User Authentication:**
  - Weak JWT implementation
  - Missing token expiration
  - Token not verified
  - Weak API keys
  
- **Excessive Data Exposure:**
  - Returning too much data
  - No filtering
  - Sensitive data in responses
  
- **Lack of Resources & Rate Limiting:**
  - No throttling
  - DoS via API abuse
  - Resource exhaustion
  
- **Broken Function Level Authorization:**
  - Missing authorization checks
  - Admin endpoints accessible
  - Role-based access issues
  
- **Mass Assignment:**
  - Binding client input to objects
  - Unintended field modification
  - Privilege escalation
  
- **Security Misconfiguration:**
  - CORS misconfiguration
  - Verbose error messages
  - Default credentials
  - Unnecessary HTTP methods
  
- **Injection flaws** (SQLi, NoSQLi, Command Injection)

- **Improper Assets Management:**
  - Old API versions exposed
  - Shadow APIs
  - Zombie APIs
  - API documentation exposure
  
- **Insufficient Logging & Monitoring**

#### **OWASP API Security Top 10 (2023):**
- API1:2023 - Broken Object Level Authorization
- API2:2023 - Broken Authentication
- API3:2023 - Broken Object Property Level Authorization
- API4:2023 - Unrestricted Resource Consumption
- API5:2023 - Broken Function Level Authorization
- API6:2023 - Unrestricted Access to Sensitive Business Flows
- API7:2023 - Server Side Request Forgery
- API8:2023 - Security Misconfiguration
- API9:2023 - Improper Inventory Management
- API10:2023 - Unsafe Consumption of APIs

#### **REST API Security:**
- Authentication (OAuth 2.0, JWT, API Keys)
- Authorization (scopes, permissions)
- Rate limiting
- Input validation
- Output encoding
- HTTPS only
- HATEOAS security
- Versioning security

#### **GraphQL Security:**
- Query depth limiting
- Query complexity analysis
- Rate limiting
- Introspection in production
- Batching attacks
- Authorization at field level
- N+1 query problem
- Alias abuse
- Circular queries

#### **gRPC Security:**
- mTLS
- Token-based authentication
- Authorization interceptors
- Input validation
- Error handling

### 2.4 Business Logic Vulnerabilities
- **Race Conditions:**
  - TOCTOU (Time-of-Check-Time-of-Use)
  - Concurrent requests
  - Resource manipulation
  
- **Price/Quantity Manipulation:**
  - Negative quantities
  - Decimal manipulation
  - Currency rounding issues
  
- **Workflow Bypass:**
  - Skipping steps
  - Forced browsing
  - Multi-stage process manipulation
  
- **Account Enumeration:**
  - Username enumeration
  - Email enumeration
  - Timing attacks
  
- **Discount/Coupon Abuse:**
  - Code reuse
  - Multiple applications
  - Invalid combinations
  
- **Referral/Reward Program Abuse:**
  - Self-referrals
  - Fake accounts
  - Automation

- **Payment Logic Flaws:**
  - Payment bypass
  - Refund abuse
  - Credit manipulation

### 2.5 Advanced Vulnerabilities

#### **XML External Entity (XXE):**
- File disclosure
- SSRF via XXE
- Denial of Service
- Billion laughs attack
- **Prevention:**
  - Disable external entities
  - Use less complex data formats (JSON)
  - Input validation
  - Update XML processors

#### **Server-Side Template Injection (SSTI):**
- Remote code execution
- Information disclosure
- **Affected engines:**
  - Jinja2, Mako (Python)
  - Twig, Smarty (PHP)
  - FreeMarker, Velocity (Java)
  - Pug, Handlebars (Node.js)
- **Prevention:**
  - Sandboxed environments
  - Logic-less templates
  - Input validation
  - Avoid user input in templates

#### **Deserialization Vulnerabilities:**
- Java deserialization (ysoserial)
- .NET deserialization
- Python pickle
- PHP unserialize
- Ruby Marshal
- **Prevention:**
  - Avoid deserializing untrusted data
  - Integrity checks
  - Type checking
  - Restricted classes

#### **HTTP Request Smuggling:**
- CL.TE (Content-Length vs Transfer-Encoding)
- TE.CL
- TE.TE
- **Impact:**
  - Cache poisoning
  - Request hijacking
  - Security bypass
- **Prevention:**
  - Consistent front-end/back-end handling
  - Reject ambiguous requests
  - HTTP/2

#### **HTTP Parameter Pollution (HPP):**
- Multiple parameters with same name
- Server-side HPP
- Client-side HPP
- **Impact:**
  - Input validation bypass
  - Authentication bypass
  - Authorization bypass

#### **LDAP Injection:**
- Authentication bypass
- Information disclosure
- Unauthorized access
- **Prevention:**
  - Input validation
  - Parameterized queries
  - Escape special characters

#### **XPath Injection:**
- Similar to SQL injection
- XML database queries
- **Prevention:**
  - Parameterized queries
  - Input validation

#### **CRLF Injection:**
- HTTP Response Splitting
- Log injection
- Header injection
- **Prevention:**
  - Input validation
  - Remove CR/LF characters
  - Use framework functions

#### **Open Redirect:**
- Unvalidated redirects
- Phishing attacks
- OAuth token theft
- **Prevention:**
  - Whitelist URLs
  - Avoid user-controlled redirects
  - Validate destination

#### **Subdomain Takeover:**
- Dangling DNS records
- Unclaimed cloud resources
- **Impact:**
  - Phishing
  - Cookie theft
  - Content injection
- **Prevention:**
  - DNS hygiene
  - Monitor DNS records
  - Remove unused entries

## 3. SECURE CODING PRACTICES

### 3.1 Input Validation
- **Whitelisting vs Blacklisting:**
  - Prefer whitelisting
  - Define allowed inputs
  - Reject unknown inputs
  
- **Data type validation:**
  - Type checking
  - Range checking
  - Length checking
  - Format validation (regex)
  
- **Encoding validation:**
  - Character set validation
  - Unicode handling
  - Normalization
  
- **Context-specific validation:**
  - URL validation
  - Email validation
  - File upload validation
  - JSON/XML validation
  
- **Server-side validation ALWAYS:**
  - Never trust client-side
  - Redundant validation okay
  - Centralized validation functions

### 3.2 Output Encoding
- **Context-aware encoding:**
  - HTML encoding
  - JavaScript encoding
  - URL encoding
  - CSS encoding
  - SQL encoding
  - LDAP encoding
  - XML encoding
  
- **Libraries:**
  - OWASP Java Encoder
  - Microsoft Anti-XSS Library
  - ESAPI (Enterprise Security API)
  - DOMPurify (JavaScript)
  
- **Template engines:**
  - Auto-escaping features
  - Context-aware escaping
  - Raw output controls

### 3.3 Authentication Best Practices
- **Password Requirements:**
  - Minimum length (12+ characters)
  - Complexity requirements
  - No common passwords (top 10k list)
  - Password strength meter
  - Breached password detection (HIBP API)
  
- **Password Storage:**
  - **Use bcrypt, Argon2, or PBKDF2**
  - Never use MD5/SHA1/SHA256 alone
  - Salt every password (unique, random)
  - High work factor/iterations
  - Pepper (application-wide secret)
  
- **Multi-Factor Authentication:**
  - TOTP (Time-based OTP)
  - SMS (less secure, but better than nothing)
  - Push notifications
  - Hardware tokens (YubiKey, etc.)
  - Biometrics
  - Backup codes
  
- **Session Management:**
  - Secure session ID generation
  - HTTPOnly flag
  - Secure flag (HTTPS only)
  - SameSite attribute
  - Session timeout
  - Absolute timeout
  - Idle timeout
  - Session fixation prevention
  - Session invalidation on logout
  - Concurrent session limits
  
- **Account Lockout:**
  - Temporary lockout
  - Progressive delays
  - CAPTCHA after failures
  - Alert legitimate users
  
- **Password Reset:**
  - Secure token generation
  - Short token lifetime
  - One-time use tokens
  - No user enumeration
  - Re-authenticate before change
  - Email notification of change

### 3.4 Authorization Best Practices
- **Principle of Least Privilege:**
  - Default deny
  - Explicit grants
  - Role-based access control (RBAC)
  - Attribute-based access control (ABAC)
  
- **Access Control Checks:**
  - Server-side enforcement
  - Every request
  - Object-level authorization
  - Function-level authorization
  - Fail securely (deny on error)
  
- **Direct Object References:**
  - Indirect references
  - Access control checks
  - Ownership validation
  - UUID instead of sequential IDs

### 3.5 Cryptography Best Practices
- **Algorithms:**
  - Use: AES-256, ChaCha20
  - Avoid: DES, 3DES, RC4, MD5, SHA1
  - Hashing: SHA-256, SHA-3, bcrypt, Argon2
  
- **Key Management:**
  - Secure key generation
  - Key rotation
  - Key storage (KMS, HSM, Vault)
  - No hardcoded keys
  - Separate keys per purpose
  
- **TLS/SSL:**
  - TLS 1.2 minimum (prefer 1.3)
  - Strong cipher suites
  - Certificate validation
  - HSTS (HTTP Strict Transport Security)
  - Certificate pinning (mobile apps)
  
- **Random Number Generation:**
  - Cryptographically secure RNG
  - /dev/urandom (Linux)
  - CryptGenRandom (Windows)
  - SecureRandom (Java)
  - secrets module (Python)

### 3.6 Error Handling & Logging
- **Error Handling:**
  - Generic error messages to users
  - Detailed errors in logs only
  - No stack traces to users
  - Custom error pages
  - Fail securely
  
- **Logging:**
  - Log security events
  - Authentication events
  - Authorization failures
  - Input validation failures
  - Application errors
  - Use structured logging
  - Centralized logging
  - Log rotation
  - **Never log:**
    - Passwords
    - Session tokens
    - Credit card numbers
    - API keys
    - Personal data (without anonymization)
  
- **Monitoring:**
  - Real-time alerting
  - Anomaly detection
  - SIEM integration
  - Dashboard visualization

### 3.7 Secure File Handling
- **File Upload:**
  - File type validation (content-based, not extension)
  - File size limits
  - Filename sanitization
  - Store outside web root
  - Virus scanning
  - Image reprocessing (ImageMagick vulns)
  - Random filenames
  - Separate domain for user content
  
- **File Download:**
  - Authorization checks
  - Path traversal prevention
  - Content-Type headers
  - Content-Disposition headers
  - X-Content-Type-Options: nosniff

### 3.8 Database Security
- **Query Security:**
  - Parameterized queries ALWAYS
  - Prepared statements
  - ORM (with caution)
  - Stored procedures (carefully)
  
- **Database Hardening:**
  - Least privilege accounts
  - Separate read/write accounts
  - Network segmentation
  - Encryption at rest
  - Encryption in transit
  - Regular backups
  - Patch management
  
- **Connection Security:**
  - Connection pooling
  - Connection string security
  - No credentials in code
  - Environment variables/secrets management

### 3.9 API Security Best Practices
- **Authentication:**
  - API keys for identification only
  - OAuth 2.0 for authorization
  - JWT with short expiration
  - Refresh tokens
  
- **Rate Limiting:**
  - Per user/IP
  - Per endpoint
  - Progressive backoff
  - HTTP 429 responses
  
- **Versioning:**
  - URL versioning
  - Header versioning
  - Deprecation notices
  - Support policy
  
- **Documentation:**
  - OpenAPI/Swagger
  - Authentication requirements
  - Rate limits
  - Examples
  - Security considerations
  - Keep private docs separate

### 3.10 Mobile App Security
- **Code Security:**
  - Code obfuscation (ProGuard, R8)
  - Root/jailbreak detection
  - Debugger detection
  - Emulator detection
  - Certificate pinning
  - No sensitive data in code
  
- **Data Storage:**
  - Encrypted storage
  - Keychain (iOS)
  - KeyStore (Android)
  - No sensitive data in logs
  - Secure file permissions
  
- **Network Security:**
  - HTTPS only
  - Certificate pinning
  - Certificate validation
  - No HTTP fallback
  
- **Binary Protection:**
  - Anti-tampering
  - Integrity checks
  - Runtime protection

## 4. SECURITY TESTING & TOOLS

### 4.1 Static Application Security Testing (SAST)

#### **Concept:**
- White-box testing
- Source code analysis
- Early detection (shift-left)
- Low false negatives
- Higher false positives
- No runtime environment needed

#### **SAST Tools:**
- **Commercial:**
  - Checkmarx
  - Veracode Static Analysis
  - Fortify Static Code Analyzer
  - Coverity
  - Klocwork
  - CodeSonar
  
- **Open Source:**
  - **SonarQube** (multi-language)
  - **Semgrep** (multi-language, modern)
  - Brakeman (Ruby on Rails)
  - Bandit (Python)
  - ESLint với security plugins (JavaScript)
  - FindSecBugs (Java)
  - Puma Scan (.NET)
  - GoSec (Go)
  - phpcs-security-audit (PHP)
  
- **IDE Plugins:**
  - Snyk Code
  - GitHub Advanced Security
  - GitLab SAST
  - SonarLint
  - CodeQL

#### **SAST Best Practices:**
- Integrate in IDE
- Run in CI/CD
- Tune rules (reduce false positives)
- Incremental scanning
- Prioritize findings
- Track remediation
- Custom rules for specific patterns
- Developer training on results

### 4.2 Dynamic Application Security Testing (DAST)

#### **Concept:**
- Black-box testing
- Runtime testing
- Production-like environment
- Low false positives
- Higher false negatives
- Requires running application

#### **DAST Tools:**
- **Commercial:**
  - Burp Suite Professional
  - Acunetix
  - Netsparker (Invicti)
  - AppScan (HCL)
  - WebInspect (Fortify)
  - Veracode Dynamic Analysis
  - Rapid7 InsightAppSec
  
- **Open Source:**
  - **OWASP ZAP** (Zed Attack Proxy)
  - Nikto
  - Arachni
  - Wapiti
  - w3af
  - Nuclei
  
- **API-Specific:**
  - Postman (security testing)
  - REST Assured
  - Karate DSL
  - OWASP ZAP API scan

#### **DAST Best Practices:**
- Run in staging environment
- Authenticated scans
- Coverage mapping
- Regular scans (weekly/monthly)
- CI/CD integration
- Crawling strategy
- Form authentication
- Custom attack vectors
- API endpoint discovery

### 4.3 Interactive Application Security Testing (IAST)

#### **Concept:**
- Gray-box testing
- Runtime instrumentation
- Inside-out approach
- Low false positives
- Low false negatives
- Requires agent in application

#### **IAST Tools:**
- Contrast Security
- Hdiv Detection
- Seeker (Synopsys)
- Checkmarx CxIAST

#### **Benefits:**
- Accurate results
- Code-level findings
- No configuration needed
- Real-time feedback
- DevSecOps friendly

### 4.4 Software Composition Analysis (SCA)

#### **Concept:**
- Third-party dependency scanning
- Open source vulnerabilities
- License compliance
- Supply chain security
- SBOM (Software Bill of Materials)

#### **SCA Tools:**
- **Commercial:**
  - **Snyk Open Source**
  - WhiteSource/Mend
  - Black Duck
  - Sonatype Nexus Lifecycle
  - Veracode SCA
  - JFrog Xray
  
- **Open Source:**
  - OWASP Dependency-Check
  - Dependency-Track
  - npm audit
  - pip-audit
  - bundler-audit (Ruby)
  - cargo-audit (Rust)
  - Trivy (containers + dependencies)
  - Grype
  
- **Platform-Integrated:**
  - GitHub Dependabot
  - GitLab Dependency Scanning
  - Azure DevOps
  - Renovate Bot

#### **SCA Best Practices:**
- Scan all dependencies (direct + transitive)
- Continuous monitoring
- Automated updates (with testing)
- Vulnerability prioritization
- License compliance checks
- SBOM generation
- Private dependency scanning
- Container scanning
- Remediation advice

### 4.5 Manual Security Testing

#### **Code Review:**
- Peer review for security
- Security-focused checklist
- Threat modeling during design
- Pull request security gates
- Secure coding standards adherence

#### **Penetration Testing:**
- Simulate real attacks
- Business logic testing
- Authorization testing
- Session management testing
- Authentication testing
- Custom attack scenarios
- Reporting với PoCs

#### **Bug Bounty Programs:**
- Crowdsourced security testing
- Continuous testing
- Diverse skillsets
- Platform selection (HackerOne, Bugcrowd, Intigriti)
- Scope definition
- Reward structure
- Responsible disclosure
- Triage process

### 4.6 Burp Suite Mastery - ESSENTIAL

#### **Core Features:**
- **Proxy:**
  - Intercept requests/responses
  - Match and replace
  - HTTP history
  - WebSocket support
  
- **Repeater:**
  - Manual request modification
  - Testing different payloads
  - Response comparison
  
- **Intruder:**
  - Automated attacks
  - Sniper, Battering ram, Pitchfork, Cluster bomb
  - Payload processing
  - Grep extraction
  
- **Scanner (Pro):**
  - Automated vulnerability scanning
  - Active/Passive scanning
  - Custom scan configurations
  
- **Decoder:**
  - Encoding/Decoding
  - Hashing
  - Base64, URL, HTML, etc.
  
- **Comparer:**
  - Response comparison
  - Diff visualization
  
- **Sequencer:**
  - Token analysis
  - Session token randomness
  
- **Collaborator:**
  - Out-of-band interaction detection
  - SSRF testing
  - XXE testing

#### **Extensions:**
- Autorize (authorization testing)
- Active Scan++
- Param Miner
- Turbo Intruder
- Upload Scanner
- JWT Editor
- SQLiPy
- Collaborator Everywhere
- Burp Bounty
- Logger++

#### **Burp Suite Best Practices:**
- Project files organization
- Scope definition
- Target analysis
- Session handling rules
- Macro recording
- Custom extensions development
- Keyboard shortcuts
- Collaboration workflows

### 4.7 OWASP ZAP Mastery

#### **Features:**
- Automated scanning
- Manual testing tools
- API support
- Authentication handling
- Fuzzing
- Scripting (JavaScript, Python)
- Report generation
- CI/CD integration

#### **Add-ons:**
- Active/Passive scan rules
- Authentication helpers
- Fuzzing add-ons
- Report generation
- Selenium integration
- WebSocket support

### 4.8 Other Security Testing Tools

#### **Reconnaissance:**
- Subfinder
- Amass
- Assetfinder
- httprobe
- EyeWitness
- Aquatone

#### **Vulnerability Scanners:**
- Nuclei (template-based)
- Nikto (web server scanner)
- WPScan (WordPress)
- Joomscan (Joomla)
- Droopescan (Drupal)

#### **Fuzzing:**
- ffuf (fast web fuzzer)
- Wfuzz
- Gobuster
- Feroxbuster
- Dirsearch

#### **Exploitation:**
- SQLMap (SQL injection)
- Commix (command injection)
- XSStrike (XSS)
- NoSQLMap (NoSQL injection)
- tplmap (SSTI)

#### **Mobile:**
- MobSF (Mobile Security Framework)
- Frida (dynamic instrumentation)
- Objection
- Apktool
- jadx

#### **API Testing:**
- Postman
- Insomnia
- curl
- httpie
- REST Client (VS Code)

## 5. THREAT MODELING

### 5.1 Threat Modeling Methodologies

#### **STRIDE (Microsoft):**
- **S**poofing identity
- **T**ampering with data
- **R**epudiation
- **I**nformation disclosure
- **D**enial of service
- **E**levation of privilege

#### **PASTA (Process for Attack Simulation and Threat Analysis):**
- Define objectives
- Define technical scope
- Application decomposition
- Threat analysis
- Vulnerability analysis
- Attack enumeration
- Risk and impact analysis

#### **LINDDUN (Privacy threats):**
- Linkability
- Identifiability
- Non-repudiation
- Detectability
- Disclosure of information
- Unawareness
- Non-compliance

#### **Attack Trees:**
- Visual representation
- Goal-based
- AND/OR logic
- Probability assignment
- Cost analysis

### 5.2 Threat Modeling Process
1. **Define scope:**
   - Application boundaries
   - Assets to protect
   - Trust boundaries
   
2. **Create architecture diagrams:**
   - Data flow diagrams (DFD)
   - System architecture
   - Trust boundaries
   - Entry/exit points
   
3. **Identify threats:**
   - Use STRIDE or other methodology
   - Brainstorm sessions
   - Threat libraries
   
4. **Rank threats:**
   - DREAD (Damage, Reproducibility, Exploitability, Affected users, Discoverability)
   - CVSS scoring
   - Business impact
   
5. **Mitigate threats:**
   - Security controls
   - Design changes
   - Accept risk (documented)
   
6. **Validate:**
   - Review with team
   - Update as application changes
   - Continuous process

### 5.3 Threat Modeling Tools
- Microsoft Threat Modeling Tool
- OWASP Threat Dragon
- IriusRisk
- ThreatModeler
- PyTM
- Threagile
- Draw.io (manual)

### 5.4 Data Flow Diagrams
- External entities
- Processes
- Data stores
- Data flows
- Trust boundaries
- Identify attack surface

## 6. SECURE DEVELOPMENT LIFECYCLE (SDL)

### 6.1 Security in SDLC Phases

#### **Requirements Phase:**
- Security requirements gathering
- Compliance requirements
- Privacy requirements
- Threat modeling (high-level)
- Abuse cases
- Security user stories

#### **Design Phase:**
- Security architecture review
- Threat modeling (detailed)
- Technology selection (secure frameworks)
- Authentication/Authorization design
- Data classification
- Encryption requirements
- Third-party security assessment

#### **Development Phase:**
- Secure coding standards
- Code reviews
- SAST integration
- IDE security plugins
- Dependency scanning
- Secrets management
- Unit tests với security tests

#### **Testing Phase:**
- DAST scanning
- Penetration testing
- Security regression testing
- Fuzzing
- Configuration review
- Security test cases

#### **Deployment Phase:**
- Security configuration
- Hardening
- Secrets injection
- Security monitoring setup
- Logging configuration
- Incident response plan
- Runbooks

#### **Maintenance Phase:**
- Vulnerability management
- Patch management
- Security monitoring
- Incident response
- Security updates
- Continuous testing
- Decommissioning security

### 6.2 Security Champions Program
- Security advocates in dev teams
- Training và enablement
- Office hours
- Knowledge sharing
- Threat modeling facilitation
- Security tool adoption
- Metrics và reporting

### 6.3 Security Training for Developers
- Secure coding training
- OWASP Top 10
- Platform-specific security
- Hands-on labs
- Capture the Flag (CTF)
- Security code review
- Threat modeling workshops
- Security tool training

### 6.4 Security Gates in CI/CD
- Pre-commit hooks (secret scanning, linting)
- Build-time:
  - SAST
  - Dependency scanning
  - Container scanning
  - License compliance
- Test-time:
  - DAST (in staging)
  - IAST
  - Security tests
- Pre-production:
  - Manual penetration testing
  - Security sign-off
- Production:
  - Monitoring
  - Runtime protection
  - Continuous scanning

### 6.5 Metrics & KPIs
- Vulnerability density (bugs per KLOC)
- Mean Time to Remediate (MTTR)
- Vulnerability age
- Security debt
- Coverage metrics (SAST, DAST, SCA)
- Training completion rate
- Security findings trends
- False positive rate
- Policy violations

## 7. CI/CD SECURITY (DevSecOps)

### 7.1 Pipeline Security

#### **Source Code Management:**
- Branch protection
- Signed commits
- Code review enforcement
- Secret scanning (git-secrets, truffleHog)
- Dependency review
- License scanning

#### **Build Security:**
- Trusted builders
- Build environment isolation
- Build artifact signing
- SBOM generation
- Container image scanning
- Binary authorization

#### **Test Security:**
- SAST in pipeline
- DAST in pipeline
- Dependency scanning
- Container scanning
- Infrastructure as Code scanning
- Security unit tests
- API security tests

#### **Deploy Security:**
- Deployment verification
- Configuration validation
- Secret injection (not in code)
- Least privilege
- Immutable infrastructure
- Blue/green deployments
- Rollback capability

### 7.2 CI/CD Tools Security

#### **GitHub Actions:**
- Workflow security
- Secret management
- Third-party actions review
- Dependency pinning
- CODEOWNERS
- Branch protection rules
- Security scanning (Dependabot, Code Scanning)

#### **GitLab CI:**
- Security scanning templates
- SAST, DAST, Dependency Scanning
- Container Scanning
- License Compliance
- Secret Detection
- Pipeline security
- Protected variables

#### **Jenkins:**
- Plugin security
- Credential management
- Script approval
- Access control
- RBAC
- Audit logging
- Security hardening

#### **Azure DevOps:**
- Pipeline security
- Service connections
- Variable groups
- Secure files
- Security scanning tasks
- Release gates

### 7.3 Infrastructure as Code (IaC) Security

#### **Terraform:**
- Sensitive data handling
- State file security
- Module security
- Provider verification
- Policy as Code (Sentinel, OPA)
- Scanning tools (tfsec, Checkov, Terrascan)

#### **Kubernetes Manifests:**
- Pod Security Standards
- RBAC policies
- Network Policies
- Resource limits
- Image pull policies
- Secrets management
- Scanning (kubesec, kube-bench, Polaris)

#### **Dockerfile:**
- Base image selection
- Multi-stage builds
- Non-root user
- Minimal layers
- No secrets in layers
- Health checks
- Scanning (Trivy, Hadolint)

#### **Ansible:**
- Vault for secrets
- Playbook security
- No_log for sensitive data
- YAML linting
- Role security

### 7.4 Secrets Management

#### **Solutions:**
- HashiCorp Vault
- AWS Secrets Manager
- Azure Key Vault
- GCP Secret Manager
- CyberArk
- 1Password (teams)
- Doppler

#### **Best Practices:**
- Never commit secrets
- Environment-based secrets
- Secret rotation
- Least privilege access
- Audit logging
- Encryption at rest
- Short-lived secrets
- Detection tools (git-secrets, GitGuardian, truffleHog)

### 7.5 Container Security

#### **Image Security:**
- Trusted base images
- Minimal images (distroless, Alpine)
- Image scanning (Trivy, Clair, Anchore)
- Multi-stage builds
- No secrets in images
- Image signing (Cosign, Notary)
- Registry security

#### **Runtime Security:**
- Read-only filesystem
- Non-root containers
- Resource limits
- Capabilities dropping
- Seccomp profiles
- AppArmor/SELinux
- Runtime scanning (Falco, Sysdig)

#### **Orchestration Security (Kubernetes):**
- Pod Security Admission
- Network Policies
- RBAC
- Secrets management
- Service mesh (mTLS)
- Admission controllers (OPA Gatekeeper)
- Security scanning (kube-bench, kubescape)

## 8. COMPLIANCE & STANDARDS

### 8.1 Compliance Frameworks
- **PCI DSS (Payment Card Industry):**
  - Requirement 6: Secure development
  - Requirement 11: Security testing
  - SAQ (Self-Assessment Questionnaire)
  - ASV scanning
  
- **HIPAA (Healthcare):**
  - Security Rule
  - Privacy Rule
  - Technical safeguards
  - PHI protection
  
- **GDPR (Privacy):**
  - Privacy by Design
  - Data Protection Impact Assessment
  - Right to erasure
  - Data portability
  - Consent management
  
- **SOC 2:**
  - Trust Services Criteria
  - Security
  - Availability
  - Confidentiality
  
- **ISO 27001:**
  - Information Security Management System
  - Controls (Annex A)
  - Risk assessment
  
- **NIST:**
  - NIST Cybersecurity Framework
  - NIST 800-53
  - Secure SDLC guidelines

### 8.2 Industry Standards
- OWASP ASVS (Application Security Verification Standard)
- OWASP MASVS (Mobile)
- CWE (Common Weakness Enumeration)
- CAPEC (Common Attack Pattern Enumeration)
- SANS Top 25
- CERT Secure Coding Standards

### 8.3 Privacy
- Privacy by Design
- Data minimization
- Purpose limitation
- Consent management
- Data retention
- Data subject rights
- Cross-border data transfers
- Cookie consent
- Privacy policy
- DPIA (Data Protection Impact Assessment)

## 9. SPECIALIZED AREAS

### 9.1 Mobile Application Security

#### **Android Security:**
- **Static Analysis:**
  - APK structure
  - AndroidManifest.xml review
  - Code review (jadx, JD-GUI)
  - Resource analysis
  - Native library analysis
  
- **Dynamic Analysis:**
  - Frida hooking
  - SSL pinning bypass
  - Runtime manipulation
  - Objection framework
  - API monitoring
  
- **Common Vulnerabilities:**
  - Insecure data storage
  - Weak cryptography
  - Insecure communication
  - Improper platform usage
  - Code tampering
  - Reverse engineering
  - Extraneous functionality
  
- **Security Features:**
  - ProGuard/R8 obfuscation
  - Root detection
  - Debugger detection
  - Certificate pinning
  - SafetyNet Attestation
  - Biometric authentication
  - Encrypted SharedPreferences
  - KeyStore usage

#### **iOS Security:**
- **Static Analysis:**
  - IPA structure
  - Plist files
  - Code review (Hopper, class-dump)
  - Entitlements
  
- **Dynamic Analysis:**
  - Frida on iOS
  - SSL Kill Switch
  - Cycript
  - Runtime analysis
  
- **Common Vulnerabilities:**
  - Similar to Android (OWASP Mobile Top 10)
  - Keychain misuse
  - URL scheme hijacking
  - Insecure IPC
  
- **Security Features:**
  - App Transport Security (ATS)
  - Keychain
  - Data Protection API
  - Touch ID/Face ID
  - Jailbreak detection
  - Code obfuscation

#### **Mobile Tools:**
- MobSF (automated analysis)
- Frida
- Objection
- Apktool
- jadx
- Burp Suite Mobile Assistant
- Charles Proxy
- Drozer (Android)

### 9.2 Cloud-Native Application Security
- Serverless security (AWS Lambda, Azure Functions)
- Container security (Docker, Kubernetes)
- Service mesh security (Istio, Linkerd)
- Cloud-native SAST/DAST
- API Gateway security
- Microservices security
- Infrastructure as Code security
- Cloud storage security (S3, Blob, GCS)
- Identity and Access Management (IAM)

### 9.3 IoT Security
- Firmware analysis
- Hardware security
- Communication protocols
- Update mechanisms
- Default credentials
- Insecure network services
- Lack of encryption
- Reverse engineering
- Side-channel attacks

### 9.4 Blockchain/Smart Contract Security
- **Smart Contract Vulnerabilities:**
  - Reentrancy attacks
  - Integer overflow/underflow
  - Access control issues
  - Front-running
  - Timestamp dependence
  - DoS attacks
  
- **Security Tools:**
  - Slither (static analysis)
  - Mythril
  - Securify
  - Echidna (fuzzing)
  - Manticore (symbolic execution)
  
- **Best Practices:**
  - Code audits
  - Formal verification
  - Bug bounties
  - Test coverage
  - OpenZeppelin libraries

### 9.5 AI/ML Security
- Model poisoning
- Adversarial examples
- Model stealing
- Data poisoning
- Privacy attacks (model inversion, membership inference)
- Prompt injection (LLMs)
- Training data security
- Model deployment security
- MLOps security

## 10. SOFT SKILLS & CAREER

### 10.1 Communication Skills
- **Technical Writing:**
  - Vulnerability reports
  - Security documentation
  - Secure coding guidelines
  - Threat model documents
  - Security advisories
  
- **Presentations:**
  - Developer training
  - Executive briefings
  - Conference talks
  - Brown bag sessions
  
- **Collaboration:**
  - Working with developers
  - Cross-functional teams
  - Product managers
  - DevOps teams
  - QA teams
  
- **Developer Empathy:**
  - Understand development pressures
  - Provide actionable advice
  - Prioritize findings realistically
  - Enable, don't block
  - Celebrate security wins

### 10.2 Business Skills
- Risk assessment
- Cost-benefit analysis
- ROI of security
- Prioritization frameworks
- Project management
- Agile/Scrum participation
- Roadmap planning
- Metrics và reporting

### 10.3 Continuous Learning
- Follow security researchers
- Read vulnerability disclosures
- Practice on vulnerable apps
- Attend conferences
- CTF participation
- Bug bounty hunting
- Read source code
- Contribute to open source
- Write blogs/articles
- Certifications

## 11. CERTIFICATIONS

### 11.1 Foundational
- CompTIA Security+
- (ISC)² SSCP
- eLearnSecurity eJPT

### 11.2 Application Security Specific
- **GWAPT (GIAC Web Application Penetration Tester)** - HIGHLY RECOMMENDED
- **eWPTX (eLearnSecurity Web Penetration Tester eXtreme)**
- **OSWE (Offensive Security Web Expert)** - ADVANCED
- Certified Secure Software Lifecycle Professional (CSSLP)
- eWPT (eLearnSecurity Web Penetration Tester)

### 11.3 General Security
- **CISSP** (Certified Information Systems Security Professional)
- **CEH** (Certified Ethical Hacker)
- **OSCP** (Offensive Security Certified Professional)
- CISM (Certified Information Security Manager)

### 11.4 Developer-Focused
- Certified Secure Software Engineer (CSSE)
- SAFECode Developer Training
- Secure Coding certifications (vendor-specific)

### 11.5 Cloud Security
- AWS Certified Security - Specialty
- Azure Security Engineer Associate
- GCP Professional Cloud Security Engineer
- CCSP (Certified Cloud Security Professional)

### 11.6 Programming Certifications
- Oracle Certified Professional Java
- Microsoft Certified: Azure Developer Associate
- CKA/CKAD (Kubernetes)

## 12. HANDS-ON PRACTICE

### 12.1 Intentionally Vulnerable Apps

#### **Web Applications:**
- **OWASP WebGoat** (Java)
- **DVWA** (Damn Vulnerable Web Application)
- **bWAPP** (buggy Web Application)
- **OWASP Juice Shop** (Node.js)
- **Mutillidae II**
- **HackTheBox** (online platform)
- **PortSwigger Web Security Academy**
- **PentesterLab**
- **Hack.me**
- **Kontra Application Security**

#### **API:**
- **OWASP crAPI**
- **VAmPI** (Vulnerable API)
- **Pixi** (vulnerable GraphQL API)
- **Damn Vulnerable GraphQL Application**

#### **Mobile:**
- **DVIA** (Damn Vulnerable iOS App)
- **InsecureBankv2** (Android)
- **OWASP iGoat** (iOS)
- **AndroGoat** (Android)

#### **Microservices:**
- **OWASP ServerlessGoat**
- **CloudGoat** (AWS vulnerable by design)

### 12.2 CTF Platforms
- **HackTheBox**
- **TryHackMe**
- **PicoCTF**
- **OverTheWire**
- **CTFtime** (calendar)
- **Root-Me**
- **VulnHub**

### 12.3 Bug Bounty Platforms
- **HackerOne**
- **Bugcrowd**
- **Intigriti**
- **YesWeHack**
- **Synack**
- **Open Bug Bounty**

### 12.4 Capture The Flag (CTF)
- Web exploitation challenges
- Binary exploitation
- Reverse engineering
- Cryptography
- Forensics
- Team participation
- Write-ups

### 12.5 Practice Environment Setup
- Kali Linux VM
- Burp Suite Pro license
- Docker containers
- Private lab network
- Vulnerable app deployments
- Code review practice repos

## 13. RESOURCES & LEARNING

### 13.1 Books - ESSENTIAL READING
- **"The Web Application Hacker's Handbook"** by Dafydd Stuttard, Marcus Pinto (BIBLE)
- **"Real-World Bug Hunting"** by Peter Yaworski
- "Web Security Testing Cookbook" by Paco Hope
- "The Tangled Web" by Michal Zalewski
- "Iron-Clad Java" by Jim Manico
- "Secure Programming Cookbook" (O'Reilly)
- "Application Security Program Handbook" by Derek Fisher
- "Alice and Bob Learn Application Security" by Tanya Janca
- "Agile Application Security" by Laura Bell et al.
- "Securing DevOps" by Julien Vehent

### 13.2 Online Resources
- **OWASP Projects:**
  - OWASP Top 10
  - ASVS
  - Testing Guide
  - Cheat Sheet Series
  - ZAP
  - Dependency-Check
  
- **PortSwigger:**
  - Web Security Academy (FREE, excellent)
  - Research blog
  - Daily Swig
  
- **YouTube Channels:**
  - OWASP
  - LiveOverflow
  - John Hammond
  - IppSec
  - Bug Bounty Reports Explained
  - PwnFunction
  - Bugcrowd
  - Nahamsec
  - STÖK

### 13.3 Blogs & News
- PortSwigger Research
- Google Project Zero
- Trail of Bits blog
- Detectify Labs
- HackerOne Hacktivity
- Bugcrowd Crowdstream
- OWASP blog
- Snyk blog
- GitHub Security Lab
- Securium blog

### 13.4 Twitter/X Follows
- @PortSwiggerRes
- @OWASP
- @internetwache
- @Jhaddix
- @bugcrowd
- @Hacker0x01
- @naglinagli
- @intigriti
- @samwcyo
- @albinowax

### 13.5 Podcasts
- Darknet Diaries
- Security Weekly
- Risky Business
- Application Security Podcast
- Absolute AppSec
- Breach

### 13.6 Newsletters
- tl;dr sec
- OWASP Top 10 Proactive Controls
- PortSwigger Research
- Detectify Security Updates
- Hacker News (YC)

### 13.7 Communities
- Reddit:
  - r/netsec
  - r/AskNetsec
  - r/websecurity
  - r/bugbounty
- Discord servers:
  - Bug Bounty Forum
  - OWASP
  - Nahamsec
- Slack workspaces:
  - OWASP
  - Bug Bounty World

### 13.8 Conferences
- **OWASP Global AppSec**
- **Black Hat** (USA, Europe, Asia)
- **DEF CON**
- **RSA Conference**
- **BSides** (various cities)
- **AppSec California/EU**
- **LocoMocoSec**
- **SecTor**
- **SANS AppSec Summit**

## 14. CAREER PATH & SALARY

### 14.1 Entry Level
- **Junior AppSec Engineer:**
  - Vulnerability scanning
  - Tool management
  - Finding triage
  - Basic code review
  - Documentation
  - Salary: $70k-$95k
  
- **Security Analyst (AppSec focus):**
  - SAST/DAST scanning
  - Vulnerability management
  - Developer support
  - Salary: $65k-$85k

### 14.2 Mid Level
- **Application Security Engineer:**
  - Security testing (SAST, DAST, manual)
  - Code review
  - Threat modeling
  - Developer training
  - Tool implementation
  - Vulnerability remediation support
  - Salary: $110k-$150k
  
- **Security Software Engineer:**
  - Secure code development
  - Security tool development
  - Security library development
  - Framework security
  - Salary: $120k-$160k

### 14.3 Senior Level
- **Senior AppSec Engineer:**
  - Complex vulnerability research
  - Security architecture review
  - Advanced threat modeling
  - Mentoring junior engineers
  - Security program development
  - Salary: $150k-$200k
  
- **Lead AppSec Engineer:**
  - Team leadership
  - Security strategy
  - Tool selection
  - Process improvement
  - Cross-team collaboration
  - Salary: $160k-$210k

### 14.4 Expert/Specialist
- **Principal AppSec Engineer:**
  - Technical leadership
  - Industry thought leader
  - Complex problem solving
  - Innovation
  - R&D
  - Salary: $180k-$250k+
  
- **Security Researcher (AppSec focus):**
  - Vulnerability research
  - Tool development
  - Conference speaking
  - CVE discoveries
  - Salary: $150k-$250k+ (với bug bounties)

### 14.5 Management
- **AppSec Manager:**
  - Team management
  - Budget ownership
  - Program management
  - Stakeholder communication
  - Metrics và reporting
  - Salary: $160k-$220k
  
- **Director of Application Security:**
  - Strategic planning
  - Multiple teams
  - Executive reporting
  - Cross-functional leadership
  - Salary: $200k-$280k
  
- **CISO/VP Security:**
  - Enterprise security strategy
  - Board communication
  - Risk management
  - Compliance
  - Salary: $250k-$500k+

### 14.6 Freelance/Consulting
- Independent AppSec Consultant
- Bug bounty hunter (full-time)
- Security training/workshops
- Penetration testing services
- Variable income: $100k-$300k+

### 14.7 Industries
- **Big Tech** (Google, Meta, Amazon, Microsoft, Apple):
  - Highest salaries
  - Cutting-edge tech
  - Large scale
  - Competitive
  
- **Fintech/Banking:**
  - High security requirements
  - Regulatory compliance
  - Good compensation
  
- **Healthcare:**
  - HIPAA compliance
  - Privacy focus
  - Growing demand
  
- **SaaS Companies:**
  - Security as competitive advantage
  - Fast-paced
  - Modern tech stack
  
- **Security Vendors:**
  - Product security
  - Research opportunities
  - Industry visibility
  
- **Consulting:**
  - Diverse projects
  - Travel opportunities
  - Varied technologies
  
- **Startups:**
  - Equity potential
  - Wear many hats
  - Build from scratch

---

## LỘ TRÌNH HỌC ĐỀ XUẤT (18-24 THÁNG)

### **Tháng 1-3: Programming Foundations**
- Chọn 1-2 ngôn ngữ chính (Python + JavaScript/Java)
- Web technologies (HTTP, HTML, CSS, JavaScript)
- Basic web development (build simple apps)
- Git và version control
- Basic security concepts

### **Tháng 4-6: Security Fundamentals**
- OWASP Top 10 deep dive
- Burp Suite mastery
- PortSwigger Web Security Academy (complete)
- DVWA, WebGoat practice
- Basic vulnerability assessment
- Start bug bounty (easy targets)

### **Tháng 7-9: Code Review & SAST**
- Secure coding practices
- Code review techniques
- SAST tools (SonarQube, Semgrep)
- Common vulnerability patterns in code
- Static analysis interpretation
- Language-specific vulnerabilities

### **Tháng 10-12: Advanced Testing & Tools**
- DAST mastery (ZAP)
- API security testing
- Mobile security basics
- SCA tools và dependency management
- Threat modeling
- OWASP ASVS

### **Tháng 13-15: DevSecOps & Automation**
- CI/CD security
- Pipeline integration (SAST, DAST, SCA)
- Infrastructure as Code security
- Container security
- Kubernetes security basics
- Security automation scripting

### **Tháng 16-18: Specialization & Advanced Topics**
- Choose specialization (mobile, cloud, API, etc.)
- Advanced penetration testing
- Security architecture
- Advanced threat modeling
- Security program development
- First certification (GWAPT or eWPT)

### **Tháng 19-24: Mastery & Leadership**
- Advanced certifications (OSWE, CISSP)
- Security research
- Conference speaking
- Blog writing
- Mentoring others
- Open source contributions
- Bug bounty success

---

## TIPS ĐỂ THÀNH CÔNG

### Daily Practice
- Code review practice (GitHub, open source)
- Bug bounty hunting (at least 1 hour/day)
- Read vulnerability disclosures
- Practice on vulnerable apps
- Read other people's write-ups
- Contribute to security tools

### Build Portfolio
- **GitHub:**
  - Security tools developed
  - Vulnerable app fixes
  - Custom Burp extensions
  - Automation scripts
  - Code review examples
  
- **Blog:**
  - Vulnerability write-ups
  - How-to guides
  - Tool reviews
  - CTF write-ups
  - Bug bounty reports (disclosed)
  
- **Bug Bounty:**
  - HackerOne profile
  - Hall of Fame entries
  - CVEs discovered
  - Disclosed reports

### Networking
- Twitter security community
- Conference attendance
- Local security meetups
- OWASP chapter participation
- Bug bounty Discord/Slack
- Contribute to discussions
- Help beginners

### Communication Skills
- Write clearly
- Explain vulnerabilities to non-technical stakeholders
- Create developer-friendly reports
- Present security findings
- Teach secure coding
- Document processes

### Developer Mindset
- Learn to code WELL (not just security)
- Understand developer workflows
- Use developer tools (IDE, Git, CI/CD)
- Contribute to feature development
- Understand business requirements
- Balance security và velocity

### Stay Current
- Follow security researchers
- Read CVE disclosures
- New attack techniques
- Framework updates
- Tool updates
- OWASP updates
- Compliance changes

### Soft Skills
- Patience (developers are not enemies)
- Empathy (understand constraints)
- Pragmatism (not every vulnerability is critical)
- Collaboration (security is a team sport)
- Teaching (enable developers)
- Business acumen (understand trade-offs)

---

## KẾT LUẬN

Application Security Engineer là role **CỰC KỲ CẦU** và **GROWING FAST**.

**Tại sao chọn AppSec:**
- ✅ High demand (every company needs AppSec)
- ✅ Lương cao ($120k-$250k+ cho senior)
- ✅ Work-life balance tốt (ít on-call hơn SOC/IR)
- ✅ Remote-friendly
- ✅ Kết hợp dev + security (best of both worlds)
- ✅ Enable developers (positive impact)
- ✅ Continuous learning (new tech, new vulnerabilities)
- ✅ Creative problem-solving
- ✅ Code review và development skills
- ✅ Bug bounty side income potential
- ✅ Career growth (nhiều paths: architect, manager, researcher)

**Challenges:**
- ⚠️ Phải biết lập trình THẬT SỰ (not just scripting)
- ⚠️ Học nhiều ngôn ngữ và frameworks
- ⚠️ Technology changes fast
- ⚠️ Developer pushback đôi khi
- ⚠️ Balancing security vs speed
- ⚠️ False positives management
- ⚠️ Continuous learning required

**Perfect for you if:**
- 💡 Biết code VÀ thích security
- 💡 Enjoy problem-solving
- 💡 Like working with developers
- 💡 Good communicator
- 💡 Detail-oriented
- 💡 Patient và empathetic
- 💡 Pragmatic, not paranoid
- 💡 Enjoy teaching

**Key Differentiators:**
Unlike pure pentesters: bạn ENABLE developers, not just find bugs
Unlike pure developers: bạn có security mindset và defensive thinking
Unlike SOC: bạn làm việc PREVENTIVE, not reactive

Đây là role **VÀNG** cho ai muốn kết hợp coding và security! 🔐💻✨