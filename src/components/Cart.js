import React, { useEffect, useContext } from "react";
import { ACTIONS, DataContext } from "./DataProvider";
import { useHistory } from "react-router-dom";
import "../styles/cart.css";
export const Cart = () => {
  const history = useHistory();
  const [productList, setProductList, cartList, dispatch] = useContext(
    DataContext
  );
  useEffect(() => {
    console.log("Items:", cartList);
  }, []);
  const increment = (item) => {};
  const decrement = (item) => {};
  const goToHome = () => {
    history.push("/");
  };
  const removeItem = (item) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: { id: item.id } });
    setProductList(
      productList.map((product) => {
        if (product.id === item.id) {
          return { ...product, inCart: !product.inCart };
        } else {
          return product;
        }
      })
    );
  };
  return (
    <div className="parent_div">
      <div className="cart_items">
        <p>My Cart ({cartList.length}) </p>
        <hr />
        <div className="middle-section">
          {cartList?.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="left-section">
                <img src={item.url} />
                <div
                  style={{
                    alignSelf: "center",
                    display: "flex",
                    columnGap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <span className="decrement" onClick={() => decrement(item)}>
                    -
                  </span>
                  <span>
                    <strong>{item.quantity}</strong>
                  </span>
                  <span className="increment" onClick={() => increment(item)}>
                    +
                  </span>
                </div>
              </div>
              <div className="right-section">
                <h4>{item.title}</h4>
                <span>&#8377;{item.price}</span>
                <div
                  style={{
                    display: "flex",
                    marginTop: "1rem",
                    columnGap: "0.5rem"
                  }}
                >
                  <button>Save For Later</button>
                  <button onClick={() => removeItem(item)}>
                    Remove From Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="bottom-section">
          <button onClick={goToHome}>Back To Home</button>
          <button
            disabled={cartList.length === 0}
            style={{ marginRight: "20px" }}
          >
            Place Order
          </button>
        </div>
      </div>
      <div className="order_bill">
        <p>Price Details</p>
      </div>
    </div>
  );
};
