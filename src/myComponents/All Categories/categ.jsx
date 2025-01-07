import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const CategoryMenu = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleCategoriesToggle = () => {
    setShowCategories((prev) => !prev);
  };

  const subcategories = [
    { id: 1, name: "ELECTRONICS" },
    { id: 2, name: "CLOTHING" },
    { id: 3, name: "HOME APPLIANCE" },
    { id: 4, name: "BOOKS" },
    { id: 5, name: "SPORTS" },
    { id: 6, name: "BLOG" },

  ];

  return (
    <nav className="relative flex px-4 py-4 bg-white shadow-md">
      {/* Left Section: ALL CATEGORIES */}
      <div className="relative inline-block mx-8">
        <button
          onClick={handleCategoriesToggle}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none"
        >
          <span>ALL CATEGORIES</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {showCategories && (
          <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-48 z-10">
            <ul className="py-2">
              {subcategories.map((subcategory) => (
                <li
                  key={subcategory.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Link
                    to={`/subcat/${subcategory.name.toLowerCase()}`}
                    className="text-gray-700 hover:text-purple-600"
                  >
                    {subcategory.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section: Navigation Links */}
      <ul className="hidden md:flex mx-auto items-center gap-10 text-sm font-medium text-gray-700">
        {subcategories.map((subcategory) => (
          <li
            key={subcategory.id}
            className="hover:text-purple-600 cursor-pointer"
          >
            <Link
              to={`/subcat/${subcategory.name.toLowerCase()}`}
              className="text-gray-700 hover:text-purple-600"
            >
              {subcategory.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryMenu;
