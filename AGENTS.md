# Portfolio Website Instructions

These instructions extend the user's global engineering standards for this
repository. Apply the global standard first, then use this file for durable
Portfolio Website safeguards and `PROJECT.md` for current positioning,
canonical claims, evidence, resume synchronization, release status, and the
next checkpoint.

This repository owns the public portfolio at `https://mthufailsamas.github.io/`
and its downloadable resume. Treat both as one professional communication
system with two different levels of detail, not as independent documents.

Before material work:

1. read `PROJECT.md` completely;
2. inspect the current Git worktree, branch, release marker, and public-asset
   references;
3. identify every visible or machine-readable surface affected by the change;
4. inspect each affected project's current source of truth and reproducible
   evidence before using a technical claim; and
5. inspect the complete current resume PDF when identity, experience,
   education, certification, skills, projects, metrics, publication, links, or
   positioning may be affected.

## Priority Order

When goals conflict, prioritize:

1. Correct public content and task completion
2. Security, confidentiality, and evidence integrity
3. Resume-website semantic consistency
4. Preservation of approved behavior and compatibility
5. HR readability and strong professional positioning
6. Navigation, accessibility, reading comfort, and responsive behavior
7. Performance on low-end devices and slow networks
8. Maintainability, scope discipline, and cleanup
9. Speed

## Recommendation and Decision Discipline

Every recommendation must be the best current recommendation after weighing
correctness, the user's stated objective, ATS compatibility, HR readability,
professional positioning, resume-website consistency, and practical tradeoffs.
Do not improvise cosmetic changes merely to produce feedback.

For every review decision:

1. classify it as `Required fix`, `Recommended improvement`, or `Optional
   alternative`;
2. give exactly 1 primary recommendation when 1 option is materially better;
3. state that the current wording should remain when alternatives are merely
   stylistic and offer no material improvement;
4. never present a personal style preference as a correctness, ATS, or
   consistency requirement;
5. when the user asks why, explain and defend the existing recommendation
   rather than reversing it reflexively;
6. change an accepted recommendation only when new evidence, a newly stated
   user preference, or a previously missed constraint materially changes the
   decision, and explicitly name that new information; and
7. treat each user-approved decision as locked until the user asks to reopen it
   or material new evidence creates a real conflict.

The user is a discussion and debate partner, not a source of suggestions that
must be accepted automatically. A question, objection, concern, example, or
proposed alternative is input for evaluation; it is not a new requirement or
approved decision unless the user explicitly states that it is mandatory or
directly chooses it. Evaluate the idea against the active criteria, challenge
it when it weakens the result, and say clearly when the existing recommendation
remains better. Do not call a user question a `new constraint` merely to justify
changing the recommendation.

Agreement must come from independent judgment. Do not mirror the user's latest
wording, manufacture agreement, or reverse a decision to reduce conversational
friction. When a recommendation genuinely changes, state the previous decision,
the material new evidence or explicit requirement, and why that information
changes the ranking of the options. If none exists, keep and defend the current
decision.

For sequential resume review, inspect and decide 1 section at a time from top
to bottom. Do not pre-empt later sections. End each section with a clear
`ACC as-is` or 1 copy-ready recommended replacement, not multiple competing
drafts.

## Source of Truth and Scope

- `PROJECT.md` is the Portfolio Website source of truth for positioning,
  public-content contracts, the Project Registry, resume synchronization,
  evidence status, limitations, release status, and the next checkpoint.
- The affected project's own `AGENTS.md`, `PROJECT.md`, README, notebooks,
  tests, evidence outputs, CI results, and Git state are the sources of truth
  for its implementation and results.
- The current resume PDF is a public artifact to audit, not an authority that
  can override project evidence.
- The current website is a public surface to audit, not project evidence.
- Except for an explicit user attestation recorded as an authorized
  professional or academic fact in `PROJECT.md`, a conversation, another
  project, an old website card, a visual, a prior resume, or an unreviewed
  notebook output must never be used as the sole source for a material claim.
