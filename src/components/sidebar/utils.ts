import type { ReactNode } from "react"

export type SidebarItem = {
	label: string
	icon?: ReactNode
	inactiveIcon?: ReactNode
	href?: string
	children?: SidebarItem[]
}
