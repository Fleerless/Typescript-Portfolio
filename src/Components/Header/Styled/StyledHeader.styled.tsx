import styled from 'styled-components';
import { colors } from 'utils/styles';

const HeaderContainer = styled.header`
	width: 100%;
	padding: 20px;
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	display: flex;
	flex-grow: 1;
	padding: 0 20px;
	position: fixed;
	top: 0;
	color: ${colors.inactiveColor};

	section {
		flex-grow: 2;
	}
	nav {
		margin-right: 40px;
	}
	ul {
		display: flex;
		flex-grow: 1;
		width: 100%;
		justify-content: flex-end;
		list-style: none;
		padding: 0;
		margin-right: 40px;
		a {
			text-decoration: none;
			color: ${colors.inactiveColor};
			display: flex;
			margin-left: 40px;
		}
		li {
			margin: 0 10px;
			cursor: pointer;
		}
		li:hover {
			text-decoration: underline;
		}
		.active {
			text-decoration: underline;
			color: ${colors.highlightColor};
		}
	}
`;

export default HeaderContainer;
