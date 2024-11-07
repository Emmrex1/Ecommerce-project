// Header/UserActions.js
import React from "react";

const UserActions = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <div className="rounded-full border border-gray-300 p-2">
        <span>👤</span>
      </div>
      <span className="text-sm md:text-base font-bold">$0.00</span>
      <div className="relative">
        <span>🛒</span>
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
          0
        </span>
      </div>
    </div>
  );
};

export default UserActions;
