import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product }) => {
  const calculateDiscount = (oldPrice, price) =>
    oldPrice && oldPrice > price ? ((oldPrice - price) / oldPrice) * 100 : 0;
  const discount = calculateDiscount(product.oldPrice, product.price);

  return (
    <div className="product-card border rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      
      <div className="image-wrapper w-full h-64 bg-gray-100 flex items-center justify-center relative">
        <img
          src={
            Array.isArray(product.images) ? product.images[0] : product.images
          }
          alt={product.name}
          className="product-image w-full h-full object-cover rounded-t-md absolute top-0 left-0"
        />
      </div>

      
      <div className="content p-4 flex flex-col gap-2">
        
        <h3 className="product-name text-md font-semibold truncate text-gray-800">
          {product.name}
        </h3>

        <p className="stock-status text-sm">
          {product.countInStock ? (
            <span className="text-green-500 font-medium">In Stock</span>
          ) : (
            <span className="text-red-500 font-medium">Out of Stock</span>
          )}
        </p>

        <div className="pricing flex items-center">
          {product.oldPrice && product.oldPrice > product.price && (
            <span className="old-price line-through text-gray-400 text-sm mr-2">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="current-price text-lg text-gray-800 font-bold">
            ${product.price.toFixed(2)}
          </span>
          {discount > 0 && (
            <span className="discount text-sm text-red-500 font-semibold ml-2">
              ({discount.toFixed(0)}% OFF)
            </span>
          )}
        </div>

        <div className="ratings flex items-center">
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
