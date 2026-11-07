# Portfolio implementation plan

Goal: build and upload Minh Vũ's personal portfolio in D:/vu/hoctap/minh-vu-portfolio.
Architecture: static semantic HTML with a shared taste-skill layout/motion system, one local stylesheet, and a translation module.
Tech stack: HTML, CSS, JavaScript, Node.js built-ins, GitHub Pages.
Spec: docs/design.md.
Execution: inline; user delegated choices and requested completion.

Global constraints: preserve all existing projects; use verified facts; no secrets in source; responsive layout; Vietnamese and English; real links; reduced motion and keyboard access.

Review focus: blocked browser storage, invalid saved locale, missing translations, mobile navigation, missing assets and broken anchor destinations.

- [ ] Write language/content contract tests, observe initial failure, then implement complete bilingual content.
- [ ] Build the portfolio and shared visual system; keep Vietnamese HTML useful without JavaScript.
- [ ] Add portable preview/build commands and GitHub Pages workflow; run Node tests and build.
- [ ] Run browser layout/consistency/performance checks, inspect desktop/mobile screenshots, fix material issues.
- [ ] Review source, create a new GitHub repository, push the verified commit, and verify remote state.
