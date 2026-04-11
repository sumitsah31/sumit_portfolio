import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface SectionWrapperProps {
	id: string
	children: ReactNode
	className?: string
	fullHeight?: boolean
}

export default function SectionWrapper({
	id,
	children,
	className,
	fullHeight,
}: SectionWrapperProps) {
	return (
		<section
			id={id}
			className={cn(
				"scroll-mt-20 px-4 sm:px-6 lg:px-8",
				fullHeight ? "min-h-screen" : "py-24 lg:py-32",
				className,
			)}
		>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true, margin: "-100px" }}
				className="mx-auto max-w-6xl"
			>
				{children}
			</motion.div>
		</section>
	)
}
