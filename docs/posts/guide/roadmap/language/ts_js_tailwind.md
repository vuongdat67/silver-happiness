# ROADMAP TYPESCRIPT/JAVASCRIPT + TAILWIND - FRONTEND DEVELOPMENT

## GIAI ĐOẠN 1: NỀN TẢNG JAVASCRIPT (2-3 tháng)

### Khởi đầu
- Browser DevTools (Console, Elements, Network, Sources)
- Code editors: VS Code, WebStorm
- Extensions: Prettier, ESLint, Live Server
- Node.js và npm cài đặt
- Package.json basics
- Running JavaScript: Browser, Node.js
- Console.log debugging

### JavaScript Fundamentals

#### Cú pháp cơ bản
- Statements và expressions
- Semicolons (ASI - Automatic Semicolon Insertion)
- Comments: single-line, multi-line
- Strict mode: 'use strict'
- Code blocks
- Whitespace và indentation

#### Variables và Data Types
- var, let, const
- Hoisting
- Scope: global, function, block
- Primitive types: string, number, boolean, null, undefined, symbol, bigint
- typeof operator
- Type coercion
- Truthy và falsy values
- null vs undefined

#### Operators
- Arithmetic operators
- Comparison operators: ==, ===, !=, !==
- Logical operators: &&, ||, !
- Nullish coalescing: ??
- Optional chaining: ?.
- Ternary operator: ?:
- Assignment operators
- Spread operator: ...
- Rest operator: ...
- Comma operator
- Operator precedence

#### Strings
- String literals: single, double quotes
- Template literals: backticks
- String interpolation: ${expression}
- String methods: charAt, slice, substring, toLowerCase, toUpperCase, trim, split, replace, includes, startsWith, endsWith
- String concatenation
- Multi-line strings
- Unicode và escape sequences

#### Numbers
- Number literals
- Floating point precision
- Infinity, -Infinity
- NaN (Not a Number)
- Number methods: toFixed, toPrecision, toString
- Math object: Math.floor, Math.ceil, Math.round, Math.random, Math.max, Math.min
- parseInt, parseFloat
- isNaN, isFinite

#### Control Flow
- if, else if, else
- Nested if statements
- switch statements
- for loops
- while loops
- do-while loops
- for...in loops (objects)
- for...of loops (iterables)
- break và continue
- Labeled statements

#### Functions
- Function declarations
- Function expressions
- Arrow functions: =>
- Parameters và arguments
- Default parameters
- Rest parameters: ...args
- Return statements
- Function scope
- Immediately Invoked Function Expressions (IIFE)
- Function hoisting
- Anonymous functions
- Named function expressions

#### Arrays
- Array creation: [], new Array()
- Array indexing
- Array length
- Array methods:
  - Adding/removing: push, pop, shift, unshift, splice
  - Searching: indexOf, lastIndexOf, includes, find, findIndex
  - Iteration: forEach, map, filter, reduce, some, every
  - Transformation: slice, concat, join, reverse, sort
  - ES6+: flat, flatMap, from, of
- Multi-dimensional arrays
- Array destructuring
- Spread với arrays

#### Objects
- Object literals
- Property access: dot notation, bracket notation
- Adding và deleting properties
- Computed property names
- Property shorthand
- Method shorthand
- Object destructuring
- Nested objects
- Object.keys, Object.values, Object.entries
- Object.assign
- Object spread: {...obj}
- this keyword trong objects

### DOM Manipulation

#### Selecting Elements
- getElementById
- getElementsByClassName
- getElementsByTagName
- querySelector
- querySelectorAll
- Element relationships: parentElement, children, nextElementSibling

#### Modifying Elements
- innerHTML, textContent, innerText
- setAttribute, getAttribute, removeAttribute
- classList: add, remove, toggle, contains
- style property
- Creating elements: createElement, createTextNode
- appendChild, append, prepend, insertBefore
- remove, removeChild
- cloneNode

#### Events
- addEventListener, removeEventListener
- Event types: click, input, change, submit, keydown, keyup, mouseenter, mouseleave
- Event object
- event.target vs event.currentTarget
- preventDefault
- stopPropagation
- Event delegation
- Event bubbling và capturing

