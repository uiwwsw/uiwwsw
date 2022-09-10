import { TAG } from '@/di/tag';
import { TOKEN } from '@/di/token';
import { Essay } from '@/domain/essay';
import { injected, tagged } from 'brandi';
import { ApiService } from './ports';

export type FetchEssays = () => Promise<Essay[]>;
export function fetchEssaysUseCase(apiService: ApiService): FetchEssays {
	const essays = apiService.fetchEssays();
	const useCase = () => essays;
	return useCase;
}
injected(fetchEssaysUseCase, TOKEN.apiService);
tagged(fetchEssaysUseCase, TAG.mock);
