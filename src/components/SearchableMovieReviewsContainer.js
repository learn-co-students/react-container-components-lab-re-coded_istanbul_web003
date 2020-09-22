import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL)
            .then(resp => resp.json())
            .then(data => this.setState({
                ...this.state,
                reviews: data.results
            }))
    }

    handleInput = (event) => {
        this.setState({ ...this.state, searchTerm: event.target.value })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput} type="text" />
                    <button type="submit">Search</button>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
