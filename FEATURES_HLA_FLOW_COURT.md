# HLA Flow — Fonctionnalités proposées

## Le concept

HLA Flow est un copilote pour les laboratoires HLA. Il compare le résultat anti-HLA du jour avec l'historique du patient, propose les dossiers simples en voie rapide et transmet les cas inhabituels au biologiste.

Le biologiste garde toujours la décision finale.

## Fonctionnalités essentielles

### 1. Import du dossier patient

Charger un patient fictif avec son historique, son résultat du jour et ses contrôles.

### 2. Frise chronologique

Afficher clairement les résultats précédents et leur évolution dans le temps.

### 3. Comparaison automatique

Comparer le résultat actuel à l'historique pour repérer une stabilité ou un changement.

### 4. Classement des dossiers

Attribuer l'un des trois statuts :

- **Voie rapide** : dossier négatif, stable et complet ;
- **Revue experte** : changement, positivité ou cas complexe ;
- **Bloqué** : donnée ou contrôle manquant.

### 5. Explication de la décision

Indiquer simplement pourquoi le dossier a reçu ce statut.

### 6. Confirmation humaine

Permettre au biologiste de confirmer, modifier ou refuser la proposition.

### 7. Cockpit du laboratoire

Afficher tous les dossiers et les trier selon leur priorité.

### 8. Traçabilité

Enregistrer la recommandation, ses raisons et la décision finale du professionnel.

## Fonctionnalités qui donnent de la valeur à la démo

### 9. Détection d'anomalies

Repérer une trajectoire inhabituelle et envoyer le dossier vers l'expert. L'IA ne valide jamais seule un dossier.

### 10. Analyse en lot

Analyser plusieurs centaines de dossiers synthétiques pour montrer l'impact à l'échelle du laboratoire.

### 11. Simulateur interactif

Modifier un résultat ou supprimer une donnée pendant la démo et voir la recommandation changer immédiatement.

### 12. Estimation du temps gagné

Calculer le gain potentiel à partir du volume de dossiers, de la proportion de cas simples et du temps moyen de validation.

### 13. Simulation de l'intégration LymFIP

Commencer la démonstration dans un faux écran LymFIP, puis ouvrir HLA Flow pour analyser le dossier. Il faudra préciser qu'il ne s'agit pas d'une intégration officielle.

## Scénarios à préparer

Le prototype doit contenir quatre patients fictifs :

1. négatif stable proposé en voie rapide ;
2. passage de négatif à positif envoyé à l'expert ;
3. identification complexe résumée pour le biologiste ;
4. dossier incomplet automatiquement bloqué.

## Périmètre recommandé pour le hackathon

### À terminer obligatoirement

- import des dossiers ;
- historique patient ;
- moteur de comparaison ;
- trois statuts ;
- explications ;
- confirmation humaine ;
- cockpit ;
- quatre scénarios fiables.

### À ajouter pour une démonstration ambitieuse

- détection d'anomalies ;
- analyse en lot ;
- simulateur ;
- estimation du temps gagné.

### Seulement s'il reste du temps

- simulation LymFIP ;
- éditeur de règles ;
- export de rapport ;
- authentification et gestion des rôles.

## À ne pas développer

- diagnostic autonome ;
- prédiction du rejet de greffe ;
- validation médicale sans humain ;
- connexion réelle à LymFIP sans autorisation ;
- utilisation de données patient réelles ;
- chatbot médical généraliste.

## Décisions à prendre avec l'équipe

- règles exactes validées par le spécialiste ;
- fonctionnalités ambitieuses retenues ;
- technologies utilisées ;
- répartition des rôles ;
- scénario final de démonstration ;
- métriques de temps à récupérer auprès du laboratoire.

