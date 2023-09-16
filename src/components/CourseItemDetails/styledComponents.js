import styled from 'styled-components'

export const CourseDetailsContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto';
  }
`

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  //   border: 2px solid black;
  width: 85%;
  //   align-items: flex-start;
  margin-top: 80px;
  box-shadow: 4px 4px 16px 16px #f4f4f4;
`
export const CourseImage = styled.img`
  width: 33%;
`

export const SecondContainer = styled.div`
  //   border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 30px 35px 35px 35px;
  background-color: #ffffff;
`
export const CourseHeading = styled.h1`
  color: #1e293b;
  font-size: 28px;
  margin: 0;
  //   border: 2px solid black;
`
export const CourseDescription = styled.p`
  font-size: 20px;
  color: #475569;
  line-height: 2em;
  font-weight: 400;
`
