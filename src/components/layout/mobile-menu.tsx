import { navItems, personalInfo } from "@/data/portfolio-data"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"
import { analytics } from "@/lib/analytics"
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
					className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
					onClick={onClose}
				>
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 26, stiffness: 220 }}
						onClick={e => e.stopPropagation()}
						className="absolute right-0 top-0 flex h-full w-72 flex-col border-l border-line bg-night/95 p-8 backdrop-blur-md"
					>
						<button
							onClick={onClose}
							aria-label="Close menu"
							className="mb-12 self-end text-ink-dim transition-colors hover:text-ink"
						>
							<X size={22} />
						</button>

						<nav className="flex flex-col gap-1">
							{navItems.map(item => (
								<button
									key={item.id}
									onClick={() => handleClick(item.id)}
									className={`rounded-[8px] px-4 py-3 text-left font-mono text-[15px] transition-colors ${
										activeSection === item.id
											? "bg-surface text-gold"
											: "text-ink-dim hover:bg-surface hover:text-ink"
									}`}
								>
									{item.label}
								</button>
							))}
						</nav>

						<a
							href={personalInfo.resumeUrl}
							onClick={() => analytics.downloadCV("mobile")}
							className="mt-6 inline-flex items-center justify-center gap-2 rounded-[8px] border border-line-cv px-4 py-3 font-mono text-[13px] text-ink transition-colors hover:border-gold"
						>
							CV ↓
						</a>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
