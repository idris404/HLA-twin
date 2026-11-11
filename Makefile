SHELL := /bin/bash

.PHONY: dev dev-api dev-web test check build demo

dev:
	@set -e; \
	trap 'kill $$api_pid $$web_pid 2>/dev/null || true' EXIT INT TERM; \
	$(MAKE) dev-api & api_pid=$$!; \
	$(MAKE) dev-web & web_pid=$$!; \
	wait $$api_pid $$web_pid

dev-api:
	uv run uvicorn hla_twin.main:app --reload --host 0.0.0.0 --port 8000

dev-web:
	npm run dev:web

test:
	npm run test:web
	uv run pytest

check:
	npm run check:web
	uv run ruff format --check apps/api
	uv run ruff check apps/api
	uv run mypy

build:
	npm run build:web

demo:
	docker compose up --build

