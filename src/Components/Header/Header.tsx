import React from 'react';
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
					{sections &&
            sections.map((section, index) => <li key={index}>{section}</li>)}
				</ul>
			</nav>
		</HeaderContainer>
	);
};

export default Header;
