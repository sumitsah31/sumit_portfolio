import { stats } from "@/data/portfolio-data"

export default function Stats() {
	return (
		<section className="border-y border-line font-mono">
			<div className="mx-auto grid max-w-[1160px] grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
				{stats.map(stat => (
					<div
						key={stat.label}
						className="px-6 py-[26px] sm:px-8"
					>
						<div className="mb-1.5 text-[12px] text-ink-dim">{stat.label}</div>
						<div className="font-serif text-[30px] leading-none text-ink">
							{stat.value}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
