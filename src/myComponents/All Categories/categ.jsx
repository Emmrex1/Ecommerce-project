import React, { useState } from "react";
import {
  Home,
  ShoppingCart,
  LocalDining,
  Cake,
  LocalCafe,
  Menu,
  ExpandMore,
  Close,
} from "@mui/icons-material";

function CategoryMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    {
      name: "Fruits & Vegetables",
      icon: "📐",
      subItems: [
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Fresh Fruits",
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Packaged Produce",
        "Party Trays",
      ],
    },
    {
      name: "Beverages",
      icon: "💼",
      subItems: [
        "Soft Drinks",
        "Juices",
        "Energy Drinks",
        "Tea & Coffee",
        "Alcoholic Beverages",
      ],
    },
    // Add other menu items here if needed
  ];

  return (
    <div className="relative">
      <div className="flex-grow p-4 lg:ml-20">
        <nav className="flex flex-wrap items-center space-x-4 lg:space-x-10 text-gray-600">
          <button
            className="flex items-center mx-20 gap-2 p-2 text-white bg-blue-500 rounded-full"
            onClick={toggleSidebar}
          >
            <Menu />
            <span>All Categories</span>
            <ExpandMore />
          </button>

          <div className="hidden lg:flex space-x-4 lg:space-x-10">
            <a
              href="#"
              className="flex items-center text-blue-500 font-semibold"
            >
              HOME <ExpandMore className="ml-1" />
            </a>
            <a href="#" className="flex items-center">
              SHOP <ExpandMore className="ml-1" />
            </a>
            <a href="#" className="flex items-center">
              <LocalDining className="mr-1" /> MEATS & SEAFOOD
            </a>
            <a href="#" className="flex items-center">
              <Cake className="mr-1" /> BAKERY
            </a>
            <a href="#" className="flex items-center">
              <LocalCafe className="mr-1" /> BEVERAGES
            </a>
            <a href="#" className="flex items-center">
              BLOG
            </a>
            <a href="#" className="flex items-center">
              CONTACT
            </a>
          </div>
        </nav>
      </div>

      {isSidebarOpen && (
        <div className="absolute left-4 top-20 z-10 w-48 p-4 bg-white shadow-md rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-700">Projects</h3>
            <Close className="cursor-pointer" onClick={toggleSidebar} />
          </div>
          <ul className="mt-4 space-y-3 text-gray-600">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span>{item.icon}</span> {item.name}
                {activeMenu === index && (
                  <div className="absolute left-full top-0 ml-2 w-48 p-4 bg-white shadow-lg rounded-md">
                    <ul className="space-y-2 text-gray-700">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CategoryMenu;
