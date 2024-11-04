import { useState } from 'react';

const StarRating = ({ totalStars = 5, onRatingSelect }) => {
  const [rating, setRating] = useState(0); 
  const [hoverRating, setHoverRating] = useState(0); 

  const starColors = ['#FF4E42', '#FF8C42', '#FFC942', '#C3FF42', '#73FF42'];

  const handleClick = (index) => {
    const selectedRating = index + 1;
    setRating(selectedRating);
    if (onRatingSelect) {
      onRatingSelect(selectedRating);
    }
  };

  const handleMouseOver = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseOut = () => {
    setHoverRating(0);
  };

  return (
    <div className="relative w-full flex flex-row justify-between items-center">
      <div className="flex mb-2">
        {[...Array(totalStars)].map((_, index) => (
          <svg
            key={index}
            className="h-6 w-6 cursor-pointer"
            onClick={() => handleClick(index)}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              color: index < (hoverRating || rating) ? starColors[index] : '#D1D5DB'
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        ))}
      </div>
      {hoverRating > 0 && (
        <div className=" mb-2 mr-2 text-sm rounded-md p-1">
          {hoverRating} / {totalStars}
        </div>
      )}
    </div>
  );
};

export default StarRating;
