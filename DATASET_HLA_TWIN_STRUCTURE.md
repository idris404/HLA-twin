# HLA Twin — Structure complète du jeu de données

## 1. Principe général

Le jeu de données ne doit pas être construit comme un unique CSV contenant une ligne par patient. Un patient peut posséder plusieurs typages, sérums, recherches d’anticorps, événements immunisants, propositions de donneurs, crossmatchs et visites post-greffe.

La structure recommandée comporte :

- une base normalisée pour conserver les données sources ;
- un fichier JSONL de démonstration pour l’application ;
- une table de snapshots pour entraîner ultérieurement un modèle sans fuite temporelle.

Le schéma complet représente environ **380 variables distinctes**, auxquelles s’ajoutent les observations répétées. Un dossier longitudinal réel peut donc contenir plusieurs milliers de valeurs.

## 2. Organisation des fichiers

```text
hla-twin-dataset/
├── metadata/
│   ├── dataset_manifest.json
│   ├── data_dictionary.csv
│   ├── protocol_versions.csv
│   └── code_systems.json
├── raw/
│   ├── recipients.csv
│   ├── recipient_clinical_history.csv
│   ├── donors.csv
│   ├── hla_typings.csv
│   ├── serum_samples.csv
│   ├── antibody_assays.csv
│   ├── antibody_specificities.csv
│   ├── sensitizing_events.csv
│   ├── organ_offers.csv
│   ├── crossmatches.csv
│   ├── transplants.csv
│   ├── follow_up_visits.csv
│   ├── post_transplant_immunology.csv
│   ├── biopsies_rejections.csv
│   ├── treatments.csv
│   └── outcomes.csv
├── derived/
│   ├── donor_recipient_pair_features.parquet
│   ├── prediction_snapshots.parquet
│   └── model_labels.parquet
└── demo/
    └── hla_twin_cases.jsonl
```

## 3. Identifiants communs

Tous les fichiers utilisent des identifiants techniques pseudonymisés :

- `recipient_id` : receveur ;
- `donor_id` : donneur ;
- `pair_id` : couple donneur–receveur ;
- `offer_id` : proposition de greffon ;
- `transplant_id` : transplantation réalisée ;
- `typing_id` : typage HLA ;
- `sample_id` : prélèvement ou sérum ;
- `assay_id` : analyse biologique ;
- `crossmatch_id` : crossmatch ;
- `visit_id` : visite de suivi ;
- `protocol_version_id` : protocole appliqué ;
- `institution_id` : établissement source.

Aucun nom, prénom, numéro de sécurité sociale, adresse ou identifiant hospitalier directement reconnaissable ne doit apparaître dans le démonstrateur.

## 4. Receveur — `recipients.csv`

### Identité technique

- `recipient_id`
- `institution_id`
- `synthetic_record`
- `record_created_at`
- `record_updated_at`
- `data_source`

### Données démographiques

- `birth_year`
- `age_at_evaluation`
- `sex_at_birth`
- `height_cm`
- `weight_kg`
- `bmi`
- `pediatric_status`

### Parcours de transplantation

- `target_organ`
- `listing_date`
- `waitlist_status`
- `waitlist_status_date`
- `urgency_status`
- `dialysis_status`
- `dialysis_start_date`
- `previous_transplant_count`
- `previous_organ_types`
- `last_transplant_date`

### Immunologie générale

- `abo_group`
- `rhesus_group`
- `pra_percent`
- `cpra_percent`
- `sensitization_category`
- `known_hla_immunization`
- `acceptable_antigen_program`
- `local_antibody_risk_category`

## 5. Histoire clinique du receveur — `recipient_clinical_history.csv`

- `history_id`
- `recipient_id`
- `diagnosis_primary`
- `diagnosis_secondary`
- `kidney_disease_cause`
- `diabetes_status`
- `cardiovascular_disease`
- `malignancy_history`
- `active_infection_status`
- `viral_serology_cmv`
- `viral_serology_ebv`
- `viral_serology_hbv`
- `viral_serology_hcv`
- `hiv_status`
- `comorbidity_index`
- `adherence_concern`
- `clinical_note_available`
- `recorded_at`

