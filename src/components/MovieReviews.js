// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {
  const renderReviews = () => {
    return props.reviews.map((movieReview, index) => (
      <div className="review" key={movieReview.display_title + index}>
        <img src={movieReview.multimedia.src} alt="movie"></img>
        <h3>{movieReview.display_title}</h3>
        <h5>{movieReview.publication_date}</h5>
        <p>{movieReview.summary_short}</p>
      </div>
    ));
  };

  console.log(props);
  return <div className="review-list">{renderReviews()}</div>;
};

export default MovieReviews;