- Keep this repository scoped to the portfolio website. Do not import another
  project's architecture, metrics, maturity status, or implementation claims.

## Resume and Website Synchronization Contract

The resume and website may have different depth, but they must never disagree.
Omission for space is allowed; contradiction, status inflation, or mixed
evidence is not.

Treat these as shared canonical facts whenever they appear on either surface:

- name, location, email, phone, portfolio, LinkedIn, and GitHub links;
- professional positioning and target role families;
- employer, organization, role title, location, start date, end date, and
  employment context;
- education institution, degree, dates, GPA, and academic distinction;
- certification name, issuer, validity period, and status;
- publication title, author order, venue, volume, issue, pages, date, and DOI;
- project title, context, contribution, stack, data boundary, metrics,
  evaluation boundary, delivery status, limitations, and repository URL; and
- skills or capabilities that imply implemented experience.

For every affected shared fact:

1. establish the canonical value from current evidence;
2. record its evidence and status in `PROJECT.md`;
3. compare the exact meaning on the website, resume, metadata, README, and
   relevant visual;
4. keep rounding traceable to one canonical value and preserve the same unit,
   denominator, split, and evidence level;
5. distinguish controlled evaluation, local verification, external deployment,
   and live business validation; and
6. mark the synchronization state as `Synced`, `Website broader`, `Resume
   broader`, `Pending resume update`, `Revision required`, or `Blocked`.

`Website broader` and `Resume broader` are acceptable only when the broader
surface adds verified detail without changing the meaning of the shared fact.
Do not call the portfolio synchronized while an overlapping fact is `Pending
resume update`, `Revision required`, or `Blocked`.

When a resume wording change is required, provide the exact replacement text
for manual editing unless the user separately and explicitly authorizes editing
or replacing the resume artifact. After a new PDF is supplied or authorized,
extract its complete text, render every page, inspect visual quality, update all
resume links to one versioned file, and rerun the synchronization audit.

## Evidence and Claim Integrity

- Every quantitative claim must trace to a current notebook output, evidence
  file, test result, report, CI run, authorized professional record, or another
  explicit source accepted in `PROJECT.md`.
- The user has explicitly confirmed that all existing project results and
  metrics in the current resume and portfolio are authentic and real. Treat
  that confirmation as an authorized professional/academic record. Do not
  delete, downgrade, relabel, or add defensive caveats to those results solely
  because an old run artifact or notebook output is absent from the current
  repository. Focus revision on accurate wording, units, context, consistency,
  ATS quality, STAR structure, and HR readability. Reopen authenticity only if
  the user does so or concrete contradictory evidence is discovered, and show
  that contradiction before recommending a change.
- Preserve the exact evaluation context beside results. A metric without its
  dataset, split, replay, support, or validation level is incomplete.
- Never convert WAPE, RMSLE, MAE, RMSE, MAPE, or another error metric into
  accuracy.
- Do not present a selected or reused holdout as untouched evidence.
- Do not describe local API or Docker verification as an external deployment.
- Do not claim production readiness, business impact, cost savings, time
  savings, user adoption, scale, uptime, or revenue effect without direct
  evidence.
- Do not hide weak categories, failed cases, missing targets, old data, private
  data boundaries, or material validation limitations.
- If a claim is plausible but not currently supported, write `Unverified` or
  remove it from the public surface. Consistency between two unsupported claims
  does not make either claim correct.
- Never transfer metrics or maturity from another project.

## HR-First Confident Positioning

The public voice is concise, professional, descriptive, outcome-oriented, and
easy for HR or a non-technical reader to scan.

The user's "fake it till you make it" direction means:

- lead confidently with verified work, responsibility, outputs, and results;
- translate technical evidence into clear professional value;
- present limitations with control and proportion rather than apologetic copy;
- prefer strong specific verbs and concrete nouns; and
- position Thufail as a Data & AI Professional with delivered work and
  professional experience.

It never authorizes invented experience, technologies, metrics, deployment,
impact, seniority, ownership, or validation. Confidence comes from selecting
and framing the strongest verified evidence, not from exaggeration.

