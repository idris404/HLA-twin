# HLA Twin — Runbook du hackathon

## Responsabilités

### Ingénieure full-stack

- parcours utilisateur, cockpit et détail du receveur ;
- chronologie, comparaison visuelle et explications ;
- simulateur interactif et cohérence de la démonstration ;
- accessibilité, états de chargement, vide, incomplet, erreur et succès.

### Idris — backend, data et IA

- contrats, API et orchestration du scénario déterministe ;
- modèles de données synthétiques et génération des cas ;
- moteur de règles après validation santé, audit et tests métier ;
- analyse en lot ou anomalie uniquement après stabilisation du P0 ;
- aide au frontend une fois sa partie backend/data/IA stable.

### Professionnel de santé

- description du workflow réel et validation du vocabulaire ;
- validation explicite des règles, contre-exemples et données synthétiques ;
- identification des cas qui exigent une revue humaine ;
- test du parcours et validation des affirmations du pitch.

Toute l'équipe connaît le script. Une personne pilote la démo, une autre
présente le problème et l'impact, et le professionnel répond aux questions
métier lorsqu'il est disponible.

## Préparation avant le hackathon

1. Organiser un atelier santé de 60 à 90 minutes : workflow, vocabulaire,
   contrôles, cas limites, données disponibles et règles interdites sans revue.
2. Inscrire chaque décision dans `docs/MEDICAL_RULES.md`, avec validateur et
   date ; laisser les autres éléments « À valider ».
3. Demander les volumes, durées et proportions utiles au pitch, en marquant les
   estimations non vérifiées comme hypothèses.
4. Confirmer le scénario produit à arbitrer dans `docs/PRODUCT.md`.
5. Verrouiller le contrat minimal, les responsabilités et le backlog P0/P1.
6. Vérifier `make dev`, `make test`, `make check` et `make demo` sur les machines
   de l'équipe.
7. Préparer des données intégralement synthétiques, une narration courte et un
   chronométrage de la démo.

## Planning des trois jours

### Jour 1 — Connecter un parcours complet

**Matin**

- lancement de 30 minutes et confirmation du scénario ;
- validation des données synthétiques et du vocabulaire ;
- contrat API minimal et premier écran ;
- premier cas de bout en bout sans règle médicale inventée.

**Synchronisation de mi-journée**

- tester ensemble un échange frontend/API réel ;
- résoudre immédiatement les incompatibilités de contrat ;
- retirer les champs inutiles.

**Après-midi**

- compléter les états principaux du parcours ;
- intégrer uniquement les règles validées par le professionnel ;
- vérifier l'explication, l'incertitude et la validation humaine.

**Critère de sortie** : une démonstration simple mais complète fonctionne sur
les machines de l'équipe, avec au moins un cas déterministe et sans dépendance
réseau à l'exécution.

### Jour 2 — Compléter et rendre démontrable

**Matin**

- terminer le P0, les données manquantes et contradictions ;
- finaliser chronologie, validation humaine, audit et tests des cas limites ;
- faire relire les libellés par le professionnel de santé.

**Après-midi**

- ajouter seulement les P1 retenues : simulateur, anomalie, lot ou impact ;
- réaliser un test avec une personne extérieure ;
- chronométrer le parcours et lister les bugs bloquants ;
- commencer les captures et la vidéo de secours.

**Critère de sortie** : le produit est présentable même si aucune nouvelle
fonctionnalité n'est ajoutée le lendemain.

### Jour 3 — Fiabiliser et répéter

**Matin**

- corriger les bugs critiques ;
- tester tous les scénarios, les explications et le mode hors connexion ;
- enregistrer la vidéo de secours ;
- identifier une version stable.

**Gel à midi**

- aucune nouvelle fonctionnalité importante ;
- uniquement corrections, contenu, design et répétition ;
- chaque changement doit préserver la version stable.

**Après-midi**

- finaliser les supports et vérifier chaque chiffre ;
- répéter avec chronomètre et attribuer les prises de parole ;
- préparer les réponses aux questions médicales, techniques et réglementaires.

**Critère de sortie** : l'équipe réalise trois démonstrations consécutives dans
le temps imparti, sans erreur bloquante.

## Synchronisations Git

- branche principale toujours exécutable ;
- branches courtes et petites intégrations fréquentes ;
- point de 10 minutes au début de chaque demi-journée ;
- démonstration de l'état réel, pas seulement du travail prévu ;
- coordination frontend/backend avant toute rupture de contrat ;
- revue rapide et tests avant intégration ;
- version stable identifiée avant le gel du jour 3.

## Script de démonstration

1. Expliquer la revue manuelle de l'historique et la nécessité de concentrer le
   temps expert sur les cas complexes.
2. Ouvrir le receveur synthétique et sa chronologie.
3. Comparer trois donneurs synthétiques en exposant données, incertitudes et
   éléments nécessitant une validation humaine.
4. Modifier une donnée en direct et montrer le résultat structuré recalculé.
5. Enregistrer la validation humaine et montrer l'audit.
6. Afficher une courte alerte post-greffe simulée, sans diagnostic ni
   recommandation thérapeutique.
7. Si une P1 est stable, montrer le cockpit, le lot ou l'impact simulé.

Le script devra être ajusté si l'équipe retient finalement la variante
historique à quatre patients décrite dans `docs/PRODUCT.md`.

## Pitch court

**Accroche** : les professionnels HLA consacrent du temps à reconstruire et
vérifier des historiques, alors que les situations atypiques exigent toute leur
attention.

**Solution** : HLA Twin prépare une revue immunologique synthétique, structurée
et explicable, tout en laissant chaque validation au professionnel.

**Différenciation à montrer** : historique longitudinal, règles transparentes,
incertitude visible, simulation en direct, validation humaine et audit.

**Impact** : ne présenter que des hypothèses visibles tant que les volumes,
durées, erreurs et gains n'ont pas été mesurés sur le terrain.

**Suite éventuelle** : validation rétrospective sur données autorisées, mode
silencieux, mesure des performances, puis pilote assisté après validation
locale. Il ne s'agit pas d'une promesse clinique actuelle.

## Plan de secours

- données et dépendances nécessaires disponibles localement ;
- images Docker construites avant la présentation ;
- version stable non modifiée après le gel ;
- captures des étapes essentielles et vidéo courte hors ligne ;
- script oral permettant d'expliquer chaque écran si une interaction échoue ;
- une seconde personne sait relancer la démo.

## Risques principaux

- **Règles imprécises** : ne montrer comme calcul médical que ce qui a été
  explicitement validé ; conserver le reste en `pending_review`.
- **Périmètre concurrent** : arbitrer rapidement entre la file HLA Flow et la
  comparaison HLA Twin, puis geler le scénario.
- **Absence de données réelles** : utiliser uniquement des données synthétiques
  et ne revendiquer aucune performance clinique.
- **Intégration LymFIP inconnue** : toute interface reste une simulation
  explicitement étiquetée.
- **IA peu crédible** : limiter une anomalie à l'escalade et exposer ses
  variables ; elle ne peut pas rendre un cas favorable.
- **Référent peu disponible** : concentrer sa présence au début et réserver une
  validation finale courte.
- **Périmètre trop large** : terminer le P0 avant tout P1 et supprimer d'abord
  les bonus visuels ou fonctions secondaires.
- **Chiffres contestés** : distinguer mesures, estimations et hypothèses.

