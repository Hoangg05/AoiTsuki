import "styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect, Fragment } from "react";
import LoadingUI from "components/UI/Loading/Loading.ui";
import IntroUI from "components/UI/Intro/Intro.ui";
import { store, wrapper } from "store/store.store";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import HeaderUI from "components/UI/Header/header.ui";
import FooterUi from "components/UI/Footer/footer.ui";

export async function getInitialProps({ Component, ctx }: any): Promise<any> {
	const pageProps = Component.getInitialProps
		? await Component.getInitialProps(ctx)
		: {};
	return { pageProps: pageProps };
}

function MyApp({ Component, pageProps, router }: AppProps) {
	const [loading, setLoading] = useState<boolean>(true);
	const [intro, setIntro] = useState<boolean>(true);
	useEffect(() => {
		if (!intro) {
			setLoading(false);
		}
	}, [intro]);
	if (intro) return <IntroUI setIntro={setIntro} />;
	return (
		<Provider store={store}>
			<AnimatePresence exitBeforeEnter>
				{!loading ? (
					<Fragment>
						<HeaderUI />
						<Component {...pageProps} router={router.route} />
						<FooterUi />
					</Fragment>
				) : (
					<LoadingUI />
				)}
			</AnimatePresence>
		</Provider>
	);
}

export default wrapper.withRedux(MyApp);
