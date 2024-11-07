import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperSlide12() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_1100,f_auto,fl_lossy,dpr_auto,q_auto/v1727765137/contentservice/home%20and%20Kitchen.png_9IS5FzB1A.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_1100,f_auto,fl_lossy,dpr_auto,q_auto/v1729825175/contentservice/EARLY%20BIRD%20BANNER%201400%20BY%20559%20.png_wCu3_BZrU.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_1100,f_auto,fl_lossy,dpr_auto,q_auto/v1722953670/contentservice/itec%20zinox.jpg_gfZ3Az_BD.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_1100,f_auto,fl_lossy,dpr_auto,q_auto/v1729766894/contentservice/New%20deep.png_4UtR5Cyq-.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_1100,f_auto,fl_lossy,dpr_auto,q_auto/v1729766894/contentservice/New%20deep.png_4UtR5Cyq-.png"
            alt=""
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
