# Portfolio Website Source of Truth

Last updated: 2026-08-20

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
- **Independent:** AI Service Request Automation and Retail Sales Forecasting & Planning System; and
- **Academic:** Rainfall Forecasting with XGBoost, Thyroid Cancer Recurrence Classification, Rainfall Forecasting with BiLSTM, and Rice Price Forecasting with ARIMA.

### Approved project display order

The public project list and its visible numbering use this order:

1. DWDM Optical Sensor Monitoring with Change-Point and Degradation Detection
2. Retail Sales Forecasting & Planning System
3. AI Service Request Automation
4. Rainfall Forecasting with XGBoost and Grid Search
5. Thyroid Cancer Recurrence Classification with XGBoost, Information Gain, and Grid Search
6. Rainfall Forecasting with BiLSTM and Grid Search
7. Rice Price Forecasting with ARIMA and Walk-Forward Validation

**Display-order status:** Published at portfolio commit `c34231e00c949578d3212a27a64d4ead4b176c0e`; Pages run `31953829281` completed successfully, and the live HTML exposes the approved titles in numbered order `01` through `07`.

This order leads with verified professional work, follows with the AI/ML Engineering flagship, keeps the AI Automation flagship in the accepted 3rd position, and then presents the academic projects.

### Filter-relative project numbering

- **All** uses the canonical display order and numbers the 7 cards from `01` through `07`.
- **Professional**, **Independent**, and **Academic** preserve that relative order but renumber only the visible cards, starting from `01`.
- Returning to **All** restores the canonical numbering from `01` through `07`.

**Filter-numbering status:** Published at portfolio commit `9f86dc07d0e62e2e044f0bcb936d72b492a4acc6`; Pages run `31954160246` completed successfully, and the live script contains the approved filter-relative renumbering behavior.

**Filter-numbering delivery correction:** Published at portfolio commit `267ea56b034526463d37b460fe2ceeafb54517ab`; Pages run `31954400865` completed successfully. The live HTML now requests `script.js?v=9f86dc0`, forcing previously cached browsers to retrieve the published numbering logic.

### Website release freshness safeguard

GitHub Pages controls the cache lifetime of the unversioned HTML, so a browser may temporarily reuse an older copy after a successful deployment. The website therefore uses an inline release check and `site-version.json` to move a cached page automatically to the current versioned URL.

The following rules are mandatory for every future user-visible website revision:

1. Update both the `release` value in `site-version.json` and the inline `embeddedRelease` value in `index.html` in the same revision as the public website change. Both values must match, use a new monotonically increasing release, and never reuse a previous release value.
2. Keep the release check inline in `index.html`. On every page load it must fetch `site-version.json` with `cache: "no-store"` and a unique query value, compare the published release with the embedded HTML release, and use `window.location.replace` when they differ.
3. Give every changed CSS, JavaScript, image, document, or other public asset a new query version or filename in `index.html`. Refreshing the HTML does not invalidate an asset whose URL remains unchanged.
4. Do not update `site-version.json` for an internal documentation-only commit that cannot change the rendered website.
5. Do not call a revision live until the Pages deployment succeeds and the public site returns the new release marker, the versioned HTML, and every changed asset.
6. If the freshness check fails, keep the currently loaded page usable. The guard must never replace the portfolio with a blank or blocking error state.

This safeguard removes the normal post-deployment cache wait after it has reached a visitor's browser. It cannot make an unfinished GitHub Pages deployment available early, and the first installation of the guard still requires the current versioned page to be loaded once.

**Release-freshness safeguard status:** Published at portfolio commit `3d4fd4a17167ff96a9552dcb03af3809afeef916` with release `20260816-01`; Pages run `31955310151` completed successfully. The live release marker and versioned HTML expose the approved freshness check.

