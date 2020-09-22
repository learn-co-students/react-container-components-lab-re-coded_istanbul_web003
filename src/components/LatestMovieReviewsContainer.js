import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
/*
const LatestMovieReviewsContainer = () => {
    const [reviews, setReviews] = React.useState([])
    fetch(URL)
        .then(resp => resp.json())
        .then(data => setReviews(data.results))
    return (reviews.map(review => <MovieReviews headline={review.headline} publication_date={review.publication_date} byline={review.byline} summary_short={review.summary_short} link={review.link} multimedia={review.multimedia} />))

}*/

export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }
    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(data => this.setState({ reviews: data.results }))

    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />;
            </div>

        )
    }
}
