import React, { useEffect, useState } from "react";
import Sidebar from "@/myComponents/SideBar";
import { Pagination } from "@mui/material";
import axios from "axios";
import Breadcrumbs from "@/myComponents/BreadCrumb";
import ProductCard from "@/Share/ProductCard";

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([100, 60000]);
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [viewType, setViewType] = useState("grid");
  const [selectedSubcategory, setSelectedSubcategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const productsPerPage = 20;

  useEffect(() => {
    fetchProducts();
  }, [
    searchTerm,
    priceRange,
    sortOption,
    currentPage,
    selectedSubcategory,
    selectedBrand,
  ]);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:4000/api/products/", {
        params: {
          search: searchTerm,
          priceMin: priceRange[0],
          priceMax: priceRange[1],
          sort: sortOption,
          page: currentPage,
          limit: productsPerPage,
          subCategory: selectedSubcategory.join(",") || "",
          brand: selectedBrand || "",
        },
      });

      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
      setTotalPages(response.data.totalPages || 1);
    } catch (err) {
      setError(err.message || "Failed to fetch products.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSort = (option) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const handlePageChange = (_, value) => setCurrentPage(value);

  const handleSubcategorySelect = (subCategory, isChecked) => {
    if (isChecked) {
      setSelectedSubcategory((prev) => [...prev, subCategory]); // Add the selected subcategory
    } else {
      setSelectedSubcategory((prev) =>
        prev.filter((item) => item !== subCategory)
      ); // Remove the unselected subcategory
    }
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setCurrentPage(1);
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="hidden lg:flex lg:w-1/3 lg:max-w-xs lg:bg-white lg:p-6 lg:shadow-lg lg:rounded-lg">
          <Sidebar
            onPriceChange={setPriceRange}
            onSubcategorySelect={handleSubcategorySelect}
            onBrandSelect={handleBrandSelect}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Breadcrumbs paths={["Home", "Products", "Listing"]} />

          {/* Search and Sorting */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
            <input
              type="text"
              className="border p-2 rounded w-full sm:w-1/3"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <select
              className="border p-2 rounded w-full sm:w-1/4"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="default">Sort by: Default</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div className="text-center text-gray-500">Loading products...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center text-gray-500">No products found.</div>
          ) : (
            <div
              className={`grid gap-4 ${
                viewType === "grid"
                  ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-6">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
