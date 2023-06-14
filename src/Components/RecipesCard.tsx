import { Recipe } from "../Helpers/Interfaces";
import "./../Card.css";

type Props = {
  recipe: Recipe | null;
};
const RecipeCard = ({ recipe }: Props) => {
  if (!recipe) {
    return <></>;
  }
  console.log(recipe);

  const { thumb, title, description, ingredients, instructions } = recipe;
  return (
    <li className="Card_wrapper">
      <h1>{title}</h1>
      <div>
        <img width={150} height={150} src={thumb} alt={title} />
        <button type="button">Add to Favorite</button>
        <button type="button">Save</button>
      </div>
      <p>{description}</p>
      <ul className="Ingredient_list">
        {ingredients.map((ingredient) => (
          <li className="Ingredient_wrapper">
            <img
              width={50}
              height={50}
              src={ingredient.name.thb}
              alt={ingredient.name.ttl}
            />
            <p>
              {ingredient.name.ttl} {ingredient.measure}
            </p>
          </li>
        ))}
      </ul>
      <p>{instructions}</p>
    </li>
  );
};

export default RecipeCard;