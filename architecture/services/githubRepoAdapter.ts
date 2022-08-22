import { GithubRepoService } from "@/application/ports";
import { GithubRepo } from "@/domain/portfolio";
export function useGithubRepo(): GithubRepoService {
  return {
    async fetchData(): Promise<GithubRepo[]> {
      const data = await fetch("https://api.github.com/users/uiwwsw/repos", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const githubRepos = (await data.json()) as GithubRepo[];
      return githubRepos;
    },
  };
}
