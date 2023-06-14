import RecipesList from "./RecepiesList";
import { useEffect, useState } from "react";
import { getRecipes } from "../Helpers/api";
import { Recipe } from "../Helpers/Interfaces";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [SearchedRecipes, setSearchedRecipes] = useState<Recipe[]>([]);

  const [value, setValue] = useState("");
  const [option, setOption] = useState("title");
  const [filter, setFilter] = useState<string | null>("");
  const [time, setTime] = useState<string | null>(null);
  console.log(SearchedRecipes);
  
  useEffect(() => {
    (async () => {
      const { response } = await getRecipes();
      setRecipes(response);
      setSearchedRecipes(response);
    })();
  }, []);

  useEffect(() => {
    if (option === "title") {
      const filtered = recipes
        .filter((recipes) => recipes.title.includes(value))
        .filter((recipes) => {
          if (filter) {
            return recipes.category === filter;
          }
          return recipes;
        })
        .filter((recipes) => {
          if (time) {
            return parseInt(recipes.time) <= parseInt(time);
          }
          return recipes;
        });
      setSearchedRecipes(filtered);
    }
    if (option === "ingredients") {
      const filtered = recipes
        .filter((recipes) => recipes.description.includes(value))
        .filter((recipes) => {
          if (filter) {
            return recipes.category === filter;
          }
          return recipes;
        })
        .filter((recipes) => {
          if (time) {
            return recipes.time <= time;
          }
          return recipes;
        });
      setSearchedRecipes(filtered);
    }
  }, [filter, option, recipes, time, value]);

  return (
    <>
      <SearchBar getValue={setValue} getOption={setOption} />
      <Filter getFilter={setFilter} getTime={setTime} />
      <RecipesList recipes={SearchedRecipes} />
    </>
  );
};

export default Home;
