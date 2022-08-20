<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { weather, weatherModule, portfolioModule } = data;

	const dddd = portfolioModule.getPortfolios(20, 0);
	(async function () {
		console.log(await dddd);
	})();
	console.log(weatherModule.getWeatherFeeling(weather));
</script>

<svelte:head>
	<title>포트폴리오</title>
	<meta name="description" content="uiwwsw 포트폴리오" />
	<meta
		name="keywords"
		content="uiwwsw, portfolio, frontend, developer, 포트폴리오, 프론트엔드, 개발자"
	/>
</svelte:head>

<div>
	메인{weather.weather[0].description}
	{#await dddd}
		잠시
	{:then dwww}
		{dwww[0].fullName}
	{/await}
</div>
