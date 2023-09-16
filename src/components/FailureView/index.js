import {
  FailureViewContainer,
  FailureViewImage,
  Heading,
  Description,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetryAPICall} = props

  const onClickRetryButton = () => {
    onRetryAPICall()
  }

  return (
    <FailureViewContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <Heading> Oops! Something Went Wrong</Heading>
      <Description>
        We cannot seem to find the page you are looking for.
      </Description>
      <RetryButton onClick={onClickRetryButton}> Retry </RetryButton>
    </FailureViewContainer>
  )
}

export default FailureView
