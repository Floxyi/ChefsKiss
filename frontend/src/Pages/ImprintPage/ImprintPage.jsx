import { Link } from 'react-router-dom'

import Header from '@Components/Header/Header'
import Footer from '@Components/Footer/Footer'
import ScreenPageContainer from '@Components/ScreenPageContainer/ScreenPageContainer'

import './ImprintPage.css'

const ImprintPage = () => {
    return (
        <ScreenPageContainer>
            <Header />
            <div className="imprintContainer">
                <p>On this page you can view the imprint.</p>
                <Link to="/">Home</Link>
            </div>
            <Footer />
        </ScreenPageContainer>
    )
}

export default ImprintPage
