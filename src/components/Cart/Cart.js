import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({ items, total, currency, removeFromCart }) => {
  return (
    <div>
      <h3 className="title">Your Food Cart</h3>

      <div className="panel">
        {items.length > 0 && (
          <div className="cart-body">
            {items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onClick={() => removeFromCart(item.id)}
              />
            ))}
          </div>
        )}
        {items.length === 0 && (
          <div className="alert-empty"> Cart is empty </div>
        )}
        <div className="cart-total">
          Total: {total} {currency}
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
