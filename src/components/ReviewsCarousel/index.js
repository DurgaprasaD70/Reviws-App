import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  onShowReviews = () => {
    const {reviewsList} = this.props
    const {reviewIndex} = this.state
    console.log()

    if (reviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex + 1}))
    }
  }

  onShowPreviousReviews = () => {
    const {reviewsList} = this.props
    const {reviewIndex} = this.state

    if (reviewIndex > 0) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewIndex} = this.state
    const showReview = reviewsList[reviewIndex]
    const {imgUrl, username, companyName, description} = showReview

    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="carousel-container">
          <button
            className="button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onShowPreviousReviews}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="info-con">
            <img src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            className="button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onShowReviews}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
