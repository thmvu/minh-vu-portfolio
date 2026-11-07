import { test } from 'node:test';
import assert from 'node:assert/strict';
import { translations, normalizeLocale, readLocale, projects } from '../content.js';
import { createHandPoints } from '../hand-data.js';

test('Vietnamese is the default for absent or unsupported preferences', () => {
  for (const value of [null, undefined, '', 'fr', '<script>', {}, 'EN']) assert.equal(normalizeLocale(value), 'vi');
  assert.equal(normalizeLocale('en'), 'en');
  assert.equal(normalizeLocale('vi'), 'vi');
});
test('blocked browser storage still renders the default language', () => {
  assert.equal(readLocale({ getItem() { throw new Error('Storage blocked'); } }), 'vi');
  assert.equal(readLocale({ getItem() { return 'en'; } }), 'en');
});
test('both languages provide complete, nonempty content', () => {
  assert.deepEqual(Object.keys(translations.vi).sort(), Object.keys(translations.en).sort());
  for (const locale of ['vi', 'en']) for (const [key, value] of Object.entries(translations[locale])) {
    assert.equal(typeof value, 'string', `${locale}.${key}`);
    assert.ok(value.trim().length > 0, `${locale}.${key}`);
    assert.ok(!/TODO|lorem ipsum|coming soon/i.test(value), `${locale}.${key}`);
  }
});
test('the project library focuses on AI/ML/CV with unique local IDs and real repositories', () => {
  assert.equal(projects.length,6);
  assert.equal(new Set(projects.map(p=>p.id)).size,6);
  assert.ok(projects.every(p=>['cv','ml','ai'].includes(p.category)));
  assert.equal(projects[0].repo,'Giamsatgiaothong2');
  assert.ok(!projects.some(p=>/MusicBox/i.test(p.repo)));
});
test('hand geometry is deterministic, finite, and within the GPU point budget', () => {
  const points=createHandPoints();assert.equal(points.length,4200*3);
  assert.ok(points.every(Number.isFinite));assert.deepEqual(points,createHandPoints());
});
