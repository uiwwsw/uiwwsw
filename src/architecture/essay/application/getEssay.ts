import type { Essay } from '../domain/essay';

export type GetEssayUseCase = (id: string) => Essay | undefined;
export function getEssayUseCase(essaies: Essay[]): GetEssayUseCase {
	const useCase = (id: string) => essaies.find((x) => x.id === id);
	return useCase;
}

// https://github.com/uiwwsw/ux-scroll
