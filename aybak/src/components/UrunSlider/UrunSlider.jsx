import "./UrunSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Pagination, Navigation } from "swiper/modules";
import { products } from "../../utils/Products";
import { useState } from "react";

const UrunSlider = () => {
  const [selected, setSelected] = useState(products[0].name);
  const selectedProducts = products.find((item) => item.name === selected);

  return (
    <div className="urun-slider">
      <header>
        <h2>Ürünlerimiz</h2>
        <menu>
          <ul>
            {products.map((urun) => (
              <li className={urun.name === selected ? "active" : ""} onClick={() => setSelected(urun.name)} key={urun.id}>
                {urun.name}
              </li>
            ))}
          </ul>
        </menu>
      </header>
      <main>
        <Swiper
          slidesPerView={5}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          speed={2500}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          navigation={true}
          modules={[Autoplay,Pagination, Navigation]}
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
          {selectedProducts.subProducts.map((selectedProduct) => (
            <SwiperSlide key={selectedProduct.id}>
              <motion.img
                key={selectedProducts.id}
                src={selectedProduct.image}
                alt=""
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              />
              <h3>{selectedProduct.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
};

export default UrunSlider;
