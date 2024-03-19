import React from 'react';
import { SVG } from 'About/Styled/Circle.styled';

const Circle: React.FC = () => {
    return (
		<SVG viewBox="0 0 350 350">
			<path
				id="curve"
				fill="transparent"
				d="M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 Z M 50 30 A 20 20 0 1 1 50 70 A 20 20 0 1 1 50 30 Z"
			/>
			<text width="350">
				<textPath xlinkHref="#curve">• Senior Software Engineer</textPath>
			</text>
		</SVG>
	);
};

export default Circle;