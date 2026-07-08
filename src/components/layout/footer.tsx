import { personalInfo } from "@/data/portfolio-data"

export default function Footer() {
	return (
		<footer className="relative mt-16 overflow-hidden border-t border-white/[0.06] pt-16">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Top mono row */}
				<div className="flex flex-col gap-4 pb-12 sm:flex-row sm:items-center sm:justify-between">
					<div className="grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:grid-cols-3">
						<div>
							<p className="mb-2 text-foreground/60">// elsewhere</p>
							<ul className="space-y-1.5">
								<li>
									<a
										href={personalInfo.github}
										target="_blank"
										rel="noopener noreferrer"
										className="transition-colors hover:text-accent-cyan"
									>
										GitHub
									</a>
								</li>
								<li>
									<a
										href={personalInfo.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="transition-colors hover:text-accent-cyan"
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
						<div>
							<p className="mb-2 text-foreground/60">// reach</p>
							<ul className="space-y-1.5">
								<li>
									<a
										href={`mailto:${personalInfo.email}`}
										className="transition-colors hover:text-accent-cyan"
									>
										email
									</a>
								</li>
								<li>
									<a
										href={`tel:${personalInfo.phone}`}
										className="transition-colors hover:text-accent-cyan"
									>
										phone
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-2 sm:col-span-1">
							<p className="mb-2 text-foreground/60">// based in</p>
							<p>{personalInfo.location}</p>
						</div>
					</div>
				</div>

				{/* Big watermark name */}
				<div className="relative -mb-4 select-none overflow-hidden">
					<p
						aria-hidden
						className="bg-gradient-to-b from-foreground/15 to-foreground/[0.03] bg-clip-text text-center font-serif italic leading-[0.85] text-transparent"
						style={{
							fontSize: "clamp(5rem, 22vw, 18rem)",
						}}
					>
						Sumit.
					</p>
				</div>

				{/* Bottom row */}
				<div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] py-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:flex-row">
					<p>
						© {new Date().getFullYear()} Sumit Kumar Sah · all quietly
						returning
					</p>
					<p>built with React + Tailwind</p>
				</div>
			</div>
		</footer>
	)
}
