import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="header">
        <h1>Snacks are Important</h1>
      </div>
      <div className="container-content">
        <div className="products-list">
          <ProductList />
        </div>
        <div className="cart-list">
          <Cart />
        </div>
      </div>
      <footer>
        <small>Made by Saurav</small>
      </footer>
    </>
  );
};

export default App;
