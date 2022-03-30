import "styles/globals.css";
import type { AppProps } from "next/app";
import { store, wrapper } from "store/store.store";
import { Provider } from "react-redux";
import HeaderUI from "components/UI/Header/header.ui";
import FooterUI from "components/UI/Footer/footer.ui";

export async function getInitialProps({ Component, ctx }: any): Promise<any> {
	const pageProps = Component.getInitialProps
		? await Component.getInitialProps(ctx)
		: {};
	return { pageProps: pageProps };
}

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<Provider store={store}>
			<HeaderUI />
			<Component {...pageProps} router={router.route} />
			<FooterUI />
		</Provider>
	);
}

export default wrapper.withRedux(MyApp);