**AI Service Request Automation publication status:** Portfolio commit
`29577e6392d8330e9736db1841b58a992fc0ecc5` and Pages run `32634340800`
published release `20260823-03`. The live Full HD visual removes the cost and
quality badges plus the redundant `Technical Backbone` heading, preserves the
five illustrated workflow stages, and normalizes capitalization and typography
across the three supporting system layers. The public page, release marker, and
versioned image each returned successfully.

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

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Independent Projects/AI Engineer/`
- **Source-of-truth files inspected:** `AGENTS.md`, `PROJECT.md`, `README.md`, the current Git worktree, public `main` at `b044bfafe251254d02606f4e326fc98f15a8d1c9`, release `v1.0.0` at `71de0055bf61767d7c1e4e995c22efad9d7c6d48`, and successful GitHub Actions run `32442894170`.
- **Last audited:** 2026-08-21
- **Display title:** Retail Sales Forecasting & Planning System
- **Context:** Independent portfolio project using authorized Kaggle competition data, controlled chronological model evaluation, and locally verified batch, API, and Docker inference.
- **Primary role family:** AI/ML Engineering
- **Supporting role families:** Data Science
- **Verified metrics:** Validation RMSLE 0.4131 and WAPE 13.5188%; protected internal-test RMSLE 0.4140, WAPE 15.6431%, and signed bias 0.7623%; 28,512 forecasts across 1,782 store-family series; 44/44 core contract tests passed locally and in GitHub Actions; local FastAPI and healthy Docker inference each matched all 28,512 notebook predictions.
- **Public repository:** https://github.com/mthufailsamas/retail-sales-forecasting-ai-engineering
- **Visual asset source:** Five stage icons from the official MIT-licensed Bootstrap Icons library, rasterized into the local project PNG with no runtime third-party request.
- **Limitations:** The competition data covers 2013-2017 and supports product-family rather than SKU forecasting. The source does not provide inventory, supplier, cost, margin, or capacity inputs. Model evidence comes from one fixed validation window and one protected internal-test window. Runtime verification is local and containerized; no external deployment or live business impact has been demonstrated.
- **Approved Project Output wording:** The system produces a checked 16-day forecast for every store-family series, giving planning teams one consistent demand view through the same reusable artifact across batch, API, and containerized inference.
- **Approved Evidence & Scope wording:** One fixed validation window and one protected internal-test window establish RMSLE, WAPE, and signed-bias evidence on 2013–2017 competition data. The locally verified containerized API serves the complete 28,512-row, 16-day product-family forecast through the same versioned artifact used by batch inference.
- **Portfolio status:** Published at portfolio commit `6c38681468a9e1ba23799d114a3f84fa2dde0133`; Pages run `32631716909` completed successfully. The live card shows 44/44 core contract evidence and the updated Full HD visual; desktop and 390-pixel mobile verification found no horizontal overflow, missing asset, or browser warning/error.

### ai-service-request-automation

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Independent Projects/AI Automation/`
- **Source-of-truth files inspected:** `AGENTS.md`, `PROJECT.md`, `README.md`, `docs/PORTFOLIO_HANDOFF.md`, `docs/EVALUATION_RESULTS.md`, `docs/END_TO_END_CONTRACT.md`, `docs/RECOVERY_OPERATIONS_CONTRACT.md`, the frozen final evidence JSON, local and public `main` at `8695a60e77d92504e9fa402a0d818082cd82712d`, and the sole public release `v1.0.0` at the same commit.
- **Last audited:** 2026-08-23
- **Display title:** AI Service Request Automation
- **Context:** Independent portfolio project using fictional bilingual service requests, policies, users, permissions, and downstream records in controlled local evaluation.
- **Primary role family:** AI Automation
- **Supporting role families:** AI/ML Engineering and Data Engineering
- **Verified metrics:** The frozen final gate completed 40/40 cases: 30 untouched bilingual semantic cases and 10 deterministic workflow controls. Classification macro F1, required-field accuracy, policy Recall@3, citation validity, workflow controls, and recoverable failures were 100.0%; route and final-state accuracy and semantic task success were 96.7%. 27/30 semantic requests (90.0%) progressed without service-agent triage review, with 3 safely held for review. Hosted or paid AI calls were 0.
- **Public repository:** https://github.com/mthufailsamas/ai-service-request-automation
- **Visual asset source:** Project-native 5-stage lifecycle and technical-backbone infographic rendered locally as a 1920x1080 PNG with no third-party image or runtime request.
- **Limitations:** Evidence uses fictional data, installed local models, and controlled local services. The system retains deterministic and human authority around probabilistic output. No external deployment, real-user adoption, production throughput, employee hours saved, uptime change, financial return, or other live business impact has been demonstrated.
- **Approved Project Output wording:** Delivered a reproducible Employee Service Desk and authorized Service Operations workspace that turns short IT messages into traceable catalog work, asks at most 1 focused follow-up, and preserves approval, escalation, resolution, retry, and recovery evidence.
- **Approved Evidence & Scope wording:** The frozen final gate used 30 untouched bilingual semantic cases and 10 deterministic workflow controls. 90.0% progressed without service-agent triage review; all services and models cleaned up, and hosted or paid AI calls were 0. Results are controlled local evidence with fictional data, not production or measured business impact.
- **Portfolio status:** Published at portfolio commit `29577e6392d8330e9736db1841b58a992fc0ecc5`; Pages run `32634340800` completed successfully. Live release `20260823-03` removes the cost and quality badges plus the redundant architecture heading while preserving the illustrated workflow and normalizing its typography. The public page, release marker, and versioned Full HD image each returned successfully.

