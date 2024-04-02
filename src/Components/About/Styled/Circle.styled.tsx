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
	font-family: 'Courier New';
	font-size: 14px;
	@media (max-width: 768px) {
		top: -302px;
		right: -285px;
		height: 460px;
	}
`;
