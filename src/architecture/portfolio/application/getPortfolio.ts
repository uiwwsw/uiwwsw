import type { Portfolio } from '../domain/portfolio';

export type GetPortfolioUseCase = (portfolio: Portfolio[]) => Portfolio[];
export function getPortfolioUseCase(): GetPortfolioUseCase {
	const useCase = (portfolio: Portfolio[]) => {
		return portfolio.sort(() => Math.random() - 0.5);
	};
	return useCase;
}
