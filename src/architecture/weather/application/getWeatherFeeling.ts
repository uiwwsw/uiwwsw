import { WEARHER_MAIN, type Weather } from '../domain/weather';
export type GetWeatherFeelingUseCase = (weather: Weather) => WEARHER_MAIN;
export function getWeatherFeelingUseCase(): GetWeatherFeelingUseCase {
	const useCase = (weather: Weather) => {
		if (weather.weather[0].id < 300) return WEARHER_MAIN.Thunderstorm;
		if (weather.weather[0].id < 400) return WEARHER_MAIN.Drizzle;
		if (weather.weather[0].id < 500) return WEARHER_MAIN.Rain;
		if (weather.weather[0].id < 600) return WEARHER_MAIN.Snow;
		if (weather.weather[0].id < 700) return WEARHER_MAIN.Atmosphere;
		if (weather.weather[0].id === 800) return WEARHER_MAIN.Clear;
		return WEARHER_MAIN.Clouds;
	};
	return useCase;
}
