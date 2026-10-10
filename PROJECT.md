# Portfolio Website Source of Truth

Last updated: 2026-10-10

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
  `8FB2E0D21CB736D9217960AD838028C664171E022C41D9F0F48C8D18B3CF6D0C`
- **Delivery state:** Published and synced in release `20260909-01` at portfolio
  commit `e2e86dcf48693f392500513963b7b7496213c14a`; GitHub Pages run
  `34327237886` completed successfully. All 3 website download links resolve to
  the same cache-versioned PDF, and the live file matches the accepted local
  artifact byte for byte.
- **Content state:** Final resume review completed and `ACC` on 2026-09-09.
  The accepted 2-page A4 PDF preserves every user-confirmed result and metric,
  contains embedded font subsets, exposes all 22 bullets cleanly to both tested
  text extractors, and retains active portfolio, email, LinkedIn, GitHub, and
  DOI links. Header, Summary, all 4 Experience entries, Education, Skills,
  Projects, Publications, and Certifications are approved.

### Current cross-surface synchronization matrix

| Shared record | Current state | Required control or action |
| --- | --- | --- |
| Final resume artifact | Synced | Published through all 3 versioned download links; the accepted local and live PDF share SHA-256 `8FB2E0D21CB736D9217960AD838028C664171E022C41D9F0F48C8D18B3CF6D0C`. |
| Resume content | Pending resume update | Preserve all approved facts and metrics. The 2026-10-10 audit identified internal version/gate wording and dense retrieval/test labels for manual editing; the user owns the revision and the PDF remains unchanged. |
| Identity and positioning | Synced | Visible copy, metadata, and the replacement social image use Data and AI Professional; name and Surabaya, East Java, Indonesia remain unchanged. LinkedIn live application is still unverified. |
| Experience and chronology | Synced | All 4 roles preserve the approved employers, dates, responsibilities, scale, and shared BiLSTM results; the website uses reverse chronology by role end date. |
| Skills and capabilities | Synced | All resume capability families and named tools are represented without adding unsupported technologies. |
| Shared project facts and metrics | Synced | The 3 resume projects and all overlapping project metrics preserve the same evaluation boundaries; the website adds 4 evidence-backed projects and deeper limitations. |
| Education, publication, and certification | Pending resume update | Existing S1, publication bibliographic record, and BNSP validity match. Ongoing S2 is user-attested but institution, official degree wording, and dates are pending for both surfaces. The website distinguishes the original paper from its later experiment. |
| Website content publication | Published | Release `20260909-02` was published from commit `e88ef71566c52562684a0984cbbd963c94348936`; Pages run `34332482575` succeeded and live desktop/mobile verification passed. |
| Retail visual restoration | Published | Release `20260909-03` was published from commit `a686212357ccac22619082d2eaaaaec653ebd6de`; Pages run `34353389509` succeeded and live desktop/mobile verification passed. |
| Retail visual composition alignment | Published | Release `20260909-04` was published from commit `00e9a922bef313602272563afffb0c16e6afdabc`; Pages run `34356927342` succeeded and live desktop/mobile plus full-size click verification passed. |
| Public metric formatting | Published | Release `20260909-06` was published from commit `397376ac88cdffbae2de4413ba242b13a7849ce8`; Pages run `34419198907` succeeded and live desktop/mobile verification passed. |
| Academic visual restoration | Published | Release `20260910-01` was published from commit `5d8f785a034d828528abb6c808ac680e895d645b`; Pages run `34421710442` succeeded and live desktop/mobile plus asset-integrity verification passed. |
| LinkedIn positioning | Pending update | The approved headline, cover, and About-format decisions are recorded in `CAREER_PROFILE_SOURCE_OF_TRUTH.md`; live LinkedIn application remains unverified. |
| Other job-platform profiles | Unverified | Add platform-specific rows only when a platform enters scope, then audit every shared fact before calling it synchronized. |

The matrix records current public risk; it does not authorize publishing an
unverified row. Each affected project's registry record and project-level
source of truth still control the final wording.

`CAREER_PROFILE_SOURCE_OF_TRUTH.md` is the durable decision register for
presentation choices shared with LinkedIn and future job-platform profiles.
This Project Registry and the affected technical project remain authoritative
for project facts, metrics, evidence boundaries, and implementation status.

### HR-readable confident framing

The portfolio leads with verified responsibility, delivered systems,
professional context, and measurable results in concise natural English. The
user's `fake it till you make it` direction means presenting the strongest
verified evidence confidently and translating it into clear professional
value. It never permits invented experience, seniority, technology, metric,
deployment, scale, ownership, or business impact.

Avoid fresh-graduate framing, first-person owner narration, keyword stuffing,
generic self-praise, and defensive copy. Keep the positioning centered on a
Data and AI Professional whose work is demonstrated through current evidence.

Across the resume, website, LinkedIn, and future job-platform profiles, use the
cross-channel writing contract in `CAREER_PROFILE_SOURCE_OF_TRUTH.md`. English
copy defaults to professional American English and must pass separate checks
for factual consistency, HR readability, natural human voice, and language
quality. A separate redundancy check removes repeated claims, metrics, tool
lists, and conclusions unless each occurrence serves a distinct reader task.
Platform-specific depth remains deliberate: LinkedIn About uses the broadest
plain language, the resume balances HR and ATS needs, and the portfolio
preserves the deepest supporting evidence.

### Locked sequential resume-review decisions

Review the resume from top to bottom. For each section, provide 1 best decision
and finish with either `ACC as-is` or 1 copy-ready replacement. Required fixes,
recommended improvements, and optional alternatives must never be conflated.
An approved decision remains locked unless the user explicitly reopens it or
new material information changes the decision.

1. **Header - ACC as-is:** Preserve `M. Thufail Alwannabil Samas`, `Data and AI
   Professional | Machine Learning, Data Systems and Applied AI`, `Surabaya,
   East Java, Indonesia`, the current email and phone number, and the current
   portfolio, LinkedIn, and GitHub links exactly as displayed in the PDF.
2. **Summary - ACC:** The user's question about classification and ARIMA was
   discussion input, not a requirement to enumerate every model in the Summary.
   Independent judgment supports naming `classification` as a core capability
   while leaving ARIMA to Skills and Projects to prevent the Summary from
   becoming a tool list. Preserve: `Data and AI
   professional experienced in building end-to-end data pipelines,
   classification and forecasting systems, and applied AI automation.
   Delivered Python/PostgreSQL monitoring pipelines, XGBoost and BiLSTM models,
   FastAPI services, Docker-based inference, and local LLM workflows with
   human-in-the-loop controls. BNSP-certified Data Scientist and first author
   of a peer-reviewed XGBoost rainfall forecasting publication.`
3. **Lintasarta Experience - ACC:** Preserve the employer, location, role, and
   dates as displayed in the final resume. The accepted 4-bullet set is:
   - `Developed an end-to-end DWDM monitoring and assurance system for
     approximately 400 configured directional sensors, integrating 5-minute
     PRTG telemetry with ENIMS network metadata to detect active failures,
     persistent optical-signal changes, gradual degradation, and prioritized
     conditions for operations review.`
   - `Built an incremental Python and PostgreSQL pipeline for metadata
     synchronization, telemetry collection, gap repair, quality-controlled
     observations, event detection, opposite-direction sensor correlation,
     checkpoint preservation, current sensor-priority updates, and recoverable
     processing across repeated collection cycles.`
   - `Implemented sensor-adaptive analytics with robust 6-hour medians, PELT
     change-point detection, Theil-Sen slope estimation, and
     serial-correlation-corrected Mann-Kendall testing to distinguish persistent
     downward shifts and gradual degradation from failures, missing data, and
     short-term telemetry noise across sensors.`
   - `Created a Python API and browser interface with Operations Board, Event
     Explorer, and Management Overview views, enabling operations teams to
     inspect active failures, historical events, paired-sensor evidence,
     investigation charts, and prioritized sensor conditions within one
     interface for consistent operational review.`
   Final-PDF verification produced 3 rendered lines per bullet, a 0.74% total
   typographic-width spread, and a 2.89% final-line-width spread against the
   usable line width, passing all locked acceptance gates.
