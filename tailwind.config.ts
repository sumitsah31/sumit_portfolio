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
				sans: ["Space Grotesk", "system-ui", "sans-serif"],
				serif: ["Newsreader", "Georgia", "serif"],
				mono: ["JetBrains Mono", "ui-monospace", "monospace"],
			},
			colors: {
				// Premium-dark palette (public portfolio)
				night: "#161310",
				surface: {
					DEFAULT: "#1d1a16",
					hover: "#211d18",
					inset: "#161310",
				},
				line: {
					DEFAULT: "#2a2622",
					chip: "#2f2a25",
					cv: "#3a352f",
				},
				ink: {
					DEFAULT: "#ece9e2",
					muted: "#b3aca2",
					dim: "#9a938a",
					faint: "#6b655d",
					list: "#cfc9c0",
				},
				gold: {
					DEFAULT: "#e0a94a",
					hover: "#eab863",
					"tint-border": "#4a3d24",
					"tint-bg": "#2a2115",
				},
				brace: "#7a746a",
				online: "#7bd88f",
				// shadcn tokens (admin UI)
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
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
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				float: "float 6s ease-in-out infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
				"gradient-shift": "gradient-shift 8s ease infinite",
			},
			backgroundImage: {
				"grid-pattern":
					"linear-gradient(to right, rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.03) 1px, transparent 1px)",
			},
			backgroundSize: {
				"grid-40": "40px 40px",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}
