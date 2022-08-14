import type { GetPortfolioUseCase } from '../application/getPortfolio';
import type { GetPortfoliosUseCase } from '../application/getPortfolios';
import type { GithubRepo, Portfolio } from '../domain/portfolio';

export interface PortfolioService {
	githubRepos: Promise<GithubRepo[]>;
	portfolios: Promise<Portfolio[]>;
	getPortfolio(repositoryUrl: string): Promise<ReturnType<GetPortfolioUseCase>>;
	getPortfolios(length: number): Promise<ReturnType<GetPortfoliosUseCase>>;
}

// const d = getLocationWeatherUseCase
