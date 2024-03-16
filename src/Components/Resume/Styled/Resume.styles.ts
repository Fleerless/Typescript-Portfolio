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

export const DownloadButton = styled.button`
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

export const PageSelecter = styled.select`
    margin-left: 100%;
`;