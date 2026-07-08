import { useEffect } from "react"
import { useNavigationStore } from "@/stores/navigation-store"

const SECTION_IDS = ["work", "experience", "skills", "github", "contact"]

export function useActiveSection() {
	const setActiveSection = useNavigationStore(s => s.setActiveSection)

	useEffect(() => {
		const observers: IntersectionObserver[] = []

		SECTION_IDS.forEach(id => {
			const el = document.getElementById(id)
			if (!el) return

			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							setActiveSection(id)
						}
					})
				},
				{
					rootMargin: "-80px 0px -50% 0px",
					threshold: 0,
				},
			)

			observer.observe(el)
			observers.push(observer)
		})

		return () => {
			observers.forEach(o => o.disconnect())
		}
	}, [setActiveSection])
}
