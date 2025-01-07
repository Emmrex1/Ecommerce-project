import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductTabs from "@/pages/ProductDetails/ProductTabs";
import RelatedProducts from "./RelatedProducts";
import RecentlyViewed from "./RecentlyViewed";
import { addRecentlyViewed } from "@/utils/addRecentlyViewed";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/products/${id}`
        );
        setProduct(response.data.product);

        const relatedResponse = await axios.get(
          `http://localhost:4000/api/products/related?subCategory=${response.data.product.subCategory}`
        );
        setRelatedProducts(relatedResponse.data.products);

        addRecentlyViewed(response.data.product);
      } catch (err) {
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleThumbnailClick = (thumbnail) => setCurrentImage(thumbnail);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "increment") return prev + 1;
      if (type === "decrement" && prev > 1) return prev - 1;
      return prev;
    });
  };

  const toggleWishlist = () => {
    setWishlist((prev) =>
      prev.includes(product.id)
        ? prev.filter((itemId) => itemId !== product.id)
        : [...prev, product.id]
    );
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to the cart!`);
  };

  const handleSizeChange = (size) => setSelectedSize(size);

  const handleWeightChange = (weight) => setSelectedWeight(weight);

  if (loading)
    return <p className="text-xl font-semibold text-gray-600">Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="flex flex-col items-center lg:w-1/3 space-y-4">
          <img
            src={currentImage || product.images[0]}
            alt={product.name}
            className="w-full h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
          <div className="flex space-x-2">
            {product.images.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer ${
                  currentImage === thumb
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
                onClick={() => handleThumbnailClick(thumb)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-lg text-gray-600">Brand: {product.brand}</p>
          <div className="flex items-center space-x-1 mt-2">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < product.rating ? "currentColor" : "none"}
                viewBox="0 0 20 20"
                className="h-5 w-5 text-yellow-400"
              >
                <path d="M10 15l-3.09 1.636.586-3.904-2.86-2.785 3.91-.34L10 5l1.453 4.566 3.91.34-2.86 2.785.586 3.904L10 15z" />
              </svg>
            ))}
            <p className="text-sm text-gray-500">({product.rating} reviews)</p>
          </div>

          <p className="text-sm text-gray-600">Category: {product.category}</p>

          <p className="text-sm text-gray-600">
            {product.description.substring(0, 100)}...
          </p>
          <div className="flex items-center mt-4">
            <p className="text-2xl font-bold text-red-600">${product.price}</p>
            {product.oldPrice && (
              <p className="line-through text-gray-500 ml-4">
                ${product.oldPrice}
              </p>
            )}
          </div>
          <p
            className={`mt-2 text-sm ${
              product.countInStock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* Actions Row */}
          <div className="flex flex-wrap items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 justify-start">
            {/* Size Selector */}
            {product.size && (
              <div className="flex space-x-2">
                {product.size.map((size, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 text-sm sm:px-4 sm:py-2 border rounded-lg ${
                      selectedSize === size
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-600"
                    }`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}

            {/* Weight Selector */}
            {product.weight && (
              <div className="flex space-x-2">
                {product.weight.map((weight, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 text-sm sm:px-4 sm:py-2 border rounded-lg ${
                      selectedWeight === weight
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-600"
                    }`}
                    onClick={() => handleWeightChange(weight)}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center border rounded-lg px-2 sm:px-4 py-1 sm:py-2">
              <button
                className="text-xl font-bold text-gray-700"
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </button>
              <p className="mx-2 sm:mx-4 text-lg">{quantity}</p>
              <button
                className="text-xl font-bold text-gray-700"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>

            {/* Wishlist Button */}
            <button
              className={`p-2 sm:p-3 rounded-full border ${
                wishlist.includes(product.id)
                  ? "text-red-600 border-red-600"
                  : "text-gray-600 border-gray-300"
              }`}
              onClick={toggleWishlist}
            >
              <FiHeart size={20} sm:size={24} />
            </button>

            {/* Add to Cart Button */}
            <button
              className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
              onClick={handleAddToCart}
            >
              <FiShoppingCart size={16} sm:size={20} />
              <span className="text-sm sm:text-base">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      <ProductTabs />

      <RelatedProducts subCategory={product.subCategory} />

      <RecentlyViewed />
    </div>
  );
};

export default ProductsDetails;
