import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { BsTruck, BsShieldCheck, BsArrowReturnLeft } from 'react-icons/bs';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch product details.");
        setLoading(false);
      });
  }, [productId]);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === 'increment' ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">
        <a href="#" className="hover:text-blue-600">Home</a> / 
        <a href="#" className="hover:text-blue-600"> {product.category}</a> / 
        <span className="text-gray-800"> {product.title}</span>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-auto object-cover"
          />
        </div>

        
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <div className="text-yellow-400 flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm text-gray-500">(Reviews)</span>
            <span className="text-sm text-gray-500 ml-4">SKU: {product.id}</span>
          </div>
          <h2 className="text-xl font-semibold text-red-500 mt-4">${product.price}</h2>
          <span className="text-green-500 font-semibold">{product.stock > 0 ? "IN STOCK" : "Out of Stock"}</span>

          <p className="text-gray-700 mt-4">{product.description}</p>

          
          <div className="flex items-center mt-4">
            <button
              onClick={() => handleQuantityChange('decrement')}
              className="p-2 bg-gray-200 rounded-l text-lg"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border-t border-b border-gray-200"
            />
            <button
              onClick={() => handleQuantityChange('increment')}
              className="p-2 bg-gray-200 rounded-r text-lg"
            >
              +
            </button>
            <button className="ml-4 p-2 px-6 bg-blue-600 text-white font-semibold rounded flex items-center space-x-2">
              <FaShoppingCart />
              <span>Add to cart</span>
            </button>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <button className="text-gray-600 hover:text-red-500 flex items-center space-x-2">
              <FaHeart />
              <span>Add to Wishlist</span>
            </button>
            <button className="text-gray-600 hover:text-blue-500 flex items-center space-x-2">
              <span>Compare</span>
            </button>
          </div>

          {/* Additional Information */}
          <div className="mt-6 bg-gray-100 p-4 rounded-md space-y-2">
            <div className="flex items-center space-x-2 text-gray-700">
              <BsTruck />
              <span>Free Shipping on orders over $100</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <BsShieldCheck />
              <span>Guaranteed 100% Organic</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <BsArrowReturnLeft />
              <span>1 Day Returns if you change your mind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
