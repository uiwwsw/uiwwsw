import type { EssayService, PortfolioService } from '$architecture';
import type { WeatherService } from '$architecture/weather/service/weatherService';
import {
	container,
	TOKENS
	// EssayModule,
	// PortfolioModule,
	// WeatherModule,
	// OpenWeatherMapModule
} from '$di';

export const load = async () => {
	const weatherModule: WeatherService = container.get(TOKENS.weatherService);
	const portfolioModule: PortfolioService = container.get(TOKENS.portfolioService);
	const essayModule: EssayService = container.get(TOKENS.essayService);
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
