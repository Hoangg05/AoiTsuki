import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) =>
						sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Dancing+Script&family=Fugaz+One&family=Noto+Sans+JP:wght@300&family=Noto+Sans+KR:wght@300&family=Nunito:wght@200&family=Quicksand:wght@300;400&family=Source+Code+Pro:wght@300&family=Source+Sans+Pro:wght@200;300;400&family=Ubuntu:ital,wght@0,300;0,500;1,300;1,500&display=swap'
						rel='stylesheet'
					/>
					<meta name='description' content='IDK :>?' />
					<link
						rel='icon'
						sizes='192x192'
						href='/logo.jpg'
						type='image/png'
					/>
					<meta name='description' content="Aoi Tsuki's website" />
					<meta property='og:title' content="Aoi Tsuki's website" />
					<meta
						property='og:description'
						content="Aoi Tsuki's website"
					/>
					<meta property='og:image' content='/logo.jpg' />
					<meta
						property='og:url'
						content='https://aoitsuki.vercel.app'
					/>
					<meta property='og:type' content='website' />
					<meta property='og:site_name' content='Aoi Tsuki' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
