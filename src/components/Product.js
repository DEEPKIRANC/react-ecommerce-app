import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ACTIONS, DataContext } from "./DataProvider";
import "../styles/product.css";

export const Product = ({ product }) => {
  const history = useHistory();
  const [productList, setProductList, cartList, dispatch] = useContext(
    DataContext
  );
  const addToCart = (product) => {
    const { id, title, price, imageURL } = product;
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: {
        id: id,
        title: title,
        price: price,
        url: imageURL,
        quantity: 1
      }
    });
    setProductList(
      productList.map((item) => {
        if (item.id === id) {
          return { ...item, inCart: !item.inCart };
        } else {
          return item;
        }
      })
    );
  };

  const goToCart = () => {
    history.push("/cart");
  };
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
        <button className="addToCart" onClick={goToCart}>
          Go To Cart
        </button>
      ) : (
        <button className="addToCart" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      )}
    </div>
  );
};
