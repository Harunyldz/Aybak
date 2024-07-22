import "./Contact.css"
import { Link } from "react-router-dom";
import EmailForm from "../../components/EmailForm/EmailForm";
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



const Contact = () => {
  const phoneNumber = "905322505784"; // Ülke kodu ile birlikte telefon numarası
  const message = "Tuna iş güvenliği!";
  return (
    <div className="contact">
      <EmailForm />
      <div>
        <section className="footer-contact">
          <h3>İletişim</h3>
          <ul className="footer-contacts">
            <li>
              <i>
                <FaLocationDot />
              </i>
              <span >
                Aybak Gıda San. Tic. Ltd. Şti. <br /> Kocatepe mahallesi, Gümrük iskelesi caddesi Mega Canter A blok  <br />
                No:235-236-237-238 <br /> Bayrampaşa/İstanbul
              </span>
            </li>
            <li>
              <div>
                <i>
                  <FaPhone />
                </i>
                <span><a href="tel:+902126406181">
                  +90 (212) 640 61 81 - 82</a></span>
              </div>
              <div>
                <i>
                  <FaFax />
                </i>
                <span><a href="tel:+902125642098"> +90 (212) 564 20 98 </a></span>
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
      <div className="map-tn">
        <iframe style={{ width: '100%', height: '400px', borderRadius: '20px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.759172190239!2d28.887503374946416!3d41.052395316708896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab082ae9022e3%3A0x8d9b7e50d50a7435!2sAybak%20G%C4%B1da%20San.Tic.Ltd.%C5%9Eti!5e0!3m2!1str!2str!4v1721662476910!5m2!1str!2str"></iframe>
      </div>
    </div>
  )
}

export default Contact