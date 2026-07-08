import homeImage from "@/assets/homeImage.jpg"
import SectionWrapper from "@/components/layout/section-wrapper"
import MonoPill from "@/components/ui/mono-pill"
import SectionMarker from "@/components/ui/section-marker"
import { education, personalInfo } from "@/data/portfolio-data"
import { motion } from "framer-motion"

type AccentColor = "cyan" | "pink" | "orange" | "lime"

const stats: { value: string; label: string; accent: AccentColor }[] = [
	{ value: "2+", label: "years shipping", accent: "cyan" },
	{ value: "10+", label: "projects", accent: "pink" },
	{ value: "3", label: "companies", accent: "orange" },
	{ value: "∞", label: "coffee", accent: "lime" },
]

const accentText: Record<AccentColor, string> = {
	cyan: "text-accent-cyan",
	pink: "text-accent-pink",
	orange: "text-accent-orange",
	lime: "text-accent-lime",
}

export default function About() {
	return (
		<SectionWrapper id="about">
			<SectionMarker name="about" />
			<h2 className="mb-10 font-serif text-4xl italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
				A brief intro <span className="text-muted-foreground">—</span>
			</h2>

			<div className="grid gap-12 lg:grid-cols-[auto,1fr] lg:gap-16">
				{/* Photo */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="relative w-full max-w-[260px] sm:w-64"
				>
					<div className="absolute -inset-1 rounded-2xl bg-gradient-cyan opacity-30 blur-md" />
					<img
						src={homeImage}
						alt={personalInfo.name}
						className="relative aspect-[4/5] w-full rounded-2xl object-cover"
					/>
				</motion.div>

				{/* Bio */}
				<div className="flex flex-col gap-6">
					<p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
						I'm Sumit. {personalInfo.bio}
					</p>
					<p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
						Currently shipping{" "}
						<a
							href="https://www.codapet.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline decoration-accent-cyan/60 underline-offset-4 hover:text-accent-cyan"
						>
							CodaPet
						</a>{" "}
						— before that, dashboards, design systems, and a handful of
						side-projects. I care about fast, quiet software, good typography,
						and building things with taste.
					</p>

					{/* Education */}
					<div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
						<MonoPill dot="orange">{education.degree}</MonoPill>
						<MonoPill dot="cyan">{education.period}</MonoPill>
						<MonoPill dot="lime">{education.certification}</MonoPill>
					</div>
				</div>
			</div>

			{/* Stat blocks */}
			<motion.div
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={{
					hidden: { opacity: 0 },
					show: { opacity: 1, transition: { staggerChildren: 0.08 } },
				}}
				className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/[0.06] pt-12 sm:grid-cols-4"
			>
				{stats.map(s => (
					<motion.div
						key={s.label}
						variants={{
							hidden: { opacity: 0, y: 12 },
							show: { opacity: 1, y: 0 },
						}}
					>
						<p
							className={`font-serif text-5xl italic leading-none sm:text-6xl ${accentText[s.accent]}`}
						>
							{s.value}
						</p>
						<p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
							{s.label}
						</p>
					</motion.div>
				))}
			</motion.div>
		</SectionWrapper>
	)
}
