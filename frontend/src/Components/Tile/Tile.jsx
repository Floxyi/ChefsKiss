import styles from './Tile.module.css'

const Tile = ({ title, subtitle, icon, onClick }) => {
    return (
        <div className={styles.tileContainer} onClick={onClick}>
            <div className={styles.titleContainer}>
                <div className={styles.tileText}>{title}</div>
                <div className={styles.subtileText}>{subtitle}</div>
            </div>
            <div className={styles.tileIconContainer}>
                <div className={styles.tileIcon}>{icon}</div>
            </div>
        </div>
    )
}

export default Tile
