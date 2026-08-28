# Portfolio Website Source of Truth

Last updated: 2026-08-28

## Purpose and authority

This file is the source of truth for Portfolio Website positioning, the
canonical Project Registry, role-family mapping, evidence standards, claim
wording, resume synchronization, user-experience requirements, public-source
performance, cleanup, and release status. Read it completely before auditing,
writing, or changing the website.

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

## Resume-to-website synchronization contract

The downloadable resume and portfolio website are 2 views of the same
professional record. The website may provide more depth and the resume may
select fewer projects, but every overlapping fact must keep the same meaning,
scope, evidence level, evaluation boundary, and chronology.

Omission for space is acceptable. Contradiction, unsupported precision,
status inflation, or copying the same unsupported claim onto both surfaces is
not acceptable. Exact file equality between the local and live resume confirms
delivery only; it does not prove that the resume content is correct.

Use these synchronization states:

- **Synced:** overlapping facts have the same evidence-backed meaning;
- **Website broader:** the website adds verified detail without changing the
  resume's meaning;
- **Resume broader:** the resume adds verified detail without changing the
  website's meaning;
- **Pending resume update:** the website correction is approved but the resume
  artifact still requires the user's manual edit or explicit authorization;
- **Revision required:** one or both public surfaces contain a material claim
  that must be corrected; and
- **Blocked:** the canonical fact cannot yet be established from available
  evidence.

Do not call the overall portfolio synchronized while any overlapping fact is
`Pending resume update`, `Revision required`, or `Blocked`.

### Current resume artifact and audit state

- **Active local artifact:** `documents/m-thufail-alwannabil-samas-cv.pdf`
- **Local/live SHA-256:**
  `22C69A32996DE3D74BF3A769D9454A2F78029434A99D399666445A61EFDA5146`
- **Delivery state:** Synced; all current website download links resolve to the
  same PDF and the live file matches the local artifact byte for byte.
- **Content state:** Revision required; the 2026-08-28 audit found unsupported
  or overstated meaning in the Thyroid project metrics and the Retail CI/parity
  wording. The exact corrections must be provided as text for manual resume
  editing unless the user explicitly authorizes replacing the PDF.

### Current cross-surface synchronization matrix

| Shared record | Current state | Required control or action |
| --- | --- | --- |
| Identity, contact, experience chronology, education, certification, and publication metadata | Synced across resume and website | Preserve one canonical spelling, date, link, and status on every surface; external-record evidence remains subject to its own audit when changed. |
| AI Service Request Automation | Synced and verified | Preserve controlled-local-evidence wording and the distinction from production or measured business impact. |
| Retail Sales Forecasting & Planning System | Pending resume update | The website correctly separates the 44/44 local-and-CI core tests from locally verified notebook/API/Docker parity. The resume must receive the same boundary. |
| Thyroid Cancer Recurrence Classification | Pending resume update | Release `20260828-02` removes 97.25% accuracy, 95.37% F1, 98.05% specificity, and 98.60% ROC-AUC from the website. The current resume still publishes them and should replace this project entry with the verified XGBoost rainfall project. |
| DWDM Optical Sensor Monitoring | Pending resume update | Release `20260828-02` removes the unverified `~400 sensors` quantity from the website. The current resume still contains it. |
| Rainfall Forecasting with BiLSTM | Pending resume update | Release `20260828-02` replaces the unverified historical MAAPE and RMSE on the website with verified experiment-design facts. The current resume still contains rounded versions of those metrics. |
| Rice Price Forecasting with ARIMA | Website broader | Release `20260828-02` replaces the unverified exact MAPE values with the verified 60-month, 2-series, 12-step design and states the reused reporting boundary. |
| Rainfall Forecasting with XGBoost | Website broader and verified | Preserve the 23 prior-only features, 3 searches, 5,184 temporal CV fits, reused 366-day final period, 308 observed targets, and corresponding limitations exactly as recorded in its audited registry entry. |

The matrix records current public risk; it does not authorize publishing an
unverified row. Each affected project's registry record and project-level
source of truth still control the final wording.

### HR-readable confident framing

