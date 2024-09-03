import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
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
		<ScrollArea
			className={cn(
				"my-2.5 flex min-w-56 grow flex-col gap-y-5 overflow-y-hidden px-4 hover:overflow-y-auto",
				"h-[calc(100vh-19rem)]",
			)}
		>
			{children({ groups: dashboardLevelSidebarItems })}
		</ScrollArea>
	)
}

SidebarContent.displayName = "Sidebar.Content"
