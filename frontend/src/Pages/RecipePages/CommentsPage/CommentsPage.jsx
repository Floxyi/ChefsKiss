import { Link, useParams } from 'react-router-dom'
import Headline from '../../../Components/Headline/Headline'

const CommentsPage = () => {
    const { id } = useParams()

    return (
        <div>
            <Headline>Comments for Recipe {id}</Headline>
            <p>On this page you can view recipe comments.</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default CommentsPage
