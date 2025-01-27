const Button = ({ onClick, children }) => {
    return (
        <button
            className="px-4 py-2 rounded bg-primary-dark text-primary-light hover:bg-primary-normal hover:text-primary-dark flex flex-grow flex-row items-center justify-center gap-4"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