The portfolio leads with verified responsibility, delivered systems,
professional context, and measurable results in concise natural English. The
user's `fake it till you make it` direction means presenting the strongest
verified evidence confidently and translating it into clear professional
value. It never permits invented experience, seniority, technology, metric,
deployment, scale, ownership, or business impact.

Avoid fresh-graduate framing, first-person owner narration, keyword stuffing,
generic self-praise, and defensive copy. Keep the positioning centered on a
Data & AI Professional whose work is demonstrated through current evidence.

### Required manual resume replacements after release `20260828-02`

The current PDF remains unchanged until the user manually edits it or
explicitly authorizes artifact replacement. Use these exact evidence-aligned
replacements:

1. **Lintasarta experience, 1st bullet:** `Developed a project-stage DWDM
   optical monitoring and assurance system for directional optical sensors,
   integrating 5-minute PRTG telemetry with ENIMS network metadata to identify
   operational failures, persistent signal shifts, gradual degradation, and
   investigation priorities.`
2. **BMKG experience, BiLSTM bullet:** `Built a 3-layer BiLSTM workflow for
   next-day rainfall forecasting using 7-day multivariate sequences, a focused
   27-configuration Grid Search, and an 80:20 chronological split; packaged the
   workflow for reproducible training and holdout review.`
3. **Retail selected-project paragraph:** `Addressed daily sales forecasting
   across 54 stores and 33 product families by developing an end-to-end 16-day
   pipeline on more than 3 million labeled rows with chronological Ridge and
   XGBoost evaluation. Selected XGBoost at 15.6431% internal-test WAPE and
   generated 28,512 forecasts using 1 versioned artifact. All 44/44 core
   contract tests passed locally and in GitHub Actions; local batch, FastAPI,
   and Docker predictions matched, while CI separately verified Docker build
   and non-root readiness.`
4. **Replace the complete Thyroid selected-project entry with:**
   `Rainfall Forecasting with XGBoost and Grid Search` followed by `Developed a
   next-day rainfall workflow using 1,461 BMKG observation dates, 23 prior-only
   features, 3 XGBoost searches, and 5,184 temporal cross-validation fits.
   Across 308 observed targets in a reused 366-day final period, the selected
   ensemble recorded RMSE of 9.2521 mm and wet/dry balanced accuracy of 0.7679;
   moderate and heavy category performance remained the main limitation.`

After a revised PDF is supplied, confirm the complete text and rendered 2-page
layout, replace the old PDF rather than retaining both, update every resume link
to 1 versioned path, verify the live hash, and change the affected matrix rows
to `Synced` only after the meanings match.

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
7. After a user-authorized website revision passes the mandatory evidence, static, desktop, and mobile checks, commit and push it to `main` in the same task and verify the resulting GitHub Pages deployment. Do not introduce a separate pre-publication approval checkpoint unless the user explicitly requests a draft-only or local-only revision.
8. Keep the page descriptions, JSON-LD capabilities, and sitemap `lastmod` synchronized with every public positioning or capability revision so machine-readable metadata does not trail the visible website.

This safeguard removes the normal post-deployment cache wait after it has reached a visitor's browser. It cannot make an unfinished GitHub Pages deployment available early, and the first installation of the guard still requires the current versioned page to be loaded once.

**Release-freshness safeguard status:** Published at portfolio commit `3d4fd4a17167ff96a9552dcb03af3809afeef916` with release `20260816-01`; Pages run `31955310151` completed successfully. The live release marker and versioned HTML expose the approved freshness check.

**AI Service Request Automation publication status:** Portfolio commit
`29577e6392d8330e9736db1841b58a992fc0ecc5` and Pages run `32634340800`
published release `20260823-03`. The live Full HD visual removes the cost and
quality badges plus the redundant `Technical Backbone` heading, preserves the
five illustrated workflow stages, and normalizes capitalization and typography
across the three supporting system layers. The public page, release marker, and
versioned image each returned successfully.

**Resume and capability synchronization:** Release `20260827-03` aligns the
downloadable resume and Skills section with the verified 2026-08-26 general
Data and AI resume. The website now exposes the verified RAG,
embeddings, vector search, Docker Compose, GitHub Actions, CI/CD, model serving,
and batch-inference capabilities demonstrated across the 2 independent
flagship projects. All 3 resume links use the same cache-versioned PDF.

