# HLA Flow — Plan complet du hackathon

## 1. Mission

En trois jours, produire et présenter un prototype fonctionnel de copilote de pré-validation pour les analyses anti-HLA.

Le prototype doit démontrer qu'il est possible de :

1. reconstruire l'historique immunologique d'un patient ;
2. confronter cet historique au résultat du jour ;
3. proposer une voie rapide pour les dossiers simples et cohérents ;
4. détecter les discordances et les dossiers incomplets ;
5. concentrer l'expertise humaine sur les cas complexes ;
6. expliquer et tracer chaque recommandation.

### Promesse

> Automatiser le répétitif, expliquer l'inhabituel et laisser la décision médicale à l'expert.

### Définition du succès

À la fin du hackathon, une personne extérieure doit pouvoir comprendre le problème et voir fonctionner quatre scénarios de bout en bout en moins de trois minutes.

---

## 2. Principes de travail

- Construire d'abord un parcours complet simple, puis l'enrichir.
- Ne jamais bloquer toute l'équipe sur une fonctionnalité.
- Utiliser uniquement des patients fictifs et des données synthétiques.
- Faire valider toute règle médicale par le spécialiste.
- Ne pas présenter un modèle synthétique comme cliniquement validé.
- Préparer la démonstration hors connexion.
- Geler les nouvelles fonctionnalités avant la dernière demi-journée.
- Préférer un prototype fiable à une longue liste de fonctions inachevées.

---

## 3. Organisation de l'équipe

### Ingénieur 1 — Produit et frontend

- cockpit et file de travail ;
- fiche patient et chronologie ;
- affichage des explications ;
- simulateur interactif ;
- cohérence visuelle de la démonstration.

### Ingénieur 2 — Backend et moteur de décision

- modèle de données ;
- API ;
- moteur de règles ;
- statuts de décision ;
- journal d'audit ;
- tests métier.

### Ingénieur 3 — Data, IA et impact

- générateur de patients synthétiques ;
- analyse en lot ;
- détection d'anomalies ;
- calculateur de gain de temps ;
- métriques et préparation des scénarios.

### Spécialiste santé — Référent métier

- description du workflow réel ;
- validation du vocabulaire ;
- définition des règles et contre-exemples ;
- validation des données synthétiques ;
- test du prototype ;
- validation des affirmations du pitch.

Si sa disponibilité est limitée à une journée, cette journée doit être placée au début du hackathon. Une courte validation finale doit ensuite être organisée à distance ou avec un second référent, si le règlement le permet.

### Responsabilité collective

- chacun doit connaître le scénario de démonstration ;
- une seule personne pilote la démo en direct ;
- une autre personne présente le besoin et l'impact ;
- une troisième répond aux questions techniques ;
- le spécialiste répond aux questions métier et cliniques lorsqu'il est présent.

---

## 4. Travail à réaliser avant le hackathon

### 4.1 Atelier métier

Organiser un atelier de 60 à 90 minutes avec le spécialiste pour documenter :

- le parcours d'un dossier dans LymFIP ;
- les informations visibles ;
- le vocabulaire exact ;
- les contrôles bloquants ;
- la différence entre dépistage et identification ;
- les événements pouvant modifier l'interprétation ;
- les cas qui ne doivent jamais passer en voie rapide ;
- les erreurs ou incohérences fréquemment rencontrées.

Livrable : une page de règles validées et une liste de cas limites.

### 4.2 Mini-audit de temps

Demander au spécialiste, même approximativement :

- dossiers traités par jour ;
- proportion de négatifs stables ;
- durée de validation d'un dossier simple ;
- durée d'un dossier complexe ;
- volume du retard actuel ;
- nombre de professionnels concernés.

Les chiffres non vérifiés devront rester identifiés comme hypothèses.

### 4.3 Préparation technique

- choisir la stack ;
- créer le dépôt et les conventions Git ;
- définir les contrats API ;
- préparer le modèle de données synthétiques ;
- créer un wireframe du cockpit ;
- préparer le backlog P0/P1/P2 ;
- vérifier que chaque membre peut lancer le projet localement.

