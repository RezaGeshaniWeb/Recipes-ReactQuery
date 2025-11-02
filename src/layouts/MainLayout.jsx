import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-800">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-zinc-200 shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-2xl font-bold text-brand hover:text-brand-dark transition-colors"
          >
            🍳 Recipes
          </Link>

          <div className="flex items-center gap-6 text-[15px] font-medium">
            <Link
              to="/"
              className="hover:text-brand transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/categories/Dessert"
              className="hover:text-brand transition-colors duration-200"
            >
              Categories
            </Link>
            <Link
              to="/search"
              className="hover:text-brand transition-colors duration-200"
            >
              Search
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
        Developed by{" "}
        <a
          href="https://github.com/RezaGeshaniWeb"
          target="_blank"
          rel="noreferrer"
          className="text-brand hover:text-brand-dark transition-colors"
        >
          Reza Geshani
        </a>{" "}
        💙
      </footer>
    </div>
  );
}
