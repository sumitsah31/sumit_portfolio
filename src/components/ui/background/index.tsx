import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type HTMLAttributes } from "react"

const backgroundVariants = cva(
	[
		// Base Classes
		"",
	],
	{
		variants: {
			border: {
				true: "border-neat border",
				false: "",
			},
			rounded: {
				true: "rounded-[20px]",
				false: "",
				full: "rounded-full",
			},
			shadow: {
				true: "shadow-custom",
				false: "",
				inner: "shadow-inner",
				custom: "shadow-custom",
			},
			variant: {
				dotted: "bg-dot-slate-300/50",
				gridSmall: "bg-grid-small-slate-300/50",
				gridLarge: "bg-grid-slate-200/50",
				transparent: "bg-transparent",
				paper: "bg-white",
				dim: "bg-slate-50",
			},
		},
		defaultVariants: {
			border: true,
			rounded: true,
			shadow: false,
			variant: "paper",
		},
	},
)

interface BackgroundProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof backgroundVariants> {}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(
	(props, forwardedRef) => {
		const { children, className, shadow, border, rounded, variant, ...rest } =
			props

		return (
			<div
				{...rest}
				ref={forwardedRef}
				className={cn(
					backgroundVariants({ shadow, border, rounded, variant }),
					className,
				)}
			>
				{children}
			</div>
		)
	},
)

export default Background
