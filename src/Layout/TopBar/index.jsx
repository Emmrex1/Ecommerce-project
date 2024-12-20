// Header/TopBar.js
import React from "react";

const TopBar = () => {
  return (
    <div className="bg-blue-800 text-white text-sm px-4 py-2 text-center md:flex md:justify-center md:items-center sm:hidden">
      <p>
        Due to global <span className="font-bold">INFLATION</span> orders may
        experience slight processing delays
      </p>
    </div>
  );
};

export default TopBar;
