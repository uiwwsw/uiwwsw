// export enum WEATHER_FEELING {
// 	Thunderstorm = '뇌우 번개 좌절 회색',
// 	Snow = '눈 순백 흰색',
// 	Rain = '비 슬픔 우울 무지개',
// 	Drizzle = '이슬비 진지 잔잔 무색',
// 	Clouds = '구름 하늘 온화 짙은',
// 	Clear = '맑음 행복 웃음 환희'
// }
export enum WEARHER_MAIN {
	Thunderstorm = 'Thunderstorm',
	Drizzle = 'Drizzle',
	Rain = 'Rain',
	Snow = 'Snow',
	Atmosphere = 'Atmosphere',
	Clear = 'Clear',
	Clouds = 'Clouds'
}
// export enum WEATHER_MAIN {
// 	Thunderstorm = 'Thunderstorm',
// 	Drizzle = 'Drizzle',
// 	Rain = 'Rain',
// 	Snow = 'Snow',
// 	Clear = 'Clear',
// 	Clouds = 'Clouds'
// }
// export type WeatherMain = WEATHER_MAIN | string;
export type Weather = {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
} & {
	visibility?: number;
};
