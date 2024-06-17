import React from "react";
import Movie from "./movie";
import Review from  "./review";
import Stars from "./stars";

export default function ReviewList({movie, reviews, setReviews}){
   
    const filteredReviews = reviews.filter(review => review.movie_id === movie.id)
    console.log(filteredReviews)
        return (
         <div key={filteredReviews.length + movie.id}>
          {filteredReviews && filteredReviews.map((review) => <Review review={review}/>)}  
          </div>
    )};
