import { motion } from "framer-motion";
import styled from "styled-components";

const Border = styled(motion.div)`
	width: 100%;
	height: 100%;
	overflow-x: hidden;
`;

const Main = styled(motion.main)`
	margin-top: 40px;
	display: grid;
	place-items: center;
	grid-template-columns: repeat(auto-fit, 300px);
	grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 20px;
	padding: 20px;
`;

const Title = styled(motion.h1)`
	position: relative;
	font-size: 2rem;
	font-weight: bold;
	margin-top: 60px;
	text-align: center;
	text-transform: uppercase;
	font-family: "Quicksand", sans-serif;
	font-style: italic;
`;

const Product = styled(motion.a)`
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	position: relative;
	transition: all 0.3s ease-in-out;
	user-select: none;
	cursor: pointer;
	& * {
		font-family: "Quicksand", sans-serif;
		font-weight: bold;
	}
	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		opacity: 0.5;
		transition: all 0.3s ease-in-out;
	}
	&:hover:after {
		opacity: 0;
	}
`;

const ProductImage = styled(motion.img)`
	width: 100%;
	height: 100%;
	max-height: 405px;
	object-fit: cover;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
`;

const ProductInfo = styled(motion.div)`
	padding: 20px;
	min-height: 100px;
	& h4 {
		margin-bottom: 5px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		word-break: break-word;
		text-align: center;
	}
`;

const ProductAbout = styled(motion.ul)`
	list-style: none;
	display: grid;
	place-items: center;
	grid-template-columns: 1fr 1fr;
	height: 100%;
	width: 100%;
	& li {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}
`;

const ProductPrice = styled(motion.li)`
	color: #ee4d34;
`;

const ProductsStyles = {
	Border,
	Main,
	Title,
	Product,
	ProductImage,
	ProductInfo,
	ProductAbout,
	ProductPrice
};

export default ProductsStyles;
