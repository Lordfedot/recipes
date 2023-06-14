import axios from "axios";

export const getRecipes = async () => {
  try {
    const response = await axios("https://pet-support-6z4x.onrender.com/recipe");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getFavoriteRecepies = async () => {
  try {
    const response = await axios("https://pet-support-6z4x.onrender.com/recipe/favorite");
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
    const response = await axios.patch(`https://pet-support-6z4x.onrender.com/recipe/${id}/favorite`, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSavedRecepies = async () => {
  try {
    const response = await axios("https://pet-support-6z4x.onrender.com/recipe/saved");
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
    const response = await axios.patch(`https://pet-support-6z4x.onrender.com/recipe/${id}/saved`, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
