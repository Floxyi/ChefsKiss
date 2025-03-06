import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Difficulty, DifficultyValues } from '@Enums/Difficulty'
import { Time, TimeValues } from '@Enums/Time'
import { updateQueryString } from '@Infrastructure/QueryHelper'

const useSearchRecipes = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const categoryParam = searchParams.get('category') || 'All'
    const timeParam = searchParams.get('time') || Time.ALL.value
    const difficultyParam = searchParams.get('difficulty') || Difficulty.ALL.value
    const searchTextParam = searchParams.get('q') || ''

    const [selectedCategory, setSelectedCategory] = useState(categoryParam)
    const [selectedTimeValue, setSelectedTimeValue] = useState(Time[timeParam]?.value || Time.ALL.value)
    const [selectedDifficultyValue, setSelectedDifficultyValue] = useState(
        Difficulty[difficultyParam]?.value || Difficulty.ALL.value
    )
    const [searchText, setSearchText] = useState(searchTextParam)

    const {
        data: recipes,
        isLoading,
        error
    } = useQuery({
        queryKey: ['recipes', selectedCategory, selectedTimeValue, selectedDifficultyValue, searchText],
        queryFn: async () => {
            const queryParams = new URLSearchParams()

            if (selectedCategory !== 'All') queryParams.set('category', selectedCategory)
            if (selectedTimeValue !== Time.ALL.value) queryParams.set('time', selectedTimeValue)
            if (selectedDifficultyValue !== Difficulty.ALL.value) queryParams.set('difficulty', selectedDifficultyValue)
            if (searchText.trim() !== '') queryParams.set('q', searchText.trim())

            const { data } = await axios.get(`/api/search${queryParams.toString() ? `?${queryParams}` : ''}`)
            return data
        }
    })

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await axios.get('/api/categories/list')
            if (response.status === 204) {
                return []
            }
            return response.data
        }
    })

    const changeCategory = (category) => {
        setSelectedCategory(category)
        const newQuery = updateQueryString('category', category === 'All' ? null : category)
        navigate(newQuery ? `/search?${newQuery}` : '/search')
    }

    const changeTime = (time) => {
        const value = TimeValues[time] || Time.ALL.value
        setSelectedTimeValue(value)
        const newQuery = updateQueryString('time', value === Time.ALL.value ? null : value)
        navigate(newQuery ? `/search?${newQuery}` : '/search')
    }

    const changeDifficulty = (difficulty) => {
        const value = DifficultyValues[difficulty] || Difficulty.ALL.value
        setSelectedDifficultyValue(value)
        const newQuery = updateQueryString('difficulty', value === Difficulty.ALL.value ? null : value)
        navigate(newQuery ? `/search?${newQuery}` : '/search')
    }

    const changeSearchText = (text) => {
        setSearchText(text)
        const newQuery = updateQueryString('q', text.trim() === '' ? null : text.trim())
        console.log(newQuery)
        navigate(newQuery ? `/search?${newQuery}` : '/search')
    }

    return {
        recipes,
        categories,
        isLoading,
        error,
        selectedCategory,
        selectedTimeValue,
        selectedDifficultyValue,
        searchText,
        changeCategory,
        changeTime,
        changeDifficulty,
        changeSearchText
    }
}

export default useSearchRecipes
