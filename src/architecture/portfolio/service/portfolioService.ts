import type { GetPortfolioUseCase } from '../application/getPortfolio';
import type { GetPortfoliosUseCase } from '../application/getPortfolios';
import type { GithubRepo, Portfolio } from '../domain/portfolio';

export interface PortfolioService {
	readonly githubRepos: Promise<GithubRepo[]>;
	readonly portfolios: Promise<Portfolio[]>;
	// readonly _getMorePortfolios: Promise<GetPortfoliosUseCase>;
	getPortfolio(repositoryUrl: string): Promise<ReturnType<GetPortfolioUseCase>>;
	getPortfolios(length: number): Promise<ReturnType<GetPortfoliosUseCase>>;
	// getMorePortfolios(length: number): Promise<ReturnType<GetPortfoliosUseCase>>;
}

// const d = getLocationWeatherUseCase
