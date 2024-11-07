// Header/TopBar.js
import React from "react";

const TopBar = () => {
  return (
    <div className="bg-blue-800 text-white text-sm px-4 py-2 text-center md:flex md:justify-center md:items-center">
      <p>
        Due to the <span className="font-bold">COVID 19</span> epidemic, orders
        may be processed with a slight delay
      </p>
    </div>
  );
};

export default TopBar;
