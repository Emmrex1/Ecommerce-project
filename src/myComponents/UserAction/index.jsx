import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { MyContext } from "@/App";
// import { MyContext } from "../App"; 

const UserActions = ({ cartCount = 0, totalAmount = 0.0 }) => {
  const context = useContext(MyContext);

  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      {context.IsLogin !== true ? (
        <Link to="/signIn">
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
            Sign In
          </button>
        </Link>
      ) : (
        <button className="bg-blue-600 text-white px-4 py-1 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
          <FaRegUser />
        </button>
      )}

      <span className="text-sm md:text-base font-bold">
        ${totalAmount.toFixed(2)}
      </span>

      <Link to="/cart" className="relative">
        <BsCart4 size={24} className="text-gray-600" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default UserActions;
