# ROADMAP GOLANG 

## GIAI ĐOẠN 1: NỀN TẢNG CƠ BẢN (2-3 tháng)

### Khởi đầu
- Cài đặt Go: golang.org
- Thiết lập GOPATH và GOROOT
- Go modules và dependency management
- IDE setup: VS Code với Go extension, GoLand, Vim với vim-go
- Go workspace structure
- go build, go run, go install commands
- Hello World program
- Go formatting với gofmt
- Go documentation với godoc

### Cú pháp cơ bản
- Package declaration
- Import statements
- main package và main function
- Comments: single-line và multi-line
- Semicolons (automatic insertion)
- Code organization
- Exported vs unexported names (capitalization)

### Kiểu dữ liệu
- Basic types: int, int8, int16, int32, int64
- Unsigned integers: uint, uint8, uint16, uint32, uint64, uintptr
- Floating point: float32, float64
- Complex numbers: complex64, complex128
- Boolean: bool
- String: string
- Byte (alias for uint8)
- Rune (alias for int32, Unicode code points)
- Zero values
- Type conversions
- Type inference với :=

### Biến và Constants
- Variable declaration: var keyword
- Short variable declaration :=
- Multiple variable declaration
- Constants với const
- Iota enumerator
- Typed vs untyped constants
- Constant expressions

### Operators
- Arithmetic operators
- Comparison operators
- Logical operators: &&, ||, !
- Bitwise operators: &, |, ^, &^, <<, >>
- Address operators: & và *
- Assignment operators
- Operator precedence
- Increment và decrement: ++, --

### Cấu trúc điều khiển

#### If Statements
- Basic if syntax
- If với initialization statement
- If-else
- If-else if-else chains
- No parentheses around conditions

#### Switch Statements
- Expression switches
- Type switches
- Fallthrough keyword
- Switch without condition (like if-else chain)
- Multiple cases

#### For Loops
- Basic for loop
- For as while loop
- Infinite loops
- Range loops
- Break và continue
- Labels với break và continue
- Nested loops

### Functions
- Function declaration
- Parameters và return values
- Multiple return values
- Named return values
- Variadic functions
- Anonymous functions
- Function closures
- Functions as values
- Higher-order functions
- Defer statement
- Defer execution order
- Panic và recover

### Pointers
- Pointer basics
- & operator (address-of)
- * operator (dereference)
- Pointer to pointer
- Pointers vs values
- nil pointers
- Pointer arithmetic (không có trong Go)

### Structs
- Defining structs
- Struct literals
- Accessing fields
- Struct pointers
- Anonymous fields (embedding)
- Exported và unexported fields
- Struct tags
- Comparing structs
- Zero value of structs

### Arrays
- Array declaration
- Array initialization
- Array literals
- Accessing elements
- Array length với len()
- Multidimensional arrays
- Arrays are values (copied)
- Iterating arrays

### Slices
- Slice basics
- Creating slices from arrays
- Slice literals
- Length và capacity: len(), cap()
- Making slices với make()
- Appending to slices
- Copying slices
- Slice expressions
- nil slices vs empty slices
- Multi-dimensional slices
- Slices internals (pointer, length, capacity)

### Maps
- Map basics
- Creating maps với make()
- Map literals
- Adding và updating elements
- Retrieving values
- Checking existence
- Deleting elements với delete()
- Iterating maps với range
- Maps are reference types
- nil maps

### Range
- Range over arrays và slices
- Range over maps
- Range over strings (runes)
- Range over channels
- Ignoring values với _

### Strings
- String basics
- String immutability
- String indexing
- String iteration (bytes vs runes)
- String concatenation
- strings package
- String comparison
- UTF-8 encoding
- Rune literals
- Raw string literals

## GIAI ĐOẠN 2: TRUNG CẤP (3-4 tháng)

### Methods
- Method declaration
- Methods với pointer receivers
- Methods với value receivers
- Choosing receiver types
- Methods on non-struct types
- Method values và method expressions

### Interfaces
- Interface basics
- Implementing interfaces (implicit)
- Interface values
- Empty interface: interface{}
- Type assertions
- Type switches
- Interface composition
- Common interfaces: io.Reader, io.Writer, fmt.Stringer, error
- Interface satisfaction rules
- nil interface values

### Error Handling
- error interface
- Creating errors với errors.New()
- fmt.Errorf()
- Custom error types
- Error wrapping (Go 1.13+)
- errors.Is() và errors.As()
- Error handling patterns
- Sentinel errors
- Error types vs error values
- Best practices

