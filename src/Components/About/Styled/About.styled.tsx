import styled from 'styled-components';
import { colors } from 'utils/styles';

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
	color: ${colors.inactiveColor};
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
    padding-top: 28px;
    line-height: 1.5;
`;

export const CircleText = styled.div`
	position: relative;
	top: -95px;
	right: -300px;
	height: 120px;
	width: 120px;
	border-radius: 50%;
	background-color: ${colors.pageColors.background};
`;

export const ImageSpan = styled.span`
    position: relative;
    top: -182px;
    right: -340px;
    font-size: 40px;
`;