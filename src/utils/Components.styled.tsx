import styled from 'styled-components';

export const Container = styled.section<{
    direction?: 'column' | 'row-reverse' | 'column-reverse';
}>`
	display: flex;
	width: 100svw;
	height: 100svh;
	justify-content: center;
	align-items: center;
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
