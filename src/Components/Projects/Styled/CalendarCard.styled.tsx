import styled from 'styled-components';
import { colors } from 'Utils/styles';


export const CalendarContainer = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 100px;
	@media screen and (max-width: 768px) {
        margin-top: 20px;
	}
`;

export const GithubLinkContainer = styled.div`
	width: 844px;
	margin-bottom: 10px;
    &:hover {
        div {
		    color: ${colors.highlightColor} !important;
        }
	}
`;

export const UserName = styled.div`
    margin-left: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;   
    
`;