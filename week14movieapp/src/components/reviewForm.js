import React, { useState, useEffect } from "react";
const renderStars = (numStars) => {
  const starIcons = ['☆', '☆', '☆', '☆', '☆'];
  for (let i = 0; i < numStars; i++) {
    starIcons[i] = '★';
  }
  return starIcons.join('');
};



const ReviewForm = ({ reviews, initialReviewsArray, setReviews, movieId, image }) => {
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
  
    const [formData, setFormData] = useState({
        id: initialReviewsArray.length + 1,
        movie_id: movieId,
        stars: 0,
        name: '',
        text: '',
    });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => { 
        e.preventDefault();

        const starString = renderStars(formData.stars); // Convert stars to a string of symbols
        setReviews((initialReviewsArray) => [...initialReviewsArray, { ...formData, stars: starString }]);
        setFormData({
          id: initialReviewsArray.length + 2,
          movie_id: movieId,
          stars: 0,
          name: '',
          text: '',
        });
      };
  useEffect(() => {
    console.log("REVIEWS updated:", reviews);
  }, [initialReviewsArray]); 
  
 

  


  return (
    <div className="card">
      <div className="card-header review-name">
        <h4>Add a Review</h4>
      </div>
    
      <form onSubmit={handleSubmit}>
      <div className="card-body review-body">
        <img src={image}></img> <br></br><br></br>
          
          <label>
            Stars: <br></br>
            <div className="stars">
            {generateStars()}
            </div>
          </label>
          
          <br></br><br></br>
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
      <div className="card-footer review-footer">
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
      </form>
      
    
    </div>
    
  );
}

export default ReviewForm;
