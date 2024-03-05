import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-grow: 1;
  padding: 0 20px;
  section {
    flex-grow: 2;
  }
  nav {
    margin-right: 40px;
  }
  ul {
    display: flex;
    flex-grow: 1;
    width: 100%;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    margin-right: 40px;
    li {
      margin: 0 10px;
      cursor: pointer;
    }
    li:hover {
      text-decoration: underline;
    }
  }
`;

export default HeaderContainer;
