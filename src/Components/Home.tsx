import RecipesList from "./RecepiesList";
import { useEffect, useState } from "react";
import { getRecipes } from "../Helpers/api";
import { Recipe } from "../Helpers/Interfaces";
import SearchBar from "./SearchBar";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [value, setValue] = useState("");
  const [option, setOption] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    (async () => {
      const { response } = await getRecipes();
      setRecipes(response);
      setFilteredRecipes(response)
    })();
  }, []);

  useEffect(() => {
    if (option === "title") {
      const filtered = recipes
        .filter((recipes) => recipes.title.includes(value))
        setFilteredRecipes(filtered)
    }
    if (option === "ingredients") {
      const filtered = recipes
        .filter((recipes) => recipes.description.includes(value))
        setFilteredRecipes(filtered)
    }
   
    
  }, [option, recipes, value]);

  return (
    <>
      <SearchBar getValue={setValue} getOption={setOption} />
      <RecipesList recipes={filteredRecipes} />
    </>
  );
};

export default Home;
