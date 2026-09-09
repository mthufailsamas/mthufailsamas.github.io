# Portfolio Website Source of Truth

Last updated: 2026-09-09

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
| Resume content | Canonical | Preserve the approved identity, chronology, capabilities, project results, publication, certification, links, and evidence boundaries recorded in the final PDF. |
| Identity and positioning | Synced | The local release uses the approved Data and AI Professional positioning and Surabaya, East Java, Indonesia location. |
| Experience and chronology | Synced | All 4 roles preserve the approved employers, dates, responsibilities, scale, and shared BiLSTM results; the website uses reverse chronology by role end date. |
| Skills and capabilities | Synced | All resume capability families and named tools are represented without adding unsupported technologies. |
| Shared project facts and metrics | Synced | The 3 resume projects and all overlapping project metrics preserve the same evaluation boundaries; the website adds 4 evidence-backed projects and deeper limitations. |
| Education, publication, and certification | Synced | Degree, institution, dates, GPA, accelerated completion, thesis focus, publication record, and BNSP validity match the approved resume. |
| Website content publication | Published | Release `20260909-02` was published from commit `e88ef71566c52562684a0984cbbd963c94348936`; Pages run `34332482575` succeeded and live desktop/mobile verification passed. |
| Retail visual restoration | Published | Release `20260909-03` was published from commit `a686212357ccac22619082d2eaaaaec653ebd6de`; Pages run `34353389509` succeeded and live desktop/mobile verification passed. |
| Retail visual composition alignment | Published | Release `20260909-04` was published from commit `00e9a922bef313602272563afffb0c16e6afdabc`; Pages run `34356927342` succeeded and live desktop/mobile plus full-size click verification passed. |
| Public metric precision | Approved | Release `20260909-05` formats visible accuracy, error, and related model-performance scores to 4 decimal places while preserving counts, ratios, thresholds, and other non-performance quantities; change to Published only after Pages and live verification succeed. |

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
Data and AI Professional whose work is demonstrated through current evidence.

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