### 4.4 Préparation de la narration

Préparer avant le sprint :

- une phrase décrivant le problème ;
- une phrase décrivant la solution ;
- quatre patients fictifs ;
- un premier calcul d'impact ;
- une représentation simple de l'architecture ;
- le déroulé de la démo.

---

## 5. Architecture cible du prototype

### Frontend

- cockpit des dossiers ;
- détail d'un patient ;
- chronologie ;
- raisons de la décision ;
- simulateur ;
- tableau d'impact.

### Backend

- import et validation des dossiers ;
- moteur de règles versionné ;
- calcul des statuts ;
- stockage de l'audit ;
- API pour la file et la fiche patient.

### Module data/IA

- génération de dossiers synthétiques ;
- extraction de caractéristiques temporelles ;
- score d'anomalie ;
- analyse en lot ;
- métriques de démonstration.

### Contrat de décision

Chaque analyse doit renvoyer au minimum :

- statut proposé ;
- raisons ;
- données manquantes ;
- signaux inhabituels ;
- version des règles ;
- version du modèle ;
- nécessité d'une confirmation humaine ;
- date de l'analyse.

### Statuts

- `FAST_TRACK` : voie rapide proposée ;
- `EXPERT_REVIEW` : revue experte nécessaire ;
- `BLOCKED` : analyse impossible ou non fiable.

---

## 6. Déroulement des trois jours

## Jour 1 — Comprendre, verrouiller, connecter

### Objectif de la journée

Obtenir un parcours complet de bout en bout, même visuellement simple.

### Début de journée

- réunion de lancement de 30 minutes ;
- reformulation commune du problème ;
- validation des fonctionnalités retenues ;
- validation des quatre scénarios ;
- répartition définitive des responsabilités ;
- création du tableau de suivi.

### Travail parallèle

**Frontend :** cockpit minimal, liste de dossiers et fiche patient.

**Backend :** schéma de données, API minimale et premières règles.

**Data/IA :** génération des patients synthétiques et calcul des caractéristiques.

**Santé :** validation des règles, libellés et cas limites.

### Point de synchronisation à mi-journée

- tester un premier dossier de bout en bout ;
- corriger immédiatement les incompatibilités entre frontend et backend ;
- supprimer toute donnée non nécessaire.

### Fin de journée attendue

- les quatre dossiers sont importables ;
- le moteur retourne un statut ;
- le frontend affiche le statut et au moins une raison ;
- le parcours fonctionne sur les machines de l'équipe.

### Critère de sortie

Une démonstration imparfaite mais complète doit déjà être possible.

---

## Jour 2 — Différencier et rendre démontrable

### Objectif de la journée

Transformer le socle fonctionnel en produit crédible et mémorable.

### Matin

- finaliser le moteur de règles ;
- ajouter la détection des données manquantes ;
- construire la chronologie ;
- ajouter la confirmation humaine et l'audit ;
- tester les cas limites.

### Après-midi

- ajouter la détection d'anomalies ;
- mettre en place l'analyse en lot ;
- construire le simulateur ;
- ajouter le calculateur d'impact ;
- améliorer la lisibilité du cockpit.

### Test utilisateur

Faire tester le produit à une personne qui ne connaît pas le projet. Elle doit pouvoir expliquer :

- quel dossier est simple ;
- quel dossier est inquiétant ;
- pourquoi le système propose cette décision ;
- qui prend la décision finale.

### Fin de journée attendue

- toutes les fonctionnalités P0 sont terminées ;
- les fonctionnalités P1 retenues fonctionnent ;
- le parcours de démo est chronométré ;
- les bugs bloquants sont listés ;
- les captures et la vidéo de secours peuvent commencer.

### Critère de sortie

Le produit doit être présentable même si aucune nouvelle fonctionnalité n'est ajoutée ensuite.

---

## Jour 3 — Fiabiliser, raconter, répéter

### Objectif de la journée

Livrer une démonstration stable et un pitch convaincant.

### Matin

