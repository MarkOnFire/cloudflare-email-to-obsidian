# Airtable Formula Field Reference

_Source: [Formula Field Reference](https://support.airtable.com/docs/formula-field-reference), retrieved 2025-11-09_

## Overview
- Airtable formulas reuse many Excel/Google Sheets conventions but apply to record-level calculations.
- Formulas always evaluate within a record context; reference other fields via `{Field Name}`.
- Operators follow standard precedence; wrap complex logic in parentheses for clarity.
- String literals require double quotes. Escape quotes with `\"`.
- Convert lookup/rollup results to scalars with `ARRAYJOIN` or similar helpers.

## Text Operators & Functions
- **Operators:** `&` (concatenate).
- **Functions:** `ARRAYJOIN`, `CONCATENATE`, `ENCODE_URL_COMPONENT`, `FIND`, `LEFT`, `LEN`, `LOWER`, `MID`, `REPLACE`, `REPT`, `RIGHT`, `SEARCH`, `SUBSTITUTE`, `T`, `TRIM`, `UPPER`.
- Use `SEARCH` for case-insensitive matching, `FIND` for case-sensitive.
- Wrap Templater output with `TRIM` to clean whitespace before syncing to Obsidian.

## Logical Tools
- **Operators:** `>`, `<`, `>=`, `<=`, `=`, `!=`.
- **Functions:** `AND`, `BLANK`, `ERROR`, `FALSE`, `IF`, `ISERROR`, `NOT`, `OR`, `SWITCH`, `TRUE`, `XOR`.
- Prefer `SWITCH` for multiple equality comparisons instead of nested `IF`.
- `BLANK()` distinguishes empty values from zero-length strings when evaluating frontmatter defaults.

## Numeric Operators & Functions
- **Operators:** `+`, `-`, `*`, `/`.
- **Functions:** `ABS`, `AVERAGE`, `CEILING`, `COUNT`, `COUNTA`, `COUNTALL`, `EVEN`, `EXP`, `FLOOR`, `INT`, `LOG`, `MAX`, `MIN`, `MOD`, `ODD`, `POWER`, `ROUND`, `ROUNDDOWN`, `ROUNDUP`, `SQRT`, `SUM`, `VALUE`.
- `COUNT` ignores blanks, `COUNTALL` includes blanks/nulls, `COUNTA` handles text.
- `VALUE()` converts numeric strings from text fields before math.
- For currency rounding, pair `ROUND(value, 2)` with `DATETIME_FORMAT` when displaying.

## Date & Time Functions
- Key helpers: `CREATED_TIME`, `DATEADD`, `DATESTR`, `DATETIME_DIFF`, `DATETIME_FORMAT`, `DATETIME_PARSE`, `DAY`, `HOUR`, `IS_AFTER`, `IS_BEFORE`, `IS_SAME`, `LAST_MODIFIED_TIME`, `MINUTE`, `MONTH`, `NOW`, `SECOND`, `SET_LOCALE`, `SET_TIMEZONE`, `TIMESTR`, `TODAY`, `TONOW`, `FROMNOW`, `WEEKDAY`, `WEEKNUM`, `WORKDAY`, `WORKDAY_DIFF`, `YEAR`.
- Dates are stored in UTC; apply `SET_TIMEZONE` before formatting for local context.
- Use `LAST_MODIFIED_TIME({Field})` to trigger workflows when specific metadata changes.
- `WORKDAY_DIFF` respects optional holiday arrays—store ISO date arrays in a single select or JSON field to parameterize.

## Array Helpers
- `ARRAYCOMPACT`, `ARRAYFLATTEN`, `ARRAYJOIN`, `ARRAYUNIQUE`, `ARRAYSLICE`.
- Helpful for cleaning lookup/rollup outputs before writing back to Obsidian frontmatter.
- Combine `ARRAYFLATTEN` → `ARRAYCOMPACT` → `ARRAYUNIQUE` to dedupe linked-record tags.

## Record Metadata
- `RECORD_ID`, `CREATED_TIME`, `LAST_MODIFIED_TIME`.
- Use `RECORD_ID()` to persist Airtable IDs into note metadata for two-way sync reliability.

## Regex Functions
- `REGEX_MATCH`, `REGEX_EXTRACT`, `REGEX_REPLACE`.
- All functions support standard JavaScript-style regex syntax.
- Use non-greedy groups when extracting slug-like identifiers for templated note names.

## Additional Notes
- Rollups accept formulas; `ARRAYJOIN(values, ', ')` is a common template to flatten linked arrays.
- Use `IF({Field}, {Field}, BLANK())` to suppress “0” style placeholders in published notes.
- Formula editor supports a “Formula Playground” base linked in the source article for experimentation.
- Airtable may add new functions without considering it a breaking change—defensive parsing is recommended in scripts that consume formula output.