**Resume synchronization status:** Published at portfolio commit `18d2fadd71d83e8d926b935aa792b9fc53b46dd4`;
Pages run `33087663392` completed successfully, and the live HTML, release marker,
and downloadable PDF match release `20260827-03`.

**Crawler metadata revision:** Release `20260828-01` aligns the machine-readable
Person metadata with the approved Data & AI Professional positioning and the
verified capabilities already present in the Skills section. The revision also
adds an explicit crawler policy and sitemap, and versions the social-preview URL
so external preview caches receive a new asset address.

### Replacement and repository cleanup safeguard

Every website revision, addition, replacement, or removal includes a focused
repository-cleanup pass. Trace affected files through the current HTML, CSS,
JavaScript, metadata, documentation, and deployment configuration, then remove
superseded assets, documents, code, and temporary outputs that no longer serve
the published portfolio. Do not keep `old`, `backup`, duplicate, or prior-version
copies in the active repository; Git history is the recovery record.

Only delete a file after confirming that no current runtime, crawler, legal,
documentation, deployment, or source-of-truth requirement uses it. Update the
README repository tree in the same revision whenever the active file set changes.

The cleanup pass also removes superseded formats after a successful asset
conversion, obsolete selectors and variables after a layout revision, replaced
resume files after all links move to the accepted artifact, and temporary QA
outputs before commit. Do not retain files that function as `old`, `backup`,
`copy`, `final2`, `previous`, or a dated fallback. Git history is the recovery
record.

### Navigation, reading-comfort, and performance safeguard

Keep the public site as one coherent semantic page using static HTML, CSS, and
small vanilla JavaScript. Preserve the narrative order `Hero`, `About`,
`Selected Work`, `Publication`, `Experience`, `Skills`, `Education and
Certification`, and `Contact`. Navigation must remain usable by keyboard,
touch, and pointer; the mobile menu must expose state through ARIA, close on
selection and Escape, and never hide the document behind a stuck overlay.

Core content must remain available if JavaScript fails. Preserve a skip link,
visible focus, logical headings, comfortable touch targets, reduced-motion
support, readable line lengths, and layouts without horizontal overflow on
narrow devices or at 200% zoom. Avoid autoplay, parallax, scroll hijacking,
hover-only meaning, web-font downloads, runtime third-party libraries, and
persistent expensive effects.

Use the following public-source budgets before server compression:

- `index.html` at most 80 KB;
- `styles.css` at most 50 KB;
- `script.js` at most 20 KB;
- profile image at most 80 KB;
- ordinary project visual target at most 250 KB and hard limit 400 KB;
- responsive above-the-fold image payload target at most 350 KB; and
- no public asset above 1 MB without a documented exception.

Every image needs explicit rendered dimensions. Load below-the-fold visuals
lazily with asynchronous decoding, and use a broadly supported efficient
format while preserving chart and diagram readability. A release is not
performance-approved merely because source code is small; inspect the actual
encoded public assets and the responsive payload.

**2026-08-28 pre-correction baseline:** `index.html` (47,927 bytes),
`styles.css` (21,116 bytes), and `script.js` (2,493 bytes) passed their budgets.
The 460,159 byte profile JPEG, 2,243,039 byte Retail PNG, and 999,042 byte
Thyroid PNG failed the applicable image budgets, with the Retail and Thyroid
assets alone accounting for more than 3.2 MB.

