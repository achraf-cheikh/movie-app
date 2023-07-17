import React from "react";

const RatingStars = ({ rate, handlerating }) => {
  const stars = (rating) => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(
          <span
            onClick={() => handlerating(i)}
            style={{ color: "gold", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else {
        star.push(
          <span
            onClick={() => handlerating(i)}
            style={{ color: "black", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      }
    }
    return star;
  };

  return <div>{stars(rate)}</div>;
};

export default RatingStars;
