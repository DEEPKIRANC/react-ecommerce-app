import React, { useEffect, useContext } from "react";
import { DataContext } from "./DataProvider";
import "../styles/cart.css";
export const Cart = () => {
  const [, , cartList, dispatch] = useContext(DataContext);
  useEffect(() => {
    console.log("Items:", cartList);
  }, []);
  return (
    <div className="parent_div">
      <div className="cart_items">
        <p>My Cart</p>
      </div>
      <div className="order_bill">
        <p>Price Details</p>
      </div>
    </div>
  );
};
