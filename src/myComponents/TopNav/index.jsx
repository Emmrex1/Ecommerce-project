// Header/TopNav.js
import React from "react";

const TopNav = () => {
  return (
    <div className="bg-gray-100 py-2 hidden md:block">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-600">
            About Us
          </a>
          <a href="#" className="hover:text-blue-600">
            My account
          </a>
          <a href="#" className="hover:text-blue-600">
            Wishlist
          </a>
          <a href="#" className="hover:text-blue-600">
            Order Tracking
          </a>
        </div>

        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-blue-600">
              <i className="fas fa-hand-paper"></i>
            </span>
            <p>100% Secure delivery without contacting the courier</p>
          </div>
          <div className="border-l pl-4">
            <p>
              Need help? Call Us:{" "}
              <span className="text-blue-600">+ 0020 500</span>
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="border-none bg-transparent text-sm">
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
            <div className="relative">
              <select className="border-none bg-transparent text-sm">
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
