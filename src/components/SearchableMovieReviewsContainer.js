import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    state = {
        reviews: [],
        searchTerm: "all"
    }

    fetch = () => {
        fetch(URL+`&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.setState({ reviews: data.results }))
        // console.log(data)
        
      }
    // componentDidMount() {return this.fetch()}
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.searchTerm !== this.state.searchTerm) {
    //         return this.fetch()
    //     }
    //   }

    handleChange = (e)=> this.setState({searchTerm: e.target.value}) 
      
    handleSubmit = (e)=>{
        e.preventDefault()
        this.fetch()
    }

      render (){
        //   console.log("search",this.state.reviews)
        //   console.log(this.state.searchTerm)
          return (
            <div className="searchable-movie-reviews">
               <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} />
                    <button type='submit'>Search</button>
                </form>
                <div >
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>)
      }
}