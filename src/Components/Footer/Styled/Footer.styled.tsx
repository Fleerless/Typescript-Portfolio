import styled from 'styled-components';
import { colors } from 'utils/styles';

export const FooterContainer = styled.footer`
	font-size: 16px;
	font-weight: bold;
	width: 100%;
	position: fixed;
	bottom: 0;
	text-align: center;
	height: 35px;
	padding: 15px 0 5px 0;
	background-color: ${colors.pageColors.background};
`;

export const IconSpan = styled.span`
    padding-left: 10px;
`;