# HLA Twin agent guide

These instructions apply to the entire repository. A nested `AGENTS.md` adds
rules for its directory and takes precedence when it is more specific.

## Mission

Build a three-day hackathon demonstrator for kidney-transplant immunological
review. The product reconstructs a synthetic recipient history, compares three
synthetic donors, explains risk and uncertainty factors, supports a live change,
and shows a short post-transplant alert. It is decision support, never an
autonomous transplant decision or a clinically validated medical device.

Read these documents before changing product behavior:

- `docs/PRODUCT.md` for the product scope, priorities and open arbitration.
- `docs/ARCHITECTURE.md` for the implemented foundation and remaining roadmap.
- `docs/HACKATHON_RUNBOOK.md` for responsibilities and demo execution.
- `docs/MEDICAL_RULES.md` for validated decisions and pending health review.
- `docs/reference/FUTURE_DATA_MODEL.md` for long-term data ideas; do not
  implement all of it for the demo.

If these documents disagree, preserve the safety boundary, prefer the narrowest
demo scope, and report the conflict instead of silently choosing a medical rule.

## Non-negotiable medical and data safety

- Use only deterministic synthetic data. Never add real patient data or secrets.
- Never invent clinical thresholds, compatibility rules, DSA interpretation,
  serum freshness limits, or post-transplant alert criteria.
- Mark unvalidated rules and values as `draft`, `simulated`, or `pending_review`.
- Every analysis result must require human validation and expose missing data,
  uncertainty, triggered rules, and the ruleset version.
- LLM output may rephrase structured factors but must not compute or override a
  medical result.
- Do not claim diagnosis, treatment advice, rejection prediction, clinical
  validation, or integration with LymFIP.
- Keep the core demo fully usable without network access.

## Intended architecture

```text
apps/web/             Next.js, TypeScript, Tailwind, UI and demo orchestration
apps/api/             FastAPI, Pydantic, domain rules and audit API
packages/contracts/   OpenAPI artifacts, generated types and JSON examples
data/scenarios/       Deterministic synthetic demo cases
data/protocols/       Versioned rule configuration, pending health review
docs/                 Architecture, medical decisions and demo documentation
```

The backend owns medical computation. The frontend renders typed results and
must not duplicate domain rules. OpenAPI and checked JSON examples form the
frontend/backend contract.

## Working method

1. Inspect the repository, the nearest `AGENTS.md`, and relevant docs first.
2. State the task's acceptance criteria and identify unresolved medical input.
3. Make the smallest coherent change that completes one vertical slice.
4. Add or update tests for behavior, missing data, and error paths.
5. Run the narrowest relevant checks, then the broader project checks if they
   exist. Never claim a check passed without running it.
6. Summarize changed files, checks run, remaining assumptions, and blockers.

Do not rewrite unrelated files, silently broaden scope, add speculative
abstractions, or replace working code merely for style. Preserve user changes.

## Code and dependency standards

- Use English for identifiers, code comments, commits, and technical docs.
- Keep UI language consistent with the approved demo copy.
- Prefer typed, explicit, testable code over clever abstractions.
- Keep domain logic pure and independent from HTTP, database, UI, and LLM code.
- Validate all external input at boundaries and return structured errors.
- Use stable synthetic identifiers and ISO 8601 timestamps.
- No new dependency, external service, database, or model without a concrete
  need and a short explanation of the trade-off.
- Never commit credentials. Document variables in `.env.example` with safe
  placeholders.
- Avoid logging health-like payloads, even when synthetic, unless needed for the
  demo and clearly labeled.

## Tests and completion

A feature is complete only when:

- its expected result is explicit and reproducible;
- missing, stale, or contradictory data has defined behavior;
- human validation remains visible;
- relevant automated tests pass;
- the UI covers loading, empty, error, and success states when applicable;
- the demo still starts locally without a network dependency;
- documentation changes when a contract or rule changes.

Expected top-level commands, once the scaffold exists:

```bash
make dev
make test
make check
make demo
```

If a command does not exist yet, do not pretend it does. Add it only as part of
an approved scaffold task and document what it runs.

## Git and delivery

- Inspect `git status` before editing.
- Do not discard, overwrite, commit, push, deploy, or merge unless requested.
- Keep commits small and use `type(scope): imperative summary` when asked to
  commit, with scopes such as `web`, `api`, `data`, `contracts`, `docs`, `repo`.
- A deploy is optional; local Docker Compose is the source of truth for the demo.
- Freeze new features on day 3 at midday and prioritize reproducibility.

## Stop and ask

Stop implementation and request a decision when work would require:

- choosing or changing a medical threshold or clinical interpretation;
- using real or externally sourced patient-level data;
- changing the meaning of a status or confidence score;
- adding a paid service, secret, public deployment, or external integration;
- breaking the API contract without coordinating both applications.

