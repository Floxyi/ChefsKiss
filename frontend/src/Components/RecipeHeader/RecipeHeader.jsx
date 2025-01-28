const RecipeHeader = ({ isLoading, recipe }) => {
    return (
        <div>
            <div className="font-semibold text-3xl text-primary-dark my-auto text-center select-none mb-2">
                {isLoading ? 'Recipe' : recipe.title}
            </div>
            <div className="font-semibold text-xl text-primary-dark my-auto pb-4 text-center select-none mb-8">
                ({isLoading ? 'Categories' : recipe.categories.join(', ')})
            </div>
        </div>
    )
}

export default RecipeHeader
