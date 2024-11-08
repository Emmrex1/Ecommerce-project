import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, openModal, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-4 border rounded-lg shadow-lg hover:shadow-xl"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          transition="transform 0.3s ease"
          style={{
            transform: hoveredIndex === idx? "scale(1.05)" : "scale(1)",
          }}
          onClick={() => openModal(item)}
        >
          {item.discount && (
            <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {item.discount}
            </span>
          )}
          {item.organic && (
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              ORGANIC
            </span>
          )}
          {item.recommended && (
            <span className="absolute top-2 right-2 bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded">
              RECOMMENDED
            </span>
          )}

          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
            />
          </div>

          <h4 className="text-sm font-medium">{item.title}</h4>
          <p className="text-green-600 font-medium">{item.description}</p>

          <div className="flex items-center space-x-1 mt-2">
            {[...Array(item.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
            {[...Array(5 - item.rating)].map((_, i) => (
              <span key={i} className="text-gray-300">
                ★
              </span>
            ))}
            <span className="text-gray-500 text-sm">({item.ratingCount})</span>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <span className="text-gray-500 line-through">
              {item.originalPrice}
            </span>
            <span className="text-red-500 font-bold">
              {item.discountedPrice}
            </span>
          </div>

          <AnimatePresence>
            <button
              onClick={() => openModal(item)}
              className="w-full py-2 border border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition"
            >
              {item.buttonText}
            </button>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
