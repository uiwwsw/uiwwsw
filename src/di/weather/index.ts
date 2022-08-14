import { WeatherAdapter } from '$architecture/weather/adapter/weatherAdapter';
import { container } from '$di/container';
import { TOKENS } from '$di/token';

container.bind(TOKENS.weatherService).toInstance(WeatherAdapter).inTransientScope();

const WeatherModule = container.get(TOKENS.weatherService);
export { WeatherModule };
