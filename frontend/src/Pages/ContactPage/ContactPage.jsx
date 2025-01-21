import Header from '@Components/Header/Header'
import Footer from '@Components/Footer/Footer'
import ScreenPageContainer from '@Components/ScreenPageContainer/ScreenPageContainer'
import Button from '@Components/Button/Button'

import styles from './ContactPage.module.css'

const ContactPage = () => {
    return (
        <ScreenPageContainer>
            <Header />
            <div className={styles.contactContainer}>
                <div className={styles.contactContentContainer}>
                    <h1 className={styles.contactTitle}>Contact Us</h1>
                    <p className={styles.contactDescription}>
                        If you have any questions, suggestions, or need
                        assistance, feel free to contact us using the details
                        below.
                    </p>
                    <form className={styles.contactForm}>
                        <label htmlFor="name" className="formLabel">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className={styles.formInput}
                        />

                        <label htmlFor="email" className={styles.formLabel}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className={styles.formInput}
                        />

                        <label htmlFor="message" className={styles.formLabel}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            className={styles.formTextarea}
                        ></textarea>

                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
            <Footer />
        </ScreenPageContainer>
    )
}

export default ContactPage
