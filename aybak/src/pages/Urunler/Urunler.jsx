import "./Urunler.css";
import { products } from "../../utils/Products";

const Urunler = () => {
  return (
    <div className="urunler-wrapper">
      <div className="urunler-container">
        <header>
          <h1>Ürünlerimiz</h1>
          <menu>
            <ul>
              {products.map((urun) => (
                <li key={urun.id}>{urun.name}</li>
              ))}
            </ul>
          </menu>
        </header>
      </div>
    </div>
  );
};

export default Urunler;
