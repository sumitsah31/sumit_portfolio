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
						className="absolute right-0 top-0 flex h-full w-72 flex-col bg-[#0a0a0f]/95 p-8 backdrop-blur-md"
					>
						<button
							onClick={onClose}
							className="mb-12 self-end text-neutral-400 transition-colors hover:text-white"
						>
							<X size={24} />
						</button>

						<nav className="flex flex-col gap-2">
							{navItems.map(item => (
								<button
									key={item.id}
									onClick={() => handleClick(item.id)}
									className={`rounded-lg px-4 py-3 text-left text-lg font-medium transition-colors ${
										activeSection === item.id
											? "bg-violet-500/10 text-violet-400"
											: "text-neutral-400 hover:bg-white/5 hover:text-white"
									}`}
								>
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
