import React from "react";
import "./Card.css";

function Card({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-info">
        <p className="title">{title}</p>
        <p className="price">{price}원</p>
      </div>
    </div>
  );
}

export default Card;
