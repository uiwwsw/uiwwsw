// import type { LayoutLoad } from './$types';

export const load = async () => {
	// await container.bind(TOKENS.openWeatherMap).toConstant(
	// 	new OpenWeatherMap({
	// 		apiKey: 'd5d1fbb0ae319cd00ea307d004a9589b',
	// 		language: 'kr',
	// 		units: 'metric'
	// 	})
	// );
};

// import { container, TOKEN } from '$lib/di';

// export const load: LayoutLoad = ({ data }) => {
// 	// 서버에서 받아온 Config를 DI container에 bind 해줌
// 	const { config } = data;
// 	container.bind(TOKEN.config.config).toConstant(config);
// 	const authState = container.get(TOKEN.auth.application.observeState)();
// 	// let authState = container.get(TOKEN.auth.)();
// 	return {
// 		authState
// 	};
// };
