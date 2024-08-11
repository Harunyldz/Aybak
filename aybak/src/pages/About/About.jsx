import "./About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo5 from "../../assets/logo.png";
import aybakKurumsal from "../../assets/aybak-kurumsal.jpg";
import isyeri1 from "../../assets/isyeri/yeni2.jpg";
import isyeri2 from "../../assets/isyeri/yeni4.jpg";
import odenay from "../../assets/isyeri/odenay_fon.jpg";
import aybakDis from "../../assets/slider/slider-mega.jpg";
import aybakUrun from "../../assets/slider/foto2.jpg";
import yag1 from "../../assets/isyeri/teneke.jpg";
import yag2 from "../../assets/isyeri/yeni1.jpg";

const About = () => {
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
                Şirketimiz 1984 yılında Öden Gıda San. Tic. Ltd. Şti. adı
                altında faaliyetlerine başlamış olup pirinç ekim ve üretiminde
                öncü bir firma olmuştur. 1994 yılında Aybak Gıda San. Tic. Ltd.
                Şti. olarak pirincin yanında diğer bakliyat ürünlerini de
                çeşitleri arasına katmıştır.
                <br /> <br />
                Kalite, güven ve istikrarı yol haritası olarak belirleyen
                firmamız istikrarlı çizgisini her geçen gün daha da ileriye
                götürmeyi amaç edinmiştir.
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
                Pirinç ve yağ entegre tesisleri, direkt olarak ekimini yaptığı
                çeltik ve ayçiçek tarlaları ve son teknoloji makina ve
                ekipmanları ile müşterilerine daha iyi ve daha kaliteli hizmet
                sunmaktadır.
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
                Pirinç ve bakliyat çeşitleri, Ödenay ayçiçek yağları, Ödenay
                mısır yağları ve yöresel ürünlerle faaliyetlerini sürdüren Aybak
                güçlü lojistiğiyle müşterilerine en hızlı ve güvenilir bir
                şekilde hizmet etmektedir.
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
                Firmamız ürünlerinde bütün sezon boyunca değişmeyen kalite anlayışıyla yerli ve ithal ürünlerle,   ISO ve HACCP kalite sertifikalarıyla daha da güvenli bir hizmet sunmaktadır.
                <br /> <br />
                Sertifikalarımızı görmek için{" "}
                <Link to="/kurumsal/belgelerimiz" className="figure-link">
                  Tıklayınız.
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
                Ürünlerimizi Aybak ve Akbak tescilli markalarıyla pazarlayan ve
                markalaşmaya doğru ilerleyen firmamız, hedeflerini yüksek
                tutmuştur.
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
                Ödenay yağlarımızla müşterimize bir başkalığı hissettirmeyi
                amaçlıyoruz. Adını öncelikli olarak kalite ve güvenle
                özdeşleştiren firmamız Ar-Ge çalışmalarıyla geleceğe yönelik
                daha güçlü, daha emin adımlarla yürümektedir.
              </p>
            </figcaption>
          </figure>
        </motion.section>

        <section className="vizyon-misyon" id="misyonumuz">
          <h2>Misyonumuz</h2>
          <p>
            Yörelerin en seçkin bölgelerinden seçilen ürünlerimiz,
            müşterilerimizin hizmetine sunulmakta ve bütün bir yıl boyunca aynı
            kalitede ürün satışı yapılmakta ve hizmet verilmektedir.
          </p>
          <p>
            AYBAK, sofranıza kaliteli tatlar sumak için faaliyetlerini
            yürütürken aynı zamanda Öden Gıda San. ve Tic. Ltd. Şti. bünyesi
            altında ISO 9001:2000 belgelerini alarak ticari faaliyetlerinde
            kaliteyi ön plana çıkarmıştır.
          </p>
        </section>
        <section className="vizyon-misyon" id="vizyonumuz">
          <h2>Vizyonumuz</h2>
          <p>
            Vizyonumuz, tarım ürünleri toptancılığı sektöründe öncü ve güvenilir
            bir marka haline gelmektir. Teknolojiyi ve yenilikçi yöntemleri
            kullanarak lojistik ve tedarik zincirimizi sürekli geliştirmek,
            global pazarda rekabetçi bir konum elde etmek ve müşterilerimize
            üstün hizmet sunmak için kendimizi sürekli olarak yeniliyoruz.
            Çevreye duyarlı ve sürdürülebilir iş modelleri ile geleceğe katkı
            sağlamayı hedefliyoruz.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
