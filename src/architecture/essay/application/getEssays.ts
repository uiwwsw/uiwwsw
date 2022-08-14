import type { Essay } from '../domain/eassy';

export type GetEssaysUseCase = (id: string) => Essay | undefined;
export function getEssaysUseCase(essaies: Essay[]): GetEssaysUseCase {
	const useCase = (id: string) => {
		return essaies.find((x) => x.id === id);
	};
	return useCase;
}

// https://github.com/uiwwsw/ux-scroll
