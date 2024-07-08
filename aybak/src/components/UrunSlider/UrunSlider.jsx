import "./UrunSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "../../assets/aybak_baldo.jpg";
import slider2 from "../../assets/aybak_koftelik.jpg";
import slider3 from "../../assets/aybak_uzun2.jpg";
import slider4 from "../../assets/aybak_pilavlik.jpg";
import slider5 from "../../assets/aybak_baldo2.jpg";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const UrunSlider = () => {
  return (
    <>
      <h2 className="slider-title">Ürünlerimiz</h2>
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
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3>Aybak Baldo Pirinç 25kg</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3>Aybak Köftelik Bulgur 25kg</h3>
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
