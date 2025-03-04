import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@Icons/SearchIcon'
import XIcon from '@Icons/XIcon'

const Search = ({ searchText, changeSearchText }) => {
    const navigate = useNavigate()
    const [value, setValue] = useState(searchText)

    const handleSearch = () => {
        if (changeSearchText) {
            changeSearchText(value)
        }
        navigate(`/search${value ? `?q=${encodeURIComponent(value)}` : ''}`)
    }

    const handleClear = () => {
        setValue('')
        changeSearchText('')
        navigate(`/search`)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className="h-12 w-[600px] border-[3px] border-primary-dark rounded-3xl bg-transparent px-4 py-2 flex flex-row items-center">
            <input
                className="w-full font-bold text-xl text-primary-dark bg-transparent placeholder:font-normal placeholder:text-primary-normal placeholder:select-none focus:outline-none"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
            />
            {value && (
                <div className="text-primary-dark cursor-pointer p-1" onClick={handleClear}>
                    <XIcon />
                </div>
            )}
            <div className="text-primary-dark cursor-pointer p-1" onClick={handleSearch}>
                <SearchIcon />
            </div>
        </div>
    )
}

export default Search
