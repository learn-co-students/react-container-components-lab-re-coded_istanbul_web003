import React from "react"
import "isomorphic-fetch"
import MovieReviews from "./MovieReviews"

const NYT_API_KEY = "BiJ30ZdJWxfIsu1sxAlDRZnHYBEAHuyD"
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super()
    this.state = {
      reviews: [],
      searchTerm: "",
    }
  }

  handleSearchInput = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL + "&query=" + this.state.searchTerm)
      .then((resp) => resp.json())
      .then((data) => this.setState({ reviews: data.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews</label>
          <input type="text" onChange={this.handleSearchInput}></input>
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
