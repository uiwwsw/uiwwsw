import type { EssayService } from '$architecture/essay';
import type { PortfolioService } from '$architecture/portfolio';
import type { WeatherService } from '$architecture/weather';
import { token } from 'brandi';

export const TOKENS = {
	weatherService: token<WeatherService>('weatherService'),
	portfolioService: token<PortfolioService>('portfolioService'),
	essayService: token<EssayService>('essayService')
};
