import { useQuery } from "@tanstack/react-query";
import {
  getAllRecipes,
  getRecipeById,
  getRecipesBySearch,
  getRecipesByCategory,
} from "../api/recipesApi";

/* get all list */
export const useRecipes = () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });
};

/* food detail */
export const useRecipe = (id) => {
  return useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipeById(id),
    enabled: !!id,
  });
};

/* search based on character */
export const useRecipeSearch = (query) => {
  return useQuery({
    queryKey: ["recipes-search", query],
    queryFn: () => getRecipesBySearch(query),
    enabled: !!query,
    staleTime: 1000 * 60,
  });
};

/* category */
export const useCategoryRecipes = (category) => {
  return useQuery({
    queryKey: ["recipes", "tag", category],
    queryFn: () => getRecipesByCategory(category),
    enabled: !!category,
  });
};

export const useRecipeDetail = (id) => {
  return useQuery({
    queryKey: ["recipe-detail", id],
    queryFn: () => getRecipeById(id),
    enabled: !!id,
  });
};

export const useRecipesQuery = (page = 1, limit = 12) => {
  return useQuery({
    queryKey: ["recipes", page, limit],
    queryFn: () => getAllRecipes(page, limit),
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });
};
