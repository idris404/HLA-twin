# HLA Flow — Catalogue des fonctionnalités

## 1. Objectif du produit

HLA Flow est un copilote de pré-validation pour les laboratoires d'histocompatibilité. Il confronte le résultat anti-HLA du jour à l'historique du patient, repère les dossiers répétitifs et cohérents, puis dirige les discordances vers le biologiste.

Le produit ne remplace pas le biologiste médical. Il prépare la décision, l'explique et la trace.

Ce document sert à choisir collectivement les fonctionnalités à développer pendant le hackathon. Les priorités proposées sont :

- **P0 — indispensable** : nécessaire pour que la démonstration raconte l'idée principale ;
- **P1 — différenciante** : apporte l'effet « produit abouti » ou « wow » ;
- **P2 — bonus** : à développer uniquement si le parcours principal est stable.

---

## 2. Fonctionnalités P0 — indispensables

### 2.1 Import d'un dossier patient synthétique

Le système charge un dossier fictif contenant l'identifiant pseudonymisé du patient, ses résultats historiques, le résultat du jour et les informations nécessaires à l'analyse.

**Pourquoi :** toute la démonstration dépend de données suffisamment réalistes, sans utiliser de données médicales réelles.

### 2.2 Historique chronologique du patient

Une frise affiche les prélèvements successifs, leurs dates et les résultats des classes I et II.

**Pourquoi :** le jury comprend immédiatement ce que le professionnel doit actuellement vérifier à la main.

### 2.3 Comparaison entre l'historique et le résultat du jour

Le moteur repère si le résultat actuel reste cohérent avec l'historique ou s'il introduit un changement.

**Pourquoi :** c'est le cœur du besoin métier initial.

### 2.4 Moteur de règles médicales

Des règles définies avec le spécialiste déterminent si le dossier peut être proposé en voie rapide, doit être revu ou doit être bloqué.

Exemples à confirmer par le spécialiste :

- résultat actuel négatif et historique pertinent négatif ;
- contrôles analytiques conformes ;
- données obligatoires présentes ;
- nouvelle positivité envoyée en revue experte ;
- identification détaillée toujours envoyée au biologiste.

**Pourquoi :** les décisions restent compréhensibles et ne dépendent pas d'une boîte noire.

### 2.5 Trois statuts de décision

Chaque dossier reçoit un statut simple :

- **Voie rapide proposée** : dossier répétitif et cohérent ;
- **Revue experte** : changement, positivité ou situation complexe ;
- **Dossier bloqué** : information ou contrôle nécessaire manquant.

**Pourquoi :** cette classification organise le travail sans prétendre poser un diagnostic.

### 2.6 Explication de la recommandation

Le système affiche les raisons précises de son classement, par exemple : historique négatif stable, apparition d'une positivité, donnée manquante ou contrôle invalide.

**Pourquoi :** le biologiste doit pouvoir comprendre et contester la recommandation.

### 2.7 Confirmation humaine

Le biologiste peut confirmer, modifier ou escalader la recommandation.

**Pourquoi :** le prototype reste un outil d'aide à la décision et non un système autonome.

### 2.8 File de travail du laboratoire

Un cockpit affiche tous les dossiers, triés par priorité et par statut.

**Pourquoi :** HLA Flow ne traite pas seulement un patient ; il aide à organiser toute la charge quotidienne du laboratoire.

### 2.9 Journal d'audit

Chaque analyse conserve la date, la version des règles, les raisons proposées et l'action finale du professionnel.

**Pourquoi :** la traçabilité est essentielle pour rendre la solution crédible dans un environnement médical.

### 2.10 Jeu de démonstration

Le prototype contient au minimum quatre patients fictifs :

1. négatif stable et complet ;
2. passage de négatif à positif ;
3. identification complexe ;
4. dossier incomplet ou contrôle invalide.

**Pourquoi :** ces scénarios permettent de montrer toutes les décisions importantes en quelques minutes.

---

## 3. Fonctionnalités P1 — différenciantes

### 3.1 Détection d'anomalies temporelles

Un modèle secondaire recherche les trajectoires inhabituelles dans l'historique. Il peut envoyer un dossier en revue experte, mais ne peut jamais autoriser seul une voie rapide.

**Valeur :** apporte une véritable composante IA tout en conservant un fonctionnement prudent.

### 3.2 Analyse en lot

Le système analyse en quelques secondes plusieurs centaines de dossiers synthétiques et les répartit entre voie rapide, revue experte et blocage.

**Valeur :** démontre un impact à l'échelle du laboratoire, et non un simple assistant patient par patient.

### 3.3 Simulateur « Que se passe-t-il si ? »

