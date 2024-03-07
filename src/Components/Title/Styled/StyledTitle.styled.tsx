import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3Alt,
	faReact,
	faJs,
	faJava,
} from '@fortawesome/free-brands-svg-icons';

const techStackMargin = 125;
const techStack = [faHtml5, faCss3Alt, faReact, faJs, faJava];
const techStackColors = ['#E34C26', '#1572B6', '#61DAFB', '#F7DF1E', '#007396'];
const techStackObject = [{ icon: faHtml5, color: '#E34C26' }];

export const Section = styled.section`
display: flex;
flex-direction: column;
width: auto;
margin: 31svh 50svh;
`;

export const TopContent = styled.div`
display: flex;
height: 25svh;
`;

export const LeftContent = styled.div`
align-items: flex-start;
width: 40svh;
`;

export const RightContent = styled.div`
`;

export const BottomContent = styled.div`
display: flex;
margin-top: 5vh;
width: inherit;
flex-direction: row;
align-items: center;
font-weight: bold;
`;

export const CareerTitle = styled.div`
font-size: 44px;
font-weight: bold;
margin-bottom: 16px;
`;

export const Paragraph = styled.p`
font-size: 16px;
`;


export const borderAnimation = keyframes`
0% { border-radius: 44% 56% 35% 65% / 61% 29% 71% 39%; }
50% { border-radius: 39% 71% 29% 61% / 65% 35% 56% 44%; }
100% { border-radius: 44% 56% 35% 65% / 61% 29% 71% 39%; }
`;

export const Image = styled.img`
height: auto;
width: 20svh;
object-fit: cover;
border: 3px solid black;
margin-left: 15vh;
animation: ${borderAnimation} 3s infinite;
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