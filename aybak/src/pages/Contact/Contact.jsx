import "./Contact.css";
import WhatsAppLink from "../../components/Footer/WhatsAppLink";
import EmailForm from "../../components/EmailForm/EmailForm";
import { FaPhone, FaFax } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const phoneNumber = "902125459252"; // Ülke kodu ile birlikte telefon numarası
  const message = "";

  return (
    <div className="contact">
      <section className="contact-info">
        <section>
          <EmailForm />
        </section>
        <section className="contact-address">
          <h2>Merkez İletişim</h2>
          <ul className="address-list">
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
              <i>
                <FaPhone />
              </i>
              <span>
                <a href="tel:+902126406181">+90 (212) 640 61 81 - 82</a>
              </span>
            </li>
            <li>
              <i>
                <FaFax />
              </i>
              <span>
                <a href="tel:+902125642098"> +90 (212) 564 20 98 </a>
              </span>
            </li>
            <li className="whatsapp">
              <i>
                <WhatsAppLink phoneNumber={phoneNumber} message={message} />
              </i>
            </li>
            <li>
              <a href="mailto:info@aybakgida.com">
                <i>
                  <MdEmail />
                </i>
                info@aybakgida.com
              </a>
            </li>
            <li>
              <a href="mailto:uguryilmaz@aybakgida.com">
                <i>
                  <MdEmail />
                </i>
                uguryilmaz@aybakgida.com
              </a>
            </li>
            <li>
              <h2>Fabrika İletişim</h2>
            </li>
            <li>
              <i>
                <FaLocationDot />
              </i>
              <span>
                Aybak Gıda San. Tic. Ltd. Şti. B.Doğanca Mah. Artezyen Cad.
                No:132 MERİÇ / EDİRNE <br />
              </span>
            </li>
            <li>
              <i>
                <FaPhone />
              </i>
              <span>+90 (284) 415 11 74 pbx</span>
            </li>
            <li>
              <i>
                <FaFax />
              </i>
              <span> +90 (284) 415 11 69 </span>
            </li>
          </ul>
        </section>
      </section>

      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.759172190239!2d28.887503374946416!3d41.052395316708896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab082ae9022e3%3A0x8d9b7e50d50a7435!2sAybak%20G%C4%B1da%20San.Tic.Ltd.%C5%9Eti!5e0!3m2!1str!2str!4v1721662476910!5m2!1str!2str"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
