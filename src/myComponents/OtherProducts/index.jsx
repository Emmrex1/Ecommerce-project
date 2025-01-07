import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Banner from "@/myComponents/Banner";
import ProductCard from "@/Share/ProductCard";

const OtherProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:4000/api/products");
      setProducts(response.data.products);
    } catch (err) {
      setError("Unable to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleViewAll = () => {
    setVisibleCount(products.length);
  };

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory && selectedCategory !== "All") {
        return product.category === selectedCategory;
      }
      return true;
    })
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex flex-col gap-8 px-6 max-w-7xl mx-auto">
      {/* Banner Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        <Banner className="w-full lg:w-1/2" />
        <Banner className="w-full lg:w-1/2" />
      </div>

      {/* Other Products Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Other Products</h2>

          {/* Search Bar */}
          <div className="flex gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-64"
            />

            {/* Category Dropdown */}
            {/* <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-lg"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select> */}
          </div>
        </div>

        {/* Error Handling */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-500 p-4 rounded-lg text-center">
            <p>{error}</p>
            <button
              onClick={fetchProducts}
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-red-600"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array(8)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-gray-200 h-56 rounded-lg"
                ></div>
              ))}
          </div>
        )}

        {/* No Products Found */}
        {!loading && filteredProducts.length === 0 && (
          <p className="text-gray-500 text-center">
            No products match your search criteria.
          </p>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <ProductCard
                product={{
                  ...product,
                  image: product.image || "https://via.placeholder.com/150",
                }}
              />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        {!loading && visibleCount < filteredProducts.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleViewAll}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherProducts;
