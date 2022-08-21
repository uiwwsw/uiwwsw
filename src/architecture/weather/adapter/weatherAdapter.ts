import { TOKENS } from '$di';
import { injected } from 'brandi';
import { getLocationWeatherUseCase } from '../application/getLocationWeather';
import { getWeatherFeelingUseCase } from '../application/getWeatherFeeling';
import type { Weather } from '../domain/weather';
import type { WeatherService } from '../service/weatherService';
import OpenWeatherMap from 'openweathermap-ts';
export class WeatherAdapter implements WeatherService {
	openWeatherMap: OpenWeatherMap;
	constructor() {
		this.openWeatherMap = new OpenWeatherMap({
			apiKey: 'd5d1fbb0ae319cd00ea307d004a9589b',
			language: 'kr',
			units: 'metric'
		});
	}

	getLocationWeather(cityName: string) {
		return getLocationWeatherUseCase(this.openWeatherMap)(cityName);
	}

	getWeatherFeeling(weather: Weather) {
		return getWeatherFeelingUseCase()(weather);
	}
}
// injected(WeatherAdapter, TOKENS.openWeatherMap);
