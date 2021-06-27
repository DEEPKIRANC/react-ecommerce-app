import { useState, useEffect, createContext, useReducer } from "react";
import Data from "../data.json";
export const DataContext = createContext();
export const ACTIONS = {
  ADD_TO_CART: "add-to-cart",
  UPDATE_CART: "update-cart",
  REMOVE_FROM_CART: "remove-from-cart"
};
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add-to-cart":
      return [...state, action.payload];

    case "update-cart":
      const updatedList = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return updatedList;

    case "remove-from-cart":
      const filteredList = state.filter((item) => item !== action.payload.id);
      return filteredList;

    default:
      return state;
  }
};

export const DataProvider = (props) => {
  const [productList, setProductList] = useState(Data);

  const [cartList, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    const datalist = Data.map((data) => {
      return { ...data, inCart: false };
    });
    setProductList(datalist);
  }, []);
  return (
    <DataContext.Provider
      value={[productList, setProductList, cartList, dispatch]}
    >
      {props.children}
    </DataContext.Provider>
  );
};