4. **SMP GIKI 3 Experience - ACC:** Preserve the employer, location,
   role, and dates as displayed in the current resume. The 1 active bullet set
   contains 3 visually balanced bullets:
   - `Taught Python fundamentals to Grade 8 and 9 students through structured
     lessons and hands-on exercises covering variables, data types, operators,
     conditionals, loops, and practical programming logic.`
   - `Introduced artificial intelligence concepts with Teachable Machine,
     guiding students to prepare datasets, train models, and run
     image-classification experiments showing how examples become predictions.`
   - `Developed lesson materials, coding exercises, quizzes, sample programs,
     and structured assessments that reinforced classroom instruction, guided
     hands-on practice, and evaluated student understanding.`
   At the current resume geometry of Times New Roman 11.04 pt and approximately
   524.7 pt usable width, the draft simulation produces 2 lines per bullet.
   Total typographic widths are approximately 888.8, 904.4, and 895.2 pt; the
   15.6 pt range is 1.72% of the longest bullet. Final-line widths are
   approximately 378.0, 379.9, and 380.5 pt; the 2.5 pt range is 0.48% of the
   usable line width. This replaces the invalid equal-word-count proxy that
   produced visibly unequal wrapping. The user accepted this wording by asking
   to continue on 2026-08-29. The final edited PDF must still be rendered and
   measured again before final resume approval.
5. **UINSA Programming Teaching Assistant Experience - ACC:** Preserve
   the institution, location, role, and dates as displayed in the current
   resume. The 1 active recommendation contains 3 bullets:
   - `Guided undergraduate students across 4 semesters of programming courses
     in MATLAB and Python, using practical exercises and assignment support to
     strengthen computational problem-solving.`
   - `Supported students in debugging, data handling, and algorithmic thinking,
     helping them translate mathematical and computational concepts into
     working code for course exercises and assignments.`
   - `Developed introductory machine learning materials covering Linear
     Regression, K-Nearest Neighbors, and K-Means clustering, and provided
     structured technical feedback on student assignments.`
   At the current resume geometry of Times New Roman 11.04 pt and approximately
   524.7 pt usable width, the draft simulation produces 2 lines per bullet.
   Total typographic widths are approximately 870.7, 868.6, and 867.0 pt; the
   3.7 pt range is 0.42% of the longest bullet. Final-line widths are
   approximately 352.0, 356.2, and 347.0 pt; the 9.2 pt range is 1.75% of the
   usable line width. The user accepted this wording by asking to continue on
   2026-08-29. The final edited PDF must still be rendered and measured again
   before final resume approval.
6. **BMKG Data Science Intern Experience - ACC:** Preserve the
   institution, location, role, and dates as displayed in the current resume.
   The 1 active recommendation contains 3 bullets:
   - `Developed a 1-page extreme-weather early-warning dashboard using HTML,
     CSS, JavaScript, PHP, MySQL, and periodic API updates to centralize forecast
     data for the BMKG operational workflow.`
   - `Processed and compared BMKG cloud-prediction imagery with Himawari IR
     satellite imagery using Python to assess cloud movement, temperature
     patterns, and differences across both imagery sources.`
   - `Built a 3-layer BiLSTM rainfall forecasting model with 7-day multivariate
     sequences, 27 Grid Search configurations, and an 80:20 chronological split,
     achieving MAAPE 0.8073 and RMSE 10.2734 mm.`
   The model wording matches the current BiLSTM project registry and preserves
   the user-confirmed completed metrics without converting either error metric
   into accuracy. At the current resume geometry of Times New Roman 11.04 pt
   and approximately 524.7 pt usable width, the draft simulation produces 2
   lines per bullet. Total typographic widths are approximately 884.8, 896.8,
   and 899.6 pt; the 14.8 pt range is 1.65% of the longest bullet. Final-line
   widths are approximately 377.7, 373.4, and 378.1 pt; the 4.7 pt range is
   0.90% of the usable line width. The user explicitly accepted this wording on
   2026-09-08. The final edited PDF must still be rendered and measured again
   before final resume approval.
7. **Education - ACC as-is:** Preserve the complete current Education entry as
   displayed in the resume:
   - Institution: `Universitas Islam Negeri Sunan Ampel Surabaya (UINSA)`
   - Location: `Surabaya, Indonesia`
   - Degree: `Bachelor of Mathematics (S.Mat.)`
   - Dates: `August 2021 - January 2025`
   - `GPA: 3.46/4.00`
   - `Undergraduate Thesis: Rainfall Forecasting in Sumenep Regency Using
     XGBoost and Grid Search.`
   - `Academic Highlight: Completed the 4-year bachelor's program in 7
     semesters (3.5 years).`
   - `Relevant Coursework: Artificial Intelligence, Programming, Mathematical
     Statistics, Statistical Methods, Multivariate Analysis, Numerical Methods,
     and Applied Linear Algebra.`
   The entry already gives HR a clear credential, academic performance,
   accelerated completion, Data and AI-relevant thesis, and ATS-searchable
   coursework. The English thesis wording is semantically consistent with the
   Indonesian publication title. No alternative produces a material gain, so
   this section was accepted as-is on 2026-09-08.
8. **Skills - ACC:** Preserve the final 5-category Skills section:
   - `Programming & Query Languages: Python, SQL, R, MATLAB`
   - `Data Engineering & Databases: Pandas, NumPy, PostgreSQL, MySQL, pgvector,
     psycopg, Data Ingestion, Data Validation, Data Transformation, Incremental
     Data Pipelines`
   - `Machine Learning & Statistics: scikit-learn, XGBoost,
     TensorFlow/Keras, statsmodels, ARIMA, Feature Engineering, Statistical
     Analysis, Model Evaluation, Cross-Validation, Time-Series Analysis &
     Forecasting`
   - `AI Engineering & Automation: FastAPI, n8n, Ollama, RAG, Embeddings,
     Vector Search, Structured LLM Outputs, REST APIs, Human-in-the-Loop
     Workflows, Idempotency, Retry and Recovery Workflows`
   - `Development, Delivery & Visualization: Docker, Docker Compose, Git,
     GitHub, GitHub Actions, CI/CD, Unit Testing (unittest), Jupyter Notebook,
     Model Serving, Batch Inference, Matplotlib, HTML, CSS, JavaScript`
   This preserves every previously listed skill while strengthening 3 category
   labels: `Data Processing` becomes evidence-supported `Data Engineering`,
   `Applied AI` becomes evidence-supported `AI Engineering`, and `Development
   & Visualization` becomes `Development, Delivery & Visualization` to match
   its actual contents. `Structured LLM Output` becomes the grammatical
   `Structured LLM Outputs`, and `unittest` is exposed as ATS-readable `Unit
   Testing (unittest)`. ARIMA is supported by the rice-price forecasting
   project, while Matplotlib is directly used across the forecasting and
   classification projects. The final PDF occupies 1, 2, 2, 2, and 2 rendered
   lines respectively. Website release `20260909-02` now exposes all 5
   categories, including the previously omitted ARIMA and Matplotlib entries.
