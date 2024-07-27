import "./MainSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

import Birinci from "../Slides/Birinci/Birinci";
import Ikinci from "../Slides/Ikinci/Ikinci";
import Ucuncu from "../Slides/Ucuncu/Ucuncu";

import ekran from "../../assets/ekran.png"

const MainSlider = () => {
  return (
    <Swiper
      className="mainSlider"
      modules={[Autoplay]}
      // speed={2500}
      // autoplay={{
      //   delay: 4000,
      // }}
    >
      <SwiperSlide>
        <Birinci />
      </SwiperSlide>
      <SwiperSlide>
        <Ikinci />
      </SwiperSlide>
      <SwiperSlide>
        <Ucuncu />
      </SwiperSlide>
      {/* <SwiperSlide><img src={ekran} alt="" /></SwiperSlide> */}
    </Swiper>
  );
};

export default MainSlider;
