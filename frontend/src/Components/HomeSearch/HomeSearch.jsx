import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchIcon from '@Icons/SearchIcon'

import styles from './HomeSearch.module.css'

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
        <div className={styles.homeSearchContainer}>
            <input
                className={styles.homeSearch}
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Suchen..."
            />
            <div
                className={styles.homeSearchIcon}
                onClick={() => navigate('/search')}
            >
                <SearchIcon />
            </div>
        </div>
    )
}

export default HomeSearch
