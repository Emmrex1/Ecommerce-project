import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const calculateDiscount = (oldPrice, price) =>
    oldPrice && oldPrice > price ? ((oldPrice - price) / oldPrice) * 100 : 0;

  const discount = calculateDiscount(product.oldPrice, product.price);

  return (
    <div className="product-card w-full sm:w-64 max-w-full rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center group">
        <img
          src={
            Array.isArray(product.images) && product.images.length > 0
              ? product.images[0]
              : "https://via.placeholder.com/150"
          }
          alt={product.name || "Product"}
          className="product-image w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount.toFixed(0)}% OFF
          </span>
        )}
        {!product.countInStock && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Out of Stock
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="content p-4 flex flex-col gap-2">
        <h3 className="product-name text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        {/* Pricing Section */}
        <div className="pricing flex items-center gap-2">
          {product.oldPrice && product.oldPrice > product.price && (
            <span className="old-price line-through text-gray-400 text-sm">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="current-price text-lg text-gray-900 font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Ratings Section */}
        <div
          className="ratings flex items-center gap-1"
          title={`${product.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon
              key={index}
              className={`h-5 w-5 ${
                index < product.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
