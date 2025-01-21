import { useNavigate, useLocation } from 'react-router-dom'

import HouseIcon from '@Icons/HouseIcon'
import CategoriesIcon from '@Icons/CategoriesIcon'
import EditIcon from '@Icons/EditIcon'
import logo from '@Images/Chefskiss.webp'
import SearchIcon from '@Icons/SearchIcon'

import styles from './Header.module.css'

const Header = () => {
    const navigate = useNavigate()

    const location = useLocation()
    const isActive = (path) => location.pathname === path

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerBar}>
                <div
                    className={styles.headerTitle}
                    onClick={() => navigate('/')}
                >
                    Chef’s Kiss
                </div>
                <img className={styles.navImage} src={logo} alt="logo" />
                <div className={styles.navItems}>
                    <div
                        className={
                            isActive('/create')
                                ? styles.navButtonActive
                                : styles.navButton
                        }
                        onClick={() => navigate('/create')}
                    >
                        <div className={styles.navText}>create a recipe</div>
                        <EditIcon />
                    </div>
                    <div
                        className={
                            isActive('/categories')
                                ? styles.navButtonActive
                                : styles.navButton
                        }
                        onClick={() => navigate('/categories')}
                    >
                        <div className={styles.navText}>categories</div>
                        <CategoriesIcon />
                    </div>
                    <div
                        className={
                            isActive('/search')
                                ? styles.navButtonActive
                                : styles.navButton
                        }
                        onClick={() => navigate('/search')}
                    >
                        <div className={styles.navText}>search</div>
                        <SearchIcon />
                    </div>
                    <div
                        className={
                            isActive('/')
                                ? styles.navButtonActive
                                : styles.navButton
                        }
                        onClick={() => navigate('/')}
                    >
                        <div className={styles.navText}>home</div>
                        <HouseIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
