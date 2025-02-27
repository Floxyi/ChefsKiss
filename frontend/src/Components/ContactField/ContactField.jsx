const ContactField = ({ label, type = 'text', id, placeholder, rows, value, onChange, ...props }) => (
    <div className="flex flex-col gap-1">
        <label className="text-xl text-primary-dark font-bold select-none mt-3" htmlFor={id}>
            {label}
        </label>
        {type === 'textarea' ? (
            <textarea
                id={id}
                name={id}
                placeholder={placeholder}
                rows={rows || 5}
                className="border-2 text-primary-dark placeholder:text-primary-dark placeholder:font-normal border-primary-dark bg-primary-light p-2 rounded-md focus:outline-none resize-none"
                value={value}
                onChange={onChange}
                {...props}
            />
        ) : (
            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                className="border-2 text-primary-dark font-bold placeholder:font-normal placeholder:text-primary-dark border-primary-dark bg-primary-light p-2 rounded-md focus:outline-none"
                value={value}
                onChange={onChange}
                {...props}
            />
        )}
    </div>
)

export default ContactField
