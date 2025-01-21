import styles from './Tile.module.css'

const Tile = ({ text, icon, onClick }) => {
    return (
        <div className={styles.tileContainer} onClick={onClick}>
            <div className={styles.tileText}>{text}</div>
            <div className={styles.tileIconContainer}>
                <div className={styles.tileIcon}>{icon}</div>
            </div>
        </div>
    )
}

export default Tile