**2026-08-28 optimization revision:** Release `20260828-02` converts the 4
retained evidence-backed project visuals to inspected WebP files between 81,890
and 112,502 bytes, reduces the profile image to 11,312 bytes, and reduces the
mobile hero to 178,186 bytes. The unverified Thyroid, BiLSTM, and ARIMA result
figures are replaced by semantic HTML workflow panels. The superseded profile,
mobile-hero, and 7 PNG project assets are removed rather than kept as backups.
The final HTML, CSS, and JavaScript sources are 48,228, 22,654, and 2,493 bytes;
the complete active `assets/` tree is 788,131 bytes. A responsive `<picture>`
selects the 88,154 byte desktop hero or 178,186 byte mobile hero instead of
requesting both intentionally.

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
- **Visual asset source:** 5 stage icons from the official MIT-licensed Bootstrap Icons library, rasterized into the local WebP project visual with no runtime third-party request.
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
- **Visual asset source:** Project-native 5-stage lifecycle and technical-backbone infographic rendered locally as a 1920x1080 WebP with no third-party image or runtime request.
- **Limitations:** Evidence uses fictional data, installed local models, and controlled local services. The system retains deterministic and human authority around probabilistic output. No external deployment, real-user adoption, production throughput, employee hours saved, uptime change, financial return, or other live business impact has been demonstrated.
- **Approved Project Output wording:** Delivered a reproducible Employee Service Desk and authorized Service Operations workspace that turns short IT messages into traceable catalog work, asks at most 1 focused follow-up, and preserves approval, escalation, resolution, retry, and recovery evidence.
- **Approved Evidence & Scope wording:** The frozen final gate used 30 untouched bilingual semantic cases and 10 deterministic workflow controls. 90.0% progressed without service-agent triage review; all services and models cleaned up, and hosted or paid AI calls were 0. Results are controlled local evidence with fictional data, not production or measured business impact.
- **Portfolio status:** Published at portfolio commit `29577e6392d8330e9736db1841b58a992fc0ecc5`; Pages run `32634340800` completed successfully. Live release `20260823-03` removes the cost and quality badges plus the redundant architecture heading while preserving the illustrated workflow and normalizing its typography. The public page, release marker, and versioned Full HD image each returned successfully.

### dwdm-optical-sensor-monitoring

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Professional Projects/Lintasarta DWDM Monitoring/`
- **Source-of-truth files inspected:** `README.md`, the implementation under `src/`, the complete contract suite under `tests/`, and the current local workspace structure. The project has no usable Git baseline at this path.
- **Last audited:** 2026-08-28
- **Display title:** DWDM Optical Sensor Monitoring with Change-Point and Degradation Detection
- **Context:** Professional project-stage work at PT Aplikanusa Lintasarta using confidential operational sources.
- **Primary role family:** Data Engineering
- **Supporting role families:** Data Analysis
- **Verified metrics:** The implemented contract combines 2 source systems, preserves native 5-minute PRTG telemetry, and exposes 3 operational views: Operations Board, Event Explorer, and Management Overview. All 67 local contract tests passed on 2026-08-28 when the project's `src` directory was placed on `PYTHONPATH`. No authorized source currently establishes the former `~400 sensors` quantity, so that number is omitted.
- **Public repository:** No public repository is available; the local project is proprietary and currently has no valid Git repository baseline.
- **Limitations:** Production telemetry, database contents, credentials, source access, and operational screenshots are confidential. Statistical events are investigation evidence rather than confirmed physical root causes. The local dashboard is not internet-facing and has no production authentication, TLS termination, or web-server hardening.
- **Approved Evidence & Scope wording:** The analysis helps teams decide what to investigate first but does not claim a physical root cause. Internal telemetry, source code, credentials, infrastructure, database contents, and operational screenshots remain confidential.
- **Portfolio status:** Corrective release `20260828-02` prepared; live publication verification pending.

### xgboost-rainfall-forecasting

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/XGBoost Rainfall Forecasting/`
- **Source-of-truth files inspected:** `AGENTS.md`, `PROJECT.md`, `README.md`, the canonical 14-cell notebook with every code cell completed and no error output, `development_decision.json`, `final_comparison.csv`, `final_predictions.csv`, `final_intensity_confusion.csv`, `final_intensity_class_metrics.csv`, `run_metadata.json`, the current Git worktree, and the configured public repository remote.
- **Last audited:** 2026-08-27
- **Display title:** Rainfall Forecasting with XGBoost and Grid Search
- **Context:** Academic next-day rainfall forecasting study using authorized private BMKG observations from the Trunojoyo area in Sumenep Regency, accompanied by a peer-reviewed publication and current reproducible experiment outputs.
- **Primary role family:** Data Science
- **Supporting role families:** None.
- **Verified metrics:** The 2026-08-27 canonical Run All completed all 14 code cells without notebook errors and produced 47 local evidence artifacts after 5,184 temporal CV fits. Development OOF evidence selected a 40% 2-stage and 60% direct Tweedie ensemble with a 0.50 wet threshold. Across 308 observed targets in the reused 366-day final calendar period, the ensemble recorded RMSE 9.2521 mm, MAE 4.1061 mm, total bias 5.8982%, R-squared 0.2370, wet-day balanced accuracy 0.7679, wet-day F1 0.6897, BMKG intensity accuracy 75.0%, and BMKG Macro-F1 0.4429. Correct-category counts were 175/206 dry, 52/84 light, 4/15 moderate, and 0/3 heavy; the final period contained no observed very-heavy target.
- **Public repository:** https://github.com/mthufailsamas/xgboost-rainfall-prediction
- **Visual asset source:** Project-native selected-ensemble actual-versus-forecast evidence rendered locally from `final_predictions.csv` as a `1920x1080` WebP. The visual contains no third-party image or runtime request.
- **Visual factual inventory:** Centered title `XGBoost Rainfall Forecasting`; subtitle `Actual and Forecast Rainfall across the Reused Final Calendar Period`; legend labels `Actual Rainfall` and `Daily XGBoost Forecast`; footer values `366 Daily Forecasts`, `308 Observed Targets`, `RMSE 9.2521 mm`, and `Wet/Dry Balanced Accuracy 0.7679`. The time-series lines and every displayed value trace to `final_predictions.csv` and `final_comparison.csv` from the canonical output directory.
- **Limitations:** The original observations are private and are not redistributed. The 4-year source represents 1 observation context, 58 of 366 final targets are unknown, and only 2 full-year development checks are available. The final year had informed prior analysis and is reused temporal evidence. Moderate and heavy rainfall remain weak: 4/15 moderate and 0/3 heavy dates received the correct BMKG category. The experiment does not establish regional transfer, warning capability, deployment, or measured salt-production impact.
- **Approved Project Output wording:** The selected experiment produces 366 next-day forecasts with wet/dry alerts and BMKG intensity labels, supported by development-selection tables, calibration, error-regime diagnostics, feature importance, and a reproducible local evidence bundle.
- **Approved Evidence & Scope wording:** Controlled evidence comes from 2 annual development checks and 1 reused final year. Correct-category counts were 4/15 for moderate and 0/3 for heavy rainfall, which remains the main model limitation. Original observations remain private; the displayed metrics come from the documented forecasting experiment.
- **Portfolio status:** Published at portfolio commit `14acbb12987cbb122e867a948cabc5185bb849f9`; Pages run `33062369997` completed successfully with release `20260827-02`. The live desktop and 390-pixel mobile card contain no internal experiment-version labels, horizontal overflow, or browser warning/error.

