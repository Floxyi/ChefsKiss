import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useSimilarRecipe = (id) => {
    const { data, isLoading, isError, error } = useQuery(
        ['recipe', id],
        async () => {
            const { data } = await axios.get(`/api/similar/?id=${id}`)
            return data
        },
        {
            enabled: !!id,
            onError: (err) => {
                console.error('Error fetching similar recipes:', err)
            }
        }
    )

    return { data, isLoading, isError, error }
}

export default useSimilarRecipe
