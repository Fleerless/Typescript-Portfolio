import React from 'react';
import { Section, Container } from 'Utils/Components.styled';
import {
	ContactItems,
	ContactItemsContainer,
} from 'Contact/Styled/Contact.styled';

const Contact: React.FC = () => {
    const [hoverItem, setHoverItem] = React.useState<number>(10);

    return (
        <Container>
            <Section direction='column'>
                <ContactItemsContainer>
                    {ContactItems(hoverItem, setHoverItem)}
                </ContactItemsContainer>
            </Section>
        </Container>
        );
};

export default Contact;