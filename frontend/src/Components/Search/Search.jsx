import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchIcon from '@Icons/SearchIcon'

import styles from './Search.module.css'

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
        <div className={styles.searchContainer}>
            <input
                className={styles.search}
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Suchen..."
            />
            <div
                className={styles.searchIcon}
                onClick={() => navigate('/search')}
            >
                <SearchIcon />
            </div>
        </div>
    )
}

export default Search
