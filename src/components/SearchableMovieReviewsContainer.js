import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    fetchReviews = (searchTerm) => {
        const URL_FINAL = URL + `&query=${searchTerm}`
        fetch(URL_FINAL)
            .then(res => res.json())
            .then(data => {
                this.setState({ reviews: data.results })})
            .catch(err => console.log(err))
    }

    handleClick = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.fetchReviews(this.state.searchTerm);
        this.setState({searchTerm: ""})
    }

    render() {
        return (
            <div className="review-list searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label for="searchTerm">
                        <input id="searchTerm" name="searchTerm" type="search" value={this.state.searchTerm} onChange={this.handleClick}></input>
                    </label>
                    <input id="submit-btn" type="submit" value="Search"></input>
                </form>
                {this.state.reviews.length === 0 ? '<p>No results found :( </p>':''}
                {this.state.reviews.map(review => <MovieReviews key={review.date_updated+review.display_title} review={review} />)}
            </div>
        )
    }
}
