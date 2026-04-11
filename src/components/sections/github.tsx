import SectionWrapper from "@/components/layout/section-wrapper"
import { personalInfo } from "@/data/portfolio-data"
import { GitHubCalendar } from "react-github-calendar"

const theme = {
	dark: ["#161b22", "#2e1065", "#5b21b6", "#7c3aed", "#a78bfa"],
}

export default function GitHub() {
	return (
		<SectionWrapper id="github">
			<h2 className="mb-12 text-3xl font-bold sm:text-4xl lg:text-5xl">
				GitHub{" "}
				<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
					Activity
				</span>
			</h2>

			<div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
				<GitHubCalendar
					username={personalInfo.githubUsername}
					theme={theme}
					colorScheme="dark"
					blockSize={13}
					blockMargin={4}
					fontSize={14}
				/>
			</div>

			<p className="mt-4 text-center text-sm text-neutral-500">
				<a
					href={personalInfo.github}
					target="_blank"
					rel="noopener noreferrer"
					className="transition-colors hover:text-violet-400"
				>
					@{personalInfo.githubUsername}
				</a>
			</p>
		</SectionWrapper>
	)
}
