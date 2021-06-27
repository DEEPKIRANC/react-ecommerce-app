import React from "react";
import "../styles/product.css";

export const Product = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <img src={product.imageURL} alt="" />
      <p className="brand">{product.brand}</p>
      <p className="title">{product.title}</p>
      <p>&#x20B9;{product.price}</p>
      <span style={{ color: "grey" }}>Size </span>
      {product?.sizes?.map((size) => (
        <span>{size} </span>
      ))}
    </div>
  );
};
