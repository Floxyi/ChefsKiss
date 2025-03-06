import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

/**
 * Custom Hook to fetch similar recipes based on the current recipe's ID.
 * Uses React Query to manage data fetching, loading, and error states.
 *
 * @param {string} id - The ID of the current recipe.
 * @returns {Object} Contains similar recipes data, loading state, error state, and error information.
 */
const useSimilarRecipe = (id) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['recipe', id],
        queryFn: async () => {
            const { data } = await axios.get(`/api/similar/?id=${id}`)
            return data
        },
        enabled: !!id,
        onError: (err) => {
            console.error('Error fetching similar recipes:', err)
        },
        retry: false // Disable retries for this query
    })

    return { data, isLoading, isError, error }
}

export default useSimilarRecipe
