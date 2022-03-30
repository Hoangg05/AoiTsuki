import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";

function ProductUI() {
	const router = useRouter();
	const { productKey } = router.query;
	return (
		<Fragment>
			<Head>
				<title>{productKey} | Aoi Tsuki</title>
			</Head>
			<h1>{productKey}</h1>
			<Link as='/' href='/' passHref replace>
				Return
			</Link>
		</Fragment>
	);
}

export default ProductUI;
