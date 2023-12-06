import React from "react";
import "./App.css";

const Product = ({ products }) => {
  return (
    <div className="productList">
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>
              <strong>{product.name}</strong> - {product.category} - $
              {product.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
