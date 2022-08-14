import type OpenWeatherMap from 'openweathermap-ts';
import type { GetLocationWeatherUseCase } from '../application/getLocationWeather';
import type { GetWeatherFeelingUseCase } from '../application/getWeatherFeeling';
import type { Weather } from '../domain/weather';
export interface WeatherService {
	openWeatherMap: OpenWeatherMap;
	getLocationWeather(cityName: string): ReturnType<GetLocationWeatherUseCase>;
	getWeatherFeeling(weather: Weather): ReturnType<GetWeatherFeelingUseCase>;
}

// const d = getLocationWeatherUseCase
