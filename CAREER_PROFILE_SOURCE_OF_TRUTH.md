# Career Profile Source of Truth

Last updated: 2026-09-13

## Purpose

This is the durable decision register for Thufail's resume, portfolio website,
LinkedIn, and future profiles on job-search or freelance platforms. It records
approved positioning and presentation choices. Technical claims and metrics
must still be verified against the relevant project repository; this file does
not turn an unsupported claim into evidence.

## Synchronization rule

All surfaces represent one professional record. They may use different depth
and formatting, but overlapping facts must not disagree. Establish the correct
fact first, then adapt it to each platform. Never weaken correctness merely to
make two surfaces match.

Use these states:

- `Synced`: same evidence-backed meaning;
- `Broader`: adds verified detail without changing the shared meaning;
- `Pending update`: approved decision is not yet applied to that surface;
- `Revision required`: current content materially conflicts with the canonical
  record;
- `Not used`: intentionally omitted because the platform does not need it; and
- `Unverified`: current surface or evidence has not been inspected.

## Locked global preferences

1. Positioning covers the Data and AI job family, especially Data Scientist,
   Data Analyst, Data Engineer, AI Engineer, and AI Automation roles, while
   allowing individual applications to emphasize the most relevant subset.
2. Public copy must be truthful, HR-friendly, concise, natural, and
   ATS-searchable where ATS applies. Lead confidently with real responsibility,
   systems, results, and professional value.
3. `Fake it till you make it` means presenting the strongest verified evidence
   with confidence. It never permits invented experience, metrics, skills,
   deployment, business impact, seniority, or ownership.
4. Resume, website, LinkedIn, and job-platform profiles may differ in length,
   but shared identity, dates, roles, education, certification, publication,
   skills, projects, metrics, links, and evidence boundaries must remain
   semantically consistent.
5. Every explicit new requirement or approved recommendation must be recorded
   here in the same task. Questions and examples remain discussion input until
   explicitly approved or made mandatory.
6. When an accepted revision replaces content or an asset, remove the unused
   prior version and temporary files after reference checks. Do not retain
   backup, old, copy, or parallel-final files.
7. Every surface must be HR-friendly: lead with the reader's practical context,
   the candidate's contribution, and a concrete result or value before dense
   technical detail. Preserve supported ATS keywords without keyword stuffing.
8. English career copy uses professional American English consistently,
   including grammar, spelling, punctuation, capitalization, tense, articles,
   prepositions, terminology, and parallel structure. Prefer the accepted
   American forms `modeling`, `labeled`, and `behavior` over mixed dialects.
9. Copy must read as deliberately human-written. Use specific evidence,
   natural sentence rhythm, and platform-appropriate depth; reject generic
   self-praise, interchangeable buzzwords, repetitive templates, inflated
   transitions, and polished filler that could describe any candidate.
10. Apply separate acceptance passes for factual consistency, HR readability,
    natural human voice, and standard English. A surface does not pass merely
    because its grammar is correct or its keywords are present.

## Resume decisions

- **Status:** Accepted and canonical as of the final 2026-09-09 audit recorded
  in `PROJECT.md`.
- **Experience:** 3-5 compact STAR bullets per entry. Within each experience,
  bullets must have the same rendered line count and visually balanced length
  under the actual resume geometry; do not pad them with filler.
- **Projects:** one compact paragraph per project using
  Problem-Solution-Result, including a genuine result or metric where relevant,
  rather than Experience-style bullets.
- **Style:** ATS-compatible, HR-readable, confident, evidence-backed, and
  free from keyword stuffing or invented impact.
- **Artifact editing:** provide copy-ready text by default. Do not edit, export,
  or replace the resume file unless the user explicitly authorizes file work.
- **Detailed accepted content:** governed by `PROJECT.md` and the active resume
  PDF linked there.

## Portfolio website decisions

- Use semantic HTML, CSS, and small vanilla JavaScript; avoid unnecessary
  frameworks, runtime dependencies, and web fonts.
- Keep the website lightweight on low-end devices and slow networks without
  sacrificing visual sharpness or chart readability.
- Navigation and reading must remain comfortable across desktop and mobile;
  core content must remain available if JavaScript fails.
- Public project claims must come from each project's current evidence and the
  Portfolio Website Project Registry.
- Detailed implementation, performance, cleanup, synchronization, and release
  gates are governed by `AGENTS.md` and `PROJECT.md`.

## LinkedIn decisions

### Positioning and headline

- **Role label:** `Data & AI Professional`.
- **Approved headline:** `Data & AI Professional | Building end-to-end pipelines for insights, predictive systems & practical AI workflows`
- **Rationale:** concise job-family positioning plus professional value; it
  represents data pipelines, analytics, predictive modeling, AI engineering,
  and automation without listing every target job title.
- **Layout intent:** short enough to render at about two lines on the inspected
  desktop profile width. LinkedIn controls wrapping, so an exact line count is
  viewport-dependent.