#### Forms
- Form submission
- Input values
- Form validation
- FormData API

### Browser APIs
- localStorage và sessionStorage
- JSON.stringify, JSON.parse
- setTimeout, setInterval, clearTimeout, clearInterval
- fetch API basics
- Console methods: log, error, warn, table, dir
- Window object
- Document object
- Location object
- History API

## GIAI ĐOẠN 2: JAVASCRIPT NÂNG CAO (3-4 tháng)

### Advanced Functions

#### Closures
- Lexical scope
- Function factories
- Private variables
- Module pattern
- Closure performance

#### Higher-Order Functions
- Functions as arguments
- Functions as return values
- Callback functions
- Function composition
- Currying
- Partial application

#### this Keyword
- Global context
- Object method
- Constructor function
- Arrow functions và this
- call, apply, bind
- Explicit binding
- Implicit binding
- Hard binding

### Object-Oriented JavaScript

#### Constructor Functions
- new keyword
- Constructor pattern
- instanceof operator

#### Prototypes
- Prototype chain
- __proto__ vs prototype
- Object.create
- Object.getPrototypeOf
- Object.setPrototypeOf
- Inheritance với prototypes
- Prototype methods
- Own properties vs inherited properties

#### ES6 Classes
- class keyword
- constructor method
- Instance methods
- Static methods
- Getters và setters
- Private fields: #
- extends keyword
- super keyword
- Method overriding
- Class expressions
- Class vs constructor functions

### Asynchronous JavaScript

#### Callbacks
- Callback pattern
- Callback hell
- Error-first callbacks

#### Promises
- Promise creation
- Promise states: pending, fulfilled, rejected
- then, catch, finally
- Promise chaining
- Error handling
- Promise.all
- Promise.race
- Promise.allSettled
- Promise.any
- Creating custom promises

#### Async/Await
- async functions
- await keyword
- Error handling với try-catch
- Async function return values
- Top-level await
- Parallel execution với Promise.all
- Sequential vs parallel

#### Event Loop
- Call stack
- Web APIs
- Callback queue
- Event loop mechanism
- Microtasks vs macrotasks
- requestAnimationFrame

### Modules
- ES6 modules: import, export
- Named exports
- Default exports
- Re-exporting
- Dynamic imports
- CommonJS: require, module.exports (Node.js)
- Module bundlers preview

### Error Handling
- try-catch-finally
- throw statement
- Error object
- Custom errors
- Error types: TypeError, ReferenceError, SyntaxError
- Stack traces
- Error boundaries concept

### Advanced Arrays và Objects
- Spread operator advanced
- Rest parameters advanced
- Destructuring advanced: renaming, defaults, nested
- Array.from use cases
- Object.freeze, Object.seal
- Object.defineProperty
- Getters và setters
- Symbols
- WeakMap và WeakSet
- Map và Set vs Objects/Arrays

### Regular Expressions
- Regex literals
- RegExp constructor
- Pattern matching
- Flags: g, i, m, s, u, y
- Character classes
- Quantifiers
- Groups và backreferences
- Lookahead và lookbehind
- String methods: match, search, replace, split, test, exec

### Functional Programming Concepts
- Pure functions
- Immutability
- Side effects
- Function composition
- Point-free style
- Declarative vs imperative
- Array methods như functional tools

### Advanced Topics
- Generators: function*, yield
- Iterators: Symbol.iterator
- Proxy và Reflect
- Web Workers
- Service Workers basics
- IndexedDB
- Intersection Observer
- Mutation Observer
- Performance API
- requestIdleCallback

## GIAI ĐOẠN 3: TYPESCRIPT (3-4 tháng)

### TypeScript Basics
- TypeScript vs JavaScript
- Installing TypeScript: npm install -g typescript
- tsconfig.json
- Compiling: tsc command
- Type annotations
- Type inference
- TypeScript Playground

### Basic Types
- string, number, boolean
- Arrays: type[]
- Tuples: [string, number]
- Enums
- any type
- unknown type
- void
- null và undefined
- never type
- object type

