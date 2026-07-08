import SectionWrapper from "@/components/layout/section-wrapper"
import MonoPill from "@/components/ui/mono-pill"
import SectionMarker from "@/components/ui/section-marker"
import { type ExperienceItem, staticExperiences } from "@/data/portfolio-data"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

// Compact "MMM YYYY" display for the timeline left rail.
const shortDate = (d: string) => {
	if (!d || d.toLowerCase() === "present") return "Present"
	// "January 2025" -> "Jan 2025"; "May 2023" -> "May 2023"
	const parts = d.trim().split(/\s+/)
	if (parts.length === 2) {
		return `${parts[0].slice(0, 3)} ${parts[1]}`
	}
	return d
}

const MONTHS: Record<string, number> = {
	january: 0,
	february: 1,
	march: 2,
	april: 3,
	may: 4,
	june: 5,
	july: 6,
	august: 7,
	september: 8,
	october: 9,
	november: 10,
	december: 11,
}

// Parse "May 2023" / "January 2025" / "Present" into a Date.
const parseExperienceDate = (raw: string): Date => {
	if (!raw || raw.toLowerCase() === "present") return new Date()
	const parts = raw.trim().split(/\s+/)
	if (parts.length === 2) {
		const month = MONTHS[parts[0].toLowerCase()] ?? 0
		const year = parseInt(parts[1], 10)
		if (!Number.isNaN(year)) return new Date(year, month, 1)
	}
	return new Date()
}

// Years from earliest experience start to today, rounded to nearest whole year.
// Uses ceil when there's an active "Present" role so partial years count.
const totalYearsOfExperience = (items: ExperienceItem[]): number => {
	if (items.length === 0) return 0
	const earliestStart = Math.min(
		...items.map(e => parseExperienceDate(e.start_date).getTime()),
	)
	const yearsFloat =
		(Date.now() - earliestStart) / (1000 * 60 * 60 * 24 * 365.25)
	const hasActiveRole = items.some(
		e => (e.end_date || "").toLowerCase() === "present",
	)
	const years = hasActiveRole ? Math.ceil(yearsFloat) : Math.round(yearsFloat)
	return Math.max(years, 0)
}

const NUMBER_WORDS = [
	"Zero",
	"One",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten",
	"Eleven",
	"Twelve",
	"Thirteen",
	"Fourteen",
	"Fifteen",
	"Sixteen",
	"Seventeen",
	"Eighteen",
	"Nineteen",
	"Twenty",
]

const yearsLabel = (n: number): string => {
	const word = NUMBER_WORDS[n] ?? String(n)
	return `${word} ${n === 1 ? "year" : "years"}`
}

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

	const years = totalYearsOfExperience(experiences)

	return (
		<SectionWrapper id="experience">
			<SectionMarker name="experience" />
			<h2 className="mb-12 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
				{yearsLabel(years)},{" "}
				<span className="font-serif font-normal italic">in résumé form.</span>
			</h2>

			<div className="flex flex-col">
				{experiences.map((exp, i) => (
					<motion.div
						key={exp.company + i}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: i * 0.05 }}
						viewport={{ once: true }}
						className="grid grid-cols-1 gap-2 border-b border-white/[0.06] py-8 sm:grid-cols-[180px,1fr] sm:gap-8 sm:py-10"
					>
						{/* Date column */}
						<div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
							{shortDate(exp.start_date)}
							{" — "}
							{shortDate(exp.end_date)}
						</div>

						{/* Body */}
						<div className="flex flex-col gap-3">
							<div className="flex flex-wrap items-center gap-3">
								<h3 className="font-serif text-2xl italic text-foreground sm:text-3xl">
									{exp.company}
								</h3>
								{exp.company_url && (
									<a
										href={exp.company_url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground transition-colors hover:text-accent-cyan"
										aria-label={`${exp.company} website`}
									>
										<ExternalLink size={14} />
									</a>
								)}
							</div>
							<p className="font-mono text-xs uppercase tracking-wider text-accent-cyan/80">
								{exp.role}
							</p>

							<ul className="flex flex-col gap-2 pt-1">
								{exp.description.map((desc, j) => (
									<li
										key={j}
										className="flex gap-3 text-sm leading-relaxed text-foreground/75 sm:text-base"
									>
										<span
											aria-hidden
											className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60"
										/>
										{desc}
									</li>
								))}
							</ul>

							{exp.tech_stack.length > 0 && (
								<div className="mt-2 flex flex-wrap gap-2">
									{exp.tech_stack.map(tech => (
										<MonoPill key={tech}>{tech}</MonoPill>
									))}
								</div>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</SectionWrapper>
	)
}
