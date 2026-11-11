# HLA Twin — Produit

## Problème

La revue immunologique en transplantation oblige les professionnels HLA à
reconstituer un historique longitudinal, confronter les résultats disponibles
et repérer les données manquantes ou discordantes. Les vérifications
répétitives réduisent le temps disponible pour les situations complexes, alors
que chaque conclusion doit rester explicable et validée par un humain.

Le démonstrateur doit montrer comment préparer et prioriser cette revue sans
poser de diagnostic, recommander un traitement, prédire un rejet ou prendre une
décision autonome de transplantation.

## Vision HLA Twin

HLA Twin reconstruit un historique synthétique de receveur, présente des
facteurs structurés concernant plusieurs donneurs synthétiques et explique les
risques, incertitudes, données manquantes et règles déclenchées. Le professionnel
reste responsable de toute validation.

Le cœur du produit doit fonctionner hors connexion, avec des données
déterministes et exclusivement synthétiques. Les règles médicales ne peuvent
être implémentées qu'après validation et restent versionnées.

## Utilisateur principal

L'utilisateur cible est un professionnel HLA chargé de la revue immunologique
en transplantation. La répartition exacte entre technicien, biologiste médical
et autres rôles du laboratoire reste **à arbitrer** avec le référent santé.

## Parcours de démonstration cible

1. Charger un receveur synthétique et reconstruire son historique.
2. Présenter trois donneurs synthétiques avec les données disponibles et les
   éléments manquants.
3. Afficher une comparaison structurée, ses incertitudes, la version du ruleset
   et l'obligation de validation humaine.
4. Modifier une donnée en direct et montrer le recalcul explicable, sans règle
   clinique inventée.
5. Enregistrer l'action humaine et afficher une courte alerte post-greffe
   simulée nécessitant une revue.

Ce parcours reflète la mission actuelle du dépôt. L'ancien concept HLA Flow
prévoyait à la place une file de quatre patients anti-HLA ; ce choix reste
documenté dans [À arbitrer](#à-arbitrer).

## P0 — Indispensable

- dossier receveur synthétique et historique chronologique ;
- présentation de trois donneurs synthétiques ;
- contrat API typé entre frontend et backend ;
- résultats structurés exposant données manquantes, incertitudes, règles
  déclenchées, statut de validation et version du ruleset ;
- explications compréhensibles et contestables ;
- validation humaine visible et traçable ;
- modification en direct d'une donnée du scénario ;
- courte alerte post-greffe explicitement simulée ;
- quatre scénarios déterministes ou un parcours équivalent couvrant succès,
  données incomplètes, contradiction et erreur, selon l'arbitrage final ;
- fonctionnement local sans réseau ni donnée réelle.

Les statuts historiques `FAST_TRACK`, `EXPERT_REVIEW` et `BLOCKED` restent des
propositions. Leur signification médicale doit être validée avant usage.

## P1 — Si le parcours P0 est stable

- cockpit de dossiers et tri opérationnel ;
- détection d'anomalies temporelles limitée à l'escalade vers une revue ;
- analyse en lot de dossiers synthétiques ;
- synthèse structurée des cas complexes ;
- tableau d'impact fondé sur des hypothèses visibles ;
- simulation clairement étiquetée d'un parcours LymFIP, sans intégration
  officielle ;
- affichage et gestion de protocoles versionnés.

Les fonctions P1 ne doivent jamais retarder la fiabilisation du parcours P0.

## Hors périmètre

- diagnostic ou validation médicale autonome ;
- décision de transplantation ou recommandation thérapeutique ;
- prédiction cliniquement présentée comme validée, notamment du rejet ;
- interprétation autonome complète des anticorps anti-HLA, DSA ou crossmatch ;
- connexion réelle à LymFIP sans documentation et autorisation ;
- données patient réelles ou identifiantes ;
- chatbot médical généraliste ;
- authentification complexe, application mobile complète ou éditeur visuel de
  règles pendant le hackathon ;
- export de rapports, notifications et boucle d'apprentissage à partir des
  corrections utilisateur pendant le hackathon ;
- service payant ou dépendance réseau nécessaire à la démonstration.

## Critères de réussite

- une personne extérieure comprend le problème, le rôle de HLA Twin et qui
  prend la décision finale ;
- le parcours principal est démontrable de bout en bout en moins de trois
  minutes ;
- les résultats sont déterministes, expliqués et reproductibles ;
- les états incomplet, contradictoire et erreur sont visibles ;
- toute valeur non validée est marquée `draft`, `simulated` ou
  `pending_review` ;
- les décisions humaines et versions de règles sont traçables ;
- la démonstration fonctionne hors connexion avec des données synthétiques ;
- les chiffres d'impact sont présentés comme hypothèses tant qu'ils ne sont pas
  mesurés.

## Décisions encore ouvertes

- règles médicales exactes et contre-exemples validés ;
- champs réellement accessibles et nécessaires au MVP ;
- vocabulaire approuvé par le professionnel de santé ;
- rôle utilisateur principal et droits associés ;
- fonctions P1 réellement retenues ;
- métriques terrain permettant d'estimer un gain de temps ;
- niveau de réalisme d'une éventuelle simulation LymFIP ;
- rôle, variables et critères d'évaluation de la composante IA ;
- formulation finale des alertes et explications.

## À arbitrer

Les documents historiques décrivaient deux démonstrations concurrentes :

- **HLA Flow** : file de quatre patients fictifs anti-HLA — négatif stable,
  nouvelle positivité, identification complexe et dossier incomplet — avec
  proposition de voie rapide, revue experte ou blocage ;
- **HLA Twin** : un receveur synthétique, trois donneurs, une modification en
  direct et une courte alerte post-greffe.

La seconde correspond à la mission actuelle de `AGENTS.md`, mais l'équipe et le
référent santé doivent confirmer le scénario final. Aucun statut, seuil ou
interprétation clinique associé à l'une ou l'autre variante n'est validé à ce
jour.

