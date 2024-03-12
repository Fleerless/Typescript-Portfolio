import React from 'react';
import {FooterContainer, IconSpan } from './Styled/Footer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
		<FooterContainer>
			Deployed with
            <IconSpan>
			<FontAwesomeIcon icon={faAws} size='xl' />
            </IconSpan>
		</FooterContainer>
	);
};

export default Footer;