9. **Projects - ACC:** Preserve the paragraph format with one concise
   Problem-Solution-Result narrative per project. The final resume intentionally
   selects AI Service Request Automation, Retail Sales Forecasting & Planning
   System, and Thyroid Cancer Recurrence Classification in that order while the
   website remains broader. Preserve their displayed evaluation boundaries and
   metrics exactly; omission of the other portfolio projects is allowed for
   resume space and does not create a contradiction.
10. **Publications - ACC:** Preserve the complete publication title, `First
    Author`, MIND Journal volume, issue, pages, June 2026 date, and DOI
    `10.26760/mindjournal.v11i1.30-43`. The DOI is an active black hyperlink
    without visible underlining in the final PDF.
11. **Certifications - ACC:** Preserve `Data Scientist - Badan Nasional
    Sertifikasi Profesi (BNSP) | September 2024 - September 2027`. The issuer
    focus and validity range are deliberate and match the verified certificate.

The accepted resume replaces the previous downloadable PDF at the single
canonical path. Do not retain parallel resume copies. All public links must use
the release-versioned canonical path, and publication is complete only after
the live SHA-256 matches the accepted local artifact.

## 1. Portfolio positioning

The primary positioning is **Data and AI Professional**, not a fresh graduate who is merely trying different tools.

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
2. Keep the release check inline in `index.html`. On HTTP(S) page loads in supported browsers, fetch `site-version.json` with `cache: "no-store"` and a unique query value. Validate the marker, compare it with the embedded HTML release, and use `window.location.replace` for a newer release only when that release is not already in the loaded URL. Ignore older deployment markers and preserve the document if the newer HTML remains cached; never repeatedly replace the same URL.
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

**Final resume publication status:** Release `20260909-01` replaces the
downloadable resume with the fully approved 2-page artifact. Portfolio commit
`e2e86dcf48693f392500513963b7b7496213c14a` and Pages run `34327237886`
published all 3 cache-versioned resume links, and the live PDF matches the
accepted local SHA-256 byte for byte. The final resume is the approved shared
record used by website content release `20260909-02`.

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
mobile hero to 178,186 bytes. At that release checkpoint, the Thyroid, BiLSTM,
and ARIMA result figures were replaced by semantic HTML workflow panels. The superseded profile,
mobile-hero, and 7 PNG project assets are removed rather than kept as backups.
The final HTML, CSS, and JavaScript sources are 48,228, 22,654, and 2,493 bytes;
the complete active `assets/` tree is 788,131 bytes. A responsive `<picture>`
selects the 88,154 byte desktop hero or 178,186 byte mobile hero instead of
requesting both intentionally.

The HTML-panel substitution for the Thyroid, BiLSTM, and ARIMA cards is a
superseded presentation decision as of release `20260910-01`; the original
project-native result visuals are restored in that release.

**2026-08-28 optimization publication status:** Published at portfolio commit
`b3d816924f23cce4208c250705d8e8a9ca7c7745`; Pages run `33181444257`
completed successfully. Live QA at 1440x1000 and 390x844 confirmed release
`20260828-02`, the correct responsive hero source, no horizontal overflow,
working menu and project filters, 44-pixel mobile controls, no browser
warning/error, and removal of the metrics then treated as unverified. The user
subsequently confirmed those existing project results as authentic on
2026-08-29. Release `20260909-02` restores them after the final resume review
and cross-surface audit.

**2026-09-09 synchronized-source optimization:** Release `20260909-02`
removes the obsolete 112,502-byte Retail V1 WebP whose embedded metrics no
longer matched the active V2 evidence. A semantic HTML/CSS workflow panel now
communicates the current 7-table contract, 30-candidate 4-fold selection, and
V2 delivery parity at every display density without another image request.
The active asset tree is 675,629 bytes; `index.html`, `styles.css`, and
`script.js` are 48,908, 22,654, and 2,493 bytes and remain within their source
budgets.

**2026-09-09 synchronization publication status:** Portfolio commit
`e88ef71566c52562684a0984cbbd963c94348936` and GitHub Pages run
`34332482575` published release `20260909-02`. The live accessibility tree and
desktop rendering expose the synchronized identity, chronology, capabilities,
and project evidence. Live Edge QA at 390x844 confirmed exact viewport width,
the responsive hero source, no broken images, browser warning, or runtime
error, a working mobile menu, and 4 visible cards under the Academic filter.
The obsolete Retail raster returns no live reference, and all 3 resume links
still resolve to the accepted PDF version.

**2026-09-09 Retail visual restoration:** Release `20260909-03` restores a
dedicated project image as a 5,281-byte SVG rather than reusing the stale V1
WebP. The resolution-independent diagram shows the current 7-file data
contract, 3 Ridge plus 27 XGBoost candidates across 4 chronological folds, 1
versioned V2 artifact, exact batch/FastAPI/Docker parity, 28,512 forecast rows,
a 16-day horizon, and 78/78 synthetic checks. The surrounding metric row keeps
the model-quality results in live HTML. The active asset tree is 680,910 bytes
and `index.html` is 48,969 bytes, so the restoration remains within the public
source and asset budgets. Commit
`a686212357ccac22619082d2eaaaaec653ebd6de` was published successfully by
Pages run `34353389509`. Live desktop and 390-pixel mobile checks returned HTTP
200, release `20260909-03`, the expected 1600x900 SVG intrinsic dimensions,
zero horizontal overflow, and no browser console, page, or request errors.

**2026-09-09 Retail visual composition alignment:** Release `20260909-04`
returns the Retail visual to the established 5-stage composition shared with
the other independent-project workflow visual and exports it as a native
1920x1080 WebP. The 135,350-byte image preserves Source Tables, Feature
Pipeline, Model Selection, Versioned Artifact, and Inference Paths while
replacing the superseded V1 fields with 3 Ridge and 27 XGBoost candidates,
4-fold mean RMSLE selection, a V2.0.0 artifact, protected internal-test WAPE
14.6689%, RMSLE 0.4077, signed bias -0.2556%, and 78/78 checks. The unchanged
contract evidence remains 28,512 rows across 1,782 store-family series and 16
days. The active asset tree is 810,979 bytes and `index.html` is 48,985 bytes.
Local desktop and 390-pixel mobile checks confirmed the same 1920x1080
intrinsic dimensions as the AI Service Request Automation visual, exact mobile
rendered dimensions, zero horizontal overflow, and no browser errors. Commit
`00e9a922bef313602272563afffb0c16e6afdabc` was published successfully by
Pages run `34356927342`. The live release marker returned `20260909-04`; the
WebP returned HTTP 200 with the correct `image/webp` content type, and clicking
it opened the same 1920x1080 intrinsic image on desktop and mobile.

**2026-09-10 adaptive metric formatting:** Release `20260909-06` replaces the
forced 4-decimal presentation with compact, value-sensitive formatting.
Visible non-percentage performance scores use at most 4 decimal places;
visible percentages use at most 2 decimal places; and trailing decimal zeros
are removed. Examples include RMSLE 0.5246, WAPE 15.24% and 14.67%, exact
perfect scores at 100%, route and task success at 96.67%, total bias at 5.9%,
BMKG category accuracy at 75%, Thyroid ROC-AUC at 98.6%, and ARIMA MAPE at
2.08% and 1.82%. Counts, ratios, sample totals, horizons, thresholds,
identifiers, DOI values, dates, GPA, and other non-performance quantities are
outside this rule. The Retail visual retains its approved 1920x1080 layout and
now displays WAPE 14.67%, RMSLE 0.4077, and signed bias -0.26%. No metric
meaning, evaluation boundary, resume fact, or project evidence changes.
`index.html` is 48,971 bytes, the Retail WebP is 162,712 bytes, and the asset
tree is 838,341 bytes. Commit
`397376ac88cdffbae2de4413ba242b13a7849ce8` was published successfully by
Pages run `34419198907`. Live checks returned HTTP 200 at desktop 1440x1000
and mobile 390x844, the release marker returned `20260909-06`, all 22 headline
values fit their cells, the Retail visual retained its native 1920x1080
dimensions, and no obsolete display values, horizontal overflow, failed
requests, browser warnings, or runtime errors were found.

