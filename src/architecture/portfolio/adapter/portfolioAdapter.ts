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

	readonly portfolios = this.githubRepos.then((githubRepos) =>
		githubRepos.map((x) => {
			const portfolio: Portfolio = {
				fullName: x.full_name,
				repositoryUrl: x.html_url,
				desc: x.description
			};

			return {
				...portfolio,
				...this.#portfolios.find((x) => x.fullName === portfolio.fullName)
			};
		})
	);

	readonly getSortPortfolios = (async () => getPortfoliosUseCase(await this.portfolios))();

	#portfolios: Portfolio[] = [
		{
			// https://www.youtube.com/embed/
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
			fullName: 'uprise-fin/heybit-ui-styled-components',
			previewUrl: 'https://uprise-fin.github.io/heybit-ui-styled-components/',
			desc: 'Components 라이브러리'
		}
	];

	//https://api.github.com/users/uiwwsw
	async getPortfolios(length: number) {
		const portfolios = await this.getSortPortfolios;
		return portfolios(length);
	}
	async getPortfolio(repositoryUrl: string) {
		const portfolios = await this.portfolios;
		return getPortfolioUseCase(portfolios)(repositoryUrl);
	}
}
