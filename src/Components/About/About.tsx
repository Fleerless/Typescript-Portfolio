import React from 'react';
import { Section, Container, LeftContent, RightContent, Image, Chapter, Title, Paragraph, CircleText, ImageSpan } from 'About/Styled/About.styled';
import Circle from 'About/Circle';
import { about as aboutData } from 'Utils/data';



const About: React.FC = () => {
    return (
		<Section id="About">
			<Container>
				<LeftContent>
					<Image src="/images/OfficePicture2.jpeg" alt="Image" />
					<CircleText></CircleText>
					<ImageSpan>👨🏻‍💻</ImageSpan>
					<Circle />
				</LeftContent>
				<RightContent>
					<Chapter>{aboutData.chapter}</Chapter>
					<Title>
						{aboutData.title}
						<span>📍</span>
					</Title>
					<Paragraph>{aboutData.paragraph}</Paragraph>
				</RightContent>
			</Container>
		</Section>
	);
};

export default About;