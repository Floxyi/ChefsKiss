import Dropdown from '@Components/Dropdown'
import PageContainer from '@Components/PageContainer'
import Title from '@Components/Title'
import { useState } from 'react'
import CategoryDropdown from '@Components/CategoryDropdown'
import FileUpload from '@Components/FileUpload'
import ArrowRightIcon from '@Icons/ArrowRightIcon'
import axios from 'axios'
import useFileUpload from './Hooks/useFileUpload'
import { useNavigate } from 'react-router-dom'

const CreationPage = () => {
    const [name, setName] = useState('')
    const [time, setTime] = useState('')
    const [cookingInstructions, setCookingInstruction] = useState('')
    const [isRecipeCreated, setIsRecipeCreated] = useState(false)
    const navigate = useNavigate()

    const { previews, uploadStatus, onFileChange, onFileUpload } =
        useFileUpload()

    const createRecipe = async () => {
        try {
            const recipe = {
                title: name,
                difficulty: 'MEDIUM',
                time: 'SHORT',
                //cookingInstructions: cookingInstructions,
                categories: []
            }

            const response = await axios.post('/api/recipe/create', recipe)
            onFileUpload(response.data.id)
            setIsRecipeCreated(true)
            navigate(`/recipe/${response.data.id}`)
        } catch (error) {
            console.error('Error creating recipe:', error)
        }
    }

    const handleCreateClick = async () => {
        if (!isRecipeCreated) {
            await createRecipe()
        }
    }

    return (
        <PageContainer>
            <div className="grid grid-cols-7 h-full w-full">
                <div className="h-full flex flex-col col-span-6">
                    <Title title="Create" margin />
                    <div className="flex flex-col flex-1">
                        <div>
                            <p className="text-xl text-primary-dark font-semibold">
                                Name:
                            </p>
                            <input
                                className="mt-2 w-full font-bold text-xl text-primary-dark bg-transparent border-[3px] border-primary-dark pl-4 rounded-full placeholder:font-normal placeholder:text-primary-normal focus:outline-none"
                                type="text"
                                value={name}
                                placeholder="Pumpkin Soup"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-2 place-items-start mt-6">
                            <Dropdown
                                label={'Cooking Time'}
                                options={['~30 min', '~60 min', '>60 min']}
                                value={time}
                                defaultValue={''}
                                onChange={(time) => setTime(time)}
                            />
                            <div className="col-span-2">
                                <CategoryDropdown />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-xl text-primary-dark font-semibold">
                                Upload Pictures:
                            </p>
                            <FileUpload
                                onFileChange={onFileChange}
                                previews={previews}
                                uploadStatus={uploadStatus}
                            />
                        </div>
                        <div className="mt-4 flex flex-col flex-1">
                            <p className="text-xl text-primary-dark font-semibold">
                                Cooking Instructions:
                            </p>
                            <div className="flex-1 mb-2">
                                <textarea
                                    className="w-full h-full resize-none font-bold rounded-2xl overflow-y-auto custom-scrollbar text-primary-dark bg-transparent border-[3px] border-primary-dark p-2 placeholder:font-normal placeholder:text-primary-normal focus:outline-none"
                                    value={cookingInstructions}
                                    onChange={(e) =>
                                        setCookingInstruction(e.target.value)
                                    }
                                    placeholder="Write down your cooking instructions here!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <div
                        className="w-fit h-fit flex flex-col items-center cursor-pointer"
                        onClick={handleCreateClick}
                    >
                        <div className="text-primary-dark flex w-12 h-12 rounded-full border-[3px] border-primary-dark justify-center items-center">
                            <ArrowRightIcon width={48} height={48} stroke={2} />
                        </div>
                        <p className="text-xl text-primary-dark font-semibold">
                            Create
                        </p>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default CreationPage
