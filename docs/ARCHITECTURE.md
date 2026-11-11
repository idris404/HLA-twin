# HLA Twin — Architecture et roadmap

## État réel après la Phase 1

La fondation du monorepo est terminée et vérifiée localement. Elle contient :

```text
apps/web/             Next.js App Router, React, TypeScript strict, Tailwind CSS
apps/api/             FastAPI, Pydantic, Python et Pytest
packages/contracts/   emplacement réservé aux artefacts OpenAPI et types générés
data/scenarios/       emplacement prévu pour les scénarios synthétiques
data/protocols/       emplacement prévu pour les règles versionnées
docs/                 produit, architecture, runbook et décisions médicales
docker-compose.yml    lancement local des services web et API
```

À ce stade, `packages/contracts`, `data/scenarios` et `data/protocols` décrivent
l'architecture cible mais ne contiennent pas encore le vertical slice. L'API
expose uniquement son socle, notamment `GET /health`, et le web affiche une page
de vérification. Aucun moteur médical, scénario patient ou calcul clinique
n'est implémenté.

## Frontend

`apps/web` possède l'interface et l'orchestration de la démonstration. Il utilise
Next.js App Router, TypeScript strict et Tailwind CSS. Il doit rendre les
résultats typés du backend et ne doit pas recopier de logique médicale.

Les surfaces de données devront couvrir chargement, vide, incomplet, erreur et
succès, avec les marqueurs `draft`, `simulated` ou `pending_review` nécessaires.

## Backend et moteur métier

`apps/api` utilise FastAPI et Pydantic aux frontières HTTP. Le backend possédera
les calculs métier, séparés des routes, du stockage, du frontend et de tout LLM.
Les règles devront être pures, versionnées, déterministes et testables.

L'absence, l'ancienneté ou la contradiction d'une donnée ne devra jamais être
interprétée silencieusement comme favorable. Toute analyse exigera une
validation humaine.

## Contrat frontend/backend

OpenAPI sera la source de vérité du contrat de transport. La prochaine phase
doit :

1. définir les modèles Pydantic minimaux ;
2. publier leurs exemples JSON contrôlés ;
3. générer les types TypeScript dans `packages/contracts` ;
4. vérifier les exemples par des tests de contrat ;
5. faire consommer ces types par le frontend.

Ces éléments ne sont pas encore implémentés après la Phase 1.

## Données et protocoles

- `data/scenarios` contiendra uniquement des cas synthétiques déterministes et
  réinitialisables ;
- `data/protocols` contiendra les configurations versionnées validées au
  démarrage ;
- [MEDICAL_RULES.md](MEDICAL_RULES.md) est le registre humain des validations
  et questions ouvertes ;
- [FUTURE_DATA_MODEL.md](reference/FUTURE_DATA_MODEL.md) reste une référence de
  long terme, pas le schéma du MVP.

Aucune donnée patient réelle, aucun secret et aucune dépendance réseau ne sont
nécessaires au cœur de la démonstration.

## Docker Compose

`docker-compose.yml` construit et lance :

- l'API FastAPI sur le port `8000`, avec un healthcheck sur `/health` ;
- le frontend Next.js sur le port `3000`, après disponibilité de l'API.

Les ports peuvent être remplacés via le fichier `.env` racine. Docker Compose
est la source de vérité pour la démonstration locale conteneurisée.

## Commandes disponibles

```bash
npm ci      # installer les dépendances web verrouillées
uv sync     # installer les dépendances Python verrouillées
make dev    # lancer web et API en développement
make test   # exécuter Vitest et Pytest
make check  # format, lint, types et build web de production
make build  # construire le frontend
make demo   # construire et lancer les deux services avec Docker Compose
```

## Roadmap restante

### Prochaine étape — vertical slice contract-first

- modèles de transport minimaux pour receveur, donneur, chronologie, analyse de
  paire, simulation, validation, audit et suivi ;
- exemples canoniques explicitement synthétiques et non validés ;
- génération de types TypeScript depuis OpenAPI ;
- tests de contrat ;
- endpoints mock en lecture seule pour un receveur et trois donneurs ;
- rendu frontend utilisant uniquement les types générés.

### Ensuite

- chargement et réinitialisation déterministes des scénarios ;
- premier test d'intégration API et parcours Playwright ;
- moteur de règles uniquement après validation du référent santé ;
- fiabilisation hors connexion et préparation de la démonstration.

Les seuils cliniques, DSA, crossmatch virtuel, confiance, classement et alertes
post-greffe restent différés jusqu'à validation explicite.

