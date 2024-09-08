import "./News.css";
import defaultImage from "../../assets/isyeri/foto3.jpg";
import aybakIcon from "../../assets/icon.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import { supabase } from "../../utils/createClient";
import { useTranslation } from "react-i18next";

const News = () => {
  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const [news, setNews] = useState([]);
  const getPublicUrl = (path) => {
    return `${SUPABASE_URL}/storage/v1/object/public/news-images/${path}`;
  };

  const fetchNews = async () => {
    try {
      const { data, error } = await supabase.from("news").select("*");
      if (error) throw error;

      const newsWithUrls = await Promise.all(
        data.map(async (newsItem) => {
          const publicURL = newsItem.image
            ? getPublicUrl(newsItem.image)
            : defaultImage;
          return { ...newsItem, image: publicURL };
        })
      );
      newsWithUrls.reverse();
      setNews(newsWithUrls);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const { t } = useTranslation();

  return (
    <section className="news-container">
      <header className="news-header">
        <h2>
          <span>{t("trAybak")}</span>
          {t("newsh2")} <span>{t("ingAybak")}</span>
        </h2>
      </header>
      <main className="news-main">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
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
              <figure>
                <div className="figure-img">
                  <img
                    src={newitem.image || defaultImage}
                    alt={newitem.image.name}
                  />
                </div>
                <motion.figcaption
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h3>{newitem.title}</h3>
                  <p>{newitem.text}</p>
                  <div className="news-logo">
                    <img src={aybakIcon} alt="aybak logo" />
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
