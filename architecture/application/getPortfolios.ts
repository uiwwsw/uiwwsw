import {
  convertGithubReposToPortfolios,
  GithubRepo,
  Portfolio,
} from "@/domain/portfolio";
import { useGithubRepoService } from "@/services/githubRepoAdapter";
import { usePortfolioService } from "@/services/portfolioStorageAdapter";
import { GithubRepoService, PortfolioStorageService } from "./ports";

export function useGetPortfolios() {
  const portfolioService: PortfolioStorageService = usePortfolioService();
  const githubRepoService: GithubRepoService = useGithubRepoService();
  function getPortfolios(getHubRepos: GithubRepo[]): Portfolio[] {
    const portfolios = convertGithubReposToPortfolios(getHubRepos);
    portfolioService.updatePortfolio(portfolios);
    return portfolios;
  }

  return { getPortfolios };
}