**2026-09-09 public metric precision:** Release `20260909-05` standardizes
visible accuracy, error, and related model-performance scores to 4 decimal
places across project details and headline metric rows. The Retail card now
shows mean 4-fold RMSLE 0.5246, mean fold WAPE 15.2366%, and protected
internal-test WAPE 14.6689%. The AI Service Request Automation card derives
96.6667% from its accepted 29/30 result rather than padding the older rounded
96.7% display; its exact perfect scores display as 100.0000%. XGBoost rainfall
category accuracy displays as 75.0000%; Thyroid scores display as 97.2500%,
95.3700%, 98.0500%, and 98.6000%; and ARIMA MAPE displays as 2.0800% and
1.8200%. Existing 4-decimal rainfall and BiLSTM metrics remain unchanged.
Counts such as 78/78, sample totals, horizons, thresholds, identifiers, DOI
values, and GPA are outside this formatting rule. No metric meaning,
evaluation boundary, resume fact, or project evidence changes. `index.html` is
49,035 bytes and the asset tree remains 810,979 bytes.

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
- **Visual presentation:** Release `20260909-04` uses the established 5-stage independent-project workflow composition as a 135,350-byte native 1920x1080 WebP. Its visible V2 evidence covers 3 Ridge and 27 XGBoost candidates, 4-fold mean RMSLE selection, the V2.0.0 artifact, batch/API/Docker parity, protected internal-test WAPE 14.6689%, RMSLE 0.4077, signed bias -0.2556%, the 28,512-row 16-day contract across 1,782 store-family series, and 78/78 checks.
- **Limitations:** The competition data covers 2013-2017 and supports product-family rather than SKU forecasting. The source does not provide inventory, supplier, cost, margin, or capacity inputs. The 4-fold aggregate gives equal weight to predeclared operating scenarios rather than estimating their natural frequency. Runtime verification is local and containerized; no external deployment or live business impact has been demonstrated.
- **Approved Project Output wording:** The system produces 28,512 checked forecasts across the complete 16-day store-family contract, giving planning teams a consistent demand view through the same reusable artifact across batch, API, and containerized inference.
- **Approved Evidence & Scope wording:** Four fixed historical folds establish repeated-window evidence before the protected internal test is opened. Results cover 2013–2017 competition data and locally verified delivery; they do not represent live retail deployment or measured business impact.
- **Portfolio status:** Published in release `20260909-04` at portfolio commit `00e9a922bef313602272563afffb0c16e6afdabc`; Pages run `34356927342` completed successfully, and live desktop/mobile checks confirmed the aligned 1920x1080 visual, full-size click behavior, expected release marker, zero horizontal overflow, and no browser errors.

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
- **Source-of-truth files inspected:** `README.md`, the implementation under `src/`, the complete contract suite under `tests/`, `Proposal_Tesis_DWDM_Data_Science.docx`, `Rancangan_Penelitian_DWDM_Final.docx`, and the current local workspace structure. The project has no usable Git baseline at this path.
- **Last audited:** 2026-08-29
- **Display title:** DWDM Optical Sensor Monitoring with Change-Point and Degradation Detection
- **Context:** Professional project-stage work at PT Aplikanusa Lintasarta using confidential operational sources.
- **Primary role family:** Data Engineering
- **Supporting role families:** Data Analysis
- **Verified metrics:** The implemented contract combines 2 source systems, approximately 400 configured directional optical sensors with the active subset varying over time below or above 300, native 5-minute PRTG telemetry, and 3 operational views: Operations Board, Event Explorer, and Management Overview. All 67 local contract tests passed again on 2026-08-29 when the project's `src` directory was placed on `PYTHONPATH`. The scale and variability are an explicit user-attested professional record accepted on 2026-08-29.
- **Public repository:** No public repository is available; the local project is proprietary and currently has no valid Git repository baseline.
- **Limitations:** Production telemetry, database contents, credentials, source access, and operational screenshots are confidential. Statistical events are investigation evidence rather than confirmed physical root causes. The local dashboard is not internet-facing and has no production authentication, TLS termination, or web-server hardening.
- **Approved Evidence & Scope wording:** The analysis helps teams decide what to investigate first but does not claim a physical root cause. Internal telemetry, source code, credentials, infrastructure, database contents, and operational screenshots remain confidential.
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
- **Verified metrics:** The V1 preparation path loads 383 source rows and 17 columns, removes 19 exact full-row repetitions, and retains 364 rows with 256 `No` and 108 `Yes` labels. V1 uses shuffled 10-fold K-Fold, fold-local Information Gain, and XGBoost Grid Search. The completed result records 97.25% pooled out-of-fold accuracy, 95.37% F1-score, 98.05% specificity, and 98.60% ROC-AUC. The user explicitly confirmed these existing metrics as authentic on 2026-08-29.
- **Public repository:** https://github.com/mthufailsamas/xgboost-thyroid-recurrence-classification
- **Limitations:** The V1 design uses shuffled, non-nested 10-fold evaluation and accuracy as its default selection metric on 364 retained rows. V2 model design, final grid, selection rule, calibration, refit, and results are not implemented. The dataset does not support clinical diagnosis or deployment claims.
- **Approved Evidence & Scope wording:** Preserve the completed classification metrics in confident professional wording. The project remains academic classification work and does not claim clinical diagnosis or deployment.
- **Portfolio status:** Published in release `20260909-02` at portfolio commit `e88ef71566c52562684a0984cbbd963c94348936`; the live card exposes the completed V1 metrics and non-clinical evaluation boundary.

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
- **Limitations:** The original observations are private and are not redistributed. The public workflow defaults to synthetic same-schema data. The same chronological holdout selects and reports the best configuration, so the result is model-selection evidence rather than an untouched final estimate. The current notebook has uncommitted changes and cannot establish a frozen historical result.
- **Approved Evidence & Scope wording:** Preserve MAAPE 0.8073 and RMSE 10.2734 mm as the completed BiLSTM experiment results, alongside the 7-day sequence, focused Grid Search, and chronological 80:20 design.
- **Portfolio status:** Published in release `20260909-02` at portfolio commit `e88ef71566c52562684a0984cbbd963c94348936`; the live card exposes MAAPE 0.8073, RMSE 10.2734 mm, and the shared-holdout limitation.

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
- **Limitations:** The included dataset has 60 monthly observations and no external predictors. Candidate selection and reporting use the same 12-month walk-forward period, so the selected score is not an untouched generalization estimate. Walk-forward results represent 1-step forecasting rather than long-horizon accuracy.
- **Approved Evidence & Scope wording:** The public dataset and runnable workflow are included in the repository. Candidate orders are ranked and reported on the same 12-month walk-forward period, so the selected result is not an untouched final estimate. The univariate models use past prices only.
- **Portfolio status:** Published in release `20260909-02` at portfolio commit `e88ef71566c52562684a0984cbbd963c94348936`; the live card exposes medium-rice MAPE 2.08%, premium-rice MAPE 1.82%, and the same-period selection/reporting limitation.

### Registry audit queue

No project claim is waiting in the audit queue. Release `20260909-05` preserves
the approved website synchronization for the current canonical registry.

## 5. Evidence-first portfolio rules

Every metric must be traceable to a current notebook, test output, README, CI result, report, or other project source of truth.

Keep the following evidence levels distinct:

- **Controlled evaluation:** evaluation under a defined dataset, split, replay, or experimental setup. It is not live operational performance.
- **Local verification:** functionality or tests verified in a local environment. It is not external deployment.
- **External deployment:** the system is running in an external environment and that deployment is verifiable.
- **Live business validation:** the system has been used in a real operational context and its business outcome has been measured.

### Claim and wording controls

- Never convert WAPE, RMSLE, MAE, or another error metric into “accuracy.”
- Display public accuracy, error, and related model-performance scores with 4
  digits after the decimal point. Round from the most precise accepted source
  value when available; otherwise append trailing zeros only as presentation
  formatting and never imply that new measurement precision was created.
  Preserve integer counts and ratios such as `78/78`, and do not apply this
  rule to data volumes, horizons, thresholds, versions, identifiers, DOI
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
