import React from "react";

const TrendingSidebar = ({ products }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white w-64">
      <h3 className="text-lg font-bold mb-4">Trending Products</h3>
      <div className="space-y-2">
        {products.map((product, index) => (
          <div key={index} className="flex items-center space-x-4">
            
            <div className="w-12 h-20">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full rounded"
              />
            </div>

           
            <div>
              <h4 className="text-sm font-semibold">{product.title}</h4>
              <div className="text-gray-500 line-through text-xs">
                {product.originalPrice}
              </div>
              <div className="text-red-500 font-bold text-sm">
                {product.discountedPrice}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSidebar;
