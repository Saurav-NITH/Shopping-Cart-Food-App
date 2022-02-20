import React from "react";
import PropTypes from "prop-types";
import Product from "../../containers/Product";

const ProductList = ({ products }) => {
  return (
    <div>
      <h3 className="title">Our Menu</h3>
      <ul className="food-product-list">
        {products.map((product) => (
          <li key={product.id} className="food-product-list-item">
            <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
