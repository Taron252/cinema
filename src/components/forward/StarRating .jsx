import React, { useState } from "react";
import "./StarRating.scss";

const StarRating = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (starRating) => {
    setHoveredRating(starRating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (starRating) => {
    onRatingChange(starRating);
  };

  const renderStars = () => {
    const starIcons = [];
    const maxRating = 7;

    for (let i = 1; i <= maxRating; i++) {
      starIcons.push(
        <span
          key={i}
          className={`star ${hoveredRating >= i ? "hovered" : ""} ${
            rating >= i ? "selected" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        >
          &#9733;
        </span>
      );
    }

    return starIcons;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
