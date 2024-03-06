import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faHtml5,
	faCss3Alt,
	faReact,
	faJs,
	faJava,
} from '@fortawesome/free-brands-svg-icons';

const profilePicLocation = '/images/JeffProfilePic.jpeg';
const introParagraph = 'Hi, I\'m Jeffrey Fleer. A passionate Full-Stack Engineer specializing in React.js and modularized full-stack web applications. Based in Denver, Colorado.';
const careerTitle = 'Senior Software Engineer';
const asideVerbiage = 'Tech Stack';
const linkedInLink = 'https://www.linkedin.com/in/jeffrey-fleer/';
const gitHubLink = 'https://github.com/Fleerless';
const techStack = [faHtml5, faCss3Alt, faReact, faJs, faJava];
const techStackColors = ['#E34C26', '#1572B6', '#61DAFB', '#F7DF1E', '#007396'];
const techStackMargin = 125;


const Section = styled.section`
display: flex;
flex-direction: column;
width: auto;
margin: 30svh 50svh;
`;

const TopContent = styled.div`
display: flex;
height: 25svh;
`;

const LeftContent = styled.div`
align-items: flex-start;
width: 40svh;
`;

const RightContent = styled.div`
`;

const BottomContent = styled.div`
display: flex;
margin-top: 5vh;
width: inherit;
flex-direction: row;
align-items: center;
font-weight: bold;
`;

const Title = styled.div`
font-size: 44px;
font-weight: bold;
margin-bottom: 16px;
`;

const Paragraph = styled.p`
font-size: 16px;
`;


const Image = styled.img`
height: auto;
width: 20svh;
object-fit: cover;
border-radius: 44% 56% 35% 65% / 61% 29% 71% 39%;
border: 3px solid black;
margin-left: 15vh;
`;

const Link = styled.a<{
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

const TechStackOne = styled.span`
	margin-right: ${`${techStackMargin / 4}px`};
`;

const TechStackTwo = styled.span`
	margin-right: ${`${techStackMargin}px`}
`;

const TechStackDiv = styled.div`
width:2px;
height: 24px;
background-color: black;
`;

const techStackIcons = techStack.map((icon, index) => {
  return (
		<span key={index}>
			<Link margin={techStackMargin} fontSize={32}>
				<FontAwesomeIcon icon={icon} color={techStackColors[index]} />
			</Link>
		</span>
  );
});

const StyledTitle = () => {
  return (
		<Section>
			<TopContent>
				<LeftContent>
					<Title>
						{careerTitle}
						<span> 👋</span>
					</Title>
					<Paragraph>
						{introParagraph}
						<span>📌</span>
					</Paragraph>
					<span>
						<Link
							color="#0077b5"
							hover
							href={linkedInLink}
							target="_blank"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</Link>
						<Link
							color="#c9510c"
							hover
							href={gitHubLink}
							target="_blank"
						>
							<FontAwesomeIcon icon={faGithub} />
						</Link>
					</span>
				</LeftContent>
				<RightContent>
					<Image src={profilePicLocation} alt="Image" />
				</RightContent>
			</TopContent>
			<BottomContent>
				<span>{asideVerbiage}</span>
				<TechStackOne />
				<TechStackDiv />
				<TechStackTwo />
				{/* <img
					src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
					width="36"
					height="36"
					alt="HTML5 Powered with CSS3 / Styling, and Semantics"
					title="HTML5 Powered with CSS3 / Styling, and Semantics"
				></img> */}
				{techStackIcons}
			</BottomContent>
		</Section>
  );
};

export default StyledTitle;
