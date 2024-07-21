import "./Urunler.css";
import { products } from "../../utils/Products";
import { useState } from "react";

const Urunler = () => {
  const [selected, setSelected] = useState(products[0].name);
  const selectedProducts = products.find((item) => item.name === selected);

  console.log(selectedProducts)
  return (
    <div className="urunler-wrapper">
      <div className="urunler-container">
        <header>
          <h1>Ürünlerimiz</h1>
          <menu>
            <ul>
              {products.map((urun) => (
                <li onClick={()=>setSelected(urun.name)} key={urun.id}>{urun.name}</li>
              ))}
            </ul>
          </menu>
        </header>
        <main>
          <section>
            {selectedProducts.subProducts.map((selectedProduct) => (
              <figure key={selectedProduct.id}>
                <img src={selectedProduct.image} alt="" />
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
