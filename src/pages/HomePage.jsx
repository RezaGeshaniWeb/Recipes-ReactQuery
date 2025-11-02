import { useState } from "react";
import { useRecipesQuery } from "../hooks/useRecipesQuery";
import RecipeCard from "../components/RecipeCard";

const LIMIT = 12;

export default function HomePage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useRecipesQuery(page, LIMIT);

  const recipes = data?.recipes ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / LIMIT);

  const disableNext = page >= totalPages;
  const disablePrev = page <= 1;

  // skeleton
  if (isLoading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
        {Array.from({ length: LIMIT }).map((_, i) => (
          <div
            key={i}
            className="h-64 rounded-xl bg-zinc-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 animate-[pulse_1.2s_ease_in_out_infinite]" />
          </div>
        ))}
      </div>
    );

  return (
    <section className="px-6 py-12">
      <h1 className="text-2xl font-bold text-zinc-800 mb-8 border-b border-zinc-200 pb-3">
        Discover Delicious Recipes
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={disablePrev}
          className="px-4 py-2 rounded-lg font-medium bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition disabled:opacity-40 disabled:pointer-events-none"
        >
          Previous
        </button>

        <span className="px-4 py-2 font-semibold text-brand">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={disableNext}
          className="px-4 py-2 rounded-lg font-medium bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition disabled:opacity-40 disabled:pointer-events-none"
        >
          Next
        </button>
      </div>
    </section>
  );
}
