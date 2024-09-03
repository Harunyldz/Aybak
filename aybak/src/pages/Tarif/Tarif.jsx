import "./Tarif.css";
import { useParams } from "react-router-dom";
import { recipes } from "../../utils/Recipes";

import { transformString } from "../../utils/transformString";
import TarifAltMenu from "../../components/TarifAltMenu/TarifAltMenu";
import { useTranslation } from "react-i18next";

const Tarif = () => {
  const { yemekAdi } = useParams();
  const yemek = recipes.find(
    (recipe) => transformString(recipe.title) === yemekAdi //url deki türkçe karakterleri dönüştürmek için
  );

  if (!yemek) {
    return <div className="tarif-wrapper">Tarif bulunamadı</div>;
  }

  const { t } = useTranslation();
  const { t: tRecipes } = useTranslation("recipes");

  return (
    <div className="tarif-wrapper">
      <div className="tarif-container">
        <div className="tarif">
          <section className="tarif-ust">
            <figure>
              <img src={yemek.image} alt={t(yemek.title)} />
              <figcaption>
                <h2>{t(yemek.title)}</h2>
                <span>{t(yemek.type)}</span>
              </figcaption>
            </figure>
            <div>
              <h3>{t("malzemeler")}</h3>
              <ul>
                {yemek.ingredients.map((ingredient, index) => (
                  <li key={index}>{tRecipes(ingredient)}</li>
                ))}
              </ul>
            </div>
          </section>
          <section className="tarif-alt">
            <h3>{t("yapilisi")}</h3>
            <ul>
              {yemek.instructions.map((instruction, index) => (
                <li key={index}>{`${index + 1}. ${tRecipes(instruction)}`}</li>
              ))}
            </ul>
          </section>
        </div>
        <menu>
          <TarifAltMenu type={yemek.type} title={yemek.title} />
        </menu>
      </div>
    </div>
  );
};

export default Tarif;
