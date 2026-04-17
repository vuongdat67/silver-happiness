# Complete x86 Assembly Intel Syntax 32-bit Guide

## 1. KIẾN TRÚC PROCESSOR x86 32-BIT

### 1.1 CPU Architecture Overview
```
┌─────────────────────────────────────────────────────────┐
│                    x86 32-bit CPU                       │
├─────────────────┬───────────────────┬───────────────────┤
│   Registers     │   Execution Unit  │   Memory Unit     │
├─────────────────┼───────────────────┼───────────────────┤
│ • General       │ • ALU             │ • Cache L1/L2/L3  │
│ • Segment       │ • FPU             │ • TLB             │
│ • Control       │ • MMU             │ • Prefetch Buffer │
│ • Debug         │ • Branch Predict  │ • Bus Interface   │
└─────────────────┴───────────────────┴───────────────────┘
```

### 1.2 Register Architecture Chi Tiết

#### General Purpose Registers (32-bit)
```
EAX (Accumulator):
┌─────────┬─────────┬─────────┬─────────┐
│   AH    │   AL    │    -    │    -    │  8-bit access
├─────────┴─────────┼─────────┴─────────┤
│        AX         │         -         │  16-bit access  
├───────────────────┴───────────────────┤
│               EAX                     │  32-bit access
└───────────────────────────────────────┘
Bit:  31    24 23   16 15    8 7      0

EBX (Base):
┌─────────┬─────────┬─────────┬─────────┐
│   BH    │   BL    │    -    │    -    │
├─────────┴─────────┼─────────┴─────────┤
│        BX         │         -         │
├───────────────────┴───────────────────┤
│               EBX                     │
└───────────────────────────────────────┘

ECX (Counter):
┌─────────┬─────────┬─────────┬─────────┐
│   CH    │   CL    │    -    │    -    │
├─────────┴─────────┼─────────┴─────────┤
│        CX         │         -         │
├───────────────────┴───────────────────┤
│               ECX                     │
└───────────────────────────────────────┘

EDX (Data):
┌─────────┬─────────┬─────────┬─────────┐
│   DH    │   DL    │    -    │    -    │
├─────────┴─────────┼─────────┴─────────┤
│        DX         │         -         │
├───────────────────┴───────────────────┤
│               EDX                     │
└───────────────────────────────────────┘
```

#### Index và Pointer Registers
```
ESI (Source Index):     ┌───────────────────────────────────────┐
                        │               ESI                     │
                        └───────────────┬───────────────────────┘
                                       │        SI             │
                                       └───────────────────────┘

EDI (Destination Index): ┌───────────────────────────────────────┐
                         │               EDI                     │
                         └───────────────┬───────────────────────┘
                                        │        DI             │
                                        └───────────────────────┘

ESP (Stack Pointer):     ┌───────────────────────────────────────┐
                         │               ESP                     │
                         └───────────────┬───────────────────────┘
                                        │        SP             │
                                        └───────────────────────┘

EBP (Base Pointer):      ┌───────────────────────────────────────┐
                         │               EBP                     │
                         └───────────────┬───────────────────────┘
                                        │        BP             │
                                        └───────────────────────┘
```

#### Segment Registers (16-bit)
```
CS (Code Segment):      ┌───────────────────────────────────────┐
                        │                CS                     │
                        └───────────────────────────────────────┘

DS (Data Segment):      ┌───────────────────────────────────────┐
                        │                DS                     │
                        └───────────────────────────────────────┘

ES (Extra Segment):     ┌───────────────────────────────────────┐
                        │                ES                     │
                        └───────────────────────────────────────┘

FS (Additional Segment): ┌───────────────────────────────────────┐
                         │                FS                     │
                         └───────────────────────────────────────┘

GS (Additional Segment): ┌───────────────────────────────────────┐
                         │                GS                     │
                         └───────────────────────────────────────┘

SS (Stack Segment):     ┌───────────────────────────────────────┐
                        │                SS                     │
                        └───────────────────────────────────────┘
```

#### EFLAGS Register (32-bit)
```
Bit Position và Flags:

31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9  8  7  6  5  4  3  2  1  0
┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
│0 │0 │0 │0 │0 │0 │0 │0 │0 │0 │ID│VIP│VIF│AC│VM│RF│0 │NT│IOPL │OF│DF│IF│TF│SF│ZF│0 │AF│0 │PF│1 │CF│
└──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴───┴───┴──┴──┴──┴──┴──┴──┴────┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘

Status Flags:
• CF (Carry Flag, bit 0): Set when arithmetic overflow/underflow
• PF (Parity Flag, bit 2): Set when result has even number of 1s
• AF (Auxiliary Flag, bit 4): Set for BCD arithmetic carry
• ZF (Zero Flag, bit 6): Set when result is zero
• SF (Sign Flag, bit 7): Set when result is negative (MSB = 1)
• OF (Overflow Flag, bit 11): Set when signed arithmetic overflow

Control Flags:
• DF (Direction Flag, bit 10): Controls string operations direction
• IF (Interrupt Flag, bit 9): Controls interrupt responses
• TF (Trap Flag, bit 8): Enables single-step debugging

System Flags:
• IOPL (I/O Privilege Level, bits 12-13): Controls I/O access
• NT (Nested Task, bit 14): Controls task switching
• RF (Resume Flag, bit 16): Controls debug exceptions
• VM (Virtual 8086 Mode, bit 17): Enables 8086 emulation
• AC (Alignment Check, bit 18): Controls alignment checking
• VIF (Virtual Interrupt Flag, bit 19): Virtual IF for V86 mode
• VIP (Virtual Interrupt Pending, bit 20): Virtual interrupt pending
• ID (Identification Flag, bit 21): Indicates CPUID availability
```

### 1.3 Memory Model và Segmentation

#### Memory Layout (32-bit Process)
```
Virtual Address Space (4GB):

0xFFFFFFFF ┌─────────────────────────┐
           │     Kernel Space        │ ← Không truy cập được từ user mode
0xC0000000 ├─────────────────────────┤
           │        Stack            │ ← Grows downward
           │          ↓              │
           │                         │
           │                         │
           │       Free Space        │
           │                         │
           │                         │
           │          ↑              │
           │         Heap            │ ← Grows upward
           ├─────────────────────────┤
           │    BSS Segment          │ ← Uninitialized data
           ├─────────────────────────┤
           │    Data Segment         │ ← Initialized data
           ├─────────────────────────┤
           │    Text Segment         │ ← Program code
0x08048000 ├─────────────────────────┤
           │     Reserved            │
0x00000000 └─────────────────────────┘
```

#### Segmented Memory Model
```
Linear Address Formation:
Segment Selector + Offset = Linear Address

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Segment Register│ +  │     Offset      │ =  │ Linear Address  │
│    (16-bit)     │    │    (32-bit)     │    │   (32-bit)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘

Example:
DS:EBX means DS segment + EBX offset
```

## 2. INSTRUCTION SET ARCHITECTURE

### 2.1 Instruction Format
```
x86 Instruction Format (Variable Length: 1-15 bytes):

┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Prefix  │ Prefix  │ Opcode  │ ModR/M  │  SIB    │Displace │Immediate│Immediate│
│(0-4 by) │(0-1 by) │(1-3 by) │(0-1 by) │(0-1 by) │(0,1,2,4)│(0,1,2,4)│(0,1,2,4)│
└─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Prefixes:
• Instruction prefixes: LOCK, REP, REPNE
• Segment override: CS:, DS:, ES:, FS:, GS:, SS:
• Operand-size: 0x66 (switches 32↔16 bit)
• Address-size: 0x67 (switches 32↔16 bit addressing)

ModR/M Byte:
┌───────┬───────┬───────┐
│  Mod  │  Reg  │  R/M  │  
│(2 bit)│(3 bit)│(3 bit)│
└───────┴───────┴───────┘

SIB Byte (Scale-Index-Base):
┌───────┬───────┬───────┐
│ Scale │ Index │ Base  │
│(2 bit)│(3 bit)│(3 bit)│
└───────┴───────┴───────┘
```

### 2.2 Addressing Modes Chi Tiết

#### Immediate Addressing
```assembly
mov eax, 12345h         ; EAX = 0x12345
mov bl, 'A'             ; BL = ASCII 'A' (0x41)
add eax, 100            ; EAX = EAX + 100
```

#### Register Addressing
```assembly
mov eax, ebx            ; EAX = EBX
add ecx, edx            ; ECX = ECX + EDX
xchg eax, ebx           ; Swap EAX and EBX
```

#### Memory Addressing Modes
```assembly
; Direct Memory Addressing
mov eax, [1234h]        ; EAX = memory[0x1234]
mov [var1], ebx         ; memory[var1] = EBX

; Register Indirect
mov eax, [ebx]          ; EAX = memory[EBX]
mov [ecx], eax          ; memory[ECX] = EAX

; Base + Displacement
mov eax, [ebx+4]        ; EAX = memory[EBX + 4]
mov eax, [ebp-8]        ; EAX = memory[EBP - 8]

; Base + Index
mov eax, [ebx+ecx]      ; EAX = memory[EBX + ECX]
mov eax, [esi+edi]      ; EAX = memory[ESI + EDI]

; Base + Index + Displacement
mov eax, [ebx+ecx+8]    ; EAX = memory[EBX + ECX + 8]

; Scaled Index
mov eax, [ebx+ecx*2]    ; EAX = memory[EBX + ECX*2]
mov eax, [ebx+ecx*4+8]  ; EAX = memory[EBX + ECX*4 + 8]

; Scale factors: 1, 2, 4, 8
mov eax, [esi+edi*1]    ; Scale = 1
mov eax, [esi+edi*2]    ; Scale = 2
mov eax, [esi+edi*4]    ; Scale = 4
mov eax, [esi+edi*8]    ; Scale = 8
```

### 2.3 Complete Instruction Set

#### Data Movement Instructions
```assembly
; MOV - Move data
mov dst, src            ; dst = src
movsx eax, bl           ; Sign-extend BL to EAX
movzx eax, bl           ; Zero-extend BL to EAX

; PUSH/POP - Stack operations
push eax                ; ESP = ESP - 4; [ESP] = EAX
push word ptr [ebx]     ; Push 16-bit value
pushad                  ; Push all general registers
pop ebx                 ; EBX = [ESP]; ESP = ESP + 4
popad                   ; Pop all general registers

; XCHG - Exchange
xchg eax, ebx           ; Swap EAX and EBX
xchg [mem1], eax        ; Swap memory and EAX

; LEA - Load Effective Address
lea eax, [ebx+ecx*2+8]  ; EAX = EBX + ECX*2 + 8 (address calculation)
lea esi, [string1]      ; ESI = address of string1

; XLAT - Translate
; AL = [EBX + AL] (used for table lookups)
mov ebx, table_addr     ; Load table address
mov al, index           ; Load index
xlat                    ; AL = table[AL]
```

#### Arithmetic Instructions
```assembly
; Basic Arithmetic
add dst, src            ; dst = dst + src
adc dst, src            ; dst = dst + src + CF (add with carry)
sub dst, src            ; dst = dst - src
sbb dst, src            ; dst = dst - src - CF (subtract with borrow)
neg dst                 ; dst = -dst (two's complement)

; Increment/Decrement
inc dst                 ; dst = dst + 1
dec dst                 ; dst = dst - 1

; Multiplication
mul src                 ; AX/EAX = AL/EAX * src (unsigned)
imul src                ; AX/EAX = AL/EAX * src (signed)
imul dst, src           ; dst = dst * src (signed)
imul dst, src, imm      ; dst = src * imm (signed)

; Division
div src                 ; AL/EAX = AX/EDX:EAX / src; AH/EDX = remainder
idiv src                ; AL/EAX = AX/EDX:EAX / src (signed)

; Extended Operations
aaa                     ; ASCII Adjust After Addition
aas                     ; ASCII Adjust After Subtraction
aam                     ; ASCII Adjust After Multiplication
aad                     ; ASCII Adjust Before Division
daa                     ; Decimal Adjust After Addition
das                     ; Decimal Adjust After Subtraction
```

#### Logical Instructions
```assembly
; Bitwise Operations
and dst, src            ; dst = dst AND src
or dst, src             ; dst = dst OR src
xor dst, src            ; dst = dst XOR src
not dst                 ; dst = NOT dst (one's complement)

; Shift Operations
shl dst, count          ; Shift Left (logical)
shr dst, count          ; Shift Right (logical)
sal dst, count          ; Shift Arithmetic Left (same as SHL)
sar dst, count          ; Shift Arithmetic Right (sign extend)

; Rotate Operations
rol dst, count          ; Rotate Left
ror dst, count          ; Rotate Right
rcl dst, count          ; Rotate Left through Carry
rcr dst, count          ; Rotate Right through Carry

; Bit Operations
bt src, bit             ; Test bit (bit -> CF)
bts dst, bit            ; Test and Set bit
btr dst, bit            ; Test and Reset bit
btc dst, bit            ; Test and Complement bit
bsf dst, src            ; Bit Scan Forward (find first set bit)
bsr dst, src            ; Bit Scan Reverse (find last set bit)
```

