import styled from "styled-components";

const Main = styled.main`
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;
`;

const Loader = styled("div")`
	width: 8rem;
	height: 8rem;
	border-radius: 50%;
	border: 1rem solid lightgray;
	border-top: 1rem solid dodgerblue;
	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const LoadingStyles = {
	Main,
	Loader
};

export default LoadingStyles;
