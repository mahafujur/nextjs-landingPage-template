module.exports = {
    purge: ['./reusableComponents/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'accent-1': '#333',
                'section-1-bg':'#FEF9E5',
                'section-2-bg':'#E8F8F7',
                'branding-text':'#00c4b4',


            },
            backgroundImage: {
                'hero-lg': "url('/cover.png')",
                'hero-sm': "url('/cover.png')",
            },
            spacing: {
                '9/16': '56.25%',
                '3/4': '75%',
                '1/1': '100%',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
                '4xl': '2.625rem',
                '5xl': '3.25rem',
                '6xl': '5.5rem',
            },
            inset: {
                '1/2': '50%',
                'third': '80%',
                'full': '100%',
            },
            letterSpacing: {
                tighter: '-0.02em',
                tight: '-0.01em',
                normal: '0',
                wide: '0.01em',
                wider: '0.02em',
                widest: '0.4em',
            },
            lineHeight: {
                none: '1',
                tighter: '1.125',
                tight: '1.25',
                snug: '1.375',
                normal: '1.5',
                relaxed: '1.625',
                loose: '2',
                '3': '.75rem',
                '4': '1rem',
                '5': '1.2rem',
                '6': '1.5rem',
                '7': '1.75rem',
                '8': '2rem',
                '9': '2.25rem',
                '10': '2.5rem',
            },
            minWidth: {
                '10': '2.5rem',
                '48': '12rem',
            },
            opacity: {
                '90': '0.9',
            },
            scale: {
                '98': '.98'
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': {transform: 'translateY(0)',},
                    '50%': {transform: 'translateY(-5%)',},
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
