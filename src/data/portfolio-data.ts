export const personalInfo = {
	name: "Sumit Kumar Sah",
	title: "Full Stack Web Developer",
	location: "Hyderabad, Telangana, India",
	email: "sumitdashing1@gmail.com",
	phone: "+917656087001",
	linkedin: "https://www.linkedin.com/in/sumitkumarsah31/",
	github: "https://github.com/sumitsah31",
	githubUsername: "sumitsah31",
	resumeUrl:
		"https://drive.google.com/file/d/1FEECVCMqSMoO9MioWAmwf_GP9Req2eFt/view?usp=drive_link",
	bio: "Full Stack Developer with over two years of experience passionate about building scalable, robust web applications using React.js and Go (Golang). Seeking a challenging role to leverage my expertise in creating dynamic user interfaces and performant server-side logic, while contributing to innovative projects that drive business growth.",
}

export const skills = {
	frontend: [
		"React JS",
		"Redux",
		"React-Tracked",
		"TanStack Query",
		"TanStack Router",
		"Tailwind CSS",
	],
	backend: ["GoLang", "Node.js", "MongoDB"],
	languages: [
		"JavaScript",
		"TypeScript",
		"Java",
		"HTML/CSS",
		"GoLang",
	],
	tools: ["VS Code", "Docker", "Git", "GitLab", "CI/CD"],
}

export const education = {
	degree: "Bachelor in Science, Physics",
	period: "2014 - 2017",
	certification: "Full Stack Certification by Newton School",
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
		start_date: "January 2025",
		end_date: "Present",
		description: [
			"Redesigned all CodaPet web applications, delivering a modern and cohesive user experience across the platform.",
			"Built and published @codapet/design-system — a comprehensive, reusable design system package on npm used across all CodaPet apps.",
			"Developed and maintained the frontend for CodaPet's in-home pet euthanasia booking platform, serving pet owners and veterinarians nationwide.",
		],
		tech_stack: [
			"Next.js",
			"TypeScript",
			"Vercel",
			"Design System",
			"Tailwind CSS",
			"React",
		],
		company_url: "https://www.codapet.com/",
		sort_order: 0,
	},
	{
		company: "Apxor Private Limited",
		role: "Software Development Engineer-I",
		start_date: "May 2023",
		end_date: "December 2024",
		description: [
			"Work as a Full Stack Developer on a large-scale project with a dedicated team including SDK, backend, frontend, QA, and product specialists.",
			"Architected and designed reusable React components and algorithms for optimizing the dashboard, contributing to a more efficient and scalable system.",
		],
		tech_stack: [
			"React JS",
			"TypeScript",
			"Shadcn UI",
			"Zustand",
			"Redux",
			"TanStack Query",
			"Tailwind CSS",
			"GoLang",
			"GitLab CI/CD",
		],
		company_url: "https://www.apxor.com/",
		sort_order: 1,
	},
	{
		company: "Infinite Cercle X",
		role: "Junior Developer",
		start_date: "September 2022",
		end_date: "April 2023",
		description: [
			"Designed and implemented a scalable architecture for a full stack project using React JS and Java Spring Boot.",
			"Achieved a codebase reduction of 20% through effective refactoring and modularization strategies.",
		],
		tech_stack: [
			"React JS",
			"TypeScript",
			"Context API",
			"Material UI",
			"Spring Boot",
			"TanStack Libraries",
		],
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
			"No-code dashboard helping consumer app developers create in-app nudges to enhance user engagement, conversions, and retention.",
			"Unified platform for Web, iOS, and Android app platforms.",
			"Developed features including configuration, simulator, and analysis modules.",
		],
		tech_stack: [
			"React JS",
			"TypeScript",
			"Shadcn UI",
			"TanStack Query",
			"Tailwind CSS",
			"Zustand",
		],
		url: "https://engage.apxor.com/",
		featured: true,
		sort_order: 0,
	},
	{
		name: "In-App Nudges (Legacy)",
		description: [
			"Legacy dashboard for nudges, campaigns, and surveys.",
			"Unified platform supporting Web, iOS, and Android.",
			"Built configuration, simulator, and analysis features.",
		],
		tech_stack: [
			"React JS",
			"JavaScript",
			"Material UI V4",
			"React-Tracked",
			"TanStack Query",
		],
		url: "https://Nudges.apxor.com/",
		featured: false,
		sort_order: 1,
	},
	{
		name: "EPR Dashboard",
		description: [
			"Web2, Web3 and Blockchain integrated dashboard for Extended Producers Responsibility.",
			"Marketplace model addressing EPR liability of MNCs for waste management targets.",
			"Dashboards for brands, recyclers, and aggregators with deliveries, invoices, and reports.",
			"Integrated blockchain via Solidity network for transparency of waste recycling certificates.",
		],
		tech_stack: [
			"React JS",
			"TypeScript",
			"Material UI V5",
			"Context API",
			"TanStack Charts",
		],
		url: "https://epr.cerclex.com/dashboard",
		featured: false,
		sort_order: 2,
	},
]

export const navItems = [
	{ id: "hero", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "github", label: "GitHub" },
	{ id: "contact", label: "Contact" },
]
