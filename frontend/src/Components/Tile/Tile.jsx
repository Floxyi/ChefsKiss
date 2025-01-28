const Tile = ({ title, subtitle, icon, onClick }) => {
    return (
        <div
            className="min-h-36 min-w-36 max-h-36 max-w-36 bg-primary-normal hover:bg-primary-light border-[3px] border-primary-dark rounded-lg flex flex-col justify-center items-center cursor-pointer"
            onClick={onClick}
        >
            <div className="font-semibold text-center text-primary-dark select-none my-auto">
                <div className="text-lg font-bold">{title}</div>
                <div className="text-sm">{subtitle}</div>
            </div>
            <div className="ml-auto pr-4 pb-2">
                <div className="font-bold text-2xl text-primary-dark">
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default Tile
