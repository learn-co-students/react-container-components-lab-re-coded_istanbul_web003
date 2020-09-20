import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { toughCookie } from 'jsdom';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    fetchReviews = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => this.setState({reviews: data.results}))
    }

    componentDidMount() {
        this.fetchReviews();
    }

    render() {
        return (
            <div className="review-list latest-movie-reviews">
                {this.state.reviews.map(review => <MovieReviews key={review.date_updated+review.display_title} review={review} />)}
            </div>
        )
    }
}