### xgboost-thyroid-recurrence-classification

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/XGBoost Thyroid Recurrence Classification/`
- **Source-of-truth files inspected:** `AGENTS.md`, `PROJECT.md`, `README.md`, the V1 notebook and implementation path, the current Git worktree, and the configured public repository remote in the workspace above.
- **Last audited:** 2026-08-28
- **Display title:** Thyroid Cancer Recurrence Classification with XGBoost, Information Gain, and Grid Search
- **Context:** Collaborative academic research project.
- **Primary role family:** Data Science
- **Supporting role families:** None.
- **Verified metrics:** The V1 preparation path loads 383 source rows and 17 columns, removes 19 exact full-row repetitions, and retains 364 rows with 256 `No` and 108 `Yes` labels. V1 uses shuffled, non-nested 10-fold K-Fold, fold-local Information Gain, and a checkpointed XGBoost Grid Search design. The complete V1 run and model-quality metrics are unverified; V2 remains planned rather than implemented.
- **Public repository:** https://github.com/mthufailsamas/xgboost-thyroid-recurrence-classification
- **Limitations:** The V1 design uses shuffled, non-nested 10-fold evaluation and accuracy as its default selection metric on 364 retained rows. V2 model design, final grid, selection rule, calibration, refit, and results are not implemented. The dataset does not support clinical diagnosis or deployment claims.
- **Approved Evidence & Scope wording:** The verified evidence currently covers the dataset and V1 preparation path. Model-quality metrics are withheld until the full run is revalidated; the project remains experimental research and is not evidence for clinical diagnosis or deployment.
- **Portfolio status:** Corrective release `20260828-02` prepared; live publication verification pending.

### bilstm-rainfall-forecasting

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/BiLSTM Rainfall Forecasting/`
- **Source-of-truth files inspected:** `README.md`, `train_bilstm_rainfall.py`, the current modified notebook worktree, the same-schema sample data, and the configured public repository remote in the workspace above.
- **Last audited:** 2026-08-28
- **Display title:** Rainfall Forecasting with BiLSTM and Grid Search
- **Context:** Internship-linked academic forecasting project developed with BMKG observations.
- **Primary role family:** Data Science
- **Supporting role families:** None.
- **Verified metrics:** The runnable reference workflow uses a 7-day input window, 3 stacked BiLSTM layers, and a focused 27-configuration grid across units, batch size, and learning-rate drop period. It uses an 80:20 chronological split and returns predictions to millimeters before scoring. Historical MAAPE 0.8073 and RMSE 10.2734 mm are not present in current tracked evidence and are therefore unverified.
- **Public repository:** https://github.com/mthufailsamas/bilstm-rainfall-prediction
- **Limitations:** The original observations are private and are not redistributed. The public workflow defaults to synthetic same-schema data. The same chronological holdout selects and reports the best configuration, so the result is model-selection evidence rather than an untouched final estimate. The current notebook has uncommitted changes and cannot establish a frozen historical result.
- **Approved Evidence & Scope wording:** The public repository provides a runnable same-schema sample and a chronological 80:20 experiment design. The same holdout selects and reports the best configuration, so it is model-selection evidence rather than an untouched final estimate. Historical internship metrics remain withheld pending revalidation.
- **Portfolio status:** Corrective release `20260828-02` prepared; live publication verification pending.

