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
			<header className="fixed left-0 right-0 top-[3px] z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
				<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
					<button
						onClick={() => scrollToSection("hero")}
						className="text-xl font-bold tracking-tight"
					>
						<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
							SK
						</span>
					</button>

					{/* Desktop nav */}
					<nav className="hidden items-center gap-1 lg:flex">
						{navItems.map(item => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className="relative px-4 py-2 text-sm font-medium transition-colors"
							>
								<span
									className={
										activeSection === item.id
											? "text-white"
											: "text-neutral-400 hover:text-white"
									}
								>
									{item.label}
								</span>
								{activeSection === item.id && (
									<motion.div
										layoutId="activeSection"
										className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-400"
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
						className="text-neutral-400 transition-colors hover:text-white lg:hidden"
					>
						<Menu size={24} />
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
