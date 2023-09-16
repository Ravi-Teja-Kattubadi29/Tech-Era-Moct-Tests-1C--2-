import {Component} from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar'
import LoaderCom from '../LoaderCom'
import FailureView from '../FailureView'
// import NotFound from '../NotFound'
import {
  HomeContainer,
  CoursesHeading,
  CoursesUnOrderedListContainer,
  CourseListItem,
  CourseImage,
  CourseName,
} from './styledComponents'

const APIStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Home extends Component {
  state = {coursesList: [], apiStatus: APIStatusConstants.initial}

  componentDidMount() {
    this.getCourses()
  }

  onSuccessCoursesResponse = async coursesApiResponse => {
    const coursesData = await coursesApiResponse.json()

    const updatedCoursesData = coursesData.courses.map(eachCourse => ({
      id: eachCourse.id,
      logoUrl: eachCourse.logo_url,
      name: eachCourse.name,
    }))

    this.setState({
      coursesList: updatedCoursesData,
      apiStatus: APIStatusConstants.success,
    })
  }

  onFailuresCoursesResponse = () => {
    this.setState({apiStatus: APIStatusConstants.failure})
  }

  getCourses = async () => {
    this.setState({apiStatus: APIStatusConstants.inProgress})
    const coursesApiUrl = 'https://apis.ccbp.in/te/courses'
    const coursesApiResponse = await fetch(coursesApiUrl)
    if (coursesApiResponse.status === 200) {
      this.onSuccessCoursesResponse(coursesApiResponse)
    }
    this.onFailuresCoursesResponse()
  }

  renderHome = () => {
    const {coursesList} = this.state
    return (
      <HomeContainer>
        <CoursesHeading> Courses </CoursesHeading>
        <CoursesUnOrderedListContainer>
          {coursesList.map(eachCourse => {
            const {id, name, logoUrl} = eachCourse
            return (
              <Link
                to={`courses/${id}`}
                style={{
                  textDecoration: 'none',
                  minWidth: '185px',
                  width: '20%',
                  maxWidth: '235px',
                  cursor: 'pointer',
                  outline: 'none',
                  //   border: '2px solid black',
                }}
                key={id}
              >
                <CourseListItem key={id}>
                  <CourseImage src={logoUrl} alt={name} />
                  <CourseName> {name} </CourseName>
                </CourseListItem>
              </Link>
            )
          })}
        </CoursesUnOrderedListContainer>
      </HomeContainer>
    )
  }

  onRetryAPICall = () => {
    this.getCourses()
  }

  renderSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case APIStatusConstants.inProgress:
        return <LoaderCom />
      case APIStatusConstants.success:
        return this.renderHome()
      case APIStatusConstants.failure:
        return <FailureView onRetryAPICall={this.onRetryAPICall} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <NavBar />
        {this.renderSwitch()}
      </>
    )
  }
}

export default Home
