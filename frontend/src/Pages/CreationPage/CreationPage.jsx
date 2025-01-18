import { Link } from 'react-router-dom'
import Headline from '../../Components/Headline/Headline'

const CreationPage = () => {
    return (
        <div>
            <Headline>Create Recipe</Headline>
            <p>On this page you can create recipes.</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default CreationPage
