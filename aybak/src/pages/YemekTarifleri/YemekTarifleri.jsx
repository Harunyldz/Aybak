import "./YemekTarifleri.css";
import { recipes, categories } from "../../utils/Recipes";
import { useState } from "react";
import img1 from "../../assets/tarim5.jpg";

import { transformString } from "../../utils/transformString";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const YemekTarifleri = () => {
  const [category, setCategory] = useState("All");

  const handleCategoryClick = (cateName) => {
    if (category === cateName) {
      setCategory("All");
    } else {
      setCategory(cateName);
    }
  };

  const yemekler =
    category === "All"
      ? recipes
      : recipes.filter((item) => item.type === category);

  return (
    <div className="yemekler-wrapper">
      <img className="yemekler-img" src={img1} alt="" />
      <div className="yemekler-container">
        <header>
          <h2>Aybak Ürünlerimizle Yapabileceğiniz Lezzetli Yemekler</h2>
          <p>
            Aybak Gıda olarak, kaliteli ve besleyici ürünlerimizle sofralarınıza
            lezzet katıyoruz. Ürünlerimizle hazırlayabileceğiniz yemekler, hem
            sağlıklı hem de pratik tarifler sunarak günlük beslenmenizi
            zenginleştiriyor. İşte Aybak ürünleriyle yapabileceğiniz nefis yemek
            önerileri
          </p>
        </header>
        <menu>
          {categories.map((cate) => (
            <figure
              className={category === cate.name ? "active" : ""}
              key={cate.id}
              onClick={() => handleCategoryClick(cate.name)}
            >
              <img src={cate.image} alt="" />
              <figcaption>{cate.name}</figcaption>
            </figure>
          ))}
        </menu>
        <main>
          {yemekler.map((yemek) => (
            <motion.figure
              key={yemek.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div className="figure-img">
                <img src={yemek.image} alt={yemek.title} />
              </div>
              <figcaption>
                <h3>{yemek.title}</h3>
                <Link
                  to={transformString(yemek.title)}
                  className="yemekler-btn"
                >
                  Nasıl Yapılır?
                </Link>
              </figcaption>
            </motion.figure>
          ))}
        </main>
      </div>
    </div>
  );
};

export default YemekTarifleri;
