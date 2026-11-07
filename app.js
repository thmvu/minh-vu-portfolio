import { translations, readLocale, projects, softwareProjects } from './content.js';
import { mountHand } from './hand.js';

let locale;
try { locale = readLocale(localStorage); } catch { locale = 'vi'; }
let filter = 'all', hand;

const t = () => translations[locale];
const image = project => `assets/projects/${project.visual}.svg`;
const resolveCell = cell => (cell && typeof cell === 'object' ? cell[locale] : cell);

function updateFilterCounts() {
  document.querySelectorAll('[data-count-for]').forEach(badge => {
    const key = badge.dataset.countFor;
    const count = key === 'all' ? projects.length : projects.filter(p => p.category === key).length;
    badge.textContent = String(count);
  });
}

function renderProjects(withTransitionNames = false) {
  const grid = document.getElementById('project-grid');
  if (!grid) return;
  const visible = projects.filter(p => filter === 'all' || p.category === filter);
  const featureFirst = visible.length > 1 && visible.length % 2 === 1;

  grid.replaceChildren(...visible.map((project, index) => {
    const featured = featureFirst && index === 0;
    const link = document.createElement('a');
    link.className = `project-card${featured ? ' project-card--featured' : ''}`;
    link.dataset.projectId = project.id;
    if (withTransitionNames) link.style.viewTransitionName = `vt-project-${project.id}`;
    link.href = `project.html?project=${encodeURIComponent(project.id)}`;
    link.setAttribute('aria-label', `${t().viewProject}: ${project.name}`);
    link.innerHTML = `
      <div class="project-art project-art--${project.visual}">
        <div class="project-identity">
          <span class="project-name-badge">${project.name}</span>
          <span class="project-category">${t()[project.category]} · ${project.year}</span>
        </div>
        <img src="${image(project)}" width="760" height="480" alt="${project.name} — ${t()[project.category]}" loading="${featured ? 'eager' : 'lazy'}">
        <span class="project-scan" aria-hidden="true"></span>
      </div>
      <div class="project-summary">
        ${featured ? `<div class="featured-kicker"><span class="status-dot" aria-hidden="true"></span><span>${t().featuredBadge}</span></div>` : ''}
        <div class="summary-head">
          <h3>${project.title[locale]}</h3>
          <span class="card-arrow" aria-hidden="true">↗</span>
        </div>
        <p>${project.description[locale]}</p>
        <div class="card-metrics">
          ${project.cardMetrics.map(m => `<span class="metric-chip">${m[locale]}</span>`).join('')}
        </div>
        <div class="card-foot">
          <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          <span class="card-repo">github/${project.repo}</span>
        </div>
      </div>`;
    return link;
  }));
}

function renderSoftware() {
  const grid = document.getElementById('software-grid');
  if (!grid) return;
  grid.replaceChildren(...softwareProjects.map(item => {
    const card = document.createElement('a');
    card.className = 'software-card';
    card.href = `https://github.com/thmvu/${item.repo}`;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `${item.name} — GitHub`);
    card.innerHTML = `
      <div class="software-top">
        <span class="software-domain">${item.domain[locale]}</span>
        <span class="software-arrow" aria-hidden="true">↗</span>
      </div>
      <h3>${item.name}</h3>
      <p>${item.summary[locale]}</p>
      <p class="software-highlight">${item.highlight[locale]}</p>
      <div class="tags">${item.stack.map(s => `<span>${s}</span>`).join('')}</div>`;
    return card;
  }));
}