**2026-09-10 academic visual restoration:** Release `20260910-01` restores
the exact project-native Thyroid Information Gain, BiLSTM observed-versus-
predicted rainfall, and ARIMA observed-versus-forecast rice-price visuals from
Git history. Each source visual is exported as a native `1920x1080` WebP and
linked from its card for full-size inspection. The optimized files are 75,576,
95,786, and 93,234 bytes respectively, all below the 250 KB target without
reducing their Full HD resolution. The approved card copy, metric rows, and
evaluation boundaries are unchanged. The superseded HTML workflow panels,
their unused CSS, the temporary conversion script, and the restored PNG source
copies are removed in the same revision. `index.html`, `styles.css`, and
`script.js` are 48,752, 21,091, and 2,493 bytes; the complete active `assets/`
tree is 1,102,937 bytes. Commit, Pages publication, and live desktop/mobile
verification completed successfully at portfolio commit
`5d8f785a034d828528abb6c808ac680e895d645b`; Pages run `34421710442`
completed successfully. Live checks at 1440x1000 and 390x844 confirmed all 4
Academic cards, native `1920x1080` dimensions for every visual, no horizontal
overflow, working filtering and mobile navigation, and no browser warnings or
runtime errors. Each restored WebP returned HTTP 200 with `image/webp`, and its
live byte count and SHA-256 matched the local final asset.

## Current website refactor checkpoint

### 2026-10-08 website-only refactor checkpoint

- **Scope:** User-authorized refactor of Portfolio Website only. Other project
  repositories, the resume artifact, LinkedIn, and job-platform profiles are
  unchanged. Approved wording, claims, metric formatting, visual direction,
  project order, and all 7 native Full HD project images are preserved.
- **Implementation:** The runtime remains semantic HTML, CSS, and vanilla
  JavaScript. Navigation and filters have independent initializers in a private
  scope; one menu-state function owns ARIA, visibility, and scroll locking.
  Breakpoint changes replace the continuous resize listener. Escape restores
  focus when needed; outside clicks and focus departure dismiss the menu.
  Filter numbers are cached once, and `aria-pressed` also controls their style.
- **Progressive enhancement:** Mobile links remain visible if scripts fail;
  the inactive menu button and filters stay hidden. Native project details
  remain usable. The skip-link target is focusable, short-screen menus scroll,
  and interactive mobile controls have at least 44-pixel targets.
- **CSS cleanup:** Shared gutter/header tokens replace repeated geometry.
  Component sections are labeled, obsolete stage/note/context selectors and
  redundant declarations are removed, capability-grid borders remain correct
  at each breakpoint, and flexible heading columns avoid tablet overflow.
- **Release safety:** The inline guard tolerates unavailable browser APIs,
  direct-file previews, failed requests, malformed markers, older deployment
  markers, and repeated stale HTML. Existing query parameters and anchors are
  preserved during a refresh.
- **Regression suite:** `node --test tests/site.test.cjs` passes all 7 tests
  covering static references, IDs, image attributes, source/asset budgets,
  orphan assets, release alignment and fail-open behavior, menu state and
  focus, filter order/count/numbering, missing controls, and legacy media-query
  listeners. It is development-only, with no third-party dependency or build
  requirement. Browser rendering remains a separate gate.
- **Local browser verification:** Checked 320, 390, 600, 720, 860, 862, 1080,
  and 1440-pixel viewports, including 720-pixel reflow equivalent to a
  1440-pixel desktop at 200% zoom and a 320x480 short-screen menu. Desktop and
  mobile rendering, all context filters, all 7 native details, keyboard Escape,
  skip-link focus, breakpoint dismissal, menu scroll containment, and a
  temporary script-free fallback passed. All 7 images decoded at 1920x1080;
  no page or relevant text overflow or browser warning/error remained in the
  inspected states. The existing reduced-motion rule is retained.
- **Content preservation:** Compared normalized HTML text and every asset and
  resume reference against pre-refactor Git HEAD; all are identical. No image
  or resume bytes changed. The accepted resume SHA-256 remains
  `8FB2E0D21CB736D9217960AD838028C664171E022C41D9F0F48C8D18B3CF6D0C`.
  This is a preservation check, not a new project-evidence or resume audit.
- **Budgets:** Local HTML/CSS/JS are 49,218 / 20,901 / 3,628 bytes before
  transport compression. The unchanged desktop/mobile hero plus profile
  payloads are 99,466 / 189,498 bytes. All project assets remain below 250 KB;
  no runtime framework, web font, third-party request, or package manager was
  introduced.
- **Synchronization:** Website/resume shared facts are preserved; LinkedIn and
  other-platform application states remain as previously recorded and are not
  newly verified. The pre-existing job-search edits in the career register are
  outside this commit; only the new website-only scope decision is included.
- **Publication:** Published release `20261008-01` from portfolio commit
  `0593cd00a4addbba003101192a7f3e51c1c05389`. GitHub Pages run `37736759830`
  succeeded. Live HTML, versioned CSS/JS, sitemap, and resume returned HTTP 200
  and matched local contents (the PDF byte for byte). All 10 referenced image
  assets, including all 7 project visuals and both responsive heroes, matched
  local SHA-256 values. Live desktop 1440x1000 and mobile 390x844 checks passed
  with working navigation/filtering, sequential Academic numbers, no
  horizontal overflow, correct responsive hero selection, and no browser
  warning/error. The Thyroid full-size link opened its native 1920x1080 WebP.
  Temporary QA variants and patch files were removed; no backup assets remain.


### 2026-10-08 lightweight visual refinement

- **Scope:** The user explicitly reopened visual presentation after the
  refactor, requesting a more eye-catching website that remains lightweight.
  The change refines the existing navy/teal/coral identity; approved career
  wording, metrics, project order, links, resume, and image bytes are unchanged.
- **Direction:** Deliberate 2-line desktop name composition, tighter heading
  typography, clearer hero artwork, coral section markers, stronger project
  numbering, slightly wider desktop visuals, easier-to-read project copy,
  bordered result rows, and distinct publication and capability panels. The
  capability grid fills both desktop rows and collapses for tablet/mobile.
- **Implementation:** CSS and one presentational heading span only. No new
  JavaScript, dependency, font, image, third-party request, continuous animation,
  backdrop blur, or build step. Obsolete featured-card classes, the old surface
  token, superseded grid-border rules, and the temporary script-free QA page
  are removed rather than retained as fallbacks.
- **Preservation:** Normalized HTML text and every image, resume, and career
  link match the preceding release. All 7 project images still decode at native
  1920x1080. Shared career facts are preserved, not newly re-audited; other
  surfaces remain outside this website-only visual task.
