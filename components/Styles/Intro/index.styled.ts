import { motion } from "framer-motion";
import styled from "styled-components";

const Main = styled.main`
	width: 100%;
	height: 100vh;
	position: relative;
	display: grid;
	place-items: center;
	overflow: hidden;
	user-select: none;
`;

const BlockBall = styled(motion.div)`
	position: absolute;
	z-index: 2;
`;

const Ball = styled(motion.div)`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background: #fff;
	cursor: pointer;
	overflow: hidden;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled(motion.h2)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	white-space: nowrap;
	font-size: 4rem;
	font-weight: bold;
	text-align: center;
	font-family: "Source Code Pro", cursive;
	z-index: 1;
`;

const Skip = styled.h2`
	position: absolute;
	bottom: 20px;
	right: 20px;
	font-size: 1.5rem;
	font-weight: bold;
	font-style: italic;
	text-decoration: underline;
	cursor: pointer;
	color: blue;
	font-family: "Cascadia Code", "Operator Mono Lig", "Dank Mono",
		"Inconsolata", "Courier New", monospace;
`;

const IntroStyles = {
	Main,
	BlockBall,
	Ball,
	Title,
	Skip
};

export default IntroStyles;
