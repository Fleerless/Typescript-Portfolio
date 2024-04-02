import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { colors } from 'utils/styles';

const rotateTopAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(405deg);
	}
`;

const rotateMiddleAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(-45deg);
	}
`;

const rotateBottomAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(-405deg);
	}
`;

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
	@media (max-width: 768px) {
		background-color: ${colors.pageColors.background};
	}

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

export const HamburgerMenu = (rotate: boolean) => {
	return (
		<HamburgerMenuContainer>
			<HamburgerMenuBarTop rotate={rotate} />
			<HamburgerMenuBar rotate={rotate} />
			<HamburgerMenuBarBottom rotate={rotate} />
		</HamburgerMenuContainer>
	);
};

const HamburgerMenuContainer = styled.div`
	margin-top: 25px;
`;

const HamburgerMenuBar = styled.div<{
	rotate: boolean;
}>`
	background-color: ${colors.inactiveColor};
	height: 3px;
	width: 30px;
	margin-top: 6px;
	animation: ${(props) =>
		props.rotate &&
		css`
			${rotateMiddleAnimation} 0.5s
		`};
`;

const HamburgerMenuBarTop = styled.div<{ rotate?: boolean }>`
	background-color: ${colors.inactiveColor};
	height: 3px;
	width: 15px;
	margin-top: 6px;
	animation: ${(props) =>
		props.rotate &&
		css`
			${rotateTopAnimation} 0.5s
		`};
`;

const HamburgerMenuBarBottom = styled.div<{ rotate?: boolean }>`
	background-color: ${colors.inactiveColor};
	height: 3px;
	width: 15px;
	margin-top: 6px;
	margin-left: 15px;
	animation: ${(props) =>
		props.rotate &&
		css`
			${rotateBottomAnimation} 0.5s
		`};
`;

export const MobileNavMenu = styled.ul`
	height: 25svh;
	display: flex;
	flex-wrap: wrap;
	padding-top: 20px;
	background-color: ${colors.pageColors.background};
	position: absolute;
	top: 50px;
	left: -40px;
`;

export const Div = styled.div`
padding-right: 40px;
margin-top: 20px;
`;

export default HeaderContainer;
