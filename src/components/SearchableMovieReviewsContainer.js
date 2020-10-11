import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
//https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=<your-api-key>&query=<search-term>
// Code SearchableMovieReviewsContainer Here


class SearchableMovieReviewsContainer extends Component {
    constructor() {
      super()
   
      this.state = {
        reviews: [],
        searchTerm:""
      };
    }
   
    // componentDidMount() {
    //   fetch(URL)
    //     .then(response => response.json())
    //     .then(reviewData => this.setState({ reviews: reviewData.results }))
    //   //  .then(reviewData => console.log(reviewData.results))
    // }

    handleChange = (e) => {
        console.log(e.target.value)
       // this.setState({searchTerm: "hello"})
        e.target.value && this.setState({searchTerm: e.target.value});
      }

    handleSubmit = (e) => {
        console.log(URL+"&query="+this.state.searchTerm)
        e.preventDefault();
        fetch(URL + "&query=" + this.state.searchTerm)
            .then(response => response.json())
            .then(reviewData => this.setState({ reviews: reviewData.results }))
            //.then(reviewData => console.log(reviewData.results))
    }
    
   
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange}/>
                <button type="submit">Search</button>
            </form>
            <div>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        </div>
      )
    }
  }
   
  export default SearchableMovieReviewsContainer;