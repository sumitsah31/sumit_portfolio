import SectionWrapper from "@/components/layout/section-wrapper"
import SectionMarker from "@/components/ui/section-marker"
import { personalInfo } from "@/data/portfolio-data"
import { GitHubCalendar } from "react-github-calendar"

// Cyan ramp: bg → light → primary cyan
const theme = {
	dark: ["#13131b", "#155e75", "#0e7490", "#06b6d4", "#22d3ee"],
}

export default function GitHub() {
	return (
		<SectionWrapper id="github">
			<SectionMarker name="commits" />
			<h2 className="mb-12 font-serif text-4xl italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
				Quietly shipping.
			</h2>

			<div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-surface p-6 sm:p-8">
				<GitHubCalendar
					username={personalInfo.githubUsername}
					theme={theme}
					colorScheme="dark"
					blockSize={13}
					blockMargin={4}
					fontSize={13}
				/>
			</div>

			<p className="mt-4 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
				<a
					href={personalInfo.github}
					target="_blank"
					rel="noopener noreferrer"
					className="transition-colors hover:text-accent-cyan"
				>
					@{personalInfo.githubUsername} →
				</a>
			</p>
		</SectionWrapper>
	)
}
