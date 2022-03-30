import React, { Fragment } from "react";
import { connect } from "react-redux";
import ProductsStyles from "components/Styles/Home/Products/products.styled";
import { products } from "./data.example";
import { ReactPagination } from "./pagination.ui";

export const ProductsUI = (props: any) => {
	const { lang } = props;
	const productsSort = [...products, ...products]
		.slice(0, 16 * 10)
		.filter((item: { saleCount: number }) => item.saleCount > 2000)
		.sort((item1: any, item2: any) => item2.saleCount - item1.saleCount);
	return (
		<Fragment>
			<ProductsStyles.Title>Các sản phẩm hot 🔥</ProductsStyles.Title>
			<ReactPagination pages={productsSort} />
		</Fragment>
	);
};

const mapStateToProps = (state: any) => ({
	lang: state.lang
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsUI);
