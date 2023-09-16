import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    height: 15vh;
    //   border: 2px solid black;
    background-color: #f1f5f9;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
export const TechEraLogo = styled.img`
  height: 62px;
  width: 190px;
  margin-left: 100px;
  //   border: 2px solid black;
`
export const WebsiteLogoButton = styled.button`
  margin: 0;
  margin-left: 100px;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
`
