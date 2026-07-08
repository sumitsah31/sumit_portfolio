import SectionWrapper from "@/components/layout/section-wrapper"
import {
	type ProjectItem,
	projectSource,
	staticProjects,
	stripGoTech,
} from "@/data/portfolio-data"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"

function ProjectCard({
	project,
	featured,
}: {
	project: ProjectItem
	featured?: boolean
}) {
	const source = projectSource(project.url)
	const body = project.description.join(" ")

	return (
		<a
			href={project.url ?? undefined}
			target="_blank"
			rel="noopener noreferrer"
			className="block rounded-[14px] border border-line bg-surface px-[30px] py-7 transition-colors hover:border-[#e0a94a55] hover:bg-surface-hover"
		>
			<div className="mb-3.5 flex flex-wrap items-center gap-3">
				<h3
					className={`m-0 font-serif font-normal text-ink ${
						featured ? "text-[26px]" : "text-[23px]"
					}`}
				>
					{project.name}
				</h3>
				{featured && (
					<span className="rounded-[6px] border border-gold-tint-border bg-gold-tint-bg px-2 py-[3px] font-mono text-[10px] uppercase tracking-[0.06em] text-gold">
						Featured
					</span>
				)}
				{source && (
					<span className="ml-auto font-mono text-[12px] text-ink-dim">
						{source} ↗
					</span>
				)}
			</div>
			<p className="mb-4 max-w-[62em] text-[15px] leading-[1.6] text-ink-muted">
				{body}
			</p>
			<div className="flex flex-wrap gap-2">
				{project.tech_stack.map(tech => (
					<span
						key={tech}
						className="rounded-[6px] border border-line-chip bg-night px-2.5 py-[5px] font-mono text-[11px] text-ink-muted"
					>
						{tech}
					</span>
				))}
			</div>
		</a>
	)
}

export default function Projects() {
	const [projects, setProjects] = useState<ProjectItem[]>(() =>
		stripGoTech(staticProjects),
	)

	useEffect(() => {
		if (!isSupabaseConfigured) return
		supabase
			.from("projects")
			.select("*")
			.order("sort_order")
			.then(({ data }) => {
				if (data && data.length > 0) {
					setProjects(stripGoTech(data as ProjectItem[]))
				}
			})
	}, [])

	const featured = projects.find(p => p.featured)
	const others = projects.filter(p => !p.featured)

	return (
		<SectionWrapper
			id="work"
			className="pb-6 pt-20"
		>
			<div className="mb-9 flex items-baseline gap-[14px]">
				<span className="font-mono text-[13px] text-gold">01</span>
				<h2 className="m-0 font-serif text-[34px] font-normal sm:text-[46px]">
					Selected Work
				</h2>
			</div>

			<div className="flex flex-col gap-[18px]">
				{featured && (
					<ProjectCard
						project={featured}
						featured
					/>
				)}
				<div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
					{others.map(project => (
						<ProjectCard
							key={project.name}
							project={project}
						/>
					))}
				</div>
			</div>
		</SectionWrapper>
	)
}
