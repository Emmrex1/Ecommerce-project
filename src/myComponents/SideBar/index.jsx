import React, { useState } from "react";
import { CollapsibleSection } from "@/Share/Compression";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";

const Sidebar = ({ onPriceChange, onSubcategorySelect, onBrandSelect }) => {
  const [priceRange, setPriceRange] = useState([100, 60000]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const subcategories = [
    "men",
    "women",
    "beauty",
    "kids",
    "gift",
    "blog",
    "Accessories",
  ];
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Oraimo"];

  const handlePriceChange = (range) => {
    setPriceRange(range);
    onPriceChange(range);
  };

  const handleSubcategorySelect = (subCategory, isChecked) => {
    onSubcategorySelect(subCategory, isChecked);
  };

  const handleBrandSelect = (brand) => {
    onBrandSelect(brand);
  };

  return (
    <div className="w-full lg:w-[30%] xl:w-[25%] p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Product Categories */}
      <CollapsibleSection title="Product SubCategories">
        {subcategories.map((subCategory, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) =>
                handleSubcategorySelect(subCategory, e.target.checked)
              }
            />
            <label className="text-gray-700">{subCategory}</label>
          </div>
        ))}
      </CollapsibleSection>

      {/* Brands */}
      <CollapsibleSection title="Filter by Brand">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => handleBrandSelect(brand)}
            />
            <label className="text-gray-700">{brand}</label>
          </div>
        ))}
      </CollapsibleSection>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block text-gray-700">Price Range</label>
        <RangeSlider
          min={100}
          max={60000}
          step={100}
          values={priceRange}
          onChange={handlePriceChange}
        />
        <div className="flex justify-between text-gray-700">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* In Stock Only */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          className="mr-2"
          onChange={() => setInStockOnly(!inStockOnly)}
        />
        <label className="text-gray-700">In Stock Only</label>
      </div>
    </div>
  );
};

export default Sidebar;
