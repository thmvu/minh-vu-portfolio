# Portfolio implementation plan

Goal: build and upload Minh Vũ's personal portfolio in D:/vu/hoctap/minh-vu-portfolio.
Architecture: static semantic HTML with a shared taste-skill layout/motion system, one local stylesheet, and a translation module.
Tech stack: HTML, CSS, JavaScript, Node.js built-ins, GitHub Pages.
Spec: docs/design.md.
Execution: inline; user delegated choices and requested completion.

Global constraints: preserve all existing projects; use verified facts; no secrets in source; responsive layout; Vietnamese and English; real links; reduced motion and keyboard access.

Review focus: blocked browser storage, invalid saved locale, missing translations, mobile navigation, missing assets and broken anchor destinations.

- [x] Write language/content contract tests, observe initial failure, then implement complete bilingual content.
- [x] Build the dark AI/ML/CV portfolio with an original point-cloud hand and six project entries; keep Vietnamese HTML useful without JavaScript.
- [x] Add portable preview/build commands and GitHub Pages workflow; run Node tests and build.
- [x] Run browser layout/consistency/performance checks, inspect desktop/mobile screenshots, fix material issues. See verification.md for intentional checker exceptions.
- [x] Review source independently, resolve shader portability issue, create a new GitHub repository, push the verified commit, and verify remote state.
