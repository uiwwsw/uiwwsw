import type { GetPortfolioUseCase } from '../application/getPortfolio';

export interface PortfolioService {
	getPortfolio(): ReturnType<GetPortfolioUseCase>;
}

// const d = getLocationWeatherUseCase
