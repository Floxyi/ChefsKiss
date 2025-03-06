import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await axios.get('/api/categories/')
            if (response.status === 204) {
                return []
            }
            return response.data
        }
    })
}

export default useCategories
