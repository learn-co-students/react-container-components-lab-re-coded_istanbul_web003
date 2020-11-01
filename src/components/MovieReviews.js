// Code MovieReviews Here
import React from "react";

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review) => (
      <div className="review">
        <h2>{review.display_title}</h2>
        <span>
          <b>Written by:</b> {review.byline}|
        </span>
        <span>
          <b>Published at:</b> {review.publication_date}
        </span>
        <p>
          <b>Review Summary:</b>
          {review.summary_short}
        </p>
      </div>
    ))}
  </div>
);

export default MovieReviews;
