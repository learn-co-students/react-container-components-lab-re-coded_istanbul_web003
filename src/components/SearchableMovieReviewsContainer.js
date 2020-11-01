import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "92fCETxPAhpCgld1";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
//will provide a searchable interface allowing the user to enter a search term
// and then receive a list of reviews that match the search term(s)
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL + "&query=" + this.state.searchTerm)
      .then((response) => response.json())
      .then((data) => this.setState({ reviews: data.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.searchTerm}
            placeholder="Search Reviews"
          />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
