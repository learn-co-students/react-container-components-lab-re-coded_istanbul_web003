import React from "react"
import "isomorphic-fetch"
import MovieReviews from "./MovieReviews"

const NYT_API_KEY = "BiJ30ZdJWxfIsu1sxAlDRZnHYBEAHuyD"
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          reviews: response.results,
        })
      )
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
