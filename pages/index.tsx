import HomeMainUI from "components/UI/Home/index.ui";
import LoadingUI from "components/UI/Loading/Loading.ui";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home: NextPage = () => {
	const { language, translations } = useSelector(
		(state: any) => state.language
	);
	const [lang, setLang] = useState<any>(null);
	useEffect(() => {
		if (language) {
			setLang(translations[language].header);
		}
	}, [language, translations]);
	if (!lang) return <LoadingUI />;
	return (
		<Fragment>
			<Head>
				<title>{lang.header.title}</title>
			</Head>
			<HomeMainUI />
		</Fragment>
	);
};

export default Home;
