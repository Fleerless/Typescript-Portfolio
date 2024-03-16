import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderContainer from 'Header/Styled/StyledHeader.styled';
import { parseRoute } from 'Header/utils/utils';
import { HeaderProps } from 'Header/utils/types';


const Header: React.FC<HeaderProps> = ({ title, sections }) => {
	return (
		<HeaderContainer>
			<p>{title}</p>
			<section />
			<nav>
				<ul>
					{sections?.map((section, index) => (
						<NavLink to={parseRoute(section)} key={index}>
							<li>{section}</li>
						</NavLink>
					))}
				</ul>
			</nav>
		</HeaderContainer>
	);
};

export default Header;
