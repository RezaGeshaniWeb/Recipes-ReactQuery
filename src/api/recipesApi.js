const BASE_URL = "https://dummyjson.com/recipes";

export const getAllRecipes = async (page = 1, limit = 12) => {
  const skip = (page - 1) * limit;
  const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  if (!res.ok) throw new Error("Failed to fetch recipes");
  const data = await res.json();
  return {
    recipes: data.recipes,
    total: data.total,
  };
};

export const getRecipeById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Recipe not found");
  return res.json();
};

export const getRecipesBySearch = async (query) => {
  const res = await fetch(`${BASE_URL}/search?q=${query}`);
  if (!res.ok) throw new Error("Failed to search recipes");
  const data = await res.json();
  return data.recipes;
};

export const getRecipesByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/meal-type/${category}`);
  if (!res.ok) throw new Error("Failed to fetch meal recipes");
  const data = await res.json();
  return data.recipes;
};
