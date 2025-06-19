import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Base colors
				black: '#0f0f0f',
				blueAccent: '#367eF3',
				gray: '#555555',
				white: '#ffffff',
				'gray-dark': '#323232',

				// Custom color scales
				dark: {
					DEFAULT: '#0f0f0f',
					100: '#323232',  // gray-dark
					200: '#222222',
					300: '#1a1a1a',
					400: '#0f0f0f',  // black
				},
				neutral: {
					DEFAULT: '#555555',
					100: '#ffffff',  // white
					200: '#999999',
					300: '#555555',  // gray
					400: '#323232',  // gray-dark
				},
				accent: {
					DEFAULT: '#367eF3',
					light: 'rgba(54, 126, 243, 0.1)',
					medium: 'rgba(54, 126, 243, 0.2)',
					dark: 'rgba(54, 126, 243, 0.3)',
				},

				// System semantic colors
				background: '#0f0f0f',      // black
				foreground: '#ffffff',       // white
				primary: {
					DEFAULT: '#367eF3',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#323232',      // gray-dark
					foreground: '#ffffff'    // white
				},
				muted: {
					DEFAULT: '#555555',      // gray
					foreground: '#999999'    // neutral-200
				},
				card: {
					DEFAULT: '#323232',      // gray-dark
					foreground: '#ffffff'    // white
				},
				popover: {
					DEFAULT: '#323232',      // gray-dark
					foreground: '#ffffff'    // white
				},
				border: '#323232',          // gray-dark
				input: '#323232',           // gray-dark
				ring: '#367eF3',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				shine: {
					'0%': { backgroundPosition: '0% center' },
					'100%': { backgroundPosition: '200% center' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shine': 'shine 8s linear infinite',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
