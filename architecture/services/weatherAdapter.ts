import { WeatherService } from "@/application/ports";
import { Weather } from "@/domain/weather";
import OpenWeatherMap from "openweathermap-ts";

export function useWeather(): WeatherService {
  return {
    async fetchData(): Promise<Weather> {
      const openweathermap = new OpenWeatherMap({
        apiKey: "d5d1fbb0ae319cd00ea307d004a9589b",
        language: "kr",
        units: "metric",
      });
      return openweathermap.getCurrentWeatherByCityName({ cityName: "seoul" });
    },
  };
}
