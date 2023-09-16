import styled from 'styled-components'

export const FailureViewContainer = styled.div`
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

export const FailureViewImage = styled.img`
  min-width: 400px;
  width: 40%;
  max-width: 560px;
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
export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4656a1;
  padding: 14px 38px 14px 38px;
  border: 0;
  font-family: 'Roboto';
  margin-top: 16px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`
