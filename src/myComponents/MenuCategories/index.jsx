// MenuCategories.js
import React from "react";

const categories = [
  {
    title: "FRUIT & VEGETABLES",
    items: [
      "Fresh Vegetables",
      "Herbs & Seasonings",
      "Fresh Fruits",
      "Cuts & Sprouts",
      "Exotic Fruits & Veggies",
      "Packaged Produce",
      "Party Trays",
    ],
  },
  {
    title: "BREAKFAST & DAIRY",
    items: [
      "Milk & Flavoured Milk",
      "Butter and Margarine",
      "Cheese",
      "Eggs Substitutes",
      "Honey",
      "Marmalades",
      "Sour Cream and Dips",
      "Yogurt",
    ],
  },
  {
    title: "MEAT & SEAFOOD",
    items: [
      "Breakfast Sausage",
      "Dinner Sausage",
      "Beef",
      "Chicken",
      "Sliced Deli Meat",
      "Shrimp",
      "Wild Caught Fillets",
      "Crab and Shellfish",
      "Farm Raised Fillets",
    ],
  },
  {
    title: "BEVERAGES",
    items: [
      "Water",
      "Sparkling Water",
      "Soda & Pop",
      "Coffee",
      "Milk & Plant-Based Milk",
      "Tea & Kombucha",
      "Drink Boxes & Pouches",
      "Craft Beer",
      "Wine",
    ],
  },
  {
    title: "BREADS & BAKERY",
    items: [
      "Milk & Flavoured Milk",
      "Butter and Margarine",
      "Cheese",
      "Eggs Substitutes",
      "Honey",
      "Marmalades",
      "Sour Cream and Dips",
      "Yogurt",
    ],
  },
];

export default function MenuCategories() {
  return (
    <div className="flex flex-col items-center py-8 bg-gray-50">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-8 text-start">
        {categories.map((category, index) => (
          <div key={index} className="mx-auto lg:mx-0">
            <h3 className="font-bold text-gray-800 mb-4 text-center lg:text-start">
              {category.title}
            </h3>
            <ul className="space-y-2 text-gray-600 text-center lg:text-start">
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
