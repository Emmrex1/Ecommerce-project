import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "../../Share/FeaturedProductCard";

const FeaturedProduct = ({ products }) => (
  <div className="flex items-center justify-center bg-gray-100 py-8">
    <div className="flex flex-col gap-6 px-4 sm:px-6 w-full max-w-screen-md md:max-w-7xl relative">
      {/* Header Section */}
      <div className="mb-6 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          Featured Products
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-500">
          Don't miss the current offers until the end of March.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Banner */}
        <div className="w-full md:w-1/4 mt-5">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
            alt="Special Offer"
            className="w-full h-[250px] sm:h-[300px] md:h-[420px] object-cover rounded-lg"
          />
        </div>

        {/* Product Carousel */}
        <div className="w-full md:w-3/4">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            navigation={true}
            modules={[Navigation]}
            className="relative w-full"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedProduct;
