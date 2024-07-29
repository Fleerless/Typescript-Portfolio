import React from 'react';
import { Project } from 'utils/dataTypes';
import {
	ProjectContainer,
	ProjectTitleContainer,
    ProjectTitle,
    ProjectTechnologies,
    ImageContainer,
    Image,
    DescriptionContainer
} from 'Projects/Styled/ProjectCard.styled';

interface ProjectCardContainerProps {
    project: Project;
}

const ProjectCardContainer: React.FC<ProjectCardContainerProps> = (props) => {
    
	return (
        <ProjectContainer>
            <ProjectTitleContainer>
                <ProjectTitle>
                    {props.project.name}
                </ProjectTitle>
                <ProjectTechnologies>
                    {props.project.technologies.join(', ')}
                </ProjectTechnologies>
            </ProjectTitleContainer>
            <ImageContainer>
                <Image src={props.project.screenShot1} />
                <Image src={props.project.screenShot2} />
            </ImageContainer>
            <DescriptionContainer>
                {props.project.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </DescriptionContainer>
        </ProjectContainer>
    );
};

export default ProjectCardContainer;