/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                midnight: '#05070B', // Primary BG (Midnight Chassis)
                steel: '#0C304A', // Secondary BG (Steel Navy)
                electric: '#2E6D9D', // Accent (Electric Steel)
                silver: '#E5EDF5', // Primary text (Chrome Silver)
                gunmetal: '#94A3B8', // Muted text (lighter than brand spec #6F7A86 for better screen contrast)
                alert: '#E53935', // Error / critical
                success: '#2ECC71', // Diagnostic Green
                amber: '#FFB74D', // Signal Amber — warnings, in-progress
                brandBlue: '#0369A1', // Logo gradient endpoint
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                headline: ['Sora', 'sans-serif'],
                serif: ['Sora', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'beam': 'beam 2s infinite',
            },
            keyframes: {
                beam: {
                    '0%': { backgroundPosition: '-100% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                }
            }
        }
    },
    plugins: [],
}
