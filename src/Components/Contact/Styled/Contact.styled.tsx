import React from 'react';
import styled from 'styled-components';
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

export const LinkContainer = styled.div`
	margin-bottom: 10px;
	padding: 10px;
	border: 1px solid ${colors.pageColors.background};
	&:hover {
		cursor: pointer;
	}
`;

export const Description = styled.div`
    font-size: 20px;
    margin-left: 20px;
`;


export const IconAnimation = styled(FontAwesomeIcon)`
    size: 200px;
`;

export const ContactItems = (hoveredItem: number, updateHoverItem:  (index: number) => void) => contactItemsArray.map((item, index) => {
    
		return (
			<div key={index} onMouseEnter={() => updateHoverItem(index)} onMouseLeave={() => updateHoverItem(10)}>
				<LinkContainer>
					<Link
						href={item.link}
						target="_blank"
						fontSize={32}
						hover
						row
					>
						<IconAnimation
							icon={item.icon}
							color={item.color}
							shake={index === hoveredItem}
						/>
						<Description>{item.description}</Description>
					</Link>
				</LinkContainer>
			</div>
		);
	});