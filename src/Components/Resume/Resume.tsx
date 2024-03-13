import React from 'react';
import { Document } from 'react-pdf';
import { resume as resumeData } from '../../utils/data';

const Resume: React.FC = () => {
    return (
    <Document file={resumeData.resumeLocation}/>
    );
};

export default Resume;