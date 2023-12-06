import React, { useState } from 'react';
import FilterSide from './FilterSide';
import Product from './Product';
import "./App.css"

const dresses = [
  { id: 1, name: 'Summer pant', category: 'Casual', price: 30 },
  { id: 2, name: 'Evening Gown', category: 'Formal', price: 100 },
  { id: 3, name: 'Floral Maxi', category: 'Casual', price: 45 },
  { id: 4, name: 'Cocktail Dress', category: 'Formal', price: 60 },
  { id: 5, name: 'Jacket', category: 'Casual', price: 35 },
  { id: 6, name: 'T-shirt', category: 'DailyWear', price: 30 },
  { id: 7, name: '3 piece suit', category: 'Formal', price: 200 },
  { id: 8, name: 'Adidas shoes', category: 'Casual', price: 45 },
  { id: 9, name: 'Slippers', category: 'DailyWear', price: 15 },
  { id: 10, name: 'Aviators', category: 'DailyWear', price: 25 },
];

const PageDemo = () => {
  const [filteredProducts, setFilteredProducts] = useState(dresses);

  const handleFilter = (category) => {
    if (category === 'All') {
      setFilteredProducts(dresses);
    } else {
      const filtered = dresses.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleSort = (sortOption) => {
    const sortedProducts = [...filteredProducts];
    if (sortOption === 'priceLowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHighToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <FilterSide onFilter={handleFilter} onSort={handleSort} />
      <Product products={filteredProducts} />
    </div>
  );
};

export default PageDemo;
