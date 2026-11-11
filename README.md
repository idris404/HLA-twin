# HLA Twin

HLA Twin est un démonstrateur de hackathon pour une revue immunologique
explicable et validée par un professionnel en transplantation rénale. Il utilise
uniquement des données synthétiques déterministes et ne constitue ni un
dispositif médical validé, ni un système de décision autonome.

## État actuel

La Phase 1 est terminée : monorepo local, frontend Next.js strict, API FastAPI
avec `GET /health`, tests, vérifications et images Docker. Le vertical slice,
les scénarios synthétiques et le moteur métier ne sont pas encore implémentés.

## Documentation

- [Produit et périmètre](docs/PRODUCT.md)
- [Architecture et roadmap](docs/ARCHITECTURE.md)
- [Runbook du hackathon](docs/HACKATHON_RUNBOOK.md)
- [Registre des règles médicales](docs/MEDICAL_RULES.md)
- [Modèle de données futur](docs/reference/FUTURE_DATA_MODEL.md)
- [Instructions des agents](AGENTS.md)

## Installation

Prérequis : Node.js 20.9 ou plus récent, npm, Python 3.11 ou `uv`, GNU Make et
Docker avec Compose pour la démonstration conteneurisée.

```bash
npm ci
uv sync
```

Les lockfiles rendent l'installation reproductible. Les fichiers
`.env.example` ne contiennent aucun secret.

## Commandes

```bash
make dev    # Next.js :3000 et FastAPI :8000 avec rechargement
make test   # Vitest et Pytest
make check  # formatage, lint, types et build web de production
make build  # build du frontend
make demo   # build et lancement des deux services avec Docker Compose
```

Après `make dev` :

- interface : <http://localhost:3000> ;
- santé API : <http://localhost:8000/health> ;
- documentation OpenAPI : <http://localhost:8000/docs>.

Arrêter avec `Ctrl+C`. Après une démonstration Compose, nettoyer les conteneurs
avec `docker compose down`.

## Limites non négociables

- aucune donnée patient réelle ou identifiable ;
- aucune règle, valeur ou interprétation clinique inventée ;
- validation humaine toujours visible ;
- aucune revendication de diagnostic, traitement, prédiction du rejet ou
  intégration officielle à LymFIP ;
- fonctionnement du cœur de la démonstration sans service externe.
