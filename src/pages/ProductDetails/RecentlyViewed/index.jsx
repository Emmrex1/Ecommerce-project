import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "@/Share/ProductCard";

const RecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentlyViewed = async () => {
      try {
        const storedRecentlyViewed =
          JSON.parse(localStorage.getItem("recentlyViewed")) || [];

        if (storedRecentlyViewed.length > 0) {
          const response = await axios.post(
            "http://localhost:4000/api/products/recently-viewed",
            { productIds: storedRecentlyViewed }
          );

          if (response.data.success) {
            setRecentlyViewed(response.data.products);
          } else {
            setError("Failed to load recently viewed products.");
          }
        }
      } catch (err) {
        console.error("Error fetching recently viewed products:", err);
        setError("Failed to fetch recently viewed products.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecentlyViewed();
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading recently viewed products...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (recentlyViewed.length === 0) {
    return (
      <p className="text-gray-600">
        You have not viewed any products recently.
      </p>
    );
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-6">Recently Viewed Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentlyViewed.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
