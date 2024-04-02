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
		transform: rotate(-45deg);
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
		<HamburgerMenuContainer rotate={rotate}>
			<HamburgerMenuBarTop rotate={rotate} />
			<HamburgerMenuBar />
			<HamburgerMenuBarBottom rotate={rotate} />
		</HamburgerMenuContainer>
	);
};

const HamburgerMenuContainer = styled.div<{
	rotate: boolean;
}>`
	margin-top: 25px;
	transition: transform 0.7s;
	transform: ${({ rotate }) => (rotate ? 'rotate(-45deg)' : 'none')};
	z-index: 1000;
`;

const HamburgerMenuBar = styled.div`
	background-color: ${colors.inactiveColor};
	height: 4px;
	width: 30px;
	margin-top: 12px;
	border-radius: 2px;
`;

const HamburgerMenuBarTop = styled.div<{ rotate?: boolean }>`
	background-color: ${colors.inactiveColor};
	height: 4px;
	width: 15px;
	margin-top: 6px;
	border-radius: 2px;
	transition: transform 0.7s;
	transform-origin: right;
	transform: ${({ rotate }) => (rotate ? 'rotate(-90deg)' : 'none')};
`;

const HamburgerMenuBarBottom = styled.div<{ rotate?: boolean }>`
	background-color: ${colors.inactiveColor};
	height: 4px;
	width: 15px;
	margin-top: 12px;
	margin-left: 15px;
	border-radius: 2px;
	transition: transform 0.7s;
	transform-origin: left;
	transform: ${({ rotate }) => (rotate ? 'rotate(-90deg)' : 'none')};
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
