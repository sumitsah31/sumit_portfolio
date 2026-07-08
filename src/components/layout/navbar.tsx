import TerminalHeader from "@/components/ui/terminal-header"
import { navItems } from "@/data/portfolio-data"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"
import { useNavigationStore } from "@/stores/navigation-store"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { useState } from "react"
import MobileMenu from "./mobile-menu"

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false)
	const activeSection = useNavigationStore(s => s.activeSection)
	const scrollToSection = useScrollToSection()

	return (
		<>
			<header className="fixed left-0 right-0 top-[3px] z-50 border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-md">
				<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
					<button
						onClick={() => scrollToSection("hero")}
						className="transition-opacity hover:opacity-80"
						aria-label="Home"
					>
						<TerminalHeader path="/menu" />
					</button>

					{/* Desktop nav */}
					<nav className="hidden items-center gap-1 lg:flex">
						{navItems.map(item => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className="relative px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors"
							>
								<span
									className={
										activeSection === item.id
											? "text-accent-cyan"
											: "text-muted-foreground hover:text-foreground"
									}
								>
									{item.label}
								</span>
								{activeSection === item.id && (
									<motion.div
										layoutId="activeSection"
										className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-accent-cyan"
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}
									/>
								)}
							</button>
						))}
					</nav>

					{/* Mobile hamburger */}
					<button
						onClick={() => setMobileOpen(true)}
						className="text-muted-foreground transition-colors hover:text-foreground lg:hidden"
						aria-label="Open menu"
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