### Type Annotations
- Variable annotations
- Function parameter types
- Function return types
- Optional parameters: ?
- Default parameters
- Rest parameters với types

### Interfaces
- Interface declaration
- Optional properties
- Readonly properties
- Index signatures
- Function types
- Extending interfaces
- Implementing interfaces trong classes
- Interface vs Type aliases

### Type Aliases
- type keyword
- Union types: |
- Intersection types: &
- Literal types
- Type aliases vs interfaces

### Advanced Types
- Union types
- Intersection types
- Type guards: typeof, instanceof
- Type assertions: as, <>
- Discriminated unions
- Nullable types
- Non-null assertion operator: !
- Type narrowing
- Branded types

### Functions trong TypeScript
- Function type expressions
- Call signatures
- Construct signatures
- Generic functions
- Optional parameters
- Function overloading
- this parameters

### Classes trong TypeScript
- Class properties
- Access modifiers: public, private, protected
- Readonly modifier
- Parameter properties
- Getters và setters
- Abstract classes
- Constructor overloading
- Static members
- Implements clause

### Generics
- Generic functions
- Generic interfaces
- Generic classes
- Generic constraints: extends
- Using type parameters trong generic constraints
- Generic utility types
- Default generic parameters

### Utility Types
- Partial<T>
- Required<T>
- Readonly<T>
- Record<K, T>
- Pick<T, K>
- Omit<T, K>
- Exclude<T, U>
- Extract<T, U>
- NonNullable<T>
- ReturnType<T>
- Parameters<T>
- ConstructorParameters<T>
- Awaited<T>

### Modules trong TypeScript
- ES6 modules với types
- Import types
- Export types
- Type-only imports: import type
- Namespace (legacy)
- Declaration files: .d.ts
- @types packages
- Triple-slash directives

### Advanced TypeScript
- Mapped types
- Conditional types
- Template literal types
- Recursive types
- Type inference với infer
- keyof operator
- typeof operator
- Indexed access types
- satisfies operator (TS 4.9+)

### TypeScript Configuration
- tsconfig.json options
- strict mode
- Compiler options: target, module, lib
- Path mapping
- Project references
- Type checking options
- Module resolution

### TypeScript với React (preview)
- Component props typing
- Event types
- Ref types
- Children types
- Hook types

## GIAI ĐOẠN 4: MODERN FRONTEND TOOLS (2-3 tháng)

### Package Managers
- npm: install, update, uninstall
- package.json: dependencies, devDependencies, scripts
- package-lock.json
- Semantic versioning
- npm scripts
- npx
- yarn: install, add, remove
- pnpm: faster alternative

### Build Tools

#### Vite
- Project setup: npm create vite@latest
- Dev server
- Hot Module Replacement (HMR)
- Build process
- Environment variables
- Plugins
- Config: vite.config.ts

#### Webpack (legacy but important)
- Entry, output
- Loaders
- Plugins
- webpack.config.js
- Dev server
- Code splitting

### Module Bundlers
- Rollup
- Parcel
- esbuild
- SWC

### Transpilers
- Babel
- TypeScript compiler
- Preset configurations

### Code Quality Tools

#### ESLint
- Installation
- .eslintrc configuration
- Rules configuration
- Extends và plugins
- eslint-plugin-react
- @typescript-eslint
- Auto-fix
- Integrating với IDE

#### Prettier
- Installation
- .prettierrc configuration
- Format on save
- ESLint integration
- Pre-commit hooks

#### Git Hooks
- Husky
- lint-staged
- Pre-commit hooks
- Commit linting

### Version Control
- Git basics: init, add, commit, push, pull
- Branching: branch, checkout, merge
- GitHub workflow
- Pull requests
- Git conventions
- .gitignore
- Semantic commit messages

## GIAI ĐOẠN 5: TAILWIND CSS (2-3 tháng)

### Tailwind Fundamentals

#### Setup
- Installation: npm install -D tailwindcss
- tailwind.config.js
- PostCSS configuration
- @tailwind directives
- JIT mode (default)
- CDN (learning only)

