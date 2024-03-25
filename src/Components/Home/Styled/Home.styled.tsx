import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3Alt,
	faReact,
	faJs,
	faJava,
	faAws
} from '@fortawesome/free-brands-svg-icons';
import { colors } from 'utils/styles';
import { Link } from 'utils/Components.styled';

const techStackMargin = 110;

const techStackObject = [
	{ icon: faReact, color: '#61DAFB' },
	{ icon: faJs, color: '#F7DF1E' },
	{ icon: faJava, color: '#007396' },
	{ icon: faAws, color: '#1E3050' },
	{ icon: faHtml5, color: '#E34C26' },
	{ icon: faCss3Alt, color: '#1572B6' },
];

export const TopContent = styled.div`
	display: flex;
	height: 25svh;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-direction: column-reverse;
		padding: 0 50px;
		margin-top: 325px;
	}
`;

export const LeftContent = styled.div`
	align-items: flex-start;
	width: 625px;
	@media (max-width: 768px) {
		width: 100%;
		
	}
`;

export const RightContent = styled.div`
`;


export const BottomContent = styled.div`
	display: flex;
	margin-top: 5vh;
	flex-direction: row;
	font-weight: bold;
	align-items: center;
	@media (max-width: 768px) {
		padding: 0 50px;
		flex-direction: column;
		align-items: center;
		margin-bottom: 50px;
	}
`;

export const CareerTitle = styled.div`
	font-size: 44px;
	font-weight: bold;
	margin-bottom: 16px;
	color: ${colors.inactiveColor};
`;

export const Paragraph = styled.p`
	font-size: 16px;
`;

const handShakeAnimation = keyframes`
	0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
    100% { transform: rotate( 0.0deg) }
`;

export const borderAnimation = keyframes`
	0% { border-radius: 34% 66% 70% 30% / 60% 30% 70% 40% ; }
	50% { border-radius: 58% 42% 56% 44% / 48% 62% 38% 52% ; }
	100% { border-radius: 34% 66% 70% 30% / 60% 30% 70% 40%; }
`;

export const Image = styled.img`
	height: auto;
	width: 20svh;
	object-fit: cover;
	border: 3px solid black;
	margin-left: 15vh;
	animation: ${borderAnimation} 4s infinite;
	@media (max-width: 768px) {
		margin-left: 10vh;
	}
`;

export const TechStackOne = styled.span`
	margin-right: ${`${techStackMargin / 4}px`};
`;

export const TechStackTwo = styled.span`
	margin-right: ${`${techStackMargin}px`}
`;

export const TechStackDiv = styled.div`
	width:2px;
	height: 24px;
	background-color: black;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const ShakeHand = styled.span`
	animation: ${handShakeAnimation} 3s infinite;
	transform-origin: 70% 70%;
	display: inline-block;
	margin-left: 10px;
`;

export const techStackIcons = techStackObject.map((iconObject, index) => {
	return (
		<span key={index}>
			<Link margin={techStackMargin} fontSize={32} mediaMargin>
				<FontAwesomeIcon icon={iconObject.icon} color={iconObject.color} />
			</Link>
		</span>
	);
});