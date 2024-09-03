import { cn } from "@/lib/utils"
import { Link, useLocation } from "@tanstack/react-router"
import type { SidebarItem } from "./utils"

interface SidebarGroupItemProps {
	child: SidebarItem
}

export default function SidebarGroupItem({ child }: SidebarGroupItemProps) {
	const { pathname } = useLocation()
	const isActive = pathname.split("/").includes(child.href!)

	return (
		<Link
			key={child.label}
			to={`/${child.href}`}
			className={cn(
				"group flex items-center rounded-md text-sm transition-all duration-200 ease-in-out",
				"justify-between p-3 hover:bg-slate-100",
				isActive && "bg-[#C4DCF7]/40 font-medium hover:bg-[#C4DCF7]/65",
			)}
		>
			<span
				className={cn(
					"flex items-center space-x-3",
					isActive ? "text-blue-800" : "text-slate-600",
				)}
			>
				{/* Icon */}
				{isActive ? child.icon : child.inactiveIcon}

				{/* Label */}
				<span
					className={cn(
						isActive ? "text-blue-800 group-hover:text-blue-800" : "",
					)}
				>
					{child.label}
				</span>
			</span>
		</Link>
	)
}

SidebarGroupItem.displayName = "Sidebar.GroupItem"