#### Core Concepts
- Utility-first approach
- Responsive design
- Mobile-first breakpoints: sm, md, lg, xl, 2xl
- Hover, focus, và state variants
- Dark mode: dark:
- Arbitrary values: [custom]

### Layout

#### Flexbox
- display: flex, inline-flex
- flex-direction: flex-row, flex-col, flex-row-reverse, flex-col-reverse
- flex-wrap: flex-wrap, flex-nowrap, flex-wrap-reverse
- justify-content: justify-start, justify-center, justify-between, justify-around, justify-evenly
- align-items: items-start, items-center, items-end, items-baseline, items-stretch
- align-content
- flex-grow, flex-shrink: flex-1, flex-auto, flex-none
- order: order-first, order-last, order-{n}
- gap: gap-{size}

#### Grid
- display: grid, inline-grid
- grid-template-columns: grid-cols-{n}
- grid-template-rows: grid-rows-{n}
- grid-column: col-span-{n}, col-start-{n}, col-end-{n}
- grid-row: row-span-{n}, row-start-{n}, row-end-{n}
- gap: gap-{size}, gap-x-{size}, gap-y-{size}
- justify-items, align-items
- justify-content, align-content
- auto-flow: grid-flow-row, grid-flow-col

#### Container
- container class
- Container centering
- Responsive containers

#### Box Model
- width: w-{size}, w-full, w-screen, w-auto
- height: h-{size}, h-full, h-screen, h-auto
- min-width, max-width
- min-height, max-height
- padding: p-{size}, px-, py-, pt-, pr-, pb-, pl-
- margin: m-{size}, mx-, my-, mt-, mr-, mb-, ml-, m-auto
- Space between: space-x-{size}, space-y-{size}

#### Position
- position: static, fixed, absolute, relative, sticky
- top, right, bottom, left: top-{size}, -top-{size}
- z-index: z-{value}
- inset: inset-{size}

#### Display
- display: block, inline-block, inline, flex, grid, hidden
- Visibility: visible, invisible
- overflow: overflow-auto, overflow-hidden, overflow-scroll
- overflow-x, overflow-y

### Typography

#### Font
- font-family: font-sans, font-serif, font-mono
- font-size: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, ... text-9xl
- font-weight: font-thin, font-light, font-normal, font-medium, font-semibold, font-bold, font-extrabold, font-black
- font-style: italic, not-italic
- line-height: leading-{size}
- letter-spacing: tracking-{size}
- text-transform: uppercase, lowercase, capitalize, normal-case
- text-decoration: underline, line-through, no-underline
- text-align: text-left, text-center, text-right, text-justify
- text-color: text-{color}-{shade}
- text-overflow: truncate, text-ellipsis, text-clip
- word-break: break-normal, break-words, break-all
- whitespace: whitespace-normal, whitespace-nowrap, whitespace-pre

### Backgrounds

#### Background Color
- bg-{color}-{shade}
- bg-transparent
- bg-opacity-{value}

#### Background Image
- bg-gradient-to-{direction}
- from-{color}, via-{color}, to-{color}
- bg-none
- Background size: bg-auto, bg-cover, bg-contain
- Background position: bg-center, bg-top, bg-bottom, bg-left, bg-right
- Background repeat: bg-repeat, bg-no-repeat, bg-repeat-x, bg-repeat-y

### Borders

#### Border Width
- border, border-{side}
- border-{size}

#### Border Color
- border-{color}-{shade}
- border-opacity-{value}

#### Border Radius
- rounded, rounded-{size}
- rounded-{side}
- rounded-full, rounded-none

#### Border Style
- border-solid, border-dashed, border-dotted, border-double, border-none

#### Divide
- divide-x-{size}, divide-y-{size}
- divide-{color}

### Effects

#### Box Shadow
- shadow, shadow-{size}
- shadow-none
- shadow-{color}

#### Opacity
- opacity-{value}: 0-100

#### Mix Blend Mode
- mix-blend-{mode}

#### Background Blend Mode
- bg-blend-{mode}