### dwdm-optical-sensor-monitoring

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Professional Projects/Lintasarta DWDM Monitoring/`
- **Source-of-truth files inspected:** `README.md` and the current local project structure in the workspace above.
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

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/XGBoost Rainfall Forecasting/`
- **Source-of-truth files inspected:** `README.md`, the current Git worktree, and its configured public repository remote in the workspace above.
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

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/XGBoost Thyroid Recurrence Classification/`
- **Source-of-truth files inspected:** `README.md`, the current Git worktree, and its configured public repository remote in the workspace above.
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

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/BiLSTM Rainfall Forecasting/`
- **Source-of-truth files inspected:** `README.md`, the current Git worktree, and its configured public repository remote in the workspace above.
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

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/ARIMA Rice Price Forecasting/`
- **Source-of-truth files inspected:** `README.md`, the current Git worktree, and its configured public repository remote in the workspace above.
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
| Retail Sales Forecasting | `C:/Users/Thufail/Documents/Portfolio/Independent Projects/AI Engineer/`; follow its `AGENTS.md` and project source of truth | The live card shows the verified 44/44 core contract evidence | Published |
| AI Service Request Automation | `C:/Users/Thufail/Documents/Portfolio/Independent Projects/AI Automation/`; follow its `AGENTS.md` and project source of truth | The live card uses the focused workflow visual without cost, quality, duplicate metric, or redundant architecture labels | Published |
| DWDM Monitoring | `C:/Users/Thufail/Documents/Portfolio/Professional Projects/Lintasarta DWDM Monitoring/` | Context verified; complete the quantitative evidence audit before revising technical claims | Audit in progress |
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
- Use digits for every explicit quantity, count, duration, range, measurement,
  configuration total, version, metric, and ordinal position in visible copy,
  captions, alt text, diagrams, and public README prose. Before publication,
  scan for spelled-out numeric facts such as `three settings`, `seven-day`, or
  `first author` and write them as `3 settings`, `7-day`, or `1st author`.
  Preserve nonnumeric idioms, proper names, and standard compounds such as
  `third-party` when the word is not reporting a number.
- Write public project-card copy in affirmative language centered on Problem,
  My Contribution, Project Output, and Evidence & Scope. Prefer direct
  statements of what exists and what was measured.
- Do not use `not X`, `does not Y`, `rather than Z`, `without A`, or similar
  contrast constructions merely to list missing features, deferred work, or
  hypothetical claims. Keep those details in the registry or relevant
  technical documentation.
- Publish a limitation only when omitting it would materially misrepresent the
  data, evaluation, confidentiality, license, deployment state, or measured
  result. State it once, directly, and without turning the card into a defense
  of what the project is not.
- Do not claim cost savings, waste reduction, faster work, increased revenue, or other business impact without a real measurement.
- Do not use **production-ready**, **enterprise-ready**, **deployed**, **real-time**, or **live** unless current evidence supports the exact claim.
- If an API runs only locally through Docker, describe it as **locally verified and containerized**, not deployed.
- Older datasets may still be used, but their time-relevance limitation must be stated.
- Do not hide imperfect results. Present each metric together with its evaluation context.

### Canonical project-card structure

Every project card uses the same reader-facing order:

1. role family and core stack;
2. project title;
3. Problem;
4. My Contribution;
5. expandable Technical details;
6. project visual;
7. a compact headline metrics or evidence row;
8. Project Output;
9. Evidence & Scope; and
10. relevant repository or publication links.

`Problem`, `My Contribution`, `Technical details`, `Project Output`, and
`Evidence & Scope` are canonical card-level labels and must not be renamed
without explicit user approval. Technical-detail subheadings may adapt to the
project, but together they cover inputs and context, approach or system design,
and validation or delivery. Use three headline items by default and at most
four when the additional metric is necessary to represent the evaluation;
supporting metrics remain inside Technical details.

Every project visual uses a centered primary title. Diagram and chart text must
remain readable at card size, and every number, method, system component, and
result shown in the image must be traceable to the project's current registry
record and source evidence.

Every public visual uses a deliberate alignment grid with consistent spacing,
padding, component dimensions, text alignment, icon placement, and hierarchy.
Approval requires inspection at the visual's real website-card size; visibly
off-center, cramped, uneven, or accidentally wrapped elements must be fixed.

Every portfolio project visual is exported as a native `1920x1080` Full HD
image in a `16:9` ratio. Approval verifies the actual file dimensions instead
of relying on HTML attributes. Preserve the source aspect ratio without
stretching, and inspect text, charts, and diagrams again after export. Profile
photos, social previews, desktop heroes, and mobile heroes retain the dimensions
required by their own platform or responsive-layout contract.

General-purpose icons and illustrations must come from one reputable official
or open-license asset library with a consistent style. Verify and document the
source and license, bundle the approved asset locally, and do not mix unrelated
web images. Project-native charts, screenshots, and diagrams remain preferable
when they communicate actual project evidence.

Do not place a role-family, category, or eyebrow label above the primary title
inside a project visual. The project-card kicker already owns that information.
The image begins with its centered project title, followed by only the subtitle,
system or analytical story, and verified evidence needed for that visual.

Before a visual is approved or published, create a factual inventory of every
visible title, sentence, number, method count, configuration count, technology,
metric, caption, and alt-text claim. Trace every item to the project's registry
record and current source evidence. Then perform a separate consistency pass for
title alignment, hierarchy, readability, terminology, dimensions, and card-size
rendering. Passing one pass never substitutes for the other.

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
