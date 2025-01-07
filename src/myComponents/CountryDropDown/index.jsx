import React from "react";
import { Link } from "react-router-dom";

const ProductCardd = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-red-600">${product.price}</p>
          {product.oldPrice && product.oldPrice > product.price && (
            <span className="line-through text-sm text-gray-500">
              ${product.oldPrice}
            </span>
          )}
        </div>
        <div className="mt-4">
          <Link
            to={`/product/${product._id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardd;
