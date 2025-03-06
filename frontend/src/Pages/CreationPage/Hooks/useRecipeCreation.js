import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { DifficultyValues } from '@Enums/Difficulty'
import { TimeValues } from '@Enums/Time'

/**
 * Custom Hook for handling recipe creation logic.
 * Manages form state, file uploads, and API calls for creating a recipe.
 *
 * @returns {Object} Contains state variables, handlers, and mutation logic for creating a recipe.
 */
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
    const [errorMessage, setErrorMessage] = useState(null)

    /**
     * Updates the selected time value based on user input.
     *
     * @param {string} time - The selected time value.
     */
    const changeTime = (time) => {
        setSelectedTimeValue(TimeValues[time] ?? null)
    }

    /**
     * Updates the selected difficulty value based on user input.
     *
     * @param {string} difficulty - The selected difficulty value.
     */
    const changeDifficulty = (difficulty) => {
        setSelectedDifficultyValue(DifficultyValues[difficulty] ?? null)
    }

    /**
     * Handles file selection and updates the list of selected files and their previews.
     *
     * @param {Event} event - The file input change event.
     */
    const onFileChange = (event) => {
        const files = Array.from(event.target.files)
        const allFiles = selectedFiles.concat(files)
        setSelectedFiles(allFiles)
        setPreviews(allFiles.map((file) => URL.createObjectURL(file)))
    }

    /**
     * Uploads selected files to the server after the recipe is created.
     *
     * @param {string} recipeId - The ID of the created recipe.
     */
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
        } catch (error) {
            setErrorMessage('Error uploading files. Please try again.')
            console.error('File upload failed:', error)
        }
    }

    /**
     * Mutation function to create a new recipe.
     * Sends the recipe data to the API and handles file uploads if successful.
     */
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
            if (response.status === 201) {
                await onFileUpload(response.data.id)
            } else {
                throw new Error('Failed to create recipe')
            }
            return response.data
        },
        onSuccess: (data) => {
            setIsRecipeCreated(true)
            navigate(`/recipe/${data.id}`)
        },
        onError: (error) => {
            if (error.response) {
                if (error.response.status === 400) {
                    setErrorMessage(`Error: ${error.response.data || 'Invalid request'}`)
                } else if (error.response.status === 500) {
                    setErrorMessage(`Error: ${error.response.data || 'Internal server error'}`)
                } else {
                    setErrorMessage('An unexpected error occurred')
                }
            } else {
                setErrorMessage('Network error: Unable to connect to the server')
            }
            console.error('Error creating recipe:', error)
        }
    })

    /**
     * Trigger recipe creation mutation on form submission.
     */
    const handleCreateClick = async () => {
        if (!isRecipeCreated) {
            await createRecipeMutation.mutateAsync()
        }
    }

    /**
     * Validates the form to ensure all required fields are filled.
     *
     * @returns {boolean} Whether the form is valid.
     */
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
        onFileChange,
        errorMessage
    }
}

export default useRecipeCreation