- **Verification:** All 7 dependency-free regression tests pass. Browser
  checks at 320, 390, 600, 720, 860, 862, 1080, and 1440 pixels show no page,
  heading, metric, button, or capability-text overflow. The 720-pixel check
  covers reflow equivalent to a 1440-pixel desktop at 200% zoom. All context
  filters preserve counts and numbering, all 7 native details open, and the
  320x480 menu scrolls and closes on Escape/selection with focus recovery.
  A script-free 320-pixel preview retains navigation, all 7 cards, and native
  details. No browser warning/error was reported in these inspected states.
- **Release:** `20261008-02`, with `styles.css?v=20261008b`; unchanged script
  and image URLs retain their existing versions. Sitemap `lastmod` remains
  `2026-10-08`, the date of this same-day revision.
- **Budgets:** HTML/CSS/JS are 49,136 / 21,876 / 3,628 bytes before transport
  compression. CSS grows by 975 bytes; JavaScript and every image retain their
  previous sizes. Responsive hero-plus-profile payloads remain 99,466 bytes
  on desktop and 189,498 bytes on mobile, with no additional network request.
- **Publication:** Published from commit
  `acb6aaea00fe1caf0e62fd673016e9a75fd73a5d`; GitHub Pages run `37738496320`
  succeeded. All 17 unique referenced public files, including HTML, CSS, JS,
  release marker, sitemap, every image, and the resume, returned HTTP 200 and
  matched local bytes exactly. Live 1440x1000 desktop and 390x844 mobile
  inspections passed with the correct responsive hero, working navigation,
  sequential Academic filter numbers, no horizontal overflow, and no browser
  warning/error. Returning to All restores all 7 cards. The user's pre-existing
  career-register job-search edits remain untouched and outside the commit.

### 2026-10-08 restrained motion and editorial styling

- **Scope:** The user explicitly permits a little lightweight animation and
  requests a distinctive, non-template-like appearance. Additional technology
  is allowed when useful; this implementation needs only existing CSS/JS.
  Approved copy, metrics, links, image bytes, resume, and project order remain
  unchanged, as confirmed by normalized HTML text and reference comparison.
- **Motion:** A short hero signal-line draw and 8-pixel heading settling effect
  complete in 420-520 ms. An IntersectionObserver enhances section/project
  headings once, unobserves each target, removes completed animation classes,
  and disconnects when finished. No content starts hidden. No scroll listener,
  permanent GPU hint, timer loop, animated statistic, parallax, or video is
  introduced. Hover-only movement is limited to fine pointers; charts remain
  uncropped and unscaled. Menus and native details retain their accessible
  states while their icons change; filters and links have brief feedback.
- **Design:** Capability groups use an editorial ruled layout rather than
  repeated rounded boxes. The established navy/teal/coral palette, typography,
  image-led case studies, and evidence hierarchy remain coherent.
- **Accessibility:** Initial reduced motion skips observer setup. Changing to
  reduced motion disconnects pending entrances and clears active classes; CSS
  cancels animations and suppresses smooth scrolling and transition duration.
  Browsers missing the motion APIs retain the complete static document.
- **Verification:** All 10 dependency-free tests pass, including initial/dynamic
  reduced motion, legacy media listeners, absent APIs, one-shot cleanup, and
  focused-content handling. Browser checks at 320, 390, 600, 720, 860, 862,
  1080, and 1440 pixels show no horizontal or relevant-text overflow; the
  720-pixel check covers 1440-pixel/200%-zoom-equivalent reflow. Mobile menu
  state, Escape, filters/counts/numbering, all 7 native details, skip-link focus,
  and all 7 native 1920x1080 images pass. A temporary QA page forced the exact
  reduced-motion CSS rules and preference: animation was `none`, opacity `1`,
  scrolling `auto`, and menu focus recovery worked. This checks behavior
  without changing the user's OS preference. A script-free 320-pixel preview
  retained navigation, all 7 cards, and native details. Both QA files are
  removed. No browser warning/error was reported in the inspected states.
- **Release:** `20261008-03`, CSS and JS query version `20261008c`; same-day
  sitemap `lastmod` remains `2026-10-08`.
- **Budgets:** HTML/CSS/JS are 49,136 / 23,520 / 5,147 bytes before transport
  compression. Combined CSS/JS growth is 3,163 bytes versus the preceding
  visual release. Image payloads are unchanged; no library, font, asset,
  dependency, build step, or runtime network request is added.
- **Publication:** Commit `8f1cbaf61d1879d1f934b3843b18bf0a168eabbb` was
  published successfully by GitHub Pages run `37740064607`. All 17 public
  files, including HTML, versioned CSS/JS, marker, sitemap, images, and resume,
  returned HTTP 200 and matched local bytes exactly. Live desktop 1440x1000
  inspection confirmed the single-iteration hero animation and editorial
  capability layout, with no lingering entrance class. Live mobile 390x844
  navigation, Escape, Academic filtering/numbering, responsive hero selection,
  and overflow checks passed; no browser warning/error was reported. Temporary
  QA pages/patches are removed. Only the new motion decision is committed from
  the career register; pre-existing job-search edits remain untouched.

### 2026-10-08 professional public-copy revision

- **Scope:** Website copy and the public README overview only. Remove internal
  approval, revision, version, gate, and cleanup narration; shorten repetition
  and use direct professional American English. No redesign or source-project
  changes are included.
- **Reader hierarchy:** Hero introduces the work; About adds professional,
  academic, and teaching context. Project problems, contributions, technical
  details, outputs, and evaluation boundaries serve distinct reader tasks.
  Repetition is retained only where summary/detail navigation benefits readers.
- **Evidence:** Checked the current two-page downloadable resume and the
  current project records. Preserved every headline result, number format,
  evaluation population, confidential-data restriction, and maturity boundary.
  Reused final-year, non-nested CV, same-holdout selection, synthetic examples,
  and local-only evaluation remain explicit. Real deliverable identifiers,
  HTML metadata, network metadata, and technical audit trails are not banned.
- **Surfaces:** Website facts `Synced` with the current resume; deeper project
  methodology `Broader`. Resume bytes and live LinkedIn are unchanged; LinkedIn
  application remains `Unverified`. This is not a new model-results audit.
- **Assets:** All seven approved native 1920x1080 project images, the resume,
  image links, project order, and CSS/JS payloads remain unchanged. Thyroid's
  existing visual remains until an original confusion matrix or prediction
  artifact can establish a replacement without inventing counts.
- **Safeguards:** Public-copy rules are recorded in `AGENTS.md` and the career
  register. The dependency-free suite now has 11 passing tests, including a
  check for internal narrative labels, preserved headline results, and material
  evaluation boundaries.
- **Release:** `20261008-04`; CSS/JS retain `20261008c`, and same-day sitemap
  `lastmod` remains `2026-10-08`.
- **Responsive QA:** Desktop 1440x1000, mobile 390x844 and 320x844, and
  720-pixel reflow showed no horizontal overflow. All seven technical details
  opened, every project image loaded at 1920x1080, Academic filtering preserved
  four correctly numbered cards, and All restored seven. Menu navigation and
  Escape worked; no browser warning/error was reported. HTML is 46,491 bytes,
  down from 49,136; CSS/JS remain 23,520 / 5,147 bytes.
- **Publication:** Commit `b1f1a79a79393cfe3f2beed6338f35ce7c086b10` was
  published by successful Pages run `37744088617`. All 18 public files returned
  HTTP 200 and matched local bytes exactly. Live desktop 1440x1000 confirmed the
  revised About copy and zero overflow. Live mobile 390x844 confirmed navigation,
  Academic filtering and numbering, restoration of all seven projects, all
  seven expanded details, and every native 1920x1080 project image. No browser
  warning/error was reported. Temporary PDF renders and staging patches were
  removed, and the preview server was stopped. Pre-existing job-search edits in
  the career register remain uncommitted and untouched.

