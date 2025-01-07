// RelatedProducts.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/Share/ProductCard";

const RelatedProducts = ({ subCategory }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/products/related?subCategory=${subCategory}`
        );
        setRelatedProducts(response.data.products || []);
      } catch (err) {
        setError(
          err.response?.status === 404
            ? "No related products found."
            : "Error fetching related products."
        );
      } finally {
        setLoading(false);
      }
    };

    if (subCategory) fetchRelatedProducts();
  }, [subCategory]);

  if (loading) return <p>Loading related products...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {relatedProducts.map(
          (product) =>
            product && <ProductCard key={product._id} product={product} />
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
