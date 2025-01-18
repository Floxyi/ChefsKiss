import { Link } from 'react-router-dom'
import Headline from '../../Components/Headline/Headline'

const SearchPage = () => {
    return (
        <div>
            <Headline>Search Recipes</Headline>
            <p>On this page you can search recipes.</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default SearchPage
