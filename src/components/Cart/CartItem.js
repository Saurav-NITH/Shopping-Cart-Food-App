import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ name, price, currency, onClick }) => {
  return (
    <div className="cart-item">
      <div>
        <button className="btn-remove" onClick={onClick}>
          &#10060;
        </button>
        <span className="cart-item-name">{name}</span>
      </div>
      <div className="cart-item-price">
        {price} {currency}
      </div>
    </div>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CartItem;
