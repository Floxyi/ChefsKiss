import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchIcon from '@Icons/SearchIcon'

const Search = () => {
    const navigate = useNavigate()

    const [value, setValue] = useState('')

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate('/search')
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className="h-12 w-[600px] border-[3px] border-primary-dark rounded-3xl bg-transparent px-4 py-2 flex flex-row items-center">
            <input
                className="w-full font-bold text-xl text-primary-dark bg-transparent placeholder:font-normal placeholder:text-primary-normal focus:outline-none"
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
            />
            <div className="text-primary-dark cursor-pointer p-1" onClick={() => navigate('/search')}>
                <SearchIcon />
            </div>
        </div>
    )
}

export default Search
