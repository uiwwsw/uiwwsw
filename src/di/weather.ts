import { WeatherAdapter } from '$architecture/weather/adapter/weatherAdapter';
import { container, TOKENS } from '$di';

container.bind(TOKENS.weatherService).toInstance(WeatherAdapter).inTransientScope();

const weatherModule = container.get(TOKENS.weatherService);
export { weatherModule };
