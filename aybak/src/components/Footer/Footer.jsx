import "./Footer.css";
import logo from "../../assets/logo.png";
import { navList } from "../../utils/Data";
import WhatsAppLink from "../../components/Footer/WhatsAppLink";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { transformString } from "../../utils/transformString";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

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
            <h3>
              {t("takip")}
            </h3>
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
                <a href="https://www.instagram.com/aybakbakliyat?igsh=MW91bno5amJ1dzNmZw==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="footer-orta">
          <div>
            <h3> {t("Kurumsal")}
            </h3>
            <ul>
              <li>
                <Link to="/kurumsal"> {t("Hakkımızda")}</Link>
              </li>
              <li>
                <HashLink to="/kurumsal#misyonumuz" scroll={scrollWithOffset}>
                  {t("Misyonumuz")}{" "}
                </HashLink>
              </li>
              <li>
                <HashLink to="/kurumsal#vizyonumuz" scroll={scrollWithOffset}>
                  {t("Vizyonumuz")} {" "}
                </HashLink>
              </li>
              <li>
                <Link to="/kurumsal/belgelerimiz">{t("Belgelerimiz")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>{t("Ürünlerimiz")}</h3>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <Link to={`/urunlerimiz/${transformString(product.name)}`}>
                    {t(product.name)}
                    {/* {product.name} */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="footer-sag">
          <div>
            <h3>{t("Yemek Tarifleri")}</h3>
            <ul>
              {yemekler.map((yemek) => (
                <li key={yemek.id}>
                  <Link to={`/yemektarifleri`}>
                    {t(yemek.name)}
                    {/* {yemek.name} */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>
              {t("header")}

            </h3>
            <ul>
              {productInfo.map((urun) => (
                <li key={urun.id}>
                  <Link to={`/bakliyat-saglik/${transformString(urun.title)}`}>
                    {t(urun.title)}
                    {/* {urun.title} */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="footer-contact">
          <h3>{t("İletişim")}
          </h3>
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
              <a href="mailto:info@aybakgida.com">
                <span>info@aybakgida.com</span></a>
            </li>
            <li>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <WhatsAppLink phoneNumber={phoneNumber} message={message} />
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div className="copyright">
        © 1984-{currentYear} | Aybak Gıda San. Tic. Ltd. Şti. | {t("telif")}
      </div>
    </footer>
  )
};

export default Footer;
