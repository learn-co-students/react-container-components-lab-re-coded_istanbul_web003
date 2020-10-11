// Code MovieReviews Here
import React from 'react';
 
const MovieReviews = ({reviews}) => (

  <div className="review-list">
     { reviews.map(r => <div className="review">
        <h3>{r.byline}</h3>
        <p>{r.display_title}</p>
        <p>Summary: {r.summary_short}</p><hr/>
     </div>) }
  </div>
)
 
export default MovieReviews;