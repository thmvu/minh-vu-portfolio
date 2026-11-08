# Minh Vũ / AI & Software Engineering Portfolio

Personal portfolio for Từ Hữu Minh Vũ, focused on machine learning, computer vision, AI agent research, and full-stack software systems.

Live website: [https://thmvu.github.io/minh-vu-portfolio/](https://thmvu.github.io/minh-vu-portfolio/)

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

- `content.js`: Vietnamese/English copy, 7 verified AI/ML/CV case studies (`traffic`, `vsl`, `kt`, `churn`, `apriori`, `vsl-model`, `car-damage`), and 3 full-stack/desktop/mobile software repositories.
- `index.html`: semantic homepage with sticky glass header, 3D MediaPipe hand telemetry HUD, featured flagship split layout, software engineering showcase, and static `<noscript>` fallback.
- `project.html`: deep engineering case-study template with verified KPI metrics, 4-stage pipeline diagrams, repository structure maps, benchmark tables, and prev/next navigation.
- `styles.css`: shared dark visual system, scroll-driven header/progress enhancements, `@starting-style` card entry transitions, and responsive layouts.
- `hand.js`, `hand-data.js`: original WebGL 21-landmark hand point-cloud, joint ring pass, live telemetry HUD, and lifecycle controls.
- `scripts/create-assets.mjs`: regenerates the 7 cohesive dark-mode SVG technical blueprints and 21-landmark hand poster.

## Asset and animation budgets

- No GLB model, environment map, third-party texture, autoplay video, or external runtime library.
- One WebGL context; 4,200 points + 21 MediaPipe joint nodes on desktop, 2,400 points when explicitly enabled on mobile.
- Pixel ratio capped at 1.5 desktop and 1 mobile; approximately 30 drawing updates/second.
- Animation pauses off-screen, on background tabs, and through the pause control.
- Reduced motion and mobile begin with a labeled static SVG poster. Arrow keys rotate the view; Reset camera restores it. Navigation never depends on the canvas.
- Context loss preserves the poster and restoration recreates GPU resources. Page teardown releases buffers, program, observers, and listeners.

## Sources and credits

Content is verified against the user's public GitHub profile and project source: [GitHub @thmvu](https://github.com/thmvu).

- `vietnamese-sign-language-web`: System architecture, backend, and AI by Từ Hữu Minh Vũ; UI/UX, frontend, and content by Phạm Thị Minh Ngọc.
- `Thiet_Ke_Kho_hang_pttkpm123`: Team lead Từ Hữu Minh Vũ with Nguyễn Hữu Tình.
- `2025_2_LTTBDD_N03_Nhom_17`: PM & developer Từ Hữu Minh Vũ with Phạm Thị Minh Ngọc.
- Research scope caveats (`nghiencuuhocsinh`, `Customer-Churn-Analysis`, `Telco-Churn-Apriori`) reflect the exact documented boundaries in each repository.

The original precision-recall figure comes from `Customer-Churn-Analysis/reports/figures/robust_precision_recall_curve.png`. Dark-mode technical blueprints and point-cloud artwork are original vector diagrams created for this portfolio.

GitHub Actions builds and deploys `dist/` through Pages on each push to `main`.