- corriger les bugs critiques ;
- vérifier les explications ;
- tester les quatre scénarios ;
- tester sans connexion ;
- enregistrer une vidéo de démonstration ;
- sauvegarder une version stable.

### Gel des fonctionnalités

À partir de la mi-journée :

- aucune nouvelle fonctionnalité importante ;
- uniquement corrections, contenu, design et répétition ;
- toute modification doit préserver la version stable.

### Après-midi

- finaliser les supports de pitch ;
- répéter avec chronomètre ;
- préparer les réponses aux objections ;
- vérifier les chiffres et leurs hypothèses ;
- attribuer chaque partie orale ;
- préparer une solution de secours si la démo échoue.

### Critère final

L'équipe doit pouvoir présenter trois fois de suite sans dépasser le temps prévu et sans erreur bloquante.

---

## 7. Scénario de démonstration

### Étape 1 — Montrer le problème

Présenter brièvement un professionnel qui doit ouvrir chaque dossier et relire l'historique avant de prendre une décision.

### Étape 2 — Patient négatif stable

Ouvrir un dossier avec plusieurs résultats négatifs et des contrôles conformes. HLA Flow propose la voie rapide et explique pourquoi.

### Étape 3 — Modification en direct

Changer le résultat de classe II ou ajouter une donnée problématique. Le dossier passe immédiatement en revue experte.

### Étape 4 — Analyse en lot

Afficher plusieurs centaines de dossiers synthétiques automatiquement répartis entre voie rapide, revue experte et blocage.

### Étape 5 — Impact

Montrer le temps potentiel libéré à partir des hypothèses du laboratoire.

### Étape 6 — Sécurité

Confirmer que le professionnel garde la décision finale et montrer le journal d'audit.

---

## 8. Structure du pitch

Le pitch doit rester adaptable au temps donné par l'organisation.

### 1. Accroche

> Dans un laboratoire HLA, les professionnels passent une partie de leur temps à confirmer que rien n'a changé, alors que les dossiers réellement atypiques exigent toute leur attention.

### 2. Problème terrain

- manque de personnel ;
- historique à parcourir manuellement ;
- accumulation du retard ;
- temps expert consommé par des dossiers répétitifs.

### 3. Solution

Présenter HLA Flow en une phrase, puis lancer rapidement la démonstration.

### 4. Différenciation

- règles transparentes ;
- détection d'anomalies ;
- analyse à l'échelle de la file ;
- explications ;
- humain dans la boucle ;
- audit.

### 5. Impact

Présenter un scénario chiffré clairement étiqueté comme simulation tant que les données terrain ne sont pas disponibles.

### 6. Suite

- validation rétrospective sur des données autorisées ;
- pilote en mode silencieux ;
- mesure des erreurs et du temps gagné ;
- discussion avec le laboratoire et l'éditeur ;
- activation progressive après validation locale.

### Conclusion

> HLA Flow ne remplace pas l'expertise biologique : il lui rend du temps et l'oriente là où elle est indispensable.

---

## 9. Tests et critères d'acceptation

### Règles métier

- un négatif stable complet peut être proposé en voie rapide ;
- une nouvelle positivité est toujours envoyée en revue experte ;
- une identification complexe n'est jamais auto-validée ;
- une donnée obligatoire manquante bloque le dossier ;
- une anomalie ne peut qu'augmenter le niveau de vigilance ;
- aucune règle technique ne peut contourner la confirmation humaine.

### Traçabilité

- chaque recommandation possède une raison ;
- la version des règles est enregistrée ;
- la décision humaine est enregistrée ;
- une correction ne supprime pas la recommandation précédente.

### Robustesse

- données invalides refusées proprement ;
- même entrée et même version donnent le même résultat ;
- démonstration fonctionnelle hors connexion ;
- aucune donnée patient réelle dans le dépôt ;
- parcours principal testé sur au moins deux machines.

### Expérience

- statut compris en quelques secondes ;
- raisons médicales lisibles ;
- anomalies visuellement identifiables ;
- démonstration principale inférieure à trois minutes.

---