### 2026-10-10 audit corrections and manual resume handoff

- **Scope:** User-authorized website correction after the read-only full audit.
  Keep the downloadable PDF unchanged; provide manual resume substitutions.
  S2 details and the original Thyroid confusion matrix remain pending. ARIMA's
  tight title margin is optional polish, not a factual defect; its accepted
  historical plot remains unchanged in this focused correction.
- **Social visual:** Replace the obsolete Data Scientist artwork with a
  1200x630 JPEG matching the navy/teal/coral website. Exact visible copy:
  `M. Thufail`, `Alwannabil Samas`, `Data and AI Professional`, and
  `Machine Learning, Data Systems and Applied AI`. No URL, extra credential,
  metric, or capability is introduced. Both crawler image URLs and alt text
  agree and request query version `20261010a`.
- **Retail visual:** Replace only `V2.0.0 Artifact` with `Saved Model` in the
  approved diagram. The built-in imagegen edit supplied the replacement pill;
  export composites only that area onto the original 1920x1080 artwork, keeping
  the original composition and every metric. The WebP is 127,406 bytes. The
  preview is 138,058 bytes; no runtime dependency or image request is added.
  Prompt intent: replace only the Retail pill while preserving every other
  label/result; create a navy/teal/coral preview with the exact copy above,
  aligned sans-serif typography, flowing data signals, and no additional text.
- **XGBoost scope:** The project's current contract explicitly separates its
  frozen journal reference from the extended experiment. The journal abstract
  at `https://ejurnal.itenas.ac.id/index.php/mindjournal/article/view/14810`
  reports MAAPE 0.9152 and RMSE 11.9566; the current experiment records RMSE
  9.2521 mm. Contribution copy names the extension, the DOI link reads `Read
  original study`, and the repository uses the canonical `forecasting` URL.
  Existing experiment scores, reuse boundary, sparse-rain results, and all
  other project metrics remain unchanged.
- **Resume handoff:** Replace `In the frozen 40-case acceptance gate` with
  `In a controlled local evaluation of 40 cases`; `The selected V2 XGBoost
  model` with `The selected XGBoost model`; and `in the completed V1 evaluation`
  with `in non-nested cross-validation`. Improve `retrieval Recall@3` to
  `top-3 policy retrieval (Recall@3)` and `passed 78/78 checks` to `passed all
  78 synthetic contract checks`. Preserve every result and its evaluation
  meaning. These are recommended manual substitutions, not an accepted new PDF.
- **Verification:** The full 2026-10-10 audit covered the seven source-project
  claims, public/local assets, two rendered resume pages and embedded fonts,
  filters/details/navigation, eight responsive widths, keyboard access, and
  source budgets. This correction adds a regression check for consistent
  crawler images/local-file resolution and explicit XGBoost publication scope.
  All 12 tests pass. Pixel review confirms the exported preview copy and Retail
  numbers; browser and deployment gates are tracked below.
- **Release:** `20261010-01`; changed images use `20261010a`; CSS/JS and PDF
  versions are unchanged; sitemap lastmod is `2026-10-10`.
- **Local browser QA:** Desktop 1440x1000, mobile 390x844 and 320x844, and
  720-pixel reflow show no horizontal overflow. Revised XGBoost copy and
  original-study link are readable; Retail decodes at 1920x1080 with its
  original composition. Academic/Independent filters and native details work;
  the inspected browser log has no warning/error. All 12 regression tests pass,
  and the downloadable resume hash is unchanged. Temporary export scripts are
  removed before commit.
- **Publication:** Approved for commit/push after local QA; live origin checks
  are pending. WhatsApp/LinkedIn cache refresh is separate from origin
  verification and has not been claimed.

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
- **Source-of-truth files inspected:** `AGENTS.md`, `PROJECT.md`, `README.md`, the accepted `retail-history-selection-01-v1` evidence recorded there, the active V2 artifact contract, current Git worktree, public `main` at `7aec2f52dad4dd2673c5b978529e1337a1b81029`, and successful GitHub Actions run `34216126189`.
- **Last audited:** 2026-09-09
- **Display title:** Retail Sales Forecasting & Planning System
- **Context:** Independent portfolio project using authorized Kaggle competition data, controlled chronological model evaluation, and locally verified batch, API, and Docker inference.
- **Primary role family:** AI/ML Engineering
- **Supporting role families:** Data Science
- **Verified metrics:** The active V2 configuration was selected from 3 Ridge and 27 XGBoost configurations evaluated across 4 predeclared chronological folds. It recorded mean fold RMSLE 0.524617 and mean fold WAPE 15.2366%, followed by protected internal-test RMSLE 0.407651, WAPE 14.6689%, and signed bias -0.2556%. The versioned artifact generated 28,512 forecasts across 1,782 store-family series with exact notebook, fresh-process batch, local FastAPI, and Docker parity. All 78 synthetic checks passed locally and in GitHub Actions.
- **Public repository:** https://github.com/mthufailsamas/retail-sales-forecasting-ai-engineering
- **Visual presentation:** Release `20261010-01` preserves the established 5-stage composition as a 127,406-byte 1920x1080 WebP. Only the internal version pill changes to `Saved Model`; the diagram preserves 3 Ridge and 27 XGBoost candidates, 4-fold mean RMSLE selection, batch/API/Docker parity, internal-test WAPE 14.67%, RMSLE 0.4077, signed bias -0.26%, the 28,512-row 16-day contract across 1,782 store-family series, and 78/78 checks.
- **Limitations:** The competition data covers 2013-2017 and supports product-family rather than SKU forecasting. The source does not provide inventory, supplier, cost, margin, or capacity inputs. The 4-fold aggregate gives equal weight to predeclared operating scenarios rather than estimating their natural frequency. Runtime verification is local and containerized; no external deployment or live business impact has been demonstrated.
- **Approved Project Output wording:** Delivers 28,512 forecasts across 1,782 store-family series for the next 16 days, with matching results from batch, API, and container execution.
- **Approved Evidence & Scope wording:** Model selection used 4 fixed historical windows from 2013–2017 competition data, followed by a separate internal test. Delivery was verified locally; business impact remains unmeasured.
- **Portfolio status:** Published in release `20260909-06` at portfolio commit `397376ac88cdffbae2de4413ba242b13a7849ce8`; Pages run `34419198907` completed successfully, and live desktop/mobile checks confirmed compact metric formatting, the aligned 1920x1080 visual, expected release marker, zero horizontal overflow, and no browser errors.

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
- **Approved Project Output wording:** Provides Employee Service Desk and authorized Service Operations workspaces with catalog-matched tickets, at most 1 follow-up question, and recorded approvals, escalations, resolutions, and recovery attempts.
- **Approved Evidence & Scope wording:** In the controlled local evaluation, 27 of 30 requests (90%) progressed without service-agent triage review; 3 were held for review. Cases, policies, and service records were fictional, and hosted or paid AI calls totaled 0. Business impact was not measured.
- **Portfolio status:** Published at portfolio commit `29577e6392d8330e9736db1841b58a992fc0ecc5`; Pages run `32634340800` completed successfully. Live release `20260823-03` removes the cost and quality badges plus the redundant architecture heading while preserving the illustrated workflow and normalizing its typography. The public page, release marker, and versioned Full HD image each returned successfully.

