import { test } from 'node:test';
import assert from 'node:assert/strict';
import { translations, normalizeLocale, readLocale, projects, softwareProjects } from '../content.js';
import { createHandPoints, landmarks, landmarkNames } from '../hand-data.js';

test('Vietnamese is the default for absent or unsupported preferences', () => {
  for (const value of [null, undefined, '', 'fr', '<script>', {}, 'EN']) assert.equal(normalizeLocale(value), 'vi');
  assert.equal(normalizeLocale('en'), 'en');
  assert.equal(normalizeLocale('vi'), 'vi');
});

test('blocked browser storage still renders the default language', () => {
  assert.equal(readLocale({ getItem() { throw new Error('Storage blocked'); } }), 'vi');
  assert.equal(readLocale({ getItem() { return 'en'; } }), 'en');
});

test('both languages provide complete, nonempty content without student ID exposure', () => {
  assert.deepEqual(Object.keys(translations.vi).sort(), Object.keys(translations.en).sort());
  const serialized = JSON.stringify({ translations, projects, softwareProjects });
  assert.ok(!/23010076/.test(serialized), 'Student ID must not be exposed');
  for (const locale of ['vi', 'en']) {
    for (const [key, value] of Object.entries(translations[locale])) {
      assert.equal(typeof value, 'string', `${locale}.${key}`);
      assert.ok(value.trim().length > 0, `${locale}.${key}`);
      assert.ok(!/TODO|lorem ipsum|coming soon/i.test(value), `${locale}.${key}`);
    }
  }
});

test('the primary gallery features 7 verified AI/ML/CV systems and 3 software engineering projects', () => {
  assert.equal(projects.length, 7);
  assert.equal(new Set(projects.map(p => p.id)).size, 7);
  assert.ok(projects.every(p => ['cv', 'ml', 'ai'].includes(p.category)));
  assert.equal(projects[0].repo, 'Giamsatgiaothong2');
  assert.ok(projects.some(p => p.repo === 'nghiencuuhocsinh'));
  for (const project of projects) {
    assert.ok(project.metrics.length === 4, `${project.id} metrics`);
    assert.ok(project.pipeline.length === 4, `${project.id} pipeline`);
    assert.ok(project.engineering.length >= 3, `${project.id} engineering`);
    assert.ok(project.repoTree.length >= 3, `${project.id} repoTree`);
  }
  assert.equal(softwareProjects.length, 3);
  assert.deepEqual(softwareProjects.map(s => s.repo), [
    'Thiet_Ke_Kho_hang_pttkpm123',
    'MusicBoxManagement.Wpf',
    '2025_2_LTTBDD_N03_Nhom_17'
  ]);
});

test('hand geometry and 21 MediaPipe landmarks are deterministic and finite', () => {
  const points = createHandPoints();
  assert.equal(points.length, 4200 * 3);
  assert.equal(landmarks.length, 21);
  assert.equal(landmarkNames.length, 21);
  assert.ok(points.every(Number.isFinite));
  assert.deepEqual(points, createHandPoints());
});