### Filters
- blur: blur-{size}
- brightness: brightness-{value}
- contrast: contrast-{value}
- grayscale: grayscale
- hue-rotate: hue-rotate-{deg}
- invert: invert
- saturate: saturate-{value}
- sepia: sepia
- backdrop-blur, backdrop-brightness, etc.

### Transitions và Animations

#### Transitions
- transition
- transition-{property}
- duration-{time}
- ease-{timing}
- delay-{time}

#### Transforms
- scale: scale-{value}
- rotate: rotate-{deg}, -rotate-{deg}
- translate: translate-x-{size}, translate-y-{size}
- skew: skew-x-{deg}, skew-y-{deg}
- transform-origin: origin-center, origin-top, origin-bottom

#### Animations
- animate-none
- animate-spin
- animate-ping
- animate-pulse
- animate-bounce

### Responsive Design

#### Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
- Usage: md:flex, lg:grid

#### Container Queries
- @container support
- Custom breakpoints trong config

### Dark Mode
- dark: variant
- dark:bg-gray-800
- Class strategy vs media strategy
- Toggle implementation

### Customization

#### tailwind.config.js
- theme.extend
- Custom colors
- Custom spacing
- Custom fonts
- Custom breakpoints
- Plugins
- Content paths
- safelist

#### Creating Components
- @apply directive
- Component classes
- Extracting repeating patterns

#### Plugins
- Official plugins: forms, typography, aspect-ratio
- Custom plugins
- Plugin API

### Advanced Tailwind

#### Performance
- PurgeCSS (built-in)
- Production builds
- File size optimization

#### Best Practices
- Component organization
- Naming conventions
- When to use @apply
- Avoiding @apply overuse
- Composition over extraction

#### Tailwind với Frameworks
- React + Tailwind
- Vue + Tailwind
- Next.js + Tailwind
- Setup differences

## GIAI ĐOẠN 6: REACT ECOSYSTEM (4-6 tháng)

### React Fundamentals

#### Setup
- Create React App (CRA)
- Vite + React
- Next.js setup
- Project structure

#### JSX
- JSX syntax
- Expressions trong JSX
- JSX attributes
- Children
- Fragments: <>, <React.Fragment>
- JSX compilation

#### Components
- Function components
- Component composition
- Props
- Props destructuring
- children prop
- Default props
- Prop types validation
- Component naming conventions

#### State
- useState hook
- State updates
- Multiple state variables
- State with objects
- State with arrays
- Functional updates
- State batching
- State immutability

#### Events
- Event handling
- Synthetic events
- Event pooling
- Passing arguments
- Preventing default
- Event delegation

#### Conditional Rendering
- if-else
- Ternary operator
- && operator
- Switch statements
- Early returns

#### Lists và Keys
- Rendering lists: map
- Keys importance
- Key selection
- Index as key (anti-pattern)
- Fragment keys

### React Hooks

#### useState
- Basic usage
- Lazy initialization
- Functional updates
- Multiple states

#### useEffect
- Basic usage
- Dependency array
- Cleanup function
- Multiple effects
- Effect timing
- useEffect vs useLayoutEffect

#### useContext
- Context API
- Creating context
- Provider
- Consuming context
- Multiple contexts
- Context composition

#### useReducer
- Reducer concept
- Actions
- State management
- useReducer vs useState
- Complex state logic

#### useCallback
- Memoizing functions
- Dependency array
- Performance optimization
- When to use

#### useMemo
- Memoizing values
- Expensive computations
- Dependency array
- Performance optimization

#### useRef
- DOM references
- Persisting values
- Previous values
- Forwarding refs

#### useImperativeHandle
- Customizing exposed ref
- With forwardRef

#### useLayoutEffect
- Synchronous effects
- vs useEffect timing
- DOM measurements

#### Custom Hooks
- Creating custom hooks
- Extracting logic
- Hook composition
- Hook naming convention
- Sharing hooks

### Advanced React

#### Component Patterns
- Compound components
- Render props
- Higher-Order Components (HOC)
- Controlled vs uncontrolled components
- Container/Presentational pattern

