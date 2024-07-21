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
        <iframe style={{ width: '100%', height: '400px', borderRadius: '20px' }} src="https://www.google.com/maps/d/u/6/embed?mid=1HvMPDb2MjqMppAGpD0ccpFCZcg-h6-I&ehbc=2E312F" className='map'></iframe>
      </div>
    </div>
  )
}

export default Contact