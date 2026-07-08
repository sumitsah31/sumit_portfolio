import GradientTile from "@/components/ui/gradient-tile"
import Marquee from "@/components/ui/marquee"
import MonoPill from "@/components/ui/mono-pill"
import { personalInfo } from "@/data/portfolio-data"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

type DotColor = "cyan" | "orange" | "pink" | "lime" | "violet"

const stackTagsRowA: { label: string; dot: DotColor }[] = [
	{ label: "design", dot: "cyan" },
	{ label: "code", dot: "orange" },
	{ label: "founding", dot: "pink" },
	{ label: "next.js", dot: "lime" },
	{ label: "supabase", dot: "violet" },
	{ label: "react", dot: "cyan" },
	{ label: "typescript", dot: "orange" },
	{ label: "go", dot: "pink" },
	{ label: "tailwind", dot: "lime" },
	{ label: "writing", dot: "violet" },
	{ label: "framer-motion", dot: "cyan" },
	{ label: "supabase", dot: "orange" },
	{ label: "vercel", dot: "pink" },
]

const stackTagsRowB: { label: string; dot: DotColor }[] = [
	{ label: "figma", dot: "violet" },
	{ label: "design systems", dot: "lime" },
	{ label: "tanstack query", dot: "cyan" },
	{ label: "zustand", dot: "orange" },
	{ label: "tailwind css", dot: "pink" },
	{ label: "shadcn ui", dot: "lime" },
	{ label: "node.js", dot: "violet" },
	{ label: "mongodb", dot: "cyan" },
	{ label: "docker", dot: "orange" },
	{ label: "ci/cd", dot: "pink" },
	{ label: "git", dot: "lime" },
	{ label: "java", dot: "violet" },
]

export default function Hero() {
	const scrollToSection = useScrollToSection()

	return (
		<section
			id="hero"
			className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
		>
			{/* Subtle grid pattern */}
			<div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid-40 opacity-50" />

			{/* Soft accent orbs */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute right-[10%] top-[15%] h-72 w-72 rounded-full bg-accent-cyan/[0.06] blur-[140px]" />
				<div className="absolute bottom-[10%] left-[5%] h-72 w-72 rounded-full bg-accent-orange/[0.05] blur-[140px]" />
			</div>

			<div className="relative z-10 mx-auto w-full max-w-6xl">
				{/* Top mono availability tag */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-10"
				>
					<MonoPill
						dot="lime"
						className="text-[11px]"
					>
						available · selectively
					</MonoPill>
				</motion.div>

				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.05 }}
					className="max-w-5xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]"
				>
					I build{" "}
					<span className="relative inline-block font-serif font-normal italic">
						products
						<svg
							aria-hidden
							viewBox="0 0 240 12"
							preserveAspectRatio="none"
							className="absolute -bottom-2 left-0 right-0 h-3 w-full"
						>
							<path
								d="M2 8 C 60 2, 120 12, 238 4"
								fill="none"
								stroke="hsl(var(--accent-orange))"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</span>{" "}
					people love and tinker
					<br />
					on trips in between.
				</motion.h1>

				{/* Subhead */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
				>
					{personalInfo.title} based in {personalInfo.location.split(",")[0]}.
					Currently shipping at{" "}
					<a
						href="https://www.codapet.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline decoration-accent-cyan/60 underline-offset-4 transition-colors hover:text-accent-cyan"
					>
						CodaPet
					</a>
					. I care about fast, quiet software, good typography, and building
					things with taste.
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.25 }}
					className="mt-10 flex flex-wrap items-center gap-3"
				>
					<button
						onClick={() => scrollToSection("projects")}
						className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent-cyan px-5 text-sm font-medium text-[#0a0a0f] shadow-sm shadow-accent-cyan/20 transition-all hover:bg-accent-cyan/90 hover:shadow-md hover:shadow-accent-cyan/30"
					>
						See selected work
						<ArrowRight size={16} />
					</button>
					<button
						onClick={() => scrollToSection("about")}
						className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/[0.08] bg-surface px-5 font-mono text-xs uppercase tracking-wider text-foreground/80 transition-all hover:border-accent-cyan/30 hover:bg-surface-2 hover:text-foreground"
					>
						read the brief
					</button>
					<a
						href={personalInfo.resumeUrl}
						download="Sumit_Kumar_Sah_Resume.pdf"
						className="inline-flex h-11 items-center gap-2 rounded-xl px-3 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent-cyan"
					>
						<Download size={14} />
						download cv
					</a>
				</motion.div>
			</div>

			{/* Scrolling stack tag bands — full-bleed below hero content */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.5 }}
				className="relative z-10 -mx-4 mt-16 flex w-screen max-w-[100vw] flex-col gap-3 sm:-mx-6 sm:gap-4 lg:-mx-8"
			>
				<Marquee
					items={stackTagsRowA.map(t => (
						<MonoPill
							key={t.label}
							dot={t.dot}
						>
							{t.label}
						</MonoPill>
					))}
				/>
				<Marquee
					reverse
					items={stackTagsRowB.map(t => (
						<MonoPill
							key={t.label}
							dot={t.dot}
						>
							{t.label}
						</MonoPill>
					))}
				/>
			</motion.div>

			{/* Decorative gradient block right side (mirrors figma's tilted gradient card) */}
			<motion.div
				initial={{ opacity: 0, rotate: -6, x: 40 }}
				animate={{ opacity: 1, rotate: -8, x: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className="pointer-events-none absolute right-6 top-28 hidden h-44 w-44 overflow-hidden rounded-2xl shadow-2xl shadow-black/40 lg:block"
				style={{ transformOrigin: "center" }}
			>
				<GradientTile variant="violet" />
			</motion.div>
		</section>
	)
}
