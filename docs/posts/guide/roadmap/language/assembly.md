# ROADMAP ASSEMBLY 

## GIAI ĐOẠN 1: NỀN TẢNG CƠ BẢN (3-4 tháng)

### Khởi đầu

#### Kiến thức tiên quyết
- Hệ thống số: Binary, Hexadecimal, Octal
- Chuyển đổi giữa các hệ số
- Boolean algebra
- Logic gates
- Binary arithmetic: cộng, trừ, nhân, chia
- Two's complement
- Bit operations: AND, OR, XOR, NOT, shift
- Computer architecture basics

#### Môi trường phát triển
- Assemblers: NASM, MASM, GAS (GNU Assembler), FASM, YASM
- Linkers: ld, link.exe
- Debuggers: GDB, OllyDbg, x64dbg, WinDbg, IDA Pro, Ghidra
- Emulators: QEMU, Bochs, DOSBox
- Text editors: VS Code, Vim, Notepad++
- IDE: Visual Studio, SASM, Emu8086

#### Assembly Flavors
- Intel syntax vs AT&T syntax
- NASM syntax
- MASM syntax
- GAS syntax
- Inline assembly trong C/C++

### Computer Architecture Fundamentals

#### CPU Architecture
- Von Neumann architecture
- Harvard architecture
- Instruction cycle: Fetch-Decode-Execute
- Clock cycles
- Pipeline basics
- Branch prediction
- Cache hierarchy: L1, L2, L3
- Memory hierarchy
- Bus architecture

#### Registers (x86/x64)
- General Purpose Registers (GPR):
  - AX, BX, CX, DX (16-bit)
  - EAX, EBX, ECX, EDX (32-bit)
  - RAX, RBX, RCX, RDX (64-bit)
  - AL, AH, BL, BH, CL, CH, DL, DH (8-bit)
- Index Registers: SI, DI, ESI, EDI, RSI, RDI
- Pointer Registers: BP, SP, EBP, ESP, RBP, RSP
- Instruction Pointer: IP, EIP, RIP
- Segment Registers: CS, DS, SS, ES, FS, GS
- Flags Register: EFLAGS, RFLAGS
  - ZF (Zero Flag)
  - CF (Carry Flag)
  - SF (Sign Flag)
  - OF (Overflow Flag)
  - PF (Parity Flag)
  - AF (Auxiliary Flag)
  - IF (Interrupt Flag)
  - DF (Direction Flag)
  - TF (Trap Flag)

#### Memory Organization
- Memory addressing
- Segmented memory model
- Flat memory model
- Little-endian vs Big-endian
- Memory segments: Code, Data, Stack, Heap
- Virtual memory
- Memory paging
- Memory protection

### x86 Assembly Basics (16-bit Real Mode)

#### Program Structure
- Sections: .data, .bss, .text
- Labels
- Comments: ; single line
- Directives: DB, DW, DD, DQ, DT
- Data definitions
- EQU directive
- TIMES directive
- Global và External declarations

#### Data Types
- Byte (8-bit): DB
- Word (16-bit): DW
- Double Word (32-bit): DD
- Quad Word (64-bit): DQ
- Ten Bytes (80-bit): DT
- String definitions
- Arrays
- Structures (STRUC)

#### Basic Instructions

##### Data Movement
- MOV: move data
- XCHG: exchange
- LEA: load effective address
- LDS, LES: load pointer
- PUSH: push onto stack
- POP: pop from stack
- PUSHF, POPF: flags
- IN, OUT: I/O operations

##### Arithmetic Instructions
- ADD: addition
- ADC: add with carry
- SUB: subtraction
- SBB: subtract with borrow
- INC: increment
- DEC: decrement
- NEG: negate
- MUL: unsigned multiply
- IMUL: signed multiply
- DIV: unsigned divide
- IDIV: signed divide
- CMP: compare

##### Logical Instructions
- AND: bitwise AND
- OR: bitwise OR
- XOR: bitwise XOR
- NOT: bitwise NOT
- TEST: logical compare
- SHL/SAL: shift left
- SHR: shift right
- SAR: arithmetic shift right
- ROL: rotate left
- ROR: rotate right
- RCL: rotate through carry left
- RCR: rotate through carry right

