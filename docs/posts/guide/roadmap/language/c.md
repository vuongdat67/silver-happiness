# ROADMAP C 

## 1. FOUNDATIONS - CƠ BẢN

### 1.1 Cài đặt và Setup
- Cài đặt compiler (GCC, Clang, MSVC)
- IDE/Editor (VS Code, CLion, Vim, Code::Blocks)
- Hiểu compilation process (preprocessor, compiler, assembler, linker)
- Cấu trúc chương trình C cơ bản
- Hello World

### 1.2 Syntax cơ bản
- Variables và constants
- Data types (int, float, double, char)
- Operators (arithmetic, logical, bitwise, relational)
- Type casting và conversion
- printf và scanf
- Comments

### 1.3 Control Flow
- if, else, else if
- switch-case
- Ternary operator
- while loop
- do-while loop
- for loop
- break và continue
- goto (và tại sao nên tránh)

## 2. FUNCTIONS & SCOPE

### 2.1 Functions
- Function declaration và definition
- Function prototypes
- Parameters và arguments
- Return values
- Recursion
- Function pointers
- Variadic functions (va_list, va_start, va_end)
- Inline functions

### 2.2 Scope và Storage Classes
- Local variables
- Global variables
- Static variables
- External variables
- auto, register, static, extern keywords
- Variable lifetime
- Scope rules

## 3. POINTERS - QUAN TRỌNG NHẤT

### 3.1 Pointer Basics
- Khái niệm pointer
- Address operator (&)
- Dereference operator (*)
- NULL pointer
- void pointer
- Pointer arithmetic
- Pointer comparison

### 3.2 Pointers và Arrays
- Array decay to pointer
- Pointer to array
- Array of pointers
- Multidimensional arrays
- Passing arrays to functions
- Dynamic arrays

### 3.3 Pointers nâng cao
- Pointer to pointer (double pointer)
- Pointer to function
- Function returning pointer
- const pointers
- Pointer to const
- Const pointer to const
- Dangling pointers
- Wild pointers
- Memory leaks

## 4. ARRAYS & STRINGS

### 4.1 Arrays
- Array declaration và initialization
- Single-dimensional arrays
- Multi-dimensional arrays
- Array bounds
- Passing arrays to functions
- Array of structures
- Variable length arrays (VLA)

### 4.2 Strings
- Character arrays
- String literals
- String initialization
- String library functions (strlen, strcpy, strcat, strcmp, etc.)
- String manipulation
- String tokenization (strtok)
- String to number conversion (atoi, atof, strtol)
- Character classification (isalpha, isdigit, etc.)

## 5. STRUCTURES & UNIONS

### 5.1 Structures
- Structure definition
- Structure declaration
- Accessing members
- Nested structures
- Structure assignment
- Structure pointers
- Arrow operator (->)
- Self-referential structures
- typedef với structures
- Bit fields
- Flexible array members

### 5.2 Unions
- Union definition
- Union vs Structure
- Memory sharing trong union
- Use cases cho unions
- Anonymous unions

### 5.3 Enums
- Enumeration definition
- Enum values
- typedef với enums
- Enum best practices

## 6. DYNAMIC MEMORY ALLOCATION

### 6.1 Memory Management
- Stack vs Heap
- malloc()
- calloc()
- realloc()
- free()
- Memory leaks
- Dangling pointers
- Double free errors
- Memory allocation strategies

### 6.2 Advanced Memory
- Memory alignment
- Memory pools
- Custom allocators
- Memory debugging tools (Valgrind, AddressSanitizer)

## 7. FILE I/O

### 7.1 File Operations
- fopen, fclose
- fread, fwrite
- fgets, fputs
- fscanf, fprintf
- fgetc, fputc
- fseek, ftell, rewind
- Binary vs text mode
- Error handling với ferror, feof

### 7.2 Advanced File I/O
- File positioning
- Buffering (setvbuf)
- Temporary files (tmpfile, tmpnam)
- File locking
- Memory-mapped files

## 8. PREPROCESSOR

