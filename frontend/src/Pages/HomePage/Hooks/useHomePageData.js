import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

/**
 * Custom Hook to fetch data for the home page.
 * Fetches categories and recipes from the API using React Query.
 *
 * @returns {Object} Contains data and loading/error states for categories and recipes.
 */
const useHomePageData = () => {
    // Fetches categories with a limit of 5 items
    const {
        data: categories,
        isLoading: categoriesLoading,
        error: categoriesError
    } = useQuery({
        queryKey: ['categories'],
        queryFn: () => axios.get('/api/homepage/categories?amount=5').then((response) => response.data)
    })

    // Fetches recipes with a limit of 4 items
    const {
        data: recipes,
        isLoading: recipesLoading,
        error: recipesError
    } = useQuery({
        queryKey: ['recipes'],
        queryFn: () => axios.get('/api/homepage/recipes?amount=4').then((response) => response.data)
    })

    return {
        categories,
        categoriesLoading,
        categoriesError,
        recipes,
        recipesLoading,
        recipesError
    }
}

export default useHomePageData
