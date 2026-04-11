import { personalInfo } from "@/data/portfolio-data"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"
import { motion } from "framer-motion"
import {
	ArrowDown,
	Download,
	Github,
	Linkedin,
	Mail,
	MapPin,
	Phone,
} from "lucide-react"

const floatingIcons = [
	{ label: "React", delay: 0 },
	{ label: "TypeScript", delay: 0.8 },
	{ label: "Go", delay: 1.6 },
	{ label: "Node.js", delay: 2.4 },
	{ label: "Tailwind", delay: 3.2 },
]

export default function Hero() {
	const scrollToSection = useScrollToSection()

	return (
		<section
			id="hero"
			className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
		>
			{/* Background gradient orbs */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-[128px]" />
				<div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-[128px]" />
			</div>

			{/* Grid pattern */}
			<div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid-40 opacity-40" />

			{/* Floating tech labels */}
			<div className="pointer-events-none absolute inset-0 hidden lg:block">
				{floatingIcons.map((item, i) => (
					<motion.div
						key={item.label}
						className="absolute rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-neutral-400 backdrop-blur-sm"
						style={{
							top: `${20 + i * 14}%`,
							right: `${8 + (i % 3) * 6}%`,
						}}
						animate={{ y: [0, -10, 0] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							delay: item.delay,
							ease: "easeInOut",
						}}
					>
						{item.label}
					</motion.div>
				))}
			</div>

			<div className="relative z-10 mx-auto max-w-4xl text-center">
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-4 text-sm font-medium tracking-widest text-neutral-400 sm:text-base"
				>
					HI THERE, I'M
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
				>
					<span className="bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
						{personalInfo.name}
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mb-6 text-xl font-medium text-neutral-300 sm:text-2xl md:text-3xl"
				>
					{personalInfo.title}
					<span className="text-violet-400">.</span>
				</motion.p>

				{/* Animated divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="mx-auto mb-6 h-px w-48 bg-gradient-to-r from-transparent via-violet-500 to-transparent"
				/>

				{/* Location */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					className="mb-8 flex items-center justify-center gap-2 text-sm text-neutral-400"
				>
					<MapPin size={14} />
					<span>{personalInfo.location}</span>
				</motion.div>

				{/* Social icons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="mb-10 flex items-center justify-center gap-4"
				>
					{[
						{
							icon: Mail,
							href: `mailto:${personalInfo.email}`,
							label: "Email",
						},
						{
							icon: Phone,
							href: `tel:${personalInfo.phone}`,
							label: "Phone",
						},
						{
							icon: Linkedin,
							href: personalInfo.linkedin,
							label: "LinkedIn",
						},
						{
							icon: Github,
							href: personalInfo.github,
							label: "GitHub",
						},
					].map(item => (
						<a
							key={item.label}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/10"
						>
							<item.icon
								size={18}
								className="text-neutral-400 transition-colors group-hover:text-violet-400"
							/>
						</a>
					))}
				</motion.div>

				{/* CTA buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className="flex flex-col items-center justify-center gap-4 sm:flex-row"
				>
					<button
						onClick={() => scrollToSection("projects")}
						className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-violet-500/25"
					>
						View My Work
					</button>
					<a
						href={personalInfo.resumeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-neutral-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
					>
						<Download size={16} />
						Download CV
					</a>
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.button
				onClick={() => scrollToSection("about")}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
				>
					<ArrowDown
						size={20}
						className="text-neutral-500"
					/>
				</motion.div>
			</motion.button>
		</section>
	)
}
