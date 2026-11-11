# Synthetic data and protocol rules

These rules apply under `data/` in addition to the repository guide.

- All records are synthetic and must include a clear synthetic marker.
- Keep four canonical scenarios stable and reproducible.
- Store source-like inputs separately from expected derived results.
- Do not tune inputs merely to make an algorithm appear successful.
- Document the narrative purpose, expected status, expected triggered rules, and
  unresolved health-review questions for every scenario.
- Protocol files require a version and review state.
- Unvalidated thresholds use `null` or an explicit pending value; never a guessed
  number that looks authoritative.
- Do not place secrets, personal identifiers, or copied patient-level examples in
  fixtures, logs, snapshots, or documentation.
- Schema changes must update examples, validation tests, and the data dictionary.

