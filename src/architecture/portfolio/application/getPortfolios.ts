import type { Portfolio } from '../domain/portfolio';

export type GetPortfoliosUseCase = (length: number, index?: number) => Portfolio[];
export function getPortfoliosUseCase(portfolios: Portfolio[]): GetPortfoliosUseCase {
	const _portfolios = portfolios.sort(() => Math.random() - 0.5);
	let _index: number;
	const useCase = (length: number, index?: number) => {
		if (index === undefined) {
			if (isNaN(_index)) _index = 0;
			else _index += length;
		} else {
			_index = index;
		}
		return _portfolios.slice(_index, length + _index);
	};
	return useCase;
}
