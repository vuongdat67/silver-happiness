# C++ ROADMAP HOÀN CHỈNH - THE COMPLETE GUIDE

> Roadmap toàn diện từ Zero đến Hero trong C++, kết hợp lý thuyết, thực hành, và kỹ năng thực tế

---

## 1. FOUNDATIONS - NỀN TẢNG

### 1.1 Setup Development Environment
**Timeline: Tuần 1**

- **Compiler Installation**
  - GCC (Linux/macOS)
  - Clang (cross-platform)
  - MSVC (Windows)
  - MinGW (Windows alternative)
  - Compiler flags và optimization levels (-O0, -O1, -O2, -O3, -Ofast)

- **IDE/Editor Setup**
  - Visual Studio (Windows)
  - CLion (cross-platform)
  - VS Code + extensions (C/C++, CMake Tools)
  - Qt Creator
  - Vim/Neovim với LSP
  - Emacs
  
- **Build Systems Introduction**
  - Make và Makefiles
  - CMake basics
  - Ninja build system
  
- **First Program**
  - Hello World với cout
  - Compilation process (preprocessing → compilation → assembly → linking)
  - Understanding executables
  - Header files và source files
  - Multiple file compilation

### 1.2 C++ Fundamentals (nếu chưa biết C)
**Timeline: Tuần 2-4**

- **Variables & Data Types**
  - Primitive types: int, float, double, char, bool
  - Type modifiers: short, long, signed, unsigned
  - Size của types (sizeof operator)
  - Fixed-width integers: int8_t, int16_t, int32_t, int64_t
  - Type inference với auto (C++11)
  - decltype (C++11)
  
- **Constants**
  - const keyword
  - constexpr (C++11)
  - consteval (C++20)
  - constinit (C++20)
  - Literal types
  
- **Operators**
  - Arithmetic: +, -, *, /, %
  - Comparison: ==, !=, <, >, <=, >=
  - Logical: &&, ||, !
  - Bitwise: &, |, ^, ~, <<, >>
  - Assignment: =, +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=
  - Increment/Decrement: ++, --
  - Ternary: ? :
  - Comma operator
  - Member access: ., ->
  - Scope resolution: ::
  - Operator precedence và associativity
  
- **Control Flow**
  - if, else if, else
  - switch-case (với fallthrough)
  - Loops: for, while, do-while
  - Range-based for loop (C++11)
  - break, continue
  - goto (và tại sao nên tránh)
  - Nested control structures
  
- **Functions**
  - Function declaration vs definition
  - Function prototypes
  - Parameters và arguments
  - Pass by value
  - Pass by reference
  - Pass by pointer
  - Return values
  - Return by reference
  - Default parameters
  - Function overloading
  - Inline functions
  - Recursion và tail recursion
  - Function pointers
  
- **Arrays**
  - C-style arrays
  - Array declaration và initialization
  - Multi-dimensional arrays
  - Array decay to pointer
  - sizeof với arrays
  - std::array (C++11) - preview
  
- **Pointers & References**
  - Memory addresses
  - Pointer declaration và initialization
  - Dereference operator (*)
  - Address-of operator (&)
  - Null pointers vs nullptr (C++11)
  - Pointer arithmetic
  - Pointers và arrays relationship
  - Pointer to pointer
  - Void pointers
  - Function pointers
  - References basics
  - Lvalue references
  - Reference vs pointer differences
  - Const pointers vs pointer to const
  
- **Basic I/O**
  - cin, cout, cerr, clog
  - Input/output với basic types
  - cin.get(), cin.getline()
  - String input với getline()
  - Formatting output
  
- **Namespace**
  - std namespace
  - using directive vs using declaration
  - Custom namespaces
  - Namespace aliases
  - Anonymous namespaces
  
