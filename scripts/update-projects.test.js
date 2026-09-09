const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { PROFILE } = require('./profile-data');
const { buildReadme, selectProfileProducts, updateReadme } = require('./update-projects');

const fixture = {
    products: PROFILE.fallbackProducts,
    velogPosts: PROFILE.fallbackVelogPosts,
};

for (const locale of ['en', 'ko']) {
    test(`${locale}: renders a text-only profile with matching language navigation`, () => {
        const readme = buildReadme({ ...fixture, locale });
        const copy = PROFILE.copy[locale];

        assert.ok(readme.startsWith(`# ${PROFILE.identity.name[locale]}\n`));
        assert.ok(readme.includes(copy.languageLink));
        assert.doesNotMatch(readme, /<img\b|<picture\b|!\[|undefined|\[object Object\]/);
        assert.doesNotMatch(readme, /C-Level|CEO|CTO/);
        assert.deepEqual(readme.match(/^## .+$/gm), [
            `## ${copy.workHeading}`,
            `## ${copy.personalHeading}`,
        ]);

        for (const project of [...PROFILE.selectedWork, ...PROFILE.personalProjects]) {
            assert.ok(readme.includes(`[${project.label}](${project.url})`));
            assert.ok(readme.includes(project.description[locale]));
        }
        for (const product of PROFILE.fallbackProducts) {
            assert.ok(readme.includes(PROFILE.productCopy[product.key][locale]));
            assert.ok(readme.includes(locale === 'en' ? product.nameEn : product.nameKo));
        }
        for (const link of PROFILE.links) {
            assert.ok(readme.includes(`>${link.label[locale]}</a>`));
        }
    });

    test(`${locale}: keeps the featured article visible and dynamic feeds collapsed`, () => {
        const readme = buildReadme({ ...fixture, locale });
        const visible = readme.split('<details>')[0];
        const recentFeed = readme.split('<!--START_VELOG-->')[1].split('<!--END_VELOG-->')[0];

        assert.equal(readme.split(PROFILE.featuredWriting.link).length - 1, 1);
        assert.ok(visible.includes(PROFILE.featuredWriting.link));
        assert.ok(visible.includes(PROFILE.copy[locale].articleLanguage));
        assert.equal(recentFeed.trim().split('\n').length, 2);
        assert.ok(!recentFeed.includes(PROFILE.featuredWriting.link));
        assert.doesNotMatch(visible, /<!--START_VELOG-->|<!--START_PRODUCTS-->/);
        assert.match(readme, /<details>\s*<summary>[^]*?<!--START_VELOG-->[^]*?<!--END_VELOG-->\s*<\/details>/);
        assert.match(readme, /<details>\s*<summary>[^]*?<!--START_PRODUCTS-->[^]*?<!--END_PRODUCTS-->\s*<\/details>/);
        assert.equal((readme.match(/<details>/g) || []).length, 2);
        assert.doesNotMatch(readme, /<details\s+open/);
    });
}

test('defaults to English and keeps the expanded introduction within 150 words', () => {
    const readme = buildReadme(fixture);
    assert.equal(readme, buildReadme({ ...fixture, locale: 'en' }));
    const visible = readme.split('<details>')[0]
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/<[^>]*>/g, '')
        .replace('한국어', '');
    const words = [...new Intl.Segmenter('en', { granularity: 'word' }).segment(visible)]
        .filter((segment) => segment.isWordLike);

    assert.ok(words.length <= 150, `Visible word count: ${words.length}`);
    assert.doesNotMatch(visible, /[가-힣]/);
    assert.throws(() => buildReadme({ ...fixture, locale: 'fr' }), RangeError);
});

test('uses curated English article labels but keeps unknown posts in their original language', () => {
    const knownPost = PROFILE.fallbackVelogPosts[0];
    const unknownPost = {
        title: '새 글 [예시]',
        link: 'https://example.com/new-post',
        date: '2026. 09. 09.',
    };
    const en = buildReadme({ ...fixture, velogPosts: [knownPost, unknownPost], locale: 'en' });
    const ko = buildReadme({ ...fixture, velogPosts: [knownPost, unknownPost], locale: 'ko' });

    assert.ok(en.includes(`[${knownPost.titleEn}](${knownPost.link})`));
    assert.ok(ko.includes(`[${knownPost.title}](${knownPost.link})`));
    assert.ok(en.includes('[새 글 \\[예시\\]](https://example.com/new-post)'));
    assert.match(en, /Recent writing \(Korean\)/);
});

test('updates both language files from the same feed data on every run', (t) => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'profile-readmes-'));
    t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
    updateReadme(fixture.products, fixture.velogPosts, directory);

    for (const [locale, filename] of [['en', 'README.md'], ['ko', 'README.ko.md']]) {
        assert.equal(fs.readFileSync(path.join(directory, filename), 'utf8'), buildReadme({ ...fixture, locale }));
    }

    const nextPosts = [{ title: '새로운 글', link: 'https://example.com/latest', date: '2026. 09. 10.' }];
    updateReadme(fixture.products, nextPosts, directory);
    for (const filename of ['README.md', 'README.ko.md']) {
        const content = fs.readFileSync(path.join(directory, filename), 'utf8');
        assert.ok(content.includes(nextPosts[0].link));
        assert.ok(!content.includes(PROFILE.fallbackVelogPosts[0].link));
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
