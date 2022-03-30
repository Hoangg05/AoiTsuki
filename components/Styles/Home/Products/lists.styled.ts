import styled from "styled-components";
import { motion } from "framer-motion";

const Main = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
`;

const Button = styled(motion.button)`
	width: 40px;
	height: 40px;
	background: ${(props: { isdisabled: "true" | "false" }) =>
		props.isdisabled === "true" ? "#bfbfbfab" : "#1da1f2"};
	color: #fff;
	border: none;
	display: grid;
	place-items: center;
	cursor: ${(props: { isdisabled: "true" | "false" }) =>
		props.isdisabled === "true" ? "no-drop" : "pointer"};
	font-size: 1.2rem;
`;

const Lists = styled(motion.ul)`
	width: 50%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0 auto 20px auto;
	list-style-type: none;
`;

const List = styled(motion.li)`
	background: #bfbfbfab;
	width: 40px;
	height: 40px;
	display: grid;
	place-items: center;
	${({ selected }: { selected?: boolean }) =>
		selected && "background: #71c2ff;color: #fff;"};
	cursor: pointer;
	user-select: none;
`;

const ListsStyles = {
	Main,
	Button,
	Lists,
	List
};

export default ListsStyles;
