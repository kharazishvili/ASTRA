# ASTRA Research — AI-Powered Scientific Literature Intelligence

> **ASTRA Research** is a responsive, modern landing page for a fictional AI-powered scientific research assistant. It empowers students, academic investigators, and enterprise scientists to discover scientific literature, distill intricate research methodologies, and uncover latent cross-disciplinary connections.

---

## 🌟 Project Highlights

- **Pure Web Technologies**: Built strictly with semantic **HTML5**, modern **CSS3**, and **Vanilla JavaScript (ES6+)**.
- **Zero Frameworks or Dependencies**: Absolutely no React, Vue, Bootstrap, Tailwind, jQuery, or third-party runtime bundles.
- **100% Static & GitHub Pages Ready**: Ready to be published instantly on any static web host or GitHub Pages.
- **Responsive & Accessible**: Optimized for all device viewports (Desktop, Tablet, Mobile, Small Screen) with full keyboard accessibility, visible `:focus-visible` styling, ARIA live regions, and `prefers-reduced-motion` compliance.
- **Strictly No Lorem Ipsum**: Populated entirely with professional, authentic scientific research concepts (e.g. tau protein kinetics, quantum biological coherence, Cas12a off-target modeling).

---

## 📁 File Structure

```text
myproject/
├── index.html        # Semantic HTML5 markup and page structure
├── style.css         # Modern scientific SaaS design system & responsive styling
├── script.js         # Vanilla JS: mobile navigation, console switcher & form validation
└── README.md         # Comprehensive project documentation & deployment guide
```

---

## 🔬 Landing Page Sections

### 1. Hero Section
- **Branding**: Custom orbital/constellation SVG emblem and version tag (`v2.4`).
- **Headline**: *"Accelerating Scientific Research with Autonomous AI"*.
- **Supporting Description**: Clear articulation of ASTRA’s value for students, faculty, and industry scientists.
- **Call-to-Action Group**: Primary button (*"Start Researching Free"*) and secondary button (*"Explore Features"*).
- **Interactive Research Console**: A live interactive preview where users can toggle between three real-world scientific hypotheses:
  - *Tau Kinetics in AD* (Neurodegeneration & CDK5 phosphorylation)
  - *Cryptochrome Coherence* (Quantum biology in avian magnetoreception)
  - *Cas12a Specificity* (CRISPR off-target profiling)
- **Trust Metrics Bar**: 250M+ indexed papers, 10x faster systematic reviews, 99.4% methodology extraction accuracy, 1,400+ research labs.

### 2. About Section
- **The Core Problem**: Contextualizes the exponential expansion of scientific literature (3M+ papers annually) and the resulting disciplinary silos.
- **Target Audience Value Cards**:
  - *Graduate & PhD Students*: Concept deconstruction, plain-language methodology explanations, and thesis literature onboarding.
  - *Faculty & Principal Investigators*: Automated prior-art validation, rapid grant proposal synthesis, and continuous preprint monitoring.
  - *Industry & Biotech Scientists*: Cross-referencing basic benchwork with clinical trial pipelines and patent filings.
- **Workflow Comparison**: Side-by-side comparison of the traditional fragmented search versus ASTRA’s neural hypothesis intelligence.

### 3. Features Section (Exactly Three Feature Cards)
1. **Literature Discovery**: Autonomous semantic exploration across 250M+ publications and preprints (arXiv, PubMed, bioRxiv) using multi-vector conceptual matching rather than blunt keywords.
2. **AI Research Summaries**: Multi-tiered, zero-hallucination extraction of experimental variables, cohorts, statistical confidence intervals, and author limitations with line-level citations.
3. **Research Connections**: Relational knowledge graphs spanning 4.8 billion edges to bridge disparate fields (e.g., physics models applied to oncology).

### 4. Contact & Inquiry Section
- **Information Column**: Institutional integration capabilities (SSO/SAML), strict researcher data sovereignty guarantees, and response timelines.
- **Interactive Contact Form**:
  - Full Name field
  - Academic / Institutional Email field
  - Role dropdown selector
  - Research Objectives & Message textarea
  - Accessible Submit button with interactive loading spinner state
- **Client-Side Validation & Feedback**:
  - Real-time inline field validation on blur and input
  - Email format validation using RFC 5322 regex
  - Accessible error announcements and focus management (`aria-invalid`, `aria-describedby`, `aria-live="polite"`)
  - Simulated asynchronous transmission and confirmation docket display (`ASTRA-XXXXXX`)

### 5. Footer
- Brand recap and mission statement
- Deep navigation links to all sections
- Compliance, academic ethics, and data privacy indicators
- Accessible "Back to Top" smooth scroll link and dynamic copyright year

---

## 🎨 Design System

| Attribute | Specification |
| :--- | :--- |
| **Deep Navy Palette** | `--color-bg-deep: #070D1E`, `--color-bg-surface: #0B132B`, `--color-bg-card: rgba(17, 28, 61, 0.75)` |
| **Cool Neutrals** | Text Primary: `#F8FAFC`, Text Secondary: `#94A3B8`, Text Muted: `#64748B` |
| **Scientific Accents** | Electric Cyan: `#00D2FF`, Sky Hover: `#38BDF8`, Soft Indigo: `#818CF8` |
| **Typography** | Sans-serif system font stack for maximum readability; monospace stack for scientific parameters |
| **Spacing & Scale** | Fluid sizing via CSS `clamp()` for responsive headings, cards, and section paddings |
| **Card Styling** | Rounded corners (`16px` to `24px`), subtle border gradients, and elevation box-shadows |
| **Motion & Polish** | Smooth hover micro-interactions, pulse status indicators, and full `@media (prefers-reduced-motion)` support |

---

## 🚀 How to Run Locally

Because this project is built entirely with standard static web technologies, no build step or node installation is needed:

### Option A: Open directly in any modern web browser
Simply double-click `index.html` or drag it into Chrome, Edge, Firefox, or Safari.

### Option B: Local HTTP Server (Recommended)
Using Python (pre-installed on most systems):
```bash
# In the project directory:
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

Using Node.js `npx`:
```bash
npx serve .
```

---

## 🌐 GitHub Pages Deployment Guide

Deploying this site to GitHub Pages takes less than two minutes:

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ASTRA Research landing page"
   ```

2. **Push to GitHub**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Select the branch `main` and folder `/ (root)`.
   - Click **Save**.
   - Your site will be live at `https://<your-username>.github.io/<your-repo-name>/` in ~60 seconds!

---

## ♿ Accessibility & Standards Compliance

- **Semantic HTML5 Elements**: Proper usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<form>`, `<label>`, and `<footer>`.
- **Keyboard Navigation**: All interactive elements (links, buttons, inputs, tabs) are reachable via `Tab` / `Shift+Tab` and triggerable via `Enter` / `Space`.
- **Screen Reader Support**: Skip-link provided at the top of the DOM, form controls paired with explicit `<label>` tags and `aria-describedby` error containers.
- **Horizontal Overflow Prevention**: Strict CSS `box-sizing: border-box`, `max-width: 100%`, and layout boundaries prevent unwanted horizontal scrolling on mobile devices.
- **Reduced Motion**: Respects OS accessibility settings by disabling smooth scrolling and animations when `prefers-reduced-motion: reduce` is enabled.

---

## 📄 License & Attribution

Created for **ASTRA Research Technologies**. Released under the MIT License for educational and portfolio demonstration.
