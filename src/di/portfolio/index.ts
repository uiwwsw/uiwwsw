import { PortfolioAdapter } from '$architecture/portfolio/adapter/portfolioAdapter';
import { container } from '$di/container';
import { TOKENS } from '$di/token';

container.bind(TOKENS.portfolioService).toInstance(PortfolioAdapter).inContainerScope();

// const PortfolioModule = container.get(TOKENS.portfolioService);
// export { PortfolioModule };
