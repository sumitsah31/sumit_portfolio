import homeImage from "@/assets/homeImage.jpg"
import { personalInfo, siteConfig } from "@/data/portfolio-data"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"

export default function Hero() {
	const scrollToSection = useScrollToSection()

	return (
		<div
			id="top"
			className="relative overflow-hidden"
		>
			{/* Dotted grid, radially masked */}
			<div className="pointer-events-none absolute inset-0 [-webkit-mask-image:radial-gradient(circle_at_28%_25%,#000_0%,transparent_68%)] [background-image:linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(circle_at_28%_25%,#000_0%,transparent_68%)]" />

			<div className="relative mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-24 sm:px-10 lg:grid-cols-[1.5fr_0.85fr] lg:gap-[60px] lg:pb-[84px] lg:pt-28">
				<div>
					<div className="mb-[26px] font-mono text-[13px] text-gold">
						// full-stack web developer · Bengaluru, IN
					</div>
					<h1 className="mb-[26px] font-serif text-[44px] font-normal leading-[1.02] tracking-[-0.01em] sm:text-[64px] lg:text-[92px] lg:leading-[0.98]">
						Sumit Kumar Sah
					</h1>
					<p className="mb-9 max-w-[34em] text-[17px] leading-[1.6] text-ink-muted sm:text-[19px]">
						I build scalable, performant web applications with{" "}
						<span className="font-semibold text-ink">React</span>,{" "}
						<span className="font-semibold text-ink">TypeScript</span> and{" "}
						<span className="font-semibold text-ink">Next.js</span> — dynamic
						interfaces on the front, solid server logic underneath. Author of{" "}
						<span className="text-gold">@codapet/design-system</span>.
					</p>
					<div className="flex flex-wrap items-center gap-[14px]">
						<button
							onClick={() => scrollToSection("work")}
							className="inline-flex items-center gap-2.5 rounded-[8px] bg-gold px-[26px] py-[15px] text-[14px] font-semibold text-night transition-colors hover:bg-gold-hover"
						>
							View work →
						</button>
						<a
							href={personalInfo.resumeUrl}
							className="inline-flex items-center gap-2.5 rounded-[8px] border border-line-cv px-[26px] py-[14px] text-[14px] font-semibold text-ink transition-colors hover:border-gold"
						>
							Download CV ↓
						</a>
						{siteConfig.available && (
							<span className="ml-1.5 inline-flex items-center gap-2 font-mono text-[12px] text-ink-dim">
								<span className="inline-block h-[7px] w-[7px] rounded-full bg-online shadow-[0_0_10px_#7bd88f]" />
								available for senior roles
							</span>
						)}
					</div>
				</div>

				<div className="relative order-first mx-auto w-full max-w-[340px] lg:order-none lg:max-w-none">
					<div className="absolute inset-[-1px] rounded-[14px] bg-[linear-gradient(160deg,#e0a94a55,transparent)]" />
					<img
						src={homeImage}
						alt="Sumit Kumar Sah"
						className="relative aspect-[3/3.6] w-full rounded-[13px] object-cover object-[center_18%] [filter:grayscale(0.35)_contrast(1.05)_brightness(0.92)]"
					/>
				</div>
			</div>
		</div>
	)
}
