import type { GetLocationWeatherUseCase } from '../application/getLocationWeather';
import type { GetWeatherFeelingUseCase } from '../application/getWeatherFeeling';
import type { Weather } from '../domain/weather';
export interface WeatherService {
	getLocationWeather(cityName: string): ReturnType<GetLocationWeatherUseCase>;
	getWeatherFeeling(weather: Weather): ReturnType<GetWeatherFeelingUseCase>;
}

// const d = getLocationWeatherUseCase
