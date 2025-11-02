import { useParams } from "react-router-dom";
import { useRecipeDetail } from "../hooks/useRecipesQuery";
import { motion } from "framer-motion";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const { data: recipe, isLoading, isError } = useRecipeDetail(id);

  if (isLoading) {
    return (
      <div className="px-6 py-12 animate-pulse max-w-5xl mx-auto">
        <div className="w-full h-72 bg-zinc-200 rounded-2xl mb-8" />
        <div className="h-6 w-1/3 bg-zinc-200 mb-3 rounded" />
        <div className="h-4 w-1/4 bg-zinc-200 rounded" />
      </div>
    );
  }

  if (isError || !recipe)
    return (
      <p className="text-center text-red-500 mt-20 font-medium">
        Error receiving information.
      </p>
    );

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-5xl mx-auto px-6 py-12"
    >
      <motion.img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-80 object-cover rounded-2xl shadow-soft mb-10"
        initial={{ opacity: 0.8, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <div className="mb-8 border-b border-zinc-200 pb-4">
        <h1 className="text-3xl font-bold text-zinc-900">{recipe.name}</h1>

        <div className="flex flex-wrap gap-4 text-zinc-600 mt-3">
          <span>⏱ {recipe.prepTimeMinutes} min</span>
          <span>⭐ {recipe.rating.toFixed(1)}</span>
          <span className="capitalize">{recipe.difficulty}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-brand mb-3">Raw materials</h2>
          <ul className="space-y-2 text-zinc-700">
            {recipe.ingredients.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 before:content-['•'] before:text-brand before:translate-y-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-brand mb-3">Preparation steps</h2>
          <ol className="list-decimal list-inside space-y-2 text-zinc-700">
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {recipe.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm font-medium bg-brand/10 text-brand px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
