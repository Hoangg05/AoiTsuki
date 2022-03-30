import styled from "styled-components";

const Main = styled.main`
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: grid;
	place-items: center;
	grid-template-rows: auto 1fr;
	position: relative;
	padding: 20px;
`;

const Title = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	font-style: italic;
	text-transform: uppercase;
	text-align: center;
	margin-bottom: 20px;
	font-family: "Quicksand", sans-serif;
`;

const BrandsStyles = {
	Main,
	Title
};

export default BrandsStyles;
