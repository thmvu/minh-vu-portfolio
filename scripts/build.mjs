import { cp, mkdir, readFile, writeFile, stat, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { projects } from '../content.js';

const root = path.resolve('.');
const output = path.join(root, 'dist');
const siteUrl = 'https://thmvu.github.io/minh-vu-portfolio';

if (path.dirname(output) !== root || path.basename(output) !== 'dist') {
  throw new Error('Invalid build output directory');
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const files = ['index.html', 'project.html', 'styles.css', 'app.js', 'content.js', 'hand.js', 'hand-data.js'];
for (const file of files) await cp(file, path.join(output, file));
await cp('assets', path.join(output, 'assets'), { recursive: true });

for (const file of ['index.html', 'project.html']) {
  const html = await readFile(file, 'utf8');
  for (const [, url] of html.matchAll(/(?:src|href)="([^"#?]+)(?:[?#][^"]*)?"/g)) {
    if (/^(?:https?:|mailto:)/.test(url)) continue;
    await stat(path.resolve(url));
  }
}

const urls = [
  `${siteUrl}/`,
  ...projects.map(p => `${siteUrl}/project.html?project=${encodeURIComponent(p.id)}`)
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;

await writeFile(path.join(output, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(path.join(output, 'robots.txt'), robots, 'utf8');

let bytes = 0, count = 0;
async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) await walk(p);
    else { bytes += (await stat(p)).size; count++; }
  }
}
await walk(output);
console.log(`Built ${count} static files (${(bytes / 1024).toFixed(0)} KiB) including sitemap.xml & robots.txt. All local HTML assets resolve.`);
