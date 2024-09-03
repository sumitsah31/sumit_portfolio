import Background from "@/components/ui/background"
import type { PropsWithChildren } from "react"
import SidebarContent from "./sidebar-content"
import SidebarFooter from "./sidebar-footer"
import SidebarGroup from "./sidebar-group"
import SidebarGroupHeader from "./sidebar-group-header"
import SidebarGroupItem from "./sidebar-group-item"
import SidebarGroupItemsList from "./sidebar-group-items-list"
import SidebarHeader from "./sidebar-header"
import SidebarProvider from "./sidebar-provider"
import type { SidebarItem } from "./utils"

interface SidebarRootProps extends PropsWithChildren {
	items: Array<SidebarItem>
	level: "dashboard"
}

export default function Sidebar({ level, items, children }: SidebarRootProps) {
	return (
		<SidebarProvider
			items={items}
			level={level}
		>
			<Background
				rounded={false}
				border={false}
				className="flex min-h-screen flex-col"
			>
				{children}
			</Background>
		</SidebarProvider>
	)
}

export { type SidebarItem }

Sidebar.displayName = "Sidebar.Root"
Sidebar.Root = Sidebar
Sidebar.Provider = SidebarProvider
Sidebar.Header = SidebarHeader
Sidebar.Footer = SidebarFooter
Sidebar.Content = SidebarContent
Sidebar.Group = SidebarGroup
Sidebar.GroupHeader = SidebarGroupHeader
Sidebar.GroupItem = SidebarGroupItem
Sidebar.GroupItemsList = SidebarGroupItemsList
