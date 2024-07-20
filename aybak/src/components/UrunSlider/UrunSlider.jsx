import "./UrunSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import slider1 from "../../assets/25/aybak_baldo25.jpg";
import slider2 from "../../assets/25/aybak_koftelik25.jpg";
// import slider3 from "../../assets/IMG-20240706-WA0015.jpg";
// import slider4 from "../../assets/aybak_pilavlik.jpg";
import slider3 from "../../assets/1kg/nohut.png";
import slider4 from "../../assets/1kg/barbunya.png";
import slider5 from "../../assets/1kg/popcorn.png";
import slider6 from "../../assets/1kg/yesilMercimek.png";
// import slider5 from "../../assets/IMG-20240706-WA0014.jpg";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const UrunSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
        className="urunSwiper"
      >
        <h2 className="slider-title">Ürünlerimiz</h2>
        <SwiperSlide>
          <motion.img
            src={slider6}
            alt=""
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          />
          <h3>Aybak Baldo Pirinç 25kg</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3>Aybak Köftelik Bulgur 25kg</h3>
        </SwiperSlide>
        <SwiperSlide>
          <motion.img
            src={slider3}
            alt=""
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }} />
          <h3>Aybak Uzun Tane Pirinç 25kg</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3>Aybak Pilavlık Bulgur 25kg</h3>
        </SwiperSlide>
        <SwiperSlide>
          <motion.img
            src={slider3}
            alt=""
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }} />
          <h3>Aybak Baldo Pirinç 25kg</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3>Aybak Uzun Tane Pirinç 25kg</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3>Aybak Pilavlık Bulgur 25kg</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3>Aybak Baldo Pirinç 25kg</h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default UrunSlider;
