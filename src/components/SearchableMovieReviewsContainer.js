import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
      super();
  
      this.state = {
        reviews: [],
        searchTerm: ""
      };
    }
  
    handleSearchInput = event => {
      this.setState({
        searchTerm: event.target.value
      });
    };
  
    fetchReviews = event => {
      event.preventDefault();
  
      fetch(`${URL}` + this.state.searchTerm)
        .then(response => response.json())
        .then(reviews => this.setState({ reviews: reviews.results }));
  
      if (document.querySelector(".latest-movie-reviews")) {
        document.querySelector(".latest-movie-reviews").remove();
      }
  
      this.setState({
        searchTerm: ""
      });
    };
  
    render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.fetchReviews}>
            <label>
              Search for a topic:
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.handleSearchInput}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
  
          <div>
            <MovieReviews reviews={this.state.reviews} />
          </div>
        </div>
      );
    }
  }
  
  export default SearchableMovieReviewsContainer;