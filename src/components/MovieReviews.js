// Code MovieReviews Here
import React from "react";

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.length !== 0
        ? reviews.map((review) => {
            return (
              <div key={review.display_title}>
                <img
                  src={review.multimedia ? review.multimedia.src : ""}
                  alt="someImage"
                />
                <h4>{review.display_title}</h4>
                <p>{review.summary_short}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default MovieReviews;
