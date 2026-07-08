import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface SectionWrapperProps {
	id: string
	children: ReactNode
	/** Extra classes applied to the inner max-width container (e.g. padding). */
	className?: string
}

export default function SectionWrapper({
	id,
	children,
	className,
}: SectionWrapperProps) {
	return (
		<section
			id={id}
			className="scroll-mt-24"
		>
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
				className={cn("mx-auto max-w-[1160px] px-6 sm:px-10", className)}
			>
				{children}
			</motion.div>
		</section>
	)
}
