import React, { useState } from "react";
import "./App.css";

const FilterSide = ({ onFilter, onSort }) => {
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("priceLowToHigh");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div className="filterNav">
      <h1>E.com</h1>
      <div className="filters">
        <div>
          <label>
            Category :
            <select value={category} onChange={handleCategoryChange}>
              <option value="All">All</option>
              <option value="Casual">Casual</option>
              <option value="Formal">Formal</option>
              <option value="Formal">DailyWear</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Sort by :
            <select value={sortOption} onChange={handleSortChange}>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
