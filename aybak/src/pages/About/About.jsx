import logo5 from "../../assets/logo.png";
import "./About.css";
import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <div className="about-img">
          <img src={logo5} alt="Aybak logo" />
        </div>
      </div>

      <div className="about-content" id="about">
        <p>
          Şirketimiz 1984 yılında Öden Gıda San. Tic. Ltd. Şti. adı altında
          faaliyetlerine başlamış olup pirinç ekim ve üretiminde öncü bir firma
          olmuştur. 1994 yılında Aybak Gıda San. Tic. Ltd. Şti. olarak pirincin
          yanında diğer bakliyat ürünlerini de çeşitleri arasına katmıştır.
        </p>
        <p>
          Kalite, güven ve istikrarı yol haritası olarak belirleyen firmamız
          istikrarlı çizgisini her geçen gün daha da ileriye götürmeyi amaç
          edinmiştir.
        </p>
        <p>
          Pirinç ve yağ entegre tesisleri, direkt olarak ekimini yaptığı çeltik
          ve ayçiçek tarlaları ve son teknoloji makina ve ekipmanları ile
          müşterilerine daha iyi ve daha kaliteli hizmet sunmaktadır.
        </p>
        <p>
          Pirinç ve bakliyat çeşitleri, Ödenay ayçiçek yağları, Ödenay mısır
          yağları ve yöresel ürünlerle faaliyetlerini sürdüren Aybak güçlü
          lojistiğiyle müşterilerine en hızlı ve güvenilir bir şekilde hizmet
          etmektedir.
        </p>
        <p>
          Firmamız ürünlerinde bütün sezon boyunca değişmeyen kalite anlayışıyla
          yerli ve ithal ürünlerle, ISO ve HACCP kalite sertifikalarıyla daha da
          güvenli bir hizmet sunmaktadır.
        </p>
        <p>
          Ürünlerimizi Aybak ve Akbak tescilli markalarıyla pazarlayan ve
          markalaşmaya doğru ilerleyen firmamız, hedeflerini yüksek tutmuştur.
          Ödenay yağlarımızla müşterimize bir başkalığı hissettirmeyi
          amaçlıyoruz. Adını öncelikli olarak kalite ve güvenle özdeşleştiren
          firmamız Ar-Ge çalışmalarıyla geleceğe yönelik daha güçlü, daha emin
          adımlarla yürümektedir.
        </p>
        <h4>Aybak Gıda San. ve Tic. Ltd. Şti.</h4>
      </div>
      <div className="about-content" id="misyon">
        <h2>Misyonumuz</h2>
        <p>
          Yörelerin en seçkin bölgelerinden seçilen ürünlerimiz,  müşterilerimizin hizmetine sunulmakta ve bütün bir yıl boyunca aynı kalitede ürün satışı yapılmakta ve hizmet verilmektedir.
        </p>
        <p>AYBAK, sofranıza kaliteli tatlar sumak için faaliyetlerini yürütürken aynı zamanda Öden Gıda San. ve Tic. Ltd. Şti. bünyesi altında ISO 9001:2000 belgelerini alarak ticari faaliyetlerinde kaliteyi ön plana çıkarmıştır.
        </p>
      </div>
      <div className="about-content" id="vizyon">
        <h2>Vizyonumuz</h2>
        <p>
          Vizyonumuz, tarım ürünleri toptancılığı sektöründe öncü ve güvenilir bir marka haline gelmektir. Teknolojiyi ve yenilikçi yöntemleri kullanarak lojistik ve tedarik zincirimizi sürekli geliştirmek, global pazarda rekabetçi bir konum elde etmek ve müşterilerimize üstün hizmet sunmak için kendimizi sürekli olarak yeniliyoruz. Çevreye duyarlı ve sürdürülebilir iş modelleri ile geleceğe katkı sağlamayı hedefliyoruz.</p>
      </div>
    </div>
  );
};

export default About;
