import SwiperSlide from "@/myComponents/Carousel/Swiper";
import { Features } from "@/myComponents/Features";
import { NewsletterSubscription } from "@/myComponents/Newsletter";
import { WeeklySpecial } from "@/myComponents/WeeklySpecial";
import MainPage from "../../myComponents/FeaturedProduct/MainPage";
 import MainPage1 from "../../myComponents/New Product/MainPage1/Mainpage1";
import Headerrr from "@/Layout/Header";
import OtherProducts from "@/myComponents/OtherProducts";

const Homepage = () => {
  return (
    <>
      <SwiperSlide />
      <MainPage />
      <WeeklySpecial />
       <MainPage1 /> 
      <OtherProducts />
      <NewsletterSubscription />
      <Features />
    </>
  );
};

export default Homepage;
