import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
                reviews:[],
                searchTerm:"all"
        }
    }

    getReviews = () => {
        fetch(URL + `&query=${this.state.searchTerm}`).then(res => res.json()).then(json => this.setState({reviews:json.results}))
    }

    componentDidMount(){
        this.getReviews()
    }

    handelSubmit = (event) => {
        event.preventDefault()
    }

    handelChange = (event) => {
        this.setState({
            searchTerm : event.target.value
        })
        this.getReviews()
    }


    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handelSubmit}>
                    <input type='text' onChange={this.handelChange} />
                    <input type='submit' />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
} 

export default SearchableMovieReviewsContainer;