- **Preprocessor**
  - #include directive
  - Include guards (#ifndef, #define, #endif)
  - #pragma once
  - Macros (#define)
  - Conditional compilation (#ifdef, #ifndef, #if)
  - Predefined macros (__FILE__, __LINE__, __DATE__, etc.)
  - #error và #warning

### 1.3 C++ vs C - Key Differences
**Timeline: Tuần 4**

- cout/cin vs printf/scanf
- References (không có trong C)
- Function overloading
- Default parameters
- bool type (true/false vs 0/1)
- new/delete vs malloc/free
- Namespace concept
- Inline functions
- const correctness
- Strong type checking
- Classes và OOP
- Exception handling
- Templates
- STL containers

### 1.4 Basic Debugging
**Timeline: Tuần 3-4**

- **Print Debugging**
  - Using cout strategically
  - Debug vs Release output
  - Conditional debug prints
  
- **IDE Debugger Basics**
  - Setting breakpoints
  - Step over, step into, step out
  - Watching variables
  - Call stack inspection
  - Running to cursor
  
- **Common Beginner Errors**
  - Syntax errors
  - Uninitialized variables
  - Array out of bounds
  - Integer division
  - Comparison vs assignment (= vs ==)
  
- **Reading Compiler Errors**
  - Error messages anatomy
  - Warning messages
  - Template error messages (brief introduction)

---

## 2. VERSION CONTROL - GIT

### 2.1 Git Fundamentals
**Timeline: Tuần 5**

- **Git Basics**
  - Installing Git
  - git init, clone
  - git config (user.name, user.email)
  - .gitignore file
  - Common files to ignore in C++ projects
  
- **Basic Workflow**
  - Working directory, staging area, repository
  - git add, commit
  - Writing good commit messages
  - git status, log
  - git diff
  
- **Branching**
  - git branch, checkout
  - git switch (modern approach)
  - Branch naming conventions
  - git merge
  - Fast-forward vs 3-way merge
  - Merge conflicts resolution
  
- **Remote Repositories**
  - GitHub, GitLab, Bitbucket
  - git remote add
  - git push, pull, fetch
  - SSH keys setup
  - Personal access tokens
  
- **Collaboration**
  - Forking repositories
  - Pull requests / Merge requests
  - Code review basics
  - git rebase (introduction)
  - git stash

### 2.2 Advanced Git
**Timeline: Tháng 3-4 (khi làm projects)**

- git rebase vs merge
- Interactive rebase
- Cherry-picking commits
- git reflog
- Submodules
- Git hooks
- .gitattributes
- Git LFS (Large File Storage)

---

## 3. OBJECT-ORIENTED PROGRAMMING (OOP)

### 3.1 Classes & Objects Basics
**Timeline: Tuần 6-7**

- **Class Definition**
  - Class syntax
  - Member variables (data members)
  - Member functions (methods)
  - Class vs struct difference
  - Forward declarations
  
- **Access Specifiers**
  - private
  - public
  - protected
  - Default access levels
  
- **Constructors**
  - Default constructor
  - Parameterized constructor
  - Constructor overloading
  - Constructor initialization lists
  - Member initializer order
  - Delegating constructors (C++11)
  - Explicit constructors
  - Default constructor generation rules
  
- **Destructor**
  - Destructor syntax
  - When destructors are called
  - Virtual destructors (preview)
  - Destructor và exception safety
  
- **Object Lifecycle**
  - Object creation
  - Object destruction
  - Automatic vs dynamic objects
  - Stack vs heap objects
  
- **this Pointer**
  - What is this
  - Using this explicitly
  - Returning *this
  - Const member functions và this
  
- **Const Correctness**
  - Const member functions
  - Const objects
  - Mutable keyword
  - Const và constructors
  
- **Static Members**
  - Static data members
  - Static member functions
  - Static initialization order
  - Accessing static members
  
- **Friend Functions & Classes**
  - Friend keyword
  - Friend functions
  - Friend classes
  - When to use friends

### 3.2 Constructors Deep Dive
**Timeline: Tuần 7-8**

- **Copy Constructor**
  - Shallow vs deep copy
  - Default copy constructor
  - When copy constructor is called
  - Preventing copying (= delete)
  
- **Move Constructor** (C++11)
  - Move semantics introduction
  - Rvalue references preview
  - std::move preview
  - When move constructor is called
  
- **Copy Assignment Operator**
  - Assignment vs initialization
  - Self-assignment check
  - Copy-and-swap idiom
  
- **Move Assignment Operator** (C++11)
  - Move assignment semantics
  - Efficient resource transfer
  
- **Rule of Three/Five/Zero**
  - Rule of Three (C++98)
  - Rule of Five (C++11)
  - Rule of Zero (modern approach)
  
- **Constructor Best Practices**
  - Prefer initialization to assignment
  - Use member initializer lists
  - Avoid calling virtual functions in constructors
  - Uniform initialization (C++11)
  - Aggregate initialization
  - Designated initializers (C++20)

### 3.3 Encapsulation
**Timeline: Tuần 8**

- **Data Hiding**
  - Private data members
  - Why encapsulation matters
  
- **Getters & Setters**
  - Accessor functions
  - Mutator functions
  - Naming conventions
  - Const getters
  - Returning by reference vs value
  
- **PIMPL Idiom**
  - Pointer to Implementation
  - Benefits: ABI stability, compilation times
  - Implementation techniques
  - Smart pointers và PIMPL
  
- **Interface Design**
  - Public interface vs private implementation
  - Minimal interface principle
  - Const-correct interfaces

### 3.4 Inheritance
**Timeline: Tuần 9-10**

- **Basic Inheritance**
  - Inheritance syntax (: public Base)
  - Base class và derived class
  - is-a relationship
  - Protected members
  
- **Access Specifiers in Inheritance**
  - Public inheritance
  - Protected inheritance
  - Private inheritance
  - When to use each
  
- **Constructor/Destructor Chain**
  - Constructor calling order
  - Destructor calling order
  - Base class initialization
  - Initialization lists với inheritance
  
- **Types of Inheritance**
  - Single inheritance
  - Multiple inheritance
  - Multilevel inheritance
  - Hierarchical inheritance
  - Hybrid inheritance
  
- **Multiple Inheritance**
  - Diamond problem
  - Virtual inheritance
  - Virtual base classes
  - Ambiguity resolution
  - Multiple inheritance best practices
  
- **Upcasting & Downcasting**
  - Implicit upcasting
  - Explicit downcasting
  - static_cast with inheritance
  - dynamic_cast (preview)
  
- **Object Slicing**
  - What is object slicing
  - How to avoid it
  - Pass by reference/pointer
  
- **Inheriting Constructors** (C++11)
  - using Base::Base;
  - When to use inherited constructors

### 3.5 Polymorphism
**Timeline: Tuần 10-11**

- **Compile-time Polymorphism**
  - Function overloading
  - Operator overloading (covered later)
  - Template specialization (covered later)
  
- **Runtime Polymorphism**
  - Virtual functions
  - Virtual keyword
  - Override keyword (C++11)
  - Final keyword (C++11)
  - Virtual function tables (vtable)
  - vptr (virtual pointer)
  
- **Pure Virtual Functions**
  - Syntax: = 0
  - Abstract classes
  - Interface classes
  - Cannot instantiate abstract classes
  
- **Virtual Destructors**
  - Why virtual destructors are needed
  - When to use virtual destructors
  - Pure virtual destructors
  
- **Dynamic Binding**
  - How virtual functions work
  - Runtime overhead
  - When to use virtual functions
  
- **Virtual Function Details**
  - Virtual function default arguments
  - Virtual functions và access specifiers
  - Static vs virtual functions
  - Virtual functions in constructors/destructors
  - Covariant return types
  
- **RTTI (Runtime Type Information)**
  - typeid operator
  - type_info class
  - dynamic_cast
  - When RTTI is needed
  - RTTI overhead

### 3.6 Abstraction
**Timeline: Tuần 11**

- **Abstract Classes**
  - Pure virtual functions
  - Cannot instantiate
  - Can have data members
  - Can have non-virtual functions
  
- **Interfaces**
  - Interface design principles
  - Pure virtual classes
  - No data members in interfaces
  - Multiple interfaces
  
- **Design by Contract**
  - Preconditions
  - Postconditions
  - Invariants
  - Contracts in C++20 (preview)

---

## 4. MEMORY MANAGEMENT

### 4.1 Stack vs Heap
**Timeline: Tuần 12**

- **Stack Memory**
  - Automatic storage duration
  - LIFO structure
  - Fast allocation
  - Limited size
  - Scope-based lifetime
  
- **Heap Memory**
  - Dynamic storage duration
  - Manual management required
  - Slower allocation
  - Large size
  - Explicit lifetime control
  
- **Memory Layout**
  - Text segment (code)
  - Data segment (globals, statics)
  - BSS segment (uninitialized data)
  - Stack
  - Heap
  - Memory addresses

### 4.2 Dynamic Memory Allocation
**Timeline: Tuần 12-13**

- **new & delete**
  - new operator
  - delete operator
  - new vs malloc
  - delete vs free
  - Mixing not allowed
  
- **Arrays**
  - new[]
  - delete[]
  - Importance of matching new[] with delete[]
  
- **Memory Leaks**
  - What are memory leaks
  - Detecting leaks
  - Valgrind
  - AddressSanitizer (ASan)
  - Memory profiling
  
- **Dangling Pointers**
  - What are dangling pointers
  - Use after free
  - Double delete
  - How to avoid
  
- **Placement new**
  - Syntax và usage
  - Custom memory allocation
  - Object construction in pre-allocated memory
  
- **nothrow new**
  - new (std::nothrow)
  - Returning nullptr instead of throwing

### 4.3 RAII (Resource Acquisition Is Initialization)
**Timeline: Tuần 13**

- **RAII Principle**
  - Resource tied to object lifetime
  - Constructor acquires
  - Destructor releases
  - Exception safety
  
- **RAII Examples**
  - File handles
  - Mutex locks
  - Memory management
  - Network connections
  - Database connections
  
- **Benefits**
  - Automatic cleanup
  - Exception-safe
  - No leaked resources
  - Clear ownership

### 4.4 Copy Control
**Timeline: Tuần 13-14**

- **Copy Constructor Details**
  - Shallow copy problems
  - Deep copy implementation
  - Copy elision
  - RVO (Return Value Optimization)
  
- **Copy Assignment Operator**
  - Self-assignment check
  - Copy-and-swap idiom
  - Strong exception guarantee
  
- **Move Constructor** (C++11)
  - Rvalue references
  - std::move
  - Moving vs copying
  - noexcept specification importance
  
- **Move Assignment Operator** (C++11)
  - Efficient resource transfer
  - Self-move check
  - noexcept specification
  
- **Rule of Three** (C++98)
  - Destructor
  - Copy constructor
  - Copy assignment operator
  
- **Rule of Five** (C++11)
  - Add move constructor
  - Add move assignment operator
  
- **Rule of Zero** (Modern C++)
  - Let compiler generate
  - Use standard library types
  - Prefer composition

### 4.5 Custom Memory Management
**Timeline: Tháng 10-11 (Advanced)**

- **Overloading new/delete**
  - Class-specific new/delete
  - Global new/delete replacement
  - Placement new
  - Array versions
  
- **Custom Allocators**
  - STL allocator interface
  - Polymorphic allocators (C++17)
  - Memory pools
  - Stack allocators
  - Pool allocators
  
- **Memory Pools**
  - Fixed-size pools
  - Variable-size pools
  - Object pools
  - Benefits và use cases
  
- **Alignment**
  - alignof operator
  - alignas specifier (C++11)
  - Aligned allocation (C++17)
  - Over-aligned types
  
- **Memory Debugging Tools**
  - Valgrind (Memcheck)
  - AddressSanitizer
  - LeakSanitizer
  - MemorySanitizer
  - Electric Fence

---

## 5. TEMPLATES

### 5.1 Function Templates
**Timeline: Tuần 14-15**

- **Basic Syntax**
  - template keyword
  - Template parameters
  - Template arguments
  - Function template declaration
  
- **Template Instantiation**
  - Implicit instantiation
  - Explicit instantiation
  - Template argument deduction
  
- **Template Specialization**
  - Full specialization
  - When to specialize
  - Specialization syntax
  
- **Template Parameters**
  - Type parameters
  - Non-type parameters
  - Template template parameters
  - Default template arguments
  
- **Template Overloading**
  - Templates và regular functions
  - Overload resolution
  - Specialization vs overloading
  
- **Template Compilation Model**
  - Two-phase lookup
  - Template definitions in headers
  - Explicit instantiation declarations

### 5.2 Class Templates
**Timeline: Tuần 15-16**

- **Basic Class Templates**
  - Template class declaration
  - Member function definitions
  - Template class instantiation
  
- **Member Function Templates**
  - Template member functions
  - Constructor templates
  - Conversion operators
  
- **Template Specialization**
  - Full class specialization
  - Partial specialization
  - Member specialization
  
- **Template Aliases** (C++11)
  - using keyword
  - Alias templates
  - vs typedef
  
- **Class Template Argument Deduction (CTAD)** (C++17)
  - Automatic template argument deduction
  - Deduction guides
  - Custom deduction guides

### 5.3 Advanced Templates
**Timeline: Tháng 8-9**

- **Variadic Templates** (C++11)
  - Parameter packs
  - Pack expansion
  - sizeof... operator
  - Recursive templates
  - Fold expressions (C++17)
  
- **Template Metaprogramming**
  - Compile-time computation
  - Type computations
  - Recursive templates
  - Template recursion limits
  
- **SFINAE** (Substitution Failure Is Not An Error)
  - What is SFINAE
  - std::enable_if
  - Detection idiom
  - SFINAE-friendly code
  
- **Type Traits**
  - <type_traits> header
  - Type properties
  - Type transformations
  - Type relationships
  - Custom type traits
  
- **Concepts** (C++20)
  - Defining concepts
  - Requires clauses
  - Requires expressions
  - Standard library concepts
  - Concept composition
  - Abbreviated function templates
  
- **Template Best Practices**
  - When to use templates
  - Template bloat
  - Compilation times
  - Error messages

---

## 6. STANDARD TEMPLATE LIBRARY (STL)

### 6.1 Containers - Sequence
**Timeline: Tuần 16-17**

- **std::vector**
  - Dynamic array
  - Contiguous memory
  - push_back, pop_back, emplace_back
  - Capacity vs size
  - reserve(), shrink_to_fit()
  - Iterator invalidation rules
  - Performance characteristics
  
- **std::deque**
  - Double-ended queue
  - push_front, push_back
  - Non-contiguous memory
  - vs vector tradeoffs
  
- **std::list**
  - Doubly-linked list
  - Constant time insertion/deletion
  - No random access
  - splice operation
  
- **std::forward_list** (C++11)
  - Singly-linked list
  - Memory efficient
  - Forward iteration only
  
- **std::array** (C++11)
  - Fixed-size array
  - Stack allocated
  - vs C-style arrays
  - No overhead

### 6.2 Containers - Associative
**Timeline: Tuần 17-18**

- **std::set & std::multiset**
  - Ordered unique elements
  - Red-black tree implementation
  - Logarithmic operations
  - Custom comparators
  
- **std::map & std::multimap**
  - Key-value pairs
  - Ordered by key
  - operator[] vs at() vs insert()
  - find(), count()
  
- **Unordered Containers** (C++11)
  - std::unordered_set
  - std::unordered_multiset
  - std::unordered_map
  - std::unordered_multimap
  - Hash functions
  - Custom hash functions
  - Bucket interface
  - Load factor
  
- **Container Adapters**
  - std::stack
  - std::queue
  - std::priority_queue
  - Underlying containers

### 6.3 Iterators
**Timeline: Tuần 18**

- **Iterator Categories**
  - Input iterator
  - Output iterator
  - Forward iterator
  - Bidirectional iterator
  - Random access iterator
  - Contiguous iterator (C++20)
  
- **Iterator Operations**
  - begin(), end()
  - cbegin(), cend() (const iterators)
  - rbegin(), rend() (reverse iterators)
  - Advance, distance, next, prev
  
- **Iterator Adapters**
  - Reverse iterators
  - Insert iterators (back_inserter, front_inserter, inserter)
  - Stream iterators (istream_iterator, ostream_iterator)
  - Move iterators (C++11)
  
- **Iterator Invalidation**
  - vector invalidation rules
  - deque invalidation rules
  - list invalidation rules
  - map invalidation rules

### 6.4 Algorithms
**Timeline: Tuần 19-20**

- **Non-modifying Algorithms**
  - find, find_if, find_if_not
  - count, count_if
  - all_of, any_of, none_of (C++11)
  - for_each
  - search, search_n
  - adjacent_find
  - mismatch, equal
  
- **Modifying Algorithms**
  - copy, copy_if, copy_n, copy_backward
  - move, move_backward (C++11)
  - fill, fill_n
  - generate, generate_n
  - transform
  - replace, replace_if, replace_copy
  - remove, remove_if, remove_copy
  - unique, unique_copy
  - reverse, reverse_copy
  - rotate, rotate_copy
  - shuffle (C++11, replaces random_shuffle)
  
- **Sorting & Related**
  - sort, stable_sort
  - partial_sort, partial_sort_copy
  - nth_element
  - is_sorted, is_sorted_until (C++11)
  - Complexity guarantees
  
- **Binary Search** (on sorted ranges)
  - binary_search
  - lower_bound, upper_bound
  - equal_range
  
- **Set Operations** (on sorted ranges)
  - set_union
  - set_intersection
  - set_difference
  - set_symmetric_difference
  - includes
  - merge
  
- **Heap Operations**
  - make_heap
  - push_heap
  - pop_heap
  - sort_heap
  - is_heap, is_heap_until (C++11)
  
- **Min/Max Operations**
  - min, max, minmax (C++11)
  - min_element, max_element, minmax_element (C++11)
  - clamp (C++17)
  
- **Numeric Algorithms**
  - accumulate
  - inner_product
  - partial_sum
  - adjacent_difference
  - iota
  - reduce, transform_reduce (C++17)
  - inclusive_scan, exclusive_scan (C++17)
  
- **Parallel Algorithms** (C++17)
  - Execution policies (seq, par, par_unseq)
  - Parallel algorithm support
  
- **Ranges Algorithms** (C++20)
  - Range-based algorithm overloads
  - Projections
  - Constrained algorithms

### 6.5 Function Objects & Lambdas
**Timeline: Tuần 20**

- **Function Objects (Functors)**
  - operator() overloading
  - Stateful functors
  - Standard functors (<functional>)
  - plus, minus, multiplies, divides, modulus
  - equal_to, not_equal_to, greater, less, etc.
  - logical_and, logical_or, logical_not
  
- **Predicates**
  - Unary predicates
  - Binary predicates
  - Custom predicates
  
- **std::function** (C++11)
  - Type-erased callable wrapper
  - Storing lambdas và functors
  - Performance considerations
  
- **std::bind** (C++11)
  - Binding arguments
  - Placeholders (_1, _2, etc.)
  - vs lambdas
  
- **Lambda Expressions** (covered in detail later)
  - Preview của lambdas
  - Basic syntax
  - Using with algorithms

### 6.6 Utility Types
**Timeline: Tuần 20**

- **std::pair**
  - make_pair
  - Accessing first, second
  - Structured bindings (C++17)
  
- **std::tuple** (C++11)
  - make_tuple
  - std::get
  - std::tie
  - Structured bindings (C++17)
  - Tuple operations
  
- **std::optional** (C++17)
  - Optional values
  - has_value(), value(), value_or()
  - Monadic operations (C++23)
  
- **std::variant** (C++17)
  - Type-safe union
  - std::visit
  - std::get, std::get_if
  - std::holds_alternative
  
- **std::any** (C++17)
  - Type-erased storage
  - any_cast
  - When to use
  
- **std::expected** (C++23)
  - Error handling
  - vs exceptions
  - vs std::optional

---

## 7. SMART POINTERS & RAII

### 7.1 Smart Pointer Types
**Timeline: Tuần 21**

- **std::unique_ptr** (C++11)
  - Exclusive ownership
  - Move-only type
  - Custom deleters
  - make_unique (C++14)
  - Arrays with unique_ptr
  - Transferring ownership
  - Zero overhead abstraction
  
- **std::shared_ptr** (C++11)
  - Shared ownership
  - Reference counting
  - make_shared
  - Control block
  - Thread safety
  - Weak reference counting
  - Custom deleters
  - Aliasing constructor
  
- **std::weak_ptr** (C++11)
  - Non-owning reference
  - Breaking circular references
  - lock() để get shared_ptr
  - expired() check
  - Use cases

### 7.2 Smart Pointer Best Practices
**Timeline: Tuần 21**

- **Ownership Semantics**
  - Exclusive vs shared ownership
  - When to use each type
  - Returning smart pointers
  - Passing smart pointers
  
- **Performance Considerations**
  - unique_ptr has zero overhead
  - shared_ptr overhead (control block)
  - make_shared vs shared_ptr(new T)
  - Avoid shared_ptr when possible
  
- **Common Pitfalls**
  - Circular references
  - Creating shared_ptr from this
  - std::enable_shared_from_this
  - Mixing raw và smart pointers
  - Double delete via raw pointers
  
- **RAII với Smart Pointers**
  - Automatic resource management
  - Exception safety
  - No manual delete needed
  - Custom deleters for non-memory resources

---

## 8. EXCEPTION HANDLING

### 8.1 Exception Basics
**Timeline: Tuần 22**

- **Basic Syntax**
  - try block
  - catch block
  - throw statement
  - Exception propagation
  
- **Standard Exceptions**
  - std::exception hierarchy
  - std::runtime_error
  - std::logic_error
  - std::out_of_range
  - std::invalid_argument
  - std::bad_alloc
  - what() method
  
- **Catch Handlers**
  - Catch by reference
  - Catch by value (avoid)
  - Catch order matters
  - Catch-all handler (catch(...))
  - Multiple catch blocks
  
- **Rethrowing Exceptions**
  - throw; (rethrow current exception)
  - std::throw_with_nested (C++11)
  - std::rethrow_if_nested (C++11)

### 8.2 Advanced Exception Handling
**Timeline: Tuần 22**

- **noexcept** (C++11)
  - noexcept specifier
  - noexcept operator
  - Move constructors và noexcept
  - Destructors are noexcept by default
  - Performance implications
  
- **Exception Safety Guarantees**
  - No-throw guarantee
  - Strong guarantee (commit or rollback)
  - Basic guarantee (valid state)
  - No guarantee
  
- **Stack Unwinding**
  - How unwinding works
  - Destructors during unwinding
  - Exceptions in destructors (avoid!)
  
- **Custom Exceptions**
  - Creating exception hierarchies
  - Inheriting from std::exception
  - Adding custom information
  - Best practices
  
- **RAII và Exception Safety**
  - Resource cleanup via destructors
  - Automatic cleanup during unwinding
  - Smart pointers và exceptions
  - Lock guards và exceptions
  
- **Exception Specifications** (Deprecated)
  - throw() specification (deprecated C++11, removed C++17)
  - Dynamic exception specifications (removed)
  - Why they were removed

### 8.3 Exception Best Practices
**Timeline: Tuần 22**

- Use exceptions for exceptional conditions
- RAII for exception safety
- Prefer noexcept when possible
- Catch by const reference
- Don't throw in destructors
- Don't throw in noexcept functions
- Custom exceptions for domain errors
- Document exception behavior

---

## 9. STREAMS & I/O

### 9.1 Stream Classes
**Timeline: Tuần 23**

- **iostream Hierarchy**
  - ios base class
  - istream (input)
  - ostream (output)
  - iostream (both)
  - Inheritance structure
  
- **Standard Streams**
  - cin (standard input)
  - cout (standard output)
  - cerr (standard error, unbuffered)
  - clog (standard error, buffered)
  
- **File Streams**
  - ifstream (file input)
  - ofstream (file output)
  - fstream (file input/output)
  - Opening/closing files
  - File modes (in, out, app, ate, trunc, binary)
  - Checking if file is open
  
- **String Streams**
  - istringstream
  - ostringstream
  - stringstream
  - String parsing
  - String formatting

### 9.2 Stream Operations
**Timeline: Tuần 23**

- **Formatted I/O**
  - Extraction operator (>>)
  - Insertion operator (<<)
  - Type-safe I/O
  
- **Stream Manipulators**
  - std::endl, std::flush, std::ends
  - std::setw, std::setprecision, std::setfill
  - std::fixed, std::scientific
  - std::left, std::right, std::internal
  - std::boolalpha, std::noboolalpha
  - std::hex, std::dec, std::oct
  - std::showbase, std::noshowbase
  - std::uppercase, std::nouppercase
  - Custom manipulators
  
- **Stream States**
  - good(), bad(), fail(), eof()
  - clear() to reset state
  - rdstate() to get state
  - Checking stream health
  
- **Unformatted I/O**
  - get(), getline()
  - read(), write()
  - gcount()
  - peek(), putback(), unget()
  
- **Stream Buffers**
  - streambuf
  - rdbuf()
  - Buffer synchronization
  - sync()

### 9.3 File I/O
**Timeline: Tuần 23**

- **Text File Operations**
  - Reading line by line
  - Reading words
  - Reading entire file
  - Writing text
  - Formatted output to files
  
- **Binary File Operations**
  - read() và write()
  - Serialization basics
  - POD types vs complex types
  - Endianness considerations
  
- **File Positioning**
  - tellg(), tellp() (get position)
  - seekg(), seekp() (set position)
  - ios::beg, ios::cur, ios::end
  - Random access
  
- **Error Handling**
  - Checking fail states
  - Exceptions with files
  - RAII for file handles

---

## 10. MOVE SEMANTICS & RVALUE REFERENCES

### 10.1 Lvalues & Rvalues
**Timeline: Tuần 24**

- **Value Categories**
  - Lvalues (locator values)
  - Rvalues (temporary values)
  - xvalues (expiring values)
  - glvalues, prvalues
  - Value category rules (C++11/17)
  
- **Rvalue References** (C++11)
  - Syntax: T&&
  - Binding rules
  - Lvalue references vs rvalue references
  - Cannot bind lvalue to rvalue reference
  - Can bind rvalue to const lvalue reference

### 10.2 Move Semantics
**Timeline: Tuần 24-25**

- **std::move**
  - Casting to rvalue reference
  - Doesn't actually move anything
  - Enables move operations
  - Use cases
  
- **Move Constructor**
  - Transfer ownership
  - "Steal" resources
  - Leave source in valid state
  - noexcept specification importance
  - Implementation guidelines
  
- **Move Assignment Operator**
  - Self-move check
  - Release current resources
  - Steal from source
  - noexcept specification
  
- **Move-only Types**
  - std::unique_ptr
  - std::thread
  - std::fstream
  - Cannot copy, can move
  
- **Universal References** (Forwarding References)
  - Template type deduction with T&&
  - vs rvalue references
  - Forwarding references in auto&&
  
- **Perfect Forwarding**
  - std::forward
  - Preserving value category
  - Template parameter packs
  - Forwarding references
  
- **Reference Collapsing**
  - T& & → T&
  - T& && → T&
  - T&& & → T&
  - T&& && → T&&

### 10.3 Optimization
**Timeline: Tuần 25**

- **Return Value Optimization (RVO)**
  - Named RVO (NRVO)
  - Copy elision
  - Mandatory in C++17 for temporaries
  - When RVO cannot happen
  
- **Move Semantics Performance**
  - When moving is beneficial
  - Move vs copy for containers
  - std::move with return values
  - Avoiding unnecessary moves

---

## 11. MODERN C++ FEATURES

### 11.1 C++11 Features
**Timeline: Tuần 26-27**

- **auto Keyword**
  - Type deduction
  - auto vs explicit types
  - auto with references
  - auto with pointers
  - AAA (Almost Always Auto) style
  
- **decltype**
  - Deducing types
  - decltype vs auto
  - decltype(auto) (C++14)
  - Trailing return types
  
- **Range-based for Loop**
  - Syntax: for (auto& elem : container)
  - auto vs auto& vs const auto&
  - Iterating over arrays
  - Iterating over containers
  - Custom range support
  
- **nullptr**
  - vs NULL và 0
  - Type-safe null pointer
  - Overload resolution
  
- **constexpr**
  - Compile-time constants
  - constexpr functions
  - constexpr constructors
  - constexpr variables
  - Limitations in C++11
  
- **static_assert**
  - Compile-time assertions
  - Type checking
  - Template constraints (pre-concepts)
  
- **Delegating Constructors**
  - Constructor calling constructor
  - Code reuse
  - Initialization order
  
- **Inheriting Constructors**
  - using Base::Base;
  - Inheriting constructor parameters
  
- **Default & Deleted Functions**
  - = default
  - = delete
  - Explicitly defaulted special members
  - Deleting functions
  - Non-copyable classes
  
- **Strongly Typed Enums (enum class)**
  - enum class syntax
  - No implicit conversions
  - Scoped enumerators
  - Specifying underlying type
  - vs unscoped enums
  
- **Raw String Literals**
  - R"(...)" syntax
  - No escape sequences needed
  - Multi-line strings
  - Delimiter syntax
  
- **User-defined Literals**
  - operator""
  - Custom suffixes
  - Standard literals (s, ms, h, etc.)
  
- **Attributes**
  - [[attribute]] syntax
  - [[noreturn]]
  - [[carries_dependency]]
  - Compiler-specific attributes
  
- **Initializer Lists**
  - std::initializer_list<T>
  - Uniform initialization
  - List initialization
  - Constructor overloading

### 11.2 C++14 Features
**Timeline: Tuần 27**

- **Generic Lambdas**
  - auto parameters in lambdas
  - Template lambdas preview
  
- **Return Type Deduction**
  - auto return type
  - Multiple return statements
  - Deduction rules
  
- **decltype(auto)**
  - Perfect return type deduction
  - Preserving references
  
- **Variable Templates**
  - Template variables
  - Compile-time constants
  
- **Binary Literals**
  - 0b prefix
  - Binary constants
  
- **Digit Separators**
  - Single quotes in numbers
  - Readability: 1'000'000
  
- **std::make_unique**
  - Factory function for unique_ptr
  - vs new
  - Exception safety
  
- **Relaxed constexpr**
  - Loops in constexpr
  - Multiple statements
  - Local variables
  - More flexibility

### 11.3 C++17 Features
**Timeline: Tuần 28**

- **Structured Bindings**
  - auto [a, b] = pair;
  - Decomposing pairs, tuples
  - Decomposing structs
  - References in bindings
  
- **if/switch with Initializer**
  - if (init; condition)
  - switch (init; condition)
  - Limited scope variables
  
- **constexpr if**
  - Compile-time if statements
  - Template metaprogramming
  - Simplifying SFINAE
  - Different code paths
  
- **Fold Expressions**
  - Variadic template simplification
  - Unary folds
  - Binary folds
  - Supported operators
  
- **std::string_view**
  - Non-owning string reference
  - vs const std::string&
  - Performance benefits
  - Substring without copying
  - Careful with lifetime
  
- **std::filesystem** (covered in detail later)
  - File và directory operations
  
- **Parallel Algorithms**
  - Execution policies
  - std::execution::seq, par, par_unseq
  
- **Class Template Argument Deduction (CTAD)**
  - Deducing template arguments
  - Deduction guides
  - pair, tuple simplification
  
- **inline Variables**
  - Inline for variables
  - Header-only definitions
  
- **Nested Namespaces**
  - namespace A::B::C { }
  - Simplified syntax
  
- **[[nodiscard]]**
  - Warning on ignored return values
  - Error-prone functions
  
- **[[maybe_unused]]**
  - Suppress unused warnings
  - Conditional compilation
  
- **[[fallthrough]]**
  - Document intentional fallthrough
  - Switch cases

### 11.4 C++20 Features
**Timeline: Tuần 29-30**

- **Concepts** (covered earlier in Templates)
  - Constraining templates
  - Better error messages
  
- **Ranges Library**
  - Range-based views
  - Lazy evaluation
  - Composable operations
  - views::filter, views::transform
  - Pipe operator (|)
  - Range adaptors
  - Range algorithms
  
- **Coroutines**
  - co_await
  - co_yield
  - co_return
  - Generators
  - Async operations
  - Promise types
  - Coroutine handles
  
- **Modules**
  - module keyword
  - export keyword
  - import keyword
  - Module interface units
  - Module implementation units
  - Header units
  - Benefits: faster compilation, better encapsulation
  
- **Three-way Comparison (Spaceship)**
  - operator<=>
  - Auto-generated comparisons
  - std::strong_ordering
  - std::weak_ordering
  - std::partial_ordering
  - Defaulted <=>
  
- **consteval**
  - Immediate functions
  - Must be compile-time evaluated
  - vs constexpr
  
- **constinit**
  - Guarantee static initialization
  - vs constexpr
  - Preventing static initialization order fiasco
  
- **std::span**
  - Non-owning view over contiguous sequence
  - Array, vector, C-array view
  - vs std::string_view
  
- **Calendar & Timezone**
  - std::chrono extensions
  - Date types
  - Timezone support
  
- **std::format**
  - Python-style formatting
  - Type-safe printf
  - Custom formatters
  
- **Designated Initializers**
  - Aggregate initialization by name
  - .member = value syntax
  - From C99
  
- **[[likely]] / [[unlikely]]**
  - Branch prediction hints
  - Optimization hints

### 11.5 C++23 Features
**Timeline: Tháng 12 hoặc theo dõi updates**

- **Deducing this**
  - Explicit object parameters
  - Simplifying CRTP
  - Recursive lambdas
  
- **if consteval**
  - Checking compile-time context
  - vs if constexpr
  
- **Multidimensional Subscript**
  - operator[][][][]
  - Multi-dimensional access
  
- **std::expected**
  - Error handling
  - vs exceptions
  - Result types
  
- **std::mdspan**
  - Multi-dimensional span
  - Non-owning multi-dim view
  
- **Ranges Improvements**
  - More views và adaptors
  - zip, chunk, slide, etc.
  
- **std::print** (optional based on implementation)
  - Simpler output
  - Format integration

---

## 12. LAMBDA EXPRESSIONS

### 12.1 Lambda Basics
**Timeline: Tuần 31**

- **Basic Syntax**
  - capture - parameters -> return_type { body }
  - Minimal lambda: [](){}
  - Auto return type deduction
  
- **Capture Clauses**
  - [=] capture by value
  - [&] capture by reference
  - [x] capture specific variable by value
  - [&x] capture specific variable by reference
  - [=, &x] default value, x by reference
  - [&, x] default reference, x by value
  - [this] capture this pointer
  - [*this] (C++17) capture object by value
  
- **Parameters**
  - Similar to regular functions
  - auto parameters (generic lambdas C++14)
  - Parameter packs
  
- **Return Type**
  - Automatic deduction
  - Explicit return type
  - -> syntax
  
- **mutable Lambdas**
  - Modifying captured variables
  - mutable keyword
  - Const by default for value captures

### 12.2 Advanced Lambdas
**Timeline: Tuần 31**

- **Generic Lambdas** (C++14)
  - auto parameters
  - Template lambdas
  - Polymorphic behavior
  
- **Init Capture** (C++14)
  - [x = expr] initialize in capture
  - Move-only captures
  - [ptr = std::move(ptr)]
  
- **constexpr Lambdas** (C++17)
  - Compile-time evaluation
  - Automatic constexpr
  - Explicit constexpr
  
- **Template Lambdas** (C++20)
  - Explicit template parameters
  - <typename T> in lambda
  
- **Stateless Lambdas**
  - Empty capture list
  - Convertible to function pointer
  - Zero overhead
  
- **Capturing this**
  - Access to member variables
  - [this] vs [*this] (C++17)
  - Lifetime considerations
  
- **Immediately Invoked Lambda**
  - []() { ... }()
  - Const initialization
  - Complex initializers

### 12.3 Lambda Use Cases
**Timeline: Tuần 31**

- With STL algorithms
- Custom comparators
- Callbacks
- RAII wrappers
- Scope guards
- Event handlers
- Async operations
- Replace small functors

---

## 13. CONCURRENCY & MULTITHREADING

### 13.1 Thread Basics
**Timeline: Tuần 32-33**

- **std::thread**
  - Creating threads
  - Thread constructor overloads
  - Passing arguments to threads
  - Thread objects are move-only
  
- **Joining & Detaching**
  - join() - wait for completion
  - detach() - let thread run independently
  - joinable() check
  - Thread lifecycle
  - Exceptions và threads
  
- **Thread IDs**
  - std::thread::id
  - std::this_thread::get_id()
  - Comparing thread IDs
  
- **Hardware Concurrency**
  - std::thread::hardware_concurrency()
  - Optimal thread count
  
- **Thread Functions**
  - std::this_thread::sleep_for
  - std::this_thread::sleep_until
  - std::this_thread::yield

### 13.2 Synchronization Primitives
**Timeline: Tuần 33-34**

- **std::mutex**
  - Mutual exclusion
  - lock(), unlock()
  - try_lock()
  - RAII wrappers preferred
  
- **Lock Guards**
  - std::lock_guard
  - Automatic locking/unlocking
  - RAII for mutexes
  - Cannot unlock manually
  
- **Unique Lock**
  - std::unique_lock
  - More flexible than lock_guard
  - Can unlock và relock
  - Deferred locking
  - Adopt lock
  - try_to_lock
  - Transfer ownership
  
- **Scoped Lock** (C++17)
  - std::scoped_lock
  - Multiple mutexes
  - Deadlock avoidance
  - Variadic template
  
- **Shared Mutex** (C++17)
  - std::shared_mutex
  - Reader-writer locks
  - Multiple readers, single writer
  - shared_lock for readers
  - unique_lock for writers
  
- **Recursive Mutex**
  - std::recursive_mutex
  - Same thread can lock multiple times
  - Must unlock same number of times
  - Use cases và caveats
  
- **Timed Mutex**
  - std::timed_mutex
  - try_lock_for
  - try_lock_until
  - Timeout-based locking

### 13.3 Condition Variables
**Timeline: Tuần 34**

- **std::condition_variable**
  - wait() - block until notified
  - wait_for() - wait with timeout
  - wait_until() - wait until time point
  - notify_one() - wake one thread
  - notify_all() - wake all threads
  
- **Predicate-based Wait**
  - wait(lock, predicate)
  - Avoiding spurious wakeups
  - Recommended approach
  
- **condition_variable_any**
  - Works with any lockable
  - vs std::condition_variable
  
- **Producer-Consumer Pattern**
  - Implementation with CV
  - Queue synchronization
  - Bounded buffer

### 13.4 Atomic Operations
**Timeline: Tuần 35**

- **std::atomic**
  - Atomic types
  - Lock-free operations
  - is_lock_free()
  - Supported operations
  
- **Atomic Operations**
  - load(), store()
  - exchange()
  - compare_exchange_weak()
  - compare_exchange_strong()
  - fetch_add, fetch_sub, etc.
  
- **Memory Ordering**
  - memory_order_relaxed
  - memory_order_consume (deprecated)
  - memory_order_acquire
  - memory_order_release
  - memory_order_acq_rel
  - memory_order_seq_cst (default)
  - Memory model
  
- **Atomic Flags**
  - std::atomic_flag
  - Guaranteed lock-free
  - test_and_set()
  - clear()
  - Spinlock implementation
  
- **Lock-free Programming**
  - Concepts
  - ABA problem
  - Hazard pointers
  - Challenges

### 13.5 Async Programming
**Timeline: Tuần 35-36**

- **std::async**
  - Launch policies (async, deferred)
  - Returning std::future
  - Automatic thread management
  - vs manual threads
  
- **std::future**
  - Getting async results
  - get() - blocks until ready
  - wait() - wait without retrieving
  - wait_for(), wait_until()
  - valid() check
  - One-time use
  
- **std::promise**
  - Setting values from another thread
  - get_future()
  - set_value()
  - set_exception()
  - Communication channel
  
- **std::packaged_task**
  - Wrapping callable
  - get_future()
  - Delayed execution
  - Moving tasks between threads
  
- **std::shared_future**
  - Multiple threads can wait
  - Copyable
  - vs std::future

### 13.6 Thread-Safe Programming
**Timeline: Tuần 36**

- **Data Races**
  - What are data races
  - Undefined behavior
  - Detection tools (ThreadSanitizer)
  
- **Race Conditions**
  - vs data races
  - Logic bugs
  - Prevention strategies
  
- **Deadlocks**
  - Causes
  - std::lock() for multiple mutexes
  - Lock ordering
  - std::scoped_lock (C++17)
  - Timeout-based locking
  
- **Thread-Safe Design Patterns**
  - Immutable objects
  - Thread-local storage
  - Double-checked locking (broken!)
  - Call once (std::call_once, std::once_flag)
  
- **Thread Pools**
  - Concept
  - Work queue
  - Task submission
  - std::async limitations
  - Custom implementation (advanced)
  
- **Parallel Algorithms** (C++17)
  - std::execution policies
  - Parallel for_each, transform, etc.
  - Hardware utilization

---

## 14. TYPE TRAITS & METAPROGRAMMING

### 14.1 Type Traits
**Timeline: Tuần 37**

- **Type Categories**
  - is_void, is_null_pointer
  - is_integral, is_floating_point
  - is_array, is_pointer
  - is_lvalue_reference, is_rvalue_reference
  - is_member_object_pointer, is_member_function_pointer
  - is_enum, is_union, is_class
  - is_function
  
- **Type Properties**
  - is_const, is_volatile
  - is_trivial, is_trivially_copyable
  - is_standard_layout, is_pod
  - is_empty
  - is_polymorphic, is_abstract
  - is_signed, is_unsigned
  - has_virtual_destructor
  
- **Supported Operations**
  - is_constructible, is_default_constructible
  - is_copy_constructible, is_move_constructible
  - is_assignable, is_copy_assignable, is_move_assignable
  - is_destructible
  - is_trivially_* versions
  - is_nothrow_* versions
  
- **Type Relationships**
  - is_same
  - is_base_of
  - is_convertible
  - is_invocable (C++17)
  - is_nothrow_invocable (C++17)
  
- **Type Transformations**
  - remove_const, remove_volatile, remove_cv
  - add_const, add_volatile, add_cv
  - remove_reference, add_lvalue_reference, add_rvalue_reference
  - remove_pointer, add_pointer
  - make_signed, make_unsigned
  - remove_extent, remove_all_extents
  - decay
  - common_type
  - underlying_type
  - result_of (deprecated C++17), invoke_result (C++17)

### 14.2 SFINAE & enable_if
**Timeline: Tuần 37**

- **SFINAE Principle**
  - Substitution Failure Is Not An Error
  - Template argument substitution
  - Failed substitution removes overload
  - Not a compilation error
  
- **std::enable_if**
  - Conditional type definition
  - enable_if<condition, T>::type
  - Template parameter SFINAE
  - Return type SFINAE
  - Function parameter SFINAE
  
- **Detection Idiom**
  - Detecting member types
  - Detecting member functions
  - std::void_t (C++17)
  - is_detected library (optional)
  
- **constexpr if vs SFINAE** (C++17)
  - Simpler alternative
  - Compile-time branching
  - When to use each

### 14.3 Template Metaprogramming
**Timeline: Tuần 38**

- **Compile-time Computation**
  - Recursive templates
  - Factorial example
  - Fibonacci example
  - vs constexpr
  
- **Type Computations**
  - Type lists
  - Type selection
  - Type filtering
  - Type algorithms
  
- **Tag Dispatching**
  - Iterator tag dispatching
  - Custom tag types
  - Overload resolution
  
- **Policy-Based Design**
  - Policy classes
  - Template template parameters
  - Combining policies
  - Andrei Alexandrescu's Modern C++ Design
  
- **Expression Templates**
  - Lazy evaluation
  - Avoiding temporaries
  - Operator overloading for expressions
  - Used in Eigen, Blaze, etc.
  
- **CRTP** (Curiously Recurring Template Pattern)
  - Static polymorphism
  - Compile-time polymorphism
  - Mixins
  - Use cases

### 14.4 Concepts (C++20)
**Timeline: Tuần 38**

- **Defining Concepts**
  - concept keyword
  - Boolean expressions
  - Requires expressions
  - Simple requirements
  - Type requirements
  - Compound requirements
  - Nested requirements
  
- **Requires Clauses**
  - requires keyword
  - Template constraints
  - Where to place requires
  - Conjunctions và disjunctions
  
- **Standard Concepts**
  - <concepts> header
  - same_as, derived_from, convertible_to
  - integral, floating_point, signed_integral
  - constructible_from, default_initializable
  - move_constructible, copy_constructible
  - movable, copyable, semiregular, regular
  - invocable, predicate, relation
  - Iterator concepts
  - Range concepts
  
- **Concept Composition**
  - Combining concepts
  - && (and), || (or)
  - Subsumption
  
- **Abbreviated Function Templates**
  - auto parameters with concepts
  - Concept auto syntax

---

## 15. DESIGN PATTERNS

### 15.1 Creational Patterns
**Timeline: Tuần 39-40**

- **Singleton**
  - Intent: Ensure single instance
  - Lazy initialization
  - Thread-safe singleton (C++11)
  - Meyers' Singleton
  - Eager initialization
  - Double-checked locking (avoid!)
  - Singleton destruction
  
- **Factory Method**
  - Intent: Create objects without specifying exact class
  - Virtual constructor
  - Creator và product hierarchies
  - Parallel class hierarchies
  
- **Abstract Factory**
  - Intent: Create families of related objects
  - Factory interfaces
  - Concrete factories
  - Product families
  
- **Builder**
  - Intent: Construct complex objects step by step
  - Director và builder
  - Fluent interface
  - Method chaining
  
- **Prototype**
  - Intent: Clone objects
  - clone() method
  - Shallow vs deep copy
  - Copy constructor usage
  
- **Object Pool**
  - Intent: Reuse expensive objects
  - Pool management
  - Checkout/checkin
  - Thread-safe pools

### 15.2 Structural Patterns
**Timeline: Tuần 40-41**

- **Adapter**
  - Intent: Convert interface
  - Class adapter vs object adapter
  - Wrapper pattern
  
- **Bridge**
  - Intent: Decouple abstraction from implementation
  - Pimpl idiom relation
  - Reducing compilation dependencies
  
- **Composite**
  - Intent: Tree structures
  - Component interface
  - Leaf và composite classes
  - Recursive composition
  
- **Decorator**
  - Intent: Add responsibilities dynamically
  - Wrapping objects
  - Alternative to subclassing
  - Stream decorators example
  
- **Facade**
  - Intent: Simplified interface to complex system
  - Subsystem hiding
  - Reduce coupling
  
- **Flyweight**
  - Intent: Share common state
  - Intrinsic vs extrinsic state
  - Memory optimization
  - String interning example
  
- **Proxy**
  - Intent: Control access to object
  - Virtual proxy (lazy initialization)
  - Protection proxy (access control)
  - Remote proxy
  - Smart pointers as proxies
  
- **PIMPL (Pointer to Implementation)**
  - Hide implementation details
  - Reduce compilation dependencies
  - Binary compatibility
  - Forward declarations

### 15.3 Behavioral Patterns
**Timeline: Tuần 41-42**

- **Chain of Responsibility**
  - Intent: Pass request along chain
  - Handler chain
  - Request processing
  
- **Command**
  - Intent: Encapsulate request as object
  - Command interface
  - Invoker, command, receiver
  - Undo/redo implementation
  
- **Iterator**
  - Intent: Access elements sequentially
  - STL iterators
  - Custom iterators
  - Iterator interface
  
- **Mediator**
  - Intent: Reduce coupling between objects
  - Centralized communication
  - Colleague objects
  
- **Memento**
  - Intent: Capture and restore state
  - Originator, memento, caretaker
  - Encapsulation preservation
  
- **Observer**
  - Intent: Notify dependents of changes
  - Subject và observers
  - Push vs pull model
  - Event systems
  
- **State**
  - Intent: Behavior changes with state
  - Context và state objects
  - State transitions
  - vs Strategy pattern
  
- **Strategy**
  - Intent: Interchangeable algorithms
  - Context và strategy interface
  - Algorithm families
  - std::function as strategy
  
- **Template Method**
  - Intent: Define algorithm skeleton
  - Hook methods
  - Invariant vs variant parts
  - Hollywood principle
  
- **Visitor**
  - Intent: Add operations without modifying classes
  - Element hierarchy
  - Visitor interface
  - Double dispatch
  - std::variant và std::visit

### 15.4 Modern C++ Idioms
**Timeline: Tuần 42**

- **RAII** (already covered)
  - Resource management
  
- **Copy-and-Swap**
  - Exception-safe assignment
  - Strong exception guarantee
  
- **CRTP** (already covered)
  - Static polymorphism
  
- **Type Erasure**
  - std::function implementation concept
  - Hiding types
  - Virtual functions alternative
  
- **Barton-Nackman Trick**
  - Restricted template expansion
  - Hidden friend functions
  
- **Niebloid**
  - Customization point objects
  - ADL prevention
  - Ranges library pattern

---

## 16. STANDARD LIBRARY DEEP DIVE

### 16.1 String Processing
**Timeline: Tuần 43**

- **std::string**
  - Small String Optimization (SSO)
  - COW (Copy-on-Write) implementations
  - String operations
  - substr, find, replace
  - c_str(), data()
  - capacity và reserve
  
- **std::string_view** (C++17)
  - Non-owning view
  - Lightweight
  - Substring without allocation
  - Lifetime management
  - Comparison với const string&
  
- **String Streams**
  - String parsing
  - String formatting
  - istringstream, ostringstream
  
- **Regular Expressions**
  - std::regex
  - std::regex_match
  - std::regex_search
  - std::regex_replace
  - Regex iterators
  - Capture groups
  - Regex syntax options
  
- **String Algorithms**
  - Case conversion
  - Trimming
  - Splitting
  - Joining

### 16.2 Numerics
**Timeline: Tuần 43**

- **<cmath>**
  - Mathematical functions
  - Trigonometric functions
  - Exponential và logarithmic
  - Power functions
  - Rounding functions
  
- **<numeric>**
  - accumulate
  - inner_product
  - adjacent_difference
  - partial_sum
  - iota
  - gcd, lcm (C++17)
  - reduce, transform_reduce (C++17)
  
- **<random>**
  - Random engines: mt19937, etc.
  - Random device
  - Distributions:
    - uniform_int_distribution
    - uniform_real_distribution
    - normal_distribution
    - bernoulli_distribution
    - poisson_distribution
    - etc.
  - Seeding properly
  
- **<complex>**
  - Complex numbers
  - Operations
  - Mathematical functions
  
- **<ratio>** (C++11)
  - Compile-time rational arithmetic
  - ratio<num, den>
  - Ratio operations
  
- **<limits>**
  - numeric_limits
  - Type properties
  - Min, max values
  - Infinity, NaN

### 16.3 Time & Date
**Timeline: Tuần 44**

- **std::chrono** (C++11)
  - Duration
  - Time points
  - Clocks:
    - system_clock
    - steady_clock
    - high_resolution_clock
  - Duration arithmetic
  - Time point arithmetic
  - Casting durations
  - Literals: s, ms, us, ns, h, min
  
- **Calendar** (C++20)
  - year, month, day
  - year_month_day
  - weekday
  - Date arithmetic
  
- **Time Zone** (C++20)
  - time_zone class
  - zoned_time
  - Local time vs system time
  - UTC conversions

### 16.4 Filesystem (C++17)
**Timeline: Tuần 44**

- **Path Operations**
  - std::filesystem::path
  - Constructing paths
  - Path concatenation
  - Filename, extension, stem
  - Absolute vs relative paths
  - Canonical paths
  - Path iterators
  
- **Directory Operations**
  - directory_iterator
  - recursive_directory_iterator
  - Iterating directories
  - Filtering entries
  
- **File Operations**
  - exists()
  - file_size()
  - copy(), copy_file()
  - rename(), remove()
  - create_directory()
  - current_path()
  
- **File Status**
  - file_status
  - is_regular_file()
  - is_directory()
  - is_symlink()
  - file_type enum
  
- **Permissions**
  - permissions enum
  - Checking permissions
  - Setting permissions
  
- **Error Handling**
  - filesystem::filesystem_error
  - Error codes vs exceptions

### 16.5 Other Utilities
**Timeline: Tuần 44**

- **std::bitset**
  - Fixed-size bit arrays
  - Bit operations
  - Conversions
  
- **std::byte** (C++17)
  - Type-safe byte
  - vs unsigned char
  
- **Bit manipulation** (C++20)
  - <bit> header
  - bit_cast
  - has_single_bit
  - bit_ceil, bit_floor
  - countl_zero, countr_zero
  - popcount
  - rotl, rotr

---

## 17. ADVANCED TOPICS

### 17.1 Name Lookup
**Timeline: Tháng 10**

- **Qualified Name Lookup**
  - Scope resolution operator
  - Class member access
  - Namespace qualification
  
- **Unqualified Name Lookup**
  - Current scope
  - Enclosing scopes
  - Base class lookup
  
- **Argument-Dependent Lookup (ADL)**
  - Koenig lookup
  - When ADL happens
  - Associated namespaces
  - Associated classes
  - ADL và function templates
  - Preventing ADL
  
- **Two-Phase Lookup**
  - Dependent names
  - Non-dependent names
  - Template instantiation
  - typename keyword
  - template keyword in dependent contexts

### 17.2 Type System
**Timeline: Tháng 10**

- **Type Conversions**
  - Implicit conversions
  - Promotion
  - Standard conversions
  - User-defined conversions
  - Conversion sequences
  
- **C++ Casts**
  - static_cast
  - dynamic_cast
  - const_cast
  - reinterpret_cast
  - C-style cast dangers
  - Function-style cast
  
- **RTTI (Runtime Type Information)**
  - typeid operator
  - type_info class
  - name() function
  - dynamic_cast với polymorphic types
  - Performance cost
  - Disabling RTTI

### 17.3 Undefined Behavior
**Timeline: Tháng 10**

- **Common UB Scenarios**
  - Signed integer overflow
  - Out-of-bounds access
  - Null pointer dereference
  - Use after free
  - Double free
  - Data races
  - Accessing deleted object
  - Returning reference to local
  - Modifying string literal
  - Violating strict aliasing
  
- **Detection**
  - Compiler warnings
  - UndefinedBehaviorSanitizer (UBSan)
  - Static analysis tools
  
- **Avoidance**
  - Compiler warnings (-Wall -Wextra -Wpedantic)
  - Sanitizers
  - Safe coding practices
  - Code review

### 17.4 ABI (Application Binary Interface)
**Timeline: Tháng 11**

- **ABI Basics**
  - What is ABI
  - Name mangling
  - Calling conventions
  - Data layout
  - vtable layout
  
- **ABI Compatibility**
  - Binary compatibility
  - Source compatibility
  - Breaking changes
  - Versioning strategies
  
- **Practical ABI**
  - Shared libraries (.so, .dll)
  - extern "C"
  - Platform differences
  - ABI stability concerns

---

## 18. PERFORMANCE & OPTIMIZATION

### 18.1 Profiling
**Timeline: Tháng 10-11**

- **CPU Profiling**
  - gprof (GNU profiler)
  - perf (Linux)
  - Instruments (macOS)
  - VTune (Intel)
  - Identifying hotspots
  - Call graphs
  
- **Memory Profiling**
  - Valgrind (Massif, Memcheck)
  - Heaptrack
  - Memory usage patterns
  - Allocation patterns
  - Leak detection
  
- **Benchmarking**
  - Google Benchmark
  - Writing good benchmarks
  - Statistical significance
  - Avoiding optimizer tricks
  - Warm-up runs
  
- **Cache Profiling**
  - perf stat
  - Cache miss analysis
  - Cache-friendly code

### 18.2 Optimization Techniques
**Timeline: Tháng 11**

- **Compiler Optimizations**
  - Optimization levels (-O0, -O1, -O2, -O3, -Ofast)
  - -march, -mtune flags
  - Link-Time Optimization (LTO)
  - Profile-Guided Optimization (PGO)
  - Whole Program Optimization
  
- **Inlining**
  - inline keyword
  - Automatic inlining
  - Force inlining (compiler-specific)
  - Inline assembly
  
- **Loop Optimizations**
  - Loop unrolling
  - Loop fusion
  - Loop invariant code motion
  - Vectorization
  
- **Data Structure Optimization**
  - Memory layout
  - Cache lines
  - Structure padding
  - Alignment
  - Data-oriented design
  
- **Algorithm Selection**
  - Complexity analysis
  - Choosing right data structures
  - STL algorithm complexity
  
- **Move Semantics** (already covered)
  - Eliminating copies
  - Perfect forwarding
  
- **Small String Optimization (SSO)**
  - String implementation detail
  - Avoiding heap allocation
  
- **RVO/NRVO** (already covered)
  - Eliminating temporaries
  
- **Branch Prediction**
  - [[likely]] / [[unlikely]] (C++20)
  - Predictable branches
  - Branch-free code
  
- **SIMD**
  - Vectorization
  - Intrinsics
  - Auto-vectorization
  - SSE, AVX
  
- **constexpr**
  - Compile-time computation
  - Reducing runtime work

### 18.3 Performance Best Practices
**Timeline: Tháng 11**

- Pass large objects by const reference
- Use move semantics
- Reserve container capacity
- Avoid unnecessary allocations
- Prefer stack allocation
- Use appropriate containers
- Enable compiler optimizations
- Profile before optimizing
- Measure, don't guess
- Avoid premature optimization

---

## 19. DEBUGGING & TESTING

### 19.1 Debugging Tools
**Timeline: Tháng 5-6**

- **GDB (GNU Debugger)**
  - Starting GDB
  - Setting breakpoints
  - Conditional breakpoints
  - Watchpoints
  - Step over, into, out
  - Print variables
  - Examine memory
  - Call stack (backtrace)
  - Thread debugging
  - Attaching to process
  - Core dump analysis
  - GDB scripting
  - TUI mode
  
- **LLDB**
  - Similar to GDB
  - Better C++ support
  - LLVM integration
  - Expression evaluation
  
- **Visual Studio Debugger**
  - GUI debugging
  - Data breakpoints
  - Edit và continue
  - Memory windows
  - Parallel debugging
  
- **Debugging Techniques**
  - Reproduce bug consistently
  - Isolate the problem
  - Divide and conquer
  - Rubber duck debugging
  - Binary search for bug location
  - Check assumptions
  - Use assertions

### 19.2 Assertions & Logging
**Timeline: Tháng 5-6**

- **Assertions**
  - assert() macro
  - static_assert (compile-time)
  - Custom assertions
  - Debug vs release builds
  - NDEBUG macro
  
- **Logging**
  - Logging levels (trace, debug, info, warn, error, fatal)
  - Structured logging
  - Log rotation
  - Performance considerations
  
- **Logging Frameworks**
  - spdlog
  - glog (Google)
  - Boost.Log
  - log4cplus

### 19.3 Testing Frameworks
**Timeline: Tháng 6-7**

- **Google Test (gtest)**
  - TEST macro
  - TEST_F (test fixtures)
  - Assertions: EXPECT_*, ASSERT_*
  - Parameterized tests
  - Test discovery
  - Running specific tests
  - Test output formats
  
- **Google Mock (gmock)**
  - Mock objects
  - MOCK_METHOD
  - Expectations: EXPECT_CALL
  - Matchers
  - Actions
  - Testing interactions
  
- **Catch2**
  - Header-only alternative
  - BDD-style tests
  - Sections
  - Generators
  - Simpler syntax
  
- **Boost.Test**
  - Unit testing
  - Auto-registration
  - Test suites
  
- **doctest**
  - Lightweight
  - Fast compilation
  - Similar to Catch2

### 19.4 Testing Practices
**Timeline: Tháng 6-7**

- **Unit Testing**
  - Testing individual units
  - Test isolation
  - Mocking dependencies
  - Test coverage
  
- **Integration Testing**
  - Testing component interaction
  - End-to-end testing
  - System testing
  
- **Test-Driven Development (TDD)**
  - Red-Green-Refactor cycle
  - Write test first
  - Benefits và challenges
  
- **Code Coverage**
  - gcov/lcov
  - llvm-cov
  - Coverage metrics
  - Interpreting coverage
  - 100% coverage isn't goal

### 19.5 Static Analysis
**Timeline: Tháng 11**

- **Compiler Warnings**
  - -Wall -Wextra -Wpedantic
  - -Werror (treat warnings as errors)
  - Specific warnings
  
- **Clang-Tidy**
  - Linting và modernization
  - Checks categories
  - Custom checks
  - Integration with build systems
  
- **Cppcheck**
  - Static analysis tool
  - Finding bugs
  - Undefined behavior detection
  
- **PVS-Studio**
  - Commercial static analyzer
  - Deep analysis
  
- **Include-What-You-Use (IWYU)**
  - Header dependency analysis
  - Cleaning includes

### 19.6 Sanitizers
**Timeline: Tháng 10-11**

- **AddressSanitizer (ASan)**
  - Memory errors
  - Use-after-free
  - Buffer overflows
  - Memory leaks
  
- **UndefinedBehaviorSanitizer (UBSan)**
  - Undefined behavior detection
  - Integer overflow
  - Null pointer dereference
  
- **ThreadSanitizer (TSan)**
  - Data races
  - Race condition detection
  
- **MemorySanitizer (MSan)**
  - Uninitialized memory reads
  
- **LeakSanitizer (LSan)**
  - Memory leak detection
  - Standalone or with ASan

---

## 20. BUILD SYSTEMS & PACKAGE MANAGEMENT

### 20.1 Make & Makefiles
**Timeline: Tuần 2-3**

- **Makefile Basics**
  - Targets, dependencies, commands
  - Variables
  - Pattern rules
  - Automatic variables ($@, $<, $^)
  - Phony targets
  
- **Compilation Process**
  - Preprocessing
  - Compilation
  - Assembly
  - Linking
  - Static vs dynamic linking

### 20.2 CMake
**Timeline: Tháng 4-5**

- **CMake Basics**
  - CMakeLists.txt
  - cmake_minimum_required
  - project()
  - add_executable()
  - add_library()
  - target_link_libraries()
  
- **Variables**
  - set(), unset()
  - ${VAR} syntax
  - Environment variables
  - Cache variables
  
- **Targets**
  - Executables
  - Libraries (static, shared, interface)
  - Custom targets
  - Imported targets
  
- **Properties**
  - Target properties
  - set_target_properties()
  - get_target_property()
  
- **Dependencies**
  - find_package()
  - FetchContent (C++11, modern approach)
  - ExternalProject
  - add_subdirectory()
  
- **Include Directories**
  - include_directories() (avoid)
  - target_include_directories() (preferred)
  - PUBLIC, PRIVATE, INTERFACE
  
- **Compile Options**
  - target_compile_options()
  - target_compile_features()
  - target_compile_definitions()
  
- **Generator Expressions**
  - $<CONFIG:Release>
  - $<TARGET_PROPERTY:...>
  - Build-type specific settings
  
- **Modern CMake**
  - Target-based approach
  - Transitive dependencies
  - Export targets
  - Config files
  
- **Build Configurations**
  - Debug, Release, RelWithDebInfo, MinSizeRel
  - Custom configurations
  - CMAKE_BUILD_TYPE
  
- **Cross-Platform**
  - Platform detection
  - Conditional compilation
  - Generator selection
  
- **Installation**
  - install() command
  - DESTINATION
  - Export và import targets
  
- **Testing với CTest**
  - enable_testing()
  - add_test()
  - Running tests

### 20.3 Other Build Tools
**Timeline: Optional**

- **Ninja**
  - Fast build system
  - Generated by CMake
  - Parallel builds
  
- **Meson**
  - Python-based
  - Fast và user-friendly
  
- **Bazel**
  - Google's build system
  - Highly scalable
  - Reproducible builds
  
- **xmake**
  - Lua-based
  - Cross-platform
  - Package management

### 20.4 Package Managers
**Timeline: Tháng 5**

- **Conan**
  - C/C++ package manager
  - conanfile.txt / conanfile.py
  - Dependency management
  - Prebuilt binaries
  - Creating packages
  - Conan center
  
- **vcpkg**
  - Microsoft's package manager
  - CMake integration
  - Manifest mode
  - Installing packages
  - Creating ports
  
- **System Package Managers**
  - apt (Debian/Ubuntu)
  - yum/dnf (RedHat/Fedora)
  - brew (macOS)
  - Limitations for C++ development

---

## 21. SECURITY & SAFE CODING

### 21.1 Common Vulnerabilities
**Timeline: Tháng 9-10**

- **Buffer Overflows**
  - Stack overflow
  - Heap overflow
  - Off-by-one errors
  - Strcpy và unsafe functions
  - Prevention: bounds checking
  
- **Memory Corruption**
  - Use-after-free
  - Double free
  - Null pointer dereference
  - Wild pointers
  - Dangling references
  
- **Integer Vulnerabilities**
  - Integer overflow
  - Integer underflow
  - Truncation
  - Sign conversion
  - Division by zero
  
- **Injection Attacks**
  - SQL injection (database context)
  - Command injection
  - Format string vulnerabilities
  
- **Race Conditions**
  - TOCTOU (Time-of-check-time-of-use)
  - Data races
  - Deadlocks

### 21.2 Input Validation
**Timeline: Tháng 9**

- **Validation Principles**
  - Never trust user input
  - Whitelist vs blacklist
  - Sanitization
  - Length checks
  - Type validation
  
- **Bounds Checking**
  - Array access
  - at() vs operator[]
  - Range checks
  - std::span for safe views
  
- **String Handling**
  - Avoid C-style strings when possible
  - Use std::string
  - Null-termination issues
  - strncpy vs strcpy
  - std::string_view safety

### 21.3 Safe Coding Practices
**Timeline: Tháng 9-10**

- **Use RAII**
  - Automatic resource management
  - Exception safety
  - No manual cleanup
  
- **Prefer Smart Pointers**
  - Avoid raw new/delete
  - Clear ownership
  - Prevent leaks
  
- **Use Standard Library**
  - Vetted implementations
  - Safe containers
  - Algorithms instead of raw loops
  
- **Const Correctness**
  - Immutability
  - Preventing accidental modification
  - Compiler optimization
  
- **Initialize Variables**
  - Avoid uninitialized variables
  - Default initialization
  - Zero initialization
  
- **Avoid Casting**
  - Minimize casts
  - Use C++ casts for visibility
  - Document why casting is needed
  
- **Compiler Warnings**
  - Enable all warnings
  - Treat warnings as errors
  - Fix warnings promptly
  
- **Code Review**
  - Peer review
  - Security-focused review
  - Automated tools

### 21.4 Cryptography (Brief Introduction)
**Timeline: Optional, Tháng 12**

- **Cryptography Libraries**
  - OpenSSL
  - Crypto++
  - Libsodium
  - Botan
  
- **Hashing**
  - SHA family
  - Password hashing (bcrypt, scrypt, Argon2)
  
- **Encryption**
  - Symmetric (AES)
  - Asymmetric (RSA, ECC)
  
- **Random Numbers**
  - std::random_device
  - Cryptographically secure RNG
  - Not std::rand()!
  
- **Best Practices**
  - Don't roll your own crypto
  - Use established libraries
  - Keep libraries updated
  - Key management

### 21.5 Security Standards
**Timeline: Optional**

- **CERT C++ Coding Standard**
  - Secure coding rules
  - Best practices
  
- **CWE (Common Weakness Enumeration)**
  - Categorized vulnerabilities
  - Awareness
  
- **CVE (Common Vulnerabilities and Exposures)**
  - Known vulnerabilities
  - Patching

---

## 22. NETWORKING

### 22.1 Network Basics
**Timeline: Tháng 11**

- **OSI Model Review**
  - 7 layers overview
  - TCP/IP stack
  
- **Socket Programming**
  - Socket API (POSIX)
  - Socket types (stream, datagram)
  - Socket creation
  - Binding
  - Listening
  - Accepting connections
  - Connecting
  - Sending/receiving data
  - Closing sockets
  
- **TCP vs UDP**
  - Connection-oriented vs connectionless
  - Reliability
  - Ordering
  - Use cases

### 22.2 Network Programming in C++
**Timeline: Tháng 11**

- **Boost.Asio**
  - Async I/O library
  - io_context
  - TCP sockets
  - UDP sockets
  - Timers
  - Strand (serialization)
  - Async operations
  - Callbacks và handlers
  - Coroutines support (C++20)
  
- **Simple TCP Server/Client**
  - Synchronous version
  - Asynchronous version
  - Echo server example
  - Chat server example
  
- **HTTP Clients**
  - libcurl (C library)
  - cpr (C++ wrapper for curl)
  - cpp-httplib (header-only)
  - Beast (Boost)
  
- **HTTP Servers**
  - Simple HTTP server
  - Beast (Boost)
  - Crow
  - Pistache
  
- **WebSockets**
  - WebSocket protocol
  - Beast WebSockets
  - Real-time communication

### 22.3 Higher-Level Protocols
**Timeline: Tháng 11-12**

- **REST APIs**
  - RESTful design
  - JSON parsing (nlohmann/json, RapidJSON)
  - HTTP methods (GET, POST, PUT, DELETE)
  
- **Serialization Protocols**
  - JSON
  - XML
  - Protocol Buffers
  - MessagePack
  - FlatBuffers
  
- **RPC Frameworks**
  - gRPC
  - Apache Thrift
  - Cap'n Proto

### 22.4 Network Security
**Timeline: Tháng 12**

- **SSL/TLS**
  - Encrypted communication
  - OpenSSL
  - Boost.Asio SSL support
  - Certificate validation
  
- **Authentication**
  - Basic authentication
  - Token-based (JWT)
  - OAuth

---

## 23. DATABASE INTEGRATION

### 23.1 SQL Basics
**Timeline: Tháng 8**

- **SQL Fundamentals**
  - SELECT, INSERT, UPDATE, DELETE
  - WHERE clause
  - JOIN operations
  - Aggregation (GROUP BY, HAVING)
  - Ordering và limiting results
  - Indexes
  - Transactions (BEGIN, COMMIT, ROLLBACK)
  
- **Database Design**
  - Normalization
  - Primary keys, foreign keys
  - Entity-relationship diagrams

### 23.2 C++ Database Connectors
**Timeline: Tháng 8-9**

- **SQLite**
  - Embedded database
  - sqlite3 C API
  - SQLiteCpp (C++ wrapper)
  - Prepared statements
  - Transactions
  - In-memory databases
  
- **MySQL/MariaDB**
  - MySQL Connector/C++
  - Connection pooling
  - Prepared statements
  - Error handling
  
- **PostgreSQL**
  - libpqxx
  - Connection management
  - Async queries
  
- **ODBC**
  - Cross-database connectivity
  - ODBC drivers
  - Portability

### 23.3 ORM Libraries
**Timeline: Tháng 9 (Optional)**

- **ODB**
  - Object-relational mapping
  - Code generation
  - Database schema
  
- **SOCI**
  - Database abstraction
  - Multiple backends
  - Type-safe queries
  
- **SQLpp11**
  - Embedded DSL
  - Type-safe SQL
  - Compile-time query checking

### 23.4 NoSQL Databases
**Timeline: Tháng 9 (Optional)**

- **MongoDB**
  - mongocxx driver
  - BSON documents
  
- **Redis**
  - hiredis, redis-plus-plus
  - Key-value store
  - Pub/sub
  
- **Embedded Databases**
  - LevelDB
  - RocksDB
  - LMDB

---

## 24. SERIALIZATION

### 24.1 Text-Based Formats
**Timeline: Tháng 7-8**

- **JSON**
  - nlohmann/json (popular, header-only)
  - RapidJSON (fast)
  - jsoncpp
  - Parsing và generation
  - Type conversions
  - Custom serialization
  
- **XML**
  - TinyXML-2
  - pugixml
  - RapidXML
  - Parsing DOM vs SAX
  - XPath queries
  
- **YAML**
  - yaml-cpp
  - Configuration files
  - Human-readable
  
- **TOML**
  - toml++
  - Configuration files
  - Simpler than YAML

### 24.2 Binary Formats
**Timeline: Tháng 8**

- **Protocol Buffers (protobuf)**
  - Google's format
  - Schema definition (.proto files)
  - Code generation
  - Efficient serialization
  - Cross-language
  
- **MessagePack**
  - Binary JSON alternative
  - Compact
  - Fast
  - msgpack-c library
  
- **FlatBuffers**
  - Google's format
  - Zero-copy deserialization
  - Schema evolution
  - Gaming và performance-critical
  
- **Cap'n Proto**
  - By protobuf author
  - Zero-copy
  - RPC support
  
- **BSON**
  - Binary JSON
  - MongoDB format

### 24.3 Custom Serialization
**Timeline: Tháng 8**

- **Manual Serialization**
  - Writing binary data
  - read()/write() with structs
  - Endianness handling
  - Versioning
  
- **Boost.Serialization**
  - Automatic serialization
  - Archive concept
  - XML, binary, text archives
  - Pointers và references
  
- **cereal**
  - Header-only
  - Flexible archives
  - Minimal boilerplate

---

## 25. CROSS-PLATFORM DEVELOPMENT

### 25.1 Platform Differences
**Timeline: Tháng 9**

- **Operating Systems**
  - Windows, Linux, macOS
  - OS-specific APIs
  - POSIX vs Windows API
  
- **Compiler Differences**
  - MSVC vs GCC vs Clang
  - Language extensions
  - Standard compliance
  
- **Endianness**
  - Big-endian vs little-endian
  - Network byte order
  - Byte swapping
  - Portable code

### 25.2 Conditional Compilation

**Timeline: Tháng 9**

* **Preprocessor Macros**
* `_WIN32`, `_WIN64` (Windows)
* `__linux__` (Linux)
* `__APPLE__` (macOS)
* `#ifdef`, `#elif`, `#endif` blocks


* **Feature Detection**
* `__has_include` (C++17)
* `__has_cpp_attribute` (C++20)
* Feature test macros (e.g., `__cpp_lib_filesystem`)


* **Build System Configuration**
* CMake `target_compile_definitions`
* Handling platform-specific sources in CMake
* Separating platform logic implementation



### 25.3 Cross-Platform Libraries

**Timeline: Tháng 9-10**

* **Boost Libraries**
* Boost.Asio (Networking)
* Boost.Filesystem (Pre-C++17)
* Boost.Beast (HTTP/WebSocket)
* Lịch sử và vai trò của Boost trong C++


* **POCO C++ Libraries**
* Networking, Database, XML/JSON
* Portable threading/process


* **Qt Core** (Non-GUI part)
* `QString`, `QList`, `QVector`
* Signals & Slots mechanism
* Event loop



---

## 26. LIBRARIES & FRAMEWORKS

### 26.1 GUI Development

**Timeline: Tháng 10**

* **Qt Framework**
* Qt Widgets vs Qt Quick (QML)
* Signals & Slots deep dive
* Meta-Object Compiler (MOC)
* Resource system (.qrc)
* Qt Creator IDE usage


* **wxWidgets**
* Native look and feel
* Event tables vs Bind
* Macro-based system


* **Dear ImGui**
* Immediate Mode GUI concept
* Debug tools, Game UIs
* Integration with OpenGL/DirectX/Vulkan
* State management in IMGUI


* **GTKmm**
* C++ wrapper for GTK+
* Linux-centric development



### 26.2 Graphics & Game Development

**Timeline: Tháng 10-11**

* **SDL2**
* Window management
* Input handling
* Basic 2D rendering
* Audio mixing


* **SFML**
* Object-oriented simple interface
* Graphics, Audio, Network, Window, System modules


* **Rendering APIs (Basics)**
* OpenGL (Modern OpenGL 3.3+)
* Vulkan (Low-level, high complexity)
* DirectX (Windows specific)
* Shaders (GLSL/HLSL)


* **Math Libraries**
* GLM (OpenGL Mathematics)
* Eigen (Linear algebra for graphics/physics)



### 26.3 Scientific & Math

**Timeline: Tùy nhu cầu**

* **Eigen**
* Matrix/Vector arithmetic
* Linear algebra solvers
* Header-only library


* **OpenCV**
* Computer Vision
* Image processing
* `cv::Mat` structure
* Video capture


* **Blaze**
* High performance math
* Expression templates optimization



### 26.4 Logging

**Timeline: Tháng 5 (Review)**

* **spdlog**
* Fast C++ logging library
* Format string syntax
* Async logging
* Console & File sinks
* Daily rotation


* **Google Glog**
* Severity levels
* Conditional logging (`LOG_IF`)
* Fatal error handling



---

## 27. CI/CD & DEVOPS

### 27.1 CI/CD Fundamentals

**Timeline: Tháng 11**

* **Concepts**
* Continuous Integration
* Continuous Delivery/Deployment
* Build pipelines
* Artifact management


* **GitHub Actions**
* Workflows YAML
* Matrix builds (Win, Linux, Mac)
* Caching dependencies (ccache, vcpkg)
* Running tests automatically


* **GitLab CI**
* `.gitlab-ci.yml`
* Runners
* Docker integration



### 27.2 Docker for C++

**Timeline: Tháng 11**

* **Containerization**
* Creating Dockerfiles for C++ apps
* Multi-stage builds (Build env vs Runtime env)
* Reducing image size (Alpine, Distroless)
* Cross-compilation with Docker


* **Environment Consistency**
* "It works on my machine" fix
* Dev containers (VS Code integration)



### 27.3 Static Analysis Automation

**Timeline: Tháng 11**

* **Integration**
* Running `clang-tidy` in CI pipeline
* Formatting check (`clang-format`)
* SonarQube integration
* Code coverage reports (Codecov)



---

## 28. SPECIALIZED DOMAINS

### 28.1 Game Development

**Timeline: Advanced**

* **Unreal Engine**
* C++ in Unreal vs Standard C++
* Garbage Collection in Unreal
* UObject architecture
* Blueprints vs C++
* Macros (`UPROPERTY`, `UFUNCTION`)


* **Custom Engines**
* ECS (Entity Component System) architecture
* Memory arenas
* Resource management



### 28.2 Embedded Systems

**Timeline: Advanced**

* **Constraints**
* Memory limitations
* No heap allocation rules
* Real-time requirements
* Exception handling issues


* **Hardware Interaction**
* Register manipulation
* `volatile` keyword usage
* Interrupt Service Routines (ISR)
* Bare-metal programming
* FreeRTOS with C++



### 28.3 High-Frequency Trading (HFT)

**Timeline: Expert**

* **Low Latency Techniques**
* Kernel bypass
* Zero-copy networking
* Lock-free data structures
* CPU affinity / Pinning
* Cache warming
* Avoiding virtual functions on hot paths



### 28.4 Audio & DSP

**Timeline: Advanced**

* **JUCE Framework**
* Audio plugins (VST/AU)
* Real-time audio processing thread constraints
* MIDI handling



---

## 29. BEST PRACTICES & GUIDELINES

### 29.1 Coding Standards

**Timeline: Ongoing**

* **C++ Core Guidelines**
* Maintained by Bjarne Stroustrup & Herb Sutter
* Philosophy of modern C++
* Safety profiles


* **Google C++ Style Guide**
* Common in industry
* Restrictions on C++ features (e.g., exceptions, streams)


* **LLVM Coding Standards**
* Useful for compiler dev references



### 29.2 Code Review

**Timeline: Ongoing**

* **What to look for**
* Ownership semantics
* Lifecycle issues
* Exception safety
* Const correctness
* Readability vs "Cleverness"


* **Refactoring**
* Identification of "Code Smells"
* Extract Method/Class
* Modernizing legacy code (C++98 to C++11/17)



### 29.3 Design Principles

**Timeline: Ongoing**

* **SOLID Principles**
* Single Responsibility
* Open/Closed
* Liskov Substitution
* Interface Segregation
* Dependency Inversion


* **KISS** (Keep It Simple, Stupid)
* **DRY** (Don't Repeat Yourself)
* **YAGNI** (You Aren't Gonna Need It)

---

## 30. SOFT SKILLS & PROFESSIONAL DEVELOPMENT

### 30.1 Communication

* Explaining memory leaks/pointers to non-technical stakeholders
* Writing documentation (Doxygen)
* Writing clear bug reports

### 30.2 Learning Resources

* **Conferences**: CppCon, C++Now, Meeting C++ (Watch on YouTube)
* **Books**:
* "Effective Modern C++" (Scott Meyers)
* "A Tour of C++" (Bjarne Stroustrup)
* "C++ Concurrency in Action" (Anthony Williams)


* **Blogs**: ISO C++, Fluent C++, Herb Sutter's blog

### 30.3 Community

* Stack Overflow (asking smart questions)
* Reddit r/cpp
* Open source contributions (finding "good first issue")

---

## 31. REAL-WORLD PROJECTS

### 31.1 Beginner Projects

* **Task Manager CLI**: CRUD operations, file I/O (JSON/TXT), command parsing.
* **Student Management System**: Classes, Vector, Sort/Search algorithms.
* **Number Guessing Game**: Random generation, loops, basic logic.

### 31.2 Intermediate Projects

* **Chat Application**: TCP/IP sockets, threading, basic UI (Qt or ImGui).
* **File Encryption Tool**: File streams, XOR or AES implementation, binary mode.
* **HTTP Server**: Implement a basic GET/POST handler using sockets, parsing HTTP headers.
* **Ray Tracer**: Math (vectors), graphics output (PPM format), classes/inheritance.

### 31.3 Advanced Projects

* **Game Engine Core**: ECS implementation, resource manager, rendering loop.
* **Database Engine**: B-Tree implementation, simple SQL parser, file paging.
* **Compiler/Interpreter**: Lexer, Parser, AST for a simple script language (using LLVM optionally).
* **High-Performance Logger**: Lock-free queue, async writing thread.

---

## 32. INTEROPERABILITY

### 32.1 C++ & Python

* **Python C API**
* Reference counting
* `PyObject`


* **pybind11** (Standard Industry Choice)
* Exposing C++ classes to Python
* Header-only
* Automatic type conversion
* Creating Python modules with C++


* **Embedding Python**
* Running Python interpreter inside C++

### 32.2 C++ & C

* **extern "C"**
* Name mangling prevention
* Calling C libraries from C++
* Exposing C++ API to C (wrapper functions)

* **ABI Compatibility**
* Struct layout compatibility
* Calling conventions

### 32.3 C++ & Java

* **JNI (Java Native Interface)**
* `native` keyword in Java
* `JNIEnv` pointer
* Type signatures
* Garbage collection interaction
* Performance overhead

### 32.4 C++ & C#

* **P/Invoke**
* Exporting DLL functions
* Marshaling data types


* **C++/CLI** (Windows only)
* Managed vs Unmanaged code
* Bridge between .NET and Native C++

### 32.5 WebAssembly (Wasm)

* **Emscripten**
* Compiling C++ to Wasm
* Running C++ in browser
* Binding C++ to JavaScript
* HTML5 interactions
