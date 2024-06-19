import React, { useState, useEffect } from "react";
import MovieList from "./movieList";
import ReviewList from "./reviewList";


const ReviewForm = ({ reviews, initialReviewsArray, setReviews, movieId, image }) => {
  const renderStars = () => {
    const starIcons = ['☆', '☆', '☆', '☆', '☆'];
    for (let i = 0; i < reviews.stars; i++) {
      starIcons[i] = '★';
    }
    return starIcons.join('');
  };
    const [formData, setFormData] = useState({
      id: initialReviewsArray.length + 1,
      movie_id: movieId,
      stars: '',
      name: '',
      text: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setReviews((initialReviewsArray) => [...initialReviewsArray, formData]);
      setFormData({
        id: initialReviewsArray.length + 2,
        movie_id: movieId,
        stars: {renderStars},
        name: '',
        text: '',
      });
    };
  useEffect(() => {
    console.log("REVIEWS updated:", reviews);
  }, [initialReviewsArray]); 
  
 
  const handleStarClick = (numStars) => {
    setFormData({ ...formData, stars: numStars });
  };

  const generateStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= formData.stars ? 'active' : ''}`}
          onClick={() => handleStarClick(i)}
        >
          {i <= formData.stars ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };


  return (
    <div className="card">
      <div className="card-header review-name">
        <h4>Add a Review</h4>
      </div>
    
      <form onSubmit={handleSubmit}>
      <div className="card-body">
        <img src={image}></img> <br></br><br></br>
          
          <label>
            Stars: <br></br>
            {generateStars()}
          </label>
          <br />
          <label>
            Name: <br></br>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Text: <br></br>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
          
          </label>
      </div>
        <br />
      <div className="card-footer review-name">
        <button type="submit">Add Review</button>
      </div>
      </form>
      
    
    </div>
    
  );
}

export default ReviewForm;