## 10. Risques et réponses

### Règles médicales imprécises

**Réponse :** limiter les décisions aux règles explicitement confirmées et envoyer les autres dossiers en revue experte.

### Absence de données réelles

**Réponse :** utiliser un générateur synthétique et annoncer clairement que les performances cliniques restent à valider.

### Intégration LymFIP inconnue

**Réponse :** construire un adaptateur CSV/JSON et présenter l'écran LymFIP comme une simulation de parcours.

### Modèle IA peu crédible

**Réponse :** limiter le modèle à l'escalade des anomalies, montrer ses variables et ne revendiquer aucune validation clinique.

### Spécialiste peu disponible

**Réponse :** concentrer son intervention sur la validation initiale, enregistrer les décisions et organiser une validation finale courte.

### Démo instable

**Réponse :** données embarquées, mode hors connexion, version stable et vidéo de secours.

### Périmètre trop large

**Réponse :** terminer P0 avant P1 et interdire P2 tant que le parcours complet n'est pas fiable.

### Chiffres contestés

**Réponse :** distinguer mesures, estimations et hypothèses sur chaque support.

---

## 11. Gestion du projet

### Backlog

Classer les tâches en quatre colonnes : à faire, en cours, à vérifier, terminé.

Chaque tâche doit avoir :

- un responsable unique ;
- un résultat observable ;
- une priorité ;
- une estimation courte ;
- une condition de validation.

### Synchronisation

- point de 10 minutes au lancement de chaque demi-journée ;
- intégration continue plutôt qu'une fusion finale ;
- démonstration de l'état réel à chaque point ;
- décisions importantes écrites dans un journal partagé.

### Git

- branche principale toujours exécutable ;
- branches courtes par fonctionnalité ;
- petites modifications intégrées fréquemment ;
- revue rapide avant fusion ;
- tag ou commit identifié pour chaque version stable.

### Arbitrage

En cas de retard, supprimer dans cet ordre :

1. bonus visuels ;
2. éditeur de règles ;
3. authentification ;
4. export de rapports ;
5. simulation LymFIP avancée.

Ne jamais supprimer : moteur de règles, quatre scénarios, explications, confirmation humaine, cockpit et audit minimal.

---

## 12. Livrables finaux

- prototype web exécutable localement ;
- dépôt avec instructions de lancement ;
- jeu de données synthétiques ;
- tests métier ;
- support de pitch ;
- vidéo de démonstration de secours ;
- architecture simplifiée ;
- liste des règles validées ;
- calculateur d'impact avec hypothèses visibles ;
- feuille de route post-hackathon.

---

## 13. Feuille de route après le hackathon

### Phase 1 — Validation rétrospective

Tester le moteur sur des données pseudonymisées et autorisées, sans influencer les décisions médicales.

### Phase 2 — Mode silencieux

Exécuter HLA Flow en parallèle du workflow existant et comparer ses recommandations aux décisions des professionnels.

### Phase 3 — Pilote assisté

Afficher les recommandations aux utilisateurs, toujours avec validation humaine obligatoire.

### Phase 4 — Intégration

Étudier avec le laboratoire et l'éditeur les interfaces disponibles, la sécurité, l'hébergement et la traçabilité.

### Phase 5 — Extension contrôlée

Étendre les règles, les laboratoires et les cas d'usage uniquement après validation des performances et des procédures.

---

## 14. Checklist finale

Avant de présenter :

- [ ] les quatre scénarios fonctionnent ;
- [ ] les règles ont été relues par le spécialiste ;
- [ ] aucune donnée réelle n'est présente ;
- [ ] chaque décision est expliquée ;
- [ ] la confirmation humaine est visible ;
- [ ] le tableau d'impact indique ses hypothèses ;
- [ ] la démo fonctionne hors connexion ;
- [ ] une vidéo de secours est disponible ;
- [ ] chaque membre connaît son rôle ;
- [ ] les réponses aux questions sensibles sont préparées ;
- [ ] le pitch respecte la durée imposée ;
- [ ] une version stable du prototype est sauvegardée.