### Packages
- Package structure
- Import paths
- Package naming conventions
- Internal packages
- Vendor directory
- Go modules: go.mod, go.sum
- Module versioning
- Semantic versioning
- go get, go mod tidy, go mod vendor
- Replace directives
- Workspace mode (Go 1.18+)

### Standard Library Essentials

#### fmt Package
- Print functions: Print, Println, Printf
- Scan functions
- Formatting verbs
- Custom formatting với Stringer interface

#### io Package
- io.Reader và io.Writer interfaces
- io.Copy()
- io.ReadAll() (ioutil deprecated)
- Working with streams

#### os Package
- File operations
- Opening và closing files
- Reading và writing files
- File info
- Environment variables
- Process information
- Working directories

#### bufio Package
- Buffered I/O
- Scanner
- Reader và Writer
- ReadLine, ReadString, ReadBytes

#### strings Package
- String manipulation functions
- Builder for efficient concatenation
- Reader

#### strconv Package
- String conversions
- ParseInt, ParseFloat
- Atoi, Itoa
- FormatInt, FormatFloat

#### time Package
- Time values
- Duration
- Timers và Tickers
- Sleep
- Time formatting và parsing
- Time zones

#### math Package
- Mathematical functions
- Constants
- Random numbers với math/rand

### File I/O
- Opening files
- Reading files: Read, ReadAll, Scanner
- Writing files: Write, WriteString
- File permissions
- Closing files properly với defer
- Working with directories
- Walking directories
- File path manipulation với path/filepath

### JSON Handling
- Encoding JSON: json.Marshal()
- Decoding JSON: json.Unmarshal()
- Struct tags for JSON
- Custom JSON marshaling
- Streaming JSON với Encoder/Decoder
- Working with unknown JSON structures

### Testing
- Writing tests: *_test.go files
- Test functions: func TestXxx(t *testing.T)
- Running tests: go test
- Table-driven tests
- Test coverage: go test -cover
- Benchmarks: func BenchmarkXxx(b *testing.B)
- Examples
- Test helpers
- Testing flags và options
- t.Run() for subtests
- Test fixtures

## GIAI ĐOẠN 3: NÂNG CAO (4-5 tháng)

### Goroutines
- What are goroutines
- Creating goroutines với go keyword
- Goroutine scheduling
- GOMAXPROCS
- Goroutine leaks
- Anonymous goroutine functions
- Waiting for goroutines
- Goroutine best practices

### Channels
- Channel basics
- Creating channels với make()
- Sending và receiving
- Buffered vs unbuffered channels
- Closing channels
- Range over channels
- Select statement
- Select với default case
- Nil channels
- Directional channels
- Channel of channels
- Channel axioms

### Concurrency Patterns
- Worker pools
- Pipeline pattern
- Fan-out, fan-in
- Done channel pattern
- Context cancellation
- Rate limiting
- Timeout patterns
- Debouncing và throttling
- Semaphores

### Sync Package
- sync.Mutex
- sync.RWMutex
- sync.WaitGroup
- sync.Once
- sync.Cond
- sync.Pool
- sync.Map
- Atomic operations với sync/atomic
- Memory ordering

### Context Package
- context.Context interface
- context.WithCancel()
- context.WithDeadline()
- context.WithTimeout()
- context.WithValue()
- Context best practices
- Passing context as first parameter
- Context cancellation propagation

### HTTP Programming

#### HTTP Server
- http.HandleFunc()
- http.Handle()
- Custom handlers
- http.Server struct
- ListenAndServe()
- Middleware pattern
- Request và Response
- Reading request body
- Setting headers
- Status codes
- Serving static files
- Template rendering

#### HTTP Client
- http.Get(), http.Post()
- Custom requests với http.NewRequest()
- http.Client configuration
- Timeouts
- Custom transports
- Handling redirects
- Cookies

### Templates
- text/template package
- html/template package
- Template syntax
- Template actions
- Template functions
- Template composition
- Template caching
- Auto-escaping trong html/template

### Database Access
- database/sql package
- Opening connections
- Connection pooling
- Prepared statements
- Query và QueryRow
- Exec
- Transactions
- Handling NULL values
- Context-aware operations
- Popular drivers: pq (PostgreSQL), go-sql-driver/mysql

### Regular Expressions
- regexp package
- Compiling patterns
- Matching
- Finding submatches
- Replacing
- Performance considerations

### Command-line Applications
- flag package
- Defining flags
- Parsing flags
- Custom flag types
- Building CLI tools
- Popular libraries: cobra, cli

### Reflection
- reflect package
- Type và Value
- Kind
- Inspecting types
- Calling methods dynamically
- Creating values
- Modifying values
- Reflection performance costs
- When to use reflection

### Generics (Go 1.18+)
- Type parameters
- Type constraints
- Generic functions
- Generic types
- Type inference
- Type sets trong interfaces
- Comparable constraint
- any và comparable built-in types
- Instantiation
- Common generic patterns

## GIAI ĐOẠN 4: CHUYÊN NGÀNH (4-6 tháng)

### Web Frameworks và Libraries

#### Gin Framework
- Routing
- Middleware
- Request binding
- Validation
- JSON rendering
- File uploads
- Grouping routes
- Custom validators

#### Echo Framework
- Request handling
- Response rendering
- Middleware
- Data binding
- Validation
- Error handling

#### Fiber Framework
- Express-like syntax
- Performance optimization
- WebSocket support
- Middleware

#### Chi Router
- Lightweight routing
- Middleware chains
- Context values
- URL parameters

#### Standard library approach
- Building APIs với net/http
- Custom middleware
- Routing strategies

### RESTful API Development
- REST principles
- HTTP methods semantics
- Status codes
- API versioning
- Request validation
- Response formatting
- HATEOAS
- API documentation
- Swagger/OpenAPI
- Authentication: JWT, OAuth2
- Rate limiting
- CORS handling

### gRPC
- Protocol Buffers
- .proto file syntax
- Generating Go code từ protobuf
- Service definitions
- Unary RPCs
- Server streaming
- Client streaming
- Bidirectional streaming
- Error handling trong gRPC
- Interceptors (middleware)
- Metadata
- Deadlines và timeouts
- Load balancing

### GraphQL
- GraphQL concepts
- gqlgen library
- Schema definition
- Resolvers
- Queries và mutations
- Subscriptions
- DataLoader pattern
- Authentication
- Error handling

### Microservices Architecture
- Service design principles
- Service discovery
- API Gateway pattern
- Circuit breaker: gobreaker
- Service mesh basics
- Distributed tracing
- Health checks
- Graceful shutdown

### Message Queues và Event Streaming

#### RabbitMQ
- AMQP protocol
- Exchanges, queues, bindings
- Publishing messages
- Consuming messages
- amqp091-go library

#### Kafka
- Kafka concepts
- Producers
- Consumers
- Consumer groups
- sarama library
- confluent-kafka-go

#### NATS
- Pub/sub messaging
- Request-reply
- Queue subscriptions

### Databases

#### SQL Databases
- GORM ORM
- sqlx for enhanced database/sql
- Migrations: golang-migrate
- Query builders
- Database testing strategies

#### NoSQL Databases
- MongoDB: mongo-go-driver
- Redis: go-redis
- Cassandra: gocql
- Elasticsearch: olivere/elastic

### Caching
- In-memory caching
- go-cache library
- bigcache, freecache
- Redis caching
- Cache invalidation strategies
- Cache-aside pattern
- Write-through, write-behind

### Authentication và Authorization
- JWT implementation
- OAuth2 flows
- Session management
- Password hashing với bcrypt
- Role-based access control (RBAC)
- Attribute-based access control (ABAC)
- API keys
- Rate limiting per user

### WebSockets
- gorilla/websocket package
- WebSocket handshake
- Sending và receiving messages
- Handling connections
- Broadcasting
- Room pattern
- Heartbeat/ping-pong

### Testing Advanced

#### Testing Frameworks
- testify/assert
- testify/mock
- testify/suite
- gomega
- ginkgo (BDD)

#### Test Strategies
- Unit testing
- Integration testing
- End-to-end testing
- Mocking dependencies
- Test fixtures
- Test databases
- httptest package
- Golden files testing

### Logging
- Standard log package
- Structured logging
- logrus library
- zap library (high performance)
- zerolog
- Log levels
- Log rotation
- Centralized logging

### Configuration Management
- Environment variables
- Configuration files: JSON, YAML, TOML
- viper library
- godotenv
- Feature flags
- Configuration validation
- Hot reload

## GIAI ĐOẠN 5: CHUYÊN SÂU (4-6 tháng)

### Performance Optimization

#### Profiling
- pprof tool
- CPU profiling
- Memory profiling
- Goroutine profiling
- Block profiling
- Mutex profiling
- Trace tool
- Analyzing profiles

#### Optimization Techniques
- Reducing allocations
- Object pooling với sync.Pool
- String concatenation optimization
- Slice preallocation
- Map preallocation
- Avoiding reflection
- Inline functions
- Escape analysis
- Compiler optimizations
- Benchmarking techniques

### Memory Management
- Stack vs heap allocation
- Escape analysis
- Garbage collection
- GC tuning: GOGC
- Memory leaks detection
- Runtime statistics
- Memory profiling
- Finalizers

### Design Patterns trong Go
- Creational patterns: Singleton, Factory, Builder
- Structural patterns: Adapter, Decorator, Proxy
- Behavioral patterns: Strategy, Observer, Command
- Concurrency patterns
- Go-specific idioms
- Functional options pattern
- Error handling patterns

### Code Organization
- Project layout standards
- Domain-driven design
- Hexagonal architecture
- Clean architecture
- Package design principles
- Dependency injection
- Wire dependency injection
- Fx framework

### Advanced Concurrency
- Semaphore implementation
- Barrier synchronization
- Spinlocks
- Lock-free programming với atomics
- Compare-and-swap operations
- Memory models
- Happens-before relationships
- Data races detection với -race flag

### CGO
- Calling C code từ Go
- Calling Go code từ C
- C types trong Go
- Memory management với CGO
- Performance implications
- Build constraints
- Cross-compilation với CGO

### Assembly trong Go
- Go assembly syntax
- Writing assembly functions
- Performance-critical code
- Inspecting generated assembly
- go tool objdump
- go tool compile -S

### Build và Deployment

#### Build Process
- Build tags
- Build constraints
- Cross-compilation: GOOS, GOARCH
- Build flags: -ldflags, -tags
- Reducing binary size
- Static linking
- Reproducible builds

#### Docker
- Writing Dockerfiles cho Go
- Multi-stage builds
- Minimal images với scratch
- Alpine images
- Distroless images
- Docker compose

#### CI/CD
- GitHub Actions
- GitLab CI
- Jenkins
- CircleCI
- Automated testing
- Code coverage reporting
- Linting trong CI
- Deployment automation

### Security
- Input validation
- SQL injection prevention
- XSS prevention
- CSRF protection
- Secure headers
- TLS/SSL configuration
- Secrets management
- Dependency scanning
- gosec security scanner
- OWASP guidelines

### Observability

#### Metrics
- Prometheus integration
- Custom metrics
- prometheus/client_golang
- Metric types: Counter, Gauge, Histogram, Summary
- Metric naming conventions

#### Tracing
- OpenTelemetry
- Jaeger integration
- Distributed tracing
- Span và trace context
- Trace sampling

#### Monitoring
- Health check endpoints
- Readiness và liveness probes
- Application metrics
- Runtime metrics
- Alerting strategies

### Advanced Testing
- Fuzzing (Go 1.18+)
- Property-based testing
- Mutation testing
- Chaos engineering
- Load testing: vegeta, k6
- Stress testing
- Contract testing
- Snapshot testing

### Code Quality

#### Static Analysis
- go vet
- staticcheck
- golangci-lint
- gosimple
- unused
- ineffassign
- errcheck

#### Code Review
- Review checklist
- Common pitfalls
- Idiomatic Go
- Performance considerations

### Documentation
- Writing godoc comments
- Documentation conventions
- Package-level documentation
- Example functions
- Testable examples
- Documentation tools
- README best practices

## GIAI ĐOẠN 6: CHUYÊN MÔN HOÁ NÂNG CAO

### Cloud Native Development

#### Kubernetes
- Client-go library
- Custom controllers
- Operators
- Custom Resource Definitions (CRDs)
- Kubernetes API interaction
- Informers và listers
- Workqueue
- Leader election
- Kubebuilder
- Operator SDK

#### Service Mesh
- Istio integration
- Linkerd
- Consul Connect
- Envoy proxy

#### Serverless
- AWS Lambda với Go
- Google Cloud Functions
- Azure Functions
- OpenFaaS
- Knative

### Distributed Systems
- Consensus algorithms: Raft implementation
- Distributed locks
- Leader election
- Service discovery: Consul, etcd
- Configuration management
- Distributed caching
- Eventual consistency
- CAP theorem implications
- Distributed tracing

### Network Programming
- TCP server/client
- UDP server/client
- Raw sockets
- Network protocols implementation
- Packet parsing
- Custom protocols
- Load balancers implementation
- Proxy servers

### CLI Tools Development
- cobra framework
- cli framework
- Argument parsing
- Interactive CLIs
- Progress bars
- Terminal UI: tview, bubbletea
- Colors và formatting
- Cross-platform considerations

### Blockchain và Cryptocurrency
- Blockchain basics trong Go
- Smart contracts interaction
- Ethereum client: go-ethereum
- Wallet implementation
- Cryptocurrency APIs

### Game Development
- Ebiten game engine
- Pixel game library
- Game loops
- Collision detection
- Sprite management
- Sound

### Systems Programming
- Low-level I/O
- System calls
- Process management
- Signal handling
- File systems interaction
- Memory-mapped files
- Unix domain sockets
- Linux-specific features

### Compilers và Interpreters
- Lexical analysis
- Parsing: recursive descent, Pratt parsing
- Abstract syntax trees
- Type checking
- Code generation
- LLVM bindings
- Virtual machines

### Data Processing
- CSV processing: encoding/csv
- XML processing: encoding/xml
- Excel files: excelize
- PDF generation: gofpdf
- Image processing: image packages
- Video processing
- ETL pipelines

### Machine Learning
- Gonum for numerical computing
- golearn for machine learning
- Gorgonia for deep learning
- TensorFlow Go bindings
- ONNX runtime
- Model serving
- Data preprocessing

## GIAI ĐOẠN 7: MASTERY (liên tục)

### Go Internals
- Go runtime source code
- Scheduler implementation
- Memory allocator
- Garbage collector internals
- Channel implementation
- Interface internals
- Slice internals
- Map internals
- String internals
- Go compiler: gc
- Go linker

### Advanced Topics
- Compiler directives
- Compiler intrinsics
- Build modes: plugin, c-shared, c-archive
- Go tool internals
- AST manipulation với go/ast
- Code generation với go/format
- go/types for type checking
- go/parser

### Contributing to Go
- Go source code structure
- Building Go từ source
- Contributing guidelines
- Proposal process
- Code review trong Go project
- Testing Go itself
- Understanding issues
- Writing CLs (change lists)

### Go Community
- Go Forums
- Gophers Slack
- Reddit r/golang
- GitHub discussions
- Go meetups
- GopherCon conferences
- Local Go communities

### Best Practices
- Effective Go guidelines
- Code Review Comments
- Go Proverbs
- Common mistakes to avoid
- Performance tips
- Security best practices
- Error handling philosophy
- Interface design
- API design
- Naming conventions
- Package organization

### Open Source Contribution
- Finding projects
- Understanding codebases
- Making contributions
- Writing good issues
- Pull request etiquette
- Maintaining projects
- Licensing considerations

### Interview Preparation
- Go-specific interview questions
- Algorithm implementation trong Go
- System design với Go
- Concurrency problems
- Code review scenarios
- Project discussions
- LeetCode trong Go

### Staying Current
- Go blog
- Go release notes
- Proposal repository
- golang-nuts mailing list
- Go Weekly newsletter
- Twitter Go community
- YouTube Go channels
- Podcasts: Go Time
- Books: The Go Programming Language, Concurrency in Go, Go in Action

### Teaching và Mentoring
- Writing technical articles
- Creating tutorials
- Recording screencasts
- Speaking at meetups
- Mentoring beginners
- Code review skills
- Building learning resources

## LỘ TRÌNH HỌC TẬP ĐỀ XUẤT

**Tháng 1-3**: Giai đoạn 1 - Cú pháp, data structures, functions, basics

**Tháng 4-7**: Giai đoạn 2 - Interfaces, packages, standard library, testing

**Tháng 8-12**: Giai đoạn 3 - Concurrency, HTTP, databases, advanced concepts

**Tháng 13-18**: Giai đoạn 4 - Chọn chuyên ngành (Web/Microservices/CLI)

**Tháng 19-24**: Giai đoạn 5 - Performance, design patterns, advanced testing

**Tháng 25+**: Giai đoạn 6-7 - Chuyên sâu theo career path và mastery

## TIPS ĐỂ MASTER GOLANG

- Đọc Effective Go document kỹ
- Code mỗi ngày với Go
- Focus vào simplicity và readability
- Master concurrency patterns sớm
- Đọc standard library source code
- Contribute to open source Go projects
- Understand Go philosophy: less is more
- Avoid over-engineering
- Write tests first
- Use gofmt, go vet, golint consistently
- Read Go blog articles regularly
- Practice concurrent programming
- Build CLI tools for practice
- Learn from stdlib implementation
- Join Go communities
- Watch GopherCon talks
- Review Go source code
- Understand goroutines và channels deeply
- Profile và optimize code
- Keep dependencies minimal
- Embrace Go idioms
- Understand when not to use Go
- Learn from mistakes
- Teach others what you learn

Chúc bạn thành công trên con đường master Golang!