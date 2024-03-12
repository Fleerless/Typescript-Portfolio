import React from 'react';
import { Section, Container, LeftContent, RightContent, Image, Chapter, Title, Paragraph, CircleText } from './Styled/About.styled';

const chapter ='About Me';
const title = 'Senior Software Engineer based in Denver, Colorado';
const paragraph = 'As a Senior Software Engineer, I possess an impressive arsenal of skills in full-stack web development. I specialize in React.js with Typescript and modularized full-stack web applications. I am passionate about creating and maintaining high-quality, scalable, and efficient code. I am a team player and a problem solver, and I am always eager to learn new technologies and methodologies. My expertise includes technologies such as React.js, Typescript, Java, Spring Boot, Jest, Cypress, Logz, AWS, Dynatrace, REST, Jenkins, Rally, Node.js, and Express.js.';

const About: React.FC = () => {
    return (
		<Section id="About">
            <Container>
                <LeftContent>
                    <Image src="/images/OfficePicture2.jpeg" alt="Image" />
                    {/* <CircleText>Senior Software Engineer •</CircleText>
                    <span>👨🏻‍💻</span> */}
                </LeftContent>
                <RightContent>
                    <Chapter>{chapter}</Chapter>
                    <Title>
                        {title}
                        <span>📍</span>
                    </Title>
                    <Paragraph>{paragraph}</Paragraph>
                </RightContent>
            </Container>
		</Section>
	);
};

export default About;