- **Application state:** approved wording; whether it has been entered on the
  live LinkedIn profile is currently unverified.

### Cover image

- **Active local asset:** `../LinkedIn/linkedin-cover-data-ai.png`.
- **Canvas:** 1920 x 480 PNG, preserving the approximately 4:1 LinkedIn-cover
  ratio rather than forcing 1920 x 1080 and triggering destructive cropping.
- **Reference direction:** use the supplied Salsa Hirawan cover as a layout and
  proportional reference, not as an identity or artwork copy.
- **Composition:** left-weighted geometric navy/teal background; calm but still
  textured right-side copy area; no abrupt patterned-to-plain split.
- **Text hierarchy:** bold sans-serif name, smaller widely tracked role, then a
  compact light value strip. Name, role, and value strip share one left-edge
  alignment and use deliberate vertical spacing.
- **Role treatment:** plain text without a background panel.
- **Value strip:** fit the light background to the actual sentence plus balanced
  padding; do not leave a long empty white tail.
- **Excluded content:** do not place the portfolio URL on the cover because it
  belongs in LinkedIn Featured.
- **Quality:** generate or source sufficient native detail; do not upscale a
  visibly soft image and call it high resolution.
- **Upload state:** active local asset prepared; live LinkedIn upload is
  currently unverified.

### About section

- **Format:** one concise opening paragraph combining role, professional value,
  and credibility; the transition `Some examples of my work include:`; exactly
  3 evidence-backed examples with relevant scale or metrics; and one closing
  paragraph naming the opportunity families sought plus an invitation to
  connect on LinkedIn.
- **Reference use:** the supplied LinkedIn Summary Template and Salsa Hirawan
  example govern structure only. Do not copy another person's wording,
  experience, employers, or metrics.
- **Years-of-experience treatment:** open with `3+ years of combined
  experience`. The total is supported by approximately 38 role-months across
  Programming Teaching Assistant, Data Science Intern, Coding and AI Teacher,
  and Junior Programmer experience. Because the Teaching Assistant and BMKG
  periods overlap, retain `combined` and do not describe this as 3+ years of
  continuous full-time data-industry experience.
- **Example selection:** use DWDM monitoring for professional Data Engineering
  and Data Analysis evidence, Retail Sales Forecasting for Data Science and
  AI/ML Engineering evidence, and AI Service Request Automation for AI
  Automation evidence.
- **Voice:** natural first person is permitted in the LinkedIn opening and
  closing. Examples remain concise, outcome-oriented, and technically credible.
- **Metric control:** retain the evaluation boundary beside controlled or local
  results and use the accepted cross-channel metric formatting.
- **Copy state:** format is locked; exact wording remains pending user review.

## Future job-platform profiles

Before creating or revising a profile on another job site:

1. inspect that platform's current field limits and presentation constraints;
2. map each overlapping field to the canonical resume, Portfolio Website
   Project Registry, and the decisions above;
3. tailor emphasis to the target role without changing shared facts;
4. record approved platform-specific wording and its application state here;
5. perform a cross-channel consistency audit before calling the profile done.

## Current synchronization snapshot

| Surface | State | Note |
| --- | --- | --- |
| Resume | Synced | Final content was accepted on 2026-09-09; project evidence remains authoritative for technical claims. |
| Portfolio website | Synced | Current public state is recorded in `PROJECT.md`; re-verify before any new live claim. |
| LinkedIn headline | Pending update | Approved two-line-oriented wording exists; live application is unverified. |
| LinkedIn cover | Pending update | Final local asset exists; live upload is unverified. |
| LinkedIn About | Pending update | Format is locked; exact wording is awaiting user approval. |
| Other job-platform profiles | Unverified | Add each platform only when it enters scope. |

## Decision log

| Date | Scope | Decision | Status |
| --- | --- | --- | --- |
| 2026-09-12 | All career surfaces | Use this register to capture every explicit requirement and approved recommendation, then audit shared facts across channels. | Locked |
| 2026-09-12 | LinkedIn headline | Use the approved `Data & AI Professional` headline with end-to-end pipelines, insights, predictive systems, and practical AI workflows. | Locked; live application unverified |
| 2026-09-12 | LinkedIn cover | Preserve the reference-inspired hierarchy, aligned text grid, geometric navy/teal background, fitted value strip, no role panel, and no portfolio URL. | Locked; local asset prepared |
| 2026-09-12 | LinkedIn About | Follow the reference structure with `3+ years of combined experience`, an intro and value proposition, exactly 3 quantified evidence-backed examples, and an opportunity-focused close. Retain `combined` because 2 resume roles overlap. | Format locked; exact wording pending review |
| 2026-09-13 | All career surfaces | Require HR-first communication, natural human-written copy, evidence-bounded confident positioning, and consistent professional American English with separate quality passes. | Locked |
