import { ApiAdapter } from '@/adapter/apiAdapter';
import { ApiMockAdapter } from '@/adapter/apiMockAdapter';
import { fetchEssaysUseCase } from '@/application/fetchEssays';
import { fetchPortfoliosUseCase } from '@/application/fetchPortfolios';
import { fetchWeatherUseCase } from '@/application/fetchWeather';
import { Container } from 'brandi';
import { TAG } from './tag';
import { TOKEN } from './token';
export const container = new Container();

container.bind(TOKEN.apiService).toInstance(ApiAdapter).inTransientScope();
container
	.when(TAG.mock)
	.bind(TOKEN.apiService)
	.toInstance(ApiMockAdapter)
	.inTransientScope();
container
	.bind(TOKEN.fetchPortfoliosUseCase)
	.toInstance(fetchPortfoliosUseCase)
	.inTransientScope();
container
	.bind(TOKEN.fetchEssaysUseCase)
	.toInstance(fetchEssaysUseCase)
	.inTransientScope();
container
	.bind(TOKEN.fetchWeatherUseCase)
	.toInstance(fetchWeatherUseCase)
	.inTransientScope();
