import { Fragment } from "react";
import AlertUI from "./Alert/alert.ui";
import BrandsUi from "./Brands/brands.ui";
import ProductsUI from "./Products/products.ui";
const HomeMainUI = () => {
	return (
		<Fragment>
			<AlertUI />
			<BrandsUi />
			<ProductsUI />
		</Fragment>
	);
};

export default HomeMainUI;
