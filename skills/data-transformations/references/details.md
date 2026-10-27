# Data Transformation Engine — capability-level operating reference

Scope is the isolated V8 JavaScript runtime coordinating registered tools. Host tool arguments are governed by current exposed descriptions; connected resource effects must be verified separately.

### 79. Filtering and mapping

**Mechanism:** Apply typed filters and maps to preserve origin identifiers while selecting only records satisfying the requested predicate.

**Negative condition:** A filter must not erase rejected status records needed for acceptance.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 80. Reduction and aggregation

**Mechanism:** Aggregate numeric metrics using an explicit initial accumulator, units and known missing-value policy.

**Negative condition:** Summing string values without normalization must reject.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 81. Sorting and ranking

**Mechanism:** Sort by a stable comparator with documented tie-breaking, retaining original record IDs.

**Negative condition:** Equal scores must not randomly reorder acceptance results.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 82. Grouping and deduplication

**Mechanism:** Group by canonical source key and deduplicate only records representing the same event, not merely similar text.

**Negative condition:** Two events with equal payload but different IDs remain distinct.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 83. Cross-service joins

**Mechanism:** Join GitHub and provider observations on declared cross-service identifiers; flag unmatched rows and collisions.

**Negative condition:** A missing join key must not be treated as matching an arbitrary row.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 84. Regular-expression extraction

**Mechanism:** Use regular expressions for bounded lexical patterns and state that regex is not a semantic JavaScript parser.

**Negative condition:** A multiline or aliased declaration must not be silently treated as a complete AST result.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 85. Structured data validation

**Mechanism:** Validate required fields, value types and status enumeration before downstream operations.

**Negative condition:** An observation with a missing source cannot enter an accepted bundle.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

## Execution evidence
Capture requested input and selected operation, allSettled status if applicable, observed source, correlation ID, negative-case assertion and acceptance outcome. Do not substitute a synthetic fixture for live service evidence.
