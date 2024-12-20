import React, { useEffect, useState } from "react";
import Layout from "../../myComponents/FeaturedProduct";
import axios from "axios";
import FeaturedProducts from "@/myComponents/Carousel/ProductCarousel2";

const MainPage1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products/");

        console.log("API Response:", response.data);

        if (response.data.success && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          throw new Error("Unexpected response format");
        }

        setLoading(false);
      } catch (err) {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "An unknown error occurred.";
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading)
    return (
      <p className="text-center text-gray-600">
        Loading featured products, please wait...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500">
        Error fetching products: {error}
      </p>
    );

  return (
    <div className="bg-gray-100 min-h-screen">
      {products.length > 0 ? (
        <FeaturedProducts products={products} />
      ) : (
        <p className="text-center text-gray-600 py-10">
          No featured products found.
        </p>
      )}
    </div>
  );
};

export default MainPage1;
