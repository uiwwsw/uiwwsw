import type { Portfolio } from '../domain/portfolio';

export type GetMorePortfoliosUseCase = (length: number, index?: number) => Portfolio[];
export function getMorePortfoliosUseCase(portfolios: Portfolio[]): GetMorePortfoliosUseCase {
	const _portfolios = portfolios.sort(() => Math.random() - 0.5);
	let _index: number;
	const useCase = (length: number, index?: number) => {
		if (index === undefined) {
			_index = 0;
			if (isNaN(_index)) _index = 0;
			else _index += length;
		} else {
			_index = index;
		}
		return _portfolios.slice(_index, length + _index);
	};
	return useCase;
}
