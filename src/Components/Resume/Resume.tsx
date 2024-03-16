import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Section, Container, LoadingAnimation, DownloadButton, PageSelecter } from 'Resume/Styled/Resume.styles';
import { resume as resumeData } from 'Utils/data';
import resumePDF from 'Resume/documents/JeffFleerResume.pdf';


const Resume: React.FC = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

    return (
		<Section>
			<Container>
				<Document
					file={resumePDF}
                    loading={<LoadingAnimation />}
                    className={'pdf-container'}
					>
					<Page pageNumber={1} scale={1.4} renderTextLayer={false} renderAnnotationLayer={false} className={'pdf-page'} />
				</Document>
                <DownloadButton>Download</DownloadButton>
                <PageSelecter />
			</Container>
		</Section>
	);
};

export default Resume;