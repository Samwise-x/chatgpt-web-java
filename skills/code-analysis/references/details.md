# Source Code Analysis — capability-level operating reference

Scope is the isolated V8 JavaScript runtime coordinating registered tools. Host tool arguments are governed by current exposed descriptions; connected resource effects must be verified separately.

### 100. Repository source retrieval

**Mechanism:** Fetch a repository tree and source files through documented GitHub operations, recording target ref and file path.

**Negative condition:** A default-branch read must not be reported as an arbitrary release ref.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 101. File classification

**Mechanism:** Classify files by validated extension, known syntax mode and generated-code markers before selecting parser techniques.

**Negative condition:** Binary or generated content must not be sent through an incompatible text parser.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 102. Symbol extraction

**Mechanism:** Extract named symbols using a real TypeScript syntax tree when accuracy matters, retaining export kind and source span.

**Negative condition:** Regex-only lexical matches cannot prove nested or aliased symbol semantics.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 103. Import/export analysis

**Mechanism:** Resolve imports and exports across relative and package specifiers, tracking reexports and unresolved paths separately.

**Negative condition:** An unresolved alias must not be silently treated as a local module.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 104. Dependency graph construction

**Mechanism:** Build a directed graph of source modules from resolved imports, with cycle detection and provenance on each edge.

**Negative condition:** A guessed dependency edge is not confirmed by a missing file.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 105. AST-assisted analysis

**Mechanism:** Parse TypeScript or JavaScript through an AST-capable compiler interface before making syntax-level claims.

**Negative condition:** A comment containing 'export function' cannot count as an exported symbol.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 106. Call-chain investigation

**Mechanism:** Traverse call references from a selected entry point, distinguishing static direct calls from dynamic dispatch and unresolved targets.

**Negative condition:** A string matching a function name is not proof of an executable call edge.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

## Execution evidence

Capture requested input and selected operation, allSettled status if applicable, observed source, correlation ID, negative-case assertion and acceptance outcome. Do not substitute a synthetic fixture for live service evidence.
