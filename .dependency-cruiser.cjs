module.exports = {
  forbidden: [
    { name: "no-cycles", severity: "error", from: {}, to: { circular: true } },
    {
      name: "entry-point-only",
      severity: "error",
      from: { path: "^src/packages/([^/]+)/", pathNot: "^src/packages/([^/]+)/(?:lib|tests)/" },
      to: { path: "^src/packages/[^/]+/(?:lib|tests)/", pathNot: "^src/packages/$1/" }
    },
    {
      name: "tests-through-entrypoints",
      severity: "error",
      from: { path: "^src/packages/[^/]+/tests/" },
      to: { path: "^src/packages/[^/]+/(?:lib|tests)/", pathNot: "^src/packages/[^/]+/tests/fixtures/" }
    }
  ],
  options: { doNotFollow: { path: "node_modules" }, tsPreCompilationDeps: true }
};
