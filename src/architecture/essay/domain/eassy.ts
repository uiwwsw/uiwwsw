// export class Essay {
// 	readonly regExp = /#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9]+/g;
// 	readonly narrative: string;
// 	readonly hash: string[];
// 	constructor(private readonly _: string) {
// 		this.narrative = _.replace(/#/g, '');
// 		this.hash = [..._.matchAll(this.regExp)].map((x) => x[0]);
// 	}
// }
const kakaoStoryFeed = {
	id: '_aVW4Z8.2Coqd3n9U29',
	url: 'https://story.kakao.com/_aVW4Z8/2Coqd3n9U29',
	media_type: 'NOTE',
	created_at: '2022-07-22T15:03:41Z',
	content:
		'기대치의 문제였구나. 나는 누군갈 이만큼은 하겠다고 생각하고 그게 깨지면 배신감을 느낀것 같다.\n역시 상황을 글로쓰면 너무 하찮아진다.',
	comment_count: 0,
	like_count: 0,
	permission: 'ONLY_ME'
};
export type KakaoStoryFeed = typeof kakaoStoryFeed;
export interface Essay {
	readonly id: string;
	readonly url: string;
	readonly content: string;
	readonly createdAt: Date;
	readonly hash: string[];
}
