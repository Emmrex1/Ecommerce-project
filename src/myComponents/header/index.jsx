import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import TopBar from "../TopBar";
import TopNav from "../TopNav";
import LogoSection from "../LogoSection";
import SearchBar from "../SearchBar";
import UserActions from "../UserAction";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full">
      <div className="hidden md:block">
        <TopBar />
        <TopNav />
      </div>

      <div className="flex justify-between items-center px-4 py-4 md:justify-center md:space-x-6">
        <div className="flex-shrink-0">
           <LogoSection />
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FiMenu />
        </button>

        <div className="hidden md:flex items-center space-x-4 w-full max-w-3xl">
          <div className="flex-grow mx-4">
            <SearchBar />
          </div>
          <div className="flex-shrink-0">
            <UserActions />
          </div>
        </div>
      </div>

    
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col space-y-4 px-4 pb-4 md:hidden">
          <SearchBar />
          
        </div>
      )}

      
    </header>
  );
};

export default Header;
