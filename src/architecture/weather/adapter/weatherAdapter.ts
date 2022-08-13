import OpenWeatherMap from 'openweathermap-ts';
import { getLocationWeatherUseCase } from '../application/getLocationWeather';
import { getWeatherFeelingUseCase } from '../application/getWeatherFeeling';
import type { WEARHER_MAIN, Weather } from '../domain/weather';
import type { WeatherService } from '../service/weatherService';

export class WeatherAdapter implements WeatherService {
	#openWeatherMap = new OpenWeatherMap({
		apiKey: 'd5d1fbb0ae319cd00ea307d004a9589b',
		language: 'kr',
		units: 'metric'
	});

	// constructor(readonly openWeatherMap: OpenWeatherMap) {}

	getLocationWeather(cityName: string) {
		return getLocationWeatherUseCase(this.#openWeatherMap)(cityName);
	}

	getWeatherFeeling(weather: Weather) {
		return getWeatherFeelingUseCase()(weather);
	}
}
