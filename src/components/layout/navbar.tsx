import { navItems, personalInfo } from "@/data/portfolio-data"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"
import { cn } from "@/lib/utils"
import { useNavigationStore } from "@/stores/navigation-store"
import { Menu } from "lucide-react"
import { useState } from "react"
import MobileMenu from "./mobile-menu"

function BrandMark({ onClick }: { onClick: () => void }) {
	return (
		<button
			onClick={onClick}
			aria-label="Back to top"
			className="inline-flex items-baseline gap-[3px]"
		>
			<span className="font-mono text-[23px] leading-none text-brace">
				{"{"}
			</span>
			<span className="font-serif text-[25px] font-medium italic leading-[0.85] tracking-[-0.02em] text-gold">
				sks
			</span>
			<span className="ml-0.5 font-mono text-[11px] font-medium tracking-[0.1em] text-ink-dim">
				dev
			</span>
			<span className="ml-0.5 font-mono text-[23px] leading-none text-brace">
				{"}"}
			</span>
		</button>
	)
}

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false)
	const activeSection = useNavigationStore(s => s.activeSection)
	const scrollToSection = useScrollToSection()

	return (
		<>
			<header className="sticky top-0 z-50 border-b border-line bg-night/80 backdrop-blur-[10px]">
				<div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-5 sm:px-10">
					<BrandMark onClick={() => scrollToSection("top")} />

					{/* Desktop nav */}
					<nav className="hidden items-center gap-[30px] lg:flex">
						{navItems.map(item => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={cn(
									"font-mono text-[12.5px] transition-colors hover:text-gold",
									activeSection === item.id ? "text-gold" : "text-ink-dim",
								)}
							>
								{item.label}
							</button>
						))}
					</nav>

					{/* CV button (desktop) */}
					<a
						href={personalInfo.resumeUrl}
						className="hidden items-center gap-2 rounded-[8px] border border-line-cv px-3.5 py-2 font-mono text-[12.5px] text-ink transition-colors hover:border-gold lg:inline-flex"
					>
						CV ↓
					</a>

					{/* Mobile hamburger */}
					<button
						onClick={() => setMobileOpen(true)}
						aria-label="Open menu"
						className="text-ink-dim transition-colors hover:text-ink lg:hidden"
					>
						<Menu size={22} />
					</button>
				</div>
			</header>

			<MobileMenu
				isOpen={mobileOpen}
				onClose={() => setMobileOpen(false)}
			/>
		</>
	)
}
