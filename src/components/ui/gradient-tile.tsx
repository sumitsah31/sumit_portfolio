import { cn } from "@/lib/utils"

export type GradientVariant = "peach" | "cyan" | "violet" | "lime" | "sunset"

interface GradientTileProps {
	variant?: GradientVariant
	className?: string
	index?: number
}

const variantClass: Record<GradientVariant, string> = {
	peach: "bg-gradient-peach",
	cyan: "bg-gradient-cyan",
	violet: "bg-gradient-violet",
	lime: "bg-gradient-lime",
	sunset: "bg-gradient-sunset",
}

const variants: GradientVariant[] = [
	"peach",
	"cyan",
	"violet",
	"lime",
	"sunset",
]

/**
 * Solid gradient tile used as a fallback when a project/travel card has no image.
 * Pass `variant` directly, or `index` to deterministically pick one from the rotation.
 */
export default function GradientTile({
	variant,
	className,
	index = 0,
}: GradientTileProps) {
	const resolved = variant ?? variants[index % variants.length]
	return (
		<div
			aria-hidden
			className={cn("h-full w-full", variantClass[resolved], className)}
		/>
	)
}

export { variants as gradientVariants }