##### Control Flow
- JMP: unconditional jump
- Conditional jumps:
  - JE/JZ: jump if equal/zero
  - JNE/JNZ: jump if not equal/not zero
  - JG/JNLE: jump if greater
  - JGE/JNL: jump if greater or equal
  - JL/JNGE: jump if less
  - JLE/JNG: jump if less or equal
  - JA: jump if above (unsigned)
  - JAE: jump if above or equal
  - JB: jump if below
  - JBE: jump if below or equal
  - JS: jump if sign
  - JO: jump if overflow
  - JP: jump if parity
  - JC: jump if carry
- CALL: procedure call
- RET: return from procedure
- LOOP: loop counter
- LOOPE/LOOPZ: loop if equal
- LOOPNE/LOOPNZ: loop if not equal

##### String Instructions
- MOVS: move string
- CMPS: compare string
- SCAS: scan string
- LODS: load string
- STOS: store string
- REP prefix: repeat
- REPE/REPZ: repeat while equal
- REPNE/REPNZ: repeat while not equal
- Direction flag: CLD, STD

### Addressing Modes

#### x86 Addressing Modes
- Immediate addressing: MOV AX, 5
- Register addressing: MOV AX, BX
- Direct addressing: MOV AX, [1234h]
- Register indirect: MOV AX, [BX]
- Indexed addressing: MOV AX, [SI]
- Based addressing: MOV AX, [BX+SI]
- Based indexed: MOV AX, [BX+SI+disp]
- RIP-relative (x64): MOV RAX, [RIP+offset]

### Procedures và Functions

#### Procedure Basics
- PROC và ENDP directives
- CALL và RET
- Near vs Far procedures
- Parameter passing
- Stack frames
- Local variables
- Recursion basics
- Leaf functions

#### Stack Management
- Stack pointer (SP, ESP, RSP)
- Base pointer (BP, EBP, RBP)
- PUSH và POP operations
- Stack growth direction
- Stack alignment
- Stack overflow
- Stack smashing

### Program Development

#### Assembly Process
- Writing source code
- Assembling: .asm -> .obj
- Linking: .obj -> .exe
- Object file formats: COFF, ELF, Mach-O
- Relocatable code
- Position-independent code (PIC)

#### Hello World Programs
- DOS INT 21h
- Linux syscalls
- Windows API calls
- Basic I/O operations

#### Debugging Basics
- Breakpoints
- Step-through execution
- Register inspection
- Memory examination
- Stack trace
- Disassembly view

## GIAI ĐOẠN 2: INTERMEDIATE (4-5 tháng)

### x86-32 (Protected Mode)

#### Protected Mode Concepts
- Protected mode vs Real mode
- Privilege levels: Ring 0-3
- Segmentation
- Descriptor tables: GDT, LDT, IDT
- Segment selectors
- Task State Segment (TSS)
- Memory protection
- Paging mechanisms

#### 32-bit Registers
- Extended registers: EAX, EBX, ECX, EDX
- Extended pointers: ESI, EDI, EBP, ESP
- Extended instruction pointer: EIP
- Segment registers usage
- Control registers: CR0, CR2, CR3, CR4
- Debug registers: DR0-DR7

#### 32-bit Instructions
- Extended instruction set
- MOVZX, MOVSX: move with extend
- BSWAP: byte swap
- BSF, BSR: bit scan
- BT, BTC, BTR, BTS: bit test
- SHLD, SHRD: double precision shift
- ENTER, LEAVE: stack frame
- PUSHA, POPA: push/pop all
- IMUL extended forms
- Conditional moves: CMOVcc

### x86-64 (Long Mode)

#### 64-bit Architecture
- Long mode vs Legacy mode
- 64-bit registers: RAX, RBX, RCX, RDX, RSI, RDI, RBP, RSP
- Additional registers: R8-R15
- 8-bit access: R8B-R15B
- 16-bit access: R8W-R15W
- 32-bit access: R8D-R15D
- RIP-relative addressing
- Default operand size
- Address size override
- REX prefix

#### Calling Conventions
- cdecl (C declaration)
- stdcall (Standard call)
- fastcall
- Microsoft x64 calling convention
- System V AMD64 ABI (Linux)
- Parameter passing: registers vs stack
- Return values
- Caller-saved vs callee-saved registers
- Shadow space (Windows x64)
- Red zone (System V)
- Stack alignment requirements

### Advanced Instructions

#### SIMD Instructions
- MMX: 64-bit SIMD
- SSE: 128-bit SIMD (SSE, SSE2, SSE3, SSSE3, SSE4)
- AVX: 256-bit SIMD (AVX, AVX2)
- AVX-512: 512-bit SIMD
- Vector registers: XMM0-XMM15, YMM0-YMM15, ZMM0-ZMM31
- SIMD operations: packed operations
- Data alignment for SIMD

