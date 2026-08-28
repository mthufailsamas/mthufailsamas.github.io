# M. Thufail Alwannabil Samas - Data & AI Portfolio

[View the live portfolio](https://mthufailsamas.github.io/)

This repository contains my personal Data & AI portfolio. It connects selected
work across data analysis, statistical modeling, machine learning, practical
data engineering, and applied AI automation with my professional experience,
publication, certification, and technical background.

## Portfolio Overview

The featured case studies cover:

- DWDM Optical Sensor Monitoring with Change-Point and Degradation Detection,
  developed as professional project-stage work at PT Aplikanusa Lintasarta;
- a Retail Sales Forecasting &amp; Planning System with chronological Ridge and
  XGBoost evaluation, a versioned model artifact, reusable batch inference,
  local FastAPI delivery, Docker packaging, and contract tests;
- AI Service Request Automation with FastAPI, n8n, PostgreSQL/pgvector, local
  Ollama models, human review, downstream delivery, and scheduled recovery;
- next-day Rainfall Forecasting with 2-stage and direct Tweedie XGBoost,
  Grid Search, and annual TimeSeriesSplit evaluation;
- Thyroid Cancer Recurrence Classification with Python, XGBoost,
  scikit-learn, Information Gain, and Grid Search;
- Rainfall Forecasting with TensorFlow/Keras BiLSTM and Grid Search; and
- Rice Price Forecasting with statsmodels ARIMA and Walk-Forward Validation.

Each case study focuses on the problem, my contribution, system or analytical
workflow, validation evidence, practical output, and limitations. Public
project repositories are linked where available. Confidential work is
presented only through approved summaries and non-sensitive visual material.

## Technical Implementation

The website uses semantic HTML, responsive CSS, and vanilla JavaScript. It
includes:

- responsive desktop and mobile layouts;
- a permanent dark interface with a consistent color palette;
- project-context filters for Professional, Independent, and Academic work,
  with visible cards renumbered sequentially from `01`;
- an automatic release-freshness check that replaces a cached page with the
  current published revision;
- accessible navigation and structured page sections;
- native `1920x1080` Full HD project visuals plus optimized platform-specific
  profile, hero, and social-preview images; and
- downloadable English resume.

The retail-system visual uses icons from the official
[Bootstrap Icons](https://icons.getbootstrap.com/) library under its MIT
license. The icons are bundled into the local project image rather than loaded
from a third-party service at runtime.

The site has no frontend framework, build step, package manager, backend,
analytics, or tracking.

## Repository Contents

```text
Portfolio Website/
|-- .gitignore
|-- .nojekyll
|-- index.html
|-- styles.css
|-- script.js
|-- site-version.json
|-- robots.txt
|-- sitemap.xml
|-- assets/
|   |-- favicon.svg
|   |-- profile-photo.jpg
|   |-- social-preview.jpg
|   |-- hero/
|   |   |-- data-ai-system-desktop.webp
|   |   `-- data-ai-system-mobile-v2.webp
|   `-- projects/
|       |-- ai-service-request-automation.png
|       |-- arima-rice.png
|       |-- bilstm-rainfall.png
|       |-- dwdm-monitoring.png
|       |-- retail-sales-forecasting.png
|       |-- thyroid-classification.png
|       `-- xgboost-rainfall.png
|-- documents/
|   `-- m-thufail-alwannabil-samas-cv.pdf
|-- LICENSE
|-- PROJECT.md
`-- README.md
```

## Local Preview

The portfolio is a static website and requires no installation. Open
`index.html` directly in a browser or serve the folder locally:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The production website is published through GitHub Pages from the `main`
branch of this repository:

<https://mthufailsamas.github.io/>

## Data and Confidentiality

The rainfall case studies were developed from authorized, non-public weather
data. The original data are not distributed in this website repository. The
DWDM case study also excludes internal source code, raw operational data,
credentials, infrastructure details, and confidential screenshots.

Public datasets and repositories are identified within the relevant case
studies.

## Copyright

Copyright (c) 2026 M. Thufail Alwannabil Samas. This is a personal portfolio,
not a reusable website template. The source and portfolio content may be
reviewed for evaluation purposes but may not be republished, redistributed, or
adapted into another portfolio without prior written permission. See
[LICENSE](LICENSE) for the full terms.
