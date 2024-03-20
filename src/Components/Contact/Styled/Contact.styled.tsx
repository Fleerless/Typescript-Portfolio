import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'Utils/Components.styled';
import { contactItemsArray } from 'Contact/utils/data';
import { colors } from 'Utils/styles';

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    width: 100svw;
    height: 100svh;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 1250px;
    height: 260px;
`;

const LinkContainer = styled.div`
    // width: 500px;
    margin-bottom: 10px;
    padding: 10px;
    &:hover {
        cursor: pointer;
        border-radius: 10px;
        border: 1px solid ${colors.highlightColor};
    };
`;

const Description = styled.div`
    font-size: 20px;
    margin-left: 20px;
`;

const shakeAnimation = keyframes`
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
    100% { transform: rotate( 0.0deg) }`;

const IconAnimation = styled(FontAwesomeIcon)`
    size: 200px;
    &:hover {
        animation: ${shakeAnimation} 0.5s;
    }
`;

export const ContactItems =  contactItemsArray.map((item, index) => {
		return (
			<LinkContainer key={index}>
				<Link href={item.link} target='_blank' fontSize={32} hover row>
					<IconAnimation
						icon={item.icon}
						color={item.color}
					/>
                    <Description>{item.description}</Description>
				</Link>
			</LinkContainer>
		);
	});