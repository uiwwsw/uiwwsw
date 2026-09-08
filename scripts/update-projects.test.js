const assert = require('node:assert/strict');
const test = require('node:test');
const { PROFILE } = require('./profile-data');
const { buildReadme, renderProductEngineering, selectProfileProducts } = require('./update-projects');

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
    assert.deepEqual(readme.match(/^## .+$/gm), [
        '## 해온 일',
        '## 반복되는 문제는 도구로',
        '## 글로 남긴 생각',
    ]);
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

test('only publishes explicitly selected products with a released platform', () => {
    const services = PROFILE.fallbackProducts.map((product, index) => ({
        key: product.key,
        order: index + 1,
        name_ko: product.nameKo,
        name_en: product.nameEn,
        status: index === 0 ? 'live' : 'ios_live_android_wip',
        tagline: 'Uncurated feed copy',
        tech_stack: ['Flutter', 'Other'],
        links: { home: `/${product.key}/` },
        platforms: product.platforms,
    }));

    const products = selectProfileProducts([
        { key: 'unlisted-product', status: 'live' },
        null,
        ...services.toReversed(),
    ]);

    assert.deepEqual(products, PROFILE.fallbackProducts);
    assert.deepEqual(selectProfileProducts([]), []);
    assert.throws(() => selectProfileProducts({}), TypeError);
});

test('does not treat work in progress or a negated live status as a release', () => {
    const key = PROFILE.fallbackProducts[0].key;

    for (const status of ['wip', 'preview', 'not_live', 'ios_liveness', '', null, undefined]) {
        assert.deepEqual(selectProfileProducts([{ key, status }]), []);
    }
});

test('fallback products remain inside the explicit publication allowlist', () => {
    assert.ok(PROFILE.fallbackProducts.length > 0);
    for (const product of PROFILE.fallbackProducts) {
        assert.ok(Object.hasOwn(PROFILE.productCopy, product.key));
    }
});
