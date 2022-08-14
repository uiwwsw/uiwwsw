<script context="module" lang="ts">
  import type { WeatherService } from "$architecture/weather/service/weatherService";
  import { WeatherModule } from "$di/weather";
  import { PortfolioModule } from "$di/portfolio";

  export const load = async () => {
    const weatherModule:WeatherService = WeatherModule;
    const portfolioModule:PortfolioService = PortfolioModule;
    const weather = await weatherModule.getLocationWeather('seoul')

    return {
      props: {
        portfolioModule,
        weatherModule,
        weather,
      }
    };
  };
</script>

<script lang="ts">
import type { Weather } from "$architecture/weather/domain/weather";
import type { PortfolioService } from "$architecture/portfolio/service/portfolioService";

  export let weather:Weather;
  export let weatherModule:WeatherService;
  export let portfolioModule:PortfolioService;
  const dddd = portfolioModule.getPortfolios(20);
  const tttt = portfolioModule.getPortfolios(20);
  (async function () {
    console.log(await dddd, await tttt)
  }())
  console.log(weatherModule.getWeatherFeeling(weather))
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
	메인{weather.weather[0].description}
  {#await dddd}
    잠시
  {:then dwww } 
    {dwww[0].fullName}
  {/await}
  {#await tttt}
    잠시
  {:then dwww } 
    {dwww[0].fullName}
  {/await}
</div>