#### String Instructions
```assembly
; Move String
movsb                   ; Move byte: [EDI] = [ESI]; ESI++; EDI++
movsw                   ; Move word
movsd                   ; Move dword

; Compare String  
cmpsb                   ; Compare bytes at ESI and EDI
cmpsw                   ; Compare words
cmpsd                   ; Compare dwords

; Scan String
scasb                   ; Compare AL with [EDI]
scasw                   ; Compare AX with [EDI]
scasd                   ; Compare EAX with [EDI]

; Load String
lodsb                   ; AL = [ESI]; ESI++
lodsw                   ; AX = [ESI]; ESI += 2
lodsd                   ; EAX = [ESI]; ESI += 4

; Store String
stosb                   ; [EDI] = AL; EDI++
stosw                   ; [EDI] = AX; EDI += 2
stosd                   ; [EDI] = EAX; EDI += 4

; Repeat Prefixes
rep                     ; Repeat while ECX != 0
repe/repz               ; Repeat while equal/zero
repne/repnz             ; Repeat while not equal/not zero

; Examples:
mov ecx, 100            ; Count
rep movsb               ; Copy 100 bytes from [ESI] to [EDI]
```

#### Control Transfer Instructions
```assembly
; Unconditional Jumps
jmp label               ; Jump to label
jmp eax                 ; Jump to address in EAX
jmp [eax]               ; Jump to address stored at [EAX]

; Conditional Jumps (based on flags)
je/jz label             ; Jump if Equal/Zero (ZF = 1)
jne/jnz label           ; Jump if Not Equal/Not Zero (ZF = 0)
jc/jb label             ; Jump if Carry/Below (CF = 1)
jnc/jnb/jae label       ; Jump if No Carry/Not Below/Above or Equal (CF = 0)
jo label                ; Jump if Overflow (OF = 1)
jno label               ; Jump if No Overflow (OF = 0)
js label                ; Jump if Sign (SF = 1)
jns label               ; Jump if No Sign (SF = 0)
jp/jpe label            ; Jump if Parity/Parity Even (PF = 1)
jnp/jpo label           ; Jump if No Parity/Parity Odd (PF = 0)

; Signed Comparisons
jl/jnge label           ; Jump if Less/Not Greater or Equal (SF != OF)
jle/jng label           ; Jump if Less or Equal/Not Greater ((ZF = 1) OR (SF != OF))
jg/jnle label           ; Jump if Greater/Not Less or Equal ((ZF = 0) AND (SF = OF))
jge/jnl label           ; Jump if Greater or Equal/Not Less (SF = OF)

; Unsigned Comparisons
jb/jnae label           ; Jump if Below/Not Above or Equal (CF = 1)
jbe/jna label           ; Jump if Below or Equal/Not Above ((CF = 1) OR (ZF = 1))
ja/jnbe label           ; Jump if Above/Not Below or Equal ((CF = 0) AND (ZF = 0))
jae/jnb label           ; Jump if Above or Equal/Not Below (CF = 0)

; Loop Instructions
loop label              ; ECX--; if ECX != 0 then jump to label
loope/loopz label       ; ECX--; if ECX != 0 AND ZF = 1 then jump
loopne/loopnz label     ; ECX--; if ECX != 0 AND ZF = 0 then jump
```

#### Procedure Instructions
```assembly
; Call/Return
call label              ; Push EIP; Jump to label
call eax                ; Push EIP; Jump to address in EAX
call [eax]              ; Push EIP; Jump to address at [EAX]
ret                     ; Pop EIP
ret n                   ; Pop EIP; ESP = ESP + n

; Stack Frame Operations
enter n, 0              ; Push EBP; EBP = ESP; ESP = ESP - n
leave                   ; ESP = EBP; Pop EBP (equivalent to mov esp,ebp; pop ebp)
```

#### Flag Manipulation
```assembly
; Flag Operations
stc                     ; Set Carry Flag (CF = 1)
clc                     ; Clear Carry Flag (CF = 0)
cmc                     ; Complement Carry Flag (CF = !CF)
std                     ; Set Direction Flag (DF = 1)
cld                     ; Clear Direction Flag (DF = 0)
sti                     ; Set Interrupt Flag (IF = 1)
cli                     ; Clear Interrupt Flag (IF = 0)

; Flag Transfer
lahf                    ; AH = flags (SF ZF 0 AF 0 PF 1 CF)
sahf                    ; flags = AH
pushf                   ; Push FLAGS register
popf                    ; Pop FLAGS register
pushfd                  ; Push EFLAGS register
popfd                   ; Pop EFLAGS register
```

#### Comparison and Test
```assembly
; Compare (performs subtraction but doesn't store result)
cmp dst, src            ; Compare dst with src (dst - src)
                        ; Sets flags: CF, ZF, SF, OF, PF, AF

; Test (performs AND but doesn't store result)  
test dst, src           ; Test dst with src (dst AND src)
                        ; Sets flags: ZF, SF, PF; clears CF, OF

; Examples:
cmp eax, 10             ; Compare EAX with 10
je equal                ; Jump if EAX = 10
jg greater              ; Jump if EAX > 10

test eax, eax           ; Test if EAX is zero
jz is_zero              ; Jump if EAX = 0

test eax, 1             ; Test if EAX is odd
jnz is_odd              ; Jump if last bit is set
```

## 3. DIRECTIVES VÀ ASSEMBLER SYNTAX

### 3.1 NASM Directives
```assembly
; Data Definition
DB    'Hello'           ; Define Byte(s)
DW    1234h             ; Define Word (16-bit)
DD    12345678h         ; Define Double Word (32-bit)
DQ    123456789ABCDEF0h ; Define Quad Word (64-bit)
DT    1.23e+4932        ; Define Ten Bytes (80-bit float)

; Reserve Storage
RESB  100               ; Reserve 100 bytes
RESW  50                ; Reserve 50 words (100 bytes)
RESD  25                ; Reserve 25 dwords (100 bytes)
RESQ  12                ; Reserve 12 qwords (96 bytes)

; Constants and Expressions
EQU                     ; Define constant
%define                 ; Define macro constant
%assign                 ; Define numeric constant

; Examples:
BUFFER_SIZE equ 1024
%define TRUE  1
%define FALSE 0
%assign COUNTER 0

; Current Location Counter
$                       ; Current position
$$                      ; Start of current section

; String length calculation
msg db 'Hello World', 0
msg_len equ $ - msg     ; Length of string including null terminator

; Alignment
ALIGN 4                 ; Align to 4-byte boundary
ALIGNB 16               ; Align to 16-byte boundary

; Conditional Assembly
%if BUFFER_SIZE > 1024
    %error "Buffer size too large"
%endif

%ifdef DEBUG
    debug_msg db 'Debug mode enabled', 0
%endif
```

### 3.2 Section Definitions
```assembly
; Standard sections
section .text           ; Code section (executable)
section .data           ; Initialized data section
section .bss            ; Uninitialized data section
section .rodata         ; Read-only data section

; Section attributes
section .text exec      ; Executable section
section .data write     ; Writable section
section .rodata nowrite ; Read-only section

; Custom sections
section .init           ; Initialization code
section .fini           ; Finalization code
section .comment        ; Comment section

; Section alignment
section .data align=4   ; Align section to 4 bytes
section .bss align=16   ; Align section to 16 bytes
```

### 3.3 Symbol Types và Visibility
```assembly
; Global symbols
global _start           ; Make _start visible to linker
global main             ; Make main visible to linker
global my_function      ; Export function

; External symbols  
extern printf           ; Import C function
extern malloc           ; Import C function
extern my_variable      ; Import variable

; Local labels
.local_label:           ; Local to current global label
..local_label:          ; Local to current section

; Symbol types
my_function:            ; Function label
    ; code here
    ret

my_data dd 12345       ; Data label
my_string db 'text', 0 ; String label

; Weak symbols
weak my_weak_function   ; Weak symbol (can be overridden)

; Common symbols
common my_common 4      ; 4-byte common variable
```

## 4. SYSTEM PROGRAMMING

### 4.1 Linux System Calls (32-bit)
```assembly
; System call interface
; EAX = system call number
; EBX, ECX, EDX, ESI, EDI, EBP = arguments
; INT 0x80 = invoke system call
; Return value in EAX

; Common system calls:
SYS_EXIT    equ 1       ; exit(int status)
SYS_FORK    equ 2       ; fork()  
SYS_READ    equ 3       ; read(int fd, void* buf, size_t count)
SYS_WRITE   equ 4       ; write(int fd, const void* buf, size_t count)
SYS_OPEN    equ 5       ; open(const char* pathname, int flags, mode_t mode)
SYS_CLOSE   equ 6       ; close(int fd)
SYS_WAITPID equ 7       ; waitpid(pid_t pid, int* status, int options)
SYS_CREAT   equ 8       ; creat(const char* pathname, mode_t mode)
SYS_LINK    equ 9       ; link(const char* oldpath, const char* newpath)
SYS_UNLINK  equ 10      ; unlink(const char* pathname)
SYS_EXECVE  equ 11      ; execve(const char* filename, char* const argv[], char* const envp[])
SYS_CHDIR   equ 12      ; chdir(const char* path)
SYS_TIME    equ 13      ; time(time_t* t)
SYS_MKNOD   equ 14      ; mknod(const char* pathname, mode_t mode, dev_t dev)
SYS_CHMOD   equ 15      ; chmod(const char* pathname, mode_t mode)

; File operations
SYS_LSEEK   equ 19      ; lseek(int fd, off_t offset, int whence)
SYS_GETPID  equ 20      ; getpid()
SYS_MOUNT   equ 21      ; mount(const char* source, const char* target, ...)
SYS_UMOUNT  equ 22      ; umount(const char* target)

; Memory management  
SYS_BRK     equ 45      ; brk(void* addr)
SYS_MMAP    equ 90      ; mmap(void* addr, size_t length, int prot, int flags, int fd, off_t offset)
SYS_MUNMAP  equ 91      ; munmap(void* addr, size_t length)

; Example system calls:
; Write system call
write_syscall:
    mov eax, SYS_WRITE  ; System call number for write
    mov ebx, 1          ; File descriptor (stdout)
    mov ecx, message    ; Buffer to write
    mov edx, msg_len    ; Number of bytes to write
    int 0x80            ; Invoke system call
    ret

; Read system call  
read_syscall:
    mov eax, SYS_READ   ; System call number for read
    mov ebx, 0          ; File descriptor (stdin)
    mov ecx, buffer     ; Buffer to read into
    mov edx, buffer_size; Maximum bytes to read
    int 0x80            ; Invoke system call
    ret                 ; Return value in EAX = bytes read

; Exit system call
exit_syscall:
    mov eax, SYS_EXIT   ; System call number for exit
    mov ebx, 0          ; Exit status
    int 0x80            ; Invoke system call (doesn't return)
```

### 4.2 Stack Frame Management
```assembly
; Standard function prologue/epilogue
my_function:
    ; Prologue
    push ebp            ; Save caller's base pointer
    mov ebp, esp        ; Set up new base pointer
    sub esp, 16         ; Allocate 16 bytes for local variables
    
    ; Save registers if needed
    push ebx            ; Save EBX if we'll modify it
    push esi            ; Save ESI if we'll modify it  
    push edi            ; Save EDI if we'll modify it
    
    ; Function body
    ; Local variables accessible as [ebp-4], [ebp-8], etc.
    ; Parameters accessible as [ebp+8], [ebp+12], etc.
    
    ; Example: accessing parameters and local variables
    mov eax, [ebp+8]    ; First parameter
    mov ebx, [ebp+12]   ; Second parameter
    mov [ebp-4], eax    ; Store in first local variable
    add eax, ebx        ; Perform operation
    mov [ebp-8], eax    ; Store result in second local variable
    
    ; Restore registers
    pop edi             ; Restore EDI
    pop esi             ; Restore ESI
    pop ebx             ; Restore EBX
    
    ; Epilogue
    mov esp, ebp        ; Restore stack pointer
    pop ebp             ; Restore caller's base pointer
    ret                 ; Return to caller

; Calling convention examples
; cdecl (C calling convention)
caller_cdecl:
    push 20             ; Second parameter (pushed last)
    push 10             ; First parameter (pushed first)
    call my_function    ; Call function
    add esp, 8          ; Caller cleans up stack (2 parameters * 4 bytes)
    ; Return value in EAX
    ret

; stdcall (Windows API calling convention)
my_stdcall_function:
    push ebp
    mov ebp, esp
    ; Function body
    mov esp, ebp
    pop ebp
    ret 8               ; Callee cleans up stack (8 bytes of parameters)

; fastcall (first two parameters in registers)
my_fastcall_function:   ; ECX = first param, EDX = second param
    push ebp
    mov ebp, esp
    mov eax, ecx        ; Use first parameter
    add eax, edx        ; Add second parameter
    ; Additional parameters on stack: [ebp+8], [ebp+12], etc.
    pop ebp
    ret                 ; Or ret n if cleaning up stack parameters
```

