import SectionWrapper from "@/components/layout/section-wrapper"
import {
	type ExperienceItem,
	staticExperiences,
	stripGoTech,
} from "@/data/portfolio-data"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function Experience() {
	const [experiences, setExperiences] = useState<ExperienceItem[]>(() =>
		stripGoTech(staticExperiences),
	)

	useEffect(() => {
		if (!isSupabaseConfigured) return
		supabase
			.from("experiences")
			.select("*")
			.order("sort_order")
			.then(({ data }) => {
				if (data && data.length > 0) {
					setExperiences(stripGoTech(data as ExperienceItem[]))
				}
			})
	}, [])

	return (
		<SectionWrapper
			id="experience"
			className="pb-6 pt-16"
		>
			<div className="mb-9 flex items-baseline gap-[14px]">
				<span className="font-mono text-[13px] text-gold">02</span>
				<h2 className="m-0 font-serif text-[34px] font-normal sm:text-[46px]">
					Experience
				</h2>
			</div>

			<div className="relative flex flex-col gap-[34px] pl-[30px]">
				{/* Rail */}
				<div className="absolute bottom-1.5 left-1 top-1.5 w-px bg-[linear-gradient(#e0a94a,#e0a94a33,transparent)]" />

				{experiences.map((exp, i) => (
					<div
						key={exp.company + i}
						className="relative"
					>
						{/* Dot */}
						<div
							className={cn(
								"absolute left-[-30px] top-1.5 h-[9px] w-[9px] rounded-full",
								i === 0
									? "bg-gold shadow-[0_0_0_4px_#2a2115]"
									: "bg-[#4a453e] shadow-[0_0_0_4px_#201d19]",
							)}
						/>

						<div className="mb-3 flex flex-wrap items-baseline gap-3">
							<h3 className="m-0 font-serif text-[24px] font-normal text-ink">
								{exp.company}
							</h3>
							<span className="font-mono text-[12px] text-gold">
								{exp.role}
							</span>
							<span className="ml-auto font-mono text-[12px] text-ink-dim">
								{exp.start_date} — {exp.end_date}
							</span>
						</div>

						<ul className="m-0 mb-3.5 flex list-none flex-col gap-2 p-0">
							{exp.description.map((desc, j) => (
								<li
									key={j}
									className="flex gap-2.5 text-[14.5px] leading-[1.55] text-ink-muted"
								>
									<span className="shrink-0 text-gold">▹</span>
									{desc}
								</li>
							))}
						</ul>

						<div className="flex flex-wrap gap-2">
							{exp.tech_stack.map(tech => (
								<span
									key={tech}
									className="rounded-[6px] border border-line-chip bg-surface px-[9px] py-1 font-mono text-[11px] text-ink-muted"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</SectionWrapper>
	)
}
