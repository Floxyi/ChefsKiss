const ImprintText = ({ children, className, ...props }) => (
    <p className={`text-primary-dark font-bold mb-4 ${className || ''}`} {...props}>
        {children}
    </p>
)

export default ImprintText
