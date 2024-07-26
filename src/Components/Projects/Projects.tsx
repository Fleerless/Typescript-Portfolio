import React from 'react';
import { ProjectsContainer, Section } from 'Projects/Styled/ProjectsContainer.styled';
import ProjectCardContainer from 'Projects/Cards/ProjectCardContainer';
import CalendarCardContainer from './Cards/CalendarContainer';
import { projects as ProjectData } from 'utils/data';



const Projects: React.FC = () => {	
    return (
		<ProjectsContainer>
			<Section direction='column'>
				<CalendarCardContainer />
				{ProjectData.map((project, index) => (
					<ProjectCardContainer key={index} project={project} />
				))}
			</Section>
		</ProjectsContainer>
	);
};

export default Projects;