import React from "react";
import "../styles/product.css";

export const Product = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <img src={product.imageURL} alt="" />
      <p className="brand">{product.brand}</p>
      <p className="title">{product.title}</p>
      <p>&#x20B9;{product.price}</p>
      <div style={{ display: "block" }}>
        <span style={{ color: "grey" }}>Size </span>
        {product?.sizes?.map((size) => (
          <span>{size} </span>
        ))}
      </div>
      {product.inCart === true ? (
        <button className="addToCart">Go To Cart</button>
      ) : (
        <button className="addToCart">Add To Cart</button>
      )}
    </div>
  );
};
