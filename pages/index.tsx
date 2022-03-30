import HomeMainUI from "components/UI/Home/index.ui";
import LoadingUI from "components/UI/Loading/Loading.ui";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Config } from "store/slices/seo.slice";

const Home: NextPage = (props: any) => {
	const { language, translations } = props.lang;
	const [lang, setLang] = useState<any>(null);
	useEffect(() => {
		if (language) {
			setLang(translations[language].header);
		}
	}, [language, translations]);
	return (
		<Fragment>
			{lang && (
				<Head>
					<title>{lang.header.title}</title>
					<meta name='description' content='IDK :>' />
					<meta property='og:title' content="Aoi Tsuki's website" />
					<meta property='og:description' content='IDK :>' />
					<meta property='og:image' content='/logo.jpg' />
					<meta property='og:url' content='https://aoitsuki.com' />
					<meta property='og:type' content='website' />
					<meta property='og:site_name' content='Aoi Tsuki' />
				</Head>
			)}
			<HomeMainUI />
		</Fragment>
	);
};

const mapStateToProps = (state: any) => ({
	lang: state.language
});

const mapDispatchToProps = {
	Config
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
