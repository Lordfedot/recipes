import RecipesList from "./RecepiesList";
import { useEffect, useState } from "react";
import { getRecipes } from "../Helpers/api";
import { Recipe } from "../Helpers/Interfaces";
const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>([]);
  useEffect(() => {
    (async () => {
      const {response} = await getRecipes();
      setRecipes(response)
    })();
  }, []);
  
  return (
    <>
      <RecipesList recipes={recipes} />
    </>
  );
};

export default Home;
