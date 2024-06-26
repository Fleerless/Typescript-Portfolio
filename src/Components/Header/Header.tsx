import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderContainer, { DesktopNav, MobileNav, HamburgerMenu, MobileNavMenu, Div } from 'Header/Styled/StyledHeader.styled';
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
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	const mobileSections = sections?.filter(section => section !== 'Resume');
	const icons = [ <AiOutlineHome key='Home' />, <AiOutlineUser key='About' />, <AiOutlineFundProjectionScreen key='Projects' />, <CgFileDocument key='Resume' />, <FaRegAddressBook key='Contact' /> ];
	
	return (
		<HeaderContainer>
			<p>{title}</p>
			<section />
			<DesktopNav>
				<ul>
					{sections?.map((section, index) => (
						<NavLink to={parseRoute(section)} key={index}>
							{icons[index]}
							<li>{section}</li>
						</NavLink>
					))}
				</ul>
			</DesktopNav>
			<MobileNav>
				<div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					{HamburgerMenu(mobileMenuOpen)}
				</div>
				{mobileMenuOpen && (
					<MobileNavMenu>
						{mobileSections?.map((section, index) => (
							<Div
								key={index}
								onClick={() =>
									setMobileMenuOpen(!mobileMenuOpen)
								}
							>
								<NavLink to={parseRoute(section)}>
									{icons[index]}
									<li>{section}</li>
								</NavLink>
							</Div>
						))}
					</MobileNavMenu>
				)}
			</MobileNav>
		</HeaderContainer>
	);
};

export default Header;
