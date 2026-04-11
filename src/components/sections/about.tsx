import SectionWrapper from "@/components/layout/section-wrapper"
import { education, personalInfo, skills } from "@/data/portfolio-data"
import { motion } from "framer-motion"
import { Code2, Database, GraduationCap, Terminal, Wrench } from "lucide-react"
import homeImage from "@/assets/homeImage.jpg"

const skillCategories = [
	{
		title: "Frontend",
		icon: Code2,
		items: skills.frontend,
	},
	{
		title: "Backend",
		icon: Database,
		items: skills.backend,
	},
	{
		title: "Languages",
		icon: Terminal,
		items: skills.languages,
	},
	{
		title: "Tools",
		icon: Wrench,
		items: skills.tools,
	},
]

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
}

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
}

export default function About() {
	return (
		<SectionWrapper id="about">
			<h2 className="mb-12 text-3xl font-bold sm:text-4xl lg:text-5xl">
				About{" "}
				<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
					Me
				</span>
			</h2>

			<div className="grid gap-12 lg:grid-cols-2">
				{/* Left: Photo + Bio */}
				<div className="flex flex-col gap-6">
					<div className="relative mx-auto w-48 shrink-0 sm:mx-0 sm:w-56">
						<div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 opacity-50 blur-sm" />
						<img
							src={homeImage}
							alt={personalInfo.name}
							className="relative rounded-2xl object-cover"
						/>
					</div>
					<p className="text-base leading-relaxed text-neutral-300">
						{personalInfo.bio}
					</p>
				</div>

				{/* Right: Skill cards */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 gap-4 sm:grid-cols-2"
				>
					{skillCategories.map(cat => (
						<motion.div
							key={cat.title}
							variants={item}
							className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-violet-500/30"
						>
							<div className="mb-3 flex items-center gap-2">
								<cat.icon
									size={18}
									className="text-violet-400"
								/>
								<h3 className="font-semibold text-white">{cat.title}</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{cat.items.map(skill => (
									<span
										key={skill}
										className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
									>
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Education */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-8"
			>
				<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
					<GraduationCap
						size={20}
						className="mt-0.5 shrink-0 text-violet-400"
					/>
					<div>
						<p className="font-medium text-white">{education.degree}</p>
						<p className="text-sm text-neutral-400">{education.period}</p>
					</div>
				</div>
				<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
					<GraduationCap
						size={20}
						className="mt-0.5 shrink-0 text-violet-400"
					/>
					<div>
						<p className="font-medium text-white">{education.certification}</p>
					</div>
				</div>
			</motion.div>
		</SectionWrapper>
	)
}
