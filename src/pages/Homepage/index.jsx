
import { ProductCarousel } from "@/myComponents/Carousel/ProductCarousel";
import SwiperSlide from "@/myComponents/Carousel/Swiper";
import CategoryGrid from "@/myComponents/Category/CategoryGrid";
import { Features } from "@/myComponents/Features";
import MarketplaceLayout from "@/myComponents/MainComponentLayout";
import MenuCategories from "@/myComponents/MenuCategories";
import { CardHoverEffectDemo } from "@/myComponents/NewProducts";
import { NewsletterSubscription } from "@/myComponents/Newsletter";
import { WeeklySpecial } from "@/myComponents/WeeklySpecial";

const Homepage = () => {
  return (
    <>
     
      <SwiperSlide />
      <ProductCarousel />
      <WeeklySpecial />
      <CardHoverEffectDemo />
      <MarketplaceLayout />
      <CategoryGrid />
      <NewsletterSubscription />
      <Features />
      <MenuCategories />
    
    </>
  );
};

export default Homepage;
