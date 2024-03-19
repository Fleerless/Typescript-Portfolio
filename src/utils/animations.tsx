import styled, { keyframes } from 'styled-components';

export const pinShakeAnimation = keyframes`
	0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(20.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
    20% { transform: rotate(-6.0deg) }
    30% { transform: rotate(12.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(4.0deg) }
    60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
    100% { transform: rotate( 0.0deg) }
`;

export const ShakeSpan = styled.span`
	animation: ${pinShakeAnimation} 3s linear infinite;
	transform-origin: 50% 100%;
	display: inline-block;
`;