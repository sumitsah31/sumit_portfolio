import { useCallback } from "react"

const NAVBAR_HEIGHT = 80

export function useScrollToSection() {
	return useCallback((sectionId: string) => {
		const el = document.getElementById(sectionId)
		if (!el) return

		const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
		window.scrollTo({ top, behavior: "smooth" })
	}, [])
}
