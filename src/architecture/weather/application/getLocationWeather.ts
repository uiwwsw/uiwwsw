import type OpenWeatherMap from 'openweathermap-ts';
import type { CurrentResponse } from 'openweathermap-ts/dist/types';
export type GetLocationWeatherUseCase = (cityName: string) => Promise<CurrentResponse>;
export function getLocationWeatherUseCase(
	openweathermap: OpenWeatherMap
): GetLocationWeatherUseCase {
	const useCase = async (cityName: string) => {
		return openweathermap.getCurrentWeatherByCityName({ cityName });
	};
	return useCase;
}
