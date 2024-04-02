import React from 'react';
import { Container, Section } from 'utils/Components.styled';
import {
	CalendarContainer,
	GithubLinkContainer,
    UserName
} from './Styled/Projects.styled';
import GitHubCalendar from 'react-github-calendar';
import { Link } from 'Utils/Components.styled';
import { colors } from 'Utils/styles';
import { home as data } from 'utils/data';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects: React.FC = () => {
    return (
		<Container>
			<Section>
				<CalendarContainer>
					<GithubLinkContainer>
						<Link
							href={data.gitHubLink}
							target="_blank"
							fontSize={32}
							hover
							row
							color={colors.iconColors.gitHub}
						>
							<FontAwesomeIcon
								icon={faGithub}
							
							/>
							<UserName>Fleerless</UserName>
						</Link>
					</GithubLinkContainer>
					<GitHubCalendar username="Fleerless" colorScheme="light" />
				</CalendarContainer>
			</Section>
		</Container>
	);
};

export default Projects;