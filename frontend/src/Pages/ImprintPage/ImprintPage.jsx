import Header from '@Components/Header'
import Footer from '@Components/Footer'
import ScreenPageContainer from '@Components/ScreenPageContainer'

import styles from './ImprintPage.module.css'

const ImprintPage = () => {
    return (
        <ScreenPageContainer>
            <Header />
            <div className={styles.imprintContainer}>
                <div className={styles.imprintContentContainer}>
                    <h1 className={styles.imprintTitle}>Imprint</h1>
                    <p className={styles.imprintText}>
                        In accordance with § 5 TMG (Telemedia Act) and other
                        applicable laws:
                    </p>
                    <p className={styles.imprintText}>
                        <strong>Company Name:</strong> ExampleTech Solutions
                        GmbH
                        <br />
                        <strong>Address:</strong> Innovation Street 42, 10115
                        Berlin, Germany
                        <br />
                        <strong>Managing Director:</strong> John Doe
                        <br />
                        <strong>Commercial Register:</strong> HRB 123456,
                        Amtsgericht Berlin
                        <br />
                        <strong>VAT ID:</strong> DE123456789
                    </p>
                    <p className={styles.imprintText}>
                        <strong>Contact Information:</strong>
                        <br />
                        <strong>Email:</strong> contact@exampletech.com
                        <br />
                        <strong>Phone:</strong> +49 30 12345678
                    </p>
                    <div className={styles.imprintSpacer} />
                    <h1 className={styles.imprintTitle}>Privacy Policy</h1>
                    <p className={styles.imprintText}>
                        At ExampleTech Solutions GmbH, we take the protection of
                        your personal data very seriously. Below, we outline how
                        we collect, use, and protect your information.
                    </p>
                    <h2 className={styles.imprintSubtitle}>
                        1. Data Collection
                    </h2>
                    <p className={styles.imprintText}>
                        We collect personal data when you interact with our
                        website (e.g., when you fill out forms or subscribe to
                        newsletters). The data collected may include your name,
                        email address, and other contact information.
                    </p>
                    <h2 className={styles.imprintSubtitle}>2. Cookies</h2>
                    <p className={styles.imprintText}>
                        Our website uses cookies to enhance your experience.
                        Cookies are small text files stored on your device that
                        help us analyze web traffic and improve our services.
                        You can disable cookies in your browser settings, but
                        this may impact your browsing experience.
                    </p>
                    <h2 className={styles.imprintSubtitle}>3. Data Usage</h2>
                    <p className={styles.imprintText}>
                        Personal data is used solely for the purposes outlined
                        at the time of collection (e.g., to respond to
                        inquiries, provide services, or improve our website).
                        Your data will not be shared with third parties without
                        your explicit consent.
                    </p>
                    <h2 className={styles.imprintSubtitle}>
                        4. Data Protection
                    </h2>
                    <p className={styles.imprintText}>
                        We implement technical and organizational measures to
                        protect your personal data from unauthorized access,
                        loss, or misuse. Our employees and partners are bound by
                        strict confidentiality agreements.
                    </p>
                    <h2 className={styles.imprintSubtitle}>5. Your Rights</h2>
                    <p className={styles.imprintText}>
                        You have the right to access, correct, or delete your
                        personal data at any time. For inquiries, please contact
                        us at the email address provided above.
                    </p>
                </div>
            </div>
            <Footer />
        </ScreenPageContainer>
    )
}

export default ImprintPage
