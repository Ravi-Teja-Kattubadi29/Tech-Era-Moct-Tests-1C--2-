import {Component} from 'react'
import {
  CourseDetailsContainer,
  CourseContainer,
  CourseImage,
  CourseHeading,
  SecondContainer,
  CourseDescription,
} from './styledComponents'
import NavBar from '../NavBar'
import LoaderCom from '../LoaderCom'
import FailureView from '../FailureView'

const APIStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseItemDetails extends Component {
  state = {courseDetails: {}, apiStatus: APIStatusConstants.initial}

  componentDidMount() {
    this.getCourseDetails()
  }

  onSuccessCourseDetails = async courseDetailsResponse => {
    const courseDetailsData = await courseDetailsResponse.json()

    const updatedCourseDetailsData = {
      id: courseDetailsData.course_details.id,
      description: courseDetailsData.course_details.description,
      name: courseDetailsData.course_details.name,
      imageUrl: courseDetailsData.course_details.image_url,
    }

    this.setState({
      courseDetails: updatedCourseDetailsData,
      apiStatus: APIStatusConstants.success,
    })
  }

  onFailureCourseDetails = () => {
    this.setState({apiStatus: APIStatusConstants.failure})
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: APIStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const courseDetailsApiUrl =
      //   'https://apis.ccbp.in/te/courses/736d1108-d98b-482f-bfd6-234498c3571f'
      `https://apis.ccbp.in/te/courses/${id}`

    const courseDetailsResponse = await fetch(courseDetailsApiUrl)
    if (courseDetailsResponse.status === 200) {
      this.onSuccessCourseDetails(courseDetailsResponse)
    }
    this.onFailureCourseDetails()
  }

  renderCourseItemDetails = () => {
    const {courseDetails} = this.state
    const {name, imageUrl, description} = courseDetails
    return (
      <CourseDetailsContainer>
        <CourseContainer>
          <CourseImage src={imageUrl} alt={name} />
          <SecondContainer>
            <CourseHeading> {name} </CourseHeading>
            <CourseDescription>{description}</CourseDescription>
          </SecondContainer>
        </CourseContainer>
      </CourseDetailsContainer>
    )
  }

  onRetryAPICall = () => {
    this.getCourseDetails()
  }

  renderResults = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case APIStatusConstants.inProgress:
        return <LoaderCom />
      case APIStatusConstants.success:
        return this.renderCourseItemDetails()
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
        {this.renderResults()}
      </>
    )
  }
}

export default CourseItemDetails
