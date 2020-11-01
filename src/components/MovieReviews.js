// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props){
    return (
        <div className="review-list">
            {props.reviews.map((e)=>{
                return (
                    <div className="review">
                        <h2>{e.display_title}</h2>
                        <p>{e.summary_short}</p>
                    </div>
                )
            })}
        </div>
    )
};



 