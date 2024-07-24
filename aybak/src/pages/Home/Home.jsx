import "./Home.css";
import { motion } from "framer-motion";

import UrunSlider from "../../components/UrunSlider/UrunSlider";

import { products } from "../../utils/Products";
import FluidSlider from "../FluidSlider/FluidSlider";
import News from "../../components/News/News";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-slider">
        {/* <img src={background3} alt="" />
        <div className="slider-text">
          <span>Her Tanede Kalite, Her Sofrada Lezzet</span>
        </div> */}
        <FluidSlider />
      </div>
      <section className="header">
        {/* <motion.div
          className="header-ust"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="slider-main-header">
            <div className="slider-header-sol">
              <div className="header-img">
                <img src={aybak} alt="Aybak uzun tane pirinç" />
              </div>
              <div className="header-img">
                <img src={aybak2} alt="Aybak baldo pirinç" />
              </div>
              <div className="header-img">
                <img src={akbak} alt="AKbak Uzun Taneli pirinç" />
              </div>
              <div className="header-img">
                <img src={odenay} alt="Ödenay ayçiçek yağı" />
              </div>
            </div>
            <div className="slider-header-sag">
              <img src={aybakMega} alt="Aybak uzun tane pirinç" />
            </div>
          </div>
        </motion.div> */}
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
          <h3>Misyonumuz</h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Yörelerin en seçkin bölgelerinden seçilen ürünlerimiz,
            müşterilerimizin hizmetine sunulmakta ve bütün bir yıl boyunca aynı
            kalitede ürün satışı yapılmakta ve hizmet verilmektedir. AYBAK,
            sofranıza kaliteli tatlar sumak için faaliyetlerini yürütürken aynı
            zamanda Öden Gıda San. ve Tic. Ltd. Şti. bünyesi altında ISO
            9001:2000 belgelerini alarak ticari faaliyetlerinde kaliteyi ön
            plana çıkarmıştır.
          </motion.p>
        </motion.div>
        <motion.div
          className="vizyon"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <h3>Vizyonumuz</h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Vizyonumuz, tarım ürünleri toptancılığı sektöründe öncü ve güvenilir
            bir marka haline gelmektir. Teknolojiyi ve yenilikçi yöntemleri
            kullanarak lojistik ve tedarik zincirimizi sürekli geliştirmek,
            global pazarda rekabetçi bir konum elde etmek ve müşterilerimize
            üstün hizmet sunmak için kendimizi sürekli olarak yeniliyoruz.
            Çevreye duyarlı ve sürdürülebilir iş modelleri ile geleceğe katkı
            sağlamayı hedefliyoruz.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
