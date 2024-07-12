import "./Footer.css";
import logo from "../../assets/logo.png";
import { navList } from "../../utils/Data";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaFax,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
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
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </li>

                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
          </div>
        </section>
        <section className="footer-orta">
          <div>
            <h3>Kurumsal</h3>
            <ul>
              <li>Hakkımızda</li>
              <li>Misyonumuz</li>
              <li>Vizyonumuz</li>
              <li>Sertifikalarımız</li>
            </ul>
          </div>
          <div>
            <h3>Ürünlerimiz</h3>
            <ul>
              <li>Dökme Bakliyat 25kg</li>
              <li>Yöresel Ürünler 25kg</li>
              <li>Paket Bakliyat 1kg</li>
              <li>Paket Bakliyat 2,5kg</li>
              <li>Paket Bakliyat 5kg</li>
              <li>Ödenay Ayçiçek Yağları</li>
              <li>Ödenay Mısır Yağları</li>
            </ul>
          </div>
        </section>
        <section className="footer-sag">
          <div>
            <h3>Yemek Tarifleri</h3>
            <ul>
              {yemekler.map((yemek) => (
                <li key={yemek.id}>{yemek.name}</li>
              ))}
              <li>Tüm Yemek Tarifleri</li>
            </ul>
          </div>
          <div>
            <h3>Bakliyat ve Sağlık</h3>
            <ul>
              <li>Bulgur</li>
              <li>Barbunya</li>
              <li>Fasulye</li>
              <li>Nohut</li>
              <li>Kırmızı Mercimek</li>
              <li>Sarı Mercimek</li>
              <li>Yeşil Mercimek</li>
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
                Aybak Gıda San. Tic. Ltd. Şti. <br /> Rami Kuru Gıda Sitesi B
                Blok <br />
                No:45-46-47 Rami - EYÜP / İSTANBUL
              </span>
            </li>
            <li>
              <div>
                <i>
                  <FaPhone />
                </i>
                <span> +90 (212) 640 61 81 - 82</span>
              </div>
              <div>
                <i>
                  <FaFax />
                </i>
                <span> +90 (212) 564 20 98</span>
              </div>
            </li>
            <li>
              <i>
                <MdEmail />
              </i>
              <span>info@aybakgida.com</span>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
