# Evidence & Provenance Engineering — capability-level operating reference

Scope is the isolated V8 JavaScript runtime coordinating registered tools. Host tool arguments are governed by current exposed descriptions; connected resource effects must be verified separately.

### 93. Evidence record schemas

**Mechanism:** Define a durable evidence record with id, provider, operation, status, value, source, timestamp and correlation.

**Negative condition:** A result lacking operation identity cannot substantiate a tool action.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 94. Source identifiers

**Mechanism:** Carry provider-native source identifiers such as repository URL and deployment ID; never replace them with model-invented labels.

**Negative condition:** A non-resolvable placeholder is not evidence provenance.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 95. Operation-to-result correlation

**Mechanism:** Associate every tool response with the request ID and exact operation invoked, even in allSettled output.

**Negative condition:** An index-shifted array must not attribute another tool's result to this request.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 96. Timestamped observations

**Mechanism:** Stamp observations when actually received using valid RFC 3339 or ISO time, distinguishing provider event time from local observation time.

**Negative condition:** A fabricated or malformed timestamp must reject.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 97. Reproducible evidence bundles

**Mechanism:** Bundle input, selected tool contract, response receipt, postcondition read and policy evaluation into one reproducible record.

**Negative condition:** A lone successful response cannot serve as a complete evidence bundle.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 98. Acceptance evidence

**Mechanism:** Apply a literal acceptance predicate to observed values and store both expected and actual outcomes.

**Negative condition:** Computing the expected value with the same algorithm as the implementation is tautological.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 99. Evidence aggregation across services

**Mechanism:** Aggregate multi-provider evidence with provenance-preserving joins and explicit partial/missing contributions.

**Negative condition:** One failed service must not be erased when forming a global status.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

## Execution evidence
Capture requested input and selected operation, allSettled status if applicable, observed source, correlation ID, negative-case assertion and acceptance outcome. Do not substitute a synthetic fixture for live service evidence.
