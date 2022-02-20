import React, { Component } from "react";
import PropTypes from "prop-types";

const Product = (props) => {
  const handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } = props;
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };
  const { name, price, currency, image, isInCart } = props;
  return (
    <>
      <div className="food-product ">
        <img src={image} alt="product" className="food-image" />
        <h3 className="food-name">{name}</h3>
        <div className="caption-content">
          <div className="product_price">
            {price} {currency}
          </div>
          <div className="product_button-wrap">
            <button
              className={isInCart ? "btn-alt" : "btn-main"}
              onClick={handleClick}
            >
              {isInCart ? "Remove" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  currency: PropTypes.string,
  image: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Product;
