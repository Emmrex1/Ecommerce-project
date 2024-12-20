// TopNav.js
import React, { useState } from "react";
import { FaAngleDown, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { IoMdFlag } from "react-icons/io";

const TopNav = () => {
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const countries = [
    { name: "USA", flag: "🇺🇸" },
    { name: "UK", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "India", flag: "🇮🇳" },
  ];

  const languages = ["English", "Spanish", "French", "German", "Hindi"];

  return (
    <div className="bg-gray-50 border-b border-gray-200 hidden md:flex">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4 sm:px-6 md:px-8">
        <div className="flex items-center space-x-4">
          <a
            href="#about"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            About Us
          </a>
          <a
            href="#account"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            My Account
          </a>
          <a
            href="#wishlist"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Wishlist
          </a>
          <a
            href="#order-tracking"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Order Tracking
          </a>
        </div>

        {/* Middle Section */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <FaGlobe className="text-gray-600" />
            <span>100% Secure delivery without contacting the courier</span>
          </span>
          <span className="border-l border-gray-300 h-4 mx-2"></span>
          <span>
            Need help? Call Us:
            <a
              href="tel:+2349161325404"
              className="text-blue-600 font-medium hover:underline"
            >
              +2349161325404
            </a>
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm text-gray-600">
              <span>
                {countries.find((country) => country.name === selectedCountry)
                  ?.flag || "🌍"}
              </span>
              <span>{selectedCountry}</span>
              <FaAngleDown />
            </button>
            <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg mt-2 py-2 w-40 z-10">
              {countries.map((country) => (
                <button
                  key={country.name}
                  onClick={() => setSelectedCountry(country.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 w-full text-left"
                >
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm text-gray-600">
              <span>{selectedLanguage}</span>
              <FaAngleDown />
            </button>
            <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg mt-2 py-2 w-40 z-10">
              {languages.map((language) => (
                <button
                  key={language}
                  onClick={() => setSelectedLanguage(language)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 w-full text-left"
                >
                  {language}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
