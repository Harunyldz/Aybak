import "./Tarif.css";
import { useParams } from "react-router-dom";
import { recipes } from "../../utils/Recipes";

const Tarif = () => {
  const { yemekAdi } = useParams();
  const yemek = recipes.find(
    (recipe) =>
      recipe.title
        .toLowerCase()
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/\s+/g, "-") === yemekAdi //url deki türkçe karakterleri dönüştürmek için
  );

  if (!yemek) {
    return <div className="tarif-wrapper">Tarif bulunamadı</div>;
  }

  return (
    <div className="tarif-wrapper">
      <div className="tarif-container">
        <div className="tarif">
          <section className="tarif-ust">
            <figure>
              <img src={yemek.image} alt={yemek.title} />
              <figcaption>
                <h2>{yemek.title}</h2>
                <span>{yemek.type}</span>
              </figcaption>
            </figure>
            <div>
              <h3>Malzemeler</h3>
              <ul>
                {yemek.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </section>
          <section className="tarif-alt">
            <h3>Yapılışı</h3>
            <ul>
              {yemek.instructions.map((instruction, index) => (
                <li key={index}>{`${index + 1}. ${instruction}`}</li>
              ))}
            </ul>
          </section>
        </div>
        <aside>buraya diğer yemek tarifleri gelecek</aside>
      </div>
    </div>
  );
};

export default Tarif;
