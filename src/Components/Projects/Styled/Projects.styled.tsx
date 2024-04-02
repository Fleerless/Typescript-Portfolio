import styled from 'styled-components';
import { colors } from 'Utils/styles';


export const CalendarContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const GithubLinkContainer = styled.div`
    width: 844px;
    margin-bottom: 10px;
`;

export const UserName = styled.div`
    margin-left: 10px;
    &:hover {
        color: ${colors.highlightColor} !important;
    }
`;