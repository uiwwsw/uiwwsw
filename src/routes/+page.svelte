<script lang="ts">
	// throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
	// Suggestion (check code before using, and possibly convert to data.X access later):
	import type { PageData } from './$types';
	export let data: PageData;
	const { weather, portfolios, weatherModule, essayModule } = data;

	import Scroll from '../ui/scroll.svelte';

	const dd3213dd = essayModule.getEssays(5);
	// (async function () {
	//   console.log(await dd3213dd)
	// }())
	// console.log(weatherModule.getWeatherFeeling(weather),portfolios)
</script>

<svelte:head>
	<title>메인</title>
	<meta name="description" content="uiwwsw 메인" />
	<meta
		name="keywords"
		content="uiwwsw, portfolio, frontend, developer, 포트폴리오, 프론트엔드, 개발자"
	/>
	<!-- meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.auto-invest') as string
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('seo.keywords') as string
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: this.$t('seo.heybit') as string
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$config.$get('baseUrl') + this.$route.fullPath
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('seo.redesign') as string
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.$t('seo.heybit') as string
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('seo.auto-invest') as string
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://heybit.io/symbol/og-logo.png?t=20201229'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '600'
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '600'
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/png'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:url',
          content: this.$config.$get('baseUrl')
        },
        {
          name: 'twitter:site',
          content: '@heybit_io'
        },
        {
          name: 'twitter:title',
          content: this.$t('pages.index-page.meta.og:title') as string
        },
        {
          name: 'twitter:description',
          content: this.$t('pages.index-page.meta.og:description') as string
        },
        {
          name: 'twitter:image:src',
          content: 'https://heybit.io/symbol/og-logo.png'
        },
        ...i18nSeo.meta!
      ], -->
</svelte:head>

<div class="portfolio-grid">
	{#each portfolios as portfolio}
		<div class="portfolio-grid__item">
			{#if portfolio.youtubeUrl}
        <iframe src="https://www.youtube.com/embed/{portfolio.youtubeUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {:else if portfolio.img}
        <img src={portfolio.img} alt={portfolio.desc}>
      {:else}
      {portfolio.fullName}
        {portfolio.desc}
      {/if}
		</div>
	{/each}
</div>
{#each dd3213dd as essay}
	<div>{essay.content}</div>
{/each}
<Scroll />

<style lang="scss">
	.portfolio-grid {
		display: grid;
		grid-template-columns: calc(50% - 5px) calc(50% - 5px);
		grid-template-rows: 1fr;
		gap: 10px;
		animation: gap 2s;
		@keyframes gap {
			0% {
				gap: 0;
			}
			100% {
				gap: 10px;
			}
		}

		&__item {
			position: relative;
			padding: 10px;
			&:nth-child(3n) {
				grid-column: 1 / 3;
				grid-row: span 15;
			}
			&::before {
				content: '';
				position: absolute;
				inset: 0;
				border: 1px solid var(--solid);
				border-radius: 6px;
				opacity: 0.3;
				pointer-events: none;
			}
		}
	}
</style>