#### Performance Optimization
- React.memo
- useMemo và useCallback
- Code splitting: React.lazy
- Suspense
- Profiler
- Virtual DOM reconciliation
- Key optimization
- Bundle size optimization

#### Error Boundaries
- componentDidCatch (class)
- Error boundary implementation
- Fallback UI
- Error reporting

#### Portals
- ReactDOM.createPortal
- Modal implementation
- Use cases

#### Refs Advanced
- forwardRef
- useImperativeHandle
- Callback refs
- Ref forwarding patterns

#### TypeScript với React
- Typing props
- Typing state
- Typing events
- Typing refs
- Typing children
- Generic components
- Utility types: React.FC, React.ReactNode

### React Router
- BrowserRouter
- Routes và Route
- Link và NavLink
- useNavigate
- useParams
- useSearchParams
- useLocation
- Nested routes
- Protected routes
- Route parameters
- Query parameters
- Programmatic navigation
- 404 pages
- Lazy loading routes

### State Management

#### Context API
- Global state
- Provider pattern
- Multiple contexts
- Context optimization

#### Redux Toolkit
- Store setup
- Slices
- createSlice
- Reducers
- Actions
- useSelector
- useDispatch
- Redux DevTools
- Middleware: thunk
- RTK Query
- Async operations
- Redux best practices

#### Zustand
- Simple state management
- Creating stores
- Using stores
- Middleware
- Persistence

#### Recoil
- Atoms
- Selectors
- useRecoilState
- useRecoilValue
- Async selectors

#### Jotai
- Primitive atoms
- Derived atoms
- Atom splitting

### Forms trong React

#### Controlled Components
- Input binding
- Form state
- Multiple inputs
- Validation

#### React Hook Form
- useForm hook
- register
- handleSubmit
- Validation rules
- Error handling
- Form schemas với Zod/Yup
- Custom validation
- Field arrays
- Watch values

#### Formik (alternative)
- Form setup
- Validation
- Field components
- Error messages

### Data Fetching

#### Fetch API
- GET requests
- POST requests
- Error handling
- Loading states

#### Axios
- Installation
- GET, POST, PUT, DELETE
- Interceptors
- Error handling
- Base URL configuration

#### React Query (TanStack Query)
- useQuery
- useMutation
- Query keys
- Caching
- Refetching
- Pagination
- Infinite queries
- Optimistic updates
- Query invalidation
- DevTools

#### SWR (alternative)
- useSWR hook
- Caching
- Revalidation
- Mutation

### Styling trong React

#### Tailwind với React
- Setup
- className composition
- clsx/classnames
- Conditional classes
- Dynamic classes
- Component patterns

#### CSS Modules
- .module.css files
- Scoped styles
- Composition

#### Styled Components
- Tagged template literals
- Props-based styling
- Theming
- Global styles

#### Emotion
- CSS prop
- Styled components
- Theming

### UI Component Libraries

#### Headless UI
- Unstyled components
- Accessibility built-in
- Tailwind integration
- Components: Dialog, Menu, Listbox, Popover

#### Radix UI
- Unstyled primitives
- Accessibility
- Customizable

#### shadcn/ui
- Copy-paste components
- Tailwind-based
- Customizable
- Radix primitives
- CLI tool

#### Material-UI (MUI)
- Component library
- Theming
- Customization
- Icons

#### Chakra UI
- Component library
- Utility props
- Dark mode
- Theming

#### Ant Design
- Enterprise components
- Chinese design
- Comprehensive

### Testing

#### Jest
- Test suites
- Test cases
- Assertions
- Mocking
- Setup và teardown

#### React Testing Library
- render
- screen queries
- User events: @testing-library/user-event
- Async testing
- waitFor
- Testing hooks
- Testing custom hooks
- Best practices
- Accessibility testing

#### Vitest (modern alternative)
- Faster than Jest
- Vite integration
- Compatible API

#### E2E Testing
- Cypress
- Playwright
- Testing user flows

## GIAI ĐOẠN 7: ADVANCED FRONTEND (4-6 tháng)

