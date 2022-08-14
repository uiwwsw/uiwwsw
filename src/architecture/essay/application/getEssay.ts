import type { Essay } from '../domain/eassy';

export type GetEssayUseCase = (id: string) => Essay | undefined;
export function getEssayUseCase(essaies: Essay[]): GetEssayUseCase {
	const useCase = (id: string) => {
		return essaies.find((x) => x.id === id);
	};
	return useCase;
}

// https://github.com/uiwwsw/ux-scroll
