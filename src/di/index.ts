import type { PortfolioService } from '$architecture/portfolio/service/portfolioService';
import type { WeatherService } from '$architecture/weather/service/weatherService';
import { Container, token } from 'brandi';

export const TOKENS = {
	weatherService: token<WeatherService>('weatherService'),
	portfolioService: token<PortfolioService>('portfolioService')
};

export const container = new Container();
