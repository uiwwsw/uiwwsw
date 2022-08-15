import UxHashSample from '$images/ux-hash-sample.gif';
import { getPortfolioUseCase } from '../application/getPortfolio';
import { getPortfoliosUseCase } from '../application/getPortfolios';
import type { GithubRepo, Portfolio } from '../domain/portfolio';
import type { PortfolioService } from '../service/portfolioService';
export class PortfolioAdapter implements PortfolioService {
	readonly githubRepos: Promise<GithubRepo[]> = fetch('https://api.github.com/users/uiwwsw/repos', {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	}).then(async (x) => await x.json());

	readonly portfolios = this.githubRepos.then((githubRepos) => {
		return [
			...githubRepos.map((githubRepo) => {
				const index = this.#portfolios.findIndex((x) => x.fullName === githubRepo.full_name);
				const portfolio = index >= 0 ? this.#portfolios.splice(index, 1)[0] : {};
				return {
					fullName: githubRepo.full_name,
					repositoryUrl: githubRepo.html_url,
					desc: githubRepo.description,
					...portfolio
				};
			}),
			...this.#portfolios
		];
		// ...this.#portfolios.find((y) => y.fullName === x.full_name)
	});

	// readonly portfolios = this.githubRepos.then((githubRepos) => {
	// 	const portfolios = githubRepos.map((x) => ({
	// 		fullName: x.full_name,
	// 		repositoryUrl: x.html_url,
	// 		desc: x.description
	// 	}));
	// 	return portfolios;
	// 	// ...this.#portfolios.find((x) => x.fullName === portfolio.fullName)
	// });

	// readonly sortPortfolios = (async () => getMorePortfoliosUseCase(await this.portfolios))();
	// readonly _getMorePortfolios =

	#portfolios: Portfolio[] = [
		{
			fullName: 'uiwwsw/ux-scroll',
			previewUrl: 'https://codepen.io/uiwwsw/full/rNGqGgG/',
			desc: '스크롤 라이브러리'
		},
		{
			fullName: 'uiwwsw/make-wire',
			youtubeUrl: 'Wp9AG1U_qmI',
			desc: '온라인 파워포인트'
		},
		{
			fullName: 'uiwwsw/ux-hash',
			img: UxHashSample,
			desc: '심플한 에디터'
		},
		{
			fullName: 'uprise-fin/heybit-ui-styled-components',
			previewUrl: 'https://uprise-fin.github.io/heybit-ui-styled-components/',
			desc: 'Components 라이브러리'
		}
	];

	// async getMorePortfolios(length: number) {
	// 	return (await this._getMorePortfolios)(length);
	// }

	// getMorePortfolios = (() => {
	// 	const msd = (async () => getMorePortfoliosUseCase(await this.portfolios))();
	// 	return async (length: number) => (await msd)(length);
	// })();
	// _getMorePortfolios = (async () => getMorePortfoliosUseCase(await this.portfolios))();
	// getMorePortfolios = async (length: number) => (await this._getMorePortfolios)(length);
	// async getPortfolios(length: number) {
	// 	return getPortfoliosUseCase(await this.portfolios)(length);
	// }
	_getPortfolios = (async () => getPortfoliosUseCase(await this.portfolios))();
	getPortfolios = async (length: number, index?: number) =>
		(await this._getPortfolios)(length, index);
	// async getPortfolio(repositoryUrl: string) {
	// 	return getPortfolioUseCase(await this.portfolios)(repositoryUrl);
	// }
	_getPortfolio = (async () => getPortfolioUseCase(await this.portfolios))();
	getPortfolio = async (repositoryUrl: string) => (await this._getPortfolio)(repositoryUrl);
}
