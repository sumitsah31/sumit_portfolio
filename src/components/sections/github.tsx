import SectionWrapper from "@/components/layout/section-wrapper"
import { personalInfo } from "@/data/portfolio-data"
import { cloneElement, useEffect, useState } from "react"
import { GitHubCalendar } from "react-github-calendar"

// Gold contribution ramp (level 0 → 4) from the design tokens.
const RAMP: string[] = ["#1d1a16", "#4a3d24", "#7a5f2e", "#b3893a", "#e0a94a"]

const theme = { dark: RAMP }

export default function GitHub() {
	const [total, setTotal] = useState<number | null>(null)

	// Fetch the yearly total independently so we can render it in the header
	// with the design's serif treatment. (The calendar renders its own grid
	// from the same public API.)
	useEffect(() => {
		let cancelled = false
		fetch(
			`https://github-contributions-api.jogruber.de/v4/${personalInfo.githubUsername}?y=last`,
		)
			.then(res => (res.ok ? res.json() : null))
			.then((json: { contributions?: { count: number }[] } | null) => {
				if (cancelled || !json?.contributions) return
				setTotal(json.contributions.reduce((sum, day) => sum + day.count, 0))
			})
			.catch(() => {
				/* calendar shows its own error state */
			})
		return () => {
			cancelled = true
		}
	}, [])

	return (
		<SectionWrapper
			id="github"
			className="pb-6 pt-16"
		>
			<div className="mb-9 flex items-baseline gap-[14px]">
				<span className="font-mono text-[13px] text-gold">04</span>
				<h2 className="m-0 font-serif text-[34px] font-normal sm:text-[46px]">
					GitHub Activity
				</h2>
			</div>

			<div className="rounded-[14px] border border-line bg-surface px-[30px] py-7">
				<div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
					<div className="text-[15px] text-ink-list">
						<span className="font-serif text-[26px] text-ink">
							{total !== null ? total.toLocaleString() : "—"}
						</span>{" "}
						contributions in the last year
					</div>
					<a
						href={personalInfo.github}
						target="_blank"
						rel="noopener noreferrer"
						className="font-mono text-[12.5px] text-gold transition-colors hover:text-gold-hover"
					>
						@{personalInfo.githubUsername} ↗
					</a>
				</div>

				<div className="overflow-x-auto pb-1 text-ink-faint">
					<GitHubCalendar
						username={personalInfo.githubUsername}
						theme={theme}
						colorScheme="dark"
						blockSize={13}
						blockMargin={3}
						blockRadius={3}
						fontSize={11}
						showColorLegend={false}
						showTotalCount={false}
						renderBlock={(block, activity) =>
							cloneElement(
								block,
								undefined,
								<title>
									{activity.count === 0
										? "No contributions"
										: `${activity.count} contribution${
												activity.count === 1 ? "" : "s"
											} on ${activity.date}`}
								</title>,
							)
						}
						errorMessage="Couldn't load GitHub activity right now."
					/>
				</div>

				<div className="mt-3.5 flex items-center justify-end gap-1.5 font-mono text-[10.5px] text-ink-faint">
					<span>Less</span>
					<span className="inline-block h-3 w-3 rounded-[3px] border border-line-chip bg-surface" />
					<span className="inline-block h-3 w-3 rounded-[3px] bg-[#4a3d24]" />
					<span className="inline-block h-3 w-3 rounded-[3px] bg-[#7a5f2e]" />
					<span className="inline-block h-3 w-3 rounded-[3px] bg-[#b3893a]" />
					<span className="inline-block h-3 w-3 rounded-[3px] bg-gold" />
					<span>More</span>
				</div>
			</div>
		</SectionWrapper>
	)
}
