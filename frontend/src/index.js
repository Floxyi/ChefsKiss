import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import HomePage from '@Pages/HomePage'
import CategoryPage from '@Pages/CategoriesPage'
import CreationPage from '@Pages/CreationPage'
import ImprintPage from '@Pages/ImprintPage'
import SearchPage from '@Pages/SearchPage'
import InstructionsPage from '@Pages/InstructionsPage'
import SimilarPage from '@Pages/SimilarPage'
import ContactPage from '@Pages/ContactPage'
import NotFoundPage from '@Pages/NotFoundPage'

import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/categories" element={<CategoryPage />} />
                    <Route path="/create" element={<CreationPage />} />
                    <Route path="/imprint" element={<ImprintPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/recipe/:id" element={<InstructionsPage />} />
                    <Route path="/recipe/:id/similar" element={<SimilarPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    </React.StrictMode>
)
