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
export const getFavoriteRecepies = async () => {
  try {
    const response = await axios("recipe/favorite");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const setFavoriteRecepies = async (
  id: string,
  body: { favorite: boolean }
) => {
  try {
    const response = await axios.patch(`recipe/${id}/favorite`, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSavedRecepies = async () => {
  try {
    const response = await axios("recipe/saved");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const setSavedRecepies = async (
  id: string,
  body: { saved: boolean }
) => {
  try {
    const response = await axios.patch(`recipe/${id}/saved`, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
