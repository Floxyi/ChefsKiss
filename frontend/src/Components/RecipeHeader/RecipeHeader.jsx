import Title from '@Components/Title'

const RecipeHeader = ({ isLoading, recipe }) => {
    return (
        <div>
            <Title title={isLoading ? 'Recipe' : recipe.title} />
            <div className="font-semibold text-xl text-primary-dark text-center select-none mb-16">
                ({isLoading ? 'Categories' : recipe.categories.join(', ')})
            </div>
        </div>
    )
}

export default RecipeHeader
