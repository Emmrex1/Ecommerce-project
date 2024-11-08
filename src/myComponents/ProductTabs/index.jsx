import React, { useState } from "react";
import ReviewSection from "./Reviews";
import SpecificationsTable from "./SpecificationsTable";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="product-tabs container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center mb-6 space-x-2">
        <button
          className={`px-2 py-1 rounded-full ${
            activeTab === "description"
              ? "bg-teal-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick("description")}
        >
          Description
        </button>
        <button
          className={`px-3 py-1 rounded-full ${
            activeTab === "additionalInfo"
              ? "bg-teal-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick("additionalInfo")}
        >
          Additional info
        </button>
        <button
          className={`px-3 py-1 rounded-full ${
            activeTab === "reviews"
              ? "bg-teal-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews (3)
        </button>
      </div>

      <div className="p-4 border-t border-gray-300">
        {activeTab === "description" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">Product description goes here...</p>
          </div>
        )}
        {activeTab === "additionalInfo" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Additional Information
            </h3>

            <SpecificationsTable/>
          </div>
        )}
        {activeTab === "vendor" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Vendor Information</h3>
            <p className="text-gray-700">Vendor details go here...</p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <ReviewSection />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTabs;
