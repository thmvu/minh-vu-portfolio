import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';

const port = 5174, base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['scripts/serve.mjs'], {
  env: { ...process.env, PORT: String(port) },
  stdio: 'pipe',
  windowsHide: true
});
await new Promise((resolve, reject) => {
  server.stdout.once('data', resolve);
  server.once('error', reject);
});

const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader']
});
let passed = 0;
const errors = [];
async function check(name, run) {
  await run();
  passed++;
  console.log(`PASS ${name}`);
}

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('pageerror', error => errors.push(error.message));

try {
  await page.goto(base);
  await page.locator('.project-card').last().waitFor();

  await check('all 7 AI/ML/CV projects and 3 software systems render, filters restore library', async () => {
    assert.equal(await page.locator('.project-card').count(), 7);
    assert.equal(await page.locator('.project-card--featured').count(), 1);
    assert.equal(await page.locator('.software-card').count(), 3);
    for (const [filter, count] of [['cv', 3], ['ml', 2], ['ai', 2], ['all', 7]]) {
      await page.locator(`[data-filter="${filter}"]`).click();
      await page.waitForTimeout(120);
      assert.equal(await page.locator('.project-card').count(), count);
      assert.equal(await page.locator(`[data-filter="${filter}"]`).getAttribute('aria-pressed'), 'true');
    }
  });

  await check('language persists, rich case study tables/pipelines and credits stay accurate', async () => {
    await page.locator('#language').click();
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');

    await page.goto(`${base}/project.html?project=vsl`);
    await page.locator('.project-text').waitFor();
    assert.match(await page.locator('.project-text').innerText(), /Phạm Thị Minh Ngọc led UI\/UX/);
    assert.equal(await page.locator('.project-aside a').first().getAttribute('href'), 'https://github.com/thmvu/vietnamese-sign-language-web');
    assert.equal(await page.locator('.pipeline-step').count(), 4);
    assert.equal(await page.locator('.case-metric').count(), 4);

    await page.goto(`${base}/project.html?project=kt`);
    await page.locator('.spec-table').waitFor();
    assert.match(await page.locator('.spec-table').innerText(), /0\.178223/);
  });

  await check('unknown project is handled without inserting untrusted query HTML', async () => {
    await page.goto(`${base}/project.html?project=%3Cscript%3E`);
    await page.locator('.not-found').waitFor();
    assert.match(await page.locator('h1').innerText(), /Project not found/);
  });

  await page.goto(base);
  await page.locator('#language').click();

  await check('WebGL is bounded, HUD telemetry updates, pause/reset and keyboard controls work', async () => {
    await page.locator('#hand-stage[data-ready]').waitFor();
    const dims = await page.locator('#hand-canvas').evaluate(el => ({ ratio: el.width / el.getBoundingClientRect().width }));
    assert.ok(dims.ratio <= 1.51);
    assert.match(await page.locator('#hud-keypoint').innerText(), /\[/);
    await page.locator('#motion-toggle').click();
    assert.match(await page.locator('#motion-toggle').getAttribute('aria-label'), /Bật/);
    await page.locator('#hand-stage').focus();
    await page.keyboard.press('ArrowRight');
    await page.locator('#reset-camera').click();
    await page.locator('#motion-toggle').click();
    assert.match(await page.locator('#motion-toggle').getAttribute('aria-label'), /Dừng/);
  });

  await mkdir('work/shots', { recursive: true });
  for (const [width, height] of [[1440, 900], [1024, 768], [820, 1180], [768, 1024], [390, 844]]) {
    await page.setViewportSize({ width, height });
    await page.goto(base);
    await page.locator('.project-card').last().waitFor();
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(async image => {
        image.loading = 'eager';
        await image.decode().catch(() => {});
      }));
    });
    await page.screenshot({ path: `work/shots/browser-${width}.png`, fullPage: true });
    await check(`layout and assets at ${width}×${height}`, async () => {
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      const broken = await page.locator('img').evaluateAll(imgs => imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src));
      assert.deepEqual(broken, []);
      const overlap = await page.locator('h1').evaluate(el => el.getBoundingClientRect().right > innerWidth);
      assert.equal(overlap, false);
    });
  }

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${base}/project.html?project=kt`);
  await page.locator('.spec-table').waitFor();
  await page.screenshot({ path: 'work/shots/case-study-1440.png', fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  await check('mobile menu works with touch-sized controls and Escape', async () => {
    await page.locator('#menu-toggle').click();
    assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'true');
    await page.locator('#navigation a[href="#about"]').click();
    assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'false');
    await page.locator('#menu-toggle').click();
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'false');
  });

  await check('narrow screens and enlarged text keep hero controls in the document', async () => {
    await page.setViewportSize({ width: 320, height: 844 });
    await page.goto(base);
    await page.locator('.project-card').last().waitFor();
    await page.evaluate(() => {
      for (const el of document.querySelectorAll('h1,.hero-copy p,.hero-copy a,.art-bottom p,.art-metadata')) {
        el.style.fontSize = `${parseFloat(getComputedStyle(el).fontSize) * 2}px`;
      }
    });
    const bounds = await page.evaluate(() => {
      const hero = document.querySelector('.hero').getBoundingClientRect();
      const art = document.querySelector('.hero-art').getBoundingClientRect();
      const reset = document.querySelector('#reset-camera').getBoundingClientRect();
      return { hero: hero.bottom, art: art.bottom, reset: reset.bottom, overflow: document.documentElement.scrollWidth > innerWidth };
    });
    assert.ok(bounds.hero >= bounds.art - 1);
    assert.ok(bounds.hero >= bounds.reset - 1);
    assert.equal(bounds.overflow, false);
  });

  await check('reduced motion preserves a visible static hand', async () => {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const p = await context.newPage();
    await p.goto(base);
    await p.locator('#hand-stage[data-fallback]').waitFor();
    assert.equal(await p.locator('.hand-poster').isVisible(), true);
    assert.equal(await p.locator('#activate-3d').isVisible(), true);
    await context.close();
  });

  await check('unavailable WebGL preserves poster, projects, and navigation', async () => {
    const context = await browser.newContext();
    await context.addInitScript(() => {
      const original = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (type, ...args) {
        return /^webgl/.test(type) ? null : original.call(this, type, ...args);
      };
    });
    const p = await context.newPage();
    await p.goto(base);
    await p.locator('#hand-stage[data-fallback]').waitFor();
    assert.equal(await p.locator('.hand-poster').isVisible(), true);
    await p.locator('#activate-3d').click();
    assert.equal(await p.locator('.project-card').count(), 7);
    await context.close();
  });

  await check('context loss reveals poster and restores safely', async () => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(base);
    await page.locator('#hand-stage[data-ready]').waitFor();
    await page.locator('#hand-canvas').evaluate(canvas => {
      window.testContextExtension = canvas.getContext('webgl').getExtension('WEBGL_lose_context');
      window.testContextExtension.loseContext();
    });
    await page.locator('#hand-stage[data-fallback]').waitFor();
    assert.equal(await page.locator('.hand-poster').isVisible(), true);
    await page.evaluate(() => window.testContextExtension.restoreContext());
    await page.locator('#hand-stage[data-ready]').waitFor();
  });

  await check('blocked localStorage still permits switching language', async () => {
    const context = await browser.newContext();
    await context.addInitScript(() => Object.defineProperty(window, 'localStorage', {
      get() { throw new DOMException('blocked', 'SecurityError'); }
    }));
    const p = await context.newPage();
    await p.goto(base);
    await p.locator('#language').click();
    assert.equal(await p.locator('html').getAttribute('lang'), 'en');
    await context.close();
  });

  await check('static portfolio remains accessible with JavaScript disabled', async () => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const p = await context.newPage();
    await p.goto(base);
    assert.equal(await p.locator('.source-list a').count(), 7);
    assert.equal(await p.locator('.hand-poster').isVisible(), true);
    assert.ok(await p.locator('h1').innerText());
    await context.close();
  });

  await check('mobile with CPU throttling stays usable and keeps animation opt-in', async () => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
    const p = await context.newPage();
    const cdp = await context.newCDPSession(p);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await p.goto(base);
    await p.locator('.project-card').last().waitFor();
    assert.equal(await p.locator('#hand-stage').getAttribute('data-ready'), null);
    await p.locator('#activate-3d').click();
    await p.locator('#hand-stage[data-ready]').waitFor();
    assert.ok(await p.locator('#hand-canvas').evaluate(el => el.width / el.getBoundingClientRect().width) <= 1.01);
    await context.close();
  });

  assert.deepEqual(errors, []);
  console.log(`\n${passed} browser checks passed; no page errors.`);
} finally {
  await browser.close();
  server.kill();
}
