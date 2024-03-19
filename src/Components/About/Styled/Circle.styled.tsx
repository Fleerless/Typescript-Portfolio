import styled, { keyframes } from 'styled-components';


const textAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const SVG = styled.svg`
	position: relative;
	top: -295px;
	right: -285px;
	animation: ${textAnimation} 6s linear infinite;
	transform-origin: 14.5% 14%;
`;
