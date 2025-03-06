import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

/**
 * Custom Hook to fetch categories from the API.
 * Uses React Query to handle data fetching and state management.
 *
 * @returns {Object} The response from React Query, including data, status, and error.
 */
const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await axios.get('/api/categories/overview')

            // If the response status is 204 (No Content), return an empty array
            if (response.status === 204) {
                return []
            }
            return response.data
        }
    })
}

export default useCategories
