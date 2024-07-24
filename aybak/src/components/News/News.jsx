import "./News.css";
import { news } from "../../utils/News";
import deafultImage from "../../assets/isyeri/foto3.jpg";
import aybakIcon from "../../assets/icon.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const News = () => {
  return (
    <section className="news-container">
      <header className="news-header">
        <h2>
          <span>Aybak</span>'ta Son Gelişmeler
        </h2>
      </header>
      <main className="news-main">
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          speed={2500}
          autoplay={{
            delay: 6000,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          className="newsSwiper"
        >
          {news.map((newitem) => (
            <SwiperSlide key={newitem.id}>
              <figure >
                <div className="figure-img">
                  <img src={newitem.image || deafultImage} alt="" />
                </div>
                <motion.figcaption
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h3>{newitem.title}</h3>
                  <p>{newitem.text}</p>
                  <div className="news-logo">
                    <img src={aybakIcon} alt="" />
                  </div>
                </motion.figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
};

export default News;
