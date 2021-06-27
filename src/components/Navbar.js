import React from "react";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Flipkart</h2>
      <input type="text" placeholder="Search for products, brands and more" />
    </div>
  );
};
