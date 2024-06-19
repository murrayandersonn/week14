import React from "react";


export default function Review({review}) {
    console.log("Review was passed: ", review)

        return (
            <div className="container" key={review.id + review.movie_id}>
                <div className="card">
                    <div className="card-header review-name">
                        {review.stars} - {review.name}
                    </div>
                    <div className="card-body">
                        {review.text}
                    </div>
                </div>
            </div>
        );
    }

