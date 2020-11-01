// Code MovieReviews Here
import React, { Component } from 'react'



export default function MovieReviews( {reviews} ) {
    console.log(reviews);
    return (
        <div className="review-list">
            {reviews.map((e)=>{
                return (
                    <div className="review">
                        <h2>{e.display_title}</h2>
                        <p>{e.summary_short}</p>
                    </div>
                )
            })}
        </div>
       
    )
}

