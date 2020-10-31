// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props) {
    return (
        <div className="review-list">
            {props.reviews.map((review)=>{
                return (
                    <div className="review">
                        <h2>{review.summary_short}</h2>
                    </div>
                )
            })}
        </div>
    )
}
