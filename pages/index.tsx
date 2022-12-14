import { container } from '@/di/container';
import { TOKEN } from 'architecture/di/token';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

function Home({
	portfolios,
	weather,
	essays,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<div>
				<Head>
					<title>Create Next App</title>
					<meta name='description' content='Generated by create next app' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<div className='ddd'>dawdawd</div>
			</div>
			<style jsx>
				{`
					div {
						font-size: 30px;
						.ddd {
							color: #fff;
						}
					}
				`}
			</style>
		</>
	);
}
export async function getServerSideProps() {
	const fetchEssays = container.get(TOKEN.fetchEssaysUseCase);
	const fetchPortfolios = container.get(TOKEN.fetchPortfoliosUseCase);
	const fetchWeather = container.get(TOKEN.fetchWeatherUseCase);
	const [essays, portfolios, weather] = await Promise.all([
		fetchEssays(),
		fetchPortfolios(),
		fetchWeather(),
	]);
	return {
		props: {
			portfolios,
			weather,
			essays,
		},
	};
}
// function getServerSideProps
// Home.getInitialProps = async (ctx: NextPageContext) => {
//   // const { id } = ctx.query;

//   const {fetchEssays,fetchPortfolios,fetchWeather} = container.get(apiServiceToken);
//   const [essays, portfolios, weather] = await Promise.all([fetchEssays(),fetchPortfolios(),fetchWeather()])

//   return {
//     essays,
//     portfolios,
//     weather
//   };
// };
export default Home;
