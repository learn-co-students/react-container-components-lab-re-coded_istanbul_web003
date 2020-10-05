import React from "react";
import { head } from "fetch-mock";

const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}></a>
        <br />
        <span className="author">{byline}</span>
      </header>
      <blockquote>summary_short</blockquote>
    </div>
  );
};
const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(Review)}</div>
);

MovieReviews.defaultProps = {
  reviews: [],
};
export default MovieReviews;
