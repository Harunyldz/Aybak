import "./TarifSagMenu.css";
import { recipes } from "../../utils/Recipes";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { transformString } from "../../utils/transformString";

const TarifSagMenu = ({ type, title }) => {
  const getRecipeType = recipes.filter((item) => item.type === type);
  const recipeType = getRecipeType.filter((item) => item.title !== title);
  return (
    <ul className="tarif-menu">
      {recipeType.map((recipe) => (
        <li>
          <img src={recipe.image} alt={recipe.title} />
          <Link
            to={`/yemektarifleri/${transformString(recipe.title)}`}
            className="tarif-menu-link"
          >
            <span>{recipe.title}</span>
            <i>
              <FaChevronCircleRight />
            </i>
          </Link>
        </li>
      ))}
      <Link to="/yemektarifleri" className="tarif-menu-btn">
        Tüm Tarifler
      </Link>
    </ul>
  );
};

export default TarifSagMenu;