### 4.3 Memory Management
```assembly
; Dynamic memory allocation using system calls
allocate_memory:
    ; Get current program break
    mov eax, SYS_BRK
    mov ebx, 0          ; 0 = get current break
    int 0x80
    mov [heap_start], eax ; Save current heap start
    
    ; Extend heap by requested size
    mov ebx, eax        ; Current break
    add ebx, [requested_size] ; Add requested size
    mov eax, SYS_BRK
    int 0x80            ; Set new break
    
    ; Check if allocation succeeded
    cmp eax, ebx
    jl allocation_failed
    
    mov eax, [heap_start] ; Return pointer to allocated memory
    ret

allocation_failed:
    mov eax, 0          ; Return NULL
    ret

; Memory copy function
memcpy:
    ; Parameters: dest=[ebp+8], src=[ebp+12], count=[ebp+16]
    push ebp
    mov ebp, esp
    push esi
    push edi
    push ecx
    
    mov edi, [ebp+8]    ; Destination
    mov esi, [ebp+12]   ; Source
    mov ecx, [ebp+16]   ; Count
    
    cld                 ; Clear direction flag (forward copy)
    rep movsb           ; Copy ECX bytes from ESI to EDI
    
    pop ecx
    pop edi
    pop esi
    pop ebp
    ret

; Memory set function
memset:
    ; Parameters: dest=[ebp+8], value=[ebp+12], count=[ebp+16]
    push ebp
    mov ebp, esp
    push edi
    push ecx
    
    mov edi, [ebp+8]    ; Destination
    mov eax, [ebp+12]   ; Value to set
    mov ecx, [ebp+16]   ; Count
    
    cld                 ; Clear direction flag
    rep stosb           ; Store AL to [EDI], ECX times
    
    pop ecx
    pop edi
    pop ebp
    ret

; Memory compare function
memcmp:
    ; Parameters: ptr1=[ebp+8], ptr2=[ebp+12], count=[ebp+16]
    push ebp
    mov ebp, esp
    push esi
    push edi
    push ecx
    
    mov esi, [ebp+8]    ; First memory block
    mov edi, [ebp+12]   ; Second memory block
    mov ecx, [ebp+16]   ; Count
    
    cld                 ; Clear direction flag
    repe cmpsb          ; Compare bytes while equal
    
    ; Set return value based on comparison
    mov eax, 0          ; Assume equal
    je .equal
    mov eax, -1         ; First < second
    jb .done
    mov eax, 1          ; First > second
    jmp .done
    
.equal:
    mov eax, 0
.done:
    pop ecx
    pop edi
    pop esi
    pop ebp
    ret
```

## 5. FLOATING POINT OPERATIONS

### 5.1 FPU (x87) Architecture
```assembly
; x87 FPU Register Stack
; ST(0) - Top of stack (most recently loaded)
; ST(1) - Second from top
; ST(2) - Third from top
; ...
; ST(7) - Bottom of stack

; FPU Status Word
; Bit 15: B (FPU Busy)
; Bit 14: C3 (Condition Code 3)
; Bit 13-11: TOP (Top of Stack Pointer)
; Bit 10: C2 (Condition Code 2)
; Bit 9: C1 (Condition Code 1)
; Bit 8: C0 (Condition Code 0)
; Bit 7: ES (Error Summary)
; Bit 6: SF (Stack Fault)
; Bit 5: PE (Precision Exception)
; Bit 4: UE (Underflow Exception)
; Bit 3: OE (Overflow Exception)
; Bit 2: ZE (Zero Divide Exception)
; Bit 1: DE (Denormalized Operand Exception)
; Bit 0: IE (Invalid Operation Exception)

; Loading values onto FPU stack
fld dword [float_var]   ; Load 32-bit float onto ST(0)
fld qword [double_var]  ; Load 64-bit double onto ST(0)
fld tword [extended_var]; Load 80-bit extended precision
fld1                    ; Load 1.0 onto ST(0)
fldz                    ; Load 0.0 onto ST(0)
fldpi                   ; Load π onto ST(0)
fldl2e                  ; Load log₂(e) onto ST(0)
fldl2t                  ; Load log₂(10) onto ST(0)
fldlg2                  ; Load log₁₀(2) onto ST(0)
fldln2                  ; Load ln(2) onto ST(0)

; Storing values from FPU stack
fst dword [result]      ; Store ST(0) to memory (ST(0) remains)
fstp dword [result]     ; Store ST(0) to memory and pop stack
fist dword [int_result] ; Store ST(0) as integer
fistp dword [int_result]; Store ST(0) as integer and pop

; Arithmetic operations
fadd                    ; ST(0) = ST(0) + ST(1), pop stack
fadd st0, st1           ; ST(0) = ST(0) + ST(1)
fadd dword [memory]     ; ST(0) = ST(0) + memory
faddp st1, st0          ; ST(1) = ST(1) + ST(0), pop ST(0)

fsub                    ; ST(0) = ST(1) - ST(0), pop stack
fsub st0, st1           ; ST(0) = ST(0) - ST(1)
fsubr                   ; ST(0) = ST(0) - ST(1), pop stack
fsubr st0, st1          ; ST(0) = ST(1) - ST(0)

fmul                    ; ST(0) = ST(0) * ST(1), pop stack
fmul st0, st1           ; ST(0) = ST(0) * ST(1)
fmul dword [memory]     ; ST(0) = ST(0) * memory

fdiv                    ; ST(0) = ST(1) / ST(0), pop stack
fdiv st0, st1           ; ST(0) = ST(0) / ST(1)
fdivr                   ; ST(0) = ST(0) / ST(1), pop stack

; Comparison operations
fcom                    ; Compare ST(0) with ST(1)
fcom dword [memory]     ; Compare ST(0) with memory
fcomp                   ; Compare ST(0) with ST(1) and pop
fcompp                  ; Compare ST(0) with ST(1) and pop both
fucom                   ; Unordered compare (handles NaN)
fucomp                  ; Unordered compare and pop
fucompp                 ; Unordered compare and pop both

; Get comparison result
fstsw ax               ; Store FPU status word to AX
sahf                   ; Store AH to flags
; Now you can use conditional jumps based on comparison

; Mathematical functions
fsin                   ; ST(0) = sin(ST(0))
fcos                   ; ST(0) = cos(ST(0))
fsincos                ; ST(1) = sin(ST(0)), ST(0) = cos(ST(0))
fptan                  ; ST(1) = ST(0), ST(0) = tan(ST(0))
fpatan                 ; ST(0) = arctan(ST(1)/ST(0)), pop ST(1)
f2xm1                  ; ST(0) = 2^ST(0) - 1
fyl2x                  ; ST(0) = ST(1) * log₂(ST(0)), pop ST(1)
fyl2xp1                ; ST(0) = ST(1) * log₂(ST(0) + 1), pop ST(1)
fsqrt                  ; ST(0) = √ST(0)
fabs                   ; ST(0) = |ST(0)|
fchs                   ; ST(0) = -ST(0)

; Stack management
fxch                   ; Exchange ST(0) and ST(1)
fxch st3               ; Exchange ST(0) and ST(3)
ffree st2              ; Mark ST(2) as empty
fincstp                ; Increment stack top pointer
fdecstp                ; Decrement stack top pointer

; FPU control
finit                  ; Initialize FPU
fninit                 ; Initialize FPU (no wait)
fclex                  ; Clear exceptions
fnclex                 ; Clear exceptions (no wait)
fstcw [control_word]   ; Store control word
fldcw [control_word]   ; Load control word
fstenv [fpu_env]       ; Store FPU environment
fldenv [fpu_env]       ; Load FPU environment
fsave [fpu_state]      ; Save FPU state
frstor [fpu_state]     ; Restore FPU state
```

### 5.2 SSE (Streaming SIMD Extensions)
```assembly
; SSE Registers: XMM0-XMM7 (128-bit each)
; Each XMM register can hold:
; - 4 single-precision floats (32-bit each)
; - 2 double-precision floats (64-bit each)
; - 16 bytes, 8 words, 4 dwords, 2 qwords

; Load/Store operations
movss xmm0, [float_var]     ; Load single scalar float
movsd xmm0, [double_var]    ; Load single scalar double
movaps xmm0, [aligned_mem]  ; Load 4 aligned packed singles
movups xmm0, [unaligned_mem]; Load 4 unaligned packed singles
movapd xmm0, [aligned_mem]  ; Load 2 aligned packed doubles
movupd xmm0, [unaligned_mem]; Load 2 unaligned packed doubles

; Arithmetic operations (scalar)
addss xmm0, xmm1           ; Add scalar singles
subss xmm0, xmm1           ; Subtract scalar singles
mulss xmm0, xmm1           ; Multiply scalar singles
divss xmm0, xmm1           ; Divide scalar singles
sqrtss xmm0, xmm1          ; Square root scalar single

addsd xmm0, xmm1           ; Add scalar doubles
subsd xmm0, xmm1           ; Subtract scalar doubles
mulsd xmm0, xmm1           ; Multiply scalar doubles
divsd xmm0, xmm1           ; Divide scalar doubles
sqrtsd xmm0, xmm1          ; Square root scalar double

; Arithmetic operations (packed)
addps xmm0, xmm1           ; Add 4 packed singles
subps xmm0, xmm1           ; Subtract 4 packed singles
mulps xmm0, xmm1           ; Multiply 4 packed singles
divps xmm0, xmm1           ; Divide 4 packed singles
sqrtps xmm0, xmm1          ; Square root 4 packed singles

addpd xmm0, xmm1           ; Add 2 packed doubles
subpd xmm0, xmm1           ; Subtract 2 packed doubles
mulpd xmm0, xmm1           ; Multiply 2 packed doubles
divpd xmm0, xmm1           ; Divide 2 packed doubles
sqrtpd xmm0, xmm1          ; Square root 2 packed doubles

; Comparison operations
cmpss xmm0, xmm1, 0        ; Compare scalar singles (EQ)
cmpss xmm0, xmm1, 1        ; Compare scalar singles (LT)
cmpss xmm0, xmm1, 2        ; Compare scalar singles (LE)
cmpss xmm0, xmm1, 4        ; Compare scalar singles (NE)

; Comparison predicates:
; 0 = EQ (equal)
; 1 = LT (less than)
; 2 = LE (less than or equal)
; 3 = UNORD (unordered)
; 4 = NEQ (not equal)
; 5 = NLT (not less than)
; 6 = NLE (not less than or equal)
; 7 = ORD (ordered)

; Conversion operations
cvtss2sd xmm0, xmm1        ; Convert scalar single to double
cvtsd2ss xmm0, xmm1        ; Convert scalar double to single
cvtsi2ss xmm0, eax         ; Convert integer to scalar single
cvtss2si eax, xmm0         ; Convert scalar single to integer
cvttss2si eax, xmm0        ; Convert scalar single to integer (truncate)

; Shuffle and unpack operations
shufps xmm0, xmm1, 0xE4    ; Shuffle packed singles
unpcklps xmm0, xmm1        ; Unpack low packed singles
unpckhps xmm0, xmm1        ; Unpack high packed singles

; Logical operations
andps xmm0, xmm1           ; Bitwise AND
orps xmm0, xmm1            ; Bitwise OR
xorps xmm0, xmm1           ; Bitwise XOR
andnps xmm0, xmm1          ; Bitwise AND NOT

; Min/Max operations
minss xmm0, xmm1           ; Minimum scalar single
maxss xmm0, xmm1           ; Maximum scalar single
minps xmm0, xmm1           ; Minimum packed singles
maxps xmm0, xmm1           ; Maximum packed singles
```

## 6. ADVANCED PROGRAMMING TECHNIQUES

