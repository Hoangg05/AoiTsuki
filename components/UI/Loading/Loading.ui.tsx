import LoadingStyles from "components/Styles/Loading/index.styled";
import type { NextPage } from "next";
import Head from "next/head";
const LoadingUI: NextPage = () => {
	return (
		<LoadingStyles.Main>
			<Head>
				<title>Loading | Aoi Tsuki</title>
			</Head>
			<LoadingStyles.Loader />
		</LoadingStyles.Main>
	);
};

export default LoadingUI;
