#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const README_PATH = path.join(__dirname, '..', 'README.md');

const feeds = [
  {
    name: 'GitHub Pages',
    startMarker: '<!--START_GITHUB_PAGES-->',
    endMarker: '<!--END_GITHUB_PAGES-->',
    urls: [
      'https://uiwwsw.github.io/feed.xml',
      'https://uiwwsw.github.io/index.xml',
      'https://uiwwsw.github.io/rss.xml',
    ],
    maxItems: 5,
  },
  {
    name: 'Velog',
    startMarker: '<!--START_VELOG-->',
    endMarker: '<!--END_VELOG-->',
    url: 'https://v2.velog.io/rss/uiwwsw',
    maxItems: 5,
  },
];

const dateFormatter = new Intl.DateTimeFormat('ko-KR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

async function fetchFeed(feedConfig) {
  const candidates = Array.isArray(feedConfig.urls)
    ? feedConfig.urls
    : [feedConfig.url].filter(Boolean);

  if (candidates.length === 0) {
    throw new Error(`${feedConfig.name} 피드에 사용할 URL이 설정되지 않았습니다.`);
  }

  let lastError = null;

  for (const url of candidates) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'uiwwsw-readme-bot/1.0 (+https://github.com/uiwwsw)',
          Accept: 'application/rss+xml, application/atom+xml; charset=utf-8',
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`status=${response.status}`);
      }

      clearTimeout(timeoutId);
      return response.text();
    } catch (error) {
      lastError = error;
      const detail =
        error && typeof error === 'object'
          ? [error.message, error.code, error.cause && error.cause.code].filter(Boolean).join(' ')
          : String(error);
      console.warn(`  ↪️  ${feedConfig.name} 피드 ${url} 요청 실패: ${detail}`);
    }
    clearTimeout(timeoutId);
  }

  throw lastError || new Error(`${feedConfig.name} 피드 요청에 실패했습니다.`);
}

function stripCdata(value = '') {
  return value.replace(/<!\[CDATA\[(.*?)\]\]>/gis, '$1');
}

function decodeEntities(value = '') {
  return stripCdata(value)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .trim();
}

function extractTagValue(block, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const match = block.match(regex);
  return match ? decodeEntities(match[1]) : '';
}

function extractLink(block) {
  const linkMatch = block.match(/<link[^>]*href="([^"]+)"[^>]*>/i);
  if (linkMatch) {
    return linkMatch[1];
  }

  const alternateMatch = block.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"[^>]*>/i);
  if (alternateMatch) {
    return alternateMatch[1];
  }

  const directMatch = extractTagValue(block, 'link');
  if (directMatch) {
    return directMatch;
  }

  const guidMatch = extractTagValue(block, 'guid');
  return guidMatch;
}

function parseFeedContent(xml) {
  const rssItems = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
  const atomEntries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)];
  const blocks = rssItems.length ? rssItems : atomEntries;

  return blocks.map((match) => {
    const block = match[1];
    const title = extractTagValue(block, 'title') || '제목 없는 게시글';
    const link = extractLink(block);
    const pubDate = extractTagValue(block, 'updated') || extractTagValue(block, 'pubDate');
    const isoDate = pubDate ? new Date(pubDate).toISOString() : null;

    return { title, link, isoDate };
  });
}

function formatFeedItems(items, maxItems) {
  return items
    .filter((item) => item && item.title)
    .sort((a, b) => {
      if (a.isoDate && b.isoDate) {
        return new Date(b.isoDate) - new Date(a.isoDate);
      }
      if (a.isoDate) return -1;
      if (b.isoDate) return 1;
      return 0;
    })
    .slice(0, maxItems)
    .map((item) => {
      const formattedDate = item.isoDate ? dateFormatter.format(new Date(item.isoDate)) : null;
      const dateSuffix = formattedDate ? ` _( ${formattedDate} )_` : '';
      if (item.link) {
        return `- [${item.title}](${item.link})${dateSuffix}`;
      }
      return `- ${item.title}${dateSuffix}`;
    })
    .join('\n');
}

function extractSection(readmeContent, startMarker, endMarker) {
  const startIndex = readmeContent.indexOf(startMarker);
  const endIndex = readmeContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`README에 ${startMarker} 또는 ${endMarker} 구간이 없습니다.`);
  }

  const sectionStart = startIndex + startMarker.length;
  const currentContent = readmeContent
    .slice(sectionStart, endIndex)
    .replace(/^\n+|\n+$/g, '');

  return {
    startIndex,
    endIndex,
    currentContent,
  };
}

function replaceSection(readmeContent, startMarker, endMarker, newSectionContent) {
  const { startIndex, endIndex } = extractSection(readmeContent, startMarker, endMarker);
  const before = readmeContent.slice(0, startIndex + startMarker.length);
  const after = readmeContent.slice(endIndex);
  return `${before}\n${newSectionContent}\n${after}`;
}

async function main() {
  let readme = fs.readFileSync(README_PATH, 'utf8');
  let hasChanges = false;

  for (const feedConfig of feeds) {
    const { currentContent } = extractSection(readme, feedConfig.startMarker, feedConfig.endMarker);
    try {
      const xml = await fetchFeed(feedConfig);
      const items = parseFeedContent(xml);
      const formatted = formatFeedItems(items, feedConfig.maxItems);

      if (!formatted) {
        console.log(`[info] ${feedConfig.name} 피드에서 표시할 항목이 없어 기존 섹션을 유지합니다.`);
        continue;
      }

      const updated = replaceSection(readme, feedConfig.startMarker, feedConfig.endMarker, formatted);
      if (updated !== readme) {
        hasChanges = true;
        readme = updated;
      }
    } catch (error) {
      console.warn(`\n[warn] ${feedConfig.name} 섹션 갱신에 실패했습니다: ${error.message}`);
      if (!currentContent.trim()) {
        const fallback = '- (데이터를 불러오지 못했습니다.)';
        const updated = replaceSection(readme, feedConfig.startMarker, feedConfig.endMarker, fallback);
        if (updated !== readme) {
          hasChanges = true;
          readme = updated;
        }
      } else {
        console.log(`[info] ${feedConfig.name} 섹션을 기존 내용으로 유지합니다.`);
      }
    }
  }

  if (hasChanges) {
    fs.writeFileSync(README_PATH, readme);
    console.log('README가 최신 피드로 갱신되었습니다.');
  } else {
    console.log('변경 사항이 없어 README를 수정하지 않았습니다.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
