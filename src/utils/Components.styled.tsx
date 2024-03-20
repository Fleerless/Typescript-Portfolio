import styled from 'styled-components';
import { colors } from 'utils/styles';

export const Container = styled.section<{
    direction?: 'column' | 'row-reverse' | 'column-reverse';
}>`
	display: flex;
	width: 100svw;
	height: 100svh;
	justify-content: center;
	align-items: center;
	background-color: ${colors.pageColors.background};
`;

export const Section = styled.div<{
	direction?: 'column' | 'row-reverse' | 'column-reverse';
	width?: string;
}>`
	display: flex;
	flex-direction: ${({ direction }) => direction ?? 'row'};
	width: ${({ width }) => (width ? `${width}px` : '1250px')};
	height: 400px;
`;

export const Link = styled.a<{
	color?: string;
	hover?: boolean;
	margin?: number;
	fontSize?: number;
	row?: boolean;
}>`
	margin-right: ${({ margin }) => (margin ? `${margin}px` : '15px')};
	font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '24px')};
	color: black;
	text-decoration: none;
	&:hover {
		cursor: ${({ hover }) => (hover ? 'pointer' : 'default')};
		color: ${({ color }) => color ?? 'black'};
	}
	${({ row }) => row && 'display: flex; flex-direction: row; align-items: center;'};
`;