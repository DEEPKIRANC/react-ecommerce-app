import React, { useState, useContext } from "react";
import "../styles/navbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { DataContext } from "./DataProvider";
import { useHistory, Link } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  const [, , cartList, dispatch] = useContext(DataContext);
  return (
    <div className="navbar">
      <h2 onClick={() => history.push("/")}>Flipkart</h2>
      <input type="text" placeholder="Search for products, brands and more" />
      <Link style={{ color: "white" }} to="/cart">
        <ShoppingCartIcon style={{ marginLeft: "50px" }} />
      </Link>
      <strong>{cartList.length}</strong>
    </div>
  );
};
