import styled from "styled-components";

const Main = styled.header`
	z-index: 11082005;
	width: 100%;
	height: 4rem;
	max-height: 4rem;
	display: grid;
	place-items: center;
	grid-template-columns: 50px 188px auto 5fr 200px 50px;
	background: #e7e7e7;
	border-bottom: 1px solid #e0e0e0;
	position: sticky;
	top: 0;
`;

const Group = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	${(props: { col3?: boolean; row3?: boolean }) =>
		props.col3 &&
		"display: grid;place-items: center;grid-template-columns: repeat(3, 1fr);"};
	${(props) =>
		props.row3 &&
		"display: grid;place-items: center;grid-template-rows: repeat(3, 1fr);grid-template-columns: 1fr;"};
`;

const Item = styled.div`
	position: relative;
	width: 100%;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	${(props: { customs?: any }) => props.customs};
`;
const Logo = styled.a`
	cursor: pointer;
	position: relative;
	width: 100%;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	& h1 {
		font-family: "Quicksand", sans-serif;
		margin-left: 10px;
		white-space: nowrap;
		font-weight: bold;
	}
`;

const ImageItem = styled.div`
	position: relative;
	width: 3rem;
	height: 3rem;
	& img {
		border-radius: 50%;
	}
`;

const Select = styled(Item)`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const SelectBox = styled(Item)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const ItemSelectBox = styled(Item)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: all 0.5s linear;
	white-space: nowrap;
	cursor: pointer;
	${(props: { noMargin?: boolean; noPadding?: boolean; noHover?: boolean }) =>
		!props.noPadding && "padding: 10px;"};
	& svg {
		${(props) => !props.noMargin && "margin-right: 10px;"};
		height: 100%;
	}
	${(props) =>
		!props.noHover &&
		`
            &:hover {
                background: #71c2ff;
                color: #fff;
            }
            `};
	${(props: { customs?: any }) => props.customs};
`;

const SelectItems = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	width: 200px;
	display: block;
	background: #fff;
	border: 1px solid #ddd;
	${(props: { customs?: any }) => props.customs};
`;

const User = styled(Item)`
	transition: all 0.5s linear;
	border-radius: 5px;
	${(props: { hasUser?: boolean }) =>
		props.hasUser &&
		"display: grid;place-items: center;grid-template-columns: 1fr 1fr;padding: 0 2rem;"};
	cursor: pointer;
	& ${ImageItem} {
		transition: all 0.5s linear;
		width: 2.5rem;
		height: 2.5rem;
	}
	& h4 {
		margin-left: 10px;
		max-width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	& a {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
	}
	&:hover {
		background: #ddd;
	}
`;

const HeaderStyles = {
	Group,
	Main,
	Item,
	Logo,
	ImageItem,
	Select,
	SelectBox,
	ItemSelectBox,
	SelectItems,
	User
};

export default HeaderStyles;
