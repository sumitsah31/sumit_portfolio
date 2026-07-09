import { Analytics } from "@vercel/analytics/react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import AdminApp from "./components/admin/admin-app"
import Navbar from "./components/layout/navbar"
import Contact from "./components/sections/contact"
import Experience from "./components/sections/experience"
import GitHub from "./components/sections/github"
import Hero from "./components/sections/hero"
import Projects from "./components/sections/projects"
import Skills from "./components/sections/skills"
import Stats from "./components/sections/stats"
import { siteConfig } from "./data/portfolio-data"
import { useActiveSection } from "./hooks/use-active-section"

function Portfolio() {
	useActiveSection()

	return (
		<div className="relative min-h-screen bg-night">
			<Helmet>
				<title>Sumit Kumar Sah — Full-Stack Developer</title>
				<meta
					name="description"
					content="Portfolio of Sumit Kumar Sah — Full-Stack Web Developer specializing in React, TypeScript, and Next.js. Currently building at CodaPet."
				/>
				<meta
					name="keywords"
					content="Sumit Kumar Sah, Full Stack Developer, React, TypeScript, Next.js, Portfolio, Frontend Developer, CodaPet"
				/>
				<meta
					name="author"
					content="Sumit Kumar Sah"
				/>
				<meta
					property="og:title"
					content="Sumit Kumar Sah — Full-Stack Developer"
				/>
				<meta
					property="og:description"
					content="Full-Stack Developer specializing in React, TypeScript, and Next.js. Currently building at CodaPet."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="Sumit Kumar Sah — Full-Stack Developer"
				/>
				<meta
					name="twitter:description"
					content="Full-Stack Developer specializing in React, TypeScript, and Next.js. Currently building at CodaPet."
				/>
				<link
					rel="canonical"
					href="https://sumitkumarsah.dev"
				/>
			</Helmet>
			<Navbar />
			<main>
				<Hero />
				<Stats />
				<Projects />
				<Experience />
				<Skills />
				{siteConfig.showGithub && <GitHub />}
				<Contact />
			</main>
			<Analytics />
		</div>
	)
}

export default function App() {
	const [path] = useState(window.location.pathname)

	if (path.startsWith("/admin")) {
		return <AdminApp />
	}

	return <Portfolio />
}
