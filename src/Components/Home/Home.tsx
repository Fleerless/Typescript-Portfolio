import React from 'react';
import { Section, Container } from 'Utils/Components.styled';
import { TopContent, LeftContent, RightContent, CareerTitle, Paragraph, Link, BottomContent, Image, TechStackDiv, TechStackOne, TechStackTwo, techStackIcons, ShakeHand } from 'Home/Styled/Home.styled';
import { ShakeSpan } from 'Utils/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { home as homeData } from 'Utils/data';


const Home: React.FC = () => {
	return (
		<Container>
			<Section direction='column'>
				<TopContent>
					<LeftContent>
						<CareerTitle>
							{homeData.careerTitle}
							<ShakeHand>👋🏻</ShakeHand>
						</CareerTitle>
						<Paragraph>
							{homeData.introParagraph}
							<ShakeSpan>📍</ShakeSpan>
						</Paragraph>
						<span>
							<Link
								color="#0077b5"
								hover
								href={homeData.linkedInLink}
								target="_blank"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</Link>
							<Link
								color="#c9510c"
								hover
								href={homeData.gitHubLink}
								target="_blank"
							>
								<FontAwesomeIcon icon={faGithub} />
							</Link>
						</span>
					</LeftContent>
					<RightContent>
						<Image src={homeData.profilePicLocation} alt="Image" />
					</RightContent>
				</TopContent>
				<BottomContent>
					<span>{homeData.asideVerbiage}</span>
					<TechStackOne />
					<TechStackDiv />
					<TechStackTwo />
					{techStackIcons}
				</BottomContent>
			</Section>
		</Container>
	);
};

export default Home;
