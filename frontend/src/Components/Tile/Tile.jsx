const Tile = ({ title, subtitle, icon, onClick }) => {
    return (
        <div
            className="relative min-h-36 min-w-12 max-h-fit bg-primary-normal hover:bg-primary-light border-[3px] border-primary-dark rounded-2xl flex flex-col justify-center items-center cursor-pointer"
            onClick={onClick}
        >
            <div className="font-semibold text-center text-primary-dark select-none my-auto">
                <div className="text-lg font-extrabold">{title}</div>
                <div className="text-sm">{subtitle}</div>
            </div>
            <div className="absolute bottom-0 right-0 mr-4 mb-2 font-bold text-2xl text-primary-dark">
                {icon}
            </div>
        </div>
    )
}

export default Tile
