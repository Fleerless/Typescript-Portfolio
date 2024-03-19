import styled, { keyframes } from 'styled-components';
import { colors } from 'Utils/styles';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	width: 100svw;
	height: 100svh;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	width: 1050px;
	height: 400px;
    display: flex;
`;

export const RightContent = styled.div`
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    width: 200px;
`;
    
const loaderAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingAnimation = styled.div`
	animation: ${loaderAnimation} 1s linear infinite;
	transform: translateZ(0);
	border-bottom: 2px dashed grey;
	border-left: 4px solid black;
	background: transparent;
	width: 24px;
	height: 24px;
	border-radius: 50%;
`;

export const DownloadButton = styled.a`
	margin-top: 20px;
	padding: 10px 20px;
	font-size: 1.2rem;
	font-weight: 600;
	border: none;
	border-radius: 5px;
	background-color: ${colors.inactiveColor};
	color: #ecf0f1;
	cursor: pointer;
	text-decoration: none;
	&:hover {
		background-color: ${colors.highlightColor};
		text-decoration: underline;
	}
`;

export const SelecterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

export const SelecterContainerColumn = styled.div`
display: flex;
justify-content: space-between;`;

export const PageSelecter = styled.select`
    margin-left: 10px;
    width: 60px;
`;

export const PageButton = styled.button`
	height: 25px;
	width: 60px;
	margin: 10px 0 0 0px;
	background-color: ${colors.inactiveColor};
	font-size: 1.2rem;
	font-weight: 600;
	color: #ecf0f1;
	border: none;
	border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;
	&:hover {
		background-color: ${colors.highlightColor};
        text-decoration: underline;
	}
`;