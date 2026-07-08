import { cn } from "@/lib/utils"
import { type ReactNode } from "react"

interface MarqueeProps {
	items: ReactNode[]
	className?: string
	/** Tailwind gap class applied between items (and across the loop seam). */
	gapClassName?: string
	reverse?: boolean
	pauseOnHover?: boolean
	/** Show soft fade masks at the left/right edges. Default: true */
	fadeEdges?: boolean
}

/**
 * Continuously-scrolling horizontal band.
 *
 * Items are rendered twice (second copy is aria-hidden) and the animated row
 * is translated by -50% so the loop is seamless. The same `gapClassName` is
 * applied within each copy and as right-padding so the seam matches.
 */
export default function Marquee({
	items,
	className,
	gapClassName = "gap-2",
	reverse,
	pauseOnHover = true,
	fadeEdges = true,
}: MarqueeProps) {
	const renderRow = (hidden: boolean) => (
		<ul
			aria-hidden={hidden || undefined}
			className={cn("flex shrink-0 items-center pr-2", gapClassName)}
		>
			{items.map((item, i) => (
				<li
					key={i}
					className="shrink-0"
				>
					{item}
				</li>
			))}
		</ul>
	)

	return (
		<div
			className={cn(
				"group relative flex w-full overflow-hidden",
				fadeEdges &&
					"[mask-image:linear-gradient(to_right,transparent_0,#000_6%,#000_94%,transparent_100%)]",
				className,
			)}
		>
			<div
				className={cn(
					"flex shrink-0 items-center",
					gapClassName,
					reverse ? "animate-marquee-reverse" : "animate-marquee",
					pauseOnHover && "group-hover:[animation-play-state:paused]",
				)}
			>
				{renderRow(false)}
				{renderRow(true)}
			</div>
		</div>
	)
}
