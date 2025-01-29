import { useNavigate, useLocation } from 'react-router-dom'

import logo from '@Images/Chefskiss.webp'
import HouseIcon from '@Icons/HouseIcon'
import CategoriesIcon from '@Icons/CategoriesIcon'
import EditIcon from '@Icons/EditIcon'
import SearchIcon from '@Icons/SearchIcon'

const Header = () => {
    const navigate = useNavigate()

    const location = useLocation()
    const isActive = (path) => location.pathname === path

    const buildButton = (path, text, icon) => {
        return (
            <div
                className={
                    isActive(path)
                        ? 'flex flex-row shrink-0 items-center text-primary-dark font-bold border-2 border-primary-dark rounded-full cursor-pointer px-4 py-1 m-0'
                        : 'flex flex-row shrink-0 items-center text-primary-dark hover:border-2 hover:border-primary-dark hover:rounded-full hover:cursor-pointer px-4 py-1 m-[2px] hover:m-0'
                }
                onClick={() => navigate(path)}
            >
                {icon}
                <div className="pl-2 select-none">{text}</div>
            </div>
        )
    }

    return (
        <div>
            <div className="min-w-full z-50 fixed">
                <div className="mx-60 min-h-20 min-w-fit bg-primary-background mr-[calc(-1*(100vw-100%))]" />
            </div>
            <div className="min-w-full z-[51] fixed">
                <div className="mr-[calc(-1*(100vw-100%))]">
                    <div className="max-h-20 flex flex-row justify-between items-center bg-primary-light border-4 border-primary-dark rounded-full px-6 py-4 mx-5 mt-5">
                        <div
                            className="font-bold text-5xl text-primary-light w-[500px] font-shrikhand text-stroke-dark select-none hover:cursor-pointer"
                            onClick={() => navigate('/')}
                        >
                            Chef’s Kiss
                        </div>
                        <img className="w-20" src={logo} alt="logo" />
                        <div className="flex flex-row gap-2 w-[500px] justify-end">
                            {buildButton(
                                '/create',
                                'Create',
                                <EditIcon stroke={isActive ? 5 : 2} />
                            )}
                            {buildButton(
                                '/categories',
                                'Categories',
                                <CategoriesIcon stroke={isActive ? 3 : 2} />
                            )}
                            {buildButton(
                                '/search',
                                'Search',
                                <SearchIcon stroke={isActive ? 3 : 2} />
                            )}
                            {buildButton(
                                '/',
                                'Home',
                                <HouseIcon stroke={isActive ? 3 : 2} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-20" />
        </div>
    )
}

export default Header
