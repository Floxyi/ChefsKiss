import Header from '@Components/Header/Header'
import Footer from '@Components/Footer/Footer'
import ScreenPageContainer from '@Components/ScreenPageContainer/ScreenPageContainer'

import './ContactPage.css'
import Button from '@Components/Button/Button'

const ContactPage = () => {
    return (
        <ScreenPageContainer>
            <Header />
            <div className="contactContainer">
                <div className="contactContentContainer">
                    <h1 className="contactTitle">Contact Us</h1>
                    <p className="contactDescription">
                        If you have any questions, suggestions, or need
                        assistance, feel free to contact us using the details
                        below.
                    </p>
                    <form className="contactForm">
                        <label htmlFor="name" className="formLabel">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="formInput"
                        />

                        <label htmlFor="email" className="formLabel">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className="formInput"
                        />

                        <label htmlFor="message" className="formLabel">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            className="formTextarea"
                        ></textarea>

                        <Button type="submit" className="formButton">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
            <Footer />
        </ScreenPageContainer>
    )
}

export default ContactPage
