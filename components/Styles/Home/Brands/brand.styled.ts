import { motion } from "framer-motion";
import styled from "styled-components";

const Main = styled(motion.div)`
	margin: 0 auto;
	width: 75%;
	height: 100%;
	position: relative;
	overflow: hidden;
	border-radius: 10px;
`;
const InfoBrand = styled.div`
	width: 50%;
	height: 100%;
	padding: 20px 40px;
	display: grid;
	grid-template-rows: auto 1fr;
	background: rgba(0, 0, 0, 0.6);
	color: #fff;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
	& h1 {
		font-size: 5vw;
		font-family: "Dancing Script", sans-serif;
		white-space: nowrap;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

const Brand = styled.a`
	width: 100%;
	height: 479px;
	display: grid;
	place-items: center;
	position: relative;
	&:hover ${InfoBrand} {
		opacity: 1;
	}
`;

const Image = styled(motion.img)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ListInfo = styled.ul`
	margin-left: 40px;
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-around;
	flex-direction: column;
	& li {
		font-weight: bold;
		font-family: "Nunito", sans-serif;
		letter-spacing: 2px;
	}
`;

const BrandStyles = {
	Main,
	Brand,
	Image,
	InfoBrand,
	ListInfo
};

export default BrandStyles;
