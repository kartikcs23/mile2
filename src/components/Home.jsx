import React, { useState } from 'react';
import './RatingComments.css';

const RatingComments = () => {
  const [dishes] = useState([
    {
      title: "Classic Burger",
      img: "https://th.bing.com/th?id=OIP.JJ_FIcJSsqBhm39OemhxSAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      title: "Veggie Pizza",
      img: "https://th.bing.com/th?id=OIP.Phw5Hx0hZF-oJxJBdlwMWgHaFW&w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      title: "Pasta Primavera",
      img: "https://www.bing.com/th?id=OIP.GlU4Z0RHvO5RvAaz3GsYFQAAAA&w=146&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  ]);

  const [reviews, setReviews] = useState({});

  const handleRatingChange = (dish, rating) => {
    setReviews((prev) => ({
      ...prev,
      [dish]: { ...(prev[dish] || {}), rating },
    }));
  };

  const handleCommentChange = (dish, comment) => {
    setReviews((prev) => ({
      ...prev,
      [dish]: { ...(prev[dish] || {}), comment },
    }));
  };

  return (
    <div className="rating-comments-page">
      <h1 className="page-title">✨ Rate & Review Our Dishes ✨</h1>
      <div className="dishes-container">
        {dishes.map((dish, index) => (
          <div className="dish-card" key={index}>
            <img src={dish.img} alt={dish.title} className="dish-img" />
            <h3 className="dish-title">{dish.title}</h3>
            <div className="rating-container">
              <span>Rate:</span>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`star ${reviews[dish.title]?.rating > i ? "filled" : ""}`}
                  onClick={() => handleRatingChange(dish.title, i + 1)}
                >
                  ★
                </span>
              ))}
            </div>
            <textarea
              placeholder="Leave your comment here..."
              value={reviews[dish.title]?.comment || ""}
              onChange={(e) => handleCommentChange(dish.title, e.target.value)}
              className="comment-box"
            ></textarea>
          </div>
        ))}
      </div>
      <div className="reviews-summary">
        <h2>🌟 Reviews Summary 🌟</h2>
        {Object.keys(reviews).length === 0 ? (
          <p>No reviews yet. Be the first to share your thoughts!</p>
        ) : (
          Object.entries(reviews).map(([dish, review], index) => (
            <div key={index} className="review-summary-item">
              <h3>{dish}</h3>
              <p>Rating: {review.rating}/5</p>
              <p>Comment: {review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RatingComments;
