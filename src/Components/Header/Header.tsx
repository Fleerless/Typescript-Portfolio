import React, { useRef } from 'react';
import HeaderContainer from './Styled/StyledHeader.styled';

type HeaderProps = {
    title: string;
    sections?: string[];
};

const Header: React.FC<HeaderProps> = ({ title, sections }) => {
	return (
		<HeaderContainer>
			<p>{title}</p>
			<section />
			<nav>
				<ul>
					{sections?.map((section, index) => (
						<a key={index} href={`#${section}`}>
							<li>{section}</li>
						</a>
					))}
				</ul>
			</nav>
		</HeaderContainer>
	);
};

export default Header;
