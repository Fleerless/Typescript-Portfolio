import React from 'react';
import {FooterContainer, IconSpan } from 'Footer/Styled/Footer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
		<FooterContainer>
			Deployed with
			<IconSpan>
				<FontAwesomeIcon
					icon={faAws}
					size="xl"
					bounce={true}
				/>
			</IconSpan>
		</FooterContainer>
	);
};

export default Footer;