Avoid:

- fresh-graduate framing;
- formulaic AI-sounding copy;
- first-person owner narration such as `I`, `me`, or `my` in descriptive prose;
- generic claims such as `passionate`, `innovative`, `results-driven`, or
  `expert` without supporting evidence;
- long tool lists before the problem or outcome; and
- defensive lists of everything a project does not do.

Use the canonical `My Contribution` label only as a section label. The text
under it remains direct professional description rather than conversational
owner narration.

## Information Architecture and Navigation

- Keep one coherent narrative page unless a real user task requires another
  route. Do not split the portfolio into multiple pages merely to appear larger.
- Preserve a clear sequence: Hero, About, Selected Work, Publication,
  Experience, Skills, Education and Certification, Contact.
- Keep the primary navigation visible or quickly accessible, with descriptive
  labels, working anchor targets, correct sticky-header offsets, and a clear
  way back to the top.
- Mobile navigation must open and close predictably, expose its state through
  ARIA, close on link selection and Escape, and never trap the user behind an
  overlay.
- Project filters must preserve canonical order, renumber visible cards from
  `01`, expose pressed state, and announce the visible count.
- Links, buttons, filters, summaries, and menu controls must have visible
  keyboard focus and comfortable touch targets.
- Core content must remain readable when JavaScript fails. JavaScript may
  enhance navigation, filtering, and freshness; it must not be required to
  reveal identity, experience, project copy, or contact information.
- Respect reduced-motion preferences. Avoid decorative animation, scroll
  hijacking, autoplay, parallax, or interaction that depends on hover.
- Keep headings, line length, paragraph density, spacing, contrast, and project
  hierarchy comfortable on desktop, tablet, and narrow mobile widths.

## Static Stack and Performance Contract

- Preserve semantic HTML, CSS, and small vanilla JavaScript as the default
  implementation. Do not add React, a framework, package manager, build step,
  analytics, a backend, web fonts, icon CDN, or runtime third-party dependency
  without a demonstrated requirement and explicit approval.
- Prefer platform features and existing code before adding any dependency.
- Keep public content available as static files on GitHub Pages.
- Use system fonts. Do not block rendering on font downloads.
- Bundle every required asset locally except intentional external destination
  links such as GitHub, LinkedIn, repositories, and DOI pages.
- Set explicit image dimensions to prevent layout shift.
- Preload only the responsive hero asset needed for the current viewport.
- Load below-the-fold images lazily and decode them asynchronously.
- Prefer WebP or another broadly supported efficient format for photographic
  and mixed-content raster assets. Preserve enough quality for small labels and
  charts to remain readable at card size and full size.
- Do not ship a 1920x1080 asset merely through HTML dimensions without checking
  its real dimensions, encoded size, and card-size readability.
- Keep release checks fail-open so a network error never blanks or blocks the
  current page.

Default public-source budgets, measured before compression by the server:

- `index.html`: at most 80 KB;
- `styles.css`: at most 50 KB;
- `script.js`: at most 20 KB;
- profile image: at most 80 KB;
- each ordinary project visual: target at most 250 KB and hard limit 400 KB;
- above-the-fold responsive image payload: target at most 350 KB; and
- no public asset larger than 1 MB without an explicit documented exception.

Treat these as guardrails, not permission to reduce legibility. If a factual
visual cannot meet the target without visible damage, record the exception in
`PROJECT.md` and optimize the rest of the page.

## Accessibility and Compatibility

- Preserve semantic landmarks, one primary `h1`, logical heading order, useful
  alt text, decorative empty alt text, and the skip link.
- Do not encode meaning by color alone.
- Verify text and controls at 200% zoom and at narrow widths without horizontal
  scrolling.
- Support current evergreen browsers and graceful use on older or low-powered
  devices. Feature enhancements must not break the basic document when an API
  is unavailable.
- Avoid expensive persistent visual effects. Use blur, large shadows, and
  animation only when their visual value justifies their device cost.

## Asset and Repository Cleanup Contract

Every accepted revision is a replacement, not an invitation to keep parallel
copies.

