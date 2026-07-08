import TerminalHeader from "@/components/ui/terminal-header"
import { navItems } from "@/data/portfolio-data"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"
import { useNavigationStore } from "@/stores/navigation-store"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

interface MobileMenuProps {
	isOpen: boolean
	onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	const activeSection = useNavigationStore(s => s.activeSection)
	const scrollToSection = useScrollToSection()

	const handleClick = (id: string) => {
		scrollToSection(id)
		onClose()
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
				>
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 25, stiffness: 200 }}
						className="absolute right-0 top-0 flex h-full w-72 flex-col border-l border-white/[0.06] bg-[#0a0a0f]/95 p-8 backdrop-blur-md"
					>
						<div className="mb-12 flex items-center justify-between">
							<TerminalHeader path="/menu" />
							<button
								onClick={onClose}
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="Close menu"
							>
								<X size={22} />
							</button>
						</div>

						<nav className="flex flex-col gap-1">
							{navItems.map(item => (
								<button
									key={item.id}
									onClick={() => handleClick(item.id)}
									className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left font-mono text-sm uppercase tracking-wider transition-colors ${
										activeSection === item.id
											? "bg-accent-cyan/10 text-accent-cyan"
											: "text-muted-foreground hover:bg-surface hover:text-foreground"
									}`}
								>
									<span className="text-accent-cyan/70">//</span>
									{item.label}
								</button>
							))}
						</nav>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
