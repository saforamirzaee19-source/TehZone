import React from "react";

export default function Gallary({ image, name, category, price }) {
  return (
    <div className="gallary">
      <div className="gallary-products">
        <img src={image} alt={name} />
      </div>
      <div className="gallary-details">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{category}</p>
        <p>${price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}
