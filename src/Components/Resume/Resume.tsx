import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Section, Container, LoadingAnimation, DownloadButton, PageSelecter, RightContent, SelecterContainer, SelecterContainerColumn, PageButton } from 'Resume/Styled/Resume.styles';
import { resume as resumeData } from 'Utils/data';
import { createPageOptions } from 'Resume/helpers/createPageOptions';
import resumePDF from 'Resume/documents/JeffFleerResume.pdf';
import { HandlePageChangeProps } from 'Resume/types';


const Resume: React.FC = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

	const [pageNumber, setPageNumber] = React.useState(1);

	
	function handlePageChange({event, up , down}: HandlePageChangeProps): void {
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
					<SelecterContainer>
						<SelecterContainerColumn>
							<div>Page:</div>
							<PageSelecter
								onChange={(event) => handlePageChange({ event })}
								value={pageNumber}
							>
								{createPageOptions(resumeData.numberOfPages)}
							</PageSelecter>
						</SelecterContainerColumn>
						<SelecterContainerColumn>
							<PageButton
								onClick={() => handlePageChange({ down: true })}
							>
								Prev
							</PageButton>
							<PageButton
								onClick={() => handlePageChange({ up: true })}
							>
								Next
							</PageButton>
						</SelecterContainerColumn>
					</SelecterContainer>
					<DownloadButton href={resumePDF} download>
						Download
					</DownloadButton>
				</RightContent>
			</Container>
		</Section>
	);
};

export default Resume;