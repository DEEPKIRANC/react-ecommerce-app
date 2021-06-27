import { useState, useEffect, createContext, useReducer } from "react";
import Data from "../data.json";
export const DataContext = createContext();
export const ACTIONS = {
  ADD_TO_CART: "add-to-cart",
  UPDATE_CART: "update-cart",
  REMOVE_FROM_CART: "remove-from-cart"
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state;
      break;
    case "UPDATE_CART":
      return state;
      break;
    case "REMOVE_FROM_CART":
      return state;
      break;
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
    <DataContext.Provider value={[productList, setProductList]}>
      {props.children}
    </DataContext.Provider>
  );
};
