import { cn } from "@/lib/utils"

interface TerminalHeaderProps {
	path?: string
	className?: string
	showDot?: boolean
}

/**
 * Terminal-style prompt header.
 * Renders: ● ~/sumit /<path>
 *
 * - Lime status dot (live)
 * - Cyan `~/sumit`
 * - Muted `/path` suffix
 */
export default function TerminalHeader({
	path = "/menu",
	className,
	showDot = true,
}: TerminalHeaderProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-2 font-mono text-sm",
				className,
			)}
		>
			{showDot && (
				<span
					aria-hidden
					className="relative inline-block h-2 w-2 rounded-full bg-accent-lime"
				>
					<span className="absolute inset-0 animate-pulse-glow rounded-full bg-accent-lime" />
				</span>
			)}
			<span className="text-muted-foreground">~/</span>
			<span className="-ml-2 text-accent-cyan">sumit</span>
			<span className="text-muted-foreground">{path}</span>
		</span>
	)
}
