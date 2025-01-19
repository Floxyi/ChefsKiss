import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '@Pages/HomePage/HomePage'
import CategoryPage from '@Pages/CategoriesPage/CategoryPage'
import CreationPage from '@Pages/CreationPage/CreationPage'
import ImprintPage from '@Pages/ImprintPage/ImprintPage'
import SearchPage from '@Pages/SearchPage/SearchPage'
import InstructionsPage from '@Pages/RecipePages/InstructionsPage/InstructionsPage'
import CommentsPage from '@Pages/RecipePages/CommentsPage/CommentsPage'
import RatingPage from '@Pages/RecipePages/RatingPage/RatingPage'
import SimilarPage from '@Pages/RecipePages/SimilarPage/SimilarPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/categories" element={<CategoryPage />} />
                <Route path="/create" element={<CreationPage />} />
                <Route path="/imprint" element={<ImprintPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/recipe/:id" element={<InstructionsPage />} />
                <Route path="/recipe/:id/comments" element={<CommentsPage />} />
                <Route path="/recipe/:id/rating" element={<RatingPage />} />
                <Route path="/recipe/:id/similar" element={<SimilarPage />} />
            </Routes>
        </Router>
    </React.StrictMode>,
)
