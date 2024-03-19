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

const techStackMargin = 100;
const techStackColors = [
	'#E34C26',
	'#1572B6',
	'#61DAFB',
	'#F7DF1E',
	'#007396',
	'#1E3050',
];
const techStack = [faHtml5, faCss3Alt, faReact, faJs, faJava, faAws];
const techStackObject = [{ icon: faHtml5, color: '#E34C26' }];

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	width: 100svw;
	height: 100svh;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 1050px;
	height: 400px;	
`;

export const TopContent = styled.div`
	display: flex;
	height: 25svh;
	justify-content: space-between;
`;

export const LeftContent = styled.div`
	align-items: flex-start;
	width: 555px;
`;

export const RightContent = styled.div`
`;


export const BottomContent = styled.div`
	display: flex;
	margin-top: 5vh;
	flex-direction: row;
	font-weight: bold;
	align-items: center;
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
`;

export const Link = styled.a<{
	color?: string;
	hover?: boolean;
	margin?: number;
	fontSize?: number;
}>`
	margin-right: ${({ margin }) => (margin ? `${margin}px` : '15px')};
	font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '24px')};
	color: black;
	text-decoration: none;
	&:hover {
    cursor: ${({ hover }) => (hover ? 'pointer' : 'default')};
    color: ${({ color }) => color || 'black'};
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
`;

export const ShakeHand = styled.span`
	animation: ${handShakeAnimation} 3s infinite;
	transform-origin: 70% 70%;
	display: inline-block;
`;

export const techStackIcons = techStack.map((icon, index) => {
  return (
		<span key={index}>
			<Link margin={techStackMargin} fontSize={32}>
				<FontAwesomeIcon icon={icon} color={techStackColors[index]} />
			</Link>
		</span>
  );
});

export const techStackIcons2 = techStackObject.map((iconObject, index) => {
	return (
		<span key={index}>
			<Link margin={techStackMargin} fontSize={32}>
				<FontAwesomeIcon icon={iconObject.icon} color={iconObject.color} />
			</Link>
		</span>
	);
});