# HLA Twin

Hackathon demonstrator for explainable, human-validated immunological review in
kidney transplantation. The project uses only deterministic synthetic data and
must not be presented as a clinically validated medical device.

## Current status

The repository is in its preparation phase. Product and data-model documents are
present; the Next.js and FastAPI applications have not been scaffolded yet.

## Start here

- [`AGENTS.md`](AGENTS.md): shared instructions for Codex, Claude, Cursor,
  Copilot, and other coding agents.
- [`docs/EXECUTION_PLAN.md`](docs/EXECUTION_PLAN.md): phased implementation plan
  and copy-ready prompts for a new coding-agent conversation.
- [`FEATURES_HLA_FLOW_COURT.md`](FEATURES_HLA_FLOW_COURT.md): concise product
  framing.
- [`PLAN_HACKATHON_HLA_FLOW.md`](PLAN_HACKATHON_HLA_FLOW.md): hackathon plan and
  safety boundaries.
- [`DATASET_HLA_TWIN_STRUCTURE.md`](DATASET_HLA_TWIN_STRUCTURE.md): long-term data
  model, not the three-day implementation scope.

## Planned architecture

```text
apps/web/             Next.js and TypeScript
apps/api/             FastAPI and Python
packages/contracts/   OpenAPI artifacts and generated types
data/                 Synthetic scenarios and versioned protocol configuration
docs/                 Architecture, decisions, execution and demo documentation
```

No real patient data, autonomous transplant decision, treatment recommendation,
or clinically validated rejection prediction belongs in this repository.