#### Floating-Point Instructions
- x87 FPU stack
- FPU registers: ST(0)-ST(7)
- FPU instructions: FLD, FST, FADD, FSUB, FMUL, FDIV
- FPU control word
- FPU status word
- SSE scalar floating-point
- AVX floating-point

#### Bit Manipulation
- POPCNT: population count
- LZCNT: leading zero count
- TZCNT: trailing zero count
- ANDN: logical AND NOT
- BMI (Bit Manipulation Instructions)
- BMI2 extensions

### Operating System Interfaces

#### Linux System Calls
- Syscall mechanism
- Syscall numbers
- Parameter passing
- Return values
- Common syscalls: read, write, open, close, exit
- File operations
- Process management
- Memory management
- Network operations

#### Windows API
- Windows system calls
- Kernel32.dll functions
- User32.dll functions
- Calling conventions
- Parameter passing
- Unicode vs ANSI
- Error handling: GetLastError

#### BIOS Interrupts (Legacy)
- INT 10h: video services
- INT 13h: disk services
- INT 16h: keyboard services
- INT 21h: DOS services
- Interrupt vector table

### Memory Management

#### Stack Operations
- Stack frames
- Function prologue và epilogue
- Local variable allocation
- Parameter access
- Return address handling
- Stack pivoting
- Stack cookies/canaries

#### Heap Management
- Dynamic memory allocation
- malloc/free implementation concepts
- Memory leaks
- Heap overflow
- Use-after-free

#### Memory Models
- Tiny model
- Small model
- Medium model
- Compact model
- Large model
- Huge model
- Flat model (32/64-bit)

### Macros và Conditional Assembly

#### Macros
- Macro definition: %macro
- Macro parameters
- Local labels trong macros
- Multi-line macros
- Macro expansion
- Macro libraries
- Conditional macros

#### Preprocessor Directives
- %define, %undef
- %include
- %if, %elif, %else, %endif
- %ifdef, %ifndef
- %assign
- Environment variables
- Compile-time constants

### Optimization Basics

#### Code Optimization
- Register allocation
- Instruction selection
- Reducing memory access
- Loop unrolling
- Strength reduction
- Common subexpression elimination
- Dead code elimination

#### Performance Considerations
- Instruction latency
- Instruction throughput
- Pipeline stalls
- Branch misprediction costs
- Cache-friendly code
- Data alignment
- Prefetching

## GIAI ĐOẠN 3: ADVANCED (5-6 tháng)

### Advanced Architecture

#### CPU Microarchitecture
- Superscalar execution
- Out-of-order execution
- Register renaming
- Speculation
- Branch prediction algorithms
- Return stack buffer
- µop cache
- Instruction decoder

#### Cache Architecture
- Cache lines
- Cache sets
- Cache ways
- Cache associativity
- Write-through vs write-back
- Cache coherence: MESI protocol
- False sharing
- Cache prefetching

#### Memory Ordering
- Sequential consistency
- Memory barriers
- Load-load, load-store, store-store, store-load barriers
- MFENCE, LFENCE, SFENCE
- Acquire/release semantics
- Volatile operations

### Multithreading và Concurrency

#### Atomic Operations
- LOCK prefix
- XCHG (implicit lock)
- CMPXCHG: compare and exchange
- CMPXCHG8B/16B: double-word compare exchange
- Atomic read-modify-write
- Memory ordering với atomics

#### Synchronization Primitives
- Spinlocks
- Mutexes implementation
- Semaphores
- Condition variables
- Read-write locks
- Barriers
- Lock-free algorithms

#### Thread-Local Storage
- FS và GS segment registers
- TLS implementation
- Thread control block
- %fs:0 (Linux), %gs:0 (Windows)

### Exception Handling

#### Interrupts
- Hardware interrupts
- Software interrupts
- Interrupt vector table
- Interrupt descriptor table (IDT)
- Interrupt gates
- Trap gates
- Interrupt priority
- Interrupt masking

#### Exceptions
- Divide-by-zero
- Invalid opcode
- General protection fault
- Page fault
- Stack fault
- Exception handlers
- Exception frame
- Nested exceptions

#### Structured Exception Handling (SEH)
- __try/__except (Windows)
- Exception registration records
- Exception chain
- Exception filters
- __finally blocks
- Vectored Exception Handling (VEH)

### Advanced Programming Techniques

#### Position-Independent Code (PIC)
- RIP-relative addressing
- GOT (Global Offset Table)
- PLT (Procedure Linkage Table)
- Dynamic linking
- Lazy binding
- ASLR implications

