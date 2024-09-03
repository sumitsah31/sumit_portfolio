import { createStore } from "zustand"
import type { SidebarItem } from "./utils"
import { createZustandContext } from "./z-ctx"

type SidebarState = {
	items: Array<SidebarItem>
	level: "orgs" | "apps" | "dashboard"
}

export const SidebarStore = createZustandContext(
	(initialState: { items: Array<SidebarItem>; level: "dashboard" }) => {
		return createStore<SidebarState>()(() => ({
			items: initialState.items,
			level: initialState.level,
		}))
	},
)
