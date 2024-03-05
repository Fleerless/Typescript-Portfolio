import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithubSquare,
	faLinkedin,
	faHtml5,
	faCss3Alt,
	faReact,
	faJs,
	faJava,
} from '@fortawesome/free-brands-svg-icons';

const profilePicLocation = '/images/JeffProfilePic.jpeg';
const introParagraph = 'Hi, I\'m Jeffrey Fleer. A passionate Full-Stack Engineer specializing in React.js and modularized full-stack web applications based in Denver, Colorado.';
const careerTitle = 'Senior Software Engineer';
const asideVerbiage = 'Tech Stack |';
const techStack = [faHtml5, faCss3Alt, faReact, faJs, faJava];

const techStackIcons = techStack.map((icon, index) => {
	return (
		<span key={index}>
			<FontAwesomeIcon icon={icon} />
		</span>
	);
});

const Section = styled.section`
  display: flex;
  margin-top: 30vh;
  align-items: center;
  flex-direction: column;
`;

const LeftContent = styled.div`
  flex: 1.5;
  margin-left: 30%;
`;

const TopContent = styled.div`
  display: flex;
`;

const BottomContent = styled.div`
  margin-top: 5vh;
  flex-direction: row;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  font-size: 16px;
`;

const RightContent = styled.div`
  flex: 1;
  margin-right: 30%;
  width: 20%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 44% 56% 35% 65% / 61% 19% 81% 39%;
  border: 2px solid black;
`;

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
					<figure>
						<a>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a>
							<FontAwesomeIcon icon={faGithubSquare} />
						</a>
					</figure>
				</LeftContent>
				<RightContent>
					<Image src={profilePicLocation} alt="Image" />
				</RightContent>
			</TopContent>
			<BottomContent>
				<aside>
					{asideVerbiage}
					{techStackIcons}
				</aside>
			</BottomContent>
		</Section>
	);
};

export default StyledTitle;
