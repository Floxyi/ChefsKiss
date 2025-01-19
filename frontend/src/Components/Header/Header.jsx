import { useNavigate, useLocation } from 'react-router-dom'

import HouseIcon from '@Icons/HouseIcon'
import CategoriesIcon from '@Icons/CategoriesIcon'
import EditIcon from '@Icons/EditIcon'

import logo from '@Images/Chefskiss.webp'
import './Header.css'

const Header = () => {
    const navigate = useNavigate()

    const location = useLocation()
    const isActive = (path) => location.pathname === path

    return (
        <div className="headerContainer">
            <div className="headerBar">
                <div className="headerTitle" onClick={() => navigate('/')}>
                    Chef’s Kiss
                </div>
                <img className="navImage" src={logo} alt="logo" />
                <div className="navItems">
                    <div
                        className={
                            isActive('/create')
                                ? 'navButtonActive'
                                : 'navButton'
                        }
                        onClick={() => navigate('/create')}
                    >
                        <div className="navText">create a recipe</div>
                        <EditIcon />
                    </div>
                    <div
                        className={
                            isActive('/') ? 'navButtonActive' : 'navButton'
                        }
                        onClick={() => navigate('/')}
                    >
                        <div className="navText">home</div>
                        <HouseIcon />
                    </div>
                    <div
                        className={
                            isActive('/categories')
                                ? 'navButtonActive'
                                : 'navButton'
                        }
                        onClick={() => navigate('/categories')}
                    >
                        <div className="navText">categories</div>
                        <CategoriesIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
