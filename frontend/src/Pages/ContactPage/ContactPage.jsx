import Header from '@Components/Header/Header'
import Footer from '@Components/Footer/Footer'
import ScreenPageContainer from '@Components/ScreenPageContainer/ScreenPageContainer'

import './ContactPage.css'

const ContactPage = () => {
    return (
        <ScreenPageContainer>
            <Header />
            <div className="contactContainer">
                <p>On this page you can view the contact.</p>
            </div>
            <Footer />
        </ScreenPageContainer>
    )
}

export default ContactPage
