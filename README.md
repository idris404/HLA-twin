# HLA Twin

Hackathon demonstrator for explainable, human-validated immunological review in
kidney transplantation. The project uses only deterministic synthetic data and
must not be presented as a clinically validated medical device.

## Current status

Phase 1 provides a local monorepo foundation: a strict Next.js frontend, a
FastAPI backend with `GET /health`, automated checks, and Docker images. No
medical rules, patient scenarios, or clinical calculations are implemented.

## Prerequisites

- Node.js 20.9 or newer and npm;
- Python 3.11 or newer (or `uv`, which can install the pinned Python version);
- [`uv`](https://docs.astral.sh/uv/) for Python dependencies;
- GNU Make;
- Docker with Compose for the containerized demo command.

## Install

From the repository root:

```bash
npm ci
uv sync
```

The committed lockfiles make both installations reproducible. Copy environment
examples only when overriding their safe local defaults; the scaffold contains
no secret.

## Commands

```bash
make dev    # Start Next.js on :3000 and FastAPI on :8000 with reload
make test   # Run the Vitest frontend test and Pytest API tests
make check  # Check formatting, lint, strict types, and the production web build
make demo   # Build and start both services with Docker Compose
```

`make dev` exposes:

- web status page: <http://localhost:3000>;
- API health endpoint: <http://localhost:8000/health>;
- interactive API documentation: <http://localhost:8000/docs>.

Stop `make dev` or `make demo` with `Ctrl+C`. To remove demo containers after a
Compose run, use `docker compose down`.

For an individual application:

```bash
npm run dev:web
uv run uvicorn hla_twin.main:app --reload --host 0.0.0.0 --port 8000
```

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