#### Self-Modifying Code
- Code modification techniques
- Cache coherency issues
- Security implications
- JIT compilation basics
- Code injection

#### Polymorphic Code
- Code obfuscation
- Metamorphic engines
- Encryption/decryption stubs
- Anti-debugging techniques

### Reverse Engineering

#### Disassembly
- Static analysis
- Control flow analysis
- Data flow analysis
- Cross-references
- String analysis
- Import/export tables
- Recognizing compiler patterns

#### Dynamic Analysis
- Debugging techniques
- Breakpoint types: software, hardware, memory
- Tracing execution
- API hooking
- Memory dumping
- Unpacking
- Anti-anti-debugging

#### Binary Analysis Tools
- IDA Pro: disassembler
- Ghidra: reverse engineering
- Binary Ninja
- Radare2
- Hopper Disassembler
- objdump, readelf
- PE Explorer, CFF Explorer

### Exploit Development

#### Buffer Overflows
- Stack-based overflow
- Heap-based overflow
- Return address overwrite
- Shellcode injection
- NOP sleds
- Egghunter technique

#### Protection Mechanisms
- Stack canaries
- DEP/NX: Data Execution Prevention
- ASLR: Address Space Layout Randomization
- SafeSEH
- SEHOP
- Control Flow Guard (CFG)
- Shadow stack

#### Exploitation Techniques
- Return-to-libc
- ROP (Return-Oriented Programming)
- JOP (Jump-Oriented Programming)
- SROP (Sigreturn-Oriented Programming)
- Heap spraying
- Use-after-free exploitation
- Format string vulnerabilities

### Cryptography Implementation

#### Symmetric Encryption
- AES implementation
- DES/3DES
- Block cipher modes
- Stream ciphers
- Optimized implementations

#### Hashing
- MD5, SHA-1, SHA-256
- HMAC
- Cryptographic hash optimization
- Side-channel resistance

#### Side-Channel Attacks
- Timing attacks
- Cache-timing attacks
- Power analysis
- Constant-time implementations
- Countermeasures

## GIAI ĐOẠN 4: SPECIALIZED DOMAINS (4-6 tháng)

### Operating System Development

#### Bootloader Development
- BIOS boot process
- UEFI boot process
- Master Boot Record (MBR)
- GUID Partition Table (GPT)
- Boot sectors
- Stage 1 và Stage 2 bootloaders
- Switching to protected/long mode
- Loading kernel

#### Kernel Development
- Kernel entry point
- GDT setup
- IDT setup
- Interrupt handling
- Memory manager basics
- Process scheduler basics
- System call interface
- Driver framework

#### Device Drivers
- Hardware interfacing
- I/O ports: IN, OUT
- Memory-mapped I/O
- DMA (Direct Memory Access)
- Interrupt handling
- Driver models
- Device registers
- PCI configuration

### Embedded Systems

#### Microcontroller Programming
- ARM Assembly (Thumb, ARM modes)
- AVR Assembly
- PIC Assembly
- MIPS Assembly
- Register-level programming
- GPIO manipulation
- Timer/Counter programming
- Interrupt configuration

#### Real-Time Systems
- Deterministic execution
- Interrupt latency
- Task scheduling
- Priority inversion
- Watchdog timers
- Power management
- Low-power modes

#### Bare-Metal Programming
- No OS environment
- Startup code
- Linker scripts
- Memory layout
- Exception vectors
- Peripheral initialization
- Communication protocols: UART, SPI, I2C

### Compiler Development

#### Code Generation
- Abstract Syntax Tree (AST)
- Intermediate representation (IR)
- Instruction selection
- Register allocation
- Instruction scheduling
- Peephole optimization

#### Optimization Passes
- Constant propagation
- Dead code elimination
- Loop optimization
- Inline expansion
- Tail call optimization
- Vectorization

### Game Development

#### Graphics Programming
- VGA programming
- Direct framebuffer access
- Sprite rendering
- Pixel manipulation
- Double buffering
- Palette manipulation
- Mode 13h (320x200x256)

#### Performance-Critical Code
- Inner loops optimization
- SIMD for graphics
- Fixed-point arithmetic
- Fast approximations
- Assembly trong game engines

### Emulator Development

#### CPU Emulation
- Instruction decoding
- Instruction execution
- Register state
- Flag updates
- Memory access emulation
- Interrupt emulation

