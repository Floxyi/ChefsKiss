import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { DifficultyValues } from '@Enums/Difficulty'
import { TimeValues } from '@Enums/Time'

const useRecipeCreation = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [selectedTimeValue, setSelectedTimeValue] = useState(null)
    const [selectedDifficultyValue, setSelectedDifficultyValue] = useState(null)
    const [cookingInstructions, setCookingInstructions] = useState('')
    const [selectedCategories, setSelectedCategories] = useState([])
    const [isRecipeCreated, setIsRecipeCreated] = useState(false)

    const [selectedFiles, setSelectedFiles] = useState([])
    const [previews, setPreviews] = useState([])

    const changeTime = (time) => {
        setSelectedTimeValue(TimeValues[time] ?? null)
    }

    const changeDifficulty = (difficulty) => {
        setSelectedDifficultyValue(DifficultyValues[difficulty] ?? null)
    }

    const onFileChange = (event) => {
        const files = Array.from(event.target.files)
        const allFiles = selectedFiles.concat(files)
        setSelectedFiles(allFiles)
        setPreviews(allFiles.map((file) => URL.createObjectURL(file)))
    }

    const onFileUpload = async (recipeId) => {
        if (!recipeId) {
            console.error('Recipe ID is missing.')
            return
        }

        const formData = new FormData()
        selectedFiles.forEach((file) => formData.append('files', file))
        formData.append('recipeId', recipeId)

        try {
            await axios.post('/api/creation/upload', formData)
            setSelectedFiles([])
            setPreviews([])
        } catch (error) {}
    }

    const createRecipeMutation = useMutation({
        mutationFn: async () => {
            const recipe = {
                title: name,
                difficulty: selectedDifficultyValue,
                time: selectedTimeValue,
                categoryIds: selectedCategories.map((category) => category.id),
                instructions: cookingInstructions,
                images: selectedFiles
            }
            const response = await axios.post('/api/creation/create', recipe)
            await onFileUpload(response.data.id)
            return response.data
        },
        onSuccess: (data) => {
            setIsRecipeCreated(true)
            navigate(`/recipe/${data.id}`)
        },
        onError: (error) => {
            console.error('Error creating recipe:', error)
        }
    })

    const handleCreateClick = async () => {
        if (!isRecipeCreated) {
            await createRecipeMutation.mutateAsync()
        }
    }

    const isValid = () => {
        return (
            name &&
            selectedTimeValue &&
            selectedDifficultyValue &&
            cookingInstructions &&
            selectedCategories.length > 0 &&
            selectedFiles.length > 0
        )
    }

    return {
        name,
        setName,
        selectedTimeValue,
        setSelectedTimeValue: changeTime,
        selectedDifficultyValue,
        setSelectedDifficultyValue: changeDifficulty,
        cookingInstructions,
        setCookingInstructions,
        selectedCategories,
        setSelectedCategories,
        isValid,
        handleCreateClick,
        previews,
        onFileChange
    }
}

export default useRecipeCreation
