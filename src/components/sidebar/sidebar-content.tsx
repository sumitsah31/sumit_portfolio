import { ScrollArea } from "@/components/ui/scroll-area"
import type { ReactNode } from "react"
import { dashboardLevelSidebarItems } from "../sidebars/data"
import type { SidebarItem } from "./utils"

interface SidebarContentRenderProps {
	groups: Array<SidebarItem>
}

interface SidebarContentProps {
	children: (props: SidebarContentRenderProps) => ReactNode
}

export default function SidebarContent({ children }: SidebarContentProps) {
	return (
		<ScrollArea>{children({ groups: dashboardLevelSidebarItems })}</ScrollArea>
	)
}

SidebarContent.displayName = "Sidebar.Content"
