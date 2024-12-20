import SwiperSlide from "@/myComponents/Carousel/Swiper";
import { Features } from "@/myComponents/Features";
import { NewsletterSubscription } from "@/myComponents/Newsletter";
import { WeeklySpecial } from "@/myComponents/WeeklySpecial";
import MainPage from "../../SubPages/MainPage";
import MainPage2 from "../../SubPages/MainPage2";
import MainPage1 from "../../SubPages/MainPage1/Mainpage1";
import Headerrr from "@/Layout/Header";

const Homepage = () => {
  return (
    <>
      <SwiperSlide />
      <MainPage />
      <WeeklySpecial />
      <MainPage1 />
      <MainPage2 />
      <NewsletterSubscription />
      <Features />
    </>
  );
};

export default Homepage;
