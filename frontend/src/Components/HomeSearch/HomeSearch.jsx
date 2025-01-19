import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchIcon from '@Icons/SearchIcon'

import './HomeSearch.css'

const HomeSearch = () => {
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
        <div className="homeSearchContainer">
            <input
                className="homeSearch"
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Suchen..."
            />
            <div className="homeSearchIcon" onClick={() => navigate('/search')}>
                <SearchIcon />
            </div>
        </div>
    )
}

export default HomeSearch
