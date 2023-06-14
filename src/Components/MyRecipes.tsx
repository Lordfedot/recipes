import { useEffect, useState } from "react";
import { Recipe } from "../Helpers/Interfaces";
import { getFavoriteRecepies, getSavedRecepies } from "../Helpers/api";
import "./../Card.css";

const MyRecipes = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    (async () => {
      const responseSaved = await getSavedRecepies();
      const responseFavorite = await getFavoriteRecepies();

      setFavoriteRecipes(responseFavorite.response);
      setSavedRecipes(responseSaved.response);
    })();
  }, []);

  console.log(favoriteRecipes);
  console.log(savedRecipes);
  return (
    <div className="MyRecipes_Wrapper">
      <div>
        <p>Favorites: </p>
        <ul className="MyRecipes_Coloumn">
        {favoriteRecipes.map(
            ({ title, thumb, description, time, instructions }) => (
              <li>
                <h1>{title}</h1>

                <img width={150} height={150} src={thumb} alt={title} />

                <p>{description}</p>
                <p>Cooking time: {time}</p>

                <p>{instructions}</p>
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <p>Saved: </p>
        <ul className="MyRecipes_Coloumn">
          {savedRecipes.map(
            ({ title, thumb, description, time, instructions }) => (
              <li>
                <h1>{title}</h1>

                <img width={150} height={150} src={thumb} alt={title} />

                <p>{description}</p>
                <p>Cooking time: {time}</p>

                <p>{instructions}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyRecipes;
