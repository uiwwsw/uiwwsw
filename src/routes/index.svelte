<script context="module" lang="ts">
  import type { WeatherService } from "$architecture/weather/service/weatherService";
  import { WeatherModule,PortfolioModule, EssayModule } from "$di";

  export const load = async () => {
    const weatherModule:WeatherService = WeatherModule;
    const portfolioModule:PortfolioService = PortfolioModule;
    const essayModule:EssayService = EssayModule;

    const [weather, portfolios] = await Promise.all([weatherModule.getLocationWeather('seoul'), portfolioModule.getPortfolios(20)])
    return {
      props: {
        weatherModule,
        essayModule,
        weather,
        portfolios
      }
    };
  };
</script>

<script lang="ts">
import type { Weather } from "$architecture/weather/domain/weather";
import type { PortfolioService } from "$architecture/portfolio/service/portfolioService";
import { goto } from "$app/navigation";
import type { EssayService } from "$architecture/essay";
import type { Portfolio } from "$architecture/portfolio";

  export let weather:Weather;
  export let portfolios:Portfolio[];
  export let weatherModule:WeatherService;
  export let essayModule:EssayService;
  const dd3213dd = essayModule.getEssays(5);
  // (async function () {
  //   console.log(await dd3213dd)
  // }())
  // console.log(weatherModule.getWeatherFeeling(weather),portfolios)
</script>

<svelte:head>
	<title>메인</title>
	<meta name="description" content="uiwwsw 메인" />
	<meta name="keywords" content="uiwwsw, portfolio, frontend, developer, 포트폴리오, 프론트엔드, 개발자" />
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

<div>
  {portfolios.length}
  {#if portfolios.length}
    {portfolios[0].fullName}
  {/if}
  <!-- {#await portfolios}
    잠시
  {:then dwww } 
    {dwww[0].fullName}
  {/await} -->
  <button on:click={()=>goto('/portfolio')}>dddd</button>
</div>

<style lang="scss">
  
</style>