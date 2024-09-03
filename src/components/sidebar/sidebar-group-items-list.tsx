import type { PropsWithChildren } from "react"

export default function SidebarGroupItemsList({ children }: PropsWithChildren) {
	return <div className="flex flex-col gap-y-1 tracking-normal">{children}</div>
}

SidebarGroupItemsList.displayName = "Sidebar.GroupItemsList"
