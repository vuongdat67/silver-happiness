# ROADMAP C# 

## GIAI ĐOẠN 1: NỀN TẢNG CƠ BẢN (2-3 tháng)

### Khởi đầu
- Cài đặt .NET SDK
- Visual Studio, Visual Studio Code, Rider
- .NET Framework vs .NET Core vs .NET 5/6/7/8
- Tạo project đầu tiên
- Console Application
- Solution và Project structure
- Build và Run
- Debugging basics
- NuGet Package Manager

### Cú pháp cơ bản
- Namespace declaration
- Using directives
- Main method
- Top-level statements (C# 9+)
- Comments: single-line, multi-line, XML documentation
- Code conventions
- Semicolons
- Case sensitivity

### Kiểu dữ liệu
- Value types vs Reference types
- Integers: byte, sbyte, short, ushort, int, uint, long, ulong
- Floating point: float, double, decimal
- Boolean: bool
- Character: char
- String: string
- Object type
- Dynamic type
- Nullable types: int?, bool?
- var keyword
- Default values
- Type casting và conversion

### Biến và Constants
- Variable declaration
- Initialization
- Constants với const
- Readonly fields
- Const vs readonly
- Implicit typing với var
- Variable scope
- Static variables

### Operators
- Arithmetic operators
- Comparison operators
- Logical operators: &&, ||, !
- Bitwise operators: &, |, ^, ~, <<, >>
- Assignment operators
- Null-coalescing: ??, ??=
- Conditional operator: ?:
- Increment/decrement: ++, --
- Type testing: is, as
- Operator precedence

### String Operations
- String concatenation
- String interpolation: $"Hello {name}"
- Verbatim strings: @""
- Raw string literals (C# 11+)
- String methods: Substring, Replace, Split, Join, Trim
- StringBuilder for efficiency
- String comparison
- String formatting
- Escape sequences

### Cấu trúc điều khiển

#### If Statements
- if, else if, else
- Nested if statements
- Pattern matching trong if (C# 7+)

#### Switch Statements
- Traditional switch
- Switch expressions (C# 8+)
- Pattern matching trong switch
- when clauses
- Discard pattern: _

#### Loops
- for loops
- while loops
- do-while loops
- foreach loops
- Break và continue
- Nested loops
- goto statement (tránh dùng)

### Arrays
- Single-dimensional arrays
- Multi-dimensional arrays
- Jagged arrays
- Array initialization
- Array methods: Sort, Reverse, IndexOf
- Array.Length property
- Iterating arrays

### Collections Basics
- List<T>
- Dictionary<TKey, TValue>
- Queue<T>
- Stack<T>
- HashSet<T>
- Collection initializers
- Index và Range operators (C# 8+)

### Methods
- Method declaration
- Parameters: value, ref, out, in
- Return values
- Method overloading
- Optional parameters
- Named arguments
- Expression-bodied members
- Local functions (C# 7+)
- Recursion

### Exception Handling
- try-catch-finally
- throw statement
- Exception hierarchy
- Common exceptions
- Custom exceptions
- Exception filters (C# 6+)
- when clause trong catch
- Best practices

### Namespaces
- Declaring namespaces
- Using directive
- Nested namespaces
- Global using directives (C# 10+)
- File-scoped namespaces (C# 10+)
- Aliases

## GIAI ĐOẠN 2: OBJECT-ORIENTED PROGRAMMING (3-4 tháng)

### Classes và Objects
- Class definition
- Fields
- Properties: get, set
- Auto-implemented properties
- Property initializers
- Init-only properties (C# 9+)
- Constructors
- Constructor chaining
- Destructors/Finalizers
- this keyword
- static members
- static constructors
- Constants và readonly fields
- Object initializers

### Encapsulation
- Access modifiers: public, private, protected, internal, protected internal, private protected
- Properties vs fields
- Data hiding
- Getters và setters

### Inheritance
- Base classes và derived classes
- : syntax for inheritance
- base keyword
- Method overriding: virtual, override
- Sealed classes và methods
- Abstract classes và methods
- Constructor inheritance
- Object class
- Type checking: is, as operators
- Type casting

### Polymorphism
- Method overloading (compile-time)
- Method overriding (runtime)
- Virtual methods
- Abstract methods
- Interface polymorphism
- Covariance và contravariance

### Interfaces
- Interface definition
- Implementing interfaces
- Explicit interface implementation
- Multiple interface inheritance
- Default interface methods (C# 8+)
- Interface properties
- Interface events
- Common interfaces: IEnumerable, IComparable, IDisposable, IEquatable

### Abstraction
- Abstract classes
- Interfaces
- Abstract methods
- When to use abstract vs interface

### Structs
- Struct definition
- Value type behavior
- Struct constructors
- Readonly structs
- Ref structs (C# 7.2+)
- Record structs (C# 10+)
- Struct vs class

### Enums
- Enum declaration
- Underlying types
- Enum methods
- Flags enums
- [Flags] attribute
- Enum parsing

### Operator Overloading
- Overloadable operators
- Operator methods
- Conversion operators: implicit, explicit
- User-defined conversions

### Indexers
- Indexer syntax
- this[] notation
- Multiple indexers
- Indexer access modifiers

### Events
- Event declaration
- EventHandler delegate
- Event subscription: +=, -=
- Raising events
- Custom event accessors
- Event patterns

### Delegates
- Delegate declaration
- Delegate instantiation
- Multicast delegates
- Anonymous methods
- Func<T> và Action<T>
- Predicate<T>
- Delegate combination

### Lambda Expressions
- Lambda syntax: =>
- Expression lambdas
- Statement lambdas
- Lambda với multiple parameters
- Captured variables (closures)
- Lambda trong LINQ

## GIAI ĐOẠN 3: NÂNG CAO (4-5 tháng)

### Generics
- Generic classes
- Generic methods
- Generic interfaces
- Generic delegates
- Type constraints: where
- Multiple type parameters
- Generic constraints: class, struct, new(), base class, interface
- Covariance: out keyword
- Contravariance: in keyword
- Default generic values

### Collections Advanced
- System.Collections.Generic
- IEnumerable<T>, ICollection<T>, IList<T>
- LinkedList<T>
- SortedList<T>, SortedDictionary<T>
- SortedSet<T>
- ConcurrentBag, ConcurrentQueue, ConcurrentStack
- ConcurrentDictionary
- BlockingCollection
- ImmutableList, ImmutableDictionary
- Collection interfaces
- Custom collections

### LINQ (Language Integrated Query)
- Query syntax
- Method syntax
- Deferred execution
- Immediate execution: ToList(), ToArray()
- Standard query operators
- Filtering: Where
- Projection: Select, SelectMany
- Ordering: OrderBy, OrderByDescending, ThenBy
- Grouping: GroupBy
- Joining: Join, GroupJoin
- Aggregation: Sum, Count, Average, Min, Max
- Set operations: Distinct, Union, Intersect, Except
- Element operations: First, Last, Single, ElementAt
- Quantifiers: All, Any, Contains
- Partitioning: Take, Skip, TakeWhile, SkipWhile
- LINQ to Objects
- LINQ to SQL (legacy)
- LINQ to XML
- LINQ to Entities (Entity Framework)
- Custom LINQ operators
- Expression trees

### Asynchronous Programming
- async và await keywords
- Task<T> và Task
- Async methods
- Async return types
- ConfigureAwait()
- Task.Run()
- Task.WhenAll(), Task.WhenAny()
- CancellationToken
- IAsyncEnumerable<T> (C# 8+)
- await foreach
- Async streams
- ValueTask<T>
- Asynchronous patterns
- Exception handling trong async

### Multithreading
- Thread class
- ThreadPool
- Thread synchronization
- lock statement
- Monitor class
- Mutex, Semaphore
- ReaderWriterLockSlim
- Interlocked operations
- volatile keyword
- Thread-local storage
- Parallel class
- Parallel.For, Parallel.ForEach
- PLINQ (Parallel LINQ)
- Task Parallel Library (TPL)
- Concurrent collections
- Thread safety

### File I/O
- File class: ReadAllText, WriteAllText
- FileInfo class
- Directory class
- DirectoryInfo class
- Path class
- StreamReader và StreamWriter
- FileStream
- BinaryReader và BinaryWriter
- Memory-mapped files
- Asynchronous file operations
- File permissions

### Serialization
- JSON serialization: System.Text.Json
- Newtonsoft.Json (Json.NET)
- XML serialization
- Binary serialization (obsolete)
- Custom serialization
- [JsonIgnore], [JsonPropertyName]
- Serialization attributes

### Reflection
- Type class
- Assembly class
- Getting type information
- Creating instances dynamically
- Invoking members
- Attributes
- Custom attributes
- Attribute targets
- Reading attributes
- Late binding
- Performance considerations

### Attributes
- Built-in attributes: [Obsolete], [Serializable], [DllImport]
- Custom attributes
- AttributeUsage
- Attribute parameters
- Named parameters
- Reflection với attributes

### Dynamic Programming
- dynamic type
- DynamicObject class
- ExpandoObject
- Dynamic Language Runtime (DLR)
- Late binding
- COM interop với dynamic

### Expression Trees
- Expression<T> type
- Building expression trees
- Compiling expressions
- Expression tree visitors
- LINQ query expression trees
- Dynamic query building

### Nullable Reference Types (C# 8+)
- Enabling nullable context
- Nullable annotations: ?
- Null-forgiving operator: !
- Nullable warnings
- [NotNull], [MaybeNull] attributes
- Nullable analysis

### Pattern Matching (C# 7-11)
- Type patterns
- Constant patterns
- Var patterns
- Discard patterns
- Property patterns
- Positional patterns
- Relational patterns
- Logical patterns: and, or, not
- List patterns (C# 11+)
- Switch expressions
- Pattern matching trong if statements

### Records (C# 9+)
- Record declaration
- Positional records
- With expressions
- Value equality
- Deconstruction
- Record inheritance
- Record structs

### Init-only Properties (C# 9+)
- init accessor
- Immutable objects
- Object initializers với init

### Target-typed New (C# 9+)
- new() expressions
- Simplified object creation

## GIAI ĐOẠN 4: .NET ECOSYSTEM (4-6 tháng)

### ASP.NET Core Basics
- MVC pattern
- Middleware pipeline
- Dependency injection
- Configuration
- Logging
- Environment variables
- appsettings.json
- Startup class (legacy)
- Program.cs minimal hosting

### ASP.NET Core MVC
- Controllers
- Actions
- Views: Razor syntax
- Models
- Model binding
- Model validation
- ViewModels
- Partial views
- Layout pages
- Razor Pages
- Tag Helpers
- View Components
- Areas
- Routing
- Filters: Action, Result, Exception, Resource, Authorization
- Model state
- TempData, ViewData, ViewBag

### ASP.NET Core Web API
- API Controllers
- RESTful principles
- HTTP verbs: GET, POST, PUT, DELETE, PATCH
- Action results
- Status codes
- Content negotiation
- API versioning
- Swagger/OpenAPI
- Model validation
- Custom model binders
- Formatters
- CORS
- Rate limiting
- API security

### Entity Framework Core
- DbContext
- DbSet<T>
- Code First approach
- Database First approach
- Migrations
- Model configuration: Fluent API
- Data annotations
- Relationships: one-to-one, one-to-many, many-to-many
- Navigation properties
- Lazy loading
- Eager loading: Include
- Explicit loading
- Change tracking
- CRUD operations
- LINQ queries
- Raw SQL queries
- Stored procedures
- Transactions
- Connection resiliency
- Query filters
- Shadow properties
- Owned types

### Blazor
- Blazor Server
- Blazor WebAssembly
- Blazor Hybrid
- Components
- Razor component syntax
- Data binding
- Event handling
- Component lifecycle
- Parameters
- Cascading parameters
- Forms và validation
- JavaScript interop
- Routing
- State management

### SignalR
- Real-time communication
- Hubs
- Clients
- Groups
- Broadcasting
- Connection management
- Transports: WebSockets, Server-Sent Events, Long Polling
- Authentication
- Scaling với Redis

### ASP.NET Core Identity
- User management
- Authentication
- Authorization
- Password hashing
- Claims
- Policies
- Roles
- External authentication: Google, Facebook, Microsoft
- Two-factor authentication
- JWT tokens
- Cookie authentication
- Identity Server
- OAuth 2.0
- OpenID Connect

### Testing

#### Unit Testing
- xUnit
- NUnit
- MSTest
- Test methods
- Assert methods
- Fact và Theory attributes
- Test fixtures
- Test setup và cleanup

#### Mocking
- Moq framework
- NSubstitute
- FakeItEasy
- Creating mocks
- Verifying calls
- Setup return values
- Argument matching

#### Integration Testing
- WebApplicationFactory
- Test server
- Testing APIs
- Database testing
- In-memory databases

#### UI Testing
- Selenium
- Playwright
- Specflow (BDD)

### Dependency Injection
- IServiceCollection
- Service lifetimes: Singleton, Scoped, Transient
- Constructor injection
- Service location anti-pattern
- Named services
- Factory patterns
- IServiceProvider
- Service descriptors
- Third-party containers: Autofac, Ninject

### Logging và Monitoring
- ILogger<T> interface
- Log levels
- Log categories
- Structured logging
- Serilog
- NLog
- Application Insights
- Logging providers
- Logging configuration
- Log filtering

### Configuration Management
- IConfiguration interface
- appsettings.json
- Environment-specific settings
- User secrets
- Azure Key Vault
- Options pattern
- IOptions<T>
- IOptionsSnapshot<T>
- IOptionsMonitor<T>
- Configuration validation

## GIAI ĐOẠN 5: ADVANCED .NET (4-6 tháng)

### Performance Optimization
- Benchmarking: BenchmarkDotNet
- Memory allocation optimization
- Span<T> và Memory<T>
- ArrayPool<T>
- Object pooling
- String interning
- StringBuilder optimization
- Lazy initialization: Lazy<T>
- Value types optimization
- Struct best practices
- Avoiding boxing
- SIMD với System.Numerics
- Hardware intrinsics

### Memory Management
- Stack vs Heap
- Garbage collection
- GC generations
- Large Object Heap (LOH)
- GC modes: Workstation vs Server
- Finalization
- IDisposable pattern
- using statement
- Using declarations (C# 8+)
- WeakReference
- Memory leaks detection
- Memory profiling tools
- PerfView
- dotMemory

### Microservices
- Microservices architecture
- Service communication
- API Gateway pattern
- Service discovery: Consul
- Dapr framework
- Circuit breaker: Polly
- Health checks
- Distributed transactions
- Saga pattern
- Event-driven architecture
- Message brokers: RabbitMQ, Kafka
- Docker containerization
- Kubernetes orchestration

### gRPC
- Protocol Buffers
- .proto files
- Service definitions
- Unary calls
- Server streaming
- Client streaming
- Bidirectional streaming
- Interceptors
- Deadlines và cancellation
- Error handling
- Authentication

### Message Queues
- RabbitMQ với MassTransit
- Azure Service Bus
- Amazon SQS
- Kafka với Confluent.Kafka
- Publishing messages
- Consuming messages
- Message routing
- Dead letter queues
- Retry policies

### Caching
- In-memory caching: IMemoryCache
- Distributed caching: IDistributedCache
- Redis caching: StackExchange.Redis
- Cache invalidation strategies
- Cache-aside pattern
- Output caching
- Response caching
- Cache dependencies

### Background Services
- IHostedService
- BackgroundService
- Hangfire for job scheduling
- Quartz.NET
- Worker Services
- Long-running tasks
- Graceful shutdown

### Security
- OWASP Top 10
- SQL injection prevention
- XSS prevention
- CSRF protection
- Anti-forgery tokens
- Content Security Policy
- HTTPS enforcement
- Data protection API
- Encryption: AES, RSA
- Hashing: SHA256, bcrypt
- Secure password storage
- Certificate handling
- Security headers

### Design Patterns
- Creational: Singleton, Factory, Abstract Factory, Builder, Prototype
- Structural: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
- Behavioral: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor
- Repository pattern
- Unit of Work pattern
- CQRS pattern
- Event Sourcing
- Specification pattern

### Clean Architecture
- Domain-Driven Design (DDD)
- Onion architecture
- Hexagonal architecture
- SOLID principles
- Single Responsibility
- Open/Closed
- Liskov Substitution
- Interface Segregation
- Dependency Inversion
- Clean Code principles
- Separation of Concerns

### Advanced EF Core
- Global query filters
- Owned entities
- Table splitting
- Query splitting
- Compiled queries
- Batch operations: EFCore.BulkExtensions
- Interceptors
- Value converters
- Performance optimization
- N+1 query problem
- Database providers
- In-memory database
- Cosmos DB provider

### SignalR Advanced
- Scaling với Redis backplane
- Azure SignalR Service
- Custom protocols
- Connection lifetime management
- Hub filters
- Strongly typed hubs
- MessagePack protocol

### GraphQL
- GraphQL concepts
- HotChocolate library
- Schema definition
- Queries
- Mutations
- Subscriptions
- DataLoader
- Filtering và sorting
- Pagination
- Authorization

### WebSockets
- System.Net.WebSockets
- WebSocket client
- WebSocket server
- Message framing
- Connection management
- SignalR vs raw WebSockets

## GIAI ĐOẠN 6: CHUYÊN MÔN HÓA

### Desktop Development

#### Windows Forms
- Form design
- Controls
- Event handling
- Data binding
- Custom controls
- MDI applications

#### WPF (Windows Presentation Foundation)
- XAML syntax
- Layout panels
- Controls
- Data binding
- Commands
- MVVM pattern
- Styles và templates
- Resources
- Animations
- Custom controls
- Dependency properties
- Routed events
- Triggers

#### WinUI 3
- Modern Windows apps
- Fluent Design System
- Controls
- XAML Islands
- Windows App SDK

#### MAUI (.NET Multi-platform App UI)
- Cross-platform development
- Single project structure
- Platform-specific code
- XAML layouts
- Data binding
- Navigation
- Shell
- Handlers
- iOS, Android, Windows, macOS support

### Cloud Development

#### Azure
- Azure App Service
- Azure Functions (Serverless)
- Azure SQL Database
- Cosmos DB
- Azure Storage: Blobs, Queues, Tables
- Azure Key Vault
- Application Insights
- Azure DevOps
- Azure AD authentication
- Azure Service Bus
- Azure Event Hubs
- Azure CDN
- ARM templates
- Bicep

#### AWS
- AWS Lambda với .NET
- S3 storage
- RDS databases
- DynamoDB
- CloudWatch
- AWS SDK for .NET
- Elastic Beanstalk
- API Gateway

### Game Development

#### Unity với C#
- Game objects
- Components
- Scripting
- Physics
- Animation
- UI system
- Coroutines
- ScriptableObjects
- Prefabs
- Asset management

### Machine Learning

#### ML.NET
- Model training
- Model evaluation
- Predictions
- AutoML
- Classification
- Regression
- Clustering
- Anomaly detection
- Image classification
- ONNX integration

### IoT Development
- .NET IoT libraries
- GPIO programming
- Sensor integration
- Raspberry Pi programming
- Azure IoT Hub
- IoT Edge

### Cross-Platform Development
- .NET MAUI
- Xamarin.Forms (legacy)
- Avalonia UI
- Uno Platform
- Blazor Hybrid

## GIAI ĐOẠN 7: MASTERY (liên tục)

### C# Language Features Deep Dive
- C# 7: Tuples, pattern matching, local functions, ref returns
- C# 8: Nullable reference types, async streams, default interface methods, indices and ranges
- C# 9: Records, init-only properties, top-level statements, target-typed new
- C# 10: Global usings, file-scoped namespaces, record structs, improved interpolation
- C# 11: Raw string literals, list patterns, required members, generic attributes
- C# 12: Primary constructors, collection expressions, inline arrays

### CLR Internals
- Common Language Runtime
- Just-In-Time compilation
- Native Image Generator (NGEN)
- IL (Intermediate Language)
- Assembly structure
- Assembly loading
- AppDomains (legacy)
- AssemblyLoadContext
- Type system
- Value types vs reference types internals
- Boxing và unboxing internals

### Advanced Debugging
- Visual Studio debugger
- Breakpoints: conditional, data
- Watch windows
- Immediate window
- Call stack analysis
- Multithreaded debugging
- Remote debugging
- Dump file analysis
- WinDbg
- dotnet-dump
- dotnet-trace
- Performance profiling

### Source Generators (C# 9+)
- Creating source generators
- ISourceGenerator interface
- IIncrementalGenerator (C# 10+)
- Roslyn APIs
- Syntax trees
- Semantic models
- Code generation scenarios
- Performance considerations

### Roslyn Compiler Platform
- Syntax API
- Semantic API
- Code analysis
- Code fixes
- Analyzers
- Creating custom analyzers
- Testing analyzers
- NuGet packaging

### Advanced Tooling
- dotnet CLI
- MSBuild
- NuGet advanced features
- EditorConfig
- Code style enforcement
- StyleCop analyzers
- Roslynator
- Sonar analyzers

### CI/CD
- Azure Pipelines
- GitHub Actions
- GitLab CI
- Jenkins với .NET
- Build automation
- Test automation
- Deployment strategies
- Blue-green deployment
- Canary releases
- Feature flags

### Code Quality
- Static code analysis
- Code metrics
- Cyclomatic complexity
- Code coverage tools
- SonarQube
- Code reviews
- Refactoring techniques
- Technical debt management

### Documentation
- XML documentation comments
- DocFX
- API documentation
- README best practices
- Architecture documentation
- Wiki maintenance

### Open Source Contribution
- Contributing to .NET runtime
- .NET Foundation projects
- Creating NuGet packages
- OSS licensing
- Community guidelines

### Staying Current
- .NET Blog
- C# language proposals
- .NET Community Standup
- Channel 9 videos
- Microsoft Learn
- Pluralsight courses
- .NET Conf
- Local .NET meetups
- Twitter .NET community
- Reddit r/dotnet, r/csharp
- Stack Overflow
- GitHub discussions

### Best Practices
- Coding standards
- Naming conventions
- SOLID principles application
- DRY, KISS, YAGNI
- Exception handling best practices
- Async best practices
- Resource disposal patterns
- Performance best practices
- Security best practices

### Books to Read
- C# in Depth - Jon Skeet
- CLR via C# - Jeffrey Richter
- Pro C# 10 với .NET 6 - Andrew Troelsen
- Clean Code - Robert C. Martin
- Design Patterns - Gang of Four
- Domain-Driven Design - Eric Evans
- Concurrency in C# Cookbook - Stephen Cleary

## LỘ TRÌNH HỌC TẬP ĐỀ XUẤT

**Tháng 1-3**: Giai đoạn 1 - Cú pháp cơ bản, types, control flow

**Tháng 4-7**: Giai đoạn 2 - OOP principles, classes, inheritance, interfaces

**Tháng 8-12**: Giai đoạn 3 - Generics, LINQ, async, collections advanced

**Tháng 13-18**: Giai đoạn 4 - ASP.NET Core, EF Core, Web APIs

**Tháng 19-24**: Giai đoạn 5 - Performance, microservices, advanced patterns

**Tháng 25+**: Giai đoạn 6-7 - Chuyên môn hóa theo career path

## TIPS ĐỂ MASTER C#

- Thực hành code mỗi ngày
- Đọc official documentation kỹ
- Xây dựng projects thực tế
- Tham gia .NET community
- Contribute to open source
- Follow C# language evolution
- Master async/await patterns
- Understand SOLID principles deeply
- Learn design patterns trong context
- Practice TDD/BDD
- Profile và optimize code
- Stay updated với .NET releases
- Watch Channel 9 videos
- Attend .NET Conf
- Read source code của popular libraries
- Use ReSharper hoặc Rider
- Master Visual Studio shortcuts
- Learn debugging techniques
- Understand CLR internals
- Practice code reviews
- Write clean, readable code
- Document your code well
- Test your code thoroughly
- Understand when to use which pattern
- Keep learning new technologies
- Teach others what you learn
- Build a portfolio
- Network với developers

Chúc bạn thành công trên con đường master C#!