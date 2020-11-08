import React from 'react'

function MovieReviews(props) {
    return (
        <div className='review-list'>
            {props.reviews.map((review, key) => <div key={key} className='review' > {review.display_title} </div>)}
        </div>
    )
} 

export default MovieReviews;