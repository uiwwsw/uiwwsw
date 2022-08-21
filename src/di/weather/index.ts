import { WeatherAdapter } from '$architecture/weather/adapter/weatherAdapter';
import { container } from '$di/container';
import { TOKENS } from '$di/token';
// import OpenWeatherMap from 'openweathermap-ts';
// container.bind(TOKENS.openWeatherMap).toConstant(
// 	new OpenWeatherMap({
// 		apiKey: 'd5d1fbb0ae319cd00ea307d004a9589b',
// 		language: 'kr',
// 		units: 'metric'
// 	})
// );
container.bind(TOKENS.weatherService).toInstance(WeatherAdapter).inContainerScope();

// const WeatherModule = container.get(TOKENS.weatherService);
// export { WeatherModule };
