import React from 'react';
import { Section, TopContent, LeftContent, RightContent, CareerTitle, Paragraph, Link, BottomContent, Image, TechStackDiv, TechStackOne, TechStackTwo, techStackIcons } from './Styled/Home.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const profilePicLocation = '/images/JeffProfilePic.jpeg';
const introParagraph =
	'Hi, my name is Jeffrey Fleer. A passionate Full-Stack Engineer specializing in React.js and modularized full-stack web applications. Based in Denver, Colorado.';
const careerTitle = 'Senior Software Engineer';
const asideVerbiage = 'Tech Stack';
const linkedInLink = 'https://www.linkedin.com/in/jeffrey-fleer/';
const gitHubLink = 'https://github.com/Fleerless';




const Home: React.FC = () => {
	return (
		<Section id="Home">
			<TopContent>
				<LeftContent>
					<CareerTitle>
						{careerTitle}
						<span> 👋</span>
					</CareerTitle>
					<Paragraph>
						{introParagraph}
						<span>📍</span>
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
				{techStackIcons}
			</BottomContent>
		</Section>
	);
};

export default Home;
