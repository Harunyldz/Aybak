import "./Footer.css";
import logo from "../../assets/logo.png";
import { navList } from "../../utils/Data";
import WhatsAppLink from "../../components/Footer/WhatsAppLink";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { transformString } from "../../utils/transformString";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaFax,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { products, productInfo } from "../../utils/Products";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const phoneNumber = "902125459252"; // Ülke kodu ile birlikte telefon numarası
  const message = "AYBAK Gıda!";

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -window.innerHeight / 3;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const yemekler = navList
    .find((item) => item.name === "Yemek Tarifleri")
    .subMenu?.filter((item) => item.subMenu);

  return (
    <footer>
      <div className="footer-container">
        <section className="footer-sol">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-icons">
            <h3>Bizi Takip Edin</h3>
            <ul className="icons">
              <li>
                <a
                  href="https://www.facebook.com/aybakbakliyat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="footer-orta">
          <div>
            <h3>Kurumsal</h3>
            <ul>
              <li>
                <Link to="/kurumsal"> Hakkımızda</Link>
              </li>
              <li>
                <HashLink to="/kurumsal#misyonumuz" scroll={scrollWithOffset}>
                  Misyonumuz{" "}
                </HashLink>
              </li>
              <li>
                <HashLink to="/kurumsal#vizyonumuz" scroll={scrollWithOffset}>
                  Vizyonumuz{" "}
                </HashLink>
              </li>
              <li>
                <Link to="/kurumsal/belgelerimiz"> Sertifikalarımız</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Ürünlerimiz</h3>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <Link to={`/urunlerimiz/${transformString(product.name)}`}>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="footer-sag">
          <div>
            <h3>Yemek Tarifleri</h3>
            <ul>
              {yemekler.map((yemek) => (
                <li key={yemek.id}>
                  <Link to={`/yemektarifleri`}>{yemek.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Bakliyat ve Sağlık</h3>
            <ul>
              {productInfo.map((urun) => (
                <li key={urun.id}>
                  <Link to={`/bakliyat-saglik/${transformString(urun.title)}`}>{urun.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="footer-contact">
          <h3>İletişim</h3>
          <ul className="footer-contacts">
            <li>
              <i>
                <FaLocationDot />
              </i>
              <span>
                Aybak Gıda San. Tic. Ltd. Şti. <br /> Kocatepe mahallesi, Gümrük
                iskelesi caddesi Mega Canter A blok <br />
                No:235-236-237-238 <br /> Bayrampaşa/İstanbul
              </span>
            </li>
            <li>
              <div>
                <i>
                  <FaPhone />
                </i>
                <span>
                  <a href="tel:+902126406181">+90 (212) 640 61 81 - 82</a>
                </span>
              </div>
              <div>
                <i>
                  <FaFax />
                </i>
                <span>
                  <a href="tel:+902125642098"> +90 (212) 564 20 98 </a>
                </span>
              </div>
            </li>
            <li>
              <i>
                <MdEmail />
              </i>
              <span>info@aybakgida.com</span>
            </li>
            <li>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <WhatsAppLink phoneNumber={phoneNumber} message={message} />
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div className="copyright">
        © 1984-{currentYear} | Aybak Gıda San. Tic. Ltd. Şti. | Her Hakkı
        Saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
