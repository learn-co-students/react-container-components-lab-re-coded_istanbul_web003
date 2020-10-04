import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component{
    state = {
          reviews: []
    }
    

    componentDidMount() {
      fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({reviews: data.results}))
        //it doesnt work with forEach here
        // console.log("review", data.results[0].summary_short)
        // data.results.forEach(movie => {
        //     this.setState([{...reviews, reviews: movie.summary_short}])
        // });        
    }
      
      render (){
        // console.log("state",this.state)
          return (<div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews} />
          </div>)
      }
}