### 6.1 Bit Manipulation Techniques
```assembly
; Check if number is power of 2
is_power_of_2:
    ; Input: EAX = number
    ; Output: ZF = 1 if power of 2, 0 otherwise
    test eax, eax           ; Check if zero
    jz .not_power_of_2      ; Zero is not power of 2
    
    mov ebx, eax            ; Copy number
    dec ebx                 ; n - 1
    and eax, ebx            ; n & (n-1)
    ; If result is 0, then n is power of 2
    ret

.not_power_of_2:
    mov eax, 1              ; Set non-zero to clear ZF
    ret

; Count set bits (population count)
popcount:
    ; Input: EAX = number
    ; Output: EAX = number of set bits
    push ecx
    xor ecx, ecx            ; Clear counter
    
.count_loop:
    test eax, eax           ; Check if zero
    jz .done
    
    mov ebx, eax            ; Copy number
    dec ebx                 ; n - 1
    and eax, ebx            ; n & (n-1) clears lowest set bit
    inc ecx                 ; Increment counter
    jmp .count_loop
    
.done:
    mov eax, ecx            ; Return count
    pop ecx
    ret

; Find first set bit (similar to BSF)
find_first_set:
    ; Input: EAX = number
    ; Output: EAX = position of first set bit (0-based), -1 if not found
    test eax, eax
    jz .not_found
    
    push ecx
    xor ecx, ecx            ; Bit position counter
    
.find_loop:
    test eax, 1             ; Check lowest bit
    jnz .found
    shr eax, 1              ; Shift right
    inc ecx                 ; Increment position
    jmp .find_loop
    
.found:
    mov eax, ecx            ; Return position
    pop ecx
    ret
    
.not_found:
    mov eax, -1             ; Return -1 if no bits set
    ret

; Reverse bits in a 32-bit number
reverse_bits:
    ; Input: EAX = number
    ; Output: EAX = number with bits reversed
    push ebx
    push ecx
    
    xor ebx, ebx            ; Result
    mov ecx, 32             ; Bit counter
    
.reverse_loop:
    shl ebx, 1              ; Shift result left
    shr eax, 1              ; Shift input right
    adc ebx, 0              ; Add carry to result
    loop .reverse_loop
    
    mov eax, ebx            ; Return result
    pop ecx
    pop ebx
    ret

; Extract bits from position with mask
extract_bits:
    ; Parameters: value=[ebp+8], position=[ebp+12], width=[ebp+16]
    ; Output: EAX = extracted bits
    push ebp
    mov ebp, esp
    push ebx
    push ecx
    
    mov eax, [ebp+8]        ; Get value
    mov ecx, [ebp+12]       ; Get position
    mov ebx, [ebp+16]       ; Get width
    
    shr eax, cl             ; Shift right by position
    
    ; Create mask for width bits
    mov ecx, ebx            ; Width
    mov ebx, 1
    shl ebx, cl             ; 1 << width
    dec ebx                 ; (1 << width) - 1 = mask
    
    and eax, ebx            ; Apply mask
    
    pop ecx
    pop ebx
    pop ebp
    ret

; Set specific bits
set_bits:
    ; Parameters: value=[ebp+8], position=[ebp+12], width=[ebp+16], new_bits=[ebp+20]
    push ebp
    mov ebp, esp
    push ebx
    push ecx
    push edx
    
    mov eax, [ebp+8]        ; Original value
    mov ecx, [ebp+12]       ; Position
    mov ebx, [ebp+16]       ; Width
    mov edx, [ebp+20]       ; New bits
    
    ; Create mask
    push eax                ; Save original value
    mov eax, 1
    shl eax, bl             ; 1 << width
    dec eax                 ; (1 << width) - 1 = field mask
    shl eax, cl             ; Shift mask to position
    not eax                 ; Invert mask for clearing
    
    pop ebx                 ; Restore original value
    and ebx, eax            ; Clear target bits
    
    ; Prepare new bits
    and edx, 1              ; Mask new bits to width
    shl edx, 1              ; Shift to position
    dec edx
    shl edx, cl
    
    or eax, ebx             ; Combine with cleared value
    or eax, edx             ; Set new bits
    
    pop edx
    pop ecx  
    pop ebx
    pop ebp
    ret
```

### 6.2 String Processing
```assembly
; String length calculation
strlen:
    ; Input: ESI = string pointer
    ; Output: EAX = string length
    push edi
    push ecx
    
    mov edi, esi            ; Copy string pointer
    xor eax, eax            ; Search for null terminator (0)
    mov ecx, -1             ; Maximum count (4GB)
    repne scasb             ; Scan for AL (0) in string
    
    not ecx                 ; Convert to positive count
    dec ecx                 ; Subtract 1 (for the null terminator)
    mov eax, ecx            ; Return length
    
    pop ecx
    pop edi
    ret

; String copy
strcpy:
    ; Parameters: dest=[ebp+8], src=[ebp+12]
    ; Output: EAX = dest
    push ebp
    mov ebp, esp
    push esi
    push edi
    
    mov edi, [ebp+8]        ; Destination
    mov esi, [ebp+12]       ; Source
    mov eax, edi            ; Return value (dest)
    
.copy_loop:
    lodsb                   ; Load byte from [ESI] to AL
    stosb                   ; Store AL to [EDI]
    test al, al             ; Check for null terminator
    jnz .copy_loop          ; Continue if not zero
    
    pop edi
    pop esi
    pop ebp
    ret

; String concatenation
strcat:
    ; Parameters: dest=[ebp+8], src=[ebp+12]
    ; Output: EAX = dest
    push ebp
    mov ebp, esp
    push esi
    push edi
    
    mov edi, [ebp+8]        ; Destination
    mov esi, [ebp+12]       ; Source
    mov eax, edi            ; Return value
    
    ; Find end of destination string
    push edi
    xor eax, eax            ; Search for null
    mov ecx, -1             ; Maximum length
    repne scasb             ; Find null terminator
    dec edi                 ; Back up to null position
    pop eax                 ; Restore return value
    
    ; Copy source to end of destination
.concat_loop:
    lodsb                   ; Load from source
    stosb                   ; Store to destination
    test al, al             ; Check for null
    jnz .concat_loop        ; Continue if not null
    
    pop edi
    pop esi
    pop ebp
    ret

; String comparison
strcmp:
    ; Parameters: str1=[ebp+8], str2=[ebp+12]
    ; Output: EAX = 0 (equal), <0 (str1<str2), >0 (str1>str2)
    push ebp
    mov ebp, esp
    push esi
    push edi
    
    mov esi, [ebp+8]        ; First string
    mov edi, [ebp+12]       ; Second string
    
.compare_loop:
    lodsb                   ; Load byte from first string
    mov bl, [edi]           ; Load byte from second string
    inc edi                 ; Advance second string pointer
    
    cmp al, bl              ; Compare bytes
    jne .not_equal          ; Different bytes found
    
    test al, al             ; Check for null terminator
    jnz .compare_loop       ; Continue if not end
    
    ; Strings are equal
    xor eax, eax            ; Return 0
    jmp .done
    
.not_equal:
    movzx eax, al           ; Zero-extend first byte
    movzx ebx, bl           ; Zero-extend second byte
    sub eax, ebx            ; Return difference
    
.done:
    pop edi
    pop esi
    pop ebp
    ret

; Case-insensitive string comparison
stricmp:
    ; Parameters: str1=[ebp+8], str2=[ebp+12]
    push ebp
    mov ebp, esp
    push esi
    push edi
    
    mov esi, [ebp+8]        ; First string
    mov edi, [ebp+12]       ; Second string
    
.compare_loop:
    lodsb                   ; Load byte from first string
    mov bl, [edi]           ; Load byte from second string
    inc edi                 ; Advance pointer
    
    ; Convert both to lowercase
    call .to_lower_al       ; Convert AL to lowercase
    push eax
    mov al, bl
    call .to_lower_al       ; Convert BL to lowercase
    mov bl, al
    pop eax
    
    cmp al, bl              ; Compare lowercase bytes
    jne .not_equal
    
    test al, al             ; Check for null
    jnz .compare_loop
    
    xor eax, eax            ; Equal
    jmp .done
    
.not_equal:
    movzx eax, al
    movzx ebx, bl
    sub eax, ebx
    
.done:
    pop edi
    pop esi
    pop ebp
    ret

.to_lower_al:
    ; Convert AL to lowercase if uppercase
    cmp al, 'A'
    jb .not_upper
    cmp al, 'Z'
    ja .not_upper
    add al, 32              ; Convert to lowercase
.not_upper:
    ret

; String search (find substring)
strstr:
    ; Parameters: haystack=[ebp+8], needle=[ebp+12]
    ; Output: EAX = pointer to first occurrence, or 0 if not found
    push ebp
    mov ebp, esp
    push esi
    push edi
    push ebx
    
    mov esi, [ebp+8]        ; Haystack
    mov edi, [ebp+12]       ; Needle
    
    ; Check if needle is empty
    cmp byte [edi], 0
    je .found_at_start      ; Empty needle found at start
    
.search_loop:
    mov al, [esi]           ; Current haystack character
    test al, al             ; Check for end of haystack
    jz .not_found
    
    cmp al, [edi]           ; Compare with first needle character
    je .potential_match
    
    inc esi                 ; Move to next character in haystack
    jmp .search_loop
    
.potential_match:
    ; Found potential match, compare full substring
    push esi                ; Save haystack position
    push edi                ; Save needle position
    
.match_loop:
    lodsb                   ; Load haystack character
    mov bl, [edi]           ; Load needle character
    inc edi                 ; Advance needle
    
    cmp al, bl              ; Compare characters
    jne .no_match           ; Characters don't match
    
    test bl, bl             ; Check if end of needle
    jz .found_match         ; Complete match found
    
    test al, al             ; Check if end of haystack
    jz .no_match            ; Haystack ended before needle
    
    jmp .match_loop
    
.found_match:
    ; Complete match found
    add esp, 8              ; Clean up saved pointers
    mov eax, [ebp+8]        ; Return start of match
    jmp .done
    
.no_match:
    ; No match, restore positions and continue
    pop edi                 ; Restore needle pointer
    pop esi                 ; Restore haystack pointer
    inc esi                 ; Move to next position in haystack
    jmp .search_loop
    
.found_at_start:
    mov eax, esi            ; Return haystack pointer
    jmp .done
    
.not_found:
    xor eax, eax            ; Return NULL
    
.done:
    pop ebx
    pop edi
    pop esi
    pop ebp
    ret
```

