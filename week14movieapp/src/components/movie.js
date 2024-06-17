import React from "react";
import ReviewForm from './reviewForm';
import Review from './review';
import Stars from './stars';
import ReviewList from './reviewList';

export default function Movie ({movie, reviews, setReviews}) {
    
    const {id, title, releaseYear, image, cast, synopsis, rating} = movie
    
        return (
            <div className="card w-25">
                <div className="card-header">
                   {title}, {releaseYear}
                </div>
                <div className="card-body">
                    <div>
                        <img src={image}></img><br></br><br></br>
                    </div>
                    <div>
                        Starring: <br></br>
                        {cast}<br></br><br></br>
                        {synopsis}<br></br><br></br>
                    </div>
                    <div>
                        Rated: {rating}
                    </div>
                    <div>
                       
                    </div>
                </div>
                <div className="card-footer">
                    <ReviewList movie={movie} reviews={reviews} setReviews={setReviews}/> 
                </div>
            </div>
        )
    }
