# ROADMAP C++ 

## GIAI ĐOẠN 1: NỀN TẢNG CƠ BẢN (2-3 tháng)

### Khởi đầu
- Cài đặt môi trường: IDE (Visual Studio, Code::Blocks, CLion), compiler (GCC, Clang, MSVC)
- Cấu trúc chương trình C++ đầu tiên
- Compile và run code
- Syntax cơ bản và quy tắc đặt tên

### Kiểu dữ liệu và biến
- Kiểu dữ liệu nguyên thủy: int, float, double, char, bool
- Khai báo và khởi tạo biến
- Const và constexpr
- Type casting và type conversion
- Auto keyword
- Sizeof operator

### Toán tử
- Toán tử số học, so sánh, logic
- Toán tử bitwise
- Toán tử gán và gán phức hợp
- Toán tử tăng/giảm
- Toán tử điều kiện (ternary)
- Độ ưu tiên toán tử

### Cấu trúc điều khiển
- If, else if, else
- Switch case
- Vòng lặp for, while, do-while
- Range-based for loop
- Break, continue, goto
- Nested loops

### Hàm (Functions)
- Khai báo và định nghĩa hàm
- Tham số và đối số
- Return values
- Function overloading
- Default parameters
- Inline functions
- Recursion
- Pass by value vs pass by reference

### Mảng và Strings
- Mảng 1 chiều và đa chiều
- C-style strings
- std::string class
- String manipulation methods
- Array decay to pointer

## GIAI ĐOẠN 2: TRUNG CẤP (3-4 tháng)

### Con trỏ (Pointers)
- Khái niệm địa chỉ và con trỏ
- Khai báo và khởi tạo con trỏ
- Dereference operator
- Pointer arithmetic
- Pointers và arrays
- Pointer to pointer
- Void pointers
- Function pointers
- Null pointers vs nullptr

### Tham chiếu (References)
- Lvalue references
- Rvalue references (C++11)
- Reference vs pointer
- Const references
- Reference collapsing

### Cấp phát bộ nhớ động
- Stack vs Heap memory
- New và delete operators
- Memory leaks
- Dynamic arrays
- New[] và delete[]

### Lập trình hướng đối tượng (OOP)

#### Classes và Objects
- Định nghĩa class
- Access specifiers: public, private, protected
- Member variables và member functions
- Constructors: default, parameterized, copy, move
- Destructor
- This pointer
- Static members
- Friend functions và friend classes
- Const member functions

#### Encapsulation
- Getters và setters
- Data hiding principles

#### Inheritance
- Single inheritance
- Multiple inheritance
- Multilevel inheritance
- Hierarchical inheritance
- Virtual base classes (diamond problem)
- Protected inheritance
- Constructor và destructor order

#### Polymorphism
- Compile-time polymorphism: function overloading, operator overloading
- Runtime polymorphism: virtual functions
- Pure virtual functions
- Abstract classes
- Virtual destructors
- Override và final keywords (C++11)
- Virtual function tables (vtable)

#### Abstraction
- Interface design
- Abstract base classes

### Operator Overloading
- Overloading arithmetic operators
- Overloading comparison operators
- Overloading stream operators (<<, >>)
- Overloading [] operator
- Overloading ++ và -- operators
- Conversion operators
- Restrictions on operator overloading

### Namespace
- Defining namespaces
- Using directive và using declaration
- Nested namespaces
- Anonymous namespaces
- Namespace aliases

## GIAI ĐOẠN 3: NÂNG CAO (4-5 tháng)

### Templates
- Function templates
- Class templates
- Template specialization: full và partial
- Variadic templates (C++11)
- Template template parameters
- SFINAE (Substitution Failure Is Not An Error)
- Type traits

### Standard Template Library (STL)

#### Containers
- Sequence containers: vector, deque, list, forward_list, array
- Associative containers: set, multiset, map, multimap
- Unordered containers (C++11): unordered_set, unordered_map, unordered_multiset, unordered_multimap
- Container adapters: stack, queue, priority_queue
- Container operations và complexity

#### Iterators
- Input, output, forward, bidirectional, random access iterators
- Iterator categories
- Const iterators
- Reverse iterators
- Iterator operations
- Iterator invalidation

#### Algorithms
- Non-modifying: find, count, search, equal
- Modifying: copy, move, fill, replace, remove
- Sorting: sort, stable_sort, partial_sort
- Binary search: lower_bound, upper_bound, binary_search
- Heap operations: make_heap, push_heap, pop_heap
- Min/max operations
- Numeric algorithms: accumulate, inner_product
- Custom comparators và predicates

