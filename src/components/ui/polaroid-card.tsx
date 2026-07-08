import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { type ReactNode } from "react"
import GradientTile, { type GradientVariant } from "./gradient-tile"

interface PolaroidCardProps {
	imageSrc?: string | null
	imageAlt?: string
	title: string
	subtitle?: string
	footer?: ReactNode
	index?: number
	gradient?: GradientVariant
	className?: string
}

// Slight rotation per index for the polaroid stack effect.
const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"]

/**
 * Slightly-tilted polaroid card.
 * - Image header (real photo if `imageSrc`, gradient fallback otherwise)
 * - Serif italic title
 * - Mono subtitle (e.g. date)
 * - Optional footer (action pills)
 */
export default function PolaroidCard({
	imageSrc,
	imageAlt,
	title,
	subtitle,
	footer,
	index = 0,
	gradient,
	className,
}: PolaroidCardProps) {
	const rotation = rotations[index % rotations.length]

	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			whileHover={{ rotate: 0, y: -4 }}
			transition={{ duration: 0.4, delay: index * 0.05 }}
			viewport={{ once: true, margin: "-50px" }}
			className={cn(
				"group flex flex-col gap-3 rounded-2xl border border-white/10 bg-surface p-3 shadow-lg shadow-black/30",
				rotation,
				className,
			)}
		>
			<div className="aspect-[4/3] overflow-hidden rounded-xl">
				{imageSrc ? (
					<img
						src={imageSrc}
						alt={imageAlt ?? title}
						loading="lazy"
						className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				) : (
					<GradientTile
						index={index}
						variant={gradient}
					/>
				)}
			</div>

			<div className="px-2 pb-1">
				<p className="font-serif text-lg italic text-foreground">{title}</p>
				{subtitle && (
					<p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
						{subtitle}
					</p>
				)}
				{footer && <div className="mt-3">{footer}</div>}
			</div>
		</motion.div>
	)
}
