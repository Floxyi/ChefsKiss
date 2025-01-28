import { useState } from 'react'

import ArrowDownIcon from '@Icons/ArrowDownIcon'

const Dropdown = ({ label, options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative inline-block text-left pb-8">
            <button
                className="inline-flex items-center px-4 py-2 border-[3px] border-primary-dark rounded-full font-bold text-center text-primary-dark select-none my-auto focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="pr-2">
                    {label}: {value}
                </div>
                <div
                    className={`transform transition-transform duration-900 ${
                        isOpen ? '' : 'rotate-180'
                    }`}
                >
                    <ArrowDownIcon />
                </div>
            </button>
            {isOpen && (
                <div className="absolute top-12 py-1 w-full bg-primary-light border-[3px] border-primary-dark rounded-[24px] shadow-lg">
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-normal ${
                                value === option
                                    ? 'text-primary-dark font-bold text-lg'
                                    : 'text-primary-dark'
                            }`}
                            onClick={() => {
                                onChange(option)
                                setIsOpen(false)
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown
