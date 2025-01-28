import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { DifficultyValues } from '@Enums/Difficulty'
import { TimeValues } from '@Enums/Time'
import { updateQueryString } from '@Infrastructure/QueryHelper'

const useSearchRecipes = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const [recipes, setRecipes] = useState([])
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const categoryParam = searchParams.get('category')
    const timeParam = searchParams.get('time')
    const difficultyParam = searchParams.get('difficulty')

    const [selectedCategory, setSelectedCategory] = useState(
        categoryParam ?? 'All'
    )
    const [selectedTime, setSelectedTime] = useState(timeParam ?? 'All')
    const [selectedDifficulty, setSelectedDifficulty] = useState(
        difficultyParam ?? 'All'
    )

    useEffect(() => {
        setIsLoading(true)
        setError(null)

        const queryParams = new URLSearchParams()

        if (categoryParam) queryParams.set('category', categoryParam)
        if (timeParam) queryParams.set('time', timeParam)
        if (difficultyParam) queryParams.set('difficulty', difficultyParam)

        const apiUrl = `/api/search${queryParams.toString() ? `?${queryParams.toString()}` : ''}`

        axios
            .get(apiUrl)
            .then((response) => {
                setRecipes(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching the recipes:', error)
                setError('Failed to fetch recipes. Please try again later.')
                setIsLoading(false)
            })
    }, [categoryParam, timeParam, difficultyParam])

    useEffect(() => {
        axios
            .get('/api/search/categories')
            .then((response) => setCategories(response.data))
            .catch((error) => {
                console.error('Error fetching categories:', error)
            })
    }, [])

    const changeCategory = (category) => {
        setSelectedCategory(category)
        const newQuery = updateQueryString('category', category)
        navigate(newQuery ? `/search?${newQuery}` : '/search')
    }

    const changeTime = (time) => {
        setSelectedTime(time)
        const newQuery = updateQueryString('time', TimeValues[time] ?? 'All')
        navigate(newQuery ? `/search?${newQuery}` : '/search')
    }

    const changeDifficulty = (difficulty) => {
        setSelectedDifficulty(difficulty)
        const newQuery = updateQueryString(
            'difficulty',
            DifficultyValues[difficulty] ?? 'All'
        )
        navigate(newQuery ? `/search?${newQuery}` : '/search')
    }

    return {
        recipes,
        categories,
        isLoading,
        error,
        selectedCategory,
        selectedTime,
        selectedDifficulty,
        changeCategory,
        changeTime,
        changeDifficulty
    }
}

export default useSearchRecipes
