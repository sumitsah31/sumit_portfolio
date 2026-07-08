import SectionWrapper from "@/components/layout/section-wrapper"
import GradientTile, { gradientVariants } from "@/components/ui/gradient-tile"
import MonoPill from "@/components/ui/mono-pill"
import SectionMarker from "@/components/ui/section-marker"
import {
	type ProjectItem,
	personalInfo,
	staticProjects,
} from "@/data/portfolio-data"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { useEffect, useState } from "react"

// Project items may carry an optional image_url from Supabase; fall back to gradient.
type ProjectWithImage = ProjectItem & { image_url?: string | null }

export default function Projects() {
	const [projects, setProjects] = useState<ProjectWithImage[]>(staticProjects)

	useEffect(() => {
		if (!isSupabaseConfigured) return
		supabase
			.from("projects")
			.select("*")
			.order("sort_order")
			.then(({ data }) => {
				if (data && data.length > 0) {
					setProjects(data as ProjectWithImage[])
				}
			})
	}, [])

	const featured = projects.find(p => p.featured)
	const others = projects.filter(p => !p.featured)

	return (
		<SectionWrapper id="projects">
			<SectionMarker name="projects" />
			<h2 className="mb-12 font-serif text-4xl italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
				Selected work.
			</h2>

			{/* Featured project — full width tile */}
			{featured && (
				<motion.a
					href={featured.url ?? "#"}
					target={featured.url ? "_blank" : undefined}
					rel="noopener noreferrer"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="group mb-6 flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface transition-all hover:border-accent-cyan/30"
				>
					<div className="relative aspect-[16/7] overflow-hidden">
						{featured.image_url ? (
							<img
								src={featured.image_url}
								alt={featured.name}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						) : (
							<GradientTile variant="peach" />
						)}
						<div className="absolute right-4 top-4">
							<MonoPill
								dot="orange"
								className="bg-black/40 backdrop-blur-md"
							>
								featured
							</MonoPill>
						</div>
					</div>
					<div className="flex flex-col gap-3 p-6 sm:p-8">
						<div className="flex items-start justify-between gap-4">
							<h3 className="font-serif text-3xl italic text-foreground sm:text-4xl">
								{featured.name}
							</h3>
							{featured.url && (
								<ArrowUpRight
									size={22}
									className="mt-2 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-cyan"
								/>
							)}
						</div>
						<ul className="flex flex-col gap-1.5">
							{featured.description.map((desc, i) => (
								<li
									key={i}
									className="text-sm leading-relaxed text-foreground/75 sm:text-base"
								>
									{desc}
								</li>
							))}
						</ul>
						<div className="mt-2 flex flex-wrap gap-2">
							{featured.tech_stack.map(tech => (
								<MonoPill key={tech}>{tech}</MonoPill>
							))}
						</div>
					</div>
				</motion.a>
			)}

			{/* Other projects — grid */}
			<div className="grid gap-4 md:grid-cols-2">
				{others.map((project, i) => (
					<motion.a
						key={project.name}
						href={project.url ?? "#"}
						target={project.url ? "_blank" : undefined}
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.05 }}
						viewport={{ once: true }}
						whileHover={{ y: -4 }}
						className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface transition-all hover:border-accent-cyan/30"
					>
						<div className="relative aspect-[16/9] overflow-hidden">
							{project.image_url ? (
								<img
									src={project.image_url}
									alt={project.name}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							) : (
								<GradientTile
									// rotate variants so each card has a different gradient (skip "peach" used by featured)
									variant={gradientVariants[(i + 1) % gradientVariants.length]}
								/>
							)}
						</div>
						<div className="flex flex-1 flex-col gap-3 p-5">
							<div className="flex items-start justify-between gap-3">
								<h3 className="font-serif text-xl italic text-foreground sm:text-2xl">
									{project.name}
								</h3>
								{project.url && (
									<ArrowUpRight
										size={18}
										className="mt-1 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan"
									/>
								)}
							</div>
							<ul className="flex flex-col gap-1 text-sm leading-relaxed text-foreground/70">
								{project.description.slice(0, 2).map((desc, j) => (
									<li key={j}>{desc}</li>
								))}
							</ul>
							<div className="mt-auto flex flex-wrap gap-1.5 pt-2">
								{project.tech_stack.slice(0, 5).map(tech => (
									<MonoPill key={tech}>{tech}</MonoPill>
								))}
							</div>
						</div>
					</motion.a>
				))}
			</div>

			{/* GitHub callout */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="mt-10 flex justify-center"
			>
				<a
					href={personalInfo.github}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent-cyan"
				>
					<Github size={14} />
					see more on github →
				</a>
			</motion.div>
		</SectionWrapper>
	)
}
