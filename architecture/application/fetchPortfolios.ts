import { TAG } from '@/di/tag';
import { TOKEN } from '@/di/token';
import { Portfolio } from '@/domain/portfolio';
import { injected, tagged } from 'brandi';
import { ApiService } from './ports';

export type FetchPortfolios = () => Promise<Portfolio[]>;
export function fetchPortfoliosUseCase(
	apiService: ApiService
): FetchPortfolios {
	const portfolios = apiService.fetchPortfolios();
	const useCase = () => portfolios;
	return useCase;
}
injected(fetchPortfoliosUseCase, TOKEN.apiService);
tagged(fetchPortfoliosUseCase, TAG.mock);
