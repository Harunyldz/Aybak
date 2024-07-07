import "./Home.css";
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
        <div className="header-top">
          <h2>Her Tanede <span>Kalite</span>, Her Sofrada <span>Lezzet</span></h2>
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
        </div>
        <div className="header-bottom">
          <div className="header-img">
            <img src={aybak} alt="Aybak uzun tane pirinç" />
          </div>
          <div className="header-img">
            <img src={oden1} alt="Öden baldo pirinç" />
          </div>
          <div className="header-img">
            <img src={odenay} alt="Ödenay ayçiçek yağı" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
