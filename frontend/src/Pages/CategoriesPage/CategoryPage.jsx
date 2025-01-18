import { Link } from 'react-router-dom'
import Headline from '../../Components/Headline/Headline'

const CategoryPage = () => {
    return (
        <div>
            <Headline>Explore Recipe Categories</Headline>
            <p>On this page you can view all categories.</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default CategoryPage
