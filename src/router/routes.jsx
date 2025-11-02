import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import RecipeDetailPage from "../pages/RecipeDetailPage.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/recipes/:id", element: <RecipeDetailPage /> },
            { path: "/categories/:category", element: <CategoryPage /> },
            { path: "/search", element: <SearchPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);

export default router;
