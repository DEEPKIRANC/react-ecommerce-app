import { useState, useEffect, createContext, useReducer } from "react";
import Data from "../data.json";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [productList, setProductList] = useState(Data);
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
