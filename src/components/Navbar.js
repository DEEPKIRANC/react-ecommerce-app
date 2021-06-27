import React, { useState, useContext } from "react";
import "../styles/navbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Flipkart</h2>
      <input type="text" placeholder="Search for products, brands and more" />
      <Link style={{ color: "white" }} to="/cart">
        <ShoppingCartIcon style={{ marginLeft: "50px" }} />
      </Link>
      <strong>0</strong>
    </div>
  );
};