### 8.1 Preprocessor Directives
- #include
- #define (macros)
- #undef
- Macro functions
- Conditional compilation (#if, #ifdef, #ifndef, #else, #elif, #endif)
- #pragma
- Predefined macros (__FILE__, __LINE__, __DATE__, __TIME__)
- Stringification (#)
- Token pasting (##)

### 8.2 Header Files
- Header guards
- Include paths
- System headers vs user headers
- Forward declarations
- Organizing code với headers

## 9. ADVANCED TOPICS

### 9.1 Data Structures Implementation
- Linked lists (single, double, circular)
- Stacks
- Queues
- Trees (binary, BST, AVL)
- Hash tables
- Graphs
- Heaps

### 9.2 Algorithms
- Sorting (bubble, selection, insertion, quick, merge, heap)
- Searching (linear, binary)
- Recursion patterns
- Dynamic programming
- Graph algorithms
- String algorithms

### 9.3 Bitwise Operations
- Bit manipulation
- Bit masks
- Bit flags
- Packing data
- Endianness
- Common bit tricks

### 9.4 Advanced Pointers
- Complex pointer declarations
- Function pointers arrays
- Callbacks
- State machines với function pointers
- vtables simulation

## 10. MULTI-FILE PROJECTS

### 10.1 Project Organization
- Separating declarations và definitions
- Header files best practices
- Source file organization
- Compilation units
- Linking multiple files

### 10.2 Build Systems
- Makefiles basics
- Make rules và dependencies
- Variables trong Make
- Phony targets
- Pattern rules
- CMake basics
- Autotools overview

## 11. DEBUGGING & TESTING

### 11.1 Debugging
- printf debugging
- GDB basics
- Breakpoints
- Watchpoints
- Stack traces
- Core dumps
- LLDB
- Debugging techniques

### 11.2 Testing
- Unit testing frameworks (Check, CUnit)
- Test-driven development
- Assertions
- Code coverage
- Integration testing
- Memory testing (Valgrind)

### 11.3 Error Handling
- Return codes
- errno
- perror và strerror
- Error handling patterns
- Defensive programming

## 12. STANDARD LIBRARY

### 12.1 stdio.h
- Input/output functions
- File operations
- Formatted I/O

### 12.2 stdlib.h
- Memory allocation
- Random numbers
- String conversion
- Process control (exit, abort, system)
- Environment (getenv, setenv)
- Sorting và searching (qsort, bsearch)

### 12.3 string.h
- String manipulation
- Memory operations (memcpy, memmove, memset, memcmp)

### 12.4 math.h
- Mathematical functions
- Trigonometry
- Power và logarithm
- Rounding functions

### 12.5 time.h
- Time functions
- Date formatting
- Time calculation
- sleep functions

### 12.6 Other Important Headers
- ctype.h (character handling)
- assert.h (assertions)
- limits.h (implementation limits)
- stdint.h (fixed-width integers)
- stdbool.h (boolean type)
- stdarg.h (variadic functions)
- signal.h (signal handling)
- setjmp.h (non-local jumps)

## 13. SYSTEMS PROGRAMMING

### 13.1 POSIX/Unix Programming
- Process management (fork, exec, wait)
- Signals
- Pipes
- File descriptors
- Unix system calls
- File permissions
- Directory operations

### 13.2 Inter-Process Communication
- Pipes và FIFOs
- Message queues
- Shared memory
- Semaphores
- Sockets basics

### 13.3 Multithreading
- pthreads
- Thread creation và joining
- Mutexes
- Condition variables
- Thread synchronization
- Race conditions
- Deadlocks
- Thread-safe programming

### 13.4 Network Programming
- Sockets (TCP/UDP)
- Client-server architecture
- Socket programming basics
- select/poll/epoll
- Byte ordering (htons, ntohs)

## 14. EMBEDDED SYSTEMS C

### 14.1 Embedded Basics
- Bare metal programming
- Register manipulation
- Volatile keyword
- Bit-banding
- Memory-mapped I/O
- Interrupt handling
- Startup code

### 14.2 Hardware Interface
- GPIO programming
- UART/SPI/I2C
- Timers
- ADC/DAC
- DMA
- Watchdog timers

### 14.3 Real-Time Considerations
- RTOS basics
- Timing constraints
- Interrupt latency
- Task scheduling
- Memory constraints

## 15. PERFORMANCE & OPTIMIZATION

### 15.1 Code Optimization
- Algorithm optimization
- Loop optimization
- Function inlining
- Register usage
- Cache optimization
- Branch prediction
- Compiler optimization flags (-O1, -O2, -O3)

### 15.2 Profiling
- gprof
- perf
- Callgrind
- Cachegrind
- Performance analysis
- Bottleneck identification

### 15.3 Memory Optimization
- Memory alignment
- Struct packing
- Cache-friendly data structures
- Memory pooling
- Object pooling

## 16. SECURITY & BEST PRACTICES

### 16.1 Common Vulnerabilities
- Buffer overflows
- Format string vulnerabilities
- Integer overflows
- Use after free
- Double free
- NULL pointer dereference
- Race conditions

### 16.2 Secure Coding
- Input validation
- Bounds checking
- Safe string functions (strncpy, snprintf)
- CERT C coding standard
- MISRA C guidelines
- Static analysis tools (Cppcheck, Clang Static Analyzer)

### 16.3 Code Quality
- Coding standards
- Naming conventions
- Code formatting
- Documentation
- Code reviews
- Refactoring techniques

## 17. ADVANCED C FEATURES

### 17.1 C Standards
- C89/C90 (ANSI C)
- C99 features
- C11 features
- C17/C18 features
- C23 upcoming features
- Compiler extensions

### 17.2 Advanced Language Features
- Restrict keyword
- Complex numbers
- Variable length arrays
- Compound literals
- Designated initializers
- Static assertions
- Generic selections (_Generic)
- Atomic operations (C11)
- Thread local storage

### 17.3 Object-Oriented Programming in C
- Encapsulation với structs
- Polymorphism với function pointers
- Inheritance simulation
- vtable implementation
- Design patterns trong C

## 18. TOOLS & ECOSYSTEM

### 18.1 Compilation Tools
- GCC compiler options
- Clang features
- Cross-compilation
- Static vs dynamic linking
- Shared libraries (.so, .dll)
- Position independent code (PIC)

### 18.2 Development Tools
- Version control (Git)
- Code editors và IDEs
- Linters
- Code formatters (clang-format)
- Documentation generators (Doxygen)

### 18.3 Analysis Tools
- Valgrind (memcheck, callgrind, cachegrind)
- AddressSanitizer
- UndefinedBehaviorSanitizer
- ThreadSanitizer
- Static analyzers
- Code coverage tools (gcov, lcov)

## 19. DESIGN PATTERNS

### 19.1 Creational Patterns
- Factory pattern
- Singleton pattern
- Object pool
- Builder pattern (simplified)

### 19.2 Structural Patterns
- Adapter pattern
- Facade pattern
- Proxy pattern
- Decorator pattern (với function pointers)

### 19.3 Behavioral Patterns
- Observer pattern
- State machine
- Strategy pattern
- Command pattern
- Callback patterns

## 20. REAL-WORLD PROJECTS

### 20.1 Project Ideas
- Text editor
- Shell implementation
- Database engine (key-value store)
- Network server (HTTP, FTP)
- Compiler/Interpreter
- Operating system kernel basics
- Device drivers
- Embedded system projects
- Game engine basics
- Compression utility
- Encryption tool
- Memory allocator
- Garbage collector

### 20.2 Open Source Contribution
- Reading C codebases
- Linux kernel
- GNU utilities
- SQLite
- Redis
- Nginx
- Git source code

## 21. INTERFACING WITH OTHER LANGUAGES

### 21.1 C with C++
- extern "C"
- Mixing C và C++ code
- Name mangling

### 21.2 C with Python
- Python C API
- ctypes
- CFFI
- Creating Python extensions

### 21.3 C with Other Languages
- Java JNI
- Rust FFI
- Go cgo
- JavaScript (Node.js addons)

## 22. SPECIALIZED DOMAINS

### 22.1 Graphics Programming
- OpenGL với C
- SDL
- Graphics algorithms
- Image processing

### 22.2 Audio Programming
- Audio file formats
- Signal processing
- Real-time audio

### 22.3 Scientific Computing
- Numerical methods
- Linear algebra
- BLAS/LAPACK
- HPC considerations

---

## LỘ TRÌNH HỌC ĐỀ XUẤT

**Tháng 1-2:** Foundations, Functions, Basic Pointers
**Tháng 3:** Arrays, Strings, Structures
**Tháng 4:** Dynamic Memory, File I/O
**Tháng 5:** Preprocessor, Multi-file projects, Build systems
**Tháng 6-7:** Data structures implementation, Algorithms
**Tháng 8:** Debugging, Testing, Standard Library
**Tháng 9-10:** Systems Programming, Multithreading
**Tháng 11:** Performance, Security, Best Practices
**Tháng 12:** Advanced features, Real projects
**Ongoing:** Tools, Optimization, Domain-specific knowledge

## TÀI LIỆU HỌC

- The C Programming Language (K&R)
- C Programming: A Modern Approach
- Expert C Programming: Deep C Secrets
- 21st Century C
- CERT C Coding Standard
- Linux man pages
- GNU C Reference Manual
- cppreference.com (C section)