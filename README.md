# Minh Vũ / AI portfolio

Personal portfolio for Từ Hữu Minh Vũ, focused on machine learning, computer vision, and practical AI applications.

## Run

Requires Node.js 22 or later. The website has no runtime dependencies.

```powershell
npm install
npm run dev
```

Open http://127.0.0.1:5173. On Windows use `npm.cmd` if PowerShell blocks `npm.ps1`.

```powershell
npm test
npm run build
npm run test:browser
```

Browser QA uses an installed Google Chrome in headless mode. The output is `dist/`. It can be served from a subdirectory, including GitHub Pages.

## Edit content

- `content.js`: Vietnamese/English copy and the six verified AI/ML/CV projects.
- `index.html`: semantic homepage and useful static fallback.
- `project.html`: project template; URLs use `?project=traffic`, `vsl`, `churn`, `car-damage`, `vsl-model`, or `apriori`.
- `styles.css`: shared visual system and responsive layouts.
- `hand.js`, `hand-data.js`: original WebGL point-cloud hand and lifecycle controls.
- `scripts/create-assets.mjs`: regenerates original SVG project diagrams and hand poster.

## Asset and animation budgets

- No GLB model, environment map, third-party texture, autoplay video, or external runtime library.
- One WebGL context; 4,200 points on desktop, 2,400 when explicitly enabled on mobile.
- Pixel ratio capped at 1.5 desktop and 1 mobile; approximately 30 drawing updates/second.
- Animation pauses off-screen, on background tabs, and through the pause control.
- Reduced motion and mobile begin with a labeled static SVG poster. Arrow keys rotate the view; Reset camera restores it. Navigation never depends on the canvas.
- Context loss preserves the poster and restoration recreates GPU resources. Page teardown releases buffers, program, observers, and listeners.
- The static poster is generated from the exact same geometry; it is an illustration of hand landmark topology, not recorded inference.

## Sources and credits

Content is verified against the user's public GitHub profile and project source. Project references: [GitHub thmvu](https://github.com/thmvu).

VSL web role: system architecture, backend and AI; UI/UX, frontend and content are credited to Phạm Thị Minh Ngọc. No unverified commercial client, employment, award or benchmark claims.

The precision-recall figure comes from `Customer-Churn-Analysis/reports/figures/robust_precision_recall_curve.png`. Other project graphics and point-cloud artwork are original diagrams created for this portfolio. Icon sources and licenses are recorded in `assets/icons/icons-credits.json` when supplied by the icon resolver. Product names and logos are trademarks of their owners. Instrument Sans is served by Google Fonts.

GitHub Actions builds and deploys `dist/` through Pages on each push to `main`. Select GitHub Actions as the Pages source if configuring the repository manually.
