# Minh Vũ portfolio — revised AI/CV direction

## User-directed revision, 2026-11-08
The user rejected the original quiet/light direction and Music Box selection, and requested effects and an AI/ML/computer-vision focus, using a 3D artist portfolio prompt as a visual reference. This revision supersedes the initial screen plan and palette below. Do not present Vũ as a 3D artist.

Current direction: dark navy #080f1b, slate #101b2b, foreground #edf3fb, accent #a6d2ff and muted #9aabc2; Instrument Sans. Full-screen point-cloud hand hero, responsive 6-project filterable gallery, project detail template, about and contact. Public repositories: Giamsatgiaothong2, vietnamese-sign-language-web, Customer-Churn-Analysis, car_damage, Vietnamese-Sign-Language-byVu, Telco-Churn-Apriori. No management projects in the main portfolio.

The WebGL point-cloud hand is original code-native artwork inspired by hand landmarks, not a functioning inference demo. Its SVG poster uses the same geometry. No third-party models, invented showreel, commercial credits or performance claims. Architecture project visuals are diagrams drawn from documented pipelines; the churn precision-recall chart is the user's actual artifact.

Follow the requested gallery interaction over the taste kit's fixed one/two-screen section rule. Filtering changes gallery height; use natural document flow and preserve equal outer edges. User-requested WebGL overrides the initial service/no-effects interpretation. Mobile and reduced-motion default to the poster and offer explicit activation. Unavailable WebGL or context loss leaves all content and navigation accessible.

Hardware, rate sheets, social accounts, commercial clients and availability are omitted because they were not established. No video/showreel control is shown without a verified relevant owned video. University is verified in thmvu/car_damage/README.md; do not expose the student ID.

Original exploration retained below for decision history; it is not the current implementation specification.

Kind: personal developer portfolio, page type service, site-kind other.
Deal: teal-on-paper, Instrument Sans, split hero, nav-centre, close-word, footer-columns, surface-pairs, solid buttons, wordmark. No shader, scene, loop, or stock photography.

Build authorization: user chose “Bạn tự chọn, làm luôn” on 2026-11-08, delegating design and implementation through GitHub upload.

## Purpose
Introduce Từ Hữu Minh Vũ through practical AI and software projects. Visitors should understand his interests, inspect selected repositories, and contact him. Vietnamese by default, with an English switch.

## Visual system
Use the dealt palette unchanged: paper #f7f9f8, surface #ebf0ee, ink/action #06525c, muted #2f737d. Instrument Sans supports Vietnamese. One split hero with real VSL project art, large quiet typography, shared edges, restrained pointer feedback. No scroll effects. Apply Apple HIG foundations to web: contrast, 44px controls, keyboard focus, text resizing, and reduced motion; native navigation conventions do not apply.

## Screens
- top: identity and software focus, VSL illustration from the user's project; 1 screen.
- work: VSL, Customer Churn Analysis, Music Box; 1 screen desktop, 2 tablet/mobile. Real project visuals with text inside each project card.
- about: verified biography, skills, and current exploration; real product icons; 1 screen.
- contact: email and GitHub, large name, compact footer; 1 screen.

## Content provenance
GitHub profile thmvu and thmvu/thmvu/README.md; local project READMEs and assets in D:/vu/hoctap. VSL credits must describe Vũ's backend, architecture and AI role, not claim the teammate's UI work. No unsupported awards, employers, university, graduation year, project outcomes, model scores or live demo URLs. Other public projects can be linked from the about section.

## Implementation choices
Buildless semantic HTML/CSS and JavaScript ES modules with a small Node build/preview script. This keeps GitHub Pages straightforward and eliminates framework dependencies. React was considered but adds unnecessary runtime/build tooling for a presentation portfolio; a hosted CMS is unnecessary for these editable static files.
Persist language if browser storage permits; fall back safely if it does not. Copy email reports success or offers the email link on failure. All source files and project assets stay inside the new project. Publish a new public repository, never overwrite an existing repository.

## Verification
Node tests cover translation completeness, locale selection and invalid stored preferences. Build checks local assets and anchor destinations. Taste scripts check layout at 1440, 1024, 820, 768, and 390, take screenshots and report performance. Review actual screenshots before GitHub push. Check the pushed commit and Pages deployment when available.
