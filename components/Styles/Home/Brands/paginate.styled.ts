import { motion } from "framer-motion";
import styled from "styled-components";

const Main = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: block;
`;

const Button = styled(motion.button)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: none;
	background: #fff;
	z-index: 5;
	cursor: pointer;
	& svg {
		font-size: 25px;
	}
	${(props: { customs?: any }) => props.customs};
`;

const PaginateStyles = {
	Main,
	Button
};

export default PaginateStyles;
