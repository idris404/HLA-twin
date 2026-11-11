# HLA Twin — execution plan for a fresh coding-agent conversation

## Outcome of the first execution phase

Create a boring, reliable foundation that lets frontend and backend development
start in parallel. Do not implement unvalidated medical behavior yet.

At the end of this phase:

- the monorepo installs and starts locally;
- Next.js and FastAPI expose health screens/endpoints;
- OpenAPI generates usable TypeScript types;
- one synthetic recipient and three donors flow from a mock API to the UI;
- Docker Compose starts the web and API services;
- tests and checks run through documented top-level commands;
- medical decisions remain explicit placeholders pending health review.

## Recommended sequence

### Phase 1 — Repository foundation

1. Read all applicable `AGENTS.md` files and the product documents.
2. Inspect Git status and preserve the existing Markdown documents.
3. Create the monorepo workspace and root tooling.
4. Scaffold `apps/web` with Next.js and strict TypeScript.
5. Scaffold `apps/api` with FastAPI, Pydantic and Pytest.
6. Add `.env.example`, ignore rules, formatting and lint configuration.
7. Add top-level `make dev`, `make test`, `make check`, and `make demo` commands.
8. Verify both applications independently before integration.

### Phase 2 — Contract-first vertical slice

1. Define minimal transport models for recipient, donor, timeline event, pair
   analysis, simulation request, validation action, audit event and follow-up.
2. Add canonical JSON examples with explicit draft/simulated markers.
3. Expose FastAPI OpenAPI and generate TypeScript types from it.
4. Add contract tests that validate the examples.
5. Implement read-only mock endpoints for one recipient and three donors.
6. Render the recipient and donors in the web app using generated types.

### Phase 3 — Demo infrastructure

1. Add deterministic scenario loading and reset behavior.
2. Add Dockerfiles and Docker Compose.
3. Add one API integration test and one Playwright smoke path.
4. Confirm startup from a clean checkout without external services.
5. Document exact commands and known medical placeholders.

## Explicitly defer until health review

- clinical thresholds and serum freshness windows;
- DSA interpretation and severity;
- virtual-crossmatch conclusions;
- confidence and ranking semantics;
- mandatory expert-review criteria;
- post-transplant alert thresholds;
- medically authoritative wording.

Code may contain interfaces and pending configuration for these areas, but not
guessed behavior.

## Prompt to paste into a new Codex conversation

```text
We are starting implementation of HLA Twin in this repository.

Read the root AGENTS.md, every relevant nested AGENTS.md, and
docs/EXECUTION_PLAN.md completely before editing. Also read the concise product
brief and hackathon plan referenced by AGENTS.md.

Implement only Phase 1: Repository foundation from docs/EXECUTION_PLAN.md.
Preserve all existing Markdown documents. Do not implement or invent medical
rules. Use Next.js + strict TypeScript for apps/web and FastAPI + Pydantic +
Pytest for apps/api. Add the top-level commands described in the plan and verify
them. Keep the change minimal and production-shaped for a hackathon.

Before editing, report the current repository state, the exact files you expect
to add, and any conflict you found. Then implement, run the relevant checks, and
finish with changed files, commands run, results, and remaining blockers. Do not
commit, push, deploy, or add paid/external services.
```

## Prompt for the following conversation

After Phase 1 is verified, start a new task with:

```text
Read all repository instructions and docs/EXECUTION_PLAN.md. Verify the Phase 1
scaffold instead of assuming it works. Then implement only Phase 2: the
contract-first vertical slice. Use draft/simulated markers for all unvalidated
medical output. Generate TypeScript types from FastAPI OpenAPI and add contract
tests. Do not invent medical thresholds or decision logic. Run all relevant
checks and report evidence.
```

## Review checklist for every coding-agent handoff

- Did it read the repository and local instructions?
- Did it preserve existing work?
- Did it stay within the requested phase?
- Did it avoid invented medical behavior?
- Did it add tests for the behavior it added?
- Did it actually run the claimed commands?
- Does the application still run without an external dependency?
- Are assumptions and blockers explicit?

