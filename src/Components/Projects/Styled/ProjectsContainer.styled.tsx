import styled from 'styled-components';
import { colors } from 'utils/styles';

export const ProjectsContainer = styled.section<{
	direction?: 'column' | 'row-reverse' | 'column-reverse';
}>`
	display: flex;
	width: 100svw;
	min-height: 90svh;
	justify-content: center;
	padding-top: 150px;
	background-color: ${colors.pageColors.background};
	@media (max-width: 768px) {
		height: auto;
	}
`;

export const Section = styled.div<{
	direction?: 'column' | 'row-reverse' | 'column-reverse';
	width?: string;
}>`
	display: flex;
	flex-direction: ${({ direction }) => direction ?? 'row'};
	width: ${({ width }) => (width ? `${width}px` : '1250px')};
	@media (max-width: 768px) {
		width: 100%;
		height: auto;
		flex-direction: column;
		padding-bottom: 250px;
	}
`;