### dwdm-optical-sensor-monitoring

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Professional Projects/Lintasarta DWDM Monitoring/`
- **Source-of-truth files inspected:** `README.md`, the implementation under `src/`, the complete contract suite under `tests/`, `Proposal_Tesis_DWDM_Data_Science.docx`, `Rancangan_Penelitian_DWDM_Final.docx`, and the current local workspace structure. The project has no usable Git baseline at this path.
- **Last audited:** 2026-08-29
- **Display title:** DWDM Optical Sensor Monitoring with Change-Point and Degradation Detection
- **Context:** Professional project-stage work at PT Aplikanusa Lintasarta using confidential operational sources.
- **Primary role family:** Data Engineering
- **Supporting role families:** Data Analysis
- **Verified metrics:** The implemented contract combines 2 source systems, approximately 400 configured directional optical sensors with the active subset varying over time below or above 300, native 5-minute PRTG telemetry, and 3 operational views: Operations Board, Event Explorer, and Management Overview. All 67 local contract tests passed again on 2026-08-29 when the project's `src` directory was placed on `PYTHONPATH`. The scale and variability are an explicit user-attested professional record accepted on 2026-08-29.
- **Public repository:** No public repository is available; the local project is proprietary and currently has no valid Git repository baseline.
- **Limitations:** Production telemetry, database contents, credentials, source access, and operational screenshots are confidential. Statistical events are investigation evidence rather than confirmed physical root causes. The local dashboard is not internet-facing and has no production authentication, TLS termination, or web-server hardening.
- **Approved Project Output wording:** Operations Board, Event Explorer, and Management Overview provide current priorities, event history, and paired-sensor charts for investigation.
- **Approved Evidence & Scope wording:** Statistical flags guide investigation; they do not establish physical causes. Operational data, source code, credentials, infrastructure, and screenshots remain confidential.
- **Portfolio status:** Published in release `20260909-02` at portfolio commit `e88ef71566c52562684a0984cbbd963c94348936`; the live card exposes the approximately 400 configured-sensor scale, variable active subset, 5-minute cadence, and 3 operational views.

### xgboost-rainfall-forecasting

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/XGBoost Rainfall Forecasting/`
- **Source-of-truth files inspected:** `AGENTS.md`, `PROJECT.md`, `README.md`, the canonical 14-cell notebook with every code cell completed and no error output, `development_decision.json`, `final_comparison.csv`, `final_predictions.csv`, `final_intensity_confusion.csv`, `final_intensity_class_metrics.csv`, `run_metadata.json`, the current Git worktree, and the configured public repository remote.
- **Last audited:** 2026-08-27
- **Display title:** Rainfall Forecasting with XGBoost and Grid Search
- **Context:** Academic next-day rainfall forecasting study using authorized private BMKG observations from the Trunojoyo area in Sumenep Regency, accompanied by a peer-reviewed publication and current reproducible experiment outputs.
- **Primary role family:** Data Science
- **Supporting role families:** None.
- **Verified metrics:** The 2026-08-27 canonical Run All completed all 14 code cells without notebook errors and produced 47 local evidence artifacts after 5,184 temporal CV fits. Development OOF evidence selected a 40% 2-stage and 60% direct Tweedie ensemble with a 0.50 wet threshold. Across 308 observed targets in the reused 366-day final calendar period, the ensemble recorded RMSE 9.2521 mm, MAE 4.1061 mm, total bias 5.8982%, R-squared 0.2370, wet-day balanced accuracy 0.7679, wet-day F1 0.6897, BMKG intensity accuracy 75.0%, and BMKG Macro-F1 0.4429. Correct-category counts were 175/206 dry, 52/84 light, 4/15 moderate, and 0/3 heavy; the final period contained no observed very-heavy target.
- **Public repository:** https://github.com/mthufailsamas/xgboost-rainfall-forecasting
- **Publication scope — clarified 2026-10-10:** The linked article reports the original study (MAAPE 0.9152, RMSE 11.9566). The current card's 23-feature ensemble and RMSE 9.2521 mm belong to its later extended experiment. The contribution and publication link explicitly distinguish these evidence populations; no result is removed or reassigned.
- **Visual asset source:** Project-native selected-ensemble actual-versus-forecast evidence rendered locally from `final_predictions.csv` as a `1920x1080` WebP. The visual contains no third-party image or runtime request.
- **Visual factual inventory:** Centered title `XGBoost Rainfall Forecasting`; subtitle `Actual and Forecast Rainfall across the Reused Final Calendar Period`; legend labels `Actual Rainfall` and `Daily XGBoost Forecast`; footer values `366 Daily Forecasts`, `308 Observed Targets`, `RMSE 9.2521 mm`, and `Wet/Dry Balanced Accuracy 0.7679`. The time-series lines and every displayed value trace to `final_predictions.csv` and `final_comparison.csv` from the canonical output directory.
- **Limitations:** The original observations are private and are not redistributed. The 4-year source represents 1 observation context, 58 of 366 final targets are unknown, and only 2 full-year development checks are available. The final year had informed prior analysis and is reused temporal evidence. Moderate and heavy rainfall remain weak: 4/15 moderate and 0/3 heavy dates received the correct BMKG category. The experiment does not establish regional transfer, warning capability, deployment, or measured salt-production impact.
- **Approved Project Output wording:** Produces 366 next-day rainfall forecasts, wet/dry alerts, and BMKG intensity labels, with error summaries and comparison charts.
- **Approved Evidence & Scope wording:** Results cover 2 annual development checks and a final year previously used in analysis. Intensity classification matched 4/15 moderate and 0/3 heavy rainfall observations. Source BMKG observations remain private.
- **Portfolio status:** Published at portfolio commit `14acbb12987cbb122e867a948cabc5185bb849f9`; Pages run `33062369997` completed successfully with release `20260827-02`. The live desktop and 390-pixel mobile card contain no internal experiment-version labels, horizontal overflow, or browser warning/error.

