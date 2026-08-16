# Portfolio Website Source of Truth

Last updated: 2026-08-16

## Purpose and authority

This file is the source of truth for Portfolio Website positioning, the canonical Project Registry, role-family mapping, evidence standards, and claim wording. Read it completely before auditing, writing, or changing the website.

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

### Project-context filter

The public project filter uses four context labels:

- **All:** every selected project;
- **Professional:** work delivered inside an employment or organizational context;
- **Independent:** self-directed portfolio systems built outside an employer or academic assignment; and
- **Academic:** research, thesis, internship-linked academic modeling, or collaborative academic work.

This filter describes where the work was developed. It does not rank project quality, seniority, or technical maturity, and it does not replace evidence-based role-family mapping.

The approved current context mapping is:

- **Professional:** DWDM Optical Sensor Monitoring;
- **Independent:** AI Invoice Approval Automation and Retail Sales Forecasting & Planning System; and
- **Academic:** Rainfall Forecasting with XGBoost, Thyroid Cancer Recurrence Classification, Rainfall Forecasting with BiLSTM, and Rice Price Forecasting with ARIMA.

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

## 4. Canonical Project Registry

The Project Registry in this file is the canonical portfolio record for every project card. A project card must not be written or revised until its actual workspace folder and required source-of-truth files have been inspected and its registry record has been created or updated.

Never populate a registry field from conversation memory, the current website card, or another project. The current website may be audited for consistency only after the project evidence has established the canonical record.

### Required registry fields

Every project record must contain:

- **Workspace folder:** the exact local project directory used for the audit.
- **Source-of-truth files inspected:** the current project files that support the record, including any `AGENTS.md` or `PROJECT.md` required by project routing.
- **Last audited:** the date of the most recent evidence audit.
- **Display title:** the approved public-facing project title.
- **Context:** whether the work is professional, independent, academic, a controlled demonstration, confidential, or another accurately supported context.
- **Primary role family:** exactly one evidence-supported role family.
- **Supporting role families:** zero to two evidence-supported role families.
- **Verified metrics:** only metrics reproduced or traced to current project evidence, together with their evaluation context and source.
- **Public repository:** the verified public repository URL, or an explicit statement that no public repository is available.
- **Limitations:** material limitations involving data recency, evaluation scope, deployment, validation, confidentiality, or implementation status.
- **Portfolio status:** the current registry state defined below.

If a required fact is not established by the audit, write **Unverified** or **Pending**. Do not fill the gap with a plausible value.

### Portfolio status values

- **Unreviewed:** no complete evidence audit has been performed.
- **Audit in progress:** the source-of-truth review has started but required registry fields remain unresolved.
- **Draft:** the audit is complete enough to draft a card, but the wording or mapping is not yet approved.
- **Approved:** the registry record and proposed card are evidence-backed and approved for publication.
- **Published:** the live card matches the current approved registry record.
- **Revision required:** the live card no longer matches current evidence or the approved registry record.
- **Hold:** the project must not currently be presented as a portfolio card.

### Canonical record template

Copy this block for each audited project. Do not remove required fields.

```markdown
### [Internal project identifier]

- Workspace folder:
- Source-of-truth files inspected:
- Last audited:
- Display title:
- Context:
- Primary role family:
- Supporting role families:
- Verified metrics:
- Public repository:
- Limitations:
- Portfolio status:
```

### Audited project records

### retail-sales-forecasting-ai-engineering

- **Workspace folder:** `AI Engineer/` under the shared portfolio-project workspace
- **Source-of-truth files inspected:** `AI Engineer/AGENTS.md`, `AI Engineer/PROJECT.md`, `AI Engineer/README.md`, the current Git worktree, public `main`, release `v1.0.0`, and the two GitHub Actions runs for commit `71de0055bf61767d7c1e4e995c22efad9d7c6d48`.
- **Last audited:** 2026-08-16
- **Display title:** Retail Sales Forecasting & Planning System
- **Context:** Independent portfolio project using authorized Kaggle competition data, controlled chronological model evaluation, and locally verified batch, API, and Docker inference.
- **Primary role family:** AI/ML Engineering
- **Supporting role families:** Data Science
- **Verified metrics:** Validation RMSLE 0.4131 and WAPE 13.5188%; protected internal-test RMSLE 0.4140, WAPE 15.6431%, and signed bias 0.7623%; 28,512 forecasts across 1,782 store-family series; 38/38 synthetic contract tests passed; local FastAPI and healthy Docker inference each matched all 28,512 notebook predictions; GitHub Actions contract-test runs `31933494858` and `31933502820` completed successfully on the published v1.0.0 commit.
- **Public repository:** https://github.com/mthufailsamas/retail-sales-forecasting-ai-engineering
- **Limitations:** The competition data covers 2013-2017 and supports product-family rather than SKU forecasting. The source does not provide inventory, supplier, cost, margin, or capacity inputs. Model evidence comes from one fixed validation window and one protected internal-test window. Runtime verification is local and containerized; no external deployment or live business impact has been demonstrated.
- **Approved Project Output wording:** The system produces a checked 16-day forecast for every store-family series, giving planning teams one consistent demand view through the same reusable artifact across batch, API, and containerized inference.
- **Approved Evidence & Scope wording:** Results come from one fixed validation window and one protected internal-test window on 2013–2017 competition data. The locally verified, containerized API produces product-family sales forecasts rather than inventory decisions.
- **Portfolio status:** Published. The evidence-aligned wording and corrected system visual are current on the live website.

### ai-invoice-approval-automation

- **Workspace folder:** `AI Automation/` under the shared portfolio-project workspace
- **Source-of-truth files inspected:** `AI Automation/AGENTS.md`, `AI Automation/PROJECT.md`, `AI Automation/README.md`, the current Git worktree, and its configured public repository remote.
- **Last audited:** 2026-08-16
- **Display title:** The live card currently uses `End-to-End AI Invoice Approval Automation`; the accepted replacement project title is `AI Service Request Automation`, with new public wording pending the project audit and implementation.
- **Context:** Independent portfolio project.
- **Primary role family:** Pending. The legacy invoice implementation is an AI Automation candidate, but the current `AI Automation/PROJECT.md` explicitly resets accepted evidence for the replacement service-request project.
- **Supporting role families:** Pending.
- **Verified metrics:** Unverified for the newly accepted service-request project. Legacy invoice metrics have not been accepted into the current project source of truth and must not be transferred to the replacement project.
- **Public repository:** https://github.com/mthufailsamas/ai-invoice-approval-automation (legacy invoice repository; replacement repository status pending)
- **Limitations:** The current website card and public README describe the legacy invoice workflow, while the current project source of truth has accepted a replacement service-request direction and marks implementation evidence as not yet verified. The worktree is also mid-revision. Do not revise or republish its technical claims until the new project audit and user approval are complete.
- **Portfolio status:** Revision required

### dwdm-optical-sensor-monitoring

- **Workspace folder:** `C:/Users/Thufail/Documents/Lintasarta/`
- **Source-of-truth files inspected:** `C:/Users/Thufail/Documents/Lintasarta/README.md` and the current local project structure.
- **Last audited:** 2026-08-16
- **Display title:** DWDM Optical Sensor Monitoring with Change-Point and Degradation Detection
- **Context:** Professional project-stage work at PT Aplikanusa Lintasarta using confidential operational sources.
- **Primary role family:** Data Engineering
- **Supporting role families:** Data Analysis
- **Verified metrics:** Pending a dedicated evidence audit. The native 5-minute telemetry contract is documented; do not import the current website's sensor count or another quantitative claim without tracing it to current project evidence.
- **Public repository:** No public repository is available; the local project is proprietary and currently has no valid Git repository baseline.
- **Limitations:** Production telemetry, database contents, credentials, source access, and operational screenshots are confidential. Statistical events are investigation evidence rather than confirmed physical root causes. The local dashboard is not internet-facing and has no production authentication, TLS termination, or web-server hardening.
- **Portfolio status:** Audit in progress

