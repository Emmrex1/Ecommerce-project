import { MyContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FiSearch } from "react-icons/fi";

export function DialogDemo() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setSelectedTab(index);
    context.setSelectedCountry(country);
    setIsDialogOpen(false);
  };

  useEffect(() => {
    setCountryList(context.countryList);
  }, [context.countryList]);

  const filterCountries = (e) => {
    const filtered = e.target.value.toLowerCase();
    if (filtered !== "") {
      const list = context.countryList.filter((item) =>
        item.country.toLowerCase().includes(filtered)
      );
      setCountryList(list);
    } else {
      setCountryList(context.countryList);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-xs md:text-sm">
          <span className="name">
            {context.selectedCountry.length > 0
              ? context.selectedCountry.length > 10
                ? context.selectedCountry.substr(0, 15) + "..."
                : context.selectedCountry
              : "Select Location"}
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white text-black p-4 md:p-6 shadow-lg rounded-lg z-50 border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-base md:text-lg font-semibold text-gray-800">
            Choose Your Delivery Location
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Enter your address to see the offers available in your area.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="relative w-full">
            <Input
              id="location"
              placeholder="Search for your area..."
              onChange={filterCountries}
              className="w-full pr-10 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            <FiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
        </div>

        <ul className="mt-4 max-h-48 overflow-y-auto space-y-2">
          {countryList.length > 0 ? (
            countryList.map((item, index) => (
              <li key={index}>
                <Button
                  onClick={() => selectCountry(index, item.country)}
                  className={`w-full text-left px-4 py-2 rounded-lg border transition duration-200 ${
                    selectedTab === index
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {item.country}
                </Button>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500">No results found</p>
          )}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
