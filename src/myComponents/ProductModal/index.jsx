import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FiStar } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPlus, BsDash } from "react-icons/bs";
import { TbScale } from "react-icons/tb";

export function ProductModal( { product, onClose}) {
   if (!product) return null; 

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg"
  );

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
      <Dialog open onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="outline">View Product</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-lg md:max-w-2xl bg-white text-gray-800 shadow-lg rounded-lg p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            All Natural Italian-Style Chicken Meatballs
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Brands: <span className="font-medium">Welch's</span>
          </DialogDescription>
        </DialogHeader>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-4">
          <div className="flex flex-col items-center">
            <img
              src={selectedImage}
              alt="Italian-Style Chicken Meatballs"
              className="w-full h-auto max-w-[200px] md:max-w-full object-cover rounded-lg shadow mb-4"
            />

            <div className="flex space-x-2 justify-center">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg"
                alt="Thumbnail 1"
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border ${
                  selectedImage ===
                  "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() =>
                  setSelectedImage(
                    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg"
                  )
                }
              />
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-600x600.jpg"
                alt="Thumbnail 2"
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border ${
                  selectedImage ===
                  "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-600x600.jpg"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() =>
                  setSelectedImage(
                    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-600x600.jpg"
                  )
                }
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} />
                ))}
              </div>
              <span className="text-sm text-gray-500">(5)</span>
              <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                23% OFF
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-400 line-through">$9.35</span>
              <span className="text-red-600 text-lg font-semibold">$7.25</span>
            </div>

            <div className="text-green-600 font-medium">IN STOCK</div>

            <p className="text-gray-600 text-sm">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent.
            </p>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={handleDecrease}
                className="px-2"
              >
                <BsDash />
              </Button>
              <span className="px-3">{quantity}</span>
              <Button
                variant="outline"
                onClick={handleIncrease}
                className="px-2"
              >
                <BsPlus />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="primary"
                className="flex-1 md:flex-none bg-blue-500 text-white hover:bg-blue-600"
              >
                <AiOutlineShoppingCart className="mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1 md:flex-none">
                <AiOutlineHeart className="mr-2" />
                Add to Wishlist
              </Button>
              <Button variant="outline" className="flex-1 md:flex-none">
                <TbScale className="mr-2" />
                Compare
              </Button>
            </div>
          </div>
        </div>
        
      </DialogContent>
    </Dialog>
  );
}

// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// export function ProductModal({ product, onClose }) {
//   if (!product) return null;

//   return (
//     <Dialog open onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px] bg-white text-gray-800 shadow-lg rounded-lg p-6">
//         <DialogHeader>
//           <DialogTitle className="text-lg font-semibold">
//             {product.name}
//           </DialogTitle>
//         </DialogHeader>

//         <div className="grid gap-4 py-4">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-60 object-cover rounded-md"
//           />
//           <p className="text-green-500 text-sm font-semibold">
//             {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
//           </p>
//           <p className="text-gray-600">{product.description}</p>

//           <div className="flex items-center space-x-2 mb-4">
//             <span className="line-through text-gray-400">
//               {product.originalPrice}
//             </span>
//             <span className="text-red-500 font-bold">{product.salePrice}</span>
//           </div>

//           <div className="flex items-center space-x-4">
//             <Button variant="outline" className="flex-1">
//               Add to Wishlist
//             </Button>
//             <Button variant="outline" className="flex-1">
//               Compare
//             </Button>
//           </div>
//         </div>

//         <DialogFooter>
//           <Button
//             onClick={onClose}
//             className="bg-blue-500 text-white hover:bg-blue-600"
//           >
//             Close
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
