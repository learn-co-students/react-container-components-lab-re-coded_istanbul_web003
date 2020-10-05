import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: [],
  };
  handleSubmit(e) {
    e.preventDefault();
    fetch(URL + "&query=" + this.state.searchTerm)
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data.results }));
  }
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
            type="text"
            value={this.state.searchTerm}
          />
          <input type="submit" value="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
