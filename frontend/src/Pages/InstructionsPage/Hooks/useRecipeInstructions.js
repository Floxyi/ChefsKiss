import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import DOMPurify from 'dompurify'

const useRecipeInstructions = (id) => {
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

    const sanitizedInstructions =
        !isLoading && recipe && recipe.instructions
            ? DOMPurify.sanitize(recipe.instructions.replace(/\n/g, '<br />'))
            : ''

    return { recipe, isLoading, isError, error, sanitizedInstructions }
}

export default useRecipeInstructions
