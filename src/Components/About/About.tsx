import React from 'react';
import { Section, Container } from 'Utils/Components.styled';
import { LeftContent, RightContent, Image, Chapter, Title, Paragraph, CircleText, ImageSpan } from 'About/Styled/About.styled';
import Circle from 'About/Circle';
import { ShakeSpan } from 'Utils/animations';
import { about as aboutData } from 'Utils/data';



const About: React.FC = () => {
    return (
		<Container id="About">
			<Section>
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
						<ShakeSpan>📍</ShakeSpan>
					</Title>
					<Paragraph>{aboutData.paragraph}</Paragraph>
				</RightContent>
			</Section>
		</Container>
	);
};

export default About;