import { useQueryClient } from "@tanstack/react-query";
import { getRecipeById } from "../api/recipesApi";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const queryClient = useQueryClient();

  const prefetchRecipe = () => {
    queryClient.prefetchQuery({
      queryKey: ["recipe-detail", recipe.id],
      queryFn: () => getRecipeById(recipe.id),
      staleTime: 1000 * 60 * 2,
    });
  };

  return (
    <div
      onMouseEnter={prefetchRecipe}
      className="group rounded-xl bg-white shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer"
    >
      <Link to={`/recipes/${recipe.id}`} className="block p-4">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />

        <h3 className="text-lg font-semibold text-zinc-800 group-hover:text-brand transition-colors">
          {recipe.name}
        </h3>

        <p className="text-sm text-zinc-500 mt-1">
          ⏱ {recipe.prepTimeMinutes} min &nbsp;⭐ {recipe.rating.toFixed(1)}
        </p>
      </Link>
    </div>
  );
}
