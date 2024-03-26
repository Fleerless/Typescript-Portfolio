import React from 'react';
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

export const DesktopNav = styled.nav`
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
	@media (max-width: 768px) {
		display: none;
	}
`;

export const MobileNav = styled.nav`
	@media (min-width: 769px) {
		display: none;
	}
`;

export const HamburgerMenu = () => {
	return (
		<HamburgerMenuContainer>
			<HamburgerMenuBar />
			<HamburgerMenuBar />
			<HamburgerMenuBar />
		</HamburgerMenuContainer>
	);
};

const HamburgerMenuContainer = styled.div`
	margin-top: 25px;
`;

const HamburgerMenuBar = styled.div`
	background-color: ${colors.inactiveColor};
	height: 3px;
	width: 30px;
	margin-top: 6px;
`;

export const MobileNavMenu = styled.ul`
	height: 25svh;
	display: flex;
	flex-wrap: wrap;
	padding-top: 20px;
	background-color: ${colors.pageColors.background};
	position: absolute;
	top: 50px;
	left: -100px;

`;

export const Div = styled.div`
	/* padding-right: 20px; */
`;

export default HeaderContainer;
