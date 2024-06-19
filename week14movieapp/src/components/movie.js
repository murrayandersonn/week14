import React from "react";
import ReviewForm from './reviewForm';
import ReviewList from './reviewList';


const Movie = ({ initialReviewsArray, movie, reviews, setReviews }) => {
    const { id, title, releaseYear, image, cast, synopsis, rating } = movie;
    
  
    return (
      <div className="card w-25">
        <div className="card-header">
          {title}, {releaseYear}
        </div>
        <div className="card-body">
          <div>
            <img src={image}></img>
            <br></br>
            <br></br>
          </div>
          <div>
            Starring: <br></br>
            {cast}
            <br></br>
            <br></br>
            {synopsis}
            <br></br>
            <br></br>
          </div>
          <div>
            Rated: {rating}
            <br></br>
            <br></br>
          </div>
          <div>
            <ReviewList movie={movie} movieId={movie.id} reviews={reviews} initialReviewsArray={initialReviewsArray} setReviews={setReviews} />
          </div>
        </div>
        <div className="card-footer">
          <ReviewForm reviews={reviews} movie={movie} setReviews={setReviews} movieId={movie.id} image={movie.image} initialReviewsArray={initialReviewsArray}  />
        </div>
      </div>
    );
  };
export default Movie;
