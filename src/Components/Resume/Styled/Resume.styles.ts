import styled, { keyframes } from 'styled-components';

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
    background-color: #2c3e50;
    color: #ecf0f1;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #34495e;
    }
`;

export const SelecterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

export const PageSelecter = styled.select`
    margin-top: 20px;
    width: 50px;
`;

export const PageButton = styled.button`
    height: 19px;
    width: 40px;
`;