- Before deleting, trace the affected asset or file through HTML, CSS,
  JavaScript, metadata, README, sitemap, robots policy, license, deployment
  configuration, and `PROJECT.md`.
- After replacement, remove superseded assets, documents, code, styles,
  variables, selectors, scripts, temporary outputs, and unused dependencies in
  the same revision.
- Do not keep files named or functioning as `old`, `backup`, `copy`, `final2`,
  `previous`, dated duplicate, or prior-version fallback. Git history is the
  recovery record.
- Do not retain an unused PNG after switching the live reference to WebP.
- Do not retain an old resume after a replacement PDF is accepted and every
  link points to the new file.
- Update the README repository tree whenever the active file set changes.
- Run an orphan-reference scan after cleanup and confirm the Git diff contains
  no temporary QA outputs.
- Material deletion is authorized when the user has approved the replacement
  or explicitly requests immediate cleanup. Resolve exact targets and confirm
  no live or documentary reference remains before deletion.

## Release and Publishing Discipline

- Documentation-only changes that cannot affect the rendered site do not
  update the public release marker.
- Every user-visible revision updates `site-version.json`, the inline
  `embeddedRelease`, changed asset query versions or filenames, relevant
  metadata, and sitemap `lastmod` together.
- A public-content revision cannot publish while an affected shared
  resume-website fact is unresolved, unless the revision removes or corrects an
  unsupported public claim and `PROJECT.md` records the remaining resume action.
- After the evidence, synchronization, static, desktop, and mobile gates pass,
  commit and push `main` directly in the same task. Do not add a second
  approval checkpoint unless the user requested draft-only or local-only work.
- Wait for GitHub Pages, verify the live release marker and changed assets, and
  inspect the live desktop and narrow-mobile result before marking it
  published.
- Do not create a new tag or release for ordinary corrections, content cleanup,
  performance optimization, or visual polish.

## Verification Workflow

Use progressive verification and do not rerun an unchanged expensive check.

1. Inspect the Git diff and affected source references.
2. Validate HTML structure, internal links, local assets, release markers, and
   machine-readable metadata.
3. Check changed file and asset sizes against the performance contract.
4. Verify keyboard focus, anchor navigation, menu behavior, filters, details,
   resume links, and fail-open JavaScript behavior.
5. Render or open the site at desktop and narrow mobile widths; check overflow,
   readability, image cropping, touch targets, and console warnings/errors.
6. When shared facts changed, extract and render the complete resume PDF and
   complete the synchronization matrix.
7. Run the focused repository-cleanup and orphan-reference scan.
8. For a user-visible revision, publish through GitHub Pages and verify the
   actual live site and changed assets.

## Security and Privacy

- Never publish private datasets, operational telemetry, internal screenshots,
  credentials, tokens, infrastructure details, private paths, proprietary
  source code, or sensitive identifiers.
- Keep external links on intentional user action. Do not add analytics,
  trackers, fingerprinting, embedded third-party widgets, or hidden network
  calls.
- Use `noopener noreferrer` for external new-tab links unless a documented
  download behavior requires otherwise.
- Do not expose personal data beyond the contact information the user has
  explicitly approved for the public portfolio and resume.

## Self-Review and Definition of Done

Before finishing, confirm:

- every changed claim is evidence-backed and uses the correct validation level;
- resume and website synchronization is correct or the remaining manual resume
  action is explicitly recorded and reported;
- the copy is HR-readable, confident, natural, and free from invented claims;
- navigation, keyboard, touch, reading comfort, responsive layout, and reduced
  motion remain sound;
- the site stays static, dependency-free, and within performance budgets;
- changed assets are legible at actual card size;
- release markers and metadata are synchronized when required;
- superseded and temporary files are removed;
- the final diff contains no accidental or unrelated edits; and
- public work is called complete only after the live GitHub Pages revision is
  verified.

If context is lost, recover from this file, `PROJECT.md`, the affected project
source of truth, the current resume artifact, the Git diff, and the live release.
Never recover public facts from another project or conversation memory alone.