#### System Emulation
- Timing accuracy
- Peripheral emulation
- Save states
- Debugging features
- Performance optimization

### Digital Signal Processing (DSP)

#### Audio Processing
- Sample rate conversion
- Digital filters: FIR, IIR
- FFT implementation
- Audio effects
- Real-time processing
- Fixed-point DSP

#### Image Processing
- Convolution
- Edge detection
- Color space conversion
- Image scaling
- SIMD optimization for images

## GIAI ĐOẠN 5: ARCHITECTURE-SPECIFIC (3-4 tháng)

### ARM Architecture

#### ARM Basics
- ARM vs Thumb instruction sets
- Registers: R0-R15
- CPSR (Current Program Status Register)
- Condition codes
- Barrel shifter
- ARM addressing modes

#### ARM Instructions
- Data processing
- Load/Store architecture
- Multiple register transfer
- Branch instructions
- Conditional execution
- Coprocessor instructions

#### ARM64 (AArch64)
- 64-bit registers: X0-X30
- 32-bit register access: W0-W30
- Procedure Call Standard
- NEON SIMD
- SVE (Scalable Vector Extension)

### RISC-V

#### RISC-V ISA
- Base integer ISA: RV32I, RV64I
- Standard extensions: M, A, F, D, C
- Register set: x0-x31
- Calling convention
- Memory ordering
- CSR (Control and Status Registers)

#### RISC-V Programming
- Instruction formats
- Immediate encoding
- Pseudo-instructions
- Compressed instructions
- Privileged modes

### MIPS

#### MIPS Architecture
- Load/Store architecture
- Registers: $0-$31
- HI/LO registers
- Delay slots
- Branch delay slots
- Coprocessors

#### MIPS Instructions
- R-type, I-type, J-type formats
- Arithmetic operations
- Load/Store instructions
- Branch và jump
- Pseudo-instructions

### Other Architectures

#### PowerPC
- Register set
- Instruction set
- Calling conventions
- AltiVec SIMD

#### SPARC
- Register windows
- Instruction set
- Delayed branches
- VIS instructions

#### 8-bit Processors (Historical)
- 8080, Z80
- 6502 (NES, Commodore 64)
- 6800, 68000

## GIAI ĐOẠN 6: MASTERY (liên tục)

### Advanced Optimization

#### Compiler Optimizations
- Loop transformations
- Loop fusion, fission
- Loop interchange
- Loop tiling
- Software pipelining
- Trace scheduling
- Predication
- If-conversion

#### Profile-Guided Optimization
- Performance profiling
- Hot path identification
- Branch probability
- Cache profiling
- Instrumentation
- Feedback-directed optimization

#### Micro-Optimizations
- Instruction pairing
- Dependency chains
- Port utilization
- µop fusion
- Macro-fusion
- Zero-idiom recognition
- Move elimination

### Security

#### Exploit Mitigation
- Stack protection bypass
- DEP/ASLR bypass
- ROP chain construction
- Heap feng shui
- Type confusion
- Integer overflows
- Race conditions

#### Secure Coding
- Input validation
- Bounds checking
- Integer overflow prevention
- Secure memory clearing
- Constant-time algorithms
- Side-channel resistance

#### Malware Analysis
- Static analysis
- Dynamic analysis
- Behavioral analysis
- Packing/unpacking
- Anti-debugging detection
- VM detection
- Sandbox evasion

### Research Areas

#### Speculative Execution Attacks
- Spectre variants
- Meltdown
- Branch Target Injection
- Bounds Check Bypass
- Mitigations
- Microarchitectural side channels

#### Hardware Security
- Trusted Execution Environments
- Intel SGX
- ARM TrustZone
- Hardware enclaves
- Secure boot
- Attestation

### Testing và Verification

#### Unit Testing
- Test harnesses
- Assertion macros
- Code coverage
- Regression testing

#### Fuzzing
- Input generation
- Coverage-guided fuzzing
- Mutation-based fuzzing
- Crash analysis
- Sanitizers integration

#### Formal Verification
- Correctness proofs
- Model checking
- Symbolic execution
- Abstract interpretation

### Documentation và Communication

#### Code Documentation
- Comment conventions
- ASCII art diagrams
- Register usage tables
- Memory maps
- Calling conventions documentation

#### Technical Writing
- Architecture documents
- Algorithm descriptions
- Optimization reports
- Security advisories

### Tools Development

#### Custom Assemblers
- Lexical analysis
- Parsing
- Symbol tables
- Relocation
- Macro processing

