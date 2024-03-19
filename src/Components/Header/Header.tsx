import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderContainer from 'Header/Styled/StyledHeader.styled';
import { parseRoute } from 'Header/utils/utils';
import { HeaderProps } from 'Header/utils/types';
import {
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { FaRegAddressBook } from 'react-icons/fa';



const Header: React.FC<HeaderProps> = ({ title, sections }) => {
	const icons = [ <AiOutlineHome key='Home' />, <AiOutlineUser key='About' />, <AiOutlineFundProjectionScreen key='Projects' />, <CgFileDocument key='Resume' />, <FaRegAddressBook key='Contact' /> ];
	return (
		<HeaderContainer>
			<p>{title}</p>
			<section />
			<nav>
				<ul>
					{sections?.map((section, index) => (
						<NavLink to={parseRoute(section)} key={index}>
							{icons[index]}
							<li>{section}</li>
						</NavLink>
					))}
				</ul>
			</nav>
		</HeaderContainer>
	);
};

export default Header;
