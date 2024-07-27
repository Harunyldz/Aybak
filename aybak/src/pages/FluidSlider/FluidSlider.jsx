import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import aybak from "../../assets/slider/1.jpg";
import aybak2 from "../../assets/slider/aybak-1.png";
import akbak from "../../assets/slider/akbak-1.png";
import odenay from "../../assets/slider/3.jpg";
import aybakMega from "../../assets/slider/slider-mega.jpg";
import vpaket from "../../assets/slider/v-paket.png";
import paket1 from "../../assets/slider/slider25.1.png";
import paket2 from "../../assets/slider/slider25.2.png";
import "./FluidSlider.css";

const FluidSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000, // Otomatik kaydırma hızı (milisaniye cinsinden)
  };

  return (
    <Slider {...settings}>
      <div className="slider-main">
        <div className="orta-slider">
          <div className="slider-sol">
            <div className="slider-sol-top">
              <img src={aybak} width={200} alt="aybak" />
              <img src={aybak2} width={200} alt="aybak2" />
            </div>
            <div className="slider-sol-bottom">
              <img src={akbak} width={200} alt="akbak" />
              <img src={odenay} width={200} alt="ödenay" />
            </div>
          </div>
          <div className="slider-sag">
            <img src={aybakMega} width={200} alt="aybak mega" />
          </div>
        </div>
      </div>

      <div className="slider2">
        <div className="altdiv">
          <div><img src={paket2} width={400} height={400} alt="v paket 1kg" /></div>
          <div> <img src={vpaket} width={700} alt="v paket 1kg" /></div>
          <div> <img src={paket1} width={400} height={400} alt="v paket 1kg" /></div>

        </div>
      </div>
      <div className="slider2">
        <div className="altdiv2">
          <div><img src={paket2} width={400} height={400} alt="v paket 1kg" /></div>
          <div> <img src={vpaket} width={700} alt="v paket 1kg" /></div>
          <div> <img src={paket1} width={400} height={400} alt="v paket 1kg" /></div>
        </div>
      </div>
    </Slider>
  );
};

export default FluidSlider;
