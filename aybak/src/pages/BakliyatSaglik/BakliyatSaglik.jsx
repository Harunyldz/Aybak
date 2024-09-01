import "./BakliyatSaglik.css";
import { productInfo } from "../../utils/Products";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { transformString } from "../../utils/transformString";
import { useTranslation } from "react-i18next";

const BakliyatSaglik = () => {
  const { t } = useTranslation();
  return (
    <div className="bakliyat-wrapper">
      <header className="bakliyat-header">
        <h1>{t("header")}</h1>
      </header>
      <section className="bakliyat-text">
        <h2>{t("importance_of_legumes")}</h2>
        <p>
          {t("legumes_description")}{" "}
          <br /><br />
          {t("legumes_description2")}
        </p>
      </section>
      <section className="bakliyat-container">
        {productInfo.map((product) => (
          <figure key={product.id}>
            <div className="bakliyat-img">
              <img src={product.image} alt={product.title} />
            </div>
            <figcaption>
              <h3>
                {t(product.title)}
                {/* {product.title} */}
              </h3>
              <Link to={transformString(product.title)} className="bakliyat-icon">
                <FaChevronCircleRight />
              </Link>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
};

export default BakliyatSaglik;
