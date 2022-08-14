import type { Essay } from '../domain/essay';

export type GetEssaysUseCase = (length: number) => Essay[] | undefined;
export function getEssaysUseCase(essaies: Essay[]): GetEssaysUseCase {
	const _essaies = essaies.sort(() => Math.random() - 0.5);
	let index: number;
	const useCase = (length: number) => {
		if (isNaN(index)) index = 0;
		else index += length;
		return _essaies.slice(index, length + index);
	};
	return useCase;
}

// https://github.com/uiwwsw/ux-scroll