### arima-rice-price-forecasting

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/ARIMA Rice Price Forecasting/`
- **Source-of-truth files inspected:** `README.md`, `train_arima_rice_price.py`, `rice_price_jatim_monthly.csv`, the current Git worktree, and the configured public repository remote in the workspace above.
- **Last audited:** 2026-08-28
- **Display title:** Rice Price Forecasting with ARIMA and Walk-Forward Validation
- **Context:** Collaborative academic forecasting project.
- **Primary role family:** Data Science
- **Supporting role families:** None.
- **Verified metrics:** The included public dataset contains 60 monthly observations from January 2020 through December 2024 for 2 price series. The default 80:20 design uses 48 initial months and 12 expanding-history 1-step forecasts. Former MAPE values of 2.08% and 1.82% are not present in current tracked outputs and are therefore unverified.
- **Public repository:** https://github.com/mthufailsamas/arima-rice-price-forecasting
- **Limitations:** The included dataset has 60 monthly observations and no external predictors. Candidate selection and reporting use the same 12-month walk-forward period, so the selected score is not an untouched generalization estimate. Walk-forward results represent 1-step forecasting rather than long-horizon accuracy.
- **Approved Evidence & Scope wording:** The public dataset and runnable workflow are included in the repository. Candidate orders are ranked and reported on the same 12-month walk-forward period, so the selected result is not an untouched final estimate. The univariate models use past prices only.
- **Portfolio status:** Corrective release `20260828-02` prepared; live publication verification pending.

### Registry audit queue

These entries are audit directions only. They are not completed registry records and must not be used as approved publishing claims.

| Project candidate | Workspace routing | Provisional direction | Registry status |
| --- | --- | --- | --- |
| Retail Sales Forecasting | `C:/Users/Thufail/Documents/Portfolio/Independent Projects/AI Engineer/`; follow its `AGENTS.md` and project source of truth | The live card shows the verified 44/44 core contract evidence | Published |
| AI Service Request Automation | `C:/Users/Thufail/Documents/Portfolio/Independent Projects/AI Automation/`; follow its `AGENTS.md` and project source of truth | The live card uses the focused workflow visual without cost, quality, duplicate metric, or redundant architecture labels | Published |
| DWDM Monitoring | `C:/Users/Thufail/Documents/Portfolio/Professional Projects/Lintasarta DWDM Monitoring/` | 2 source systems, 5-minute telemetry, 3 operational views, and 67/67 contract tests are verified; the former sensor count is omitted | Corrective release pending live verification |
| Thyroid, BiLSTM, and ARIMA claims | Use each project-specific workspace record above | Verified experiment-design facts replace result metrics absent from current tracked evidence | Corrective release pending live verification |

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
- Public-facing project cards must present one coherent project narrative and must not expose internal experiment-version labels unless the user explicitly requests them.

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

All human-readable English text inside project visuals uses natural title case.
Official brand names, acronyms, initialisms, units, filenames, identifiers, and
source column names preserve their canonical casing. Indonesian visual text
follows PUEBI while retaining the approved title-case hierarchy where
applicable.

**Portfolio visual typography audit:** Release `20260823-06` audits all 7
displayed project visuals against this rule. The DWDM Monitoring, XGBoost
Rainfall, Thyroid Classification, BiLSTM Rainfall, and ARIMA Rice Forecasting
visuals required human-readable title-case corrections. The Retail Sales
Forecasting and AI Service Request Automation visuals required no typography
changes during that pass. Official and technical names retain their canonical
casing. The revision changes only approved text regions; charts, series,
numbers, evidence, layout, and project meaning remain unchanged.

**AI Service Request Automation visual alignment audit:** Release
`20260823-07` centers all 4 workflow arrows within their equal inter-card gaps
and aligns them to the cards' vertical center. The lower technology panel
retains equal left and right margins and now has equal whitespace above and
below its anti-aliased bounds. Titles, icons, labels, technologies, colors, and
project meaning remain unchanged.

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
2. Read `AGENTS.md`, inspect Git status, confirm the active release marker, and
   identify every visible and machine-readable surface affected by the change.
3. Inspect the complete current resume whenever the change can affect a shared
   professional fact, project, capability, link, or positioning statement.
4. Identify every project affected by the proposed website change.
5. Locate and inspect the project's actual workspace folder; do not treat the
   existing website card, resume, or visual as project evidence.
6. Read that project's current `AGENTS.md`, `PROJECT.md`, README, and any
   source-of-truth files required by its own routing instructions.
7. Inspect reproducible evidence for every metric, technology, implementation,
   validation statement, public repository, context, and limitation.
8. Create or update the project's canonical Project Registry record, including
   every required field.
9. Assign the correct evidence status and evidence level.
10. Select one primary role family and no more than 2 evidence-supported
    supporting families.
11. Write only claims supported by the registry and project audit; mark
    anything else unverified, planned, pending, or blocked.
12. Re-check that no evidence or status has crossed project boundaries.
13. Compare every affected shared fact against the website, resume, metadata,
    README, and visual; update the synchronization matrix and keep one meaning.
14. Verify navigation, keyboard and touch behavior, narrow mobile and desktop
    layout, reading comfort, reduced motion, image rendering, console output,
    internal links, public-source budgets, and release-marker consistency in
    proportion to the change.
15. Trace replaced files through all repository references, delete every
    superseded or temporary artifact, update the README tree, and run an orphan
    scan.
16. Update this file in the same revision whenever an approved policy, project
    evidence, synchronization state, role-family mapping, limitation,
    repository link, metric, asset contract, or portfolio status changes.

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
  source project's current evidence;
- complete resume text and every rendered resume page, plus a field-by-field
  synchronization matrix for identity, chronology, capabilities, projects,
  metrics, evidence levels, publications, and links; and
- source-file and responsive-image budgets, unnecessary third-party requests,
  obsolete assets, duplicate or backup files, orphaned references, and current
  release-marker consistency.

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

A project task does not publish or revise its own portfolio card. When a project is ready for portfolio delivery:

1. identify the exact workspace folder and confirm that its project-level source of truth marks the intended handoff stage;
2. ask the Portfolio Website task to audit or refresh the canonical Project Registry record in this file;
3. use `Draft` only while evidence or wording remains unresolved, or when the user explicitly requests a draft-only or local-only revision;
4. after an authorized revision passes the required evidence and website checks, change the registry to `Approved`, commit it, and push it to `main` in the same task without another publication-confirmation step; and
5. change the registry to `Published` only after the GitHub Pages deployment succeeds and the live website matches the approved record.

A message from another task is a routing signal, not project evidence. The Portfolio Website task must still inspect the project workspace and current reproducible sources before changing a registry record or public card.
