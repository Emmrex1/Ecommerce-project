import React, { useState } from "react";
import ProductZoom from "../../myComponents/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../myComponents/QuantityBox";
import Button from "@mui/material/Button";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import ProductTabs from "../../myComponents/ProductTabs";
import RelatedProduct from "../../myComponents/ProductTabs/RelatedProducts";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);

  const handleSizeClick = (index) => {
    setActiveSize(index);
  };

  return (
    <section className="productDetails py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <ProductZoom />
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              All Natural Italian-Style Chicken Meatballs
            </h2>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="font-semibold mr-2">Brands:</span>
                <span>Welch's</span>
              </li>
              <li className="flex items-center">
                <Rating
                  name="read-only"
                  value={4.5}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <span className="text-slate-400 ml-2 cursor-pointer">
                  1 Review
                </span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">SKU:</span>
                <span>Welch's</span>
              </li>
            </ul>

            <div className="flex items-center text-red-500 mt-3 space-x-2">
              <span className="line-through text-gray-400">$20.00</span>
              <span className="font-bold text-xl">$15.00</span>
            </div>
            <span className="inline-block bg-green-600 text-white py-1 px-3 rounded mt-2">
              IN STOCK
            </span>

            <p className="text-gray-700 mt-4 leading-relaxed text-sm md:text-base">
              All Natural Italian-style Chicken Meatballs are made with
              high-quality ingredients and are prepared with fresh, unsalted
              chicken breasts.
            </p>

            {/* Size Selection */}
            <div className="flex items-center mt-4 flex-wrap">
              <span className="font-semibold mr-4">Size / Weight:</span>
              <ul className="flex flex-wrap gap-2">
                {["50g", "100g", "200g", "300g", "500g"].map((size, index) => (
                  <li key={index}>
                    <button
                      className={`px-3 py-1 border rounded ${
                        activeSize === index
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => handleSizeClick(index)}
                    >
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center mt-6 space-x-4 flex-wrap">
              <QuantityBox />

              <Button className="flex items-center bg-blue-700 text-white py-2 px-4 rounded w-full sm:w-auto">
                <BsCart4 className="mr-2" /> Add to Cart
              </Button>

              <Tooltip title="Add to wishlist" placement="top">
                <Button className="text-gray-500 hover:text-blue-700 p-2">
                  <FaRegHeart size={20} />
                </Button>
              </Tooltip>

              <Tooltip title="Add to compare" placement="top">
                <Button className="text-gray-500 hover:text-blue-700 p-2">
                  <MdOutlineCompareArrows size={20} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>

        <br />

        <div className="mt-8 shadow-sm">
          <ProductTabs />
        </div>

        <br />

        <RelatedProduct title="RELATED PRODUCT" />

        <RelatedProduct title="RECENTLY VIEWED PRODUCT" />
      </div>
    </section>
  );
};

export default ProductDetails;
