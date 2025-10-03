import React from "react";
import "../css/StarRating.css";

const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(<span key={i} className="star full">★</span>);
        } else if (i - rating <= 0.5) {
            stars.push(<span key={i} className="star half">★</span>);
        } else {
            stars.push(<span key={i} className="star empty">★</span>);
        }
    }

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;
