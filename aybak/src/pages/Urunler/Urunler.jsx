import "./Urunler.css";
import { products } from "../../utils/Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { transformString } from "../../utils/transformString";

const Urunler = () => {
  const { urunAdi } = useParams(); //url deki ürün adını aldık
  const urlProduct = products.find(
    (item) => transformString(item.name) === urunAdi //url den gelen ada sahip product dizisindeki elemanı seçtik
  );

  const [selected, setSelected] = useState(
    urlProduct ? urlProduct.name : products[0].name //navbardan tıklanmışsa navbardaki ürünün ürünlerini ,tıklanmamışsa product dizisinin ilk elemanının ürünlerini gösterecek main içinde
  );

  const selectedProducts = products.find((item) => item.name === selected);

  useEffect(() => {
    //navbardan başka bir ürün seçilirse main içinde gösterilecek ürünler değişsin diye
    if (urlProduct) {
      setSelected(urlProduct.name);
    }
  }, [urlProduct]);
  return (
    <div className="urunler-wrapper">
      <header>
        <div className="header-container">
          <h1>Ürünlerimiz</h1>
          <menu>
            <ul>
              {products.map((urun) => (
                <li
                  key={urun.id}
                  onClick={() => setSelected(urun.name)}
                  className={urun.name === selected ? "selected" : ""}
                >
                  {urun.name}
                </li>
              ))}
            </ul>
          </menu>
        </div>
      </header>
      <div className="urunler-container">
        <main>
          <section>
            {selectedProducts.subProducts.map((selectedProduct) => (
              <figure key={selectedProduct.id}>
                <div className="figure-img">
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
                <figcaption>{selectedProduct.name}</figcaption>
              </figure>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Urunler;
