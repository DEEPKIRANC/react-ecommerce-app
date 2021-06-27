import React, { useEffect, useState, useContext } from "react";
//import products from "./data.json";
import { DataContext } from "./components/DataProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";
import { Products } from "./components/Products";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
