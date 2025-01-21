import styles from './ScreenPageContainer.module.css'

const ScreenPageContainer = ({ children }) => {
    return <div className={styles.screenPageContainer}>{children}</div>
}

export default ScreenPageContainer
