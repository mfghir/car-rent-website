import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<span className="">&#9733;</span>);
  }

  for (let i = 0; i < rating; i++) {
    stars.push(
      <span key={i} className="text-[#fbad39]">
        &#9733;
      </span>
    );
  }

  return <div>{stars}</div>;
};

export default StarRating;
