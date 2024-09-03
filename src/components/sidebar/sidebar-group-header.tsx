import type { SidebarItem } from "./utils"

interface SidebarGroupHeaderProps {
	item: SidebarItem
}

export default function SidebarGroupHeader({ item }: SidebarGroupHeaderProps) {
	return (
		<div className="flex items-center justify-between px-3 py-1.5">
			<span className="text-sm font-normal text-slate-400">{item.label}</span>
		</div>
	)
}

SidebarGroupHeader.displayName = "Sidebar.GroupHeader"
