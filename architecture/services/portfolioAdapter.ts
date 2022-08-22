import { PortfolioService } from "@/application/ports";
import {
  convertGithubReposToPortfolios,
  GithubRepo,
  Portfolio,
} from "@/domain/portfolio";
export function usePortfolio(): PortfolioService {
  return {
    async getPortfolio(): Promise<Portfolio[]> {
      const data = await fetch("https://api.github.com/users/uiwwsw/repos", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const githubRepos = (await data.json()) as GithubRepo[];
      return convertGithubReposToPortfolios(githubRepos);
    },
  };
}
