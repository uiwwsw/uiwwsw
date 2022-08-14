import { PortfolioAdapter } from '$architecture/portfolio/adapter/portfolioAdapter';
import { container, TOKENS } from '$di';

container.bind(TOKENS.portfolioService).toInstance(PortfolioAdapter).inTransientScope();

const PortfolioModule = container.get(TOKENS.portfolioService);
export { PortfolioModule };
