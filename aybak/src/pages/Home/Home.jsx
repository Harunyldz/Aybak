import "./Home.css";
import { motion } from "framer-motion";

import background from "../../assets/background2.jpg";
import aybak from "../../assets/1.jpg";
import oden1 from "../../assets/2.jpg";
import odenay from "../../assets/3.jpg";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-slider">
        <img src={background} alt="" />
        <div className="slider-text">
          <span>Her Tanede Kalite, Her Sofrada Lezzet</span>
        </div>
      </div>
      <section className="header">
        <motion.div
          className="header-ust"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="header-img">
            <img src={aybak} alt="Aybak uzun tane pirinç" />
          </div>
          <div className="header-img">
            <img src={oden1} alt="Öden baldo pirinç" />
          </div>
          <div className="header-img">
            <img src={odenay} alt="Ödenay ayçiçek yağı" />
          </div>
        </motion.div>
        <motion.div
          className="header-alt"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>
            Her Tanede <span>Kalite</span>, Her Sofrada <span>Lezzet</span>
          </h2>
          <p>
            1984 yılından beri tarım sektöründe öncü olan Öden Gıda San. Tic.
            Ltd. Şti., kaliteyi her zaman en ön planda tutarak sofralarınıza
            lezzet katıyor. İlk günden bu yana doğallık ve güvenilirlik
            ilkesinden ödün vermeden üretim yapan firmamız, 1994 yılında Aybak
            Gıda San. Tic. Ltd. Şti. olarak genişleyen ürün yelpazesiyle
            pirincin yanı sıra çeşitli bakliyat ürünlerini de sunmaya başladı.
            Tarladan sofranıza kadar uzanan bu yolculukta, her bir ürünümüzde
            aynı özen ve kaliteyi bulacaksınız.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