### Next.js

#### Pages Router
- File-based routing
- Dynamic routes
- API routes
- getStaticProps
- getServerSideProps
- getStaticPaths
- Link component
- Image component
- Script component

#### App Router (Next.js 13+)
- app directory
- Layouts
- Server Components
- Client Components
- Loading UI
- Error handling
- Streaming
- Parallel routes
- Intercepting routes
- Route handlers (API)
- Metadata API
- Data fetching patterns

#### Rendering Strategies
- Static Site Generation (SSG)
- Server-Side Rendering (SSR)
- Incremental Static Regeneration (ISR)
- Client-Side Rendering (CSR)
- Hybrid approaches

#### Optimization
- Image optimization
- Font optimization
- Script optimization
- Bundle analysis
- Code splitting
- Lazy loading

#### Deployment
- Vercel deployment
- Environment variables
- Preview deployments
- Production builds

### Performance Optimization

#### Core Web Vitals
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Measuring và improving

#### Bundle Optimization
- Code splitting
- Tree shaking
- Dynamic imports
- Bundle analysis
- Reducing bundle size

#### Image Optimization
- WebP, AVIF formats
- Responsive images
- Lazy loading
- Image CDNs
- Next/Image component

#### Caching Strategies
- Browser caching
- Service workers
- CDN caching
- API caching

#### Web Performance APIs
- Performance Observer
- Navigation Timing
- Resource Timing
- User Timing

### Accessibility (a11y)

#### Fundamentals
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Screen readers
- Focus management

#### Best Practices
- Alt text for images
- Form labels
- Color contrast
- Heading hierarchy
- Skip links

#### Testing Tools
- axe DevTools
- WAVE
- Lighthouse
- Screen reader testing
- Keyboard-only testing

### Progressive Web Apps (PWA)

#### Service Workers
- Lifecycle
- Caching strategies
- Background sync
- Push notifications

#### Web App Manifest
- manifest.json
- Icons
- Display modes
- Theme colors

#### Offline Functionality
- Cache-first strategy
- Network-first strategy
- Offline fallbacks

#### Installation
- Add to home screen
- Installation prompts

### Web Components
- Custom Elements
- Shadow DOM
- Templates
- Slots
- Lifecycle callbacks
- Using với frameworks

### Advanced TypeScript Patterns

#### Type Guards
- User-defined type guards
- Discriminated unions
- Type predicates

#### Advanced Generics
- Generic constraints
- Conditional types
- Mapped types
- Template literal types

#### Utility Types
- Custom utility types
- Type transformations
- Type inference

### Animation

#### CSS Animations với Tailwind
- Transition utilities
- Animation utilities
- Custom animations

#### Framer Motion
- motion components
- Variants
- Gestures
- Layout animations
- SVG animations
- Scroll animations
- AnimatePresence

#### React Spring
- useSpring
- useTransition
- Physics-based animations

### 3D Graphics
- Three.js basics
- React Three Fiber
- 3D scenes trong React
- WebGL basics

### Real-time Features

#### WebSockets
- Native WebSocket API
- Socket.io client
- Real-time updates

#### Server-Sent Events
- EventSource API
- Live notifications

### Build và Deploy

#### CI/CD
- GitHub Actions
- GitLab CI
- Vercel
- Netlify
- Automated testing
- Automated deployments

#### Hosting Options
- Vercel
- Netlify
- AWS Amplify
- Cloudflare Pages
- GitHub Pages
- Traditional hosting

#### Performance Monitoring
- Google Analytics
- Sentry
- LogRocket
- Vercel Analytics

## GIAI ĐOẠN 8: MASTERY (liên tục)

### Architecture Patterns
- Feature-based structure
- Atomic design
- Module federation
- Micro-frontends
- Monorepo: Turborepo, Nx

### Advanced State Management
- Zustand patterns
- Jotai patterns
- XState (state machines)
- Redux advanced patterns

### Design Systems
- Component library creation
- Design tokens
- Storybook
- Documentation
- Versioning
- Publishing packages

