import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto';
  }
`

export const NotFoundImage = styled.img`
  min-width: 300px;
  width: 32%;
  max-width: 440px;
  //   border: 2px solid black;
  margin-bottom: 8px;
`
export const Heading = styled.h1`
  font-size: 40px;
  color: #475569;
  font-weight: 500;
  margin-bottom: 21px;
`
export const Description = styled.p`
  font-size: 17px;
  color: #475569;
  margin: 0;
  font-weight: 400;
`
