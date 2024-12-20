// import React, { useEffect, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { ProductModal } from "../ProductModal";
// import axios from "axios";

// export function ProductCarousel() {
//   const [products, setProducts] = useState([]); // State for products
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const [selectedProduct, setSelectedProduct] = useState(null); // Modal product
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

//   // useEffect(() => {
//   //   // Fetch featured products
//   //   const fetchProducts = async () => {
//   //     try {
//   //       setLoading(true); // Set loading to true before fetching data
//   //       const response = await axios.get(
//   //         "http://localhost:4000/api/products?isFeatured=true"
//   //       );
//   //       setProducts(response.data || []); // Set products array, fallback to empty array if response.data is not an array
//   //     } catch (error) {
//   //       setError(error.message); // Set error message
//   //     } finally {
//   //       setLoading(false); // Set loading state to false after fetching data
//   //     }
//   //   };

//   //   fetchProducts();
//   // }, []);

//   // Modal handlers
//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto mt-8">
//       <div className="flex items-center justify-between mb-4">
//         <div className="text-center md:text-left">
//           <h2 className="text-xl font-bold">FEATURED PRODUCTS</h2>
//           <p className="text-gray-500 text-sm">
//             Do not miss the current offers until the end of March.
//           </p>
//         </div>

//         <button className="flex items-center text-blue-500 font-semibold border rounded-full h-9">
//           View All <IoIosArrowRoundForward className="ml-1" />
//         </button>
//       </div>

//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//         <div className="w-full md:w-1/4 flex-shrink-0">
//           <img
//             src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
//             alt="Featured Product"
//             className="w-full h-full object-cover rounded-md"
//           />
//         </div>

//         <div className="w-full md:w-3/4">
//           <Carousel className="relative">
//             <CarouselContent className="flex gap-4">
//               {loading ? (
//                 <p>Loading products...</p>
//               ) : error ? (
//                 <p>Error loading products: {error}</p>
//               ) : products.length === 0 ? (
//                 <p>No products available</p>
//               ) : (
//                 products.map((product, index) => (
//                   <CarouselItem
//                     key={index}
//                     className="flex-shrink-0 w-full max-w-xs"
//                   >
//                     <Card
//                       className="relative p-4 border rounded-lg cursor-pointer"
//                       onClick={() => openModal(product)}
//                     >
//                       <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
//                         {product.discount || "Featured"}
//                       </span>
//                       <CardContent className="flex flex-col items-center">
//                         <img
//                           src={
//                             product.images?.[0] ||
//                             "https://via.placeholder.com/150"
//                           }
//                           alt={product.name || "Product"}
//                           className="w-full h-40 object-cover rounded-md mb-4"
//                         />
//                         <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center">
//                           {product.name || "Unknown Product"}
//                         </h3>
//                         <p className="text-green-500 text-xs font-semibold">
//                           {product.countInStock > 0
//                             ? "IN STOCK"
//                             : "OUT OF STOCK"}
//                         </p>
//                         <div className="flex items-center text-sm mb-2">
//                           {"★".repeat(Math.round(product.rating || 0))}
//                           {"☆".repeat(5 - Math.round(product.rating || 0))}
//                         </div>
//                         <div className="flex items-center space-x-2 mb-4">
//                           <span className="line-through text-gray-400">
//                             ${product.oldPrice?.toFixed(2) || "N/A"}
//                           </span>
//                           <span className="text-red-500 font-bold">
//                             ${product.price?.toFixed(2) || "N/A"}
//                           </span>
//                         </div>
//                         <button className="w-full py-2 border border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition">
//                           Add to cart
//                         </button>
//                       </CardContent>
//                     </Card>
//                   </CarouselItem>
//                 ))
//               )}
//             </CarouselContent>

//             <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" />
//             <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" />
//           </Carousel>
//         </div>
//       </div>

//       {isModalOpen && (
//         <ProductModal product={selectedProduct} onClose={closeModal} />
//       )}
//     </div>
//   );
// }
