import './Tile.css'

const Tile = ({ text, icon, onClick }) => {
    return (
        <div className="tileContainer" onClick={onClick}>
            <div className="tileText">{text}</div>
            <div className="tileIconContainer">
                <div className="tileIcon">{icon}</div>
            </div>
        </div>
    )
}

export default Tile
