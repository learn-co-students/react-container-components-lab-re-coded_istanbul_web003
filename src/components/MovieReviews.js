import React from 'react'

const MovieReviews = ({review}) => (
    <div className="review">
            <h2>{review.headline}</h2>
            <h4>{review.publication_date}</h4>
            <p>{review.summary_short}</p>
        </div>
)

export default MovieReviews;