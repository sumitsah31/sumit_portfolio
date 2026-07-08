import { cn } from "@/lib/utils"
import { type ReactNode } from "react"

type DotColor = "cyan" | "orange" | "pink" | "lime" | "violet" | "none"

interface MonoPillProps {
	children: ReactNode
	className?: string
	dot?: DotColor
	as?: "span" | "button" | "a"
	href?: string
	onClick?: () => void
}

const dotClass: Record<DotColor, string> = {
	cyan: "bg-accent-cyan",
	orange: "bg-accent-orange",
	pink: "bg-accent-pink",
	lime: "bg-accent-lime",
	violet: "bg-accent-violet",
	none: "",
}

/**
 * Small mono-text pill used for tags, dates, and ghost buttons.
 *
 * Visual: hairline border, surface bg, mono text, optional colored dot prefix.
 */
export default function MonoPill({
	children,
	className,
	dot = "none",
	as = "span",
	href,
	onClick,
}: MonoPillProps) {
	const classes = cn(
		"inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface px-3 py-1 font-mono text-xs text-foreground/80 transition-colors",
		(as === "a" || as === "button") &&
			"hover:border-accent-cyan/40 hover:bg-surface-2 hover:text-foreground",
		className,
	)

	const content = (
		<>
			{dot !== "none" && (
				<span
					aria-hidden
					className={cn("h-1.5 w-1.5 rounded-full", dotClass[dot])}
				/>
			)}
			{children}
		</>
	)

	if (as === "a") {
		return (
			<a
				href={href}
				className={classes}
				target="_blank"
				rel="noopener noreferrer"
			>
				{content}
			</a>
		)
	}
	if (as === "button") {
		return (
			<button
				onClick={onClick}
				className={classes}
				type="button"
			>
				{content}
			</button>
		)
	}
	return <span className={classes}>{content}</span>
}
