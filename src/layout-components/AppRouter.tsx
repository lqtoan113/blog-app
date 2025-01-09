import React from "react"
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
import CreatePostPage from "../pages/CreatePostPage";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePostPage />} />
            <Route path="/category" element={<CategoriesPage />} />
        </Routes>
    );
};
export default AppRouter;