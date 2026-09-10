const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { PROFILE } = require('./profile-data');
const { buildReadme, fetchLatestWritingPosts, parseWritingArchive, selectProfileProducts, updateReadme } = require('./update-projects');

const ARCHIVE_ENTRIES = [
    { title: '도구를 만든 기록', href: '/writing/tool-notes/', datetime: '2026-09-08T23:00:00Z', date: '2026. 09. 09.' },
    { title: '일상의 기록', href: '/writing/daily-notes/', datetime: '2026-09-08T01:00:00Z', date: '2026. 09. 08.' },
    { title: PROFILE.featuredWriting.title, href: PROFILE.featuredWriting.link, datetime: '2026-09-07T00:00:00Z', date: '2026. 09. 07.' },
];
const WRITING_POSTS = ARCHIVE_ENTRIES.map(({ title, href, date }) => ({
    title, link: new URL(href, 'https://uiwwsw.github.io/writing/').href, date,
}));

function archiveHtml(entries = ARCHIVE_ENTRIES) {
    return `<header><a href="https://example.com/">Unrelated navigation</a></header>
<ol class="writing-list">${entries.map((entry) => `<li><article>
<p class="reading-eyebrow">기록 · <time datetime="${entry.datetime}">${entry.date}</time></p>
<h2><a href="${entry.href}">${entry.title}</a></h2>
</article></li>`).join('\n')}</ol>
<nav><a rel="next" href="/writing/page/2/">Next</a></nav>`;
}

const fixture = {
    products: PROFILE.fallbackProducts,
    writingPosts: WRITING_POSTS,
};

for (const locale of ['en', 'ko']) {
    test(`${locale}: renders a text-only profile with matching language navigation`, () => {
        const readme = buildReadme({ ...fixture, locale });
        const copy = PROFILE.copy[locale];

        assert.ok(readme.startsWith(`# ${PROFILE.identity.name[locale]}\n`));
        assert.ok(readme.includes(copy.languageLink));
        assert.doesNotMatch(readme, /<img\b|<picture\b|!\[|undefined|\[object Object\]/);
        assert.doesNotMatch(readme, /C-Level|CEO|CTO/);
        assert.doesNotMatch(readme, /velog\.io/i);
        assert.ok(readme.includes('href="https://uiwwsw.github.io/writing/"'));
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
        const recentFeed = readme.split('<!--START_WRITING-->')[1].split('<!--END_WRITING-->')[0];

        assert.equal(readme.split(PROFILE.featuredWriting.link).length - 1, 1);
        assert.ok(visible.includes(PROFILE.featuredWriting.link));
        assert.ok(visible.includes(`[${PROFILE.featuredWriting.title}](${PROFILE.featuredWriting.link})`));
        assert.ok(visible.includes(PROFILE.copy[locale].articleLanguage));
        assert.equal(recentFeed.trim().split('\n').length, 2);
        assert.ok(!recentFeed.includes(PROFILE.featuredWriting.link));
        assert.doesNotMatch(visible, /<!--START_WRITING-->|<!--START_PRODUCTS-->/);
        assert.match(readme, /<details>\s*<summary>[^]*?<!--START_WRITING-->[^]*?<!--END_WRITING-->\s*<\/details>/);
        assert.match(readme, /<details>\s*<summary>[^]*?<!--START_PRODUCTS-->[^]*?<!--END_PRODUCTS-->\s*<\/details>/);
        assert.equal((readme.match(/<details>/g) || []).length, 2);
        assert.doesNotMatch(readme, /<details\s+open/);
    });
}

test('defaults to English and keeps the expanded introduction within 150 words', () => {
    const readme = buildReadme(fixture);
    assert.equal(readme, buildReadme({ ...fixture, locale: 'en' }));
    assert.ok(readme.includes('[한국어](https://github.com/uiwwsw/uiwwsw/blob/main/README.ko.md)'));
    assert.ok(buildReadme({ ...fixture, locale: 'ko' }).includes('[English](https://github.com/uiwwsw)'));
    const visible = readme.split('<details>')[0]
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/<[^>]*>/g, '')
        .replace('한국어', '')
        .replace(PROFILE.featuredWriting.title, '');
    const words = [...new Intl.Segmenter('en', { granularity: 'word' }).segment(visible)]
        .filter((segment) => segment.isWordLike);

    assert.ok(words.length <= 150, `Visible word count: ${words.length}`);
    assert.doesNotMatch(visible, /[가-힣]/);
    assert.throws(() => buildReadme({ ...fixture, locale: 'fr' }), RangeError);
});

