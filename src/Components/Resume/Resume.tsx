import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Section, Container, LoadingAnimation, DownloadButton, PageSelecter, RightContent, SelecterContainer, PageButton } from 'Resume/Styled/Resume.styles';
import { resume as resumeData } from 'Utils/data';
import { createPageOptions } from 'Resume/helpers/createPageOptions';
import resumePDF from 'Resume/documents/JeffFleerResume.pdf';
import { HandlePageChangeProps } from 'Resume/types';


const Resume: React.FC = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

	const [pageNumber, setPageNumber] = React.useState(1);

	function hanglePageChange({event, up, down}: HandlePageChangeProps) {
		event && setPageNumber(parseInt(event.target.value));
		up && pageNumber < resumeData.numberOfPages && setPageNumber(pageNumber + 1);
		down && pageNumber > 1 && setPageNumber(pageNumber - 1);
	}

    return (
		<Section>
			<Container>
				<Document
					file={resumePDF}
					loading={<LoadingAnimation />}
					className={'pdf-container'}
				>
					<Page
						pageNumber={pageNumber}
						scale={1.4}
						renderTextLayer={false}
						renderAnnotationLayer={false}
						className={'pdf-page'}
					/>
				</Document>
				<RightContent>
					<DownloadButton href={resumePDF} download>
						Download
					</DownloadButton>
					<SelecterContainer>
						<PageSelecter
							onChange={(event) => hanglePageChange({event})} value = {pageNumber}
						>
							{createPageOptions(resumeData.numberOfPages)}
						</PageSelecter>
						<PageButton
							onClick={() => hanglePageChange({up: true})}
						>
							+
						</PageButton>
						<PageButton
							onClick={() => hanglePageChange({down: true})}
						>
							-
						</PageButton>
					</SelecterContainer>
				</RightContent>
			</Container>
		</Section>
	);
};

export default Resume;