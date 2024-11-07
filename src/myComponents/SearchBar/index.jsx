// Header/SearchBar.js
import React from "react";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="relative w-50">
      <Input
        id="location"
        placeholder="Search for your area..."
        className="w-full pr-10 bg-white text-black border border-gray-300"
      />
      <FiSearch
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        size={20}
      />
    </div>
  );
};

export default SearchBar;
