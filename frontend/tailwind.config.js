module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#EFDADA',
                    dark: '#D38B8B',
                    normal: '#E8BFBF'
                },
                background: '#FBF3F3'
            },
            fontFamily: {
                shrikhand: ['Shrikhand', 'serif']
            }
        }
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-stroke-dark': {
                    '-webkit-text-stroke': '2.5px #D38B8B',
                    'text-stroke': '2.5px #D38B8B'
                }
            })
        }
    ]
}
