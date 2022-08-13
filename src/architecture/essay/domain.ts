export class Essay {
	readonly regExp = /#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9]+/g;
	readonly narrative: string;
	readonly hash: string[];
	constructor(private readonly _: string) {
		this.narrative = _.replace(/#/g, '');
		this.hash = [..._.matchAll(this.regExp)].map((x) => x[0]);
	}
}
