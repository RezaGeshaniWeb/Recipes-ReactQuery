import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-[8rem] leading-none font-black text-brand select-none mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-zinc-600 mb-10 max-w-lg"
      >
        The page you were looking for does not exist or has been moved.
      </motion.p>

      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-brand text-zinc-400 font-medium shadow-soft 
                   hover:bg-brand/90 hover:shadow-card transition-all duration-300 underline underline-offset-4"
      >
        Back to HOME Page
      </Link>
    </motion.section>
  );
}
