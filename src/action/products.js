const products = (state = []) => {
  return state;
};
export default products;

export const getProducts = (state, props) => {
  return state.products;
};

export const getProduct = (state, props) => {
  return state.products.find((item) => item.id === props.id);
};