Ces variables permettent de contextualiser le patient, mais le premier modèle immunologique ne doit pas prétendre établir à lui seul l’éligibilité médicale globale à la greffe.

## 6. Donneur — `donors.csv`

### Identité technique

- `donor_id`
- `institution_id`
- `synthetic_record`
- `donor_type`
- `recorded_at`

### Données générales

- `birth_year`
- `age_at_donation`
- `sex_at_birth`
- `height_cm`
- `weight_kg`
- `bmi`
- `abo_group`
- `rhesus_group`
- `relationship_to_recipient`

### Caractéristiques du greffon

- `organ_type`
- `laterality`
- `living_or_deceased`
- `donation_pathway`
- `cause_of_death`
- `expanded_criteria_donor`
- `cold_ischemia_time_minutes`
- `warm_ischemia_time_minutes`
- `organ_quality_index`
- `donor_creatinine`
- `donor_egfr`
- `proteinuria_status`

### Risques infectieux et médicaux

- `cmv_status`
- `ebv_status`
- `hbv_status`
- `hcv_status`
- `hiv_status`
- `bacteremia_status`
- `malignancy_history`
- `hypertension_history`
- `diabetes_history`
- `smoking_history`

## 7. Typages HLA — `hla_typings.csv`

Une ligne correspond à un allèle ou antigène observé pour un individu.

- `typing_id`
- `subject_type`
- `subject_id`
- `sample_id`
- `typing_date`
- `determination_number`
- `typing_method`
- `typing_resolution`
- `laboratory_id`
- `quality_status`
- `locus`
- `allele_1`
- `allele_2`
- `serological_equivalent_1`
- `serological_equivalent_2`
- `ambiguity_code`
- `confirmed_status`
- `discordance_with_previous`

Loci prévus dans le modèle complet :

- HLA-A
- HLA-B
- HLA-C
- HLA-DRB1
- HLA-DRB3
- HLA-DRB4
- HLA-DRB5
- HLA-DQA1
- HLA-DQB1
- HLA-DPA1
- HLA-DPB1

## 8. Prélèvements et sérums — `serum_samples.csv`

- `sample_id`
- `recipient_id`
- `collection_datetime`
- `received_datetime`
- `analysis_datetime`
- `sample_type`
- `sample_status`
- `serum_bank_status`
- `serum_bank_position`
- `volume_available_ml`
- `hemolysis_status`
- `lipemia_status`
- `icterus_status`
- `quality_control_status`
- `after_sensitizing_event`
- `linked_event_id`
- `days_since_linked_event`
- `pre_or_post_transplant`
- `days_relative_to_transplant`

## 9. Analyses d’anticorps — `antibody_assays.csv`

- `assay_id`
- `sample_id`
- `recipient_id`
- `assay_date`
- `assay_type`
- `technology`
- `manufacturer`
- `kit_name`
- `kit_lot`
- `instrument`
- `software_version`
- `operator_id_pseudonymized`
- `class_i_screen_result`
- `class_ii_screen_result`
- `class_i_normalized_signal`
- `class_ii_normalized_signal`
- `single_antigen_performed`
- `dilution_factor`
- `edta_treatment`
- `prozone_assessed`
- `positive_control_value`
- `negative_control_value`
- `assay_qc_status`
- `interpretation_status`
- `interpretation_comment_code`

## 10. Spécificités d’anticorps — `antibody_specificities.csv`

Une ligne correspond à une spécificité détectée sur un sérum.

- `specificity_id`
- `assay_id`
- `sample_id`
- `recipient_id`
- `hla_class`
- `target_locus`
- `target_antigen`
- `target_allele`
- `bead_identifier`
- `raw_mfi`
- `background_corrected_mfi`
- `normalized_mfi`
- `mfi_after_dilution`
- `historical_peak_mfi`
- `local_positive_status`
- `local_cutoff_version`
- `epitope_pattern`
- `creg_pattern`
- `complement_binding_c1q`
- `complement_binding_c3d`
- `igg_subclass`
- `current_or_historical`
- `first_detected_at`
- `last_detected_at`
- `trend_direction`
- `antigen_forbidden_status`
- `antigen_acceptable_status`
- `manual_review_status`

