import React from 'react';
import { Section, Container } from 'Utils/Components.styled';
import { ContactItems } from 'Contact/Styled/Contact.styled';


const Contact: React.FC = () => {
    return (
        <Container>
            <Section direction='column'>
                {ContactItems}
            </Section>
        </Container>
        );
};

export default Contact;