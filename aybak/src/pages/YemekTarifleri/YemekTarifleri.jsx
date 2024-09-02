import "./YemekTarifleri.css";
import { recipes, categories } from "../../utils/Recipes";
import { useRef, useState } from "react";
import { transformString } from "../../utils/transformString";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation(); // Using the hook to access 't' and 'i18n'

  return (
    <div className="yemekler-wrapper">
      <div className="yemekler-img">
        <h1>{t("Yemek Tarifleri")}</h1>
      </div>
      <div className="yemekler-container">
        <header>
          <h2>{t("yemekTariflerih2")}</h2>
          <p>{t("yemekTariflerip")}</p>
        </header>
        <menu>
          {categories.map((cate) => (
            <figure
              className={category === cate.name ? "active" : ""}
              key={cate.id}
              onClick={() => handleCategoryClick(cate.name)}
            >
              <img src={cate.image} alt={cate.name} />
              <figcaption>{t(cate.name)}</figcaption>
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
                <h3>{t(yemek.title)}</h3>
                <Link
                  to={transformString(yemek.title)}
                  className="yemekler-btn"
                >
                  {t("nasilYapilir")}
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
