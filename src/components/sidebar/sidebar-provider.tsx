import type { PropsWithChildren } from "react"
import { SidebarStore } from "./store"
import type { SidebarItem } from "./utils"

interface SidebarProviderProps extends PropsWithChildren {
	items: Array<SidebarItem>
	level: "dashboard"
}

export default function SidebarProvider({
	children,
	items,
	level,
}: SidebarProviderProps) {
	return (
		<SidebarStore.Provider
			initialValue={{
				items,
				level,
			}}
		>
			{children}
		</SidebarStore.Provider>
	)
}

SidebarProvider.displayName = "Sidebar.Provider"
