import type { Portfolio } from '../domain/portfolio';

export type GetPortfolioUseCase = (repositoryUrl: string) => Portfolio | undefined;
export function getPortfolioUseCase(portfolios: Portfolio[]): GetPortfolioUseCase {
	const useCase = (repositoryUrl: string) =>
		portfolios.find((x) => x.repositoryUrl === repositoryUrl);
	return useCase;
}
