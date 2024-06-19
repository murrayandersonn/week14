import React, { useEffect } from "react";
import Review from  "./review";

export default function ReviewList({movie, reviews, setReviews}){
    const filteredReviews = reviews.filter(review => review.movie_id === movie.id)

    useEffect(() => {
        console.log("Reviews updated:", filteredReviews);
    }, [filteredReviews]);

        return (
            <div>
                {filteredReviews.map((review) => <Review movie={movie} key={review.id} setReviews={setReviews} review={review}/>)}  
            </div>
)};
