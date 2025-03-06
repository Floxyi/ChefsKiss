import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import DOMPurify from 'dompurify'

/**
 * Custom Hook to fetch and sanitize recipe instructions.
 * Fetches the recipe data by ID and sanitizes the instructions to prevent XSS attacks.
 *
 * @param {string} id - The ID of the recipe.
 * @returns {Object} Contains the recipe data, loading state, error state, and sanitized instructions.
 */
const useRecipeInstructions = (id) => {
    // Fetches recipe data by ID using React Query
    const {
        data: recipe,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['recipe', id],
        queryFn: async () => {
            const { data } = await axios.get(`/api/instructions/?id=${id}`)
            return data
        },
        enabled: !!id,
        onError: (err) => {
            console.error('Error fetching recipe:', err)
        },
        retry: false
    })

    // Sanitize recipe instructions to prevent XSS by replacing line breaks with <br /> tags
    const sanitizedInstructions =
        !isLoading && recipe && recipe.instructions
            ? DOMPurify.sanitize(recipe.instructions.replace(/\n/g, '<br />'))
            : ''

    return { recipe, isLoading, isError, error, sanitizedInstructions }
}

export default useRecipeInstructions
