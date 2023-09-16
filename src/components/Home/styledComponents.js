import styled from 'styled-components'

export const HomeContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    //   border: 2px solid yellow;
    font-family: 'Roboto';
    padding: 30px 100px 30px 100px;
  }
`
export const CoursesHeading = styled.h1`
  font-size: 38px;
  color: #1e293b;
`
export const CoursesUnOrderedListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  //   border: 2px solid yellow;
`
export const CourseListItem = styled.li`
  //   border: 2px solid black;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 70px;
  //   width: 18.3%;
  width: 100%;
`

export const CourseImage = styled.img`
  height: 65px;
  width: 65px;
  margin-right: 14px;
  //   border: 2px solid black;
`
export const CourseName = styled.p`
  font-size: 20px;
  color: #1e293b;
  font-weight: 600;
`
