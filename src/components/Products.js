import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Product } from "./Product";
import "../styles/productlist.css";
export const Products = () => {
  const [productList, setProductList] = useContext(DataContext);
  return (
    <div className="productList-container">
      <div className="products-section">
        {productList.length > 0 ? (
          productList.map((product, index) => {
            return <Product key={index} product={product} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
