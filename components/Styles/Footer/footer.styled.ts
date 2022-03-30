import Link from "next/link";
import styled from "styled-components";

const Main = styled.footer`
	background: #fafafa;
	padding: 2rem 4rem;
	text-align: center;
	font-size: 0.8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	position: relative;
	width: 100%;
	margin-top: 40px;
`;

const Part = styled.div`
	display: block;
	height: 100%;
	margin: 0 auto;
	position: relative;
`;

const CImage = styled.div`
	width: 10rem;
	height: 10rem;
	display: grid;
	place-items: center;
	border-radius: 50%;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	cursor: pointer;
	& a {
		position: relative;
		width: 100%;
		height: 100%;
	}
`;

const Table = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	font-size: 0.8rem;
	color: #333;
	text-align: center;
	padding: 0 20px;
`;

const Row = styled.article`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 20px 10px;
	& h2 {
		font-size: 2rem;
		text-transform: uppercase;
	}
	& * {
		font-family: "Quicksand", sans-serif;
		font-weight: bold;
		font-size: 1.2rem;
	}
`;

const DBGroup = styled.div`
	display: grid;
	place-items: center;
	align-items: start;
	grid-template-columns: repeat(2, 1fr);
`;

const CLink = styled.a`
	color: #1da1f2;
`;

const Title = styled.h3`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CIcon = styled.div`
	display: grid;
	place-items: center;
	color: ${({ color }: { color: string }) => color};
`;

const FooterStyles = {
	Main,
	Part,
	CImage,
	Table,
	Row,
	CLink,
	CIcon,
	Title,
	DBGroup
};

export default FooterStyles;
