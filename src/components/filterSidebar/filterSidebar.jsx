import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const FilterSidebar = ({
  handleFilterChange,
  handlePriceRangeChange,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  resetFilters,
  selectedCategory
}) => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    handleFilterChange(selectedCategory);
  };

  const handlePriceRangeSubmit = (e) => {
    e.preventDefault();
    handlePriceRangeChange(minPrice, maxPrice);
  };

  return (
    <div className="filter-sidebar flex justify-between items-center my-4">
      <div className="filter-heading text-underline text-xl font-bold">
        Filter
      </div>
      <div className="cat flex items-center gap-2">
        <div className="font-semibold">Category: </div>
        <select onChange={handleCategoryChange}>
          <option value="" selected>All</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Men Clothing</option>
          <option value="women's clothing">Women Clothing</option>
          <option value="home">Home</option>
          {/* Add more categories */}
        </select>
      </div>

      <div className="range flex items-center gap-2">
        <div className="font-semibold">Range: </div>
        <form onSubmit={handlePriceRangeSubmit}>
          <label className="mr-2" htmlFor="min">
            Min Price
          </label>
          <input
            className="p-2"
            type="number"
            placeholder="Min Price"
            value={minPrice}
            min={0}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label className="mx-2" htmlFor="max">
            Max Price
          </label>
          <input
            className="p-2"
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            min={0}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </form>
        {(minPrice || maxPrice || selectedCategory) && (
          <button
            className="rest-filters w-8 h-8 rounded-md bg-amazon_yellow flex justify-center items-center hover:cursor-pointer"
            onClick={() => resetFilters()}
            title="Clear Filters"
          >
            <RxCross2 />
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
