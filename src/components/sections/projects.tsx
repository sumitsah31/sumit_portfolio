import SectionWrapper from "@/components/layout/section-wrapper"
import {
	type ProjectItem,
	personalInfo,
	staticProjects,
} from "@/data/portfolio-data"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useState } from "react"

export default function Projects() {
	const [projects, setProjects] = useState<ProjectItem[]>(staticProjects)

	useEffect(() => {
		if (!isSupabaseConfigured) return
		supabase
			.from("projects")
			.select("*")
			.order("sort_order")
			.then(({ data }) => {
				if (data && data.length > 0) {
					setProjects(data)
				}
			})
	}, [])

	const featured = projects.find(p => p.featured)
	const others = projects.filter(p => !p.featured)

	return (
		<SectionWrapper id="projects">
			<h2 className="mb-12 text-3xl font-bold sm:text-4xl lg:text-5xl">
				Proj
				<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
					ects
				</span>
			</h2>

			{/* Featured project */}
			{featured && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 sm:p-8"
				>
					<div className="mb-2 flex items-center gap-3">
						<h3 className="text-xl font-semibold text-white">{featured.name}</h3>
						{featured.url && (
							<a
								href={featured.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-violet-400 transition-colors hover:text-violet-300"
							>
								<ExternalLink size={16} />
							</a>
						)}
						<span className="ml-auto rounded-full bg-violet-500/20 px-3 py-0.5 text-xs font-medium text-violet-300">
							Featured
						</span>
					</div>

					<div className="mb-4 flex flex-wrap gap-2">
						{featured.tech_stack.map(tech => (
							<span
								key={tech}
								className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
							>
								{tech}
							</span>
						))}
					</div>

					<ul className="space-y-2">
						{featured.description.map((desc, i) => (
							<li
								key={i}
								className="flex gap-2 text-sm text-neutral-300"
							>
								<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500/50" />
								{desc}
							</li>
						))}
					</ul>
				</motion.div>
			)}

			{/* Other projects */}
			<div className="grid gap-6 md:grid-cols-2">
				{others.map((project, i) => (
					<motion.div
						key={project.name}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.1 }}
						viewport={{ once: true }}
						whileHover={{ y: -4 }}
						className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
					>
						<div className="mb-2 flex items-center gap-3">
							<h3 className="font-semibold text-white">{project.name}</h3>
							{project.url && (
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-violet-400 transition-colors hover:text-violet-300"
								>
									<ExternalLink size={14} />
								</a>
							)}
						</div>

						<div className="mb-4 flex flex-wrap gap-2">
							{project.tech_stack.map(tech => (
								<span
									key={tech}
									className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
								>
									{tech}
								</span>
							))}
						</div>

						<ul className="space-y-1.5">
							{project.description.map((desc, j) => (
								<li
									key={j}
									className="flex gap-2 text-sm text-neutral-300"
								>
									<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500/50" />
									{desc}
								</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>

			{/* GitHub callout */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="mt-8 text-center"
			>
				<a
					href={personalInfo.github}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-violet-400"
				>
					<Github size={16} />
					View more projects on GitHub
				</a>
			</motion.div>
		</SectionWrapper>
	)
}