### 6.3 Mathematical Functions
```assembly
; Integer square root (Newton's method)
isqrt:
    ; Input: EAX = number
    ; Output: EAX = integer square root
    push ebx
    push ecx
    push edx
    
    test eax, eax           ; Check for zero
    jz .done                ; sqrt(0) = 0
    
    ; Initial guess: x = n / 2
    mov ebx, eax            ; Save original number
    shr eax, 1              ; x = n / 2
    inc eax                 ; Ensure x > 0
    
.newton_loop:
    mov ecx, eax            ; Save current guess
    
    ; Calculate new guess: x = (x + n/x) / 2
    xor edx, edx            ; Clear for division
    mov eax, ebx            ; n
    div ecx                 ; n / x
    add eax, ecx            ; x + n/x
    shr eax, 1              ; (x + n/x) / 2
    
    ; Check for convergence
    cmp eax, ecx            ; Compare with previous guess
    jne .newton_loop        ; Continue if different
    
.done:
    pop edx
    pop ecx
    pop ebx
    ret

; Greatest Common Divisor (Euclidean algorithm)
gcd:
    ; Parameters: a=[ebp+8], b=[ebp+12]
    ; Output: EAX = GCD(a,b)
    push ebp
    mov ebp, esp
    push ebx
    push edx
    
    mov eax, [ebp+8]        ; a
    mov ebx, [ebp+12]       ; b
    
.gcd_loop:
    test ebx, ebx           ; Check if b == 0
    jz .done                ; If b == 0, GCD is a
    
    xor edx, edx            ; Clear remainder
    div ebx                 ; a / b, remainder in EDX
    mov eax, ebx            ; a = b
    mov ebx, edx            ; b = remainder
    jmp .gcd_loop
    
.done:
    pop edx
    pop ebx
    pop ebp
    ret

; Least Common Multiple
lcm:
    ; Parameters: a=[ebp+8], b=[ebp+12]  
    ; Output: EAX = LCM(a,b) = (a*b)/GCD(a,b)
    push ebp
    mov ebp, esp
    push ebx
    push ecx
    push edx
    
    mov eax, [ebp+8]        ; a
    mov ebx, [ebp+12]       ; b
    
    ; Calculate a * b
    mul ebx                 ; EDX:EAX = a * b
    push eax                ; Save low part of product
    push edx                ; Save high part of product
    
    ; Calculate GCD(a,b)
    push dword [ebp+12]     ; Push b
    push dword [ebp+8]      ; Push a
    call gcd                ; Call GCD function
    add esp, 8              ; Clean up parameters
    
    mov ebx, eax            ; EBX = GCD(a,b)
    pop edx                 ; Restore high part of product
    pop eax                 ; Restore low part of product
    
    ; Divide product by GCD
    div ebx                 ; EAX = (a*b) / GCD(a,b)
    
    pop edx
    pop ecx
    pop ebx
    pop ebp
    ret

; Fast modular exponentiation (a^b mod m)
modpow:
    ; Parameters: base=[ebp+8], exp=[ebp+12], mod=[ebp+16]
    ; Output: EAX = (base^exp) mod mod
    push ebp
    mov ebp, esp
    push ebx
    push ecx
    push edx
    push esi
    
    mov eax, [ebp+8]        ; base
    mov ecx, [ebp+12]       ; exponent
    mov esi, [ebp+16]       ; modulus
    
    ; Handle special cases
    test esi, esi           ; Check for mod = 0
    jz .error
    cmp esi, 1              ; If mod = 1, result is 0
    je .zero_result
    
    mov ebx, 1              ; result = 1
    
    ; Reduce base modulo m
    xor edx, edx
    div esi                 ; base = base mod m
    mov eax, edx            ; EAX = base mod m
    
.power_loop:
    test ecx, ecx           ; Check if exponent is 0
    jz .done
    
    test ecx, 1             ; Check if exponent is odd
    jz .even_exp
    
    ; Odd exponent: result = (result * base) mod m
    push eax                ; Save base
    mov eax, ebx            ; result
    mul dword [esp]         ; result * base
    div esi                 ; (result * base) mod m
    mov ebx, edx            ; Update result
    pop eax                 ; Restore base
    
.even_exp:
    ; Square the base: base = (base * base) mod m
    push ebx                ; Save result
    mul eax                 ; base * base
    div esi                 ; (base * base) mod m
    mov eax, edx            ; Update base
    pop ebx                 ; Restore result
    
    shr ecx, 1              ; exponent = exponent / 2
    jmp .power_loop
    
.done:
    mov eax, ebx            ; Return result
    jmp .exit
    
.zero_result:
    xor eax, eax            ; Return 0
    jmp .exit
    
.error:
    mov eax, -1             ; Return error
    
.exit:
    pop esi
    pop edx
    pop ecx
    pop ebx
    pop ebp
    ret

; Factorial calculation (iterative)
factorial:
    ; Input: EAX = n
    ; Output: EAX = n!
    push ebx
    push ecx
    
    mov ecx, eax            ; Counter
    mov eax, 1              ; Result
    
    test ecx, ecx           ; Check for n = 0
    jz .done                ; 0! = 1
    
.fact_loop:
    mul ecx                 ; result *= counter
    dec ecx                 ; counter--
    jnz .fact_loop          ; Continue while counter > 0
    
.done:
    pop ecx
    pop ebx
    ret

; Fibonacci calculation (iterative)
fibonacci:
    ; Input: EAX = n
    ; Output: EAX = nth Fibonacci number
    push ebx
    push ecx
    
    test eax, eax           ; Check for n = 0
    jz .fib_zero
    cmp eax, 1              ; Check for n = 1
    je .fib_one
    
    mov ecx, eax            ; Counter
    mov eax, 0              ; F(0) = 0
    mov ebx, 1              ; F(1) = 1
    
.fib_loop:
    add eax, ebx            ; F(n) = F(n-1) + F(n-2)
    xchg eax, ebx           ; Swap values
    dec ecx                 ; Decrement counter
    cmp ecx, 1              ; Continue until n = 1
    jg .fib_loop
    
    mov eax, ebx            ; Return result
    jmp .done
    
.fib_zero:
    xor eax, eax            ; F(0) = 0
    jmp .done
    
.fib_one:
    mov eax, 1              ; F(1) = 1
    
.done:
    pop ecx
    pop ebx
    ret
```

## 7. DEBUGGING AND OPTIMIZATION

### 7.1 GDB Debugging Commands
```bash
# Compilation for debugging
nasm -f elf32 -g -F dwarf program.asm -o program.o
ld -m elf_i386 program.o -o program

# Start GDB
gdb ./program

# Basic GDB commands:
(gdb) break _start          # Set breakpoint at _start
(gdb) break *0x08048080     # Set breakpoint at address
(gdb) run                   # Start program execution
(gdb) continue              # Continue execution
(gdb) step                  # Single step (into functions)
(gdb) stepi                 # Single instruction step
(gdb) next                  # Next line (over functions)
(gdb) nexti                 # Next instruction (over calls)

# Register examination
(gdb) info registers        # Show all registers
(gdb) info registers eax    # Show specific register
(gdb) print $eax           # Print register value
(gdb) print/x $eax         # Print in hexadecimal
(gdb) print/t $eax         # Print in binary
(gdb) print/d $eax         # Print in decimal

# Memory examination
(gdb) x/10i $eip           # Examine 10 instructions at EIP
(gdb) x/10x $esp           # Examine 10 words at ESP in hex
(gdb) x/10b $esp           # Examine 10 bytes at ESP
(gdb) x/s 0x8048000        # Examine string at address
(gdb) x/10i _start         # Examine instructions at _start

# Memory modification
(gdb) set $eax = 0x12345   # Set register value
(gdb) set {int}0x8048000 = 0x90909090  # Set memory value

# Watchpoints
(gdb) watch variable_name   # Break when variable changes
(gdb) watch *0x8048000     # Break when memory location changes
(gdb) rwatch *0x8048000    # Break when memory location is read

# Stack examination
(gdb) bt                   # Backtrace (call stack)
(gdb) info frame           # Current frame info
(gdb) info args            # Function arguments
(gdb) info locals          # Local variables

# Assembly-specific commands
(gdb) disassemble          # Disassemble current function
(gdb) disassemble _start   # Disassemble specific function
(gdb) set disassembly-flavor intel  # Use Intel syntax
```

### 7.2 Performance Optimization Techniques
```assembly
; 1. Loop Optimization
; Bad: Inefficient loop
bad_loop:
    mov ecx, 1000           ; Counter
    mov esi, array_start    ; Array pointer
    
.loop:
    mov eax, [esi]          ; Load array element
    add eax, 1              ; Increment
    mov [esi], eax          ; Store back
    add esi, 4              ; Next element
    dec ecx                 ; Decrement counter
    cmp ecx, 0              ; Compare with zero
    jne .loop               ; Jump if not zero
    ret

; Good: Optimized loop
good_loop:
    mov ecx, 1000           ; Counter
    mov esi, array_start    ; Array pointer
    
.loop:
    inc dword [esi]         ; Increment in memory (fewer instructions)
    add esi, 4              ; Next element
    loop .loop              ; Decrement ECX and jump if not zero
    ret

; 2. Strength Reduction
; Bad: Using multiplication
bad_multiply:
    mov eax, [index]        ; Load index
    mov ebx, 4              ; Size of element
    mul ebx                 ; Multiply by element size
    add eax, array_base     ; Add base address
    mov ebx, [eax]          ; Load element
    ret

; Good: Using shift (for powers of 2)
good_multiply:
    mov eax, [index]        ; Load index
    shl eax, 2              ; Multiply by 4 (shift left by 2)
    add eax, array_base     ; Add base address
    mov ebx, [eax]          ; Load element
    ret

; Even better: Using LEA
best_multiply:
    mov eax, [index]        ; Load index
    lea ebx, [array_base + eax*4]  ; Calculate address in one instruction
    mov eax, [ebx]          ; Load element
    ret

; 3. Branch Prediction Optimization
; Bad: Unpredictable branches
bad_branching:
    mov ecx, 1000
    mov esi, data_array
    
.loop:
    mov eax, [esi]
    test eax, 1             ; Check if odd
    jz .even                ; Jump if even (unpredictable)
    
    ; Process odd numbers
    add eax, 1
    jmp .continue
    
.even:
    ; Process even numbers
    shr eax, 1
    
.continue:
    mov [esi], eax
    add esi, 4
    loop .loop
    ret

; Good: Minimize branches using conditional moves
good_branching:
    mov ecx, 1000
    mov esi, data_array
    
.loop:
    mov eax, [esi]
    mov ebx, eax            ; Copy for even processing
    mov edx, eax            ; Copy for odd processing
    
    shr ebx, 1              ; Process as even
    inc edx                 ; Process as odd
    
    test eax, 1             ; Check if odd
    cmovz eax, ebx          ; Use even result if zero (even)
    cmovnz eax, edx         ; Use odd result if non-zero (odd)
    
    mov [esi], eax
    add esi, 4
    loop .loop
    ret

; 4. Cache-Friendly Memory Access
; Bad: Poor cache locality
bad_cache_access:
    mov ecx, 1000           ; Rows
    mov edx, 1000           ; Columns
    
.outer_loop:
    push ecx
    mov ecx, edx            ; Columns counter
    mov esi, 0              ; Column index
    
.inner_loop:
    ; Access matrix[row][col] - column-major access (bad for cache)
    mov eax, esi            ; Column
    imul eax, 1000          ; * number of rows
    add eax, [current_row]  ; + row index
    shl eax, 2              ; * sizeof(int)
    add eax, matrix_base    ; + base address
    
    inc dword [eax]         ; Process element
    inc esi                 ; Next column
    loop .inner_loop
    
    inc dword [current_row] ; Next row
    pop ecx
    loop .outer_loop
    ret

; Good: Cache-friendly access pattern
good_cache_access:
    mov ecx, 1000           ; Rows
    mov esi, matrix_base    ; Start of matrix
    
.outer_loop:
    push ecx
    mov ecx, 1000           ; Columns counter
    
.inner_loop:
    inc dword [esi]         ; Process element (sequential access)
    add esi, 4              ; Next element
    loop .inner_loop
    
    pop ecx
    loop .outer_loop
    ret

; 5. SIMD Optimization
; Scalar version (processes one element at a time)
scalar_add:
    mov ecx, 1000           ; Number of elements
    mov esi, array_a        ; First array
    mov edi, array_b        ; Second array
    mov ebx, result_array   ; Result array
    
.loop:
    mov eax, [esi]          ; Load from array_a
    add eax, [edi]          ; Add from array_b
    mov [ebx], eax          ; Store to result
    add esi, 4              ; Next element in array_a
    add edi, 4              ; Next element in array_b
    add ebx, 4              ; Next element in result
    loop .loop
    ret

; SIMD version (processes 4 elements at a time)
simd_add:
    mov ecx, 250            ; Number of SIMD iterations (1000/4)
    mov esi, array_a        ; First array
    mov edi, array_b        ; Second array
    mov ebx, result_array   ; Result array
    
.loop:
    movups xmm0, [esi]      ; Load 4 floats from array_a
    movups xmm1, [edi]      ; Load 4 floats from array_b
    addps xmm0, xmm1        ; Add 4 pairs simultaneously
    movups [ebx], xmm0      ; Store 4 results
    add esi, 16             ; Next 4 elements (4 * 4 bytes)
    add edi, 16             ; Next 4 elements
    add ebx, 16             ; Next 4 elements
    loop .loop
    ret

; 6. Function Call Optimization
; Bad: Excessive function calls
bad_function_calls:
    mov ecx, 1000
    
.loop:
    push ecx                ; Save counter
    push eax                ; Push parameter
    call small_function     ; Call function
    add esp, 4              ; Clean up parameter
    pop ecx                 ; Restore counter
    loop .loop
    ret

small_function:
    push ebp
    mov ebp, esp
    mov eax, [ebp+8]        ; Get parameter
    add eax, 1              ; Simple operation
    pop ebp
    ret

; Good: Inline the function
good_inline:
    mov ecx, 1000
    
.loop:
    inc eax                 ; Inlined operation
    loop .loop
    ret

; 7. Register Usage Optimization
; Bad: Excessive memory access
bad_register_usage:
    mov ecx, 1000
    
.loop:
    mov eax, [temp_var]     ; Load from memory
    add eax, 1              ; Increment
    mov [temp_var], eax     ; Store to memory
    
    mov ebx, [counter]      ; Load counter
    inc ebx                 ; Increment counter
    mov [counter], ebx      ; Store counter
    
    dec ecx
    jnz .loop
    ret

; Good: Keep variables in registers
good_register_usage:
    mov ecx, 1000           ; Loop counter
    mov eax, [temp_var]     ; Load once, keep in register
    mov ebx, [counter]      ; Load once, keep in register
    
.loop:
    inc eax                 ; Increment (in register)
    inc ebx                 ; Increment counter (in register)
    dec ecx
    jnz .loop
    
    mov [temp_var], eax     ; Store once at end
    mov [counter], ebx      ; Store once at end
    ret
```

