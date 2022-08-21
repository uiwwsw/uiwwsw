import type { PortfolioService } from '$architecture';
import type { WeatherService } from '$architecture/weather/service/weatherService';
import { container, TOKENS } from '$di';

export const load = async () => {
	const weatherModule: WeatherService = container.get(TOKENS.weatherService);
	const portfolioModule: PortfolioService = container.get(TOKENS.portfolioService);
	const weather = await weatherModule.getLocationWeather('seoul');

	return {
		portfolioModule,
		weatherModule,
		weather
	};
};
