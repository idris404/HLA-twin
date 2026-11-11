# HLA Twin — Registre des règles médicales

Ce registre est la source de vérité humaine des validations médicales. Une règle
absente de la section validée ne doit pas être traitée comme une décision
clinique approuvée. Le code et les données du démonstrateur restent synthétiques
et exigent une validation humaine.

## Ruleset

- **Version actuelle** : Non définie
- **Statut** : `pending_review`
- **Dernière validation santé** : Aucune

## Règles médicales validées

Aucune règle médicale n'est validée à ce jour.

| ID | Décision validée | Validé par | Date | Version |
| --- | --- | --- | --- | --- |
| — | Aucune | — | — | — |

## Règles proposées en attente de validation

Ces propositions proviennent des anciens documents produit. Elles ne doivent
pas être implémentées comme vérités médicales avant revue du professionnel de
santé.

| Proposition | Statut | Point à confirmer |
| --- | --- | --- |
| Un résultat actuel négatif avec un historique pertinent négatif pourrait être proposé en voie rapide. | À valider | Définition de « négatif », historique pertinent et exceptions. |
| Des contrôles analytiques conformes seraient nécessaires à une proposition de voie rapide. | À valider | Contrôles concernés et critères de conformité. |
| Une donnée obligatoire manquante ou un contrôle invalide pourrait bloquer l'analyse. | À valider | Données obligatoires, contrôles et sens exact de `BLOCKED`. |
| Une nouvelle positivité pourrait imposer une revue experte. | À valider | Définition, méthode, exceptions et vocabulaire. |
| Une identification détaillée ou complexe pourrait imposer une revue experte. | À valider | Périmètre et critères de complexité. |
| Une anomalie temporelle ne pourrait qu'augmenter la vigilance. | À valider | Variables, méthode et conséquence autorisée. |

L'obligation de validation humaine, l'exposition de l'incertitude et
l'interdiction d'une décision autonome sont des limites de sécurité du projet,
pas des règles cliniques validées.

## Seuils en attente

Tous les seuils sont **Non définis** et **À valider**, notamment :

- seuils et interprétation des anticorps ou DSA ;
- fraîcheur des sérums et fenêtres temporelles ;
- compatibilité et crossmatch virtuel ;
- confiance, priorité ou classement ;
- contrôles analytiques bloquants ;
- alertes post-greffe ;
- métriques et seuils d'anomalie.

## Questions pour le professionnel de santé

- Quel est le workflow réel et quel vocabulaire doit être affiché ?
- Qui est l'utilisateur principal et qui peut valider quelle action ?
- Quelles données sont obligatoires, disponibles et suffisamment récentes ?
- Quels cas ne doivent jamais recevoir de proposition favorable ?
- Comment définir et traiter une contradiction ou un contrôle invalide ?
- Quelles règles s'appliquent aux trois donneurs du scénario HLA Twin ?
- Le scénario à quatre patients HLA Flow reste-t-il pertinent ?
- Quels facteurs, explications et incertitudes doivent être visibles ?
- Quelle alerte post-greffe peut être simulée sans suggérer un diagnostic ?
- Quels contre-exemples doivent accompagner chaque règle validée ?

## Journal de validation

Ajouter une ligne uniquement après validation explicite.

| Date ISO 8601 | Règle ou décision | Version du ruleset | Personne | Rôle | Preuve ou référence |
| --- | --- | --- | --- | --- | --- |
| — | Aucune validation enregistrée | Non définie | — | — | — |

