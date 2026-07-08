export const personalInfo = {
	name: "Sumit Kumar Sah",
	title: "Full-Stack Web Developer",
	location: "Bengaluru, IN",
	email: "sahsumitofficial@gmail.com",
	phone: "+917656087001",
	phoneDisplay: "+91 76560 87001",
	linkedin: "https://www.linkedin.com/in/sumitkumarsah31/",
	linkedinHandle: "/sumitkumarsah31",
	github: "https://github.com/sumitsah31",
	githubUsername: "sumitsah31",
	resumeUrl: "/resume.pdf",
	bio: "I build scalable, performant web applications with React, TypeScript and Next.js — dynamic interfaces on the front, solid server logic underneath. Author of @codapet/design-system.",
}

// Toggles mirroring the design handoff state. Flip to hide sections/pill.
export const siteConfig = {
	available: false,
	showGithub: true,
	showContactForm: true,
}

export const stats = [
	{ label: "experience", value: "2+ years" },
	{ label: "core stack", value: "React · TS" },
	{ label: "currently", value: "CodaPet" },
]

export const skills = {
	frontend: [
		"React JS",
		"Redux",
		"React-Tracked",
		"TanStack Query",
		"TanStack Router",
		"Tailwind CSS",
	],
	backend: ["Node.js", "MongoDB", "REST APIs"],
	languages: ["JavaScript", "TypeScript", "Java", "HTML / CSS"],
	tools: ["VS Code", "Docker", "Git", "GitLab", "CI/CD"],
}

export const education = {
	degree: "BSc Physics",
	period: "2014—2017",
	certification: "Full Stack · Newton School",
}

export interface ExperienceItem {
	id?: string
	company: string
	role: string
	start_date: string
	end_date: string
	description: string[]
	tech_stack: string[]
	company_url: string | null
	sort_order: number
}

export const staticExperiences: ExperienceItem[] = [
	{
		company: "CodaPet",
		role: "Frontend Developer",
		start_date: "Jan 2025",
		end_date: "Present",
		description: [
			"Redesigned all CodaPet web applications for a modern, cohesive experience across the platform.",
			"Built and published @codapet/design-system — a reusable npm package used across all CodaPet apps.",
			"Developed the frontend for CodaPet's in-home pet euthanasia booking platform, serving owners and vets nationwide.",
		],
		tech_stack: ["Next.js", "TypeScript", "Design System", "Tailwind"],
		company_url: "https://www.codapet.com/",
		sort_order: 0,
	},
	{
		company: "Apxor Pvt. Ltd.",
		role: "SDE-I",
		start_date: "May 2023",
		end_date: "Dec 2024",
		description: [
			"Full-stack developer on a large-scale project alongside SDK, backend, frontend, QA and product teams.",
			"Architected reusable React components and algorithms to optimize the dashboard for scale.",
		],
		tech_stack: ["React", "TypeScript", "Zustand", "GitLab CI/CD"],
		company_url: "https://www.apxor.com/",
		sort_order: 1,
	},
	{
		company: "Infinite CercleX",
		role: "Junior Developer",
		start_date: "Sep 2022",
		end_date: "Apr 2023",
		description: [
			"Designed a scalable architecture for a full-stack project using React and Java Spring Boot.",
			"Achieved a 20% codebase reduction through refactoring and modularization.",
		],
		tech_stack: ["React", "Spring Boot", "Material UI"],
		company_url: "https://cerclex.com/",
		sort_order: 2,
	},
]

export interface ProjectItem {
	id?: string
	name: string
	description: string[]
	tech_stack: string[]
	url: string | null
	featured: boolean
	sort_order: number
}

export const staticProjects: ProjectItem[] = [
	{
		name: "New In-App Nudges Dashboard",
		description: [
			"No-code dashboard helping consumer app developers create in-app nudges to boost engagement, conversion and retention — a unified platform across Web, iOS and Android with config, simulator and analysis modules.",
		],
		tech_stack: [
			"React",
			"TypeScript",
			"TanStack Query",
			"Zustand",
			"Tailwind",
		],
		url: "https://engage.apxor.com/",
		featured: true,
		sort_order: 0,
	},
	{
		name: "In-App Nudges (Legacy)",
		description: [
			"Legacy dashboard for nudges, campaigns and surveys across Web, iOS and Android with configuration, simulator and analysis features.",
		],
		tech_stack: ["React", "Material UI v4", "React-Tracked"],
		url: "https://nudges.apxor.com/",
		featured: false,
		sort_order: 1,
	},
	{
		name: "EPR Dashboard",
		description: [
			"Web2/Web3 & blockchain-integrated dashboard for Extended Producer Responsibility, with brand, recycler and aggregator views and Solidity-backed certificates.",
		],
		tech_stack: ["React", "Material UI v5", "TanStack Charts"],
		url: "https://epr.cerclex.com/dashboard",
		featured: false,
		sort_order: 2,
	},
	{
		name: "AI Scheduling Agent",
		description: [
			"A conversational scheduling assistant built on the LLM agent-loop pattern — sign in with Google and it books calendar events by calling tools in a loop until the task is done, powered by Google Gemini.",
		],
		tech_stack: ["Next.js", "TypeScript", "Gemini", "Auth.js"],
		url: "https://ai-scheduling-agent-three.vercel.app/",
		featured: false,
		sort_order: 3,
	},
	{
		name: "CodaPet Rebrand",
		description: [
			"Led the visual rebrand of CodaPet's web applications — a modern, cohesive design language rolled out across the in-home pet care booking platform, serving owners and veterinarians nationwide.",
		],
		tech_stack: ["Next.js", "TypeScript", "Design System", "Tailwind"],
		url: "https://www.codapet.com/",
		featured: false,
		sort_order: 4,
	},
	{
		name: "@codapet/design-system",
		description: [
			"A comprehensive React component library — built and published to npm as CodaPet's shared design system, reused across every CodaPet app and built on Radix UI, Tailwind CSS and TypeScript.",
		],
		tech_stack: ["React", "TypeScript", "Radix UI", "Tailwind"],
		url: "https://www.npmjs.com/package/@codapet/design-system",
		featured: false,
		sort_order: 5,
	},
]

// Go / GoLang was intentionally removed from the entire site per the client.
// Guard against it re-entering via any data source (e.g. an un-migrated DB row).
const GO_TOKEN = /^go(?:lang)?$/i
export function stripGoTech<T extends { tech_stack: string[] }>(
	items: T[],
): T[] {
	return items.map(item => ({
		...item,
		tech_stack: item.tech_stack.filter(tech => !GO_TOKEN.test(tech.trim())),
	}))
}

// Derive a short source label (e.g. "Apxor", "CercleX") from a project URL.
export function projectSource(url: string | null): string {
	if (!url) return ""
	try {
		const host = new URL(url).hostname.replace(/^www\./, "")
		if (host.includes("apxor")) return "Apxor"
		if (host.includes("cerclex")) return "CercleX"
		if (host.includes("github")) return "GitHub"
		if (host.includes("vercel.app")) return "Live"
		if (host.includes("codapet")) return "CodaPet"
		if (host.includes("npmjs")) return "npm"
		const label = host.split(".")[0]
		return label.charAt(0).toUpperCase() + label.slice(1)
	} catch {
		return ""
	}
}

export const navItems = [
	{ id: "work", label: "work" },
	{ id: "experience", label: "experience" },
	{ id: "skills", label: "skills" },
	{ id: "github", label: "github" },
	{ id: "contact", label: "contact" },
]
