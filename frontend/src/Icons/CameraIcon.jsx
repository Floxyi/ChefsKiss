const CameraIcon = ({ width = 48, height = 48, color = '#D38B8B' }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke={color}
        strokeWidth="1.91"
        strokeMiterlimit="10"
    >
        <circle cx="12" cy="12.95" r="4.77" />
        <path d="M16.77,6.27,14.86,3.41H9.14L7.23,6.27H3.41A1.91,1.91,0,0,0,1.5,8.18v10.5a1.9,1.9,0,0,0,1.91,1.91H20.59a1.9,1.9,0,0,0,1.91-1.91V8.18a1.91,1.91,0,0,0-1.91-1.91Z" />
        <line x1="4.36" y1="4.36" x2="4.36" y2="6.27" />
        <line x1="18.68" y1="9.14" x2="20.59" y2="9.14" />
    </svg>
)

export default CameraIcon
