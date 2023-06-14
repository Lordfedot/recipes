import { Recipe } from "../Helpers/Interfaces";
import RecipeCard from "./RecipesCard";
import "./../Card.css";
type Props = {
  recipes: Recipe[] | null;
};

const RecipesList = ({ recipes }: Props) => {

  if (!recipes) {
    return <></>;
  }
  return (
    <ul className="Card_list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe}/>
      ))}
    </ul>
  );
};

export default RecipesList;
