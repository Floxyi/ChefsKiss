import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Difficulty, DifficultyValues } from '@Enums/Difficulty'
import { Time, TimeValues } from '@Enums/Time'
import { updateQueryString } from '@Infrastructure/QueryHelper'

const useSearchRecipes = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const [recipes, setRecipes] = useState([])
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const categoryParam = searchParams.get('category') || 'All'
    const timeParam = searchParams.get('time') || Time.ALL.value
    const difficultyParam = searchParams.get('difficulty') || Difficulty.ALL.value

    const [selectedCategory, setSelectedCategory] = useState(categoryParam)
    const [selectedTimeValue, setSelectedTimeValue] = useState(Time[timeParam]?.value || Time.ALL.value)
    const [selectedDifficultyValue, setSelectedDifficultyValue] = useState(
        Difficulty[difficultyParam]?.value || Difficulty.ALL.value
    )

    const fetchRecipes = useCallback(async () => {
        setIsLoading(true)
        setError(null)

        const queryParams = new URLSearchParams()

        if (selectedCategory !== 'All') queryParams.set('category', selectedCategory)
        if (selectedTimeValue !== Time.ALL.value) queryParams.set('time', selectedTimeValue)
        if (selectedDifficultyValue !== Difficulty.ALL.value) queryParams.set('difficulty', selectedDifficultyValue)

        try {
            const { data } = await axios.get(`/api/search${queryParams.toString() ? `?${queryParams}` : ''}`)
            setRecipes(data)
        } catch (err) {
            setError('Failed to fetch recipes. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }, [selectedCategory, selectedTimeValue, selectedDifficultyValue])

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get('/api/search/categories')
            setCategories(data)
        } catch (err) {
            console.error('Error fetching categories:', err)
        }
    }

    useEffect(() => {
        fetchRecipes()
    }, [selectedCategory, selectedTimeValue, selectedDifficultyValue, fetchRecipes])

    useEffect(() => {
        fetchCategories()
    }, [])

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

    return {
        recipes,
        categories,
        isLoading,
        error,
        selectedCategory,
        selectedTimeValue,
        selectedDifficultyValue,
        changeCategory,
        changeTime,
        changeDifficulty
    }
}

export default useSearchRecipes
