import React, { useState, useEffect } from "react";
import axios from "axios";
import { StarIcon } from "@heroicons/react/24/solid";
import Banner from "@/myComponents/Banner";

const MainPage2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products/");
        setProducts(response.data.products);
      } catch (err) {
        setError("Error fetching products");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const calculateDiscount = (oldPrice, price) => {
    if (!oldPrice || !price || oldPrice <= price) return 0;
    return ((oldPrice - price) / oldPrice) * 100;
  };

  return (
    <div className="flex flex-col gap-8 p-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-2/3">
          <Banner />
        </div>
        <div className="w-full lg:w-2/3">
          {/* Optional additional content */}

          <Banner />
        </div>
      </div>

      <div className="w-full bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Other Products</h2>
        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="product-card border rounded-lg p-4 bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-sm font-semibold truncate">{product.name}</h3>
              <p className="text-green-600 text-sm mt-1">In Stock</p>

              <div className="flex justify-center items-center gap-2 mt-2">
                {product.oldPrice > product.price && (
                  <>
                    <span className="line-through text-gray-500 text-sm">
                      Rs {product.oldPrice}
                    </span>
                    <span className="text-red-600 font-bold text-sm">
                      Rs {product.price}
                    </span>
                    <span className="text-xs text-red-500 ml-2">
                      (
                      {calculateDiscount(
                        product.oldPrice,
                        product.price
                      ).toFixed(0)}
                      % OFF)
                    </span>
                  </>
                )}
              </div>

              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon
                    key={index}
                    className={`h-5 w-5 ${
                      index < product.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage2;
