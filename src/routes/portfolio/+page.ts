import type { WeatherService } from '$architecture/weather/service/weatherService';
import { WeatherModule } from '$di/weather';
import { PortfolioModule } from '$di/portfolio';
import type { PortfolioService } from '$architecture';

export const load = async () => {
	const weatherModule: WeatherService = WeatherModule;
	const portfolioModule: PortfolioService = PortfolioModule;
	const weather = await weatherModule.getLocationWeather('seoul');

	return {
		portfolioModule,
		weatherModule,
		weather
	};
};