Pendant la démo, on peut modifier un résultat, ajouter un événement, invalider un contrôle ou supprimer une donnée. La recommandation est recalculée immédiatement.

**Valeur :** rend le fonctionnement du moteur visible et produit un effet de démonstration fort.

### 3.4 Tableau d'impact

Le laboratoire renseigne son volume quotidien, la proportion de dossiers simples et le temps moyen de validation. HLA Flow estime les heures potentiellement libérées.

**Valeur :** permet de relier le prototype à un bénéfice opérationnel et économique.

Les résultats doivent toujours être présentés comme des simulations tant qu'ils ne sont pas mesurés sur le terrain.

### 3.5 Protocoles versionnés

Le système affiche la version du protocole utilisée et permet de modifier les seuils ou conditions sans réécrire toute l'application.

**Valeur :** montre que le produit peut s'adapter aux procédures de différents laboratoires.

### 3.6 Synthèse des dossiers complexes

Pour un dossier envoyé en revue experte, HLA Flow présente les changements importants et les points à vérifier, sans réaliser l'interprétation finale.

**Valeur :** le système reste utile même lorsqu'il ne peut pas proposer de voie rapide.

### 3.7 Simulation d'intégration LymFIP

La démo commence sur une interface inspirée du parcours LymFIP, puis un bouton ouvre l'analyse HLA Flow.

**Valeur :** le jury comprend comment la solution pourrait s'insérer dans le geste professionnel.

Il faudra annoncer clairement qu'il s'agit d'une simulation et non d'une intégration officielle.

---

## 4. Fonctionnalités P2 — bonus

### 4.1 Éditeur visuel de règles

Le spécialiste peut construire une règle en sélectionnant des conditions dans l'interface.

**Intérêt :** autonomie du laboratoire ; **risque :** coût de développement élevé pour trois jours.

### 4.2 Mode sombre et accessibilité avancée

Amélioration de la lisibilité, du contraste, de la navigation au clavier et de l'affichage sur différents écrans.

**Intérêt :** finition du produit ; à traiter après la fiabilité du parcours principal.

### 4.3 Export d'un rapport d'analyse

Génération d'un résumé PDF ou JSON contenant l'historique, les alertes et la décision humaine.

**Intérêt :** utile pour montrer l'interopérabilité et la traçabilité.

### 4.4 Authentification et rôles

Distinction entre technicien, biologiste et administrateur des protocoles.

**Intérêt :** crédibilité d'un produit futur ; non nécessaire pour la démonstration centrale.

### 4.5 Retour utilisateur sur les recommandations

Les corrections du biologiste sont enregistrées afin d'analyser les erreurs du système et préparer une amélioration future.

**Intérêt :** ouvre la voie à une boucle d'apprentissage contrôlée.

### 4.6 Notifications

Le système signale l'arrivée d'un dossier prioritaire ou le changement de statut d'une analyse.

**Intérêt :** améliore le workflow, mais n'apporte pas de valeur essentielle au pitch.

---

## 5. Fonctionnalités à ne pas développer pendant le hackathon

- Diagnostic médical autonome.
- Prédiction du rejet de greffe sans données cliniques validées.
- Interprétation autonome complète des spécificités anti-HLA.
- Validation finale sans intervention humaine.
- Connexion réelle à LymFIP sans documentation ni autorisation de l'éditeur.
- Utilisation de données patient réelles non autorisées.
- Chatbot médical généraliste.
- Application mobile complète.

Ces fonctions augmenteraient les risques et disperseraient l'équipe sans améliorer la démonstration principale.

---

## 6. Périmètre recommandé pour les trois jours

### Socle obligatoire

Développer toutes les fonctionnalités P0 avec une interface propre et quatre scénarios fiables.

### Ambition recommandée

Ajouter les quatre éléments P1 suivants :

1. détection d'anomalies temporelles ;
2. analyse en lot ;
3. simulateur interactif ;
4. tableau d'impact.

### Si du temps reste

Ajouter la simulation LymFIP et la version du protocole. Les autres bonus passent après la répétition de la démo et la préparation du pitch.

---

## 7. Décisions à prendre en équipe

Lors de la réunion, l'équipe doit valider :

- la formulation exacte du problème ;
- les règles médicales confirmées par le spécialiste ;
- les champs disponibles dans un dossier synthétique ;
- les fonctionnalités P1 réellement retenues ;
- le niveau de réalisme de la simulation LymFIP ;
- la technologie frontend, backend et IA ;
- la personne responsable de chaque partie ;
- le scénario de démonstration final ;
- les métriques de temps à demander au laboratoire ;
- le nom définitif du produit.

La règle d'arbitrage proposée est simple : une fonctionnalité est retenue seulement si elle améliore directement la démonstration du besoin, la sécurité, l'impact ou la différenciation du produit.

