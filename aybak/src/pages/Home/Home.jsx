import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import UrunSlider from "../../components/UrunSlider/UrunSlider";
import News from "../../components/News/News";
import MainSlider from "../../components/MainSlider/MainSlider";

const Home = () => {
  const { t, i18n } = useTranslation(); // Using the hook to access 't' and 'i18n'

  return (
    <div className="home-wrapper">
      <div className="home-slider">
        <MainSlider />
      </div>
      <section className="header">
        <motion.div
          className="header-alt"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>
            {t("Her Tanede")} <span>{t("Kalite")}</span>, {t("Her Sofrada")}
            <span> {t("Lezzet")}</span>
          </h2>
          <p>{t("paragraf1")}</p>
        </motion.div>
      </section>

      <section className="urunslider-wrapper">
        <UrunSlider />
      </section>
      <section className="news-wrapper">
        <News />
      </section>
      <section className="misyon-wrapper">
        <motion.div
          className="misyon"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <h3>{t("misyonBaslik")}</h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {t("misyon")}
          </motion.p>
        </motion.div>
        <motion.div
          className="vizyon"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <h3>{t("vizyonBaslik")}</h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {t("vizyon")}
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