### GraphQL
- Apollo Client
- Queries
- Mutations
- Subscriptions
- Caching
- Optimistic UI
- Code generation

### Security
- XSS prevention
- CSRF protection
- Content Security Policy
- Authentication strategies
- JWT handling
- OAuth flows
- Secure storage

### Internationalization (i18n)
- react-i18next
- Format.js
- Language switching
- Pluralization
- Date/number formatting
- RTL support

### SEO Optimization
- Meta tags
- Open Graph
- Twitter Cards
- Structured data
- Sitemap
- robots.txt
- Next.js SEO

### Browser Compatibility
- Polyfills
- Babel configuration
- Browserslist
- Feature detection
- Progressive enhancement

### Developer Experience
- Hot module replacement
- Error overlays
- DevTools integration
- VS Code extensions
- Snippets
- Linting rules
- Git workflows

### Best Practices
- Clean Code principles
- SOLID principles
- DRY, KISS, YAGNI
- Code reviews
- Documentation
- Component API design
- Naming conventions
- File organization
- Comment practices

### Community và Learning
- React docs
- TypeScript docs
- Tailwind docs
- GitHub trending
- Twitter communities
- Discord servers
- Reddit: r/reactjs, r/typescript, r/tailwindcss
- Dev.to
- Medium articles
- YouTube channels
- Conferences: React Conf, TypeScript Conf

### Open Source
- Contributing to projects
- Creating packages
- npm publishing
- Semantic versioning
- Changelog maintenance
- Issue management
- PR reviews

### Portfolio Development
- Project showcases
- GitHub profile
- Personal website
- Blog writing
- Case studies
- Demo projects
- Code samples

## LỘ TRÌNH HỌC TẬP ĐỀ XUẤT

**Tháng 1-3**: Giai đoạn 1 - JavaScript fundamentals, DOM manipulation

**Tháng 4-7**: Giai đoạn 2 - JavaScript advanced, async, OOP

**Tháng 8-11**: Giai đoạn 3 - TypeScript fundamentals và advanced

**Tháng 12-14**: Giai đoạn 4 - Build tools, package managers, code quality

**Tháng 15-17**: Giai đoạn 5 - Tailwind CSS mastery

**Tháng 18-23**: Giai đoạn 6 - React ecosystem, hooks, routing, state management

**Tháng 24-29**: Giai đoạn 7 - Next.js, performance, PWA, advanced topics

**Tháng 30+**: Giai đoạn 8 - Mastery, architecture, best practices

## TIPS ĐỂ MASTER FRONTEND

- Code mỗi ngày, build projects thực tế
- Master JavaScript fundamentals trước khi học frameworks
- Understand TypeScript deeply, không chỉ any everywhere
- Practice responsive design với Tailwind
- Build complete projects, không chỉ tutorials
- Read official documentation thoroughly
- Learn by building: todo app → blog → e-commerce → dashboard
- Master DevTools: Chrome, React DevTools
- Understand browser rendering
- Focus on performance từ đầu
- Write semantic HTML
- Care about accessibility
- Test your code
- Review other people's code on GitHub
- Contribute to open source
- Stay updated với new features
- Follow industry leaders on Twitter
- Join communities: Discord, Reddit
- Watch conference talks
- Read source code của popular libraries
- Build your own component library
- Deploy your projects
- Get feedback từ real users
- Learn design basics
- Understand UX principles
- Keep learning new tools, but master fundamentals
- Build a portfolio website
- Write technical blogs
- Help others learn
- Practice, practice, practice!

## PROJECT IDEAS ĐỂ PRACTICE

**Beginner:**
- Todo app với localStorage
- Weather app với API
- Calculator
- Quiz app
- Landing pages

**Intermediate:**
- Blog với Markdown
- E-commerce frontend
- Dashboard với charts
- Social media feed
- Movie database với TMDB API

**Advanced:**
- Full-stack app với Next.js
- Real-time chat application
- Project management tool
- Analytics dashboard
- Multi-tenant SaaS UI
- Design system library

Chúc bạn thành công trên con đường master Frontend Development với TypeScript/JavaScript và Tailwind!