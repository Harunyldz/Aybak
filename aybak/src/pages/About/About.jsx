import "./About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo5 from "../../assets/logo.png";
import aybakKurumsal from "../../assets/aybak-kurumsal.jpg";
import isyeri1 from "../../assets/isyeri/yeni2.jpg";
import odenay from "../../assets/isyeri/odenay_fon.jpg";
import aybakDis from "../../assets/slider/slider-mega.jpg";
import aybakUrun from "../../assets/slider/foto2.jpg";
import yag1 from "../../assets/isyeri/teneke.jpg";
import yag2 from "../../assets/isyeri/yeni1.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <header className="about-header">
        <div className="img-box">
          <img src={logo5} alt="Aybak logo" />
        </div>
      </header>
      <main className="about-content" id="hakkimizda">
        <motion.section
          className="about-box"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <figure>
            <figcaption>
              <p>
                {" "}
                {t("company_info")}
                <br /> <br />
                {t("quality_policy")}
              </p>
            </figcaption>
            <div className="figure-box">
              <img src={aybakKurumsal} alt="aybak kurumsal foto" />
            </div>
          </figure>
        </motion.section>
        <motion.section
          className="about-box"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <figure>
            <div className="figure-box">
              <img src={isyeri1} alt="aybak işyeri" />
              <img src={yag2} alt="ödenay yağ" />
            </div>
            <figcaption>
              <p>
                <p>{t("rice_facilities")}</p>
              </p>
            </figcaption>
          </figure>
        </motion.section>
        <motion.section
          className="about-box"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <figure>
            <figcaption>
              <p>
                {t("products_and_services")}
              </p>
            </figcaption>
            <div className="figure-box">
              <img src={odenay} alt="aybak bakliyat" />
            </div>
          </figure>
        </motion.section>
        <motion.section
          className="about-box"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <figure>
            <div className="figure-box">
              <img src={aybakDis} alt="aybak dış görünüm" />
            </div>
            <figcaption>
              <p>
                {t("unchanging_quality")}
                <br /> <br />
                {t("view_certificates")}
                {" "}
                <Link to="/kurumsal/belgelerimiz" className="figure-link">
                  {t("click_here")}
                </Link>
              </p>
            </figcaption>
          </figure>
        </motion.section>
        <motion.section
          className="about-box"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <figure>
            <figcaption>
              <p>
                {t("aybak_brand")}
              </p>
            </figcaption>
            <div className="figure-box">
              <img src={aybakUrun} alt="aybak ürünleri" />
            </div>
          </figure>
        </motion.section>
        <motion.section
          className="about-box"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <figure>
            <div className="figure-box">
              <img src={yag1} alt="ödenay yağları" />
              <img src={yag2} alt="ödenay yağları" />
            </div>
            <figcaption>
              <p>
                {t("unique_flavor")}
              </p>
            </figcaption>
          </figure>
        </motion.section>

        <section className="vizyon-misyon" id="misyonumuz">
          <h2>{t("mission")}</h2>
          <p>
            {t("mission_text")}
          </p><br />
          <p>
            {t("mission_text2")}
          </p>
        </section>
        <section className="vizyon-misyon" id="vizyonumuz">
          <h2>{t("vision")}</h2>
          <p>
            {t("vision_text")}
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
