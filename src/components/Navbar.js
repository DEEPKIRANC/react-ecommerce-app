import React from "react";
import "../styles/navbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Flipkart</h2>
      <input type="text" placeholder="Search for products, brands and more" />
      <ShoppingCartIcon style={{ marginLeft: "50px" }} />
    </div>
  );
};
