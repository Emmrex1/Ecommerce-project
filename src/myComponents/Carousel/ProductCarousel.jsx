import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductModal } from "../ProductModal";

const products = [
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-768x691.jpg",
    name: "Nestle Original Coffee-Mate Coffee Creamer",
    inStock: true,
    discount: "15%",
    originalPrice: "$13.99",
    salePrice: "$11.99",
    rating: 1,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7.jpg",
    name: "USDA Choice Angus Beef Stew Meat",
    inStock: true,
    discount: "38%",
    originalPrice: "$79.99",
    salePrice: "$49.99",
    rating: 4,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7.jpg",
    name: "USDA Choice Angus Beef Stew Meat",
    inStock: true,
    discount: "38%",
    originalPrice: "$79.99",
    salePrice: "$49.99",
    rating: 4,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7.jpg",
    name: "USDA Choice Angus Beef Stew Meat",
    inStock: true,
    discount: "38%",
    originalPrice: "$79.99",
    salePrice: "$49.99",
    rating: 4,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7.jpg",
    name: "USDA Choice Angus Beef Stew Meat",
    inStock: true,
    discount: "38%",
    originalPrice: "$79.99",
    salePrice: "$49.99",
    rating: 4,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-768x691.jpg",
    name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    inStock: true,
    discount: "38%",
    originalPrice: "$79.99",
    salePrice: "$49.99",
    rating: 4,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46.jpg",
    name: "Field Roast Chao Cheese Creamy Original",
    inStock: true,
    discount: "14%",
    originalPrice: "$29.00",
    salePrice: "$25.00",
    rating: 1,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-768x691.jpg",
    name: "Blue Diamond Almonds Lightly Salted",
    inStock: true,
    discount: "26%",
    originalPrice: "$20.00",
    salePrice: "$14.97",
    rating: 1,
  },
];

export function ProductCarousel() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">BEST SELLERS</h2>
          <p className="text-gray-500 text-sm">
            Do not miss the current offers until the end of March.
          </p>
        </div>

        <button className="flex items-center text-blue-500 font-semibold border rounded-full h-9 ">
          View All <IoIosArrowRoundForward className="ml-1" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/4 flex-shrink-0">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
            alt="Featured Product"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="w-full md:w-3/4">
          <Carousel className="relative">
            <CarouselContent className="flex gap-4">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full max-w-xs"
                >
                  <Card
                    className="relative p-4 border rounded-lg cursor-pointer"
                    onClick={() => openModal(product)}
                  >
                    <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </span>
                    <CardContent className="flex flex-col items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center">
                        {product.name}
                      </h3>
                      <p className="text-green-500 text-xs font-semibold">
                        {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
                      </p>
                      <div className="flex items-center text-sm mb-2">
                        {"★".repeat(product.rating)}
                        {"☆".repeat(5 - product.rating)}
                      </div>
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="line-through text-gray-400">
                          {product.originalPrice}
                        </span>
                        <span className="text-red-500 font-bold">
                          {product.salePrice}
                        </span>
                      </div>
                      <button className="w-full py-2 border border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition">
                        Add to cart
                      </button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" />
          </Carousel>
        </div>
      </div>

      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

