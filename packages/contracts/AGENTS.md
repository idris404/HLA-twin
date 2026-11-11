# Frontend/backend contract rules

These rules apply under `packages/contracts/` in addition to the repository guide.

- FastAPI's OpenAPI schema is the source of truth for transport contracts.
- Generate TypeScript types; do not maintain equivalent interfaces manually.
- Keep canonical request and response examples for all demo endpoints.
- Validate examples against the current schema in automated tests.
- Treat field removal, renaming, type changes, and semantic changes as breaking.
- Coordinate breaking changes across the API, fixtures, web app, tests, and docs
  in one task.
- Preserve explicit uncertainty: never collapse `unknown`, `missing`, `not_tested`,
  and `negative` into the same value.
- Every analysis response includes human-validation state and ruleset version.

