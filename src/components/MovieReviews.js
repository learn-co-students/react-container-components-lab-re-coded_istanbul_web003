// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    return (
        <div className="review-list">
            {props.reviews.map((review, index) => {
                return (
                    <div className="review" key={index} >
                        <h3><a href={review.link.url} target="_blank" >{review.headline}</a></h3>
                        <small>{review.publication_date} by {review.byline}</small>
                        <h5>{review.summary_short}</h5>
                        <img src={review.multimedia.src} width={review.multimedia.width} height={review.multimedia.height} />
                    </div>)
            })}
        </div>
    )
}

export default MovieReviews