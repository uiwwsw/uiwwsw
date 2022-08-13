import type { WeatherService } from '$architecture/weather/service/weatherService';
import { Container, token } from 'brandi';

export const TOKENS = {
	weatherService: token<WeatherService>('weatherService')
};

export const container = new Container();
