import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'





export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""

    }

    createURL = (searchTerm)=>{
        const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'+ `query=${searchTerm}`
                + `api-key=${NYT_API_KEY}`;
        return URL; 
    }

    handleSearch = (e) => {
        this.setState({searchTerm: e.taget.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(this.createURL(this.state.searchTerm))
        .then(resp => resp.json())
        .then(reviewsData => this.setState({reviews: reviewsData.results}))
    }


    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                <label>Search Movie Reviews</label>
                <input type="text" onChange={this.handleSearch}></input>
                <button type="submit">Submit Here!</button>
                </form>
                {this.state.reviews.lenght > 0}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}


// Code SearchableMovieReviewsContainer Here

