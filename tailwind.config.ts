/** @type {import('tailwindcss').Config} */
module.exports = {
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
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				serif: ["Playfair Display", "EB Garamond", "Georgia", "serif"],
				mono: [
					"JetBrains Mono",
					"ui-monospace",
					"SFMono-Regular",
					"Menlo",
					"monospace",
				],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				surface: {
					DEFAULT: "hsl(var(--surface))",
					2: "hsl(var(--surface-2))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
					cyan: "hsl(var(--accent-cyan))",
					orange: "hsl(var(--accent-orange))",
					pink: "hsl(var(--accent-pink))",
					lime: "hsl(var(--accent-lime))",
					violet: "hsl(var(--accent-violet))",
				},
				status: {
					green: "hsl(var(--status-green))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-12px)" },
				},
				"pulse-glow": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.5" },
				},
				"gradient-shift": {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
				blink: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" },
				},
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-50%)" },
				},
				"marquee-reverse": {
					"0%": { transform: "translateX(-50%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				float: "float 6s ease-in-out infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
				"gradient-shift": "gradient-shift 8s ease infinite",
				blink: "blink 1.2s steps(2, start) infinite",
				marquee: "marquee 40s linear infinite",
				"marquee-reverse": "marquee-reverse 40s linear infinite",
			},
			backgroundImage: {
				"grid-pattern":
					"linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
				"gradient-peach": "linear-gradient(135deg, #f472b6 0%, #fb923c 100%)",
				"gradient-cyan": "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
				"gradient-violet": "linear-gradient(135deg, #8b5cf6 0%, #22d3ee 100%)",
				"gradient-lime": "linear-gradient(135deg, #a3e635 0%, #14b8a6 100%)",
				"gradient-sunset":
					"linear-gradient(135deg, #fb923c 0%, #f472b6 50%, #8b5cf6 100%)",
			},
			backgroundSize: {
				"grid-40": "40px 40px",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}
