// Code MovieReviews Here
import React from 'react';
const MovieReviews = (props) => (
    <ul className="review-list">
        {props.reviews.map(review => <li key={review.display_title} className="review">
            <h3>{review.display_title}</h3>
            <h4>{review.headline}</h4>
            {review.multimedia ? <img style={{width: review.multimedia.width, height: review.multimedia.height}} 
            src={review.multimedia.src} alt="poster"></img> : null}
            <p>{review.summary_short} {review.publication_date}</p>
            <a href={review.link.url} target="_blank">{review.link.suggested_link_text}</a>
            </li>)}

    </ul>
)
export default MovieReviews