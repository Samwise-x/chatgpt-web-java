# Deep modules

Each folder under `src/packages/` is a module. Root files are public entry points; `lib/` contains internals, and `tests/` contains tests. Import only another module's entry points. Prefer several small entry points instead of a giant barrel. Private imports and cycles fail `npm run lint:boundaries`.
