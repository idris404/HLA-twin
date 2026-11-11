# API and decision-engine rules

These rules apply under `apps/api/` in addition to the repository guide.

## Architecture

Separate the code into domain models and rules, application services, adapters,
and HTTP routes. Routes validate and translate requests; they must not contain
medical logic. Repositories must not decide clinical meaning.

Suggested direction:

```text
src/hla_twin/
├── domain/
├── application/
├── infrastructure/
├── api/
└── main.py
tests/
```

## Domain rules

- Implement each rule as an independently testable unit with a stable ID.
- A rule result states its outcome, severity, observed evidence, explanation key,
  validation state, and ruleset version.
- Configuration must be versioned and validated on startup.
- Unknown or unreviewed input yields uncertainty or an impossible evaluation; it
  must never silently become favorable.
- Ranking and confidence must be derived only from documented factors. Until the
  health specialist validates their meaning, label them simulated.
- Explanations are produced from structured rule results, not free-form model
  reasoning.

## API and storage

- Use FastAPI and Pydantic models at the boundary.
- Keep response schemas backward-compatible during the hackathon when possible.
- Return structured error codes suitable for UI handling.
- Keep synthetic scenarios deterministic and resettable.
- Use JSON fixtures and SQLite for the demo unless a verified requirement needs
  PostgreSQL.
- Audit only significant actions: analysis, simulation change, recalculation,
  and human validation.

## Testing

- Use Pytest for every medical rule and application service.
- Cover valid, missing, stale, contradictory, and unreviewed inputs.
- Add contract tests for OpenAPI examples and frontend fixtures.
- Use fixed clocks and seeded randomness. Tests must not require the network.

