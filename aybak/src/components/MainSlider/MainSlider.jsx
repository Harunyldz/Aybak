import "./MainSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

import slide1 from "../../assets/slider_images/slide1.png"
import slide2 from "../../assets/slider_images/slide2.png"
import slide3 from "../../assets/slider_images/slide3.png"
const MainSlider = () => {
  return (
    <Swiper
      className="mainSlider"
      modules={[Autoplay]}
      speed={2500}
      autoplay={{
        delay: 4000,
      }}
    >
      <SwiperSlide><img src={slide1} alt="slider image" /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="slider image" /></SwiperSlide>
      <SwiperSlide><img src={slide3} alt="slider image" /></SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
