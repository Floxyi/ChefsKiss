import Header from '@Components/Header'
import Footer from '@Components/Footer'

import styles from './PageContainer.module.css'

const PageContainer = ({ children, useMinDimensions }) => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            {useMinDimensions ? (
                <div className={styles.minPageContent}>
                    <div className={styles.minPageContentContainer}>
                        {children}
                    </div>
                </div>
            ) : (
                <div className={styles.pageContent}>
                    <div className={styles.pageContentContainer}>
                        {children}
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default PageContainer
