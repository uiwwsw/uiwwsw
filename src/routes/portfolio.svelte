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
  const dddd = portfolioModule.getPortfolios(20,0);
  (async function () {
    console.log(await dddd)
  }())
  console.log(weatherModule.getWeatherFeeling(weather))
</script>

<svelte:head>
	<title>포트폴리오</title>
	<meta name="description" content="uiwwsw 포트폴리오" />
	<meta name="keywords" content="uiwwsw, portfolio, frontend, developer, 포트폴리오, 프론트엔드, 개발자" />
</svelte:head>

<div>
	메인{weather.weather[0].description}
  {#await dddd}
    잠시
  {:then dwww } 
    {dwww[0].fullName}
  {/await}
</div>