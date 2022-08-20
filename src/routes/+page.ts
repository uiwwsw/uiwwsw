import type { EssayService, PortfolioService } from '$architecture';
import type { WeatherService } from '$architecture/weather/service/weatherService';
import { EssayModule, PortfolioModule, WeatherModule } from '$di';
import type { PageData } from '@sveltejs/kit/types/internal';

export const load = async () => {
	const weatherModule: WeatherService = WeatherModule;
	const portfolioModule: PortfolioService = PortfolioModule;
	const essayModule: EssayService = EssayModule;

	const [weather, portfolios] = await Promise.all([
		weatherModule.getLocationWeather('seoul'),
		portfolioModule.getPortfolios(20)
	]);
	return {
		weatherModule,
		essayModule,
		weather,
		portfolios
	};
};
