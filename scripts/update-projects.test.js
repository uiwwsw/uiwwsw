const assert = require('node:assert/strict');
const test = require('node:test');
const { PROFILE } = require('./profile-data');
const { buildReadme, renderInProgress, renderProductEngineering } = require('./update-projects');

test('renders the product engineering evidence without inflated titles', () => {
    const section = renderProductEngineering(PROFILE.productEngineering);

    assert.match(section, /SvelteKit/);
    assert.match(section, /코드리뷰 기준/);
    assert.doesNotMatch(section, /C-Level|CEO|CTO|대표|이사/);
});

test('keeps the profile text-only and the featured article out of the recent feed', () => {
    const readme = buildReadme({
        products: PROFILE.fallbackProducts,
        velogPosts: PROFILE.fallbackVelogPosts,
    });

    assert.doesNotMatch(readme, /<img\b|<picture\b|!\[/);
    assert.match(readme, /## 해온 일/);
    assert.match(readme, /## 지금 만드는 제품/);
    assert.match(readme, /<!--START_PRODUCTS-->/);
    assert.match(readme, /<!--START_VELOG-->/);
    assert.equal(readme.split(PROFILE.featuredWriting.link).length - 1, 1);
    const recentFeed = readme.split('<!--START_VELOG-->')[1].split('<!--END_VELOG-->')[0];
    assert.equal(recentFeed.trim().split('\n').length, 2);
    assert.ok(!recentFeed.includes(PROFILE.featuredWriting.link));

    for (const project of PROFILE.selectedWork) {
        assert.match(readme, new RegExp(project.label.replaceAll('-', '\\-')));
    }
});

test('distinguishes previews from an unreleased app without inventing public links', () => {
    const section = renderInProgress(PROFILE.inProgress);

    for (const project of PROFILE.inProgress) {
        assert.ok(section.includes(project.stage));
        assert.ok(section.includes(project.label));
    }
    assert.match(section, /\*\*베디\(Be:D\)\*\*/);
    assert.doesNotMatch(section, /bestdriver|github\.com/);
    assert.equal((section.match(/\]\(https:/g) || []).length, 3);
});
