import styled from 'styled-components';
import { colors, values } from 'Utils/styles';

export const ProjectContainer = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
    border: 1px solid ${colors.pageColors.borderColor};
    margin-top: 50px;
    margin-bottom: 70px;
	border-radius: ${values.borderRadius};
    background-color: ${colors.pageColors.background};
`;

export const ProjectTitleContainer = styled.div`
    width: 100%;
    color: ${colors.highlightColor};
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

export const ProjectTitle = styled.div`
margin-left: 30px; 
`;

export const ProjectTechnologies = styled.div`
	margin-right: 30px;
`;

export const ImageContainer = styled.div`
    width: 100%;
	display: flex;
	flex-direction: row;
    justify-content: space-around;

`;

export const Image = styled.img`
    width: 25%;
    border-radius: ${values.borderRadius};
    margin: 10px;
    border: 1px solid ${colors.pageColors.borderColor};
`;

export const DescriptionContainer = styled.div`
    margin: 30px;
    padding: 30px;
    border: 1px solid ${colors.pageColors.borderColor};
    border-radius: ${values.borderRadius};
`;