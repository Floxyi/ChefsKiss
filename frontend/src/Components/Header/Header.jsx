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
                        ? 'flex flex-row shrink-0 justify-center items-center text-primary-dark font-bold border-2 border-primary-dark rounded-full cursor-pointer px-4 py-1 m-0'
                        : 'flex flex-row shrink-0 justify-center items-center text-primary-dark hover:border-2 hover:border-primary-dark hover:rounded-full hover:cursor-pointer px-4 py-1 m-[2px] hover:m-0'
                }
                onClick={() => navigate(path)}
            >
                {icon}
                <div className="pl-2 select-none">{text}</div>
            </div>
        )
    }

    return (
        <div className='mr-[calc(-1*(100vw-100%))] pb-36'>
            <div className="fixed w-full h-12 flex justify-center z-[50]">
                <div className="w-[93%] h-full bg-background" />
            </div>
            <div className="min-w-full z-[51] fixed ">
                <div className=" grid grid-cols-5 items-center bg-primary-light border-4 border-primary-dark rounded-full px-6 py-1 mx-5 mt-5">
                    <div
                        className="col-span-2 font-bold text-5xl text-primary-light font-shrikhand text-stroke-dark select-none hover:cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        Chef’s Kiss
                    </div>
                    <img className="w-20 flex justify-self-center" src={logo} alt="logo" />
                    <div className="col-span-2 flex justify-between gap-2 items-center justify-self-end">
                        {buildButton('/create', 'Create', <EditIcon />)}
                        {buildButton(
                            '/categories',
                            'Categories',
                            <CategoriesIcon />
                        )}
                        {buildButton('/search', 'Search', <SearchIcon />)}
                        {buildButton('/', 'Home', <HouseIcon />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