### 7.3 Code Size Optimization
```assembly
; 1. Instruction Selection
; Longer instructions
mov eax, 0                  ; 5 bytes
mov ebx, ebx                ; 2 bytes (no-op)
add eax, 1                  ; 3 bytes

; Shorter instructions
xor eax, eax                ; 2 bytes (same effect as mov eax, 0)
nop                         ; 1 byte (no-op)
inc eax                     ; 1 byte (same effect as add eax, 1)

; 2. Use smaller data types when possible
; 32-bit operations
mov eax, [big_array + ebx*4]    ; Longer encoding
add eax, 1000                   ; Longer immediate

; 16-bit operations (when range allows)
mov ax, [small_array + bx*2]    ; Shorter encoding
add ax, 100                     ; Shorter immediate

; 8-bit operations (when range allows)
mov al, [byte_array + bx]       ; Shortest encoding
add al, 10                      ; Shortest immediate

; 3. Jump optimization
; Long jumps
jmp far_label                   ; May use 32-bit displacement

; Short jumps (when possible)
jmp short near_label            ; Uses 8-bit displacement

; 4. Use LOOP instruction when appropriate
; Manual loop
dec ecx
cmp ecx, 0
jne loop_start                  ; Multiple instructions

; LOOP instruction
loop loop_start                 ; Single instruction

; 5. Optimize common patterns
; Clear register (5 bytes)
mov eax, 0

; Clear register (2 bytes)
xor eax, eax

; Set register to -1 (5 bytes)
mov eax, -1

; Set register to -1 (2-3 bytes)
or eax, -1
; or
sbb eax, eax                    ; Sets to -1 if CF=1, 0 if CF=0
```

## 8. MACRO PROGRAMMING

### 8.1 NASM Macro System
```assembly
; Simple macros
%macro PRINT_CHAR 1
    mov eax, 4              ; sys_write
    mov ebx, 1              ; stdout
    mov ecx, %1             ; character to print
    mov edx, 1              ; length
    int 0x80
%endmacro

; Multi-line macro with parameters
%macro SAVE_REGS 0
    push eax
    push ebx
    push ecx
    push edx
%endmacro

%macro RESTORE_REGS 0
    pop edx
    pop ecx
    pop ebx
    pop eax
%endmacro

; Conditional macro parameters
%macro PRINT_STRING 1-2 0
    mov eax, 4              ; sys_write
    mov ebx, 1              ; stdout
    mov ecx, %1             ; string address
    %if %0 > 1
        mov edx, %2         ; length provided
    %else
        mov edx, strlen(%1) ; calculate length
    %endif
    int 0x80
%endmacro

; Variable argument macro
%macro PUSH_MULTIPLE 1-*
    %rep %0                 ; Repeat for each argument
        push %1             ; Push current argument
        %rotate 1           ; Move to next argument
    %endrep
%endmacro

; Macro with local labels
%macro SAFE_DIVIDE 2
    %%check_zero:
    cmp %2, 0               ; Check for division by zero
    je %%division_by_zero
    
    xor edx, edx            ; Clear remainder
    mov eax, %1             ; Dividend
    div %2                  ; Divide
    jmp %%done
    
    %%division_by_zero:
    mov eax, -1             ; Error code
    
    %%done:
%endmacro

; Advanced macro with context
%macro FUNCTION 1
    %push function_context
    %define %$name %1
    
    %1:
    push ebp
    mov ebp, esp
    %assign %$localsize 0
%endmacro

%macro LOCAL 1-2 1
    %assign %$localsize %$localsize + (%2 * 4)
    %define %1 ebp - %$localsize
%endmacro

%macro ENDFUNCTION 0
    mov esp, ebp
    pop ebp
    ret
    %pop
%endmacro

; Usage example
FUNCTION my_function
    LOCAL temp_var          ; [ebp-4]
    LOCAL array, 10         ; [ebp-44] (10 dwords)
    
    sub esp, %$localsize    ; Allocate local variables
    
    ; Function body
    mov dword [temp_var], 42
    
    add esp, %$localsize    ; Deallocate locals
ENDFUNCTION

; String macros
%macro STRING 2
    %1 db %2, 0
    %1_len equ $ - %1 - 1
%endmacro

; Usage
STRING hello_msg, "Hello, World!"
; Expands to:
; hello_msg db "Hello, World!", 0
; hello_msg_len equ $ - hello_msg - 1

; System call macro
%macro SYSCALL 1-6
    %if %0 >= 1
        mov eax, %1         ; System call number
    %endif
    %if %0 >= 2
        mov ebx, %2         ; First argument
    %endif
    %if %0 >= 3
        mov ecx, %3         ; Second argument
    %endif
    %if %0 >= 4
        mov edx, %4         ; Third argument
    %endif
    %if %0 >= 5
        mov esi, %5         ; Fourth argument
    %endif
    %if %0 >= 6
        mov edi, %6         ; Fifth argument
    %endif
    int 0x80
%endmacro

; Usage examples
SYSCALL 4, 1, msg, msg_len  ; write(stdout, msg, msg_len)
SYSCALL 1, 0                ; exit(0)

; Debugging macro
%macro DEBUG_PRINT 1
%ifdef DEBUG
    push eax
    push ebx
    push ecx
    push edx
    
    PRINT_STRING %1
    
    pop edx
    pop ecx
    pop ebx
    pop eax
%endif
%endmacro

; Compile-time calculations
%assign BUFFER_SIZE 1024
%assign HALF_BUFFER BUFFER_SIZE / 2
%assign BUFFER_MASK BUFFER_SIZE - 1

; Conditional compilation
%ifdef WIN32
    %define NEWLINE 13, 10
%else
    %define NEWLINE 10
%endif

; Preprocessor functions
%define ALIGN_UP(x, a) (((x) + (a) - 1) & ~((a) - 1))
%define MIN(a, b) ((a) < (b) ? (a) : (b))
%define MAX(a, b) ((a) > (b) ? (a) : (b))

; Structure macro
%macro STRUCT 1
    struc %1
%endmacro

%macro ENDS 0
    endstruc
%endmacro

; Usage
STRUCT Point
    .x resd 1
    .y resd 1
ENDS

; Create instance
my_point:
    istruc Point
        at Point.x, dd 10
        at Point.y, dd 20
    iend
```

### 8.2 Advanced Macro Techniques
```assembly
; Recursive macros
%macro FACTORIAL 1
    %if %1 <= 1
        %assign %%result 1
    %else
        FACTORIAL (%1 - 1)
        %assign %%result %1 * %%result
    %endif
%endmacro

; Generate lookup table
%macro GENERATE_SQUARES 1
    square_table:
    %assign %%i 0
    %rep %1
        dd %%i * %%i
        %assign %%i %%i + 1
    %endrep
%endmacro

GENERATE_SQUARES 256        ; Generate table of squares 0-255

; Template-like macro
%macro DEFINE_SORT_FUNCTION 2  ; %1=name, %2=element_size
%1:
    push ebp
    mov ebp, esp
    push esi
    push edi
    push ebx
    
    mov esi, [ebp+8]        ; Array pointer
    mov ecx, [ebp+12]       ; Number of elements
    
    %%outer_loop:
    dec ecx
    jz %%done
    mov edi, esi            ; Start of unsorted portion
    mov ebx, ecx            ; Inner loop counter
    
    %%inner_loop:
    mov eax, [edi]          ; Current element
    mov edx, [edi + %2]     ; Next element
    cmp eax, edx
    jle %%no_swap
    
    ; Swap elements
    mov [edi], edx
    mov [edi + %2], eax
    
    %%no_swap:
    add edi, %2             ; Move to next element
    dec ebx
    jnz %%inner_loop
    
    jmp %%outer_loop
    
    %%done:
    pop ebx
    pop edi
    pop esi
    pop ebp
    ret
%endmacro

; Generate sort functions for different data types
DEFINE_SORT_FUNCTION sort_bytes, 1
DEFINE_SORT_FUNCTION sort_words, 2
DEFINE_SORT_FUNCTION sort_dwords, 4

; Generic container macros
%macro DEFINE_ARRAY 3       ; %1=name, %2=type, %3=size
%1:
    .data times %3 %2 0
    .size equ %3
    .element_size equ %2_size
    .capacity equ %3
    .count dd 0
%endmacro

%macro ARRAY_PUSH 2         ; %1=array_name, %2=value
    mov eax, [%1.count]
    cmp eax, %1.capacity
    jge %%array_full
    
    mov ebx, %1.data
    mov ecx, %1.element_size
    mul ecx                 ; EAX = index * element_size
    add ebx, eax            ; EBX = address of element
    
    mov eax, %2             ; Value to store
    mov [ebx], eax          ; Store value
    
    inc dword [%1.count]    ; Increment count
    %%array_full:
%endmacro

; Usage
DEFINE_ARRAY my_array, dd, 100
ARRAY_PUSH my_array, 42

; Code generation macro
%macro GENERATE_CASE_TABLE 1-*
    %1_table:
    %assign %%case_num 0
    %rep %0 - 1
        %rotate 1
        dd %1_case_%[%%case_num]
        %assign %%case_num %%case_num + 1
    %endrep
    
    %1_dispatch:
    push ebp
    mov ebp, esp
    mov eax, [ebp+8]        ; Case number
    cmp eax, %0 - 1
    jae %%default_case
    
    jmp [%1_table + eax*4]  ; Jump to case
    
    %%default_case:
    ; Default case handling
    
    %assign %%case_num 0
    %rep %0 - 1
        %1_case_%[%%case_num]:
        ; Case handling code would go here
        jmp %%end_switch
        %assign %%case_num %%case_num + 1
    %endrep
    
    %%end_switch:
    pop ebp
    ret
%endmacro

; Error handling macros
%macro TRY 0
    %push try_block
    %define %$catch_label %%catch_%[__LINE__]
%endmacro

%macro CATCH 0
    jmp %%end_try_%[__LINE__]
    %$catch_label:
%endmacro

%macro ENDTRY 0
    %%end_try_%[__LINE__]:
    %pop
%endmacro

%macro THROW 0
    jmp %$catch_label
%endmacro

; Usage
TRY
    ; Some code that might fail
    cmp eax, 0
    je THROW               ; Throw exception if zero
    
CATCH
    ; Exception handling code
    mov eax, -1            ; Error code
    
ENDTRY
```

## 9. INTERFACING WITH C

### 9.1 Calling C Functions from Assembly
```assembly
; Linking with C library
; Compile: nasm -f elf32 program.asm -o program.o
; Link: gcc -m32 program.o -o program

section .data
    format_str db "Number: %d, String: %s", 10, 0
    test_string db "Hello from ASM!", 0
    scanf_format db "%d", 0

section .bss
    user_input resd 1

section .text
    extern printf
    extern scanf
    extern malloc
    extern free
    extern exit
    global main

main:
    push ebp
    mov ebp, esp
    
    ; Call printf
    push test_string        ; Push arguments in reverse order
    push 42
    push format_str
    call printf             ; Call C function
    add esp, 12             ; Clean up stack (3 args * 4 bytes)
    
    ; Call scanf
    push user_input         ; Address to store input
    push scanf_format
    call scanf
    add esp, 8              ; Clean up stack
    
    ; Allocate memory with malloc
    push 100                ; Size to allocate
    call malloc
    add esp, 4              ; Clean up stack
    
    test eax, eax           ; Check if allocation succeeded
    jz .malloc_failed
    
    mov ebx, eax            ; Save pointer
    
    ; Use allocated memory
    mov dword [ebx], 12345  ; Store value in allocated memory
    
    ; Free memory
    push ebx                ; Pointer to free
    call free
    add esp, 4              ; Clean up stack
    
.malloc_failed:
    ; Exit program
    push 0                  ; Exit status
    call exit
    add esp, 4              ; Clean up (though we never return)
    
    ; Alternative exit method
    mov ebp, esp
    pop ebp
    ret                     ; Return to C runtime

; Calling convention examples
; cdecl calling convention (default for C)
call_cdecl_function:
    push 30                 ; Third argument
    push 20                 ; Second argument
    push 10                 ; First argument
    call c_function         ; Call C function
    add esp, 12             ; Caller cleans up stack
    ; Return value in EAX
    ret

; stdcall calling convention (Windows API)
call_stdcall_function:
    push 30                 ; Third argument
    push 20                 ; Second argument
    push 10                 ; First argument
    call stdcall_function   ; Function cleans up its own stack
    ; No stack cleanup needed
    ; Return value in EAX
    ret

; fastcall calling convention
call_fastcall_function:
    mov ecx, 10             ; First argument in ECX
    mov edx, 20             ; Second argument in EDX
    push 30                 ; Additional arguments on stack
    call fastcall_function  ; Call function
    add esp, 4              ; Clean up stack arguments only
    ; Return value in EAX
    ret
```

