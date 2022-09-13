import { FetchEssays } from '@/application/fetchEssays';
import { FetchPortfolios } from '@/application/fetchPortfolios';
import { FetchWeather } from '@/application/fetchWeather';
import { ApiService, StorageService } from '@/application/ports';
import { token } from 'brandi';

export const TOKEN = {
	fetchPortfoliosUseCase: token<FetchPortfolios>('FetchPortfolios'),
	fetchWeatherUseCase: token<FetchWeather>('FetchWeather'),
	fetchEssaysUseCase: token<FetchEssays>('FetchEssays'),
	apiService: token<ApiService>('ApiService'),
	storageService: token<StorageService>('StorageService'),
};