function renderDetail() {
  const root = document.getElementById('project-detail');
  if (!root) return;
  const id = new URLSearchParams(location.search).get('project');
  const idx = projects.findIndex(p => p.id === id);
  const project = idx >= 0 ? projects[idx] : null;

  if (!project) {
    document.title = `${t().notFound} — Minh Vũ`;
    root.innerHTML = `<div class="wrap not-found"><p class="section-label">404</p><h1>${t().notFound}</h1><a class="back-link" href="index.html#work">← ${t().back}</a></div>`;
    return;
  }

  document.title = `${project.name} — Minh Vũ`;
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  root.innerHTML = `
    <div class="wrap">
      <a href="index.html#work" class="back-link">← ${t().back}</a>
      <div class="project-heading">
        <div class="project-type">
          <span>${t()[project.category]}</span>
          <span aria-hidden="true">·</span>
          <span>${project.year}</span>
          <span aria-hidden="true">·</span>
          <code>thmvu/${project.repo}</code>
        </div>
        <h1>${project.title[locale]}</h1>
        <p>${project.description[locale]}</p>
        <div class="case-metrics">
          ${project.metrics.map(m => `
            <div class="case-metric">
              <strong>${m.value}</strong>
              <span>${m.label[locale]}</span>
            </div>`).join('')}
        </div>
      </div>

      <div class="project-hero project-art--${project.visual}">
        <img src="${image(project)}" width="1440" height="900" alt="${project.name} — ${t().pipelineTitle}">
      </div>

      <section class="pipeline-section" aria-labelledby="pipeline-heading">
        <h2 id="pipeline-heading">${t().pipelineTitle}</h2>
        <div class="pipeline-grid">
          ${project.pipeline.map(stage => `
            <div class="pipeline-step">
              <span class="pipeline-num">${stage.step}</span>
              <h3>${stage.name[locale]}</h3>
              <p>${stage.detail[locale]}</p>
            </div>`).join('')}
        </div>
      </section>

      <div class="project-body">
        <aside class="project-aside">
          <div class="aside-card">
            <h2>${t().stack}</h2>
            <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
            <a class="btn btn--primary" href="https://github.com/thmvu/${project.repo}" target="_blank" rel="noopener noreferrer">${t().source} ↗</a>
          </div>
          <div class="aside-card">
            <h2>${t().repoMap}</h2>
            <ul class="repo-tree">
              ${project.repoTree.map(node => `
                <li>
                  <code>${node.path}</code>
                  <span>${node.desc[locale]}</span>
                </li>`).join('')}
            </ul>
          </div>
        </aside>

        <div class="project-text">
          <article>
            <h2>${t().overview}</h2>
            <p>${project.overview[locale]}</p>
          </article>
          <article>
            <h2>${t().approach}</h2>
            <p>${project.approach[locale]}</p>
          </article>
          <article>
            <h2>${t().highlightsTitle}</h2>
            <ul class="eng-list">
              ${project.engineering.map(item => `<li>${item[locale]}</li>`).join('')}
            </ul>
          </article>
          ${project.table ? `
          <article>
            <h2>${t().benchmarkTitle}</h2>
            <div class="spec-table-wrap">
              <table class="spec-table">
                <caption>${project.table.caption[locale]}</caption>
                <thead>
                  <tr>${project.table.headers.map(h => `<th scope="col">${h[locale]}</th>`).join('')}</tr>
                </thead>
                <tbody>
                  ${project.table.rows.map(row => `<tr>${row.map(cell => `<td>${resolveCell(cell)}</td>`).join('')}</tr>`).join('')}
                </tbody>
              </table>
            </div>
          </article>` : ''}
          ${project.artifactImage ? `
          <article class="artifact-showcase">
            <h2>${t().artifactPlotTitle}</h2>
            <figure class="artifact-figure">
              <img src="${project.artifactImage.src}" width="760" height="480" alt="${project.name} — Precision-Recall artifact" loading="lazy">
              <figcaption>${project.artifactImage.caption[locale]}</figcaption>
            </figure>
          </article>` : ''}
          <article>
            <h2>${t().role}</h2>
            <p>${project.role[locale]}</p>
          </article>
          <article>
            <h2>${t().artifacts}</h2>
            <p>${project.artifacts[locale]}</p>
          </article>
          <div class="detail-links">
            <a href="https://github.com/thmvu/${project.repo}" target="_blank" rel="noopener noreferrer">GitHub / ${project.repo} ↗</a>
            <a href="index.html#work">${t().back}</a>
          </div>
        </div>
      </div>

      <nav class="project-pager" aria-label="${t().details}">
        <a class="pager-card" href="project.html?project=${encodeURIComponent(prev.id)}">
          <span class="pager-label">← ${t().prevProject}</span>
          <strong>${prev.name}</strong>
          <span>${prev.title[locale]}</span>
        </a>
        <a class="pager-card pager-card--next" href="project.html?project=${encodeURIComponent(next.id)}">
          <span class="pager-label">${t().nextProject} →</span>
          <strong>${next.name}</strong>
          <span>${next.title[locale]}</span>
        </a>
      </nav>
    </div>`;
}

