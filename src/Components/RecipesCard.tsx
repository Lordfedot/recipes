import { Recipe } from "../Helpers/Interfaces";
import { setFavoriteRecepies, setSavedRecepies } from "../Helpers/api";
import "./../Card.css";

type Props = {
  recipe: Recipe | null;
};
const RecipeCard = ({ recipe }: Props) => {
  if (!recipe) {
    return <></>;
  }
  const {
    _id,
    thumb,
    title,
    description,
    ingredients,
    instructions,
    time,
  } = recipe;
  return (
    <li className="Card_wrapper">
      <h1>{title}</h1>
      <div>
        <img width={150} height={150} src={thumb} alt={title} />
        <button
          type="button"
          onClick={() => setFavoriteRecepies(_id, { favorite: true })}
        >
          Add to Favorite
        </button>
        <button
          type="button"
          onClick={() => setSavedRecepies(_id, { saved: true })}
        >
          Save
        </button>
      </div>
      <p>{description}</p>
      <p>Cooking time: {time}</p>
      <ul className="Ingredient_list">
        {ingredients.map((ingredient) => (
          <li key={ingredient.id} className="Ingredient_wrapper">
            <img
              width={50}
              height={50}
              src={ingredient.name?.thb}
              alt={ingredient.name?.ttl}
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
