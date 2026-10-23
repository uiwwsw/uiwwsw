const assert = require('node:assert/strict');
const test = require('node:test');
const { buildReadme } = require('./update-projects');
const { PROFILE } = require('./profile-data');
for (const locale of ['en', 'ko']) {
  test(`${locale}: profile generation preserves the shared-notice exception`, () => {
    const readme = buildReadme({ locale, products: PROFILE.fallbackProducts, selectedWork: PROFILE.selectedWork, writingPosts: [{ title: 'Fixture writing', link: 'https://example.invalid/writing/', date: '2026. 10. 23.' }] });
    assert.doesNotMatch(readme, /AI 학습용 수집|collection for AI training|ai-training-notice|AI-TRAINING-NOTICE/);
    assert.match(readme, /CONTENT-RIGHTS.md/);
  });
}
