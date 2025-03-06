import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useHomePageData = () => {
    const {
        data: categories,
        isLoading: categoriesLoading,
        error: categoriesError
    } = useQuery({
        queryKey: ['categories'],
        queryFn: () => axios.get('/api/homepage/categories?amount=5').then((response) => response.data)
    })

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
