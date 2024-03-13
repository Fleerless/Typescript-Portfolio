import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderContainer from './Styled/StyledHeader.styled';
import { parseRoute } from './utils/utils';
import { HeaderProps } from './utils/types';


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
