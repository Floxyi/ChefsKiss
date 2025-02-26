import { useEffect, useState, useRef } from 'react'

import ArrowDownIcon from '@Icons/ArrowDownIcon'
import XIcon from '@Icons/XIcon'

const Dropdown = ({ label, options, value, defaultValue, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center px-2 py-1 border-[3px] border-primary-dark rounded-full font-bold text-center text-primary-dark select-none my-auto focus:outline-none"
            >
                <div>
                    {label}: {value}
                </div>
                {value !== defaultValue && (
                    <div
                        className="px-1 hover:scale-110 transition-transform duration-200"
                        onClick={(event) => {
                            event.stopPropagation()
                            onChange(defaultValue)
                        }}
                    >
                        <XIcon width={20} height={20} />
                    </div>
                )}
                <div
                    className={`transform transition-transform duration-900 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                >
                    <ArrowDownIcon />
                </div>
            </button>
            {isOpen && (
                <div className="absolute top-12 py-1 w-max min-w-full bg-primary-light border-[3px] border-primary-dark rounded-[24px] shadow-lg">
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