#### Functors và Function Objects
- Function objects
- Lambda expressions (C++11)
- Lambda capture modes
- std::function (C++11)
- std::bind (C++11)

### Exception Handling
- Try, catch, throw
- Exception classes hierarchy
- Standard exceptions
- Custom exceptions
- Exception specifications (deprecated)
- Noexcept specifier (C++11)
- Stack unwinding
- RAII và exception safety

### File I/O
- File streams: ifstream, ofstream, fstream
- File modes
- Reading và writing text files
- Binary file operations
- File positioning: seekg, seekp, tellg, tellp
- Error handling in file I/O

### Preprocessor
- Preprocessor directives
- Macros và macro functions
- Conditional compilation: ifdef, ifndef, if, elif
- Include guards
- Pragma directives
- Predefined macros

### Type Casting
- Static_cast
- Dynamic_cast
- Const_cast
- Reinterpret_cast
- C-style cast vs C++ casts

## GIAI ĐOẠN 4: MODERN C++ (C++11/14/17/20) (3-4 tháng)

### Smart Pointers (C++11)
- unique_ptr
- shared_ptr
- weak_ptr
- Custom deleters
- make_unique và make_shared (C++14)

### Move Semantics (C++11)
- Rvalue references
- Move constructors
- Move assignment operators
- std::move
- Perfect forwarding
- std::forward
- Return value optimization (RVO)

### Uniform Initialization (C++11)
- Brace initialization
- Initializer lists
- std::initializer_list

### Range-based Features
- Range-based for loops
- Structured bindings (C++17)

### New Keywords và Features
- Auto keyword
- Decltype
- Nullptr
- Constexpr functions và variables
- Static_assert
- Default và delete functions
- Delegating constructors
- Inheriting constructors

### Lambdas Advanced (C++14/17/20)
- Generic lambdas (C++14)
- Init captures (C++14)
- Constexpr lambdas (C++17)
- Template lambdas (C++20)

### Concurrency và Multithreading (C++11)
- std::thread
- Thread creation và joining
- Mutex và locks: mutex, lock_guard, unique_lock, shared_lock
- Condition variables
- Atomic operations: std::atomic
- Memory ordering
- std::async và std::future
- std::promise
- Thread-local storage
- Thread pools

### Chrono Library (C++11)
- Time points
- Durations
- Clocks: system_clock, steady_clock, high_resolution_clock

### Regular Expressions (C++11)
- std::regex
- Pattern matching
- Regex operations: match, search, replace

### Random Number Generation (C++11)
- Random engines
- Distributions
- std::random_device

### Filesystem Library (C++17)
- Path operations
- Directory operations
- File status và permissions
- Iterating directories

### Optional, Variant, Any (C++17)
- std::optional
- std::variant
- std::any
- std::string_view

### Concepts (C++20)
- Defining concepts
- Requires clause
- Standard library concepts

### Ranges Library (C++20)
- Range views
- Range algorithms
- Pipe operator

### Coroutines (C++20)
- Co_await
- Co_yield
- Co_return
- Promise types

### Modules (C++20)
- Module declaration
- Module interface
- Import statements

### Three-way Comparison (C++20)
- Spaceship operator (<=>)
- Auto-generated comparison operators

## GIAI ĐOẠN 5: CHUYÊN SÂU (4-6 tháng)

### Memory Management Nâng cao
- Memory layout: stack, heap, data, text segments
- Memory alignment và padding
- Custom allocators
- Memory pools
- Placement new
- Memory profiling tools: Valgrind, AddressSanitizer

### Design Patterns
- Creational: Singleton, Factory, Abstract Factory, Builder, Prototype
- Structural: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
- Behavioral: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor

### Performance Optimization
- Profiling code
- Compiler optimizations: -O flags
- Inline functions và inline assembly
- Loop optimizations
- Cache-friendly code
- Branch prediction
- SIMD instructions
- Link-time optimization (LTO)

### Advanced Template Techniques
- Template metaprogramming
- Expression templates
- CRTP (Curiously Recurring Template Pattern)
- Type erasure
- Policy-based design
- Tag dispatching

### Compile-time Programming
- Constexpr functions và variables
- Consteval (C++20)
- Constinit (C++20)
- Template metaprogramming
- Compile-time computations

### Low-level Programming
- Bit manipulation techniques
- Unions
- Packed structures
- Volatile keyword
- Inline assembly
- Calling conventions
- ABI (Application Binary Interface)

### Build Systems
- Make và Makefiles
- CMake: CMakeLists.txt, targets, dependencies
- Build configurations
- Cross-platform builds
- Package managers: vcpkg, Conan

### Debugging Techniques
- GDB debugger
- LLDB debugger
- Visual Studio debugger
- Debug vs Release builds
- Assertions: assert, static_assert
- Logging frameworks
- Core dumps analysis

### Testing
- Unit testing: Google Test, Catch2, Boost.Test
- Test-driven development (TDD)
- Mocking frameworks: Google Mock
- Integration testing
- Code coverage tools

### Static Analysis
- Compiler warnings
- Clang-Tidy
- Cppcheck
- Static analyzers
- Linters

### Documentation
- Doxygen
- Code comments best practices
- README files
- API documentation

## GIAI ĐOẠN 6: CHUYÊN MÔN HOÁ (theo hướng riêng)

### Systems Programming
- Operating system interfaces
- System calls
- Process management
- Inter-process communication (IPC)
- Signals
- Network programming: sockets, protocols
- Device drivers basics

### Graphics Programming
- OpenGL
- Vulkan
- DirectX
- GPU programming
- Shaders
- Graphics pipelines

### Game Development
- Game engines: Unreal Engine, Unity (C++ scripting)
- Game loops
- Entity-component systems
- Physics engines
- AI trong games
- Networking trong games

### Embedded Systems
- Microcontroller programming
- Real-time operating systems (RTOS)
- Hardware interfaces
- Memory-constrained programming
- Power optimization

### High-Performance Computing
- Parallel programming: OpenMP, MPI
- GPU computing: CUDA, OpenCL
- Vectorization
- Distributed computing
- Scientific computing libraries

### Financial Systems
- Low-latency programming
- High-frequency trading concepts
- Numerical libraries
- Time-critical systems

### Compiler Development
- Lexical analysis
- Parsing
- Abstract syntax trees
- Code generation
- Optimization passes

### Libraries và Frameworks Quan Trọng
- Boost libraries
- Qt framework
- POCO libraries
- Eigen (linear algebra)
- OpenCV (computer vision)
- SFML (multimedia)
- JSON libraries: nlohmann/json, RapidJSON

## GIAI ĐOẠN 7: MASTERY (liên tục)

### Best Practices
- SOLID principles
- DRY, KISS, YAGNI
- Code readability
- Naming conventions
- Code organization
- Header/source file organization
- Include what you use (IWYU)

### C++ Standards Evolution
- C++98/03
- C++11 (modern C++ bắt đầu)
- C++14
- C++17
- C++20
- C++23 (upcoming features)
- Following proposals và working drafts

### Contributing to Open Source
- Reading large codebases
- Understanding coding standards
- Pull requests và code reviews
- Community involvement

### Advanced Topics
- Undefined behavior
- Implementation-defined behavior
- Sequence points
- Strict aliasing
- Object lifetime
- Name lookup rules
- Argument-dependent lookup (ADL)
- Template name lookup
- Linker behavior

### Interview Preparation
- Data structures implementation
- Algorithm complexity analysis
- Problem-solving practice: LeetCode, HackerRank
- System design
- C++ specific interview questions

### Continuous Learning
- Đọc C++ standard documentation
- Conference talks: CppCon, Meeting C++
- Books: Effective C++, More Effective C++, The C++ Programming Language
- Blogs và newsletters
- Following C++ experts
- Experimenting with new features

## LỘ TRÌNH HỌC TẬP ĐỀ XUẤT

**Tháng 1-3**: Giai đoạn 1 - Nền tảng cơ bản, viết các chương trình đơn giản

**Tháng 4-7**: Giai đoạn 2 - Trung cấp, focus vào OOP và pointers

**Tháng 8-12**: Giai đoạn 3 - STL và concepts nâng cao

**Tháng 13-16**: Giai đoạn 4 - Modern C++ features

**Tháng 17-22**: Giai đoạn 5 - Chuyên sâu, optimization, design patterns

**Tháng 23+**: Giai đoạn 6-7 - Chuyên môn hóa theo hướng career và continuous learning

## TIPS ĐỂ MASTER C++

- Code mỗi ngày, không skip
- Đọc code của người khác trên GitHub
- Làm projects thực tế, không chỉ tutorials
- Debug code thường xuyên để hiểu sâu
- Đọc compiler errors kỹ, học từ errors
- Tham gia communities: Reddit r/cpp, Stack Overflow
- Code review với peers
- Refactor code cũ khi học kỹ thuật mới
- Đọc C++ standard khi có thể
- Practice với competitive programming
- Build projects từ nhỏ đến lớn
- Học từ mistakes, note lại common pitfalls

Chúc bạn thành công trên con đường master C++!