import { getProduct } from "./products";

const CART_ADD = "cart/ADD";
const CART_REMOVE = "cart/REMOVE";

const initialState = {
  items: [], // array of product ids
  currency: "\u20B9",
};

const cart = (state = initialState, action = {}) => {
  switch (action.type) {
    case CART_ADD:
      return handleCartAdd(state, action.payload);
    case CART_REMOVE:
      return handleCartRemove(state, action.payload);
    default:
      return state;
  }
};
export default cart;

export const handleCartAdd = (state, payload) => {
  return { ...state, items: [...state.items, payload.productId] };
};

export const handleCartRemove = (state, payload) => {
  return {
    ...state,
    items: state.items.filter((id) => id !== payload.productId),
  };
};

export const addToCart = (productId) => {
  return { type: CART_ADD, payload: { productId } };
};

export const removeFromCart = (productId) => {
  return { type: CART_REMOVE, payload: { productId } };
};

export const isInCart = (state, props) => {
  return state.cart.items.indexOf(props.id) !== -1;
};

export const getItems = (state, props) => {
  return state.cart.items.map((id) => getProduct(state, { id }));
};

export const getCurrency = (state, props) => {
  return state.cart.currency;
};

export const getTotal = (state, props) => {
  return state.cart.items.reduce((acc, id) => {
    const item = getProduct(state, { id });
    return acc + item.price;
  }, 0);
};