### xgboost-rainfall-forecasting

- **Workspace folder:** `XGBoost Skripsi/` under the shared portfolio-project workspace
- **Source-of-truth files inspected:** `XGBoost Skripsi/README.md`, the current Git worktree, and its configured public repository remote.
- **Last audited:** 2026-08-16
- **Display title:** Rainfall Forecasting with XGBoost and Grid Search
- **Context:** Academic research project that also supported a peer-reviewed publication.
- **Primary role family:** Data Science
- **Supporting role families:** Pending a dedicated evidence audit.
- **Verified metrics:** Unverified in this context-only audit; the current live-card metrics must be traced to the current notebook or reproducible outputs before any revision.
- **Public repository:** https://github.com/mthufailsamas/xgboost-rainfall-prediction
- **Limitations:** The original observations are private and are not redistributed. The public workflow defaults to synthetic same-schema data, and the current notebook has uncommitted changes that must be reconciled before a claims audit.
- **Portfolio status:** Audit in progress

### xgboost-thyroid-recurrence-classification

- **Workspace folder:** `XGBoost Skripsi HANA/` under the shared portfolio-project workspace
- **Source-of-truth files inspected:** `XGBoost Skripsi HANA/README.md`, the current Git worktree, and its configured public repository remote.
- **Last audited:** 2026-08-16
- **Display title:** Thyroid Cancer Recurrence Classification with XGBoost, Information Gain, and Grid Search
- **Context:** Collaborative academic research project.
- **Primary role family:** Data Science
- **Supporting role families:** Pending a dedicated evidence audit.
- **Verified metrics:** Unverified in this context-only audit; the current live-card metrics must be traced to the current notebook or reproducible outputs before any revision.
- **Public repository:** https://github.com/mthufailsamas/xgboost-thyroid-recurrence-classification
- **Limitations:** The experimental dataset does not support clinical diagnosis or deployment claims. The current notebook has uncommitted changes that must be reconciled before a claims audit.
- **Portfolio status:** Audit in progress

### bilstm-rainfall-forecasting

- **Workspace folder:** `BiLSTM MBKM/` under the shared portfolio-project workspace
- **Source-of-truth files inspected:** `BiLSTM MBKM/README.md`, the current Git worktree, and its configured public repository remote.
- **Last audited:** 2026-08-16
- **Display title:** Rainfall Forecasting with BiLSTM and Grid Search
- **Context:** Internship-linked academic forecasting project developed with BMKG observations.
- **Primary role family:** Data Science
- **Supporting role families:** Pending a dedicated evidence audit.
- **Verified metrics:** Unverified in this context-only audit; the current live-card metrics must be traced to the current notebook or reproducible outputs before any revision.
- **Public repository:** https://github.com/mthufailsamas/bilstm-rainfall-prediction
- **Limitations:** The original observations are private and are not redistributed. The public workflow defaults to synthetic same-schema data, and the current notebook has uncommitted changes that must be reconciled before a claims audit.
- **Portfolio status:** Audit in progress

### arima-rice-price-forecasting

- **Workspace folder:** `ARIMA MBKM HANA/` under the shared portfolio-project workspace
- **Source-of-truth files inspected:** `ARIMA MBKM HANA/README.md`, the current Git worktree, and its configured public repository remote.
- **Last audited:** 2026-08-16
- **Display title:** Rice Price Forecasting with ARIMA and Walk-Forward Validation
- **Context:** Collaborative academic forecasting project.
- **Primary role family:** Data Science
- **Supporting role families:** Pending a dedicated evidence audit.
- **Verified metrics:** Unverified in this context-only audit; the current live-card metrics must be traced to the current notebook or reproducible outputs before any revision.
- **Public repository:** https://github.com/mthufailsamas/arima-rice-price-forecasting
- **Limitations:** The included dataset has 60 monthly observations and no external predictors. Candidate selection and reporting use the same walk-forward period, so the selected score is not an untouched generalization estimate. The current notebook has uncommitted changes that must be reconciled before a claims audit.
- **Portfolio status:** Audit in progress

