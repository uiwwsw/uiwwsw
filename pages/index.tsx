import { convertGithubReposToPortfolios } from "@/domain/portfolio";
import { useGithubRepoService } from "@/services/githubRepoAdapter";
import { usePortfolioService } from "@/services/portfolioStorageAdapter";
import type { InferGetServerSidePropsType } from "next";
import { useEffect } from "react";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { portfolio, updatePortfolio } = usePortfolioService();
  useEffect(() => {
    updatePortfolio(data);
  }, [data]);
  // useMemo(() => {
  //   // setTimeout(() => {
  //   //   portfolio.updatePortfolio([]);
  //   // }, 1000);
  //   console.log("ddddd");
  // }, []);
  console.log(data, portfolio);
  return (
    <div>
      {data?.map((x, i) => (
        <div key={i}>{x.fullName}</div>
      ))}
    </div>
  );
};
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const githubRepoService = useGithubRepoService();
  const res = await githubRepoService.fetchData();
  const data = convertGithubReposToPortfolios(res);

  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
