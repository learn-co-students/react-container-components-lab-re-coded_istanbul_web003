// Code MovieReviews Here
import React from "react"

export default function MovieReviews ({reviews}) {
    const showReviews= ()=>reviews.map((movie, i )=> <div key= {i}  className="review">{movie.summary_short}</div>)
    return <div className="review-list">
       {  showReviews() }
    </div>
};