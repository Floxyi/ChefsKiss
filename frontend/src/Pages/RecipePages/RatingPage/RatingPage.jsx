import { Link, useParams } from 'react-router-dom'
import Headline from '../../../Components/Headline/Headline'

const RatingPage = () => {
    const { id } = useParams()

    return (
        <div>
            <Headline>Recipe Instructions for Recipe {id}</Headline>
            <p>On this page you can view recipe instructions.</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default RatingPage
