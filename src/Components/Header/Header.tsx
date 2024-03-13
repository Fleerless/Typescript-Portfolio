import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderContainer from './Styled/StyledHeader.styled';
import { log } from 'console';

type HeaderProps = {
    title: string;
    sections?: string[];
};

const parseRoute = (section: string) => {
	return section.toLowerCase() === 'home' ?
		'/' :
		section.replace(/^/, '/');
};

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