Les valeurs MFI doivent être conservées comme mesures semi-quantitatives et interprétées avec les règles du laboratoire, jamais comme des probabilités universelles.

## 11. Événements immunisants — `sensitizing_events.csv`

- `event_id`
- `recipient_id`
- `event_type`
- `event_date`
- `event_end_date`
- `transfusion_product_type`
- `transfusion_unit_count`
- `pregnancy_outcome`
- `previous_donor_hla_known`
- `previous_transplant_id`
- `transplantectomy_status`
- `immunosuppression_stopped`
- `immunosuppression_change_type`
- `follow_up_sample_required`
- `follow_up_sample_id`
- `event_documentation_quality`
- `recorded_at`

## 12. Propositions de greffon — `organ_offers.csv`

- `offer_id`
- `recipient_id`
- `donor_id`
- `pair_id`
- `organ_type`
- `offer_datetime`
- `decision_deadline`
- `allocation_system`
- `allocation_rank`
- `urgency_status_at_offer`
- `waiting_time_days`
- `distance_to_donor_center_km`
- `estimated_transport_time_minutes`
- `organ_quality_index`
- `offer_status`
- `offer_acceptance_status`
- `decline_reason_code`
- `decision_maker_role`
- `decision_datetime`
- `protocol_version_id`
- `data_cutoff_datetime`

`data_cutoff_datetime` est indispensable : seules les informations disponibles avant cette date peuvent être utilisées pour produire la recommandation.

## 13. Crossmatch — `crossmatches.csv`

- `crossmatch_id`
- `pair_id`
- `offer_id`
- `recipient_id`
- `donor_id`
- `sample_id`
- `crossmatch_type`
- `method`
- `performed_at`
- `virtual_crossmatch_status`
- `virtual_crossmatch_confidence`
- `cdc_t_cell_result`
- `cdc_b_cell_result`
- `flow_t_cell_result`
- `flow_b_cell_result`
- `channel_shift_t_cell`
- `channel_shift_b_cell`
- `auto_crossmatch_result`
- `pronase_treatment`
- `dtt_treatment`
- `technical_interference`
- `qc_status`
- `overall_result`
- `discordance_virtual_cellular`
- `manual_interpretation`
- `interpretation_comment_code`

## 14. Variables calculées du couple — `donor_recipient_pair_features.parquet`

### Compatibilité générale

- `pair_id`
- `abo_compatibility_category`
- `abo_special_protocol_required`
- `recipient_data_completeness`
- `donor_data_completeness`
- `overall_data_completeness`
- `data_freshness_score`
- `out_of_distribution_score`

### Mismatch HLA

- `hla_a_antigen_mismatch_count`
- `hla_b_antigen_mismatch_count`
- `hla_c_antigen_mismatch_count`
- `hla_drb1_antigen_mismatch_count`
- `hla_dqb1_antigen_mismatch_count`
- `hla_dqa1_antigen_mismatch_count`
- `hla_dpb1_antigen_mismatch_count`
- `total_antigen_mismatch_count`
- `dr_dq_mismatch_count`
- `amino_acid_mismatch_score`
- `eplet_mismatch_class_i`
- `eplet_mismatch_class_ii`
- `antibody_verified_eplet_mismatch`
- `pirche_i_score`
- `pirche_ii_score`
- `hla_emma_score`
- `molecular_score_available`

### DSA et mémoire immunologique

- `current_dsa_count`
- `historical_dsa_count`
- `current_dsa_class_i_count`
- `current_dsa_class_ii_count`
- `historical_dsa_class_i_count`
- `historical_dsa_class_ii_count`
- `maximum_current_dsa_mfi`
- `maximum_historical_dsa_mfi`
- `sum_current_dsa_mfi`
- `sum_historical_dsa_mfi`
- `complement_binding_dsa_present`
- `forbidden_antigen_present`
- `acceptable_antigen_only`
- `days_since_last_antibody_assay`
- `sensitizing_event_after_last_serum`
- `virtual_crossmatch_reliability`

### Résultat explicable

- `immunological_profile_category`
- `expert_review_priority`
- `analysis_confidence`
- `missing_critical_data_count`
- `critical_flag_count`
- `triggered_rule_ids`
- `explanation_codes`

