import styles from './PageContainer.module.css'

const PageContainer = ({ children }) => {
    return <div className={styles.pageContainer}>{children}</div>
}

export default PageContainer
