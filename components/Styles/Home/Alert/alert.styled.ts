import { motion } from "framer-motion";
import styled from "styled-components";

const Main = styled(motion.div)`
	width: 100%;
	height: 2rem;
	max-height: 2rem;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	box-shadow: inset 0px 0px 5px #ccc;
	user-select: none;
`;

const Alert = styled(motion.span)`
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	left: 100%;
	z-index: 1;
`;

const AlertStyles = {
	Main,
	Alert
};

export default AlertStyles;
