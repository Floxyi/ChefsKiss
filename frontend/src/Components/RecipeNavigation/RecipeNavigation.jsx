import { useNavigate, useLocation } from 'react-router-dom'

const RecipeNavigation = ({ id }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const tabs = [
        { label: 'Recipe Instructions', path: `/recipe/${id}` },
        { label: 'Similar Recipes', path: `/recipe/${id}/similar` }
    ]

    return (
        <div className="grid grid-cols-2 gap-40 mb-12 border-b-2 border-primary-dark">
            {tabs.map((tab) => {
                const isActive = location.pathname === tab.path
                return (
                    <button
                        key={tab.path}
                        onClick={() => navigate(tab.path)}
                        className={`relative pb-3 text-lg ${
                            isActive
                                ? 'font-bold text-primary-dark'
                                : 'text-primary-dark hover:font-bold'
                        }`}
                    >
                        {tab.label}
                        {isActive && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-dark rounded-t"></div>
                        )}
                    </button>
                )
            })}
        </div>
    )
}

export default RecipeNavigation