#### Disassemblers
- Instruction decoding
- Control flow recovery
- Function identification
- Cross-references

#### Debuggers
- Breakpoint implementation
- Single-stepping
- Watchpoints
- Symbol loading
- Source-level debugging

### Community và Resources

#### Learning Resources
- Intel Software Developer Manuals
- AMD64 Architecture Programmer's Manual
- ARM Architecture Reference Manual
- Agner Fog's optimization guides
- OSDev Wiki
- x86 opcode references
- Assembly language forums

#### Open Source Projects
- Linux kernel
- FreeBSD kernel
- MINIX
- SerenityOS
- ToaruOS
- Bootloaders: GRUB, UEFI implementations
- Emulators: QEMU, Bochs

#### Conferences và Communities
- DEF CON
- Black Hat
- REcon (Reverse Engineering Conference)
- FOSDEM
- Assembly Language subreddit
- OSDev community
- Security research communities

### Career Paths

#### Job Roles
- Embedded systems engineer
- Reverse engineer
- Security researcher
- Compiler engineer
- OS developer
- Firmware engineer
- Performance engineer
- Malware analyst
- Exploit developer
- Hardware verification engineer

#### Certifications
- GIAC Reverse Engineering Malware (GREM)
- Offensive Security Certified Professional (OSCP)
- Certified Reverse Engineering Analyst (CREA)

## LỘ TRÌNH HỌC TẬP ĐỀ XUẤT

**Tháng 1-4**: Giai đoạn 1 - Kiến thức nền tảng, x86 basics, registers, basic instructions

**Tháng 5-9**: Giai đoạn 2 - 32-bit/64-bit programming, calling conventions, OS interfaces

**Tháng 10-15**: Giai đoạn 3 - Advanced architecture, optimization, reverse engineering

**Tháng 16-21**: Giai đoạn 4 - Chuyên môn hóa: OS dev/Embedded/Security

**Tháng 22-25**: Giai đoạn 5 - ARM, RISC-V, other architectures

**Tháng 26+**: Giai đoạn 6 - Mastery, research, contribution

## TIPS ĐỂ MASTER ASSEMBLY

- Hiểu rõ computer architecture trước khi code
- Master một architecture (x86-64) trước khi học others
- Đọc CPU manuals thoroughly
- Practice với simple programs first
- Sử dụng debuggers extensively
- Đọc disassembly của compiled C code
- Hiểu calling conventions deeply
- Learn by reverse engineering
- Write bootloaders và simple OS
- Study compiler output
- Benchmark your code
- Understand cache effects
- Master bit manipulation
- Learn multiple architectures
- Read academic papers
- Contribute to open source
- Study exploits và mitigations
- Learn hardware fundamentals
- Practice optimization techniques
- Write documentation thoroughly
- Join security CTFs
- Read processor errata
- Understand timing attacks
- Study microarchitecture
- Keep updated với new extensions
- Build tools (assemblers, disassemblers)
- Teach others what you learn
- Stay curious về hardware
- Practice every day
- Patience - assembly is hard but rewarding!

## PROJECT IDEAS

**Beginner:**
- Calculator program
- String manipulation functions
- Simple bootloader
- Hello World (multiple platforms)
- File I/O program

**Intermediate:**
- Mini operating system kernel
- Bootloader với file system
- Encryption algorithms implementation
- Simple game (Snake, Tetris)
- Assembly standard library

**Advanced:**
- Full operating system
- JIT compiler
- Virtual machine/emulator
- Debugger
- Exploit development
- Compiler backend
- Device driver
- Hypervisor basics
- Firmware for embedded device
- Performance profiler

**Expert:**
- Full-featured OS
- Production compiler
- Hardware emulator
- Security research tool
- Microkernel OS
- Real-time OS
- Custom CPU simulator

## RECOMMENDED BOOKS

- "Programming from the Ground Up" - Jonathan Bartlett
- "Assembly Language Step-by-Step" - Jeff Duntemann
- "The Art of Assembly Language" - Randall Hyde
- "PC Assembly Language" - Paul Carter
- "Professional Assembly Language" - Richard Blum
- "Modern X86 Assembly Language Programming" - Daniel Kusswurm
- "Intel 64 and IA-32 Architectures Software Developer Manuals"
- "ARM Assembly Language" - William Hohl
- "Computer Organization and Design" - Patterson & Hennessy
- "Hacker's Delight" - Henry Warren
- "Reversing: Secrets of Reverse Engineering" - Eldad Eilam

Chúc bạn thành công trên con đường master Assembly Language Programming!