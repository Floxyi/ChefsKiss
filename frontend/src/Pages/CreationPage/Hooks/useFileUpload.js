import { useState } from 'react'
import axios from 'axios'

const useFileUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [previews, setPreviews] = useState([])
    const [uploadStatus, setUploadStatus] = useState('')

    const onFileChange = (event) => {
        const files = Array.from(event.target.files)
        const allFiles = selectedFiles.concat(files)
        setSelectedFiles(allFiles)

        const filePreviews = allFiles.map((file) => URL.createObjectURL(file))
        setPreviews(filePreviews)
    }

    const onFileUpload = async (recipeId) => {
        if (!recipeId) {
            console.error('Recipe ID is missing.')
            return
        }

        const formData = new FormData()
        selectedFiles.forEach((file) => {
            formData.append('files', file)
        })
        formData.append('recipeId', recipeId)

        try {
            await axios.post('/api/creation/upload', formData)
            setUploadStatus('Files uploaded successfully.')
            setSelectedFiles([])
            setPreviews([])
        } catch (error) {
            setUploadStatus('File upload failed: ' + error.message)
        }
    }

    return {
        fileAmount: selectedFiles.length,
        previews,
        uploadStatus,
        onFileChange,
        onFileUpload
    }
}

export default useFileUpload
