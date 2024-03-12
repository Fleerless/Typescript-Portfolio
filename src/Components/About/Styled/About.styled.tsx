import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-direction: row;
	width: 100svw;
	height: 100svh;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 1250px;
	height: 260px;
`;

export const LeftContent = styled.div`
    align-items: flex-start;
`;

export const RightContent = styled.div`
`;

export const Image = styled.img`
    border-radius: 20px;
    height: 260px;
    width: 390px;
    margin-right: 5svw

`;

export const Chapter = styled.div`
	color: #1972e6;
    font-weight: 900;
    font-family: 'Verdana';
`;

export const Title = styled.div`
	font-weight: 900;
	font-family: 'Verdana';
	font-size: 24px;
	padding-top: 1svh;
`;

export const Paragraph = styled.div`
    padding-top: 4svh;
    line-height: 1.5;
`;

export const CircleText = styled.div`
    height: 4svw;
    width: 4svw;
    border-radius: 50%;
    background-color: grey;
    margin-bottom: 1svh;`;