### Registry audit queue

These entries are audit directions only. They are not completed registry records and must not be used as approved publishing claims.

| Project candidate | Workspace routing | Provisional direction | Registry status |
| --- | --- | --- | --- |
| Retail Sales Forecasting | `AI Engineer/`; follow its `AGENTS.md` and project source of truth | The live card matches the approved sharper Project Output and Evidence & Scope wording | Published |
| AI Service Request Automation | `AI Automation/`; follow its `AGENTS.md` and project source of truth | Replace the legacy Invoice card only after the new project's evidence and wording are approved | Revision required |
| DWDM Monitoring | `C:/Users/Thufail/Documents/Lintasarta/` | Context verified; complete the quantitative evidence audit before revising technical claims | Audit in progress |
| Academic project claims | Use each project-specific workspace record above | Context verified; metrics and live wording still require project-by-project evidence audits | Audit in progress |

## 5. Evidence-first portfolio rules

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
3. Locate and inspect the project's actual workspace folder; do not treat the existing website card as project evidence.
4. Read that project's current `AGENTS.md`, `PROJECT.md`, README, and any source-of-truth files required by its own routing instructions.
5. Inspect reproducible evidence for every metric, technology, implementation, validation statement, public repository, context, and limitation.
6. Create or update the project's canonical Project Registry record, including every required field.
7. Assign the correct evidence status and evidence level.
8. Select one primary role family and no more than two evidence-supported supporting families.
9. Write only claims supported by the registry and project audit; mark anything else unverified, planned, pending, or blocked.
10. Re-check that no evidence or status has crossed project boundaries.
11. Verify that the proposed or live project card matches the canonical registry record.
12. Update this file in the same revision whenever an approved portfolio policy, project evidence, role-family mapping, limitation, repository link, metric, or portfolio status changes.

## 6. Full website audit standard

When the user asks for a `full audit`, the Portfolio Website task must inspect
the complete requested scope in one pass rather than stopping after the first
card, file, or visible issue.

The audit must cover:

- all tracked HTML, CSS, JavaScript, configuration, metadata, and dependencies;
- all visible copy, project cards, links, images, diagrams, and downloadable or
  generated public assets;
- the rendered desktop and mobile experience, including layout, hierarchy,
  readability, contrast, responsive behavior, image cropping, navigation, and
  interactive states;
- browser console or runtime errors, broken links and assets, accessibility-
  relevant structure, performance risks visible from the current
  implementation, and repository hygiene; and
- every public capability, technology, metric, result, role-family mapping, and
  project status against the canonical Project Registry and the corresponding
  source project's current evidence.

Report all material findings in the first audit response. Group them as
critical, material, and optional polish, and give the evidence, practical
impact, and recommended action for each. Name the audited areas where no
material issue was found so the coverage is explicit. If response limits
require several messages, declare every remaining audit area up front and do
not call the audit complete until all declared areas have been covered.

A full-audit request is read-only. Do not change files, regenerate assets,
publish, deploy, or change external state unless the user separately authorizes
those actions after reviewing the findings.

## 7. Project-to-portfolio handoff

A project task does not publish or revise its own portfolio card. When a project is ready for portfolio review:

1. identify the exact workspace folder and confirm that its project-level source of truth marks the intended handoff stage;
2. ask the Portfolio Website task to audit or refresh the canonical Project Registry record in this file;
3. treat the registry as `Draft` after the evidence audit while card wording, placement, or role mapping still requires user review;
4. change the registry to `Approved` only after the user accepts the proposed public card and claims; and
5. change the registry to `Published` only after the live website matches the approved record.

A message from another task is a routing signal, not project evidence. The Portfolio Website task must still inspect the project workspace and current reproducible sources before changing a registry record or public card.
