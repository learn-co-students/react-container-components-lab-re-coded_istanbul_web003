import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            reviews: [],
            searchTerm: []
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();

        fetch(URL)
            .then(res=>res.json())
            .then(data=>this.setState({
                ...this.state,
                reviews: data.results
            }))
        }

    handleChange = (e) => {
        this.setState({...this.state, searchTerm:e.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text"></input>
                    <button type="submit"></button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}