function translate() {
  document.documentElement.lang = locale;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = t()[el.dataset.i18n];
    if (value) el.textContent = value;
  });
  const toggle = document.getElementById('language');
  if (toggle) {
    toggle.innerHTML = locale === 'vi'
      ? 'VI <span aria-hidden="true">/</span> <span lang="en">EN</span>'
      : '<span lang="vi">VI</span> <span aria-hidden="true">/</span> EN';
    toggle.setAttribute('aria-label', locale === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt');
  }
  document.getElementById('copy-email')?.setAttribute('aria-label', t().copy);
  document.getElementById('copy-email')?.setAttribute('title', t().copy);
  document.getElementById('copy-status')?.replaceChildren();
  document.querySelector('.filters')?.setAttribute('aria-label', locale === 'vi' ? 'Lọc dự án' : 'Filter projects');
  document.getElementById('navigation')?.setAttribute('aria-label', locale === 'vi' ? 'Điều hướng chính' : 'Main navigation');
  updateMenuLabel();
  updateFilterCounts();
  hand?.updateLabels();
  renderProjects();
  renderSoftware();
  renderDetail();
}

document.getElementById('language')?.addEventListener('click', () => {
  locale = locale === 'vi' ? 'en' : 'vi';
  try { localStorage.setItem('minhvu-language', locale); } catch {}
  translate();
});

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  renderProjects(false);
}));

const menu = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');
function updateMenuLabel() {
  menu?.setAttribute('aria-label', menu?.getAttribute('aria-expanded') === 'true' ? t().closeMenu : t().menu);
}
function closeMenu() {
  navigation?.classList.remove('is-open');
  menu?.setAttribute('aria-expanded', 'false');
  updateMenuLabel();
}
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  navigation?.classList.toggle('is-open', open);
  menu.setAttribute('aria-expanded', String(open));
  updateMenuLabel();
});
navigation?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});

document.getElementById('copy-email')?.addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('minhvu6723@gmail.com');
    status.textContent = t().copied;
  } catch {
    status.textContent = t().copyFailed;
  }
});

// Active section highlight in sticky navigation
const sections = [...document.querySelectorAll('main > section[id], footer[id]')];
if (sections.length && navigation) {
  const spy = new IntersectionObserver(entries => {
    const active = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    const id = `#${active.target.id}`;
    navigation.querySelectorAll('a').forEach(link => {
      link.classList.toggle('is-current', link.getAttribute('href') === id);
    });
  }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, .2, .5] });
  sections.forEach(s => spy.observe(s));
}

// Fallback for browsers without CSS Scroll-Driven Animations
if (!window.CSS?.supports?.('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
  const header = document.getElementById('site-header');
  const bar = document.querySelector('.scroll-progress');
  const onScroll = () => {
    const y = window.scrollY || 0;
    header?.toggleAttribute('data-scrolled', y > 24);
    if (bar) {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, y / max)).toFixed(4)})`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

translate();

const stage = document.getElementById('hand-stage');
if (stage) {
  hand = mountHand(stage, t);
  window.addEventListener('pagehide', () => hand.destroy());
  window.addEventListener('pageshow', event => {
    if (event.persisted) hand = mountHand(stage, t);
  });
}
