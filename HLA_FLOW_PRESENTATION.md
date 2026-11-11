# HLA Flow

### Le copilote intelligent de pré-validation des analyses anti-HLA

## Constat

Les laboratoires d’histocompatibilité assurent le suivi immunologique des patients avant et après une greffe d’organe.

À chaque nouvelle recherche d’anticorps anti-HLA, les professionnels doivent consulter l’historique du patient, comparer les résultats successifs et repérer les éventuelles incohérences nécessitant une analyse approfondie.

Une partie des dossiers présente des résultats négatifs et stables, mais leur vérification reste répétitive. Dans un contexte de manque d’effectifs, cette charge peut contribuer à l’accumulation d’un retard de validation et réduire le temps disponible pour les dossiers complexes.

Les laboratoires disposent déjà des résultats et de l’historique dans leurs logiciels métiers, notamment LymFIP, mais rarement d’un système permettant d’identifier automatiquement :

- quels dossiers sont stables et cohérents ;
- lesquels présentent une rupture dans l’historique ;
- quelles informations sont manquantes ;
- quels dossiers doivent être traités en priorité ;
- pourquoi une vérification experte est nécessaire.

## Solution proposée

**HLA Flow est un copilote intelligent qui confronte le résultat anti-HLA du jour à l’historique immunologique du patient.**

Il reconstruit la trajectoire du patient, applique des règles définies avec les professionnels du laboratoire et détecte les changements ou incohérences nécessitant une attention particulière.

Pour chaque dossier, il fournit :

- le statut proposé ;
- les résultats historiques pertinents ;
- les changements détectés ;
- les données ou contrôles manquants ;
- les raisons justifiant la recommandation ;
- un niveau de vigilance ;
- les éléments nécessitant une validation humaine.

HLA Flow ne remplace jamais le biologiste médical. Il prépare, priorise et explique la décision, mais le professionnel conserve la validation finale.

## Exemples d’utilisation

Le système pourrait notamment identifier :

- un résultat négatif cohérent avec plusieurs résultats antérieurs négatifs ;
- l’apparition d’une positivité après un historique négatif ;
- un changement entre les classes I et II ;
- une identification d’anticorps nécessitant une expertise approfondie ;
- une incohérence entre le dépistage actuel et l’historique du patient ;
- une donnée obligatoire ou un contrôle analytique manquant ;
- une trajectoire inhabituelle devant être vérifiée avant validation.

## Fonctionnalité principale : Immuno Replay

Immuno Replay confronte deux représentations du dossier d’un patient.

### Trajectoire historique

Les analyses précédentes sont représentées chronologiquement avec leurs dates, leurs résultats de classes I et II, les identifications disponibles et les événements pertinents connus.

### Résultat du jour

Le nouveau résultat est replacé dans cette trajectoire. HLA Flow montre immédiatement s’il confirme le profil habituel ou s’il introduit une rupture.

Le professionnel peut ainsi visualiser :

- la stabilité ou l’évolution du profil immunologique ;
- les différences entre le résultat actuel et les précédents ;
- les raisons d’une proposition de voie rapide ;
- les anomalies nécessitant une revue experte ;
- les informations empêchant la pré-validation ;
- les dossiers devant être traités en priorité.

## Fonctionnement envisagé

```text
Logiciel métier et historique patient
                    ↓
Collecte et normalisation des résultats anti-HLA
                    ↓
Reconstruction de la trajectoire immunologique
                    ↓
Application des règles et détection des anomalies
                    ↓
Classement : voie rapide, revue experte ou dossier bloqué
                    ↓
Explication, validation humaine et journal d’audit
```

Les données seraient récupérées autant que possible depuis les logiciels existants. Les professionnels ne rempliraient pas un nouveau dossier complet : ils recevraient une synthèse, les alertes pertinentes et les actions correspondant à leur fonction.

## Démonstrateur envisagé

Le prototype représenterait une file fictive de patients suivis avant ou après une greffe.

Il contiendrait notamment :

- un patient avec un historique négatif stable ;
- un patient présentant une nouvelle positivité ;
- un patient avec une identification complexe ;
- un patient dont le dossier est incomplet.

Une visualisation montrerait la trajectoire de chaque patient et le résultat du jour. Le système répartirait ensuite les dossiers entre voie rapide proposée, revue experte et blocage.

Pendant la démonstration, une donnée pourrait être modifiée afin de montrer comment une nouvelle positivité ou un contrôle manquant change immédiatement la recommandation.

Une analyse en lot permettrait également de montrer comment HLA Flow peut organiser plusieurs centaines de dossiers synthétiques et estimer le temps potentiellement libéré pour le laboratoire.

## Valeur apportée

HLA Flow permettrait aux laboratoires de passer :

> d’une vérification manuelle et répétitive de chaque historique  
> à une pré-validation intelligente, explicable et centrée sur les dossiers nécessitant réellement une expertise.

Les bénéfices recherchés sont :

- réduction du temps consacré aux dossiers négatifs stables ;
- diminution du retard de validation ;
- priorisation des situations positives ou discordantes ;
- meilleure utilisation du temps des professionnels ;
- réduction de la charge cognitive ;
- amélioration de la traçabilité ;
- sécurisation du suivi pré- et post-greffe ;
- mesure quantifiable du temps potentiellement libéré.

## Points à challenger

Nous souhaitons notamment recueillir des retours sur les questions suivantes :

- Le problème vous paraît-il suffisamment important et concret ?
- Quelle proportion des dossiers correspond réellement à des résultats négatifs stables ?
- Quelles règles permettraient de proposer un dossier en voie rapide ?
- Quels cas doivent systématiquement rester en revue experte ?
- Quelles données seraient réellement accessibles depuis LymFIP ou les autres logiciels du laboratoire ?
- Quels contrôles et événements doivent être pris en compte ?
- Qui serait l’utilisateur principal : technicien, biologiste ou les deux ?
- Quel niveau d’explication est nécessaire pour faire confiance à la recommandation ?
- Quels obstacles techniques, médicaux, réglementaires ou organisationnels anticipez-vous ?
- Comment mesurer correctement le temps gagné et la sécurité du système ?
- La solution se distingue-t-elle suffisamment des fonctions déjà proposées par les logiciels métiers ?

## Vision

> **Faire de HLA Flow le système opérationnel capable d’identifier les dossiers anti-HLA répétitifs, de révéler les ruptures importantes et de rendre du temps à l’expertise biologique, sans jamais compromettre la sécurité du patient.**
