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
  const increment = (item) => {
    dispatch({
      type: ACTIONS.UPDATE_CART,
      payload: { id: item.id, quantity: item.quantity + 1 }
    });
  };
  const decrement = (item) => {
    if (item.quantity === 1) {
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
    } else {
      dispatch({
        type: ACTIONS.UPDATE_CART,
        payload: { id: item.id, quantity: item.quantity - 1 }
      });
    }
  };
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
  const totalPrice = () => {
    const totalPrice = cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalPrice;
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
                <span>&#8377;{item.price * item.quantity}</span>
                <div
                  style={{
                    display: "flex",
                    marginTop: "1rem",
                    columnGap: "0.5rem"
                  }}
                >
                  <button className="styled-button">Save For Later</button>
                  <button
                    className="styled-button"
                    onClick={() => removeItem(item)}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="bottom-section">
          <button className="styled-button" onClick={goToHome}>
            Back To Home
          </button>
          <button
            disabled={cartList.length === 0}
            style={{ marginRight: "20px" }}
            className="styled-button"
          >
            Place Order
          </button>
        </div>
      </div>
      <div className="order_bill">
        <h5>PRICE DETAILS</h5>
        <hr />
        <section>
          <span>Price({`${cartList.length} items`})</span>
          <span className="price-details">&#8377;{totalPrice()}</span>
        </section>
        <section>
          <span>Discount</span>
          <span style={{ color: "green" }} className="price-details">
            -&#8377;{0.3 * totalPrice()}
          </span>
        </section>
        <section>
          <span>Delivery Charges</span>
          <span style={{ color: "green" }} className="price-details">
            Free
          </span>
        </section>
        <hr />
        <section>
          <span>Total Amount</span>
          <span className="price-details">
            &#8377;{totalPrice() - 0.3 * totalPrice()}
          </span>
        </section>
      </div>
    </div>
  );
};
