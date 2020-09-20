import React, { PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchBar from "./searchBar"

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends PureComponent{
    state = {
        searchTerm: "",
        reviews: []

    }
    handleSubmit = (e, searchQuery) => {
        e.preventDefault()
        fetch(URL + `&query=${searchQuery}`)
        .then(res=> res.json()) 
        .then(data=> this.setState({
            reviews: data.results
        }))
        
    }
    render(){
        return(
            <div className="searchable-movie-reviews">
                <SearchBar searchQuery={this.state.searchTerm} onSubmit={this.handleSubmit}></SearchBar>
                <MovieReviews  reviews={this.state.reviews}></MovieReviews>
            </div>
        )
    }
}