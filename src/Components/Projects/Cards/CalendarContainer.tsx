import React from 'react';
import {
	CalendarContainer,
	GithubLinkContainer,
	UserName,
} from 'Projects/Styled/CalendarCard.styled';
import { Link } from 'Utils/Components.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import GitHubCalendar from 'react-github-calendar';
import { colors } from 'Utils/styles';
import { home as data } from 'utils/data';


const CalendarCardContainer: React.FC = () => (
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
				<FontAwesomeIcon icon={faGithub} />
				<UserName>Fleerless</UserName>
			</Link>
		</GithubLinkContainer>
		<GitHubCalendar username="Fleerless" colorScheme="light" />
	</CalendarContainer>
);

export default CalendarCardContainer;
