
import { HoverEffect } from "@/components/ui/card-hover-effect";
import TrendingSidebar from "../TradingSideBar";
import { products } from "../TradingSideBar/products";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="text-2xl font-bold mb-2">NEW PRODUCTS</h1>
      <p className="mb-6 text-gray-500">New products with updated stocks.</p>

      <div className="flex space-x-8">
      
        <div className="hidden md:block w-64">
          <TrendingSidebar products={products} />
        </div>

        <div className="flex-1">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
}


export const projects = [
  {
    title: "Blueberries – 1 Pint Package",
    description: "In Stock",
    discount: "23%",
    recommended: true,
    originalPrice: "$9.35",
    discountedPrice: "$7.25",
    rating: 4,
    ratingCount: 1,
    buttonText: "Add to cart",
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg",
  },
  {
    title: "Blue Diamond Almonds Lightly Salted",
    description: "In Stock",
    discount: "24%",
    originalPrice: "$4.29",
    discountedPrice: "$3.29",
    rating: 4,
    ratingCount: 1,
    buttonText: "Add to cart",
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-768x691.jpg",
  },
  {
    title: "Fresh Organic Broccoli Crowns",
    description: "In Stock",
    discount: "19%",
    organic: true,
    originalPrice: "$24.00",
    discountedPrice: "$19.50",
    rating: 4,
    ratingCount: 1,
    buttonText: "Add to cart",
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-768x691.jpg",
  },
  {
    title: "Chobani Complete Vanilla Greek Yogurt",
    description: "In Stock",
    organic: true,
    discount: "12%",
    originalPrice: "$11.68",
    discountedPrice: "$10.58",
    rating: 4,
    ratingCount: 1,
    buttonText: "Add to cart",
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50.jpg",
  },
  {
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    description: "In Stock",
    discount: "12%",
    originalPrice: "$4.49",
    discountedPrice: "$3.99",
    rating: 4,
    ratingCount: 1,
    buttonText: "Add to cart",
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-768x691.jpg",
  },
  {
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    description: "In Stock",
    organic: true,
    discount: "29%",
    originalPrice: "$6.77",
    discountedPrice: "$4.85",
    rating: 4,
    ratingCount: 1,
    buttonText: "Add to cart",
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-48-768x691.jpg",
  },
  {
    title: "Fresh Brown Coconut",
    description: "In Stock",
    organic: true,
    discount: "29%",
    originalPrice: "$6.77",
    discountedPrice: "$4.85",
    rating: 4,
    ratingCount: 1,
    buttonText: "Add to cart",
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-56-768x691.jpg",
  },
  {
    title: "Warrior Blend Organic",
    description: "In Stock",
    organic: true,
    discount: "29%",
    originalPrice: "$6.77",
    discountedPrice: "$4.85",
    rating: 4,
    ratingCount: 1,
    buttonText: "Add to cart",
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-4-768x691.jpg",
  },
];
