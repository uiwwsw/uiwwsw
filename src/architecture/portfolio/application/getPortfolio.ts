import type { Portfolio } from '../domain/portfolio';

export type GetPortfolioUseCase = (repositoryUrl: string) => Portfolio | undefined;
export function getPortfolioUseCase(portfolios: Portfolio[]): GetPortfolioUseCase {
	const useCase = (repositoryUrl: string) => {
		return portfolios.find((x) => x.repositoryUrl === repositoryUrl);
	};
	return useCase;
}

// https://github.com/uiwwsw/ux-scroll
