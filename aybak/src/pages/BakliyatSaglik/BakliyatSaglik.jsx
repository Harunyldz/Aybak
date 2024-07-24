import "./BakliyatSaglik.css"
import { productInfo } from "../../utils/Products";
import { FaChevronCircleRight } from "react-icons/fa";

const BakliyatSaglik = () => {
  return (
    <div className="bakliyat-wrapper">
      <header className="bakliyat-header">
        <h1>Bakliyat ve Sağlık</h1>
      </header>
      <section className="bakliyat-container">
        {productInfo.map((product) => (
          <figure key={product.id}>
            <div className="bakliyat-img">
              <img src={product.image} alt="" />
            </div>
            <figcaption>
              <h3>{product.title}</h3>
              <i>
                <FaChevronCircleRight />
              </i>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
};

export default BakliyatSaglik;