### xgboost-thyroid-recurrence-classification

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/XGBoost Thyroid Recurrence Classification/`
- **Source-of-truth files inspected:** `AGENTS.md`, `PROJECT.md`, `README.md`, the V1 notebook and implementation path, the current Git worktree, and the configured public repository remote in the workspace above.
- **Last audited:** 2026-08-28
- **Display title:** Thyroid Cancer Recurrence Classification with XGBoost, Information Gain, and Grid Search
- **Context:** Collaborative academic research project.
- **Primary role family:** Data Science
- **Supporting role families:** None.
- **Verified metrics:** The V1 preparation path loads 383 source rows and 17 columns, removes 19 exact full-row repetitions, and retains 364 rows with 256 `No` and 108 `Yes` labels. V1 uses shuffled 10-fold K-Fold, fold-local Information Gain, and XGBoost Grid Search. The completed result records 97.25% pooled out-of-fold accuracy, 95.37% F1-score, 98.05% specificity, and 98.60% ROC-AUC. The user explicitly confirmed these existing metrics as authentic on 2026-08-29.
- **Public repository:** https://github.com/mthufailsamas/xgboost-thyroid-recurrence-classification
- **Visual asset source:** Exact project-native V1 Information Gain chart recovered from the repository history and exported locally as a `1920x1080` WebP. The image contains no third-party asset or runtime request.
- **Visual factual inventory:** Title `Top 10 Features by Mean Information Gain`; subtitle `Mean Information Gain across 10 Training Folds`; ranked bars `Response 0.666`, `Risk 0.424`, `N 0.277`, `T 0.274`, `Adenopathy_No 0.267`, `Age 0.221`, `Stage 0.176`, `Focality 0.097`, `Adenopathy_Bilateral 0.091`, and `M 0.091`; x-axis `Mean Information Gain across 10 Training Folds (bits)`. These are the user-confirmed historical V1 feature-selection results, not causal or clinical importance claims.
- **Limitations:** The V1 design uses shuffled, non-nested 10-fold evaluation and accuracy as its default selection metric on 364 retained rows. V2 model design, final grid, selection rule, calibration, refit, and results are not implemented. The dataset does not support clinical diagnosis or deployment claims.
- **Approved Project Output wording:** Produces cross-validated recurrence predictions, selected-feature summaries, and classification performance reports.
- **Approved Evidence & Scope wording:** Model selection and reporting use the same non-nested cross-validation, with accuracy as the selection criterion. Results describe internal academic evaluation, not clinical diagnosis, patient care, or deployment.
- **Portfolio status:** Published in release `20260910-01` at portfolio commit `5d8f785a034d828528abb6c808ac680e895d645b`; Pages run `34421710442` completed successfully. The live card preserves the completed V1 metrics and non-clinical evaluation boundary while restoring the project-native Information Gain visual.

### bilstm-rainfall-forecasting

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/BiLSTM Rainfall Forecasting/`
- **Source-of-truth files inspected:** `README.md`, `train_bilstm_rainfall.py`, the current modified notebook worktree, the same-schema sample data, and the configured public repository remote in the workspace above.
- **Last audited:** 2026-08-28
- **Display title:** Rainfall Forecasting with BiLSTM and Grid Search
- **Context:** Internship-linked academic forecasting project developed with BMKG observations.
- **Primary role family:** Data Science
- **Supporting role families:** None.
- **Verified metrics:** The runnable reference workflow uses a 7-day input window, 3 stacked BiLSTM layers, and a focused 27-configuration grid across units, batch size, and learning-rate drop period. It uses an 80:20 chronological split and returns predictions to millimeters before scoring. The completed run recorded MAAPE 0.8073 and RMSE 10.2734 mm; the user explicitly confirmed these existing metrics as authentic on 2026-08-29.
- **Public repository:** https://github.com/mthufailsamas/bilstm-rainfall-prediction
- **Visual asset source:** Exact project-native completed-run actual-versus-predicted chart recovered from the repository history and exported locally as a `1920x1080` WebP. The image contains no third-party asset or runtime request.
- **Visual factual inventory:** Title `BiLSTM Rainfall Prediction`; subtitle `Observed Rainfall and Next-Day Predictions over the Chronological Test Period`; legend labels `Observed` and `Predicted`; daily series across October 2023-May 2024; y-axis `24-hour rainfall (mm)` and x-axis `Date`. The visual represents the user-confirmed historical internship run whose source observations remain private.
- **Limitations:** The original observations are private and are not redistributed. The public workflow defaults to synthetic same-schema data. The same chronological holdout selects and reports the best configuration, so the result is model-selection evidence rather than an untouched final estimate. The current notebook has uncommitted changes and cannot establish a frozen historical result.
- **Approved Project Output wording:** Produces next-day rainfall estimates from 7 days of weather history, with a saved model, error summaries, and observed-versus-predicted charts.
- **Approved Evidence & Scope wording:** The reported results use original BMKG observations; the public repository includes a synthetic sample with the same schema. Model selection and scoring used the same chronological holdout, so the metrics reflect that selection process.
- **Portfolio status:** Published in release `20260910-01` at portfolio commit `5d8f785a034d828528abb6c808ac680e895d645b`; Pages run `34421710442` completed successfully. The live card preserves MAAPE 0.8073, RMSE 10.2734 mm, and the shared-holdout limitation while restoring the project-native actual-versus-predicted visual.

### arima-rice-price-forecasting

- **Workspace folder:** `C:/Users/Thufail/Documents/Portfolio/Academic Projects/ARIMA Rice Price Forecasting/`
- **Source-of-truth files inspected:** `README.md`, `train_arima_rice_price.py`, `rice_price_jatim_monthly.csv`, the current Git worktree, and the configured public repository remote in the workspace above.
- **Last audited:** 2026-08-28
- **Display title:** Rice Price Forecasting with ARIMA and Walk-Forward Validation
- **Context:** Collaborative academic forecasting project.
- **Primary role family:** Data Science
- **Supporting role families:** None.
- **Verified metrics:** The included public dataset contains 60 monthly observations from January 2020 through December 2024 for 2 price series. The default 80:20 design uses 48 initial months and 12 expanding-history 1-step forecasts. The completed results recorded MAPE 2.08% and 1.82%; the user explicitly confirmed these existing metrics as authentic on 2026-08-29.
- **Public repository:** https://github.com/mthufailsamas/arima-rice-price-forecasting
- **Visual asset source:** Exact project-native completed-run walk-forward chart recovered from the repository history and exported locally as a `1920x1080` WebP. The image contains no third-party asset or runtime request.
- **Visual factual inventory:** Title `ARIMA Walk-Forward Forecasts`; subtitle `Observed and One-Step-Ahead Forecasts over the Held-Out Monthly Period`; panels `Medium Rice` and `Premium Rice`; legend labels `Observed` and `Forecast`; y-axis `IDR/kg` and x-axis `Test Month` across January-December 2024. The visible series and period match the included 60-row public monthly dataset and 12-step walk-forward design.
- **Limitations:** The included dataset has 60 monthly observations and no external predictors. Candidate selection and reporting use the same 12-month walk-forward period, so the selected score is not an untouched generalization estimate. Walk-forward results represent 1-step forecasting rather than long-horizon accuracy.
- **Approved Project Output wording:** Produces next-month price forecasts for medium and premium rice, with selected ARIMA orders, residual diagnostics, and observed-versus-forecast charts.
- **Approved Evidence & Scope wording:** The public dataset and code are included in the repository. Model selection and scoring use the same 12-month walk-forward period; results describe 1-step-ahead forecasts based on past prices.
- **Portfolio status:** Published in release `20260910-01` at portfolio commit `5d8f785a034d828528abb6c808ac680e895d645b`; Pages run `34421710442` completed successfully. The live card preserves medium-rice MAPE 2.08%, premium-rice MAPE 1.82%, and the same-period selection/reporting limitation while restoring the project-native walk-forward visual.

### Registry audit queue

The 2026-10-10 audit corrections are approved for website release `20261010-01`;
publication verification is tracked in the checkpoint above. Shared metrics are
unchanged. Resume wording awaits the user's manual update, ongoing S2 awaits
institution/program/date details, and Thyroid's visual replacement awaits an
original result artifact; its accepted metrics and existing image are unchanged.

## 5. Evidence-first portfolio rules

Every metric must be traceable to a current notebook, test output, README, CI result, report, or other project source of truth.

Keep the following evidence levels distinct:

- **Controlled evaluation:** evaluation under a defined dataset, split, replay, or experimental setup. It is not live operational performance.
- **Local verification:** functionality or tests verified in a local environment. It is not external deployment.
- **External deployment:** the system is running in an external environment and that deployment is verifiable.
- **Live business validation:** the system has been used in a real operational context and its business outcome has been measured.

### Claim and wording controls

- Never convert WAPE, RMSLE, MAE, or another error metric into “accuracy.”
- Display public accuracy, error, and related model-performance scores with at
  most 4 digits after the decimal point for non-percentage values and at most 2
  for percentages. Round from the most precise accepted source value, then
  remove trailing decimal zeros and the decimal point when no fractional part
  remains. Preserve integer counts and ratios such as `78/78`, and do not apply
  this rule to data volumes, horizons, thresholds, versions, identifiers, DOI
  values, dates, durations, GPA, or other non-performance quantities.
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
