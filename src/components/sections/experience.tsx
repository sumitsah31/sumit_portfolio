import SectionWrapper from "@/components/layout/section-wrapper"
import {
	type ExperienceItem,
	staticExperiences,
} from "@/data/portfolio-data"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export default function Experience() {
	const [experiences, setExperiences] =
		useState<ExperienceItem[]>(staticExperiences)

	useEffect(() => {
		if (!isSupabaseConfigured) return
		supabase
			.from("experiences")
			.select("*")
			.order("sort_order")
			.then(({ data }) => {
				if (data && data.length > 0) {
					setExperiences(data)
				}
			})
	}, [])

	return (
		<SectionWrapper id="experience">
			<h2 className="mb-12 text-3xl font-bold sm:text-4xl lg:text-5xl">
				Experi
				<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
					ence
				</span>
			</h2>

			<div className="relative">
				{/* Timeline line */}
				<div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-violet-500/50 via-indigo-500/50 to-transparent lg:left-8" />

				<div className="flex flex-col gap-12">
					{experiences.map((exp, i) => (
						<motion.div
							key={exp.company + i}
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							viewport={{ once: true }}
							className="relative pl-12 lg:pl-20"
						>
							{/* Timeline dot */}
							<div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-violet-500 bg-[#0a0a0f] lg:left-6.5">
								<div className="absolute inset-0 animate-pulse-glow rounded-full bg-violet-500/40" />
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-violet-500/30">
								{/* Header */}
								<div className="mb-2 flex flex-wrap items-center gap-3">
									<h3 className="text-lg font-semibold text-white">
										{exp.company}
									</h3>
									{exp.company_url && (
										<a
											href={exp.company_url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-violet-400 transition-colors hover:text-violet-300"
										>
											<ExternalLink size={14} />
										</a>
									)}
								</div>

								<p className="mb-1 text-sm font-medium text-violet-300">
									{exp.role}
								</p>
								<p className="mb-4 text-xs text-neutral-500">
									{exp.start_date} — {exp.end_date}
								</p>

								{/* Description */}
								<ul className="mb-4 space-y-2">
									{exp.description.map((desc, j) => (
										<li
											key={j}
											className="flex gap-2 text-sm text-neutral-300"
										>
											<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500/50" />
											{desc}
										</li>
									))}
								</ul>

								{/* Tech stack */}
								<div className="flex flex-wrap gap-2">
									{exp.tech_stack.map(tech => (
										<span
											key={tech}
											className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</SectionWrapper>
	)
}
