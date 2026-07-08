import { cn } from "@/lib/utils"

interface SectionMarkerProps {
	name: string
	className?: string
}

/**
 * `// section-name` muted mono divider rendered above each section title.
 */
export default function SectionMarker({ name, className }: SectionMarkerProps) {
	return (
		<p
			className={cn(
				"mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
				className,
			)}
		>
			<span className="text-accent-cyan/70">//</span> {name}
		</p>
	)
}