test('preserves site titles for existing, new, and renamed posts in both languages', () => {
    const knownPost = WRITING_POSTS[0];
    const unknownPost = {
        title: '새 글 [예시]',
        link: 'https://uiwwsw.github.io/writing/new-post/',
        date: '2026. 09. 09.',
    };
    for (const post of [knownPost, { ...knownPost, title: '사이트에서 바꾼 제목' }]) {
        const en = buildReadme({ ...fixture, writingPosts: [post, unknownPost], locale: 'en' });
        const ko = buildReadme({ ...fixture, writingPosts: [post, unknownPost], locale: 'ko' });

        for (const readme of [en, ko]) {
            assert.ok(readme.includes(`[${post.title}](${post.link})`));
            assert.ok(readme.includes('[새 글 \\[예시\\]](https://uiwwsw.github.io/writing/new-post/)'));
        }
        const enFeed = en.split('<!--START_WRITING-->')[1].split('<!--END_WRITING-->')[0];
        const koFeed = ko.split('<!--START_WRITING-->')[1].split('<!--END_WRITING-->')[0];
        assert.equal(enFeed, koFeed);
        assert.match(en, /Recent writing \(Korean\)/);
    }
});

test('prefers the fetched original title for the featured article when available', () => {
    const featuredPost = {
        title: '대표 글의 수정된 제목 [원문]',
        link: PROFILE.featuredWriting.link,
        date: '2026. 09. 09.',
    };

    for (const locale of ['en', 'ko']) {
        const readme = buildReadme({ ...fixture, writingPosts: [featuredPost], locale });
        assert.ok(readme.includes(`[대표 글의 수정된 제목 \\[원문\\]](${featuredPost.link})`));
        assert.ok(!readme.includes(PROFILE.featuredWriting.title));
        assert.equal(readme.split(featuredPost.link).length - 1, 1);
    }
});

test('updates both language files from the same feed data on every run', (t) => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'profile-readmes-'));
    t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
    updateReadme(fixture.products, fixture.writingPosts, directory);

    for (const [locale, filename] of [['en', 'README.md'], ['ko', 'README.ko.md']]) {
        assert.equal(fs.readFileSync(path.join(directory, filename), 'utf8'), buildReadme({ ...fixture, locale }));
    }

    const nextPosts = [{ title: '새로운 글', link: 'https://uiwwsw.github.io/writing/latest/', date: '2026. 09. 10.' }];
    updateReadme(fixture.products, nextPosts, directory);
    for (const filename of ['README.md', 'README.ko.md']) {
        const content = fs.readFileSync(path.join(directory, filename), 'utf8');
        assert.ok(content.includes(nextPosts[0].link));
        assert.ok(content.includes(`[${nextPosts[0].title}](${nextPosts[0].link})`));
        assert.ok(!content.includes(WRITING_POSTS[0].link));
    }
});

test('reads all writing categories, sorts newest first, and preserves the displayed dates', () => {
    assert.deepEqual(parseWritingArchive(archiveHtml(ARCHIVE_ENTRIES.toReversed())), WRITING_POSTS);
    const posts = parseWritingArchive(archiveHtml([
        { ...ARCHIVE_ENTRIES[0], title: '도구 &amp; [기록]', href: '/writing/한글-주소/' },
    ]));
    assert.equal(posts[0].title, '도구 & [기록]');
    assert.equal(posts[0].link, new URL('https://uiwwsw.github.io/writing/한글-주소/').href);
    assert.equal(posts[0].date, ARCHIVE_ENTRIES[0].date);
});

test('rejects empty, changed, or malformed archives instead of publishing an empty feed', () => {
    for (const html of ['', '<html>Unavailable</html>', archiveHtml([])]) {
        assert.throws(() => parseWritingArchive(html), /no readable articles/);
    }
    for (const invalid of [{ title: '' }, { href: '' }, { datetime: 'invalid' }, { date: '' }]) {
        assert.throws(() => parseWritingArchive(archiveHtml([{ ...ARCHIVE_ENTRIES[0], ...invalid }])), /missing/);
    }
});

test('only accepts individual article links on the writing site and rejects duplicates', () => {
    for (const href of [
        'https://example.com/writing/post/',
        '//example.com/writing/post/',
        'http://uiwwsw.github.io/writing/post/',
        '/writing/',
        '/writing/page/2/',
        '/writing/post/?preview=true',
        '/writing/post/#section',
    ]) {
        assert.throws(() => parseWritingArchive(archiveHtml([{ ...ARCHIVE_ENTRIES[0], href }])), /does not link/);
    }
    assert.throws(() => parseWritingArchive(archiveHtml([
        ARCHIVE_ENTRIES[0],
        { ...ARCHIVE_ENTRIES[0], href: WRITING_POSTS[0].link },
    ])), /duplicate/);
});

test('fetches the published archive and propagates failures without a stale fallback', async () => {
    const posts = await fetchLatestWritingPosts(async (url) => {
        assert.equal(url, 'https://uiwwsw.github.io/writing/');
        return archiveHtml();
    });
    assert.deepEqual(posts, WRITING_POSTS);
    await assert.rejects(fetchLatestWritingPosts(async () => { throw new Error('Site unavailable'); }), /Site unavailable/);
    await assert.rejects(fetchLatestWritingPosts(async () => '<html>Error page</html>'), /no readable articles/);
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
