import { Link } from 'react-router-dom'

import Headline from '@Components/Headline/Headline'

const ImprintPage = () => {
    return (
        <div>
            <Headline>Imprint</Headline>
            <p>On this page you can view the imprint.</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default ImprintPage
