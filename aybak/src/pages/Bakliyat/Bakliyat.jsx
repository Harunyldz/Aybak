import { Link, useParams } from "react-router-dom";
import "./Bakliyat.css";
import { productInfo } from "../../utils/Products";
import { transformString } from "../../utils/transformString";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

const Bakliyat = () => {

  const { t } = useTranslation();

  const { bakliyatAdi } = useParams();
  const bakliyat = productInfo.find(
    (item) => transformString(item.title) === bakliyatAdi
  );

  return (
    <div className="bakliyat">
      <div className="bakliyat-ust">
        <h1>
          {t(bakliyat.title)}
          {/* {bakliyat.title} */}
        </h1>
      </div>
      <div className="bakliyat-bilgi-container">
        <main className="bakliyat-bilgi">
          <motion.div
            key={bakliyat.id + "key"}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="bakliyat-bilgi-img"
          >
            <img src={bakliyat.image} alt={bakliyat.title} />
          </motion.div>
          <motion.section
            key={bakliyat.id}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="bakliyat-detay"
          >
            <ul>
              <h3>{bakliyat.text}</h3>
              {bakliyat.details.map((bakliyatDetail, index) => (
                <li key={index}>{bakliyatDetail}</li>
              ))}
              <h4>
                Aybak ürünlerini görmek için{" "}
                <Link to="/urunlerimiz" className="bakliyat-span">
                  Tıklayınız.
                </Link>
              </h4>
            </ul>
          </motion.section>
        </main>
      </div>
      <section className="bakliyat-links">
        {productInfo.map((product) => (
          <NavLink
            key={product.id}
            to={`/bakliyat-saglik/${transformString(product.title)}`}
            className={({ isActive }) =>
              isActive ? "bakliyat-link active" : "bakliyat-link"
            }
          >

            {/* {product.title} */}
            {t(product.title)}
          </NavLink>
        ))}
      </section>
    </div>
  );
};

export default Bakliyat;
