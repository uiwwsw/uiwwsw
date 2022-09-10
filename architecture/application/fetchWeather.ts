import { TAG } from '@/di/tag';
import { TOKEN } from '@/di/token';
import { Weather } from '@/domain/weather';
import { injected, tagged } from 'brandi';
import { ApiService } from './ports';

export type FetchWeather = () => Promise<Weather>;
export function fetchWeatherUseCase(apiService: ApiService): FetchWeather {
	const weather = apiService.fetchWeather();
	const useCase = () => weather;
	return useCase;
}
injected(fetchWeatherUseCase, TOKEN.apiService);
tagged(fetchWeatherUseCase, TAG.mock);