## 15. Transplantation — `transplants.csv`

- `transplant_id`
- `offer_id`
- `pair_id`
- `recipient_id`
- `donor_id`
- `organ_type`
- `transplant_datetime`
- `transplant_center_id`
- `living_or_deceased`
- `cold_ischemia_time_minutes`
- `warm_ischemia_time_minutes`
- `induction_therapy_category`
- `desensitization_protocol_used`
- `plasmapheresis_used`
- `ivig_used`
- `rituximab_used`
- `pretransplant_dsa_status`
- `pretransplant_crossmatch_status`
- `technical_success`
- `immediate_graft_function`
- `delayed_graft_function`
- `primary_non_function`

## 16. Visites de suivi — `follow_up_visits.csv`

- `visit_id`
- `transplant_id`
- `recipient_id`
- `visit_datetime`
- `days_post_transplant`
- `visit_type`
- `graft_status`
- `serum_creatinine`
- `egfr`
- `proteinuria`
- `urine_output`
- `dialysis_required`
- `acute_graft_dysfunction`
- `suspected_rejection`
- `infection_status`
- `hospitalization_status`
- `immunosuppression_adherence_concern`
- `tacrolimus_level`
- `cyclosporine_level`
- `clinical_action_taken`
- `next_monitoring_due_at`

## 17. Immunologie post-greffe — `post_transplant_immunology.csv`

- `post_tx_immunology_id`
- `transplant_id`
- `recipient_id`
- `sample_id`
- `days_post_transplant`
- `screen_class_i_result`
- `screen_class_ii_result`
- `preexisting_dsa_present`
- `de_novo_dsa_present`
- `de_novo_dsa_first_date`
- `dsa_specificities`
- `maximum_dsa_mfi`
- `dsa_trend`
- `persistent_dsa`
- `transient_dsa`
- `complement_binding_status`
- `non_hla_antibody_tested`
- `non_hla_antibody_result`
- `dd_cfdna_available`
- `dd_cfdna_value`
- `immunological_alert_level`
- `recommended_human_review`

## 18. Biopsies et rejets — `biopsies_rejections.csv`

- `biopsy_id`
- `transplant_id`
- `recipient_id`
- `biopsy_datetime`
- `indication_or_protocol_biopsy`
- `banff_version`
- `antibody_mediated_rejection_status`
- `t_cell_mediated_rejection_status`
- `mixed_rejection_status`
- `c4d_status`
- `microvascular_inflammation_score`
- `glomerulitis_score`
- `peritubular_capillaritis_score`
- `interstitial_inflammation_score`
- `tubulitis_score`
- `chronicity_score`
- `pathologist_conclusion_code`
- `treatment_required`
- `rejection_onset_days`
- `rejection_resolution_status`

## 19. Traitements — `treatments.csv`

- `treatment_id`
- `transplant_id`
- `recipient_id`
- `treatment_category`
- `medication_name_code`
- `start_datetime`
- `end_datetime`
- `dose_category`
- `route`
- `treatment_indication`
- `immunosuppression_regimen_version`
- `adherence_status`
- `interruption_reason`
- `desensitization_status`
- `rejection_treatment_status`
- `adverse_event_status`
- `recorded_at`

Le démonstrateur ne doit pas générer de recommandation thérapeutique autonome à partir de ces champs.

## 20. Résultats cliniques et labels — `outcomes.csv`

- `outcome_id`
- `transplant_id`
- `recipient_id`
- `follow_up_duration_days`
- `graft_survival_30d`
- `graft_survival_1y`
- `graft_survival_3y`
- `graft_survival_5y`
- `patient_survival_1y`
- `patient_survival_5y`
- `acute_rejection_30d`
- `acute_rejection_1y`
- `antibody_mediated_rejection_1y`
- `t_cell_mediated_rejection_1y`
- `de_novo_dsa_1y`
- `de_novo_dsa_3y`
- `return_to_dialysis`
- `graft_loss_date`
- `graft_loss_cause`
- `death_date`
- `death_cause_category`
- `last_known_egfr`
- `last_follow_up_date`
- `censored_status`