### 9.2 Assembly Functions Called from C
```c
// C header file (asm_functions.h)
#ifndef ASM_FUNCTIONS_H
#define ASM_FUNCTIONS_H

extern int asm_add(int a, int b);
extern int asm_factorial(int n);
extern void asm_string_copy(char* dest, const char* src);
extern int asm_array_sum(int* array, int count);
extern void asm_matrix_multiply(int* a, int* b, int* result, int size);

#endif
```

```assembly
; Assembly implementation (asm_functions.asm)
section .text
    global asm_add
    global asm_factorial
    global asm_string_copy
    global asm_array_sum
    global asm_matrix_multiply

; int asm_add(int a, int b);
asm_add:
    push ebp
    mov ebp, esp
    
    mov eax, [ebp+8]        ; First parameter (a)
    add eax, [ebp+12]       ; Add second parameter (b)
    
    pop ebp
    ret                     ; Return value in EAX

; int asm_factorial(int n);
asm_factorial:
    push ebp
    mov ebp, esp
    push ebx
    
    mov ebx, [ebp+8]        ; Get parameter n
    mov eax, 1              ; Initialize result
    
    test ebx, ebx           ; Check if n <= 0
    jle .done
    
.factorial_loop:
    imul eax, ebx           ; result *= n
    dec ebx                 ; n--
    jnz .factorial_loop     ; Continue if n != 0
    
.done:
    pop ebx
    pop ebp
    ret

; void asm_string_copy(char* dest, const char* src);
asm_string_copy:
    push ebp
    mov ebp, esp
    push esi
    push edi
    
    mov edi, [ebp+8]        ; Destination
    mov esi, [ebp+12]       ; Source
    
.copy_loop:
    lodsb                   ; Load byte from [ESI] to AL
    stosb                   ; Store AL to [EDI]
    test al, al             ; Check for null terminator
    jnz .copy_loop          ; Continue if not null
    
    pop edi
    pop esi
    pop ebp
    ret

; int asm_array_sum(int* array, int count);
asm_array_sum:
    push ebp
    mov ebp, esp
    push esi
    push ecx
    
    mov esi, [ebp+8]        ; Array pointer
    mov ecx, [ebp+12]       ; Count
    xor eax, eax            ; Initialize sum to 0
    
    test ecx, ecx           ; Check if count is 0
    jz .done
    
.sum_loop:
    add eax, [esi]          ; Add current element to sum
    add esi, 4              ; Move to next element (4 bytes per int)
    dec ecx                 ; Decrement counter
    jnz .sum_loop           ; Continue if not zero
    
.done:
    pop ecx
    pop esi
    pop ebp
    ret

; void asm_matrix_multiply(int* a, int* b, int* result, int size);
asm_matrix_multiply:
    push ebp
    mov ebp, esp
    push esi
    push edi
    push ebx
    push ecx
    push edx
    
    mov esi, [ebp+8]        ; Matrix A
    mov edi, [ebp+12]       ; Matrix B
    mov ebx, [ebp+16]       ; Result matrix
    mov ecx, [ebp+20]       ; Size
    
    ; Initialize loop counters
    mov dword [.row], 0     ; i = 0
    
.row_loop:
    mov eax, [.row]         ; Get current row
    cmp eax, ecx            ; Compare with size
    jge .done               ; Exit if i >= size
    
    mov dword [.col], 0     ; j = 0
    
.col_loop:
    mov eax, [.col]         ; Get current column
    cmp eax, ecx            ; Compare with size
    jge .next_row           ; Exit inner loop if j >= size
    
    ; Calculate result[i][j] = sum of A[i][k] * B[k][j]
    mov dword [.sum], 0     ; Initialize sum
    mov dword [.k], 0       ; k = 0
    
.k_loop:
    mov eax, [.k]           ; Get k
    cmp eax, ecx            ; Compare with size
    jge .store_result       ; Exit if k >= size
    
    ; Calculate A[i][k]
    mov eax, [.row]         ; i
    imul eax, ecx           ; i * size
    add eax, [.k]           ; i * size + k
    mov edx, [esi + eax*4]  ; A[i][k]
    
    ; Calculate B[k][j]
    mov eax, [.k]           ; k
    imul eax, ecx           ; k * size
    add eax, [.col]         ; k * size + j
    imul edx, [edi + eax*4] ; A[i][k] * B[k][j]
    
    ; Add to sum
    add [.sum], edx
    
    inc dword [.k]          ; k++
    jmp .k_loop
    
.store_result:
    ; Store result[i][j]
    mov eax, [.row]         ; i
    imul eax, ecx           ; i * size
    add eax, [.col]         ; i * size + j
    mov edx, [.sum]
    mov [ebx + eax*4], edx  ; result[i][j] = sum
    
    inc dword [.col]        ; j++
    jmp .col_loop
    
.next_row:
    inc dword [.row]        ; i++
    jmp .row_loop
    
.done:
    pop edx
    pop ecx
    pop ebx
    pop edi
    pop esi
    pop ebp
    ret

section .bss
    .row resd 1             ; Local variables
    .col resd 1
    .k resd 1
    .sum resd 1
```

```c
// C program using assembly functions (main.c)
#include <stdio.h>
#include <stdlib.h>
#include "asm_functions.h"

int main() {
    // Test asm_add
    int result = asm_add(15, 25);
    printf("15 + 25 = %d\n", result);
    
    // Test asm_factorial
    int fact = asm_factorial(5);
    printf("5! = %d\n", fact);
    
    // Test asm_string_copy
    char source[] = "Hello, Assembly!";
    char dest[50];
    asm_string_copy(dest, source);
    printf("Copied string: %s\n", dest);
    
    // Test asm_array_sum
    int array[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int sum = asm_array_sum(array, 10);
    printf("Sum of array: %d\n", sum);
    
    // Test matrix multiplication
    int size = 3;
    int a[9] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int b[9] = {9, 8, 7, 6, 5, 4, 3, 2, 1};
    int result_matrix[9];
    
    asm_matrix_multiply(a, b, result_matrix, size);
    
    printf("Matrix multiplication result:\n");
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            printf("%d ", result_matrix[i * size + j]);
        }
        printf("\n");
    }
    
    return 0;
}
```

### 9.3 Inline Assembly in C (GCC)
```c
// Basic inline assembly
#include <stdio.h>

int main() {
    int a = 10, b = 20, result;
    
    // Extended inline assembly
    asm volatile (
        "movl %1, %%eax\n\t"        // Move a to EAX
        "addl %2, %%eax\n\t"        // Add b to EAX
        "movl %%eax, %0"            // Move result to output
        : "=m" (result)             // Output operands
        : "m" (a), "m" (b)          // Input operands
        : "eax"                     // Clobbered registers
    );
    
    printf("Result: %d\n", result);
    
    // Using register constraints
    int x = 5, y = 3, multiply_result;
    asm volatile (
        "imull %2, %0"              // Multiply
        : "=r" (multiply_result)    // Output in any register
        : "0" (x), "r" (y)          // Input: %0 = x (same as output), %2 = y
    );
    
    printf("5 * 3 = %d\n", multiply_result);
    
    // Inline assembly with memory operands
    int array[5] = {1, 2, 3, 4, 5};
    int array_sum = 0;
    
    asm volatile (
        "movl $0, %%eax\n\t"        // Clear EAX (sum)
        "movl $0, %%ecx\n\t"        // Clear ECX (index)
        "1:\n\t"                    // Loop label
        "addl (%1,%%ecx,4), %%eax\n\t" // Add array[index] to sum
        "incl %%ecx\n\t"            // Increment index
        "cmpl $5, %%ecx\n\t"        // Compare with array length
        "jl 1b\n\t"                 // Jump back if less
        "movl %%eax, %0"            // Store result
        : "=m" (array_sum)          // Output
        : "r" (array)               // Input: array base address
        : "eax", "ecx"              // Clobbered registers
    );
    
    printf("Array sum: %d\n", array_sum);
    
    // Reading CPU information with CPUID
    unsigned int eax, ebx, ecx, edx;
    asm volatile (
        "cpuid"
        : "=a" (eax), "=b" (ebx), "=c" (ecx), "=d" (edx)
        : "a" (0)                   // Input: function 0
    );
    
    printf("CPUID: EAX=%08X EBX=%08X ECX=%08X EDX=%08X\n", 
           eax, ebx, ecx, edx);
    
    // Reading timestamp counter
    unsigned long long timestamp;
    asm volatile (
        "rdtsc\n\t"                 // Read timestamp counter
        "movl %%eax, %0\n\t"        // Store low part
        "movl %%edx, %1"            // Store high part
        : "=m" (((unsigned int*)&timestamp)[0]),
          "=m" (((unsigned int*)&timestamp)[1])
        :
        : "eax", "edx"
    );
    
    printf("Timestamp: %llu\n", timestamp);
    
    return 0;
}
```

## 10. PRACTICAL EXAMPLES

