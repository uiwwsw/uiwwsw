/*
	This module is used by the /todos endpoint to
	make calls to api.svelte.dev, which stores todos
	for each user. The leading underscore indicates that this is
	a private module, _not_ an endpoint — visiting /todos/_api
	will net you a 404 response.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

import OpenWeatherMap from 'openweathermap-ts';

import type { Weather } from 'src/architecture/weather/domain/weather';

const base = 'https://api.svelte.dev';

export function api(method: string, resource: string, data?: Record<string, unknown>) {
	return fetch(`${base}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}

export function weatherApi(data?: Weather) {
	return fetch(
		'https://api.openweathermap.org/data/2.5/weather?lat=37.566535&lon=126.977969&appid=d5d1fbb0ae319cd00ea307d004a9589b',
		{
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			},
			body: data && JSON.stringify(data)
		}
	);
}
// export function portfolioApi(data?: Portfolio[]) {
// 	return fetch('https://api.github.com/users/uiwwsw/repos', {
// 		method: 'GET',
// 		headers: {
// 			'content-type': 'application/json'
// 		},
// 		body: data && JSON.stringify(data)
// 	});
// }
