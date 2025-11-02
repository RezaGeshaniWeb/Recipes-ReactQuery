import { useParams } from "react-router-dom";
import { useCategoryRecipes } from "../hooks/useRecipesQuery";
import RecipeCard from "../components/RecipeCard";
import { motion } from "framer-motion";

export default function CategoryPage() {
  const { category } = useParams();
  const { data, isLoading, error } = useCategoryRecipes(category);

  const recipes = data ?? [];

  // skeleton
  if (isLoading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-64 rounded-xl bg-zinc-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 animate-[pulse_1.2s_ease_in_out_infinite]" />
          </div>
        ))}
      </div>
    );

  if (error)
    return (
      <p className="text-center mt-10 text-red-500 font-medium">
        {error.message}
      </p>
    );

  return (
    <section className="px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="text-2xl sm:text-3xl font-bold text-zinc-800 mb-8 border-b border-zinc-200 pb-3"
      >
        📂 {category}
      </motion.h1>

      {recipes.length === 0 ? (
        <p className="text-zinc-500 italic text-center mt-12">
          No recipes found for the{" "}
          <span className="text-brand font-medium">{category}</span> category.
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {recipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </motion.div>
      )}
    </section>
  );
}
