// Code MovieReviews Here
import React from "react"

export default function MovieReviews({ reviews }) {
  const movieReviews = () =>
    reviews.map((movie, i) => (
      <div key={i} className="review">
        <div>
          <h3>{movie.headline}</h3>
          <p>{movie.summary_short}</p>
        </div>
      </div>
    ))
  return <div className="review-list">{movieReviews()}</div>
}