Un modèle futur doit viser un label clairement défini, par exemple `antibody_mediated_rejection_1y`, et non une cible vague comme « greffe validée ».

## 21. Protocoles — `protocol_versions.csv`

- `protocol_version_id`
- `institution_id`
- `organ_type`
- `protocol_name`
- `valid_from`
- `valid_to`
- `antibody_cutoff_policy`
- `serum_freshness_policy`
- `crossmatch_policy`
- `abo_policy`
- `acceptable_antigen_policy`
- `forbidden_antigen_policy`
- `molecular_matching_policy`
- `human_validation_required`
- `protocol_document_reference`
- `approved_by_role`

## 22. Snapshots destinés au modèle — `prediction_snapshots.parquet`

Une ligne correspond à une décision prise à un instant donné pour un couple donneur–receveur.

- `snapshot_id`
- `pair_id`
- `recipient_id`
- `donor_id`
- `offer_id`
- `prediction_time`
- `data_cutoff_datetime`
- variables receveur disponibles avant la coupure ;
- variables donneur disponibles avant la coupure ;
- variables immunologiques disponibles avant la coupure ;
- variables du couple calculées avant la coupure ;
- `target_name`
- `target_horizon_days`
- `target_value`
- `target_observed_at`
- `censored_status`
- `train_validation_test_split`
- `institution_split`
- `temporal_split`

Les événements postérieurs à `data_cutoff_datetime` ne doivent jamais apparaître dans les variables d’entrée.

## 23. Format JSONL du démonstrateur

Chaque ligne de `hla_twin_cases.jsonl` contient un dossier complet imbriqué :

```json
{
  "case_id": "CASE-001",
  "evaluation_time": "2026-11-14T10:00:00Z",
  "protocol_version_id": "KIDNEY-DEMO-1.0",
  "recipient": {
    "recipient_id": "R-001",
    "abo_group": "O",
    "cpra_percent": 82,
    "previous_transplant_count": 1,
    "hla_typings": [],
    "sensitizing_events": [],
    "serum_samples": [],
    "antibody_assays": []
  },
  "donor": {
    "donor_id": "D-001",
    "abo_group": "O",
    "donor_type": "living",
    "organ_type": "kidney",
    "hla_typings": []
  },
  "pair_assessment": {
    "abo_compatibility_category": "compatible",
    "hla_mismatches": {},
    "molecular_mismatches": {},
    "current_dsa": [],
    "historical_dsa": [],
    "virtual_crossmatch_status": "indeterminate",
    "data_completeness": 0.91,
    "data_freshness": 0.58,
    "critical_flags": [],
    "missing_data": [],
    "profile_category": "expert_review",
    "confidence": "low",
    "explanation_codes": []
  },
  "post_transplant_timeline": [],
  "expected_demo_result": {
    "status": "expert_review",
    "reason_codes": []
  }
}
```

## 24. Volumétrie recommandée

### Démonstrateur du hackathon

- 100 receveurs synthétiques ;
- 30 donneurs synthétiques ;
- 300 à 500 couples donneur–receveur ;
- 3 à 12 sérums par receveur ;
- 0 à 100 spécificités d’anticorps par sérum ;
- 1 à 5 événements immunisants par receveur ;
- 20 transplantations fictives avec suivi longitudinal ;
- 4 dossiers entièrement scénarisés pour la démonstration orale.

### Futur modèle de recherche

La taille nécessaire dépendra de la cible clinique, de sa fréquence et du nombre d’établissements. Elle devra être déterminée par un biostatisticien à partir d’un protocole d’étude ; aucun volume arbitraire ne peut garantir une performance clinique.

## 25. Qualité, biais et sécurité

Le jeu de données doit documenter :

- origine de chaque variable ;
- unité et système de codage ;
- valeur manquante et raison de l’absence ;
- méthode analytique et version ;
- protocole local applicable ;
- changements de laboratoire ou de technique ;
- corrections manuelles ;
- populations sous-représentées ;
- séparation temporelle et par établissement ;
- statut synthétique, pseudonymisé ou réel ;
- autorisation et finalité d’utilisation.

Le démonstrateur utilisera exclusivement des données synthétiques et ne revendiquera aucune performance clinique.
