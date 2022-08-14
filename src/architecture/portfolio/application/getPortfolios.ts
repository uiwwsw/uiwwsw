import type { Portfolio } from '../domain/portfolio';

export type GetPortfoliosUseCase = (length: number) => Portfolio[];
export function getPortfoliosUseCase(portfolio: Portfolio[]): GetPortfoliosUseCase {
	const _portfolios = portfolio.sort(() => Math.random() - 0.5);
	let index: number;
	console.log('23jkldjalwdjkawdaw');
	const useCase = (length: number) => {
		if (isNaN(index)) index = 0;
		else index += length;
		console.log(index, 'dajwkdjawlkdjkawdawd');
		return _portfolios.slice(index, length);
	};
	return useCase;
}
