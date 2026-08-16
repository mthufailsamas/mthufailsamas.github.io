# Portfolio Website Source of Truth

Last updated: 2026-08-16

## Purpose and authority

This file is the source of truth for Portfolio Website positioning, role-family mapping, evidence standards, and claim wording. Read it completely before auditing, writing, or changing the website.

Do not rely on conversation memory. Technical claims, metrics, technologies, implementation status, and validation status must be re-checked against the current source-of-truth files and reproducible evidence inside the relevant project repository.

This document governs how project evidence may be presented in the portfolio. It does not replace project-level notebooks, tests, reports, READMEs, CI results, or other technical sources of truth.

## Status vocabulary

Use these labels consistently when auditing portfolio claims:

- **Verified:** supported by current reproducible evidence in the relevant project.
- **Planned:** intentionally designed or documented but not yet implemented.
- **Pending:** expected work or validation has not been completed yet.
- **Blocked:** cannot proceed because a stated dependency or requirement is unavailable.
- **Unverified:** a claim may be plausible, but its current evidence has not yet been inspected.

Never silently promote planned, pending, blocked, or unverified work to verified.

## 1. Portfolio positioning

The primary positioning is **Data & AI Professional**, not a fresh graduate who is merely trying different tools.

The portfolio serves two broad target groups:

- **Data Roles**
- **AI Roles**

The targeted job families are:

1. Data Analysis family
2. Data Science family
3. Data Engineering family
4. AI/ML Engineering family
5. AI Automation family

Use job responsibilities as the basis for positioning because job titles vary between companies. Do not treat a title alone as evidence of role alignment.

Do not fill the Hero with a list of job titles. Communicate job-family coverage through capabilities, project filters, or explicit project-role alignment.

## 2. Evidence required for each role family

### Data Analysis

A project may be associated with the Data Analysis family only when the evidence supports the relevant workflow, including:

- a business question;
- data cleaning;
- SQL or analytical processing;
- visualization;
- insight; and
- a decision that the analysis can support.

### Data Science

A project may be associated with the Data Science family only when the evidence supports the relevant workflow, including:

- statistical reasoning or machine learning;
- feature engineering;
- experimental design;
- a baseline;
- model evaluation; and
- interpretation.

### Data Engineering

A project may be associated with the Data Engineering family only when there is evidence for relevant engineering capabilities such as:

- ingestion;
- ETL or ELT;
- database or storage;
- data quality;
- schema contracts;
- pipeline reliability;
- orchestration; or
- monitoring.

Using pandas for preprocessing alone is not enough to claim Data Engineering.

### AI/ML Engineering

A project may be associated with the AI/ML Engineering family only when there is evidence for relevant engineering capabilities such as:

- a reusable model artifact;
- batch or online inference;
- an API;
- tests;
- Docker;
- CI/CD;
- a model contract;
- security;
- logging; or
- monitoring.

Notebook modeling alone is not enough to claim AI Engineering.

### AI Automation

A project may be associated with the AI Automation family only when there is evidence for the relevant operational workflow, including:

- workflow orchestration;
- AI extraction, classification, or decision support;
- deterministic validation;
- human review;
- system integration;
- retries;
- an audit trail; and
- operational monitoring.

A single Gemini API call is not enough to claim AI Automation.

## 3. Project mapping rules

- Every project has exactly one **primary role family**.
- A project may have no more than two **supporting role families**, and each supporting family requires real evidence.
- Do not force one project to cover all five job families.
- The portfolio as a whole covers the five families; each individual project does not need to do so.
- Never move metrics, technologies, implementation details, or status between projects.
- Audit the repository and source of truth for every relevant project before publishing a claim.
- If the evidence has not been inspected, label the claim **unverified** or **pending** instead of guessing from conversation history.

### Provisional mapping directions

These are audit directions, not approved publishing claims:

| Project | Provisional role-family direction | Current status |
| --- | --- | --- |
| Retail Sales Forecasting | Primary: AI/ML Engineering; supporting: Data Science | Unverified until the current project source of truth and reproducible evidence are audited |
| Invoice Operations | Primary: AI Automation | Unverified until the current project source of truth and reproducible evidence are audited |
| DWDM Monitoring | Audit before choosing between Data Engineering, Data Analysis, or supporting AI/ML Engineering | Unverified; no role-family mapping may be published yet |
| Academic projects | Generally Data Science or Data Analysis, depending on evidence | Must remain explicitly identified as academic projects and be audited individually |

## 4. Evidence-first portfolio rules

Every metric must be traceable to a current notebook, test output, README, CI result, report, or other project source of truth.

Keep the following evidence levels distinct:

- **Controlled evaluation:** evaluation under a defined dataset, split, replay, or experimental setup. It is not live operational performance.
- **Local verification:** functionality or tests verified in a local environment. It is not external deployment.
- **External deployment:** the system is running in an external environment and that deployment is verifiable.
- **Live business validation:** the system has been used in a real operational context and its business outcome has been measured.

### Claim and wording controls

- Never convert WAPE, RMSLE, MAE, or another error metric into “accuracy.”
- Do not claim cost savings, waste reduction, faster work, increased revenue, or other business impact without a real measurement.
- Do not use **production-ready**, **enterprise-ready**, **deployed**, **real-time**, or **live** unless current evidence supports the exact claim.
- If an API runs only locally through Docker, describe it as **locally verified and containerized**, not deployed.
- Older datasets may still be used, but their time-relevance limitation must be stated.
- Do not hide imperfect results. Present each metric together with its evaluation context.

## Mandatory workflow before publishing or revising claims

1. Read this file completely.
2. Identify every project affected by the proposed website change.
3. Read that project's current `AGENTS.md`, `PROJECT.md`, README, and any source-of-truth files required by its own routing instructions.
4. Inspect reproducible evidence for every metric, technology, implementation, and validation statement.
5. Assign the correct evidence status and evidence level.
6. Select one primary role family and no more than two evidence-supported supporting families.
7. Write only claims supported by the audit; mark anything else unverified, planned, pending, or blocked.
8. Re-check that no evidence or status has crossed project boundaries.
9. Update this file in the same revision whenever an approved portfolio policy or role-family mapping changes.
