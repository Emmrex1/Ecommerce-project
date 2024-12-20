import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import React Router's Link
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHome,
  FaHeart,
  FaUser,
  FaTh,
} from "react-icons/fa";
import { DialogDemo } from "../../myComponents/DialogDemo";

const Headerrr = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-10 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-lg font-bold text-black">
            <span className="text-gray-800">EMMREX</span>
            <span className="text-red-600">SHOP</span>
          </h1>
          <span className="text-xs text-gray-500">
            Online Grocery Shopping Center
          </span>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex items-center justify-between flex-grow space-x-8">
          <button className="border border-gray-300 rounded-md mx-5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <DialogDemo />
          </button>
          <div className="relative flex-grow w-fit">
            <input
              type="text"
              placeholder="Search for your area..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Link to="/account" className="flex flex-col items-center">
            <FaUser className="text-gray-700 text-xl" />
            <span className="text-xs text-gray-600">Account</span>
          </Link>
          <Link to="/signin">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 focus:ring-1 focus:ring-blue-500">
              Sign In
            </button>
          </Link>

          <Link to="/cart">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <span>$0.00</span>
              <FaShoppingCart className="text-lg text-gray-600" />
            </div>
          </Link>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-gray-50 shadow-md py-3 md:hidden">
          <ul className="space-y-2 px-4 text-sm text-gray-700">
            <li>
              <button className="border border-gray-300 rounded-md  w-full py-1 text-sm text-gray-700 hover:bg-gray-50">
                <DialogDemo />
              </button>
            </li>

            <li>
              <input
                type="text"
                placeholder="Search for your area..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </li>

            <li>
              <button className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700">
                Sign In
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span>Total: $0.00</span>
              <FaShoppingCart className="text-gray-600 text-lg" />
            </li>
            {/* Additional Links */}
            <li>
              <button className="block w-full text-left">About Us</button>
            </li>
            <li>
              <button className="block w-full text-left">My Account</button>
            </li>
            <li>
              <button className="block w-full text-left">Wishlist</button>
            </li>
            <li>
              <button className="block w-full text-left">Order Tracking</button>
            </li>
          </ul>
        </div>
      )}

      {/* Shortcut Bar for Mobile */}
      <div className="fixed bottom-0 inset-x-0 bg-white shadow-md border-t md:hidden flex justify-around py-2">
        <Link to="/" className="flex flex-col items-center">
          <FaHome className="text-gray-700 text-xl" />
          <span className="text-xs text-gray-600">Store</span>
        </Link>
        <Link to="/search" className="flex flex-col items-center">
          <FaSearch className="text-gray-700 text-xl" />
          <span className="text-xs text-gray-600">Search</span>
        </Link>
        <Link to="/wishlist" className="flex flex-col items-center">
          <FaHeart className="text-gray-700 text-xl" />
          <span className="text-xs text-gray-600">Wishlist</span>
        </Link>
        <Link to="/account" className="flex flex-col items-center">
          <FaUser className="text-gray-700 text-xl" />
          <span className="text-xs text-gray-600">Account</span>
        </Link>
        <Link to="/categories" className="flex flex-col items-center">
          <FaTh className="text-gray-700 text-xl" />
          <span className="text-xs text-gray-600">Categories</span>
        </Link>
      </div>
    </header>
  );
};

export default Headerrr;
