import axios from "axios";
axios.defaults.baseURL = "https://pet-support-6z4x.onrender.com";

export const getRecipes = async () => {
  try {
    const response = await axios("/recipe");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};