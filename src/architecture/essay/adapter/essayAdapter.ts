import type { KakaoStoryFeed } from '../domain/eassy';

export class EssayAdapter {
	kakaoStoryFeeds: Promise<KakaoStoryFeed[]> = fetch(
		'https://kapi.kakao.com/v1/api/story/mystories',
		{
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer -TLySgNhIN5mZnuTgn5er2LtqJsgLb2YnEyKo4R-Cj102QAAAYKa25kD'
			}
		}
	).then(async (x) => await x.json());
}
