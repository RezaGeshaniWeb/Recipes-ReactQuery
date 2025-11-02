import { useState } from "react";
import { useRecipeSearch } from "../hooks/useRecipesQuery";
import { useDebounce } from "../hooks/useDebounce";
import RecipeCard from "../components/RecipeCard";
import { motion } from "framer-motion";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const { data, isFetching } = useRecipeSearch(debouncedQuery);

  const recipes = data ?? [];
  const noResult = !isFetching && debouncedQuery && recipes.length === 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="px-6 py-12"
    >
      {/* field */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4 border-b border-zinc-200 pb-3">
          🔍 Search Recipes
        </h1>

        <div className="relative">
          <input
            type="text"
            value={query}
            placeholder="Example : pasta or chicken ..."
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-zinc-700
                       focus:outline-none focus:ring-2 focus:ring-brand transition shadow-sm"
          />
          {isFetching && (
            <span className="absolute right-3 top-2.5 text-zinc-400 text-sm">
              Searching…
            </span>
          )}
        </div>
      </div>

      {/* Results */}
      {noResult ? (
        <p className="text-center text-zinc-500 italic mt-12">
          No results found for &nbsp;
          <span className="text-brand font-medium">{debouncedQuery}</span>
          &nbsp; 😔
        </p>
      ) : (
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {recipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </motion.ul>
      )}
    </motion.section>
  );
}
