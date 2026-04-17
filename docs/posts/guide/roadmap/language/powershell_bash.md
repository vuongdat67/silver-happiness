# ROADMAP POWERSHELL AND BASH - SCRIPTING AND AUTOMATION

## GIAI ĐOẠN 1: NỀN TẢNG CƠ BẢN (2-3 tháng)

### BASH (Shell Scripting)

#### Khởi đầu
- Terminal emulators: GNOME Terminal, iTerm2, Windows Terminal
- Shell types: sh, bash, zsh, fish
- bash --version
- Shebang: #!/bin/bash
- Script permissions: chmod +x script.sh
- Running scripts: ./script.sh, bash script.sh
- PATH variable
- Text editors: vim, nano, VS Code

#### Bash Basics

##### Comments
- Single line: # comment
- Multi-line comments trick
- Documentation comments

##### Variables
- Variable declaration: name=value
- No spaces around =
- Variable usage: $variable, ${variable}
- Command substitution: $(command), `command`
- Arithmetic expansion: $((expression))
- Local vs global variables
- export keyword
- readonly variables
- unset command

##### Data Types
- Strings: single quotes, double quotes
- Integers
- Arrays: declare -a array
- Associative arrays: declare -A map
- No explicit types (everything is string)

##### String Operations
- Concatenation
- String length: ${#string}
- Substring: ${string:position:length}
- String replacement: ${string/pattern/replacement}
- Case conversion: ${string^^}, ${string,,}
- String comparison
- Pattern matching

##### User Input/Output
- echo command
- printf command
- read command
- read -p "prompt" variable
- read -s (silent for passwords)
- read -a (read into array)
- read -t (timeout)

##### Command Line Arguments
- $0: script name
- $1, $2, ...: positional parameters
- $#: number of arguments
- $@: all arguments as separate
- $*: all arguments as single string
- shift command
- getopts for option parsing

#### Control Flow

##### Conditional Statements
- if [ condition ]; then ... fi
- if-else
- if-elif-else
- Nested if statements
- Test operators: -eq, -ne, -gt, -lt, -ge, -le
- String operators: =, !=, -z, -n
- File test operators: -e, -f, -d, -r, -w, -x, -s
- Logical operators: &&, ||, !
- `[[ ]]` vs `[ ]` (double brackets preferred)
- case statements

##### Loops
- for loop: for var in list
- C-style for: for ((i=0; i<10; i++))
- while loop
- until loop
- break statement
- continue statement
- Loop over files
- Loop over command output
- Infinite loops

#### Functions
- Function declaration: function_name() { }
- Function parameters: $1, $2, ...
- Return values: return, echo
- Local variables: local var=value
- Function scope
- Recursion
- Function libraries

#### Arrays
- Indexed arrays: array=(val1 val2 val3)
- Array access: ${array[index]}
- Array length: ${#array[@]}
- Array slicing: ${array[@]:start:length}
- Append to array: array+=(value)
- Iterate arrays: for item in "${array[@]}"
- Associative arrays (bash 4+)
- declare -A for maps

### POWERSHELL

#### Khởi đầu
- PowerShell versions: 5.1 (Windows), 7+ (Cross-platform)
- Installation: Windows (built-in), Linux/Mac (install pwsh)
- PowerShell ISE (Windows only)
- VS Code với PowerShell extension
- Execution policy: Get-ExecutionPolicy, Set-ExecutionPolicy
- Script files: .ps1
- Running scripts: .\script.ps1
- $PROFILE file
- Help system: Get-Help, Update-Help

#### PowerShell Basics

##### Comments
- Single line: # comment
- Multi-line: <# comment #>
- Comment-based help

##### Variables
- Variable declaration: $variable = value
- Variable types (strongly typed available)
- Type casting: [int]$number = "5"
- Automatic variables: $_, $PSItem, $args, $HOME
- Environment variables: $env:PATH
- Variable scope: Global, Script, Local, Private
- Constants: Set-Variable -Option Constant
- Read-only variables: Set-Variable -Option ReadOnly

##### Data Types
- Strings: "string", 'string'
- Numbers: integers, decimals
- Booleans: $true, $false
- Arrays: @(1, 2, 3)
- Hash tables: @{key=value}
- PSCustomObject
- [DateTime], [TimeSpan]
- Type operators: -is, -as

##### Operators
- Arithmetic: +, -, *, /, %
- Comparison: -eq, -ne, -gt, -lt, -ge, -le
- String comparison: -like, -notlike, -match, -notmatch
- Contains operators: -contains, -notcontains, -in, -notin
- Logical: -and, -or, -not, !
- Assignment: =, +=, -=, *=, /=, %=
- Range operator: ..
- Call operator: &
- Dot sourcing: .

##### String Operations
- String concatenation: + operator
- String interpolation: "Value is $variable"
- String formatting: -f operator
- Here-strings: @" ... "@
- Substring: Substring()
- Replace: -replace
- Split: -split
- Join: -join
- ToUpper(), ToLower()
- Trim(), TrimStart(), TrimEnd()

##### Input/Output
- Write-Host
- Write-Output
- Write-Verbose, Write-Debug, Write-Warning, Write-Error
- Read-Host
- Read-Host -AsSecureString
- Out-File, Out-Null, Out-GridView
- Format-Table, Format-List, Format-Wide

##### Cmdlets (Command-lets)
- Verb-Noun naming
- Get-Command
- Get-Member
- Get-ChildItem (ls, dir)
- Set-Location (cd)
- Copy-Item, Move-Item, Remove-Item
- New-Item
- Get-Content, Set-Content, Add-Content
- Select-Object, Where-Object, ForEach-Object
- Sort-Object, Group-Object, Measure-Object

#### Control Flow

##### Conditional Statements
- if ($condition) { }
- if-else
- if-elseif-else
- Comparison operators
- Logical operators
- switch statements
- switch -Regex, -Wildcard

##### Loops
- for loop: for ($i=0; $i -lt 10; $i++)
- foreach loop: foreach ($item in $collection)
- ForEach-Object: | ForEach-Object { }
- while loop
- do-while loop
- do-until loop
- break
- continue

#### Functions
- Function declaration: function Name { }
- Parameters: param()
- Parameter attributes: [Parameter(Mandatory=$true)]
- Parameter validation
- Parameter sets
- Begin, Process, End blocks
- Pipeline input: ValueFromPipeline
- Return values
- Advanced functions
- [CmdletBinding()]
- $PSBoundParameters

#### Arrays và Collections
- Arrays: @(1, 2, 3)
- Array indexing: $array[0]
- Array methods: Add, Remove, Contains
- ArrayList: [System.Collections.ArrayList]
- Generic List: [System.Collections.Generic.List[int]]
- Hash tables: @{key='value'}
- Ordered hash tables: [ordered]@{}
- PSCustomObject creation

## GIAI ĐOẠN 2: INTERMEDIATE (3-4 tháng)

### BASH INTERMEDIATE

#### File Operations
- cat, less, more, head, tail
- grep, egrep, fgrep
- sed (stream editor)
- awk (text processing)
- cut, paste, join
- sort, uniq
- wc (word count)
- find command
- xargs
- tar, gzip, bzip2, zip
- File descriptors: stdin (0), stdout (1), stderr (2)

#### Redirection và Pipes
- Output redirection: >, >>
- Input redirection: 
- Error redirection: 2>, 2>>
- Redirect both: &>, &>>
- Here documents: <<EOF
- Here strings: <
- Pipes: |
- tee command
- Process substitution: <(command)
- Named pipes (FIFOs)

#### Text Processing
- sed basics
- sed substitution: s/pattern/replacement/
- sed line addressing
- sed multiple commands
- awk basics
- awk patterns và actions
- awk built-in variables: NR, NF, FS, OFS
- awk arrays
- Regular expressions
- grep options: -i, -v, -r, -n, -c

#### Process Management
- ps command
- top, htop
- kill, killall, pkill
- jobs, fg, bg
- nohup
- & (background jobs)
- wait command
- Process IDs: $$, $!
- trap command (signal handling)
- nice và renice (priority)

#### Environment và Configuration
- Environment variables
- .bashrc, .bash_profile, .profile
- alias command
- export command
- source command (. command)
- PATH management
- PS1 (prompt customization)

#### Regular Expressions
- Basic regex syntax
- Character classes: [abc], [a-z]
- Quantifiers: *, +, ?, {n,m}
- Anchors: ^, $
- Groups: ( )
- Extended regex: -E flag
- Perl-compatible regex: -P flag
- grep, sed, awk với regex

#### Error Handling
- Exit codes: $?
- set -e (exit on error)
- set -u (exit on undefined variable)
- set -o pipefail
- set -x (debug mode)
- Error messages to stderr
- Custom error functions
- Logging

#### Networking
- curl
- wget
- ping
- netstat, ss
- ifconfig, ip
- nc (netcat)
- ssh, scp, sftp
- dig, nslookup, host

### POWERSHELL INTERMEDIATE

#### Working với Objects
- Object pipeline
- Get-Member
- Select-Object: properties selection
- Where-Object: filtering
- ForEach-Object: iteration
- Sort-Object
- Group-Object
- Measure-Object: statistics
- Compare-Object
- Object properties vs methods
- PSCustomObject creation

#### File System Operations
- Get-ChildItem advanced
- Test-Path
- Join-Path
- Split-Path
- Resolve-Path
- Get-Item vs Get-ChildItem
- File filters và recursion
- Copy-Item, Move-Item, Remove-Item
- New-Item: files, directories
- Get-Content, Set-Content, Add-Content
- Out-File vs Set-Content
- Import-Csv, Export-Csv
- ConvertFrom-Json, ConvertTo-Json
- ConvertFrom-Xml, ConvertTo-Xml

#### Regular Expressions
- -match operator
- -replace operator
- [regex]::Match()
- [regex]::Matches()
- Capture groups: $Matches
- Regex options
- Select-String cmdlet
- Named captures

#### Error Handling
- Try-Catch-Finally
- Throw
- $Error automatic variable
- $ErrorActionPreference
- -ErrorAction parameter
- $? automatic variable
- $LASTEXITCODE
- Write-Error
- Custom error records
- Terminating vs non-terminating errors

#### Remote Management
- PowerShell Remoting
- Enable-PSRemoting
- Invoke-Command
- Enter-PSSession
- New-PSSession
- Session management
- CredSSP authentication
- WinRM configuration
- Remote file copy
- SSH-based remoting (PS 7+)

#### Modules
- Get-Module
- Import-Module
- Module auto-loading
- Module paths: $env:PSModulePath
- Creating modules: .psm1 files
- Module manifests: .psd1 files
- Export-ModuleMember
- Module scope
- Script modules vs binary modules

#### Working với .NET
- Using .NET classes: [System.IO.File]
- Static methods
- Creating .NET objects: New-Object
- [PSCustomObject] vs [PSObject]
- Type accelerators
- Add-Type
- Calling .NET methods
- .NET collections
- LINQ queries

#### Data Formats
- CSV: Import-Csv, Export-Csv
- JSON: ConvertFrom-Json, ConvertTo-Json
- XML: Import-Clixml, Export-Clixml
- XML manipulation: [xml] type
- HTML: ConvertTo-Html
- YAML (với modules)
- Working với APIs

#### Background Jobs
- Start-Job
- Get-Job
- Receive-Job
- Wait-Job
- Remove-Job
- Job state
- Scheduled jobs
- Parallel jobs (PS 7+)
- ThreadJobs

## GIAI ĐOẠN 3: ADVANCED (4-5 tháng)

### BASH ADVANCED

#### Advanced Scripting Techniques
- Script templates
- Argument parsing với getopts
- Long options parsing
- Configuration files
- INI file parsing
- JSON parsing với jq
- YAML parsing với yq
- Script versioning
- Self-documenting scripts

#### Process Control
- Subshells: ( commands )
- Command grouping: { commands; }
- Process substitution: <(cmd), >(cmd)
- Coprocesses (bash 4+)
- File locking: flock
- Semaphores
- Inter-process communication
- Signal handling với trap
- Exit handlers

#### Advanced Functions
- Function libraries
- Namespacing strategies
- Return values vs exit codes
- Global vs local scope
- Function recursion
- Higher-order functions
- Callback functions
- Function overloading workarounds

#### Arrays Advanced
- Sparse arrays
- Multi-dimensional arrays (workarounds)
- Array operations: append, prepend, delete
- Array sorting
- Array as stack/queue
- Set operations với arrays
- Associative arrays advanced

#### Debugging
- set -x (xtrace)
- set -v (verbose)
- PS4 customization
- bashdb debugger
- shellcheck (linting)
- Logging strategies
- Debug functions
- Assert functions

#### Performance Optimization
- Avoiding subshells
- Builtin commands vs external
- String manipulation vs sed/awk
- Process substitution vs temp files
- Efficient loops
- Caching results
- Parallel execution với xargs
- GNU parallel

#### Testing
- Unit testing: shunit2, bats
- Integration testing
- Test-driven development
- Mocking external commands
- Test fixtures
- Continuous integration
- Code coverage

#### Security
- Input validation
- SQL injection prevention
- Command injection prevention
- Path traversal prevention
- Secure temporary files: mktemp
- Privilege escalation
- sudo best practices
- Secret management
- Environment sanitization

#### System Administration
- User management: useradd, usermod, userdel
- Group management: groupadd, groupmod
- Permission management: chmod, chown, chgrp
- ACLs: getfacl, setfacl
- SELinux basics
- Systemd service scripts
- Cron jobs
- Log rotation
- Disk management
- Package management: apt, yum, dnf

#### Networking Advanced
- Socket programming
- HTTP requests với curl
- API interactions
- JSON/XML parsing
- Web scraping
- Port scanning
- Network monitoring
- SSH automation
- SSH key management
- Tunneling

### POWERSHELL ADVANCED

#### Advanced Functions
- CmdletBinding attribute
- Parameter validation: ValidateSet, ValidateRange, ValidatePattern
- Parameter transformation
- Dynamic parameters
- Parameter sets
- ShouldProcess (WhatIf, Confirm)
- Pipeline input: ValueFromPipeline, ValueFromPipelineByPropertyName
- Begin-Process-End blocks
- Output types: [OutputType()]
- Comment-based help
- External help files

#### Classes (PowerShell 5+)
- Class definition
- Properties
- Methods
- Constructors
- Static members
- Inheritance
- Interfaces (via abstract classes)
- Enums
- Custom types
- Type casting

#### Error Handling Advanced
- Custom exceptions
- Error records
- ErrorAction preferences
- Terminating errors
- Non-terminating errors
- Error categories
- Error handling in pipelines
- Debugging errors
- Stack traces

#### Performance Optimization
- Measure-Command
- Stopwatch class
- StringBuilder for strings
- ArrayList vs arrays
- HashSet for lookups
- Pipeline optimization
- Filtering left
- Avoiding Out-String
- Parallel processing
- Runspaces
- ThreadJobs

#### Working với COM Objects
- New-Object -ComObject
- Excel automation
- Word automation
- Outlook automation
- Internet Explorer automation
- COM object cleanup

#### Working với WMI/CIM
- Get-WmiObject (legacy)
- Get-CimInstance
- CIM sessions
- Common WMI classes
- Event subscriptions
- Remote WMI queries
- WMI queries (WQL)
- Performance counters

#### Windows Management
- Registry: Get-ItemProperty, Set-ItemProperty
- Services: Get-Service, Start-Service, Stop-Service
- Processes: Get-Process, Stop-Process
- Event logs: Get-EventLog, Get-WinEvent
- Scheduled tasks: ScheduledTasks module
- Windows features
- Windows updates
- Active Directory module
- Group Policy

#### DSC (Desired State Configuration)
- Configuration blocks
- Resources
- MOF files
- LCM (Local Configuration Manager)
- Push vs Pull modes
- DSC resource development
- Composite resources

#### Testing
- Pester framework
- Describe, Context, It blocks
- Should assertions
- Mocking: Mock
- Test-driven development
- Code coverage
- Integration testing
- CI/CD integration

#### Debugging
- Set-PSBreakpoint
- Debug mode: Set-PSDebug
- Verbose output: Write-Verbose
- Debug output: Write-Debug
- Transcript logging: Start-Transcript
- $DebugPreference
- $VerbosePreference
- VS Code debugging

#### Security
- Execution policies
- Code signing
- Certificate management
- SecureString
- PSCredential objects
- Credential management
- JEA (Just Enough Administration)
- Constrained endpoints
- RunAs credentials
- Secret management module

#### PowerShell Remoting Advanced
- Session configurations
- Custom endpoints
- Implicit remoting
- Multi-hop remoting
- CredSSP delegation
- Session options
- Disconnected sessions
- Fan-out remoting
- Parallel remoting

## GIAI ĐOẠN 4: AUTOMATION AND DEVOPS (4-6 tháng)

### BASH FOR DEVOPS

#### CI/CD Scripts
- GitLab CI scripts
- GitHub Actions
- Jenkins pipeline scripts
- Build automation
- Test automation
- Deployment scripts
- Rollback scripts
- Health checks

#### Container Management
- Docker scripts
- docker-compose automation
- Container health checks
- Log aggregation
- Container cleanup
- Image building
- Registry management
- Kubernetes scripts

#### Configuration Management
- Ansible playbook scripts
- Salt scripts
- Chef recipes scripting
- Puppet scripting
- Configuration file generation
- Template rendering

#### Infrastructure as Code
- Terraform scripts
- CloudFormation scripts
- Resource provisioning
- State management
- Infrastructure validation
- Cost optimization scripts

#### Cloud Automation
- AWS CLI scripting
- Azure CLI scripting
- GCP gcloud scripting
- S3 automation
- EC2 management
- Lambda deployment
- Cloud resource monitoring

#### Monitoring và Logging
- Log parsing scripts
- Metric collection
- Alert generation
- Prometheus scripts
- Grafana provisioning
- ELK stack automation
- Log rotation
- Performance monitoring

#### Backup và Recovery
- Backup scripts
- Database backups
- Incremental backups
- Backup verification
- Restore procedures
- Disaster recovery scripts
- Backup retention policies

### POWERSHELL FOR DEVOPS

#### Windows Server Management
- Server configuration
- IIS management
- SQL Server automation
- DNS management
- DHCP management
- File server management
- Print server management
- Certificate services

#### Active Directory
- User management: New-ADUser, Set-ADUser
- Group management
- OU management
- Computer accounts
- Group Policy
- AD queries: Get-ADUser, Get-ADGroup
- AD reporting
- Bulk operations
- Password management
- AD replication

#### Exchange Server
- Mailbox management
- Distribution groups
- Email flow rules
- Mailbox databases
- Client access settings
- Exchange Online (Office 365)
- Migration scripts

#### Azure Automation
- Azure PowerShell module
- Azure CLI automation
- Resource group management
- VM management
- Storage management
- Network management
- Azure Functions
- ARM template deployment
- Azure DevOps automation

#### Office 365 Administration
- User management
- License management
- SharePoint Online
- Teams management
- Exchange Online
- Security & Compliance
- PowerShell SDK for Graph API

#### SQL Server Management
- Database operations
- Backup automation
- Maintenance plans
- Query execution
- Performance monitoring
- Index maintenance
- SQL Agent jobs
- SSRS automation

#### Hyper-V Management
- VM creation và management
- Virtual networking
- Snapshots
- Resource allocation
- Live migration
- Cluster management

#### System Monitoring
- Performance counters
- Event log monitoring
- Service monitoring
- Disk space monitoring
- Alert generation
- Email notifications
- Dashboard creation
- Report generation

## GIAI ĐOẠN 5: ENTERPRISE AND PRODUCTION (4-6 tháng)

### BASH ENTERPRISE

#### Large-Scale Automation
- Multi-server management
- Parallel execution strategies
- Inventory management
- Dynamic host lists
- Load balancing scripts
- Distributed task execution

#### High Availability
- Health check scripts
- Failover automation
- Service recovery
- Cluster management
- Load balancer configuration
- Database replication

#### Security Hardening
- Security audit scripts
- Compliance checking: CIS benchmarks
- Vulnerability scanning integration
- Patch management
- Security baseline enforcement
- Access control auditing
- Log analysis for security
- Intrusion detection

#### Database Administration
- MySQL/PostgreSQL automation
- Backup và restore
- Replication setup
- Performance tuning
- Query optimization
- Schema migration
- Database monitoring

#### Web Server Management
- Nginx configuration
- Apache configuration
- SSL/TLS management
- Virtual host management
- Log analysis
- Performance tuning
- Load testing

#### Application Deployment
- Blue-green deployment
- Canary deployment
- Rolling updates
- Version management
- Dependency management
- Environment management
- Configuration management

### POWERSHELL ENTERPRISE

#### Enterprise Reporting
- AD reporting
- Server inventory
- License compliance
- Performance reports
- Security audit reports
- Capacity planning reports
- HTML report generation
- Excel report generation
- PDF generation

#### Automation Frameworks
- PowerShell Universal
- Azure Automation
- Jenkins integration
- Scheduled task frameworks
- Orchestration patterns
- Workflow automation

#### Identity Management
- User provisioning
- De-provisioning workflows
- Access request automation
- Role-based access
- Identity lifecycle
- Multi-forest AD
- Azure AD synchronization

#### Compliance Automation
- SOC compliance
- HIPAA compliance
- PCI-DSS compliance
- Audit log collection
- Compliance reporting
- Policy enforcement
- Configuration drift detection

#### Disaster Recovery
- DR planning automation
- Failover procedures
- Recovery testing
- Documentation generation
- RTO/RPO monitoring
- Backup verification

#### Cost Optimization
- Resource utilization reports
- Unused resource identification
- License optimization
- Cloud cost analysis
- Right-sizing recommendations
- Reservation recommendations

## GIAI ĐOẠN 6: MASTERY (liên tục)

### Cross-Platform Scripting
- WSL (Windows Subsystem for Linux)
- PowerShell 7 on Linux
- Cross-platform scripts
- Path handling differences
- Line ending issues
- Shell detection
- Platform-specific code

### Best Practices

#### BASH Best Practices
- ShellCheck compliance
- Error handling everywhere
- Input validation
- Quoting variables
- Use `[[ ]]` over `[ ]`
- Avoid eval
- Use functions
- Meaningful variable names
- Comments và documentation
- Version control
- Code review
- Testing
- Logging standards
- Exit codes

#### PowerShell Best Practices
- Use approved verbs
- CmdletBinding on advanced functions
- Parameter validation
- Output objects, not text
- Use pipeline
- Error handling
- Help documentation
- Use modules
- Avoid aliases trong scripts
- Code formatting
- PSScriptAnalyzer compliance
- Version control
- Pester tests

### Code Organization
- Project structure
- Module organization
- Configuration management
- Secret management
- Logging frameworks
- Error handling frameworks
- Testing frameworks
- Documentation

### Performance Tuning
- Profiling tools
- Bottleneck identification
- Algorithm optimization
- Resource management
- Caching strategies
- Parallel execution
- Memory management

### Security Best Practices
- Principle of least privilege
- Input validation
- Output encoding
- Secure credential handling
- Secrets management: HashiCorp Vault
- Audit logging
- Security scanning
- Code signing
- Vulnerability management

### Community và Learning
- Stack Overflow
- GitHub repositories
- Reddit: r/bash, r/PowerShell
- PowerShell.org
- Bash Hackers Wiki
- Conference talks
- Blog posts
- YouTube channels
- Online courses
- Certification paths

### Tools Ecosystem

#### BASH Tools
- shellcheck: linting
- shfmt: formatting
- bash-completion
- bash-git-prompt
- oh-my-bash
- bash-it
- direnv
- fzf: fuzzy finder
- ripgrep, fd, bat

#### PowerShell Tools
- PSScriptAnalyzer: linting
- PowerShell Gallery
- PSReadLine
- oh-my-posh
- Terminal-Icons
- posh-git
- PSFzf
- PowerShell modules ecosystem

### Books và Resources
- "The Linux Command Line" - William Shotts
- "Learning the bash Shell" - Cameron Newham
- "Learn Windows PowerShell in a Month of Lunches"
- "PowerShell in Depth"
- "Pro PowerShell for Database Developers"
- Official Microsoft Learn
- Linux man pages
- about_ topics trong PowerShell

## LỘ TRÌNH HỌC TẬP ĐỀ XUẤT

**Tháng 1-3**: Giai đoạn 1 - Basics của cả Bash và PowerShell

**Tháng 4-7**: Giai đoạn 2 - Intermediate concepts, file operations, objects

**Tháng 8-12**: Giai đoạn 3 - Advanced scripting, debugging, performance

**Tháng 13-18**: Giai đoạn 4 - DevOps automation, CI/CD, cloud

**Tháng 19-24**: Giai đoạn 5 - Enterprise patterns, production readiness

**Tháng 25+**: Giai đoạn 6 - Mastery, best practices, community

## TIPS ĐỂ MASTER SCRIPTING

- Practice daily với real problems
- Start small, scale gradually
- Read other people's scripts
- Contribute to open source
- Automate your daily tasks
- Learn one deeply before switching
- Understand the underlying OS
- Master regex thoroughly
- Learn text processing tools
- Version control all scripts
- Write reusable functions
- Comment your code well
- Handle errors properly
- Test your scripts
- Use linters: shellcheck, PSScriptAnalyzer
- Read official documentation
- Follow scripting communities
- Watch conference talks
- Build a personal script library
- Learn from failures
- Security first mindset
- Performance matters
- Cross-platform awareness (PS 7+)
- Keep learning new techniques
- Teach others what you learn
- Build automation portfolio
- Measure performance
- Optimize iteratively
- Document your work
- Stay curious!

## PROJECT IDEAS

**Beginner:**
- System information script
- File backup script
- Log parser
- User creation script
- Service monitor

**Intermediate:**
- Server health check dashboard
- Automated deployment script
- Configuration management
- Log aggregation tool
- Database backup automation

**Advanced:**
- Complete CI/CD pipeline
- Multi-server orchestration
- Infrastructure provisioning
- Monitoring system
- Self-healing infrastructure
- Compliance automation framework

Chúc bạn thành công trên con đường master Scripting & Automation với PowerShell và Bash!