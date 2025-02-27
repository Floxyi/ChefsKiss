const Title = ({ title, margin }) => {
    return (
        <div className={`text-center text-4xl text-primary-dark font-bold select-none ${margin ? 'mb-8' : ''}`}>
            {title}
        </div>
    )
}

export default Title