### 10.1 Complete Program Examples
```assembly
; Example 1: Simple Calculator
section .data
    menu_msg db "Calculator Menu:", 10
             db "1. Add", 10
             db "2. Subtract", 10  
             db "3. Multiply", 10
             db "4. Divide", 10
             db "5. Exit", 10
             db "Choice: ", 0
    menu_len equ $ - menu_msg
    
    num1_msg db "Enter first number: ", 0
    num1_len equ $ - num1_msg
    
    num2_msg db "Enter second number: ", 0
    num2_len equ $ - num2_msg
    
    result_msg db "Result: ", 0
    result_len equ $ - result_msg
    
    error_msg db "Error: Division by zero!", 10, 0
    error_len equ $ - error_msg
    
    newline db 10, 0

section .bss
    choice resb 2
    num1 resb 10
    num2 resb 10
    result resb 15

section .text
    global _start

_start:
    call main_loop
    
    ; Exit program
    mov eax, 1
    mov ebx, 0
    int 0x80

main_loop:
    ; Display menu
    mov eax, 4
    mov ebx, 1
    mov ecx, menu_msg
    mov edx, menu_len
    int 0x80
    
    ; Read choice
    mov eax, 3
    mov ebx, 0
    mov ecx, choice
    mov edx, 2
    int 0x80
    
    ; Check choice
    mov al, [choice]
    cmp al, '5'
    je .exit
    cmp al, '1'
    je .addition
    cmp al, '2'
    je .subtraction
    cmp al, '3'
    je .multiplication
    cmp al, '4'
    je .division
    jmp main_loop          ; Invalid choice, show menu again
    
.addition:
    call get_numbers
    call add_numbers
    call display_result
    jmp main_loop
    
.subtraction:
    call get_numbers
    call subtract_numbers
    call display_result
    jmp main_loop
    
.multiplication:
    call get_numbers
    call multiply_numbers
    call display_result
    jmp main_loop
    
.division:
    call get_numbers
    call divide_numbers
    call display_result
    jmp main_loop
    
.exit:
    ret

get_numbers:
    ; Get first number
    mov eax, 4
    mov ebx, 1
    mov ecx, num1_msg
    mov edx, num1_len
    int 0x80
    
    mov eax, 3
    mov ebx, 0
    mov ecx, num1
    mov edx, 10
    int 0x80
    
    ; Get second number
    mov eax, 4
    mov ebx, 1
    mov ecx, num2_msg
    mov edx, num2_len
    int 0x80
    
    mov eax, 3
    mov ebx, 0
    mov ecx, num2
    mov edx, 10
    int 0x80
    
    ret

add_numbers:
    call string_to_int_num1
    mov ebx, eax
    call string_to_int_num2
    add eax, ebx
    call int_to_string
    ret

subtract_numbers:
    call string_to_int_num1
    mov ebx, eax
    call string_to_int_num2
    sub ebx, eax
    mov eax, ebx
    call int_to_string
    ret

multiply_numbers:
    call string_to_int_num1
    mov ebx, eax
    call string_to_int_num2
    imul eax, ebx
    call int_to_string
    ret

divide_numbers:
    call string_to_int_num2
    test eax, eax
    jz .division_by_zero
    
    mov ebx, eax
    call string_to_int_num1
    cdq                     ; Sign extend EAX to EDX:EAX
    idiv ebx
    call int_to_string
    ret
    
.division_by_zero:
    mov eax, 4
    mov ebx, 1
    mov ecx, error_msg
    mov edx, error_len
    int 0x80
    ret

string_to_int_num1:
    mov esi, num1
    call string_to_int
    ret

string_to_int_num2:
    mov esi, num2
    call string_to_int
    ret

string_to_int:
    ; Input: ESI = string pointer
    ; Output: EAX = integer value
    push ebx
    push ecx
    push edx
    
    xor eax, eax            ; Result
    xor ebx, ebx            ; Sign (0 = positive, 1 = negative)
    mov ecx, 10             ; Base
    
    ; Check for negative sign
    cmp byte [esi], '-'
    jne .convert_loop
    mov ebx, 1              ; Set negative flag
    inc esi                 ; Skip minus sign
    
.convert_loop:
    mov dl, [esi]           ; Get character
    cmp dl, 10              ; Check for newline
    je .done
    cmp dl, 0               ; Check for null
    je .done
    cmp dl, '0'             ; Check if digit
    jb .done
    cmp dl, '9'
    ja .done
    
    sub dl, '0'             ; Convert to digit
    imul eax, ecx           ; Multiply result by 10
    add eax, edx            ; Add digit
    inc esi                 ; Next character
    jmp .convert_loop
    
.done:
    test ebx, ebx           ; Check sign flag
    jz .positive
    neg eax                 ; Make negative
    
.positive:
    pop edx
    pop ecx
    pop ebx
    ret

int_to_string:
    ; Input: EAX = integer
    ; Output: result buffer contains string
    push ebx
    push ecx
    push edx
    push edi
    
    mov edi, result         ; Destination buffer
    mov ebx, 10             ; Divisor
    mov ecx, 0              ; Digit counter
    
    ; Handle negative numbers
    test eax, eax
    jns .positive_number
    neg eax                 ; Make positive
    mov byte [edi], '-'     ; Store minus sign
    inc edi
    
.positive_number:
    ; Convert digits (in reverse order)
    push edi                ; Save buffer start
    
.convert_digits:
    xor edx, edx            ; Clear remainder
    div ebx                 ; Divide by 10
    add dl, '0'             ; Convert remainder to ASCII
    push edx                ; Push digit onto stack
    inc ecx                 ; Increment digit count
    test eax, eax           ; Check if quotient is zero
    jnz .convert_digits
    
    ; Pop digits in correct order
    pop edi                 ; Restore buffer position
.store_digits:
    pop edx                 ; Get digit
    mov [edi], dl           ; Store digit
    inc edi                 ; Next position
    dec ecx                 ; Decrement counter
    jnz .store_digits
    
    mov byte [edi], 0       ; Null terminate
    
    pop edi
    pop edx
    pop ecx
    pop ebx
    ret

display_result:
    ; Display result message
    mov eax, 4
    mov ebx, 1
    mov ecx, result_msg
    mov edx, result_len
    int 0x80
    
    ; Display result number
    mov edi, result
    call string_length
    mov edx, eax
    mov eax, 4
    mov ebx, 1
    mov ecx, result
    int 0x80
    
    ; Display newline
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80
    
    ret

string_length:
    ; Input: EDI = string pointer
    ; Output: EAX = string length
    push edi
    push ecx
    
    mov eax, 0              ; Search for null terminator
    mov ecx, -1             ; Maximum length
    repne scasb             ; Scan for null
    not ecx                 ; Convert to positive
    dec ecx                 ; Subtract 1 for null terminator
    mov eax, ecx            ; Return length
    
    pop ecx
    pop edi
    ret
```

### 10.2 Data Structures Implementation
```assembly
; Example 2: Dynamic Array (Vector) Implementation
section .data
    malloc_error db "Memory allocation failed!", 10, 0
    index_error db "Index out of bounds!", 10, 0

section .bss
    ; Vector structure
    struc Vector
        .data      resd 1    ; Pointer to data
        .size      resd 1    ; Current number of elements
        .capacity  resd 1    ; Maximum capacity
    endstruc

section .text
    extern malloc
    extern realloc
    extern free
    extern printf
    global vector_create
    global vector_destroy
    global vector_push_back
    global vector_pop_back
    global vector_get
    global vector_set
    global vector_size
    global vector_capacity

; Vector* vector_create(int initial_capacity)
vector_create:
    push ebp
    mov ebp, esp
    push ebx
    
    ; Allocate vector structure
    push Vector_size
    call malloc
    add esp, 4
    
    test eax, eax
    jz .allocation_failed
    
    mov ebx, eax            ; Save vector pointer
    
    ; Initialize vector fields
    mov dword [ebx + Vector.size], 0
    mov eax, [ebp+8]        ; Get initial capacity
    mov [ebx + Vector.capacity], eax
    
    ; Allocate data array
    shl eax, 2              ; capacity * sizeof(int)
    push eax
    call malloc
    add esp, 4
    
    test eax, eax
    jz .data_allocation_failed
    
    mov [ebx + Vector.data], eax
    mov eax, ebx            ; Return vector pointer
    jmp .done
    
.data_allocation_failed:
    push ebx
    call free
    add esp, 4
    
.allocation_failed:
    xor eax, eax            ; Return NULL
    
.done:
    pop ebx
    pop ebp
    ret

; void vector_destroy(Vector* vec)
vector_destroy:
    push ebp
    mov ebp, esp
    
    mov eax, [ebp+8]        ; Get vector pointer
    test eax, eax
    jz .done
    
    ; Free data array
    push dword [eax + Vector.data]
    call free
    add esp, 4
    
    ; Free vector structure
    push dword [ebp+8]
    call free
    add esp, 4
    
.done:
    pop ebp
    ret

; int vector_push_back(Vector* vec, int value)
vector_push_back:
    push ebp
    mov ebp, esp
    push ebx
    push esi
    
    mov ebx, [ebp+8]        ; Vector pointer
    mov esi, [ebp+12]       ; Value to add
    
    ; Check if resize is needed
    mov eax, [ebx + Vector.size]
    mov ecx, [ebx + Vector.capacity]
    cmp eax, ecx
    jl .no_resize
    
    ; Resize array (double capacity)
    shl ecx, 1              ; New capacity = old capacity * 2
    mov [ebx + Vector.capacity], ecx
    shl ecx, 2              ; New size in bytes
    
    push ecx                ; New size
    push dword [ebx + Vector.data]  ; Old data
    call realloc
    add esp, 8
    
    test eax, eax
    jz .realloc_failed
    
    mov [ebx + Vector.data], eax
    
.no_resize:
    ; Add element
    mov eax, [ebx + Vector.size]
    mov ecx, [ebx + Vector.data]
    mov [ecx + eax*4], esi  ; data[size] = value
    
    inc dword [ebx + Vector.size]   ; Increment size
    mov eax, 1              ; Return success
    jmp .done
    
.realloc_failed:
    xor eax, eax            ; Return failure
    
.done:
    pop esi
    pop ebx
    pop ebp
    ret

; int vector_pop_back(Vector* vec)
vector_pop_back:
    push ebp
    mov ebp, esp
    
    mov eax, [ebp+8]        ; Vector pointer
    mov ecx, [eax + Vector.size]
    test ecx, ecx
    jz .empty_vector
    
    dec ecx                 ; size--
    mov [eax + Vector.size], ecx
    
    ; Return the popped element
    mov edx, [eax + Vector.data]
    mov eax, [edx + ecx*4]  ; Return data[size-1]
    jmp .done
    
.empty_vector:
    mov eax, -1             ; Return error value
    
.done:
    pop ebp
    ret

; int vector_get(Vector* vec, int index)
vector_get:
    push ebp
    mov ebp, esp
    
    mov eax, [ebp+8]        ; Vector pointer
    mov ecx, [ebp+12]       ; Index
    
    ; Bounds check
    cmp ecx, [eax + Vector.size]
    jae .out_of_bounds
    
    mov edx, [eax + Vector.data]
    mov eax, [edx + ecx*4]  ; Return data[index]
    jmp .done
    
.out_of_bounds:
    mov eax, -1             ; Return error value
    
.done:
    pop ebp
    ret

; int vector_set(Vector* vec, int index, int value)
vector_set:
    push ebp
    mov ebp, esp
    
    mov eax, [ebp+8]        ; Vector pointer
    mov ecx, [ebp+12]       ; Index
    mov edx, [ebp+16]       ; Value
    
    ; Bounds check
    cmp ecx, [eax + Vector.size]
    jae .out_of_bounds
    
    mov eax, [eax + Vector.data]
    mov [eax + ecx*4], edx  ; data[index] = value
    mov eax, 1              ; Return success
    jmp .done
    
.out_of_bounds:
    xor eax, eax            ; Return failure
    
.done:
    pop ebp
    ret

; int vector_size(Vector* vec)
vector_size:
    push ebp
    mov ebp, esp
    
    mov eax, [ebp+8]        ; Vector pointer
    mov eax, [eax + Vector.size]
    
    pop ebp
    ret

; int vector_capacity(Vector* vec)
vector_capacity:
    push ebp
    mov ebp, esp
    
    mov eax, [ebp+8]        ; Vector pointer
    mov eax, [eax + Vector.capacity]
    
    pop ebp
    ret
```

### 10.3 Algorithm Implementation
```assembly
; Example 3: Quick Sort Implementation
section .text
    global quicksort
    global partition

; void quicksort(int* array, int low, int high)
quicksort:
    push ebp
    mov ebp, esp
    push ebx
    push esi
    push edi
    
    mov esi, [ebp+8]        ; Array pointer
    mov ebx, [ebp+12]       ; Low index
    mov edi, [ebp+16]       ; High index
    
    ; Check if low < high
    cmp ebx, edi
    jge .done
    
    ; Partition the array
    push edi                ; High
    push ebx                ; Low
    push esi                ; Array
    call partition
    add esp, 12
    
    mov ecx, eax            ; Save pivot index
    
    ; Recursively sort left partition
    dec eax                 ; pivot - 1
    push eax                ; High for left partition
    push ebx                ; Low (unchanged)
    push esi                ; Array
    call quicksort
    add esp, 12
    
    ; Recursively sort right partition
    inc ecx                 ; pivot + 1
    push edi                ; High (unchanged)
    push ecx                ; Low for right partition
    push esi                ; Array
    call quicksort
    add esp, 12
    
.done:
    pop edi
    pop esi
    pop ebx
    pop ebp
    ret

; int partition(int* array, int low, int high)
partition:
    push ebp
    mov ebp, esp
    push ebx
    push esi
    push edi
    
    mov esi, [ebp+8]        ; Array pointer
    mov ebx, [ebp+12]       ; Low index
    mov edi, [ebp+16]       ; High index
    
    ; Choose pivot (last element)
    mov eax, [esi + edi*4]  ; pivot = array[high]
    mov ecx, ebx            ; i = low
    dec ecx                 ; i = low - 1
    
    mov edx, ebx            ; j = low
    
.partition_loop:
    cmp edx, edi            ; if j >= high
    jge .final_swap
    
    ; Compare array[j] with pivot
    cmp dword [esi + edx*4], eax
    jg .next_iteration
    
    ; array[j] <= pivot, so swap
    inc ecx                 ; i++
    
    ; Swap array[i] and array[]
    
  
- [Learn x86-64 assembly by writing a GUI from scratch](https://gaultier.github.io/blog/x11_x64.html)
- [Assembly language tutorial](https://github.com/mschwartz/assembly-tutorial)
- [Roadmap](https://gist.github.com/bryanbellato/338ac84055ca5c402f5a5b3f0609d094)
- [Assembly docs](https://yassinebridi.github.io/asm-docs/asm_tutorial_01.html)
- [Assembly practice](https://github.com/huyinit/Assembly-va-KTMT-KTVXL)
- [NASM](https://github.com/netwide-assembler/nasm)
- [Lesson](https://github.com/FFmpeg/asm-lessons)
- [Project collection](https://github.com/Jevxtn/Assembly-Language-Projects)
- [Assembly x86 16 bit](https://github.com/normalgamer/Assembly-OS)
- [Assembly tutorial](https://github.com/leo-aa88/assembly-x86-tutorials)
- [Assembly form Scratch](https://github.com/aaditya29/Assembly-From-Scratch)
- [Inline Assembly](https://github.com/ANSANJAY/InlineAssembly)
- [Topic](https://github.com/topics/assembly-tutorials)
- [text](https://gist.github.com/aagontuk/9e3faee58f4d100a16278a9076a5abbe)
- [text](https://github.com/0xAX/asm)
- [text](https://github.com/Mark-Akaza/assembly-language-tutorials)
