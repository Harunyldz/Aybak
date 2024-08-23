import "./YemekTarifleri.css";
import { recipes, categories } from "../../utils/Recipes";
import { useRef, useState } from "react";
import { transformString } from "../../utils/transformString";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const YemekTarifleri = () => {
  const [category, setCategory] = useState("All");
  const mainRef = useRef(null);

  const handleCategoryClick = (cateName) => {
    const isSameCategory = category === cateName;
    
    if (isSameCategory) {
      setCategory("All");
    } else {
      setCategory(cateName);
    }

    if (!isSameCategory && mainRef.current) {
      window.scrollTo({
        top: mainRef.current.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  const yemekler =
    category === "All"
      ? recipes
      : recipes.filter((item) => item.type === category);

  return (
    <div className="yemekler-wrapper">
      <div className="yemekler-img">
        <h1>Yemek Tarifleri</h1>
      </div>
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
              <img src={cate.image} alt={cate.name} />
              <figcaption>{cate.name}</figcaption>
            </figure>
          ))}
        </menu>
        <main ref={mainRef}>
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
