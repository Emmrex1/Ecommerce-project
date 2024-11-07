
import React from "react";
 import { DialogDemo } from "../DialogDemo";

const LogoSection = () => {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center">
        <div className="ml-2">
          <img
            src="/src/assets/Images/LOGO.png"
            alt="Logo"
            className="w-40 h-12 md:w-50 md:h-16"
          />
          <p className="hidden md:block text-sm text-gray-500">
            Online Grocery Shopping Center
          </p>
        </div>
      </div>
        <DialogDemo/>  
    </div>
  );
};

export default LogoSection;
