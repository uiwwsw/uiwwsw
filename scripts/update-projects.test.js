const assert = require('node:assert/strict');
const test = require('node:test');
const { PROFILE } = require('./profile-data');
const { buildReadme, renderProductEngineering } = require('./update-projects');

test('renders the product engineering evidence without inflated titles', () => {
    const section = renderProductEngineering(PROFILE.productEngineering);

    assert.match(section, /SvelteKit/);
    assert.match(section, /코드리뷰 기준/);
    assert.doesNotMatch(section, /C-Level|CEO|CTO|대표|이사/);
});

test('builds a theme-aware profile with stable dynamic sections', () => {
    const readme = buildReadme({
        products: PROFILE.fallbackProducts,
        velogPosts: PROFILE.fallbackVelogPosts,
    });

    assert.match(readme, /profile-dark-mobile\.svg/);
    assert.match(readme, /## 설계와 운영/);
    assert.match(readme, /## 직접 만든 도구와 제품/);
    assert.match(readme, /<!--START_PRODUCTS-->/);
    assert.match(readme, /<!--START_VELOG-->/);

    for (const project of PROFILE.selectedWork) {
        assert.match(readme, new RegExp(project.label.replaceAll('-', '\\-')));
    }
});
