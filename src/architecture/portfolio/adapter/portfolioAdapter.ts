import { getPortfolioUseCase } from '../application/getPortfolio';
import type { Portfolio } from '../domain/portfolio';
import type { PortfolioService } from '../service/portfolioService';

export class PortfolioAdapter implements PortfolioService {
	#portfolio: Portfolio[] = [
		{
			repositoryUrl: '',
			img: '',
			previewUrl: '',
			desc: ''
		}
	];
	getPortfolio() {
		return getPortfolioUseCase()(this.#portfolio);
	}
}
