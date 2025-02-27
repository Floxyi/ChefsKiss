import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

import ThinPlusIcon from '@Icons/ThinPlusIcon'

const CategoryDropdown = ({ selectedCategories, setSelectedCategories }) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get('/api/search/categories')
            setCategories(data)
        } catch (err) {
            console.error('Error fetching categories:', err)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const toggleCategory = (categoryName) => {
        const updatedCategories = selectedCategories.includes(categoryName)
            ? selectedCategories.filter((cat) => cat !== categoryName)
            : [...selectedCategories, categoryName]

        setSelectedCategories(updatedCategories)
    }

    return (
        <div className="flex flex-row gap-2">
            <div ref={dropdownRef} className="relative inline-block text-left min-w-fit">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center px-2 py-1 border-[3px] border-primary-dark rounded-full font-bold text-center text-primary-dark select-none my-auto focus:outline-none"
                >
                    <div>Add category</div>
                    <ThinPlusIcon />
                </button>

                {isOpen && (
                    <div className="absolute top-12 py-1 max-h-96 overflow-y-auto custom-scrollbar w-max min-w-full bg-primary-light border-[3px] border-primary-dark rounded-[24px] shadow-lg">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className={`px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-normal ${
                                    selectedCategories.includes(category)
                                        ? 'text-primary-dark font-bold text-lg'
                                        : 'text-primary-dark'
                                }`}
                                onClick={() => {
                                    toggleCategory(category)
                                }}
                            >
                                {category.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex flex-row flex-wrap gap-2 select-none">
                {selectedCategories.map((category) => (
                    <div
                        key={category.id}
                        className={
                            'py-1 px-3 text-primary-dark border-[2px] border-primary-dark rounded-full cursor-pointer'
                        }
                        onClick={() => {
                            toggleCategory(category)
                